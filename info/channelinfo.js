const Discord  = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
const bot = client
    
     var chnl = message.channel
     var notSafe = 'No (My nsfw commands are disabled on this channel.)'
     var ifTyping = 'Nobody is typing'
     if(chnl.nsfw === true) {
          notSafe = 'Yes (My nsfw commands are enable.)' 
     } 
     if(chnl.typing === true) {
         ifTyping = 'Yes'
     } 
     
     const mainEmbed = new Discord.RichEmbed() 
         .setTitle(`#${chnl.name}`)
         .addField(`ID`, `${chnl.id}`, true)
         .addField(`Mention`, `<#${chnl.id}>`, true) 
         .addField(`Creation date`, chnl.createdAt, true) 
         .addField(`Not Safe For Work ?`, `${notSafe}`, true)     
         .addField(`Category/Parent`, `${chnl.parent} ||${chnl.parentID}||`, true)
         // .addField(`Topic`, `${chnl.topic}`, true)
         .addField(`Developpement informations`, `[======] `, true)
         .addField(`Members typing`, ifTyping, true) 
         // .addField(`Permissions of THIS channel`, `\`\`\`${chnl.permissionOverwrites}\`\`\``, true)
         .addField(`Position(list)`, `${chnl.position}`, true)
         .addField(`Position(calculated)`, `${chnl.calculatedPosition}`, true)
         .addField(`Deletable by me`, `${chnl.deletable}`, true)
         .addField(`Manageable by me`, `${chnl.manageable}`, true)
         .addField(`Last message ID`, `||${chnl.lastMessageID}||`, true) 
         // .addField(`Your permissions`, `\`\`\`${chnl.memberPermissions(message.author)}\`\`\``, true)  
         .setColor(`PRUPLE`)
         .setTimestamp() //This sets the timestamp.
         .setFooter(`Requested by ${message.author.tag} `) 
           
                  
 
     message.channel.send(mainEmbed) 
	}

exports.conf = {
    aliases: [],
    cooldown: "2"
}

exports.help = {
    name: "channelinfo",
    description: "show channelinfo in sever",
    usage: "channelinfo"
}
