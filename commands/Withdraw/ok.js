/*CMD
  command: ok
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var channel = 
Bot.getProperty("setpaychan")
var result = options.body.result;
var txn_id = result.send_txid;
var wallet = result.send_address;
var amount = result.amountf;

var name = user.username ? user.username : user.first_name

let mention = "[" + name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"

Bot.sendMessage("*💵 Retiro pagado*\n\n"+"*El propietario pagó automáticamente su retiro de* " +amount+ " *BTT* en la billetera:\n`"+wallet+ "`\n\n*🔘 ID de transacción: *\n ["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" + txn_id + "\n)",{disable_web_page_preview : true})


var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

let id = "@CryptoBTTPays"
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";

Api.sendMessage({chat_id: "@CryptoBTTPays", text: "*🔥 Nuevo retiro 🔥*" +
    "\n \n" + "💠 Estado: Pagado" + "\n*💠 Nombre: *" + mention + "\n*💠 Cantidad de retiro:* " + amount + "* BTT! *" + "\n" + "\n*🔘 ID de transacción: *\n["+ txn_id + "]" +"(https://tx.botdev.me/TRX/" +txn_id+ "\n)" + "\n\n*⌚ Hora del Servidor* "+time+"\n*🤖 Enlace del Bot*: @" + "["+bot.name+"]", parse_mode : 'Markdown', disable_web_page_preview: true})
