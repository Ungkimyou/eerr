const fs = require('fs');
const Discord = require('discord.js');

exports.run = async(client, message, args, color, prefix) => {
  
var option = args.join(" ")
            if (!option) {
              var embed1 = new Discord.RichEmbed()
              .setAuthor(`${client.user.username} voicelog`, client.user.displayAvatarURL)
              .setColor('RANDOM')
              .setDescription(`
**Proper Usage:**
• ${prefix}voicelog set \`#tagchannel\`
• ${prefix}voicelog on
• ${prefix}voicelog off
• ${prefix}voicelog info

**Example:**
• ${prefix}voicelog set \`#voice-log\`

**After do that, do again:**
• ${prefix}voicelog on
`)
              .setFooter("voicelog Announcement")
              .setTimestamp()
              message.channel.send(embed1);
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./src/json/voicelog.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!");
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./src/json/voicelog.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`logging set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
  
  
            if (option.match("on")) {
            var logsetting = JSON.parse(fs.readFileSync("./src/json/voicelogonoff.json", "utf8"));
            logsetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./src/json/voicelogonoff.json", JSON.stringify(logsetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`logging event has been **on**.`)
                .setTimestamp()
                .setFooter("logging Enable", client.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            var logsetting = JSON.parse(fs.readFileSync("./src/json/voicelogonoff.json", "utf8"));
            logsetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./src/json/voicelogonoff.json", JSON.stringify(logsetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`logging has been **off**.`)
                .setTimestamp()
                .setFooter("logging Disable", client.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("info")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./src/json/voicelog.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**logging:**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**logging:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}

exports.conf = {
  aliases: ['log'], 
  cooldown: '5'
} 
exports.help = {
  name: 'voicelog', 
  description: 'Set the voicelog to show member leave or join voice channel!', 
  usage: 'voicelog'
} 