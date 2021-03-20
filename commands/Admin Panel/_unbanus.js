/*CMD
  command: /unbanus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 🚸 _Enter User ID To Unban :_
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("✅ User " +message+ " Has Been Unbanned");
}else{
return
}
