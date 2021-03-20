/*CMD
  command: /setpaymentchann
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
💸 _Enter Name of Channel :_

Ex. @MostTopLegitBots
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("setpaychan",message,"string")
Bot.sendMessage("_New Set Payment Channel :_\n"+message)
