module.exports.run = async (bot, message, args) => { // Call the command

  async function purge() {
          message.delete();

          if (!message.member.roles.find("name", "Admin")) {
              message.channel.send('You need the \`Admin\` role to use this command.');
              return;
          }

          if (isNaN(args[0])) {
              message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');
              return;
          }

          const fetched = await message.channel.fetchMessages({
              limit: args[0]
          });
          console.log(fetched.size + ' messages found, deleting...');

          message.channel.bulkDelete(fetched)
              .catch(error => message.channel.send(`Error: ${error}`));

      }

      purge();

}

module.exports.config = { // Config for the command
    command: "purge"
}
