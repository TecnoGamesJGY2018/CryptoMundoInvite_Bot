/*CMD
  command: /sendgift
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 🆔️ _Enter User ID To Send Gift :_
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb2");
}else{
return
}

//You need to send user id after running this command
