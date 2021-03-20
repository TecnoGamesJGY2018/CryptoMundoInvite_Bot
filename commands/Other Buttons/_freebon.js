/*CMD
  command: /freebon
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var daily = 
Bot.getProperty("reward")
function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("_❌ Lo sentimos, ya ha recibido su bono hoy\n\n⚡️ Puede recibir su próximo bono después de:\n "+wait_hours+"h "+wait_minutes+"m " 
 + seconds+ "s_" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(1*+daily)
Bot.sendMessage(
  "🎁 *Hoy recibio\n\n"+daily+" BTT*\n\n⚜️ _Vuelva mañana e inténtelo de nuevo. Este es un bono gratis_"
)

