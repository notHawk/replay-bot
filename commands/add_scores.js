const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
module.exports.run = async (bot, message, args) => {
      if (!message.member.roles.find("name", "Admin")) {
        message.channel.send('You need the \`Admin\` role to use this command.');
        return;
      }
      let info = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!info) return message.channel.sendMessage("You did not specify a user Mention");

      let member = message.mentions.members.first();
      let adding_value = 1;
      var full_message = message.content;
      adding_value = full_message[full_message.length-1];
      full_message = full_message.split(" ");
      var userData = JSON.parse(fs.readFileSync('Storage/scores.json', 'utf8'));
      for(var x = 1; x < full_message.length-1; x++) {
        var user = full_message[x]; //Just assuming that's their user id.
        var user_id = user.replace(/[<@!>]/g, '');
        var this_user = message.guild.members.get(user_id);
        var this_username = this_user.user.username;
        if(userData[user_id]) {
        userData[user_id].score = parseInt(userData[user_id].score)+parseInt(adding_value);
        userData[user_id].username = this_username;
        } else {
          userData[user_id] = {"score": parseInt(adding_value),"username": this_username}
        }
        fs.writeFile('Storage/scores.json', JSON.stringify(userData), (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });
        let mention = message.mentions.users.first();
        message.delete();
        message.channel.send("you've added "+adding_value+" points to "+this_username);
      }

      console.log(`${message.author.username} has used the add scores command`);
      return;

}

module.exports.config = {
  command: "add_scores"
}
