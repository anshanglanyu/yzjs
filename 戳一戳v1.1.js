import plugin from '../../lib/plugins/plugin.js'
import{segment}from'oicq'
import cfg from '../../lib/config/config.js'
import common from '../../lib/common/common.js'


const _path = process.cwd();


export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '戳一戳',
      /** 功能描述 */
      dsc: '拦雨新添加了亿些回复',
      /** https://oicqjs.github.io0-/oicq/#events */
      event: 'notice.group.poke',
      /** 优先级，数字越小等级越高 */
      priority: 1,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '.*',
          /** 执行方法 */
          fnc: 'chuochuo'
        }
      ]
    })
  }
/*
就在这里记录一下拦雨和根安的定制吧，如果想使用此插件的话记得删掉或改掉
第17，31，32，36种回复

回复模板不知道写在哪里，就也写在这里好了，如果想魔改的话直接套用这个模板就好
    }else if(num == 第几种结果){
      e.reply(`回复文本`);
*/
  async chuochuo (e) {
    

    if(e.target_id == cfg.qq){
      
    
    let num = Math.ceil(Math.random() * 40);//这个数字是结果数，要和回复模板数量一致
    
 if(num == 1){
  e.reply(`不可以戳戳>_<`);
}else if(num == 2){
  e.reply(`不要戳了，再戳就坏掉啦>_<`);
}else if(num == 4){
  e.reply(`正在关闭对您的所有服务...关闭成功`)
}else if(num == 5){
  e.reply(`连个可爱美少女都要戳的肥宅真恶心啊`);
}else if(num == 6){
  e.reply(`可恶，该死的咸猪手`);
}else if(num == 7){
  e.reply(`小朋友别戳了`);
}else if(num == 8){
  e.reply(`正在定位您的真实地址...定位成功。轰炸机已起飞`);
}else if(num == 9){
  e.reply(`是不是要可爱的我，揍你一顿才开心，哼`);
}else if(num == 10){
  e.reply(`怎么会有你这么无聊的人啊˃◡˂`);
}else if(num == 11){
  e.reply(`讨厌死了，你好烦啊，不陪你玩了`);
}else if(num == 12){
  e.reply(`不要再戳了！我真的要被你气死了>_<`);
}else if(num == 13){
  e.reply(`你戳谁呢！你戳谁呢~哼`);
}else if(num == 14){
  e.reply(`不要再戳了！`);
}else if(num == 15){
  e.reply(`你小子是油盐不进啊•᷄ࡇ•᷅`);
}else if(num == 16){
  e.reply(`你戳的我有点开心奖励你哦`);
}else if(num == 17){
  e.reply(`请住手~根安今天已经被戳了很多次了`);
}else if(num == 18){
  e.reply(`我可不是好欺负的！`);
}else if(num == 19){
  e.reply(`你戳什么东西呢！`);
}else if(num == 20){
  e.reply(`哇，你这个人`);
}else if(num == 22){
  e.reply(`fuck！就知道戳是吧`);
}else if(num == 23){
  e.reply(`吃饱喝饱，一路走好！`);
}else if(num == 24){
  e.reply(`害怕.jpg`);
}else if(num == 25){
  e.reply(`你不要过来啊！！`);
}else if(num == 26){
  e.reply(`歪，110吗？这里有变态一直戳我`);
}else if(num == 27){
  e.reply(`今天天气真好啊~电闪雷鸣，乌云密布，很适合外出散步呢`);
}else if(num == 28){
  e.reply(`旅行者副本零掉落，旅行者深渊打不过，旅行者抽卡全保底，旅行者小保底必歪`);
}else if(num == 29){
  e.reply(`嘘~今晚来我房间(♡⌂♡)`);
}else if(num == 30){
  e.reply(`(ꐦÒ‸Ó)你个老六`);
}else if(num == 31){
  e.reply(`拦雨~它欺负我~`);
}else if(num == 32){
  e.reply(`等我叫拦雨过来打洗你￣へ￣`);
}else if(num == 35){
  e.reply(`可恶啊，又被戳了！`);
}else if(num == 36){
  e.reply(`不和你玩了，我要找拦雨告状去，让拦雨打洗你`);
}else if(num == 37){
  e.reply(`作业写完了吗就戳我，写作业去！`);
}else if(num == 38){
  e.reply(`睡觉去，不要熬夜了！才，才没有在关心你`);
}else if(num == 39){
  e.reply(`(„ಡωಡ„)栓Q`);
}else if(num == 40){
  e.reply(`今天的努力只为明天的收获`);//苏大叔的谆谆教导（可恶啊，做这个东西的时侯被家长看到了，直接来了40分钟的思想教育啊）
}else if(num == 3){
  e.reply(`戳回去,嘿嘿`);
  await common.sleep(1000);
  e.group.pokeMember(e.operator_id);
}else if(num == 34){
  e.reply(`反击！`);
  await common.sleep(1000);
  e.group.pokeMember(e.operator_id);
}else if(num == 33){
  e.reply('敢戳我？小黑屋待着去吧你，哼！')
  await common.sleep(1000);
  e.group.muteMember(e.operator_id,60)
}else if(num == 21){
  e.reply(`不！！`);
  await common.sleep(1000);
  e.reply(`准！！`);
  await common.sleep(1000);
  e.reply(`戳！！`);
  await common.sleep(1000);
  e.group.muteMember(e.operator_id,60)


}
  return true
  }
}
}

