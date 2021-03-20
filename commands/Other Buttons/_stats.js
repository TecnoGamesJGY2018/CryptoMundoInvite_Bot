/*CMD
  command: /stats
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")

Api.sendPhoto({
chat_id: chat.chatid,
photo: "https://cdn.pixabay.com/photo/2018/02/27/17/40/graph-3186078_960_720.png",
caption: "📊 Bienvenido a las Estadísticas "
})

Bot.sendMessage("👨‍👧‍👦 *Usuario totales:* `"+tota.value().toFixed() + "` *Usuarios*\n*📤 Total retirado:* `"+userPayment.value()+ "` *BTT*")
