/*CMD
  command: /ser56
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let key = Bot.getProperty("Prkey")
let key2 = Bot.getProperty("Pukey")
Libs.CoinPayments.setPrivateKey(""+key+"");
Libs.CoinPayments.setPublicKey(""+key2+"");
Libs.CoinPayments.setBBApiKey('otzewYFFb3rQHHSoFz85pWtJfLYa3k9z-GLc5LJ6');
Bot.sendMessage("OK")
}else{
return
}

