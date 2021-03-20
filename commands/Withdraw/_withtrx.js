/*CMD
  command: /withtrx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 0.0000 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 Puede retirar solo 1 vez en 24 horas\n\n💡 Siguiente returo en "+wait_hours+" Horas y "+wait_minutes+" minutos*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
var history = User.getProperty("historyw");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Valor no válido. Ingrese solo valor numérico. Intente otra vez*",{is_reply:true})
return
}

if(message < 8){
Bot.sendMessage("❌ Cantidad mínima para retirar 8 BTT")
}else{
if(message > balance.value()){
Bot.sendMessage("_🚫 Puede retirar máximo:_ "+balance.value().toFixed(4)+" BTT")
}else{
if (message >= 8 && message<=500){
let amo = message 
User.setProperty("amo",amo,"string")
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: message // input your withdrawal amount
,
            currency: "BTT" //currency for withdrawal
,
address: wallet,
           auto_confirm: 1
},
  onSuccess: '/onSuccess',
  onPaymentCompleted: 'onPaymentCompleted'
});

if(history == undefined){

var newh = "-------------------------------------------------------------------------------------\n"+"*✅ Withdrawn Amount :* "+ message+ " *TRX* "+" \n*🕥 DATE* "+time;
User.setProperty("historyw",newh,"string")
}else{
var nwh = "-------------------------------------------------------------------------------------\n"+"*✅ Withdrawn Amount :* "+ message+ " *TRX* "+" \n*🕥 DATE* "+time;
var toal = nwh+history;
User.setProperty("historyw",toal,"string")
}
balance.add(-message)
withdrawn.add(+message)
userPayment.add(+message)

}else{
if(history == undefined){

var newh = "-------------------------------------------------------------------------------------\n"+"*✅ Monto retirado :* "+ message+ " *BTT* "+" \n*🕥 FECHA* "+time;
User.setProperty("historyw",newh,"string")
}else{
var nwh = "-------------------------------------------------------------------------------------\n"+"*✅ Monto retirado :* "+ message+ " *BTT* "+" \n*🕥 FECHA* "+time;
var toal = nwh+history;
User.setProperty("historyw",toal,"string")
}
Bot.sendMessage("✅ Retiro solicitado\nRecibirá su pago dentro de las 24 horas."+"\n"+"\n"+"\n💳 Detalles de la transacción:\n"+message+" BTT a la billetera\n"+wallet)
balance.add(-message)
withdrawn.add(+message)
userPayment.add(+message)
}}
}
