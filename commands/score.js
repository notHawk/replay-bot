const Discord = require('discord.js');
var fs = require('fs');
module.exports.run = async (bot, message, args) => {
      let info = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!info) return message.channel.sendMessage("You did not specify a user Mention");

      let member = message.mentions.members.first();
      let user_id = member.id;
      var userData = JSON.parse(fs.readFileSync('Storage/scores.json', 'utf8'));
      let mention = message.mentions.users.first();
      if(userData[user_id]) {
        message.delete();
        message.channel.send(mention.username+" has "+userData[user_id].score+" points");
      } else {
        message.channel.send("No score for this user");
      }
      console.log(`${message.author.username} has used the score command`);
      return;

}

module.exports.config = {
  command: "score"
}
