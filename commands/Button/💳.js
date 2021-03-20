/*CMD
  command: 💳
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Button
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*Ha sido baneao por el admin* 😔\n\nHey"+user.first_name+",\nPóngase en contacto con este administrador: @TecnoGamesJGY");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 El bot está desactivado actualmente*");
}else{

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*Nombre:* `"+user.first_name+" "+user.last_name+"`\n*Su ID:* `"+user.telegramid+"`\n\n*💰 Su saldo*: _"+balance.value().toFixed(4)+"_ *BTT*")    

  }
