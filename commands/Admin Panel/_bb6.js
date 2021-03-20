/*CMD
  command: /bb6
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
⛔ _Enter The Amount To Remove Balance :_

Ex. -10 (Will be remove balance of 10)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let amount = parseFloat(message)
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
res.add(parseFloat(amount))
Bot.sendMessage("*El monto de " +amount+ " BTT ha sido eliminado del usuario ID: * "   +tgid+ " * de su balance*");
Bot.sendMessageToChatWithId(tgid,"*⛔ Su saldo ha eliminado la cantidad de " + amount + " BTT por el admin.*");
}else{
return
}

//You need to send amount after
