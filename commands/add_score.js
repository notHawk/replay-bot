const Discord = require('discord.js');
var fs = require('fs');
module.exports.run = async (bot, message, args) => {
      if (!message.member.roles.find("name", "Admin")) {
        message.channel.send('You need the \`Admin\` role to use this command.');
        return;
      }
      let info = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!info) return message.channel.sendMessage("You did not specify a user Mention");

      let member = message.mentions.members.first();
      let user_id = member.id;
      var adding_value = 1;
      var full_message = message.content;
      console.log(message.content);
      full_message = full_message.split(" ");
      full_message[2] = parseInt(full_message[2]);

      if(full_message[2] && full_message[2] != "NaN" && full_message[2] != NaN) {
        adding_value = full_message[2];
      }
      
      let mention = message.mentions.users.first();
      var userData = JSON.parse(fs.readFileSync('Storage/scores.json', 'utf8'));
      if(userData[user_id]) {
        userData[user_id].score += parseInt(adding_value);
        userData[user_id].username = mention.username;
      } else {
        userData[user_id] = {"score": parseInt(adding_value),"username": mention.username};
      }
      fs.writeFile('Storage/scores.json', JSON.stringify(userData), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      message.delete();
      message.channel.send("you've added "+adding_value+" points to "+mention.username);
      console.log(`${message.author.username} has used the add score command`);
      return;

}

module.exports.config = {
  command: "add_score"
}
