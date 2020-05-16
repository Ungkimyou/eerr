const Discord = require("discord.js")
const fs = require("fs");

module.exports = async (client) => {
  console.log('==========\nReconnecting\n==========');
      let guildChannel = client.channels.get('706142383607250985');
   // guild.createChannel("bot-logs", "text");
    let Reconnect = new Discord.RichEmbed()
    .setTitle(" Reconnected")
  
    .setColor("#4286f4")
   // .setTimestamp();
    guildChannel.send(Reconnect);
  
  
  
}