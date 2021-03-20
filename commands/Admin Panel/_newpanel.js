/*CMD
  command: /newpanel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 📮 panel de admin 📮
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

var key = Bot.getProperty("Prkey")
var key2 = Bot.getProperty("Pukey")
var channel = 
Bot.getProperty("setpaychan")
var setwelcome = 
Bot.getProperty("welcome")
var key = Bot.getProperty("admin_chat")
if(user.telegramid == key){
var key = [[{title:"📢 Broadcasts",command:"/broadcastin"},{title:"⚙ Coinpayment",command:"/keys"}],[{title:"🤵 User Settings",command:"/useraccount"},{title:"🤖 Bot Settings",command:"/botset"}],[{title:"👨‍⚖️ Admin Transfer",command:"/admintrans"}]]

Bot.sendInlineKeyboard(key,"Hey "+user.first_name+",\n\n*Public Key* : `"+key2+"`" + "\n*Private Key* : `"+key+"`\n\n*Payment Channel :* "+channel+"\n*Crypto :* TRX" + "\n\n*Welcome : *\n"+setwelcome+"\n\n*This Panel are made by :* @JimOOF ")
}else{
return
}
