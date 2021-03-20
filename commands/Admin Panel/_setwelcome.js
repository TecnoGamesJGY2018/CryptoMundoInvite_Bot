/*CMD
  command: /setwelcome
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
_Enter Message To Set Welcome :_

Ex. (Complan of your bot)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("welcome",message,"string")
Bot.sendMessage("_Set Welcone :_\n"+message)
