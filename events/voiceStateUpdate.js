const Discord = require('discord.js');
const fs = require('fs');

module.exports = (client, voiceOld, voiceNew) => {
     var log = JSON.parse(fs.readFileSync("./src/json/voicelog.json", "utf8"))
 let logsetting = JSON.parse(fs.readFileSync("./src/json/voicelogonoff.json", "utf8"));
     if (!logsetting[voiceOld.guild.id]) {
    logsetting[voiceOld.guild.id] = {
     values: 1
      };
    }
    if(!log[voiceOld.guild.id]) return;  
    let values = logsetting[voiceOld.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var log = JSON.parse(fs.readFileSync("./src/json/voicelog.json", "utf8"))
    if (!log) return;    
 var logChannel = voiceOld.guild.channels.get(`${log[voiceOld.guild.id].nick}`);
  if(!logChannel) return;
      
  voiceOld.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var user0 = logs.entries.first().executor.displayAvatarURL;
      var user2 = logs.entries.first().executor.tag;
      const avatauser = voiceOld.user.displayAvatarURL;
    // Server Muted Voice
      if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
          let serverMutev = new Discord.RichEmbed()

          .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
          .setColor(`RED`) 
          .setDescription(`\n\n**Voice Mute**\n\n**User Muted:** ${voiceOld}\n**Muted By:** <@${userID}>\n**Voice ID:** ${voiceOld.voiceChannel.id}\n**Channel Name:** \`\`\`${voiceOld.voiceChannel.name}\`\`\``)
          .setTimestamp()
          .setFooter(user2, user0)
          logChannel.send(serverMutev);
      }
// Server UnMuted Voice
      if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
          let serverUnmutev = new Discord.RichEmbed()
 
          .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
          .setColor(`BLUE`) 
          .setDescription(`\n\n**Voice Unmute**\n\n**User Unmuted:** ${voiceOld}\n**Unmuted By:** <@${userID}>\n**Voice ID:** ${voiceOld.voiceChannel.id}\n**Channel Name:** \`\`\`${voiceOld.voiceChannel.name}\`\`\``)
          .setTimestamp()
          .setFooter(user2, user0)
          logChannel.send(serverUnmutev);
      }
// Server Deafen Voice
      if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
          let serverDeafv = new Discord.RichEmbed()
    
          .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
          .setColor(`RED`) 
          .setDescription(`\n\n**Voice Dafe**\n\n**User Dafe:** ${voiceOld}\n**Dafe By:** <@${userID}>\n**Voice ID:** ${voiceOld.voiceChannel.id}\n**Channel Name:** \`\`\`${voiceOld.voiceChannel.name}\`\`\``)
          .setTimestamp()
          .setFooter(user2, user0)
          logChannel.send(serverDeafv);
      }
// Server UnDeafen Voice
      if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
          let serverUndeafv = new Discord.RichEmbed()
     
          .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
          .setColor(`BLUE`) 
          .setDescription(`\n\n**Voice Undafe**\n\n**User Undafe:** ${voiceOld}\n**Undafe By:** <@${userID}>\n**Voice ID:** ${voiceOld.voiceChannel.id}\n**Channel Name:** \`\`\`${voiceOld.voiceChannel.name}\`\`\``)
          .setTimestamp()
          .setFooter(user2, user0)
          logChannel.send(serverUndeafv);
      }
  })
// Join member to Voice Channel
  if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
      let voiceJoin = new Discord.RichEmbed()
      //.setThumbnail("https://cdn.discordapp.com/attachments/463656921262587905/493190077111992320/747cff7e36d0b3404929b64c908cb437.jpg")
      .setThumbnail(`${voiceOld.user.displayAvatarURL}`)

      .setColor(voiceOld.guild.me.highestRole.color || '#faca00') 
      .setDescription(`\n\n${voiceOld} Joined To **${voiceNew.voiceChannel.name}** \n **Voice ID:** ${voiceNew.voiceChannelID}`)
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
      logChannel.send(voiceJoin);
  }
// Leave member from Voice Channel
  if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
      let voiceLeave = new Discord.RichEmbed()
      //.setThumbnail("https://cdn.discordapp.com/attachments/463656921262587905/493190077111992320/747cff7e36d0b3404929b64c908cb437.jpg")
      .setThumbnail(`${voiceOld.user.displayAvatarURL}`)
    
      .setColor(voiceOld.guild.me.highestRole.color || '#faca00') 
      .setDescription(`\n\n${voiceOld} Leave From **${voiceOld.voiceChannel.name}**`)
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
      logChannel.send(voiceLeave);
  }
// Changed Voice Channel
  if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
      let voiceLeave = new Discord.RichEmbed()
      //.setThumbnail("https://cdn.discordapp.com/attachments/463656921262587905/493190077111992320/747cff7e36d0b3404929b64c908cb437.jpg")
      .setThumbnail(`${voiceOld.user.displayAvatarURL}`)

      .setColor(voiceOld.guild.me.highestRole.color || '#faca00') 
      .setDescription(`\n\nChanged The Voice Channel.\n\n**By:** ${voiceOld}**From:** \`\`\`${voiceOld.voiceChannel.name}\`\`\`\n**To:** \`\`\`${voiceNew.voiceChannel.name}\`\`\``)
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
      logChannel.send(voiceLeave);
  }}
};