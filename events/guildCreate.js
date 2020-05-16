const Discord = require("discord.js")
const fs = require("fs");

module.exports = async (client, guild) => {
   client.channels.get('702925177746620516').setName(`Total Server : ${client.guilds.size}`)

  // const invite = await guild.channels.find(c => c.type !== "category" && c.position === 0).createInvite({
  //       maxAge: 0
  //   });
    let guildCreateChannel = client.channels.get('697149320234926142');
   // guild.createChannel("bot-logs", "text");
    let joinEmbed = new Discord.RichEmbed()
    .setTitle("Bot joined server!")
    .setThumbnail(guild.iconURL)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Server Region`, `${guild.region}`)
    .addField(`Server Owner:`, `${guild.owner}`)
    .addField(`Total Mumber In This Server`, `${guild.memberCount}`)
    // .addField(`Server Invite:`, `${invite.url}`)
    .setColor("#4286f4")
    .setFooter(`${client.guilds.size} server has joined`)
    .setTimestamp();
    guildCreateChannel.send(joinEmbed);
  
  
  
   
}
