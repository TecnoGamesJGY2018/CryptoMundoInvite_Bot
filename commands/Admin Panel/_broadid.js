/*CMD
  command: /broadid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 🆔️ _Enter User ID :_
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
if(message=="➡️ Back To Panel"){
Bot.runCommand("/newpanel")
}else{
let msg = User.getProperty("msg");
let pmid = data.message;
Bot.sendMessageToChatWithId(pmid, msg);
Bot.sendMessage("*Message Sent *\n👤 To User "+pmid+"\n✉️ Your Messsage:\n\n"+msg);
}
}
