const { get } = require('node-superfetch');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
  
  let nsfw = require('../../assets/json/nsfwAns.json');

let nsfwAns = nsfw[Math.floor(Math.random() * nsfw.length)]
  
  if(!message.channel.nsfw) return message.channel.send(`🚫 | **${message.author.username}**, ${nsfwAns}`)
  
  try {
  const { body } = await get('https://nekos.life/api/v2/img/solo') 
  
  let embed = new RichEmbed() 
  .setColor(color)
  .setDescription(`**[Click here if image failed to load](${body.message})**`) 
  .setImage(body.url)
  .setFooter(`Request by: ${message.author.tag} | ${client.user.username} v${client.version}`) 
  message.channel.send(embed);
  } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`) 
  } 

}

exports.conf = {
    aliases: ['solo'],
    cooldown: "3"
}

exports.help = {
    name: "solo",
    description: "Search for solo image",
    usage: "solo"
}
