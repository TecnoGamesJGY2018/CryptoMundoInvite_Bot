/*CMD
  command: /mylikk
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
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
var key = [[{title:"🙆‍♂️ Volver a la sección Referidos",command:"/bakref"}]]
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","1");
Bot.sendInlineKeyboard(key,"Link: "+reflink)

