/*CMD
  command: /rewardbon
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
📦 _Enter The Amount For Daily Reward :_

Ex. 1 (1 TRX)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("reward",message,"string")
Bot.sendMessage("_New Daily Reward :_\n"+message)
