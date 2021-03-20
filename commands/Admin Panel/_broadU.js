/*CMD
  command: /broadU
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _Input Message To Broadcast !_
  keyboard: 
  aliases: 
CMD*/

Bot.runAll( {
    command: "/broadcastnow",
    for_chats: "private-chats"
} )


