/*CMD
  command: /admintrans
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
*🚷 Remember :
Then you change admin of Admin Panel you will not be able to access the panel. *

🆔️ Input User ID to transfer admin of Admin Panel :
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
Bot.setProperty("admin_chat", msg, "integer");
Bot.sendMessage("*🚨 Bot Admin Panel Transferred to user* " +message)
Bot.runCommand("/newpanel")
}else{
return
}
