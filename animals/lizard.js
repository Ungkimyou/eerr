const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch")
module.exports.run = async (client, message) => {
 
let {body} = await snekfetch
  .get(`https://nekos.life/api/v2/img/lizard`);
  message.channel.send("Image Loading...").then(msg => msg.delete(1500));
 let embed = new RichEmbed()
  .setColor(`PURPLE`)
  .setTitle("lizard ")
  .setImage(body.url)
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
  name: "lizard",
  description: "Show a random lizard",
  usage: "lizard"
};