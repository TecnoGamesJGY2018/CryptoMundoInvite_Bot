/*CMD
  command: my_main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

var setwelcome = 
Bot.getProperty("welcome")
let res = Libs.ResourcesLib.userRes("balance");

let active = Libs.ResourcesLib.userRes("active")
let admin = Bot.getProperty("admin")
if (admin == user.telegramid) {

Bot.sendKeyboard("๐ณ Saldo Disponible,\n๐ฌ Referidos,๐ Bono Diario,๐ค Retirar\n๐ Precio BTT,๐ Estadรญsticas,๐ Soporte\n๐ผ Billetera, ๐ Top referidos,\n๐ฎ Panel de Admin ๐ฎ",""+setwelcome+"")
Bot.runCommand("ref")


} else {
  let user = User.getProperty("status")
  if ((user == "member") | (user == "administrator") | (user == "creator")) {
    
    Bot.sendKeyboard("๐ณ Saldo Disponible,\n๐ฌ Referidos,๐ Bono Diario,๐ค Retirar\n๐ Precio BTT,๐ Estadรญsticas,๐ Soporte\n๐ผ Billetera, ๐ Top referidos",""+setwelcome+"")}}
Bot.runCommand("ref")
