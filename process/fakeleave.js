const Discord = require('discord.js');
const { owners_id } = require("../../config.json");
const fs = require("fs");

exports.run = async(client, message) => {
  owners_id.forEach(async function(owner) {
    if (message.author.id !== owner) return;
  
	client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
   })
}
                    

exports.conf = {
	aliases: [], 
	cooldown: '0'
	} 

exports.help = {
	name: 'fakeleave', 
	description: 'This command just for owner, bot chating', 
	usage: 'fakeleave' 
	} 