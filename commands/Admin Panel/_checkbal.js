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

Bot.sendMessage( "\nUser ID: "+msg+"\n\n*🔰 Account Balance:* "+ check.value().toFixed(8) +" *TRX\n🔰 Earned From Ref:* "+refc.value().toFixed(8)+" *TRX\n🔰 Total Withdrawn:* "+ withdraw.value().toFixed(8)+ " *TRX*" );
}else{
return
}
