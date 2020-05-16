const { get } = require('node-superfetch');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
     var superagent = require('superagent');

let nsfw = require('../../assets/json/nsfwAns.json');

let nsfwAns = nsfw[Math.floor(Math.random() * nsfw.length)]
  
  if(!message.channel.nsfw) return message.channel.send(`🚫 | **${message.author.username}**, ${nsfwAns}`)
    if(!args[0]) {
       const nickbot = new RichEmbed()
        .setDescription(`The type of image to get. Current types: **hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food**`)
       .setColor (`PURPLE`)
       return message.channel.send(nickbot).then(msg => msg.delete(56000));
    } 
  
  try {

var search = message.content.split(/\s+/g).slice(1).join(" ");
        superagent.get('https://nekobot.xyz/api/image').query({ type: search}).end((err, response) => {

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
    aliases: ['test'],
    cooldown: "1"
}

exports.help = {
    name: "test",
    description: "Search for test image",
    usage: "test"
}
