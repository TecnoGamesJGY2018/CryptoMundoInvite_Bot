/*CMD
  command: 📤 Retirar
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Button

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/


var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*Ha sudo baneado por el admin* 😔\n\nHey"+user.first_name+",\nPóngase en contacto con elbadministrador: @TecnoGamesJGY");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 El bot está desactivado actualmente*");
}
var witmod = Bot.getProperty("manual")
if (witmod=="🛑 Turned OFF"){
Bot.sendMessage("*Retiro OFF*")
}else{
Bot.runCommand("/withdraww")
}


