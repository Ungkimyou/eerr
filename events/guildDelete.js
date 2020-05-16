const Discord = require('discord.js');
const fs = require("fs");

module.exports = async (client, guild) => {
    client.channels.get('702925177746620516').setName(`Total Server : ${client.guilds.size}`)

  let guildCreateDelete = client.channels.get('697149754622083165');
    let leaveEmbed = new Discord.RichEmbed()
    .setTitle("Bot left server!")
    .setThumbnail(guild.iconURL)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Server Owner:`, `${guild.owner}`)
    .setColor("#4286f4")
    .setFooter(`${client.guilds.size} server has joined`)
    .setTimestamp();
    guildCreateDelete.send(leaveEmbed);
    
}
