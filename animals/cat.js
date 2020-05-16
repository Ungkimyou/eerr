const snekfetch = require("snekfetch")
const Discord  = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {

let {body} = await snekfetch
  .get(`http://aws.random.cat/meow`);
  message.channel.send("Image Loading...").then(msg => msg.delete(1500));
 let embed = new Discord.RichEmbed()
  .setColor(`PURPLE`)
  .setTitle("Cats ")
  .setImage(body.file)
 .setTimestamp() 
  .setFooter(`Powered by Khlang-bot | by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
  
  message.channel.send(embed);

}

module.exports.conf = {
  aliases: [],
  clientPerm: "EMBED_LINKS",
  authorPerm: ""
};

exports.help = {
    name: "cat",
    description: "Cat picture?",
    usage: "cat"
}
