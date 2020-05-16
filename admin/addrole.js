const Discord = require('discord.js');
const fs = require("fs");
const { owners_id } = require('../../config.json');

exports.run = async(client, message, args, color, prefix) => {
	

    let servername = message.guild.name;
  /* if(!args[0]) {
       const nickbot = new Discord.RichEmbed()
       .setTitle(`__Addrole__: **${message.prefix}addrole <<@Name>> <<namerole>>**`)
       .setColor(`PURPLE`)
       return message.channel.send(nickbot).then(msg => msg.delete(8000));
    }*/
    
    if(!message.member.hasPermission("MANAGE_ROLES")) {
        message.channel.send(":x: Action failed! Sorry you don't have permission to do that.");
        return;
    }
    if(!message.guild.me.hasPermission(["MANAGE_ROLES" || "ADMINISTRATOR"])) {
        message.channel.send(":x: Action failed! Sorry I don't have permission to do that.");
        return;
    }
    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0]);
    if(!rMember) {
        message.channel.send(":x: Action failed! Couldn't find the user!");
        return;    
    }
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role){
        message.channel.send(":x: Action failed! Please specify a role!");
        return; 
    }
    if(rMember.roles.has(role.id)) {
        message.channel.send(":x: Action failed! This user already have that role.");
        return;  
    }else{
        await rMember.addRole(role.id).catch(err => {
            message.channel.send(err.message).then(msg => msg.delete(5000));
        })
    }
    if(!rMember.roles.has(role.id)) return;
        message.channel.send(`:white_check_mark: Role given successfully!`)
}

exports.conf = {
	aliases: [], 
	cooldown: '0'
	} 

exports.help = {
	name: 'addrole', 
	description: 'Add role to user', 
	usage: 'addrole <@user> <namerole>' 
	} 