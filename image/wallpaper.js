const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage(body.url) 
    message.channel.send({embed})
};

module.exports.conf = {
  aliases: [],
  clientPerm: "",
  authorPerm: "EMBED_LINKS"
};

module.exports.help = {
  name: "wallpaper",
  description: "",
  usage: "Random Wallpaper Neko",
  example: [""]
};