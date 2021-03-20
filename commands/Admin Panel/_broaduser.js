/*CMD
  command: /broaduser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: ✉ Enter Message :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
if(message=="➡️ Back To Panel"){
Bot.runCommand("/newpanel");
}else{
let msg = "🔍 *Message From Administrator * \n\n√ " +data.message;
User.setProperty("msg", msg, "string");
Bot.runCommand("/broadid")
}
}
