/*CMD
  command: /withmode
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
var key2 = [[{title:"✅ Turn On",command:"/manumode"},{title:"🛑 Turn OFF",command:"/manuoff"}],[{title:"➡️ Back To Bot Set",command:"➡️ Back To Bot Set"}]]
var k = Bot.getProperty("manual")
if (user.telegramid == key){
Bot.sendInlineKeyboard(key2,"*Manual Withdraw is currently* : " +k)
}else{
return
}
