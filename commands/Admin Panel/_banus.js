/*CMD
  command: /banus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 🚫 _Enter User ID To Ban :_
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "ban" , "string");
Bot.sendMessage("🛑 User " +message+ " Has Been Banned");
}else{
return
}
