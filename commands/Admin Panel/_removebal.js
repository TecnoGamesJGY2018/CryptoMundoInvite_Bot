/*CMD
  command: /removebal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: ⛔ Enter User ID To Remove Balance
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb6");
}else{
return
}
//You need to send user id after running this command
