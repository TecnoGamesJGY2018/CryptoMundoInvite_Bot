/*CMD
  command: /checkbal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: Send User ID To Check Balance :
  keyboard: 
  aliases: 
CMD*/

let msg = message
var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let check = Libs.ResourcesLib.anotherUserRes("balance", msg)
let refc = Libs.ResourcesLib.anotherUserRes("refcom", msg)
let withdraw = Libs.ResourcesLib.anotherUserRes("withdraw", msg)

Bot.sendMessage( "\nUser ID: "+msg+"\n\n*š° Account Balance:* "+ check.value().toFixed(8) +" *TRX\nš° Earned From Ref:* "+refc.value().toFixed(8)+" *TRX\nš° Total Withdrawn:* "+ withdraw.value().toFixed(8)+ " *TRX*" );
}else{
return
}
