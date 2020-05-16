const Discord = require('discord.js');
const fs = require("fs");
const { owners_id } = require('../../config.json');

exports.run = async(client, message, args, color, prefix) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) {
  message.channel.send(":x: Action failed! Sorry you don't have permission to do that.");
  return;
  }
  if(!message.guild.me.hasPermission(["MANAGE_MESSAGES" || "ADMINISTRATOR"])) {
  message.channel.send(":x: Action failed! Sorry I don't have permission to do that.");
  return;
  }
  let argsresult;
  let mChannel = message.guild.channels.find(r => r.id == args[0]) || message.mentions.channels.first()
  if(mChannel) {
    argsresult = args.slice(1).join(" ")
    if (!argsresult){
    message.channel.send(`:x: Announce Failed! Write something to announce!`)
    return;
    }
    let embed = new Discord.RichEmbed()
      .setDescription(argsresult)
      .setColor('#FF0000')
      .setTimestamp();
    mChannel.send({embed : embed})
  }else{
    argsresult = args.join(" ")
    if (!argsresult){
    message.channel.send(`:x: Announce Failed! Write something to announce!`)
    return;
    }
    let embed = new Discord.RichEmbed()
      .setDescription(`${argsresult}`)
      .setColor('#FF0000')
      .setTimestamp();
    message.channel.send({embed : embed})
  }

}
  
   

exports.conf = {
	aliases: [''], 
	cooldown: '0'
	} 

exports.help = {
	name: 'announce', 
	description: 'This command just for owner, bot chating ann',
	usage: 'announce <#channel> <text>' 
	} 