/*CMD
  command: /check_msg
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var admin_id = key
//you may get it via Bot.sendMessage(user.telegramid)

var msg_count = Bot.getProperty("support_msg_count",0)

var msg_seen = Bot.getProperty("support_msg_seen",0)

var msg_details = Bot.getProperty("support_msg_details",{})


if(user.telegramid != admin_id){return}

if(msg_count-msg_seen < 1){
Bot.sendMessage("No tiene ningún mensaje pendiente")
return}

var msg = "Aquí hay un mensaje de soporte pendiente enviado por los usuarios.\n\n"
for(var i=[msg_seen+1];i<[msg_count+1];i++){

msg += "*Usuario*: [" + msg_details[i].name + " " + msg_details[i].last_name + "](tg://user?id=" + msg_details[i].userId + ")" + "\n*ID del usuario*: " + msg_details[i].userId + "\n*Mensaje*:\n" + msg_details[i].message + "\n\n Responderlo: /reply " + i + "\n\n\n"
}

Bot.setProperty("support_msg_seen",msg_count,"integer")
Bot.sendMessage(msg)
