/*CMD
  command: /oninf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = options.body.result
//Bot.inspect(data)
//let sortedList = []; you wabt to sort balance you can do so
let value;
var msg = "Saldo disponible:"
for(var ind in data){
value = data[ind].balancef
msg+="\n"+value+" "+ind
}
Bot.sendMessage(msg)

