/*CMD
  command: /adminreply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Other Buttons
  answer: _Ingrese el mensaje:_
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var admin_id = key
//you may get it via Bot.sendMessage(user.telegramid)

if(user.telegramid!=admin_id){return}

var option = {reply_to_message_id: options.message_id}
Bot.sendMessageToChatWithId(options.userId,"Respuesta del administrador:\n\n`" + message+"`", option)

Bot.sendMessage("El mensaje ha sido enviado a " + options.user_link)

Bot.runCommand("my_main_menu")
