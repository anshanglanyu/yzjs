import plugin from '../../lib/plugins/plugin.js'
import fetch from 'node-fetch'
import { segment } from "oicq";



export class example extends plugin {
  constructor () {
    super({
      name: '百度百科',
      dsc: '复活吧，我的插件',
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 4999,
      rule: [
        {
          reg: '^#?#百科(.*)$',
          fnc: 'bdbk'
        }
      ]
    })
  }


  async bdbk (e) {
    //logger.info('[用户命令]', e.msg)
    let msg = e.msg.replace("#百科","").trim()
    msg = msg.split(" ")
        let url = `http://ovooa.com/API/bdbk/?Msg=${msg}`
        let response = await fetch(url);
        let res = await response.json();
        if (res.code == -2) {
          let wuneng = [segment.text("才不是找不到呢，只是。。只是不想帮你找而已",segment.face(23))]
          await this.reply(wuneng)
        }
        else if (res.code == -1) {
          let wuliao = [segment.text("你想让我帮你找什么啊，莫不是特地来消遣洒家的",segment.face(23))]
          await this.reply(wuliao)
          }
        else if (res.code == 1) {
        let huifu = [
          segment.text(res.data.info), "\n",
          segment.text(res.data.url), "\n",
        ]
        await this.reply(huifu)
      }
    }
  }
