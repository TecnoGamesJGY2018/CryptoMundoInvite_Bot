/*CMD
  command: 🎁 Bono Diario
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
Bot.sendMessage("*Ha sido baneado por el admin* 😔\n\nHey"+user.first_name+",\nPóngase en contacto con el administrador: @TecnoGamesJGY");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 El bot está desactivado actualmente*");
}
var bonus = Bot.getProperty("BON")
if (bonus=="🛑 Turned OFF"){
Bot.sendMessage("*Bono APAGADO 😔*")
}else{
Bot.runCommand("/freebon")
}
