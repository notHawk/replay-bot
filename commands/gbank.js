module.exports.run = async (bot, message, args) => { // Call the command

  // Ping / Pong command
      message.channel.send({embed:{ // Embed structure
          title:"gbank!",
          description:"hey!",
          color: 0x5DADE2 // Hex code only after the 0x
      }})
}

module.exports.config = { // Config for the command
    command: "gbank"
}
