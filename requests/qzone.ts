import axios from 'axios'
import getCookies from './getCookies'
import getGTk from '../utils/getGTk'
import GetFeedRet from '../types/GetFeedRet'

export default {
    async getFeed(uin: number) {
        const cookies = await getCookies()
        const gTk = getGTk(cookies.p_skey)
        console.log(cookies)
        console.log(gTk)
        // console.log(`https://user.qzone.qq.com/proxy/domain/taotao.qq.com/cgi-bin/emotion_cgi_msglist_v6?uin=${uin}&ftype=0&sort=0&pos=0&num=20&replynum=100&g_tk=${gTk}&callback=_preloadCallback&code_version=1&format=json&need_private_comment=1`)
        // console.log(`https://mobile.qzone.qq.com/get_feeds?g_tk=${gTk}&hostuin=${uin}&res_type=2&format=json`)
        return (await axios.get(`https://user.qzone.qq.com/proxy/domain/taotao.qq.com/cgi-bin/emotion_cgi_msglist_v6?uin=${uin}&num=20&g_tk=${gTk}&code_version=1&format=json`, {
            headers: {
                Cookie: `p_uin=${cookies.p_uin}; p_skey=${cookies.p_skey};`,
            },
            responseType: 'json',
        })).data.msglist as GetFeedRet[]
    },
}
