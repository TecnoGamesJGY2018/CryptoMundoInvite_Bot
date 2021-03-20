/*CMD
  command: /setwallets
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("wallet")
if(wallet==undefined){
var button = [
[{title : "💼 Establecer / Cambiar la Billetera" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Su billetera BTT configurada actualmente es:* `no establecida`\n\n💹 Se utilizará para *todos los retiros futuros.*");
}else{
var button = [
[{title : "💼 Cambiar la Billetera" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*💡 Su billetera BTT configurada actualmente es:* \n `"+wallet+"`\n\n💹 Se utilizará para *todos los retiros futuros.*");
}

