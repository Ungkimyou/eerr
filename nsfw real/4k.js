const { get } = require('node-superfetch');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
     var superagent = require('superagent');

    
let nsfw = require('../../assets/json/nsfwAns.json');

let nsfwAns = nsfw[Math.floor(Math.random() * nsfw.length)]
  
  if(!message.channel.nsfw) return message.channel.send(`🚫 | **${message.author.username}**, ${nsfwAns}`)
  
  try {


        superagent.get('https://nekobot.xyz/api/image').query({ type: '4k'}).end((err, response) => {

            var embed_nsfw = new RichEmbed()
                .setColor(color)
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
    aliases: ['4k'],
    cooldown: "3"
}

exports.help = {
    name: "4k",
    description: "Search for NSFW 4k image",
    usage: "4k"
}
