/*CMD
  command: /broaduser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: ā Enter Message :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
if(message=="ā”ļø Back To Panel"){
Bot.runCommand("/newpanel");
}else{
let msg = "š *Message From Administrator * \n\nā " +data.message;
User.setProperty("msg", msg, "string");
Bot.runCommand("/broadid")
}
}
