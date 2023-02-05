import { segment } from "oicq";
import fetch from "node-fetch";
import lodash from 'lodash'
// 使用方法：
// #查Q绑+QQ号，带不带#都行,Q要大写
//拦雨逝着写了一下



//1.定义命令规则
export class example extends plugin {
  constructor() {
    super({
      /** 功能名称 */
      name: '查Q绑',
      /** 功能描述 */
      dsc: '查询QQ号的密保手机',
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 3999,
      rule: [
        {
          /** 命令正则匹配 */
          reg: "^#*查Q绑(.*)$",
          /** 执行方法 */
          fnc: 'chaqbang'
        },
      ]
    })
  }

  //执行方法
  async chaqbang(e) {
    let qq = e.message.filter(item => item.type == 'at')?.map(item => item?.qq)
    console.log(qq);
    if (lodash.isEmpty(qq)) {
      qq = e.msg.match(/\d+/g)
    }
    if (!qq) qq = [e.user_id]
    for (let i of qq) {
      let url = `https://zy.xywlapi.cc/qqapi?qq=${i}`;
      let response = await fetch(url);
      let res = await response.json();
      let msg = [
        `查询QQ：${i}\n`,
        "查询状态：", segment.text(res.message), "\n",
        "密保手机号：", segment.text(res.phone), "\n",
        "手机号所属地区：", segment.text(res.phonediqu), "\n",
      ];
      //发出消息
      await e.reply(msg);
    }


    return true; //返回true 阻挡消息不再往下
  }

}
