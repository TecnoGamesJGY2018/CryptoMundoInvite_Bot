/*CMD
  command: /supportmess
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Other Buttons

  <<ANSWER
*📞 Ahora está en contacto directo con el administrador*

`Puede enviar aquí cualquier mensaje que desee enviar, el administrador lo recibirá y enviará una respuesta directamente aquí en el chat.`
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var admin_id = key
//you may get it via Bot.sendMessage(user.telegramid)

var msg_count = Bot.getProperty("support_msg_count",0)

var msg_seen = Bot.getProperty("support_msg_seen",0)

var msg_details = Bot.getProperty("support_msg_details",{})

if(!msg_details[msg_count+1]){msg_details[msg_count+1] = {}}


if(!user.last_name){user.last_name = " "}
msg_details[msg_count+1].message = message 
msg_details[msg_count+1].userId = user.telegramid
msg_details[msg_count+1].name = user.first_name
msg_details[msg_count+1].last_name = user.last_name
msg_details[msg_count+1].message_id = request.message_id

Bot.sendMessage("*Su mensaje ha sido enviado al administrador:* `"+message+"`")

var text = "Ha llegado un nuevo mensaje de Soporte\n\nEnvieme /check_msg para comprobar el mensaje nuevo! \n\nLos mensaje pendientes totales son " + [msg_count-msg_seen+1]

Bot.sendMessageToChatWithId(admin_id, text)

Bot.setProperty("support_msg_count",msg_count+1,"integer")
Bot.setProperty("support_msg_details",msg_details,"json")
