const Discord = require('discord.js');
const fs = require("fs");
const { owners_id } = require('../../config.json');

exports.run = async(client, message, args, color, prefix) => {
	owners_id.forEach(async function(owner) {
    if (message.author.id !== owner) return;
         
  // Lets define our array of guilds
    const guildArray = client.guilds.map((guild) => {
    return `\`\`\`🔹${guild.name} : ${guild.id}\`\`\``
    })
  
    // And send it
    message.channel.send(`All Server Name And ID Server\n${guildArray.join("\n")}`, { split: true })

})
} 

exports.conf = {
	aliases: ['guildname'], 
	cooldown: '0'
	} 

exports.help = {
	name: 'guildname', 
	description: 'This command just for owner nvm', 
	usage: 'guildname' 
	} 