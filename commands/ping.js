module.exports.run = async (bot, message, args) => { // Call the command

  // Ping / Pong command
      message.channel.send({embed:{ // Embed structure
          title:"Ping!",
          description:"Pong!",
          color: 0x5DADE2 // Hex code only after the 0x
          /*message.channel.send({embed:{
              title:"Ping!",
              description:"Pong!",
              url:"http://google.com/", // Makes pong a clickable link
              color: 0x5DADE2,
              fields:[
                  {
                      name:"This is a name!",
                      value:"This is the **decription**, using formatting *works*, [and even links!](http://google.com)",
                      inline:true // Not next to eachoter, remove it to have them next to eachoter
                  },
                  {
                      name:"This is a name!",
                      value:"This is the **decription**, using formatting *works*, [and even links!](http://google.com)",
                      inline:true // Not next to eachoter, remove it to have them next to eachoter
                  },
                  {
                      name:"This is a name!",
                      value:"This is the **decription**, using formatting *works*, [and even links!](http://google.com)",
                      inline:false // Not next to eachoter, remove it to have them next to eachoter
                  }
              ],
              timestamp: new Date(), // Current Date
              footer: {
                  text: 'Footer text.',
                  icon_url: 'http://pngimg.com/uploads/money/money_PNG3545.png'
              }*/
      }})
}

module.exports.config = { // Config for the command
    command: "ping"
}
