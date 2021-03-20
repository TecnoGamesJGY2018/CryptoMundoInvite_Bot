/*CMD
  command: /sendpaidbotnoww
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _Enter your BB Email :_
  keyboard: 
  aliases: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("*Bot Sent To* "+message)
