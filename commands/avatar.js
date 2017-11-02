module.exports.run = async (bot, message, args) => { // Call the command

  const user = message.mentions.users.first();
  if (!user) {
  message.reply(message.author.avatarURL);
  } else {
  message.reply(user.avatarURL)
  };

}

module.exports.config = { // Config for the command
    command: "avatar"
}
