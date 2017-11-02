const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
module.exports.run = async (bot, message, args) => {
      /*if (!message.member.roles.find("name", "Admin")) {
        message.channel.send('You need the \`Admin\` role to use this command.');
        return;
      }
      let info = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!info) return message.channel.sendMessage("You did not specify a user Mention");*/

      var userData = JSON.parse(fs.readFileSync('Storage/scores.json', 'utf8'));
      var message_ = "```Perl\n";
      message_ += "📋 Rank | Name\n\n";
      var counter = 0;
      var list = new Array();
      for(var k in userData) {
        var current_data = userData[k];
        var current_id = k;
        list.push(current_data);
        counter++;
      }

      for(var x = 0; x < list.length; x++) {
        var max = list[x].score;
        for(var y = x; y < list.length; y++) {
          if(list[y].score > max) {
            var temp = list[x];
            list[x] = list[y];
            max = list[y].score;
            list[y] = temp;
          }
        }
      }

      var position;
      for(var x = 0; x < list.length; x++) {
        if(x == 10) break; // Max user showing on the list
        var num = x+1;
        if(message.member.user.username == list[x].username) position = num;
        message_+="["+num+"]\t> #"+list[x].username+"\n\t\tPoints: "+list[x].score+"\n";
      }
      message_ += "-------------------------------------\n";
      message_ += "# Your Guild Placing Stats\n";
      message_ += "Rank: "+position+"\tTotal Score: "+userData[message.member.id].score;
      message_ += "```";
      message.delete();
      message.channel.send(message_);

      //console.log(`${message.author.username} has used the ranking command`);
      return;

}

module.exports.config = {
  command: "ranking"
}
