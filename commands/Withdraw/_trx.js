/*CMD
  command: /trx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("balance");
if(res.value() < 8 ){
Bot.sendMessage("❌ Cantidad mínima para retirar 8 BTT")
}else{
Bot.sendKeyboard("⬅️ Atrás","📤 _¿Cuántos BTT quiere retirar?_\n\n*Mínimo:* `8 BTT`"+"\n"+"*Máximo:* `"+res.value().toFixed(4)+"`* BTT\n"+"*\n_El monto máximo corresponde a su saldo._"+"\n\n"+"*➡️ Envíe ahora la cantidad que desea retirar*")
Bot.runCommand("/withtrx")
}
