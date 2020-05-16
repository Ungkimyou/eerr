const snekfetch = require("snekfetch")
const Discord  = require('discord.js');

exports.run = async (client, message, args) => {
   
 let {body} = await snekfetch
  .get(`http://random.birb.pw/tweet/`);
   message.channel.send("Image Loading...").then(msg => msg.delete(1500));
 let embed = new Discord.RichEmbed()
  .setColor(`PURPLE`)
  .setTitle("bird")
  .setImage(`https://random.birb.pw/img/${body}`)
  .setTimestamp()
  .setFooter(`Powered by Khlang-bot | by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
  message.channel.send(embed);

}

module.exports.conf = {
  aliases: []
};

exports.help = {
    name: "bird",
    description: "Bird picture?",
    usage: "bird"
}
