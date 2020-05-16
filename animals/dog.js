const snekfetch = require("snekfetch")
const Discord  = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {


 let {body} = await snekfetch
  .get(`https://random.dog/woof.json`);
   message.channel.send("Image Loading...").then(msg => msg.delete(1500));
 let embed = new Discord.RichEmbed()
  .setColor(`PURPLE`)
  .setTitle("Dog picture")
  .setImage(body.url)
  .setTimestamp()
  .setFooter(`Powered by khlang-bot | by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
  message.channel.send(embed);

}

exports.conf = {
    aliases: [],
    cooldown: "",
  clientPerm: "EMBED_LINKS",
  authorPerm: ""
}

exports.help = {
    name: "dog",
    description: "Dog picture?",
    usage: "dog"
}
