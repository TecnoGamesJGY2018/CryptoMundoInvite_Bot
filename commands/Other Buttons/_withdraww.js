/*CMD
  command: /withdraww
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other Buttons
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

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 0.0000018* 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 Puede retirar solo 1 vez en 24 horas\n\n💡 Siguiente retiro en "+wait_hours+" Horas y "+wait_minutes+" minutos*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var wallet = User.getProperty("wallet")
if (wallet == undefined) {
  var button = [[{ title: "💼 Establecer / Cambiar la Billetera", command: "/wallet" }]]
  Bot.sendInlineKeyboard(
    button,
    "*💡 Su billetera BTT configurada actualmente es:* `no establecida`"
  )
} else {
Bot.runCommand("/trx")
}
