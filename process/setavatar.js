const Discord = require('discord.js');
const fs = require("fs");
const { owners_id } = require('../../config.json');

exports.run = async(client, message, args, color, prefix) => {
  let commandLog = client.channels.get('694623012917346404')
    let command = ("`setavatar`")
    let guild = message.guild.name
    commandLog.send(`${message.author.tag} has used ${command} in ${guild}`)
	owners_id.forEach(async function(owner) {
    if (message.author.id !== owner) return;
        const avatar = args.join(" ");
            if(!avatar) return message.channel.send("Give me the URL of the image")
           await client.user.setAvatar(avatar)
           message.channel.send("The avatar has been set")  
  
  }
                   );
} 

exports.conf = {
	aliases: ['setavatar'], 
	cooldown: '0'
	} 

exports.help = {
	name: 'setavatar', 
	description: 'This command just for owner nvm', 
	usage: 'setavatar <Link avatar>' 
	} 