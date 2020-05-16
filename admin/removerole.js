const Discord = require('discord.js');
const fs = require("fs");
const { owners_id } = require('../../config.json');

exports.run = async(client, message, args, color, prefix) => {
	
    let servername = message.guild.name;

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
    if(!rMember.roles.has(role.id)) {
        message.channel.send(":x: Action failed! This user don't have that role.");
        return;  
    }else{
        await rMember.removeRole(role.id) 
          
    message.channel.send(`:white_check_mark: Role removed successfully!`).catch(err => {
            message.channel.send(err.message)
        })
    
  
}
}

exports.conf = {
	aliases: [], 
	cooldown: '0'
	} 

exports.help = {
	name: 'removerole', 
	description: 'Remove role to user', 
	usage: 'removerole <@user> <namerole>' 
	} 