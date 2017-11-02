// Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs'); // node.js pack

// User Data Call
//var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8')); // User data
var commandsList = fs.readFileSync('Storage/commands.txt', 'utf8'); // Commands file
bot.commands = new Discord.Collection(); // Commands handler

function loadCmds () {
    fs.readdir('./commands/', (err, files) => { // Read the directory of the command folder
        if(err) console.error(err); // Send an error message if it get an error

        var jsfiles = files.filter(f => f.split('.').pop() === 'js'); // Check if the file is a .js
        if (jsfiles.length <= 0) { return console.log('No commands found...')} // Send to the consol that no commands were found in the folder
        else { console.log(jsfiles.length + ' commands found.') } // Tells how many commands it found

        jsfiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./commands/${f}`)]; // Delete the cached file
            var cmds = require(`./commands/${f}`); // Gets every js file in the commands folder
            console.log(`Command ${f} loading...`); // Logs to the console that the command <name> is loading
            bot.commands.set(cmds.config.command, cmds); // Gets the name of the command
        })
    })

}

// Funcionts
function userInfo(user) {
    var finalString = ''; // This is the beginning of the final string

    // Name
    finalString += '**' + user.username + '**, with the **ID** of **' + user.id + '**'; // Gets the name of the user, the ID and adds it to the final string.

    // adding the created at date.
    var userCreated = user.createdAt.toString().split(' ');
    finalString += ', was **created on ' + userCreated[1] + ' ' + userCreated[2] + ', ' + userCreated[3] + '.**'

    // Messages sent
    finalString += ' Since then, they have **sent ' + userData[user.id].messagesSent + ' messages** to this discord.'

    return finalString; // This sends the function call down in the script
}


loadCmds(); // Reload command script start
// Listener Event: Message Received (This will run every time a message is received)
bot.on('message', message => {

    // Variables
    var sender = message.author; // The person who sent the message
    var msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
    var prefix = '!' // The text before commands
    var cont = message.content.slice(prefix.length).split(" "); // Slices off the prefix then put it in an array
    var args = cont.slice(1); // Everything after the command in an array

    if (!message.content.startsWith(prefix)) return; // Return if the prefix of the command is not the one set

    var cmd = bot.commands.get(cont[0]) // Grab the command called in chat
    if (cmd) cmd.run(bot, message, args); // Checks if it exist and if it does it runs the commands

    if (msg === prefix + 'RELOAD') {
      message.delete();
      message.channel.send({embed:{description:"All commands reloaded"}}) // Sends an embed telling the channel you reloaded all the commands
      loadCmds() // Reload command script end
    }

    // Make sure that it isn't reading a message that the bot is sending.
    if (sender.id === '375088280120590336') { // Checks if the ID of the sender is the same id as the bot
        return; // Cancels the rest of the Listener event.
    }



});

// Listener Event: Bot launched
bot.on('ready', () => {
    console.log('Bot Launched...') // Runs when the bot is Launched

    // Status
    bot.user.setStatus('Online') // Can be 'Online', 'idle', 'invisible', & 'dnd'

    // Game & Streaming
    bot.user.setGame('Hello!') // Playing with...
    // to set a stream bot.user.setGame('Hello!', 'https://twitch.tv/gankhawk');

});

// Login
bot.login('process.env.BOT_TOKEN') // Don't let people see this code, people can control your bot, including the servers your bot has admin on.
