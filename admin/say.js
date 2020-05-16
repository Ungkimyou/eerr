const Discord = require('discord.js');
const fs = require("fs");
const { owners_id } = require('../../config.json');

exports.run = async(client, message, args, color, prefix) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !").then(msg => msg.delete(6000));
   
  message.channel.send(args.join(" "));
       message.delete();

   }

exports.conf = {
	aliases: [''], 
	cooldown: '0'
	} 

exports.help = {
	name: 'say', 
	description: 'This command just for owner, bot chating', 
	usage: 'say <text>' 
	} 