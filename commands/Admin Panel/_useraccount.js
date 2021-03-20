/*CMD
  command: /useraccount
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
var key = [[{title:"🔄 Change Balance",command:"/changebal"}],[{title:"⭕ Check Balance",command:"/checkbal"}],[{title:"🚷 Ban User",command:"/banus"},{title:"🚸 Unban User",command:"/unbanus"}],[{title:"➡️ Back To Panel",command:"➡️ Back To Panel"}]]

Bot.sendInlineKeyboard(key,"*Welcome To User Account*")
}else{
return
}
