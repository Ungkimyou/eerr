const Discord = require('discord.js');
const fs = require("fs");
const { owners_id } = require('../../config.json');

exports.run = async(client, message, args, color, prefix) => {
	owners_id.forEach(async function(owner) {
    if (message.author.id !== owner) return;
         
  let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Enter a valid guild id`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

})
  client.on("guildCreate", guild => {
    let guildCreate = new Discord.RichEmbed()
    .setColor(`PRUPLE`)
    .addField("Someone added my bot, server name:", guild.name) 
    .addField("And their id was:", guild.owner.id)
    .addField("With guild ID: ", guild.id)
    
    client.users.get(owners_id).send(guildCreate)
  });
} 

exports.conf = {
	aliases: ['guildinvite'], 
	cooldown: '0'
	} 

exports.help = {
	name: 'guildinvite', 
	description: 'This command just for owner nvm', 
	usage: 'guildinvite <Serve ID>' 
	} 