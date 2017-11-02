module.exports.run = async (bot, message, args) => { // Call the command

  // Ping / Pong command
          message.channel.send({embed:{
              color: 0x5DADE2,
              fields:[
                  {
                      name:"!Ping",
                      value:"Replys wign Pong",
                      inline:false // Not next to eachoter, remove it to have them next to eachoter
                  },
                  {
                      name:"!Userinfo",
                      value:"Replys with the user info of the person you tagged",
                      inline:false // Not next to eachoter, remove it to have them next to eachoter
                  },
                  {
                      name:"!Purge <number>",
                      value:"Delete an amount of messages",
                      inline:false // Not next to eachoter, remove it to have them next to eachoter
                  },
                  {
                      name:"!Avatar",
                      value:"Returns the user avatar",
                      inline:false // Not next to eachoter, remove it to have them next to eachoter
                  }
              ],
      }})
}

module.exports.config = { // Config for the command
    command: "help"
}
