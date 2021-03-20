/*CMD
  command: /faket
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
_Enter the amount of fake members :_

Ex. 10 (10 members)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let depo = Libs.ResourcesLib.anotherChatRes("tota", "global")
depo.add(1*message)
Bot.sendMessage("_Fake total users increased by "+message+" members_")
}else{
return
}
