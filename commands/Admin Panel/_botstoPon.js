/*CMD
  command: /botstoPon
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
var key2 = [[{title:"✅ Turn On",command:"/botson"},{title:"🛑 Turn OFF",command:"/botofF"}],[{title:"➡️ Back To Bot Set",command:"➡️ Back To Bot Set"}]]
var k = Bot.getProperty("BOT")
if (user.telegramid == key){
Bot.sendInlineKeyboard(key2,"🔌 *Bot is currenctly* : " +k)
}else{
return
}
