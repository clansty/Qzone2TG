import ForwardInfo from '../types/ForwardInfo'
import fs from 'fs'
import YAML from 'yaml'

interface Config {
    onebot: {
        api: string
        auth: {
            username: string
            password: string
        }
    }
    tgBotToken: string
    forwards: Array<ForwardInfo>
    refreshInterval: number
}

export default YAML.parse(fs.readFileSync('./config.yaml', 'utf8')) as Config
