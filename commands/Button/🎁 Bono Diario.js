/*CMD
  command: ๐ Bono Diario
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
Bot.sendMessage("*Ha sido baneado por el admin* ๐\n\nHey"+user.first_name+",\nPรณngase en contacto con el administrador: @TecnoGamesJGY");
return
}
var state = Bot.getProperty("BOT")
if (state=="๐ Turned OFF"){
Bot.sendMessage("*๐ El bot estรก desactivado actualmente*");
}
var bonus = Bot.getProperty("BON")
if (bonus=="๐ Turned OFF"){
Bot.sendMessage("*Bono APAGADO ๐*")
}else{
Bot.runCommand("/freebon")
}
