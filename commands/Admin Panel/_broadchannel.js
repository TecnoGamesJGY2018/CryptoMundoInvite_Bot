/*CMD
  command: /broadchannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: ✉ _Enter Message To Channel :_
  keyboard: 
  aliases: 
CMD*/

var channel = 
Bot.getProperty("setpaychan")
var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
if(message=="➡️ Back To Panel"){
Bot.runCommand("/newpanel");
}else{
let msg = data.message
Api.sendMessage({chat_id: ""+channel+"", text: msg})
Bot.sendMessage("*Your Message Sent To Channel*")
}
}
