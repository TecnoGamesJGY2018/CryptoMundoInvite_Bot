/*CMD
  command: /broadcastin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
var key = [[{title:"🔊 Broadcast To User",command:"/broaduser"},{title:"🔊 Broadcast To Bot",command:"/broadbot"}],[{title:"🔊 Broad To Channel",command:"/broadchannel"},{title:"🔊 Broadcast To Group",command:"/broadgroup"}],[{title:"➡️ Back To Panel",command:"➡️ Back To Panel"}]]

Bot.sendInlineKeyboard(key,"Hey " +user.first_name+ " "+user.last_name+",\n\n*📡 Welcome To Brodcasting*\n_You can send message to bot, user, channel and group_")
}else{
return
}
