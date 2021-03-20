/*CMD
  command: /changebal
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
var key = [[{title:"💸 Add Balance",command:"/addbal"},{title:"💰Remove Balance",command:"/removebal"}],[{title:"💎 Send Gift",command:"/sendgift"}],[{title:"➡️ Back To User",command:"➡️ Back To User"}]]

Bot.sendInlineKeyboard(key,"*Welcome To Change Balance*")
}else{
return
}
