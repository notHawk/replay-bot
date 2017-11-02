const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        let info = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!info) return message.channel.sendMessage("You did not specify a user Mention");
      let member = message.mentions.members.first();
      let mention = message.mentions.users.first();
      let embed = new Discord.RichEmbed()
        .setDescription(`This is the info about **@${mention.username}#${mention.discriminator}**`)
        .setColor('RANDOM')
        .addField("**Username : **", `${mention.username}`, true)
        .addField("**User Discriminator :**", `#${mention.discriminator}`, true)
        .addField("**User ID :**", `${member.id}`)
        .addField("**Playing :**", `${member.user.presence.game === null ? "No Game" : member.user.presence.game.name}`, true)
        .addField("**NickName :**", `${member.nickname}`, true)
        .addField("**Roles :**", `${member.roles.map(r => r.name).join(" -> ")}`)
        .addField("**Joined Guild :**", `${message.guild.joinedAt}`)
        .addField("**Joined Discord :**", `${member.user.createdAt}`)
        .setFooter(`User that triggered command -> ${message.author.username}#${mention.discriminator}`)
      message.channel.send({ embed: embed});
        console.log(`${message.author.username} has used the UserInfo command`)
      return;

}

module.exports.config = {
  command: "userinfo"
}
