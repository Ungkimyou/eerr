const { get } = require('node-superfetch');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
     var superagent = require('superagent');

  
let nsfw = require('../../assets/json/nsfwAns.json');

let nsfwAns = nsfw[Math.floor(Math.random() * nsfw.length)]
  
  if(!message.channel.nsfw) return message.channel.send(`🚫 | **${message.author.username}**, ${nsfwAns}`)
  
  try {


        superagent.get('https://nekobot.xyz/api/image').query({ type: 'hkitsune'}).end((err, response) => {

            var embed_nsfw = new RichEmbed()
                .setDescription(`:underage:\n**[Click here if image failed to load](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
            
            message.channel.send(embed_nsfw);
        
    });
  
    
    
  } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`) 
  } 

}

exports.conf = {
    aliases: ['hkitsune'],
    cooldown: "3"
}

exports.help = {
    name: "hkitsune",
    description: "Search for NSFW hkitsune image",
    usage: "hkitsune"
}
