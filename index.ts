import qzone from './requests/qzone'
import config from './providers/config'

(async () => {
    console.log(await qzone.getFeed(config.forwards[0].qq))
})()
