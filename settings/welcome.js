const fs = require('fs');
const Discord = require('discord.js');

exports.run = async(client, message, args, color, prefix) => {
  let bot = client
var option = args.join(" ")
            if (!option) {
              var embed1 = new Discord.RichEmbed()
              .setAuthor(`${client.user.username} welcome`, client.user.displayAvatarURL)
              .setColor('RANDOM')
              .setDescription(`
**Proper Usage:**
• ${prefix}welcome set \`#tagchannel\`
• ${prefix}welcome on
• ${prefix}welcome off
• ${prefix}welcome info

**Example:**
• ${prefix}welcome set \`#welcome\`

**After do that, do again:**
• ${prefix}welcome on
`)
              .setFooter("welcome Announcement")
              .setTimestamp()
              message.channel.send(embed1);
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./src/json/welcome.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!You need role that have permission **Manager Channel** | **Administrator**");
             var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./src/json/welcome.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`Welcome Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
                if (option.match("img")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./src/json/welcome.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!You need role that have permission **Manager Channel** | **Administrator**");
             var inputmessage = args.slice(0).join(" ")
            if (args[1]) {
              welcomeimg[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./src/json/welcome.json", JSON.stringify(welcomeimg), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`Welcome Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (option.match("on")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./src/json/welcomeonoff.json", "utf8"));
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!You need role that have permission **Manager Channel** | **Administrator**");
            
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./src/json/welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`welcome event has been **on**.`)
                .setTimestamp()
                .setFooter("welcome Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./src/json/welcomeonoff.json", "utf8"));
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!You need role that have permission **Manager Channel** | **Administrator**");
            
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./src/json/welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`welcome has been **off**.`)
                .setTimestamp()
                .setFooter("welcome Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("info")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./src/json/welcome.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**WELCOME:**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**WELCOME:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}
 

exports.conf = {
  aliases: ['wel'], 
  cooldown: '5'
} 
exports.help = {
  name: 'welcome', 
  description: 'Set the welcome when \`member join\`, \`member leave\` ', 
  usage: 'welcome'
} 