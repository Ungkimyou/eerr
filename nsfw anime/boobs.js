const { get } = require('node-superfetch');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
     var superagent = require('superagent');

  
let nsfw = require('../../assets/json/nsfwAns.json');

let nsfwAns = nsfw[Math.floor(Math.random() * nsfw.length)]
  
  if(!message.channel.nsfw) return message.channel.send(`🚫 | **${message.author.username}**, ${nsfwAns}`)
  
  try {


           const { body } = await superagent.get('https://nekos.life/api/v2/img/tits')

            var embed_nsfw = new RichEmbed()
                .setColor(color)
                .setDescription(`:underage:\n**[Click here if image failed to load](${body.url})**`)
                .setTimestamp()
                .setImage(body.url)
            
            message.channel.send(embed_nsfw);
        
  
  
    
    
  } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`) 
  } 

}

exports.conf = {
    aliases: ['boobs'],
    cooldown: "3"
}

exports.help = {
    name: "boobs",
    description: "Search for NSFW boobs image",
    usage: "boobs"
}
