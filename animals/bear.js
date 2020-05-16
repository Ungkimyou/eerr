const snekfetch = require("snekfetch")
const Discord  = require('discord.js');
const request = require("request");

exports.run = async (client, message, args, color, prefix) => {

 let imgs = Math.floor(Math.random() * 80);
  let url = ['https://www.reddit.com/r/bears/.json?sort=rising&t=hour&limit=100'];
  request({
    method: 'GET',
    uri: url[Math.floor(Math.random() * url.length)]
  }, function (err, response, data) {
    if(err) {
      console.log(err, null);
      return;
    }

  data = JSON.parse(data);
  var mainObj = data.data.children;
  var urls = {};

  for(let i = 0; i < mainObj.length; i++) {
  let url = mainObj[i].data.url;
  urls[i+1] = url;
    }
  message.channel.send("Image Loading...").then(msg => msg.delete(1500));
    
 let embed = new Discord.RichEmbed()
  .setColor(`PURPLE`)
  .setTitle("Jump!")
  .setImage(urls[imgs])
 .setTimestamp()
  .setFooter(`Powered by khlang-bot | by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
  
  message.channel.send(embed);

     if(client.user && message.content === "undefined") {
      message.delete()
  }
})}

exports.conf = {
    aliases: [],
    cooldown: "",
  clientPerm: "EMBED_LINKS",
  authorPerm: ""
}

exports.help = {
    name: "bear",
    description: "Bear picture?",
    usage: "bear"
}
