/*CMD
  command: /fakew
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
_Enter the amount of fake withdrawn :_

Ex. 10 (10 TRX)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let depo = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
depo.add(1*message)
Bot.sendMessage("_Fake total withdrawn increased by "+message+" TRX_")
}else{
return
}
