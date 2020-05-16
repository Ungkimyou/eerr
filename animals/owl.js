const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch")
module.exports.run = async (client, message) => {
 
let {body} = await snekfetch
  .get(`http://pics.floofybot.moe/owl`);
  message.channel.send("Image Loading...").then(msg => msg.delete(1500));
 let embed = new RichEmbed()
  .setColor(`PURPLE`)
  .setTitle("owl ")
  .setImage(body.image)
 .setTimestamp() 
  .setFooter(`Powered by Khlang-bot | by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
  
  message.channel.send(embed);

};

module.exports.conf = {
  aliases: [],
  clientPerm: "EMBED_LINKS",
  authorPerm: ""
};

module.exports.help = {
  name: "owl",
  description: "Show a random owl",
  usage: "owl"
};