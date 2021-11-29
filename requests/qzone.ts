import axios from 'axios'
import getGTk from '../utils/getGTk'
import GetFeedRet from '../types/GetFeedRet.'
import Cookies from '../types/Cookies'
import GetDetailRet from '../types/GetDetailRet'

export default {
    async getFeed(cookies: Cookies, uin: number) {
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

    async getDetail(cookies: Cookies, uin: number, threadId: string) {
        const gTk = getGTk(cookies.p_skey)
        console.log(cookies)
        console.log(gTk)
        return ((await axios.get(`https://h5.qzone.qq.com/webapp/json/mqzone_detail/shuoshuo?g_tk=${gTk}&appid=311&uin=${uin}&count=20&refresh_type=31&cellid=${threadId}&subid=&format=json`, {
            headers: {
                Cookie: `p_uin=${cookies.p_uin}; p_skey=${cookies.p_skey};`,
            },
            responseType: 'json',
        })).data as GetDetailRet).data
    },
}
