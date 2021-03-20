/*CMD
  command: wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Other Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message=="➡️ Volver al inicio"){
Bot.runCommand("my_main_menu");
}else{
if(message.length==34){
Bot.sendKeyboard("⬅️ Atrás","🖊 Hecho. Su nueva billetera es \n "+"`"+message+"`");
User.setProperty("wallet" ,message,"string")
}else{
Bot.sendMessage("*🖊 Error:* ¡Esta no es una dirección de billetera BTT válida! Envíe /start para volver al menú o envíe una dirección correcta");
Bot.runCommand("/wallet")
}
}
