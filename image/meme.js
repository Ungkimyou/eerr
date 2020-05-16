const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, prefix ) => {
     message.react("✅");
 
   message.channel.send("Image Loading...").then(msg => msg.delete(1500));
randomPuppy('memes')
  
.then(url => {
 let embed = new Discord.RichEmbed()
  .setColor(`PURPLE`)
  .setTitle("Memes")
  .setImage(url)
  .setTimestamp()
  .setFooter(`Powered by Khlang-bot | by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
  message.channel.send(embed);
  })}

  

exports.conf = {
    aliases: [],
    cooldown: "5"
}

exports.help = {
    name: "meme",
    description: "Get a random meme",
    usage: "meme"
}
