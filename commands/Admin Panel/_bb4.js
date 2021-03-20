/*CMD
  command: /bb4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 💰 _Enter The Amount To Add Balance :_
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let amount = parseFloat(message)
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
res.add(parseFloat(amount))
Bot.sendMessage("*The amount " +amount+ " TRX has been added to the User ID: * "   +tgid+ " * balance*");
Bot.sendMessageToChatWithId(tgid,"*🎁 Acaba de recibir " + amount + " BTT del Admin.*");
}else{
return
}

//You need to send amount after
