const fs = require('fs');
const Discord = require('discord.js');

exports.run = async(client, message, args, color, prefix) => {
  let bot = client
var option = args.join(" ")
            if (!option) {
              var embed1 = new Discord.RichEmbed()
              .setAuthor(`${client.user.username} leave`, client.user.displayAvatarURL)
              .setColor('RANDOM')
              .setDescription(`
**Proper Usage:**
• ${prefix}leave set \`#tagchannel\`
• ${prefix}leave on
• ${prefix}leave off
• ${prefix}leave info

**Example:**
• ${prefix}leave set \`#leave\`

**After do that, do again:**
• ${prefix}leave on
`)
              .setFooter("leave Announcement")
              .setTimestamp()
              message.channel.send(embed1);
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./src/json/leave.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Sorry, you don't have permissions to do this!You need role that have permission **Manager Channel** | **Administrator**");
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./src/json/leave.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`leave Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
                if (option.match("img")) {
            var welcomeimg = JSON.parse(fs.readFileSync("./src/json/leave.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!You need role that have permission **Manager Channel** | **Administrator**");
            var inputmessage = args.slice(0).join(" ")
            if (args[1]) {
              welcomeimg[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./src/json/leave.json", JSON.stringify(welcomeimg), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`leave Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (option.match("on")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./src/json/leaveonoff.json", "utf8"));
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!You need role that have permission **Manager Channel** | **Administrator**");
            
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./src/json/leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`leave event has been **on**.`)
                .setTimestamp()
                .setFooter("leave Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            var welcomesetting = JSON.parse(fs.readFileSync("./src/json/leaveonoff.json", "utf8"));
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!You need role that have permission **Manager Channel** | **Administrator**");
            
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./src/json/leaveonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`leave has been **off**.`)
                .setTimestamp()
                .setFooter("leave Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("info")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./src/json/leave.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**leave:**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**leave:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}

 

exports.conf = {
  aliases: [], 
  cooldown: '5'
} 
exports.help = {
  name: 'leave', 
  description: 'Set the leave when \`member join\`, \`member leave\` ', 
  usage: 'leave'
} 