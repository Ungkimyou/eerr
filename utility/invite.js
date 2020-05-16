const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
  
  let embed = new RichEmbed() 
  .setColor(color)
  .addField("SUPPORT SERVER :", "[Khlang SERVER](https://discord.gg/wFBRb6h)")
  .setDescription('**[Click Here](https://discordapp.com/oauth2/authorize?client_id=694216276180205588&scope=bot&permissions=1517419646)** To Invite Me to your server!')
  message.channel.send(embed);

}

exports.conf = {
    aliases: ["invitebot"],
    cooldown: "5"
}

exports.help = {
    name: "invite",
    description: "invite the bot to your server",
    usage: "invite"
}
