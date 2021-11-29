import qzone from './requests/qzone'
import config from './providers/config'
import getCookies from './requests/getCookies'
import * as log from './utils/log'
import TelegramBot, {InputMediaPhoto} from 'node-telegram-bot-api'

// TG 的 bot 实例
const tgBot = new TelegramBot(config.tgBotToken, {polling: false})

// 存放已经同步过的 tID 列表
const syncedIds = new Map<number, Array<string>>()
for (const forwardInfo of config.forwards) {
    syncedIds.set(forwardInfo.qq, [])
}

// 获取已有的 tID 列表，这些不会被转发
const saveExistedIds = async () => {
    const cookies = await getCookies()
    for (const {qq} of config.forwards) {
        try {
            log.info(`正在获取 ${qq} 的已有 tID 列表...`)
            const threads = await qzone.getFeed(cookies, qq)
            syncedIds.get(qq).push(...threads.map(thread => thread.tid))
            log.success(`已获取 ${qq} 共 ${threads.length} 条动态`)
        } catch (e) {
            log.error(`获取 ${qq} 的已有 tID 列表失败，原因：${e.message}`)
        }
    }
}

// 每一次同步动态的过程
const syncThreads = async () => {
    const cookies = await getCookies()
    for (const {qq, tg} of config.forwards) {
        try {
            log.info(`正在获取 ${qq} 的动态...`)
            const threads = await qzone.getFeed(cookies, qq)
            const existedIds = syncedIds.get(qq)
            for (const thread of threads) {
                if (existedIds.includes(thread.tid)) {
                    continue
                }
                log.info(`正在转发 ${qq} 的动态 ${thread.tid}...`)
                let content = thread.content
                // 如果文本过长被缩略了，需要获取完整的文本
                if (thread.has_more_con) {
                    try {
                        log.info(`正在获取 ${qq} 的动态 ${thread.tid} 的详情...`)
                        const detail = await qzone.getDetail(cookies, qq, thread.tid)
                        content = detail.cell_summary.summary
                    } catch (e) {
                        log.error(`获取 ${qq} 的动态 ${thread.tid} 的详情失败，原因：${e.message}`)
                    }
                }
                // 获取图片
                const images = thread.pic ? thread.pic.map(image => image.url1.replace(/\\\//g, '/')) : null
                // 转发到 TG
                try{
                    if (images) {
                        const group: InputMediaPhoto[] = []
                        let caption = content
                        for (const image of images) {
                            group.push({
                                media: image,
                                type: 'photo',
                                caption,
                            })
                            caption = undefined
                        }
                        await tgBot.sendMediaGroup(tg, group)
                    }
                    else {
                        await tgBot.sendMessage(tg, content)
                    }
                    existedIds.push(thread.tid)
                }
                catch (e) {
                    log.error(`转发 ${qq} 的动态 ${thread.tid} 失败，原因：${e.message}`)
                }
            }
            log.success(`${qq} 动态同步完成`)
        } catch (e) {
            log.error(`获取 ${qq} 的动态失败，原因：${e.message}`)
        }
    }
}

(async () => {
    await saveExistedIds()
    setInterval(syncThreads, config.refreshInterval * 1000)
})()
