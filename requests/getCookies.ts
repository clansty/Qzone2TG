import axios from 'axios'
import config from '../providers/config'
import getCharCount from '../utils/getCharCount'
import Cookies from '../types/Cookies'

export default async () => {
    const res = await axios.post(config.onebot.api + '/getCookies', {
        domain: 'qzone.qq.com',
    }, {
        auth: config.onebot.auth,
    })

    const strCookies = res.data.data.cookies
    if (getCharCount(strCookies, ';') < 2)
        return null
    const cookies = strCookies.split(';', 4)
    const ret: Cookies = {
        uin: cookies[0].substr(4),
        skey: cookies[1].trim().substr(5),
    }
    if (getCharCount(strCookies, ';') === 4) {
        ret.p_uin = cookies[2].trim().substr(6)
        ret.p_skey = cookies[3].trim().substr(7)
    }
    return ret
}


