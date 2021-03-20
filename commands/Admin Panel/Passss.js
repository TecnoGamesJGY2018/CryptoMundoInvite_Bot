/*CMD
  command: Passss
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 🔐 _Enter Your Password :_
  keyboard: 
  aliases: 
CMD*/

let msg = "🚫 Password is Wrong! "

if(message=="Tecno_20180406"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "You admin now. You can run now this command : /newpanel";
}

Bot.sendMessage(msg);

