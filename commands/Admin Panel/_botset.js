/*CMD
  command: /botset
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
var key = [[{title:"🙋‍♂️ Set Welcome",command:"/setwelcome"}],[{title:"📦 Set Bonus",command:"/rewardbon"},{title:"💸 Set Payment Channel",command:"/setpaymentchann"}],[{title:"📊 Fake Statictis",command:"/fakes"}],[{title:"🤖 Bot ON or OFF",command:"/botstoPon"},{title:"💸 Withdraw Mode",command:"/withmode"}],[{title:"➡️ Back To Panel",command:"➡️ Back To Panel"}]]

Bot.sendInlineKeyboard(key,"Hey " +user.first_name+ " "+user.last_name+",\n\n*Welcome to the Bot Set!*" + "\n_Please care this panel_")
}else{
return
}
