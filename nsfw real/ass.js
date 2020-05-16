const { get } = require('node-superfetch');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
     var superagent = require('superagent');

  
let nsfw = require('../../assets/json/nsfwAns.json');

let nsfwAns = nsfw[Math.floor(Math.random() * nsfw.length)]
  
  if(!message.channel.nsfw) return message.channel.send(`🚫 | **${message.author.username}**, ${nsfwAns}`)
  
  try {


        superagent.get('https://nekobot.xyz/api/image').query({ type: 'ass'}).end((err, response) => {

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
    aliases: ['ass'],
    cooldown: "3"
}

exports.help = {
    name: "ass",
    description: "Search for NSFW real ass image",
    usage: "ass"
}
