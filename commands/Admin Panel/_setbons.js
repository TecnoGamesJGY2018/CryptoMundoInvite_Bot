/*CMD
  command: /setbons
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var key2 = [[{title:"✅ Turn On",command:"/bonON"},{title:"🛑 Turn OFF",command:"/bonOFF"}],[{title:"📦 Set Daily Bonus",command:"/rewardbon"}]]
var k = Bot.getProperty("BON")
if (user.telegramid == key){
Bot.sendInlineKeyboard(key2,"*🎁 Bonus Button is currently* : " +k)
}else{
return
}

