import qzone from './requests/qzone'
import config from './providers/config'
import getCookies from './requests/getCookies'

(async () => {
    const cookies = await getCookies()
    console.log(await qzone.getDetail(cookies, config.forwards[0].qq, '05eabbb1e8b6a4618e4e0b00'))
})()
