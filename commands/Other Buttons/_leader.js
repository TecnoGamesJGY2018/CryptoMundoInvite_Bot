/*CMD
  command: /leader
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
  var msg = "*🥇 Top de 10 Referidos*\n"
  var users = Libs.ReferralLib.topList.get(10)

  for (var index in users) {
    var u = users[index]
    msg += "\n*Usuario:* " + "*@" + u.username+"\n*Referidos:* "+ u.count +"\n*"
  }

  Bot.sendMessage(msg)


