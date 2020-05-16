const Discord  = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
  let sicon = message.guild.iconURL;
 const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, sicon)
    .setColor(`PURPLE`)
    .setThumbnail(sicon)
    .addField('Members', `**${message.guild.memberCount}**`, true)
		.addBlankField(true)
		.addField('Humans', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
		.addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
		.setFooter(`Owner: ${message.guild.owner.user.tag}`)
	message.channel.send(embed)
  message.react("✅");
}

exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "online",
    description: "Get information about a member online",
    usage: "online"
}
