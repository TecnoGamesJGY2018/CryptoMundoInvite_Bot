/*CMD
  command: /fakes
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
var key = [[{title:"💳 Fake Total Withdrawn",command:"/fakew"}],[{title:"👤 Total Members",command:"/faket"}]]

Bot.sendInlineKeyboard(key,"*Hey* " +user.first_name+ " \n*Welcome To Fake Statistcs*")
}else{
return
}
