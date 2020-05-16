const Discord  = require('discord.js');
const moment = require('moment')
exports.run = async (client, message, args, color, prefix) => {
	let role =
		message.mentions.roles.first() ||
		message.guild.roles.get(args[0]) ||
		message.guild.roles.find(role => role.name === args[0]);

	if (!role) role = message.member.highestRole;

	const roleinfoE = new Discord.RichEmbed()
		.setTitle(`Role: ${role.name}`)
		.setColor(`PURPLE`)
		.addField('ID', role.id, true)
		.addField('Members', role.members.size, true)
		.addField('HEX Code', role.hexColor, true)
		.addField('Creation Date', role.createdAt.toDateString(), true)
		.addField(
			'Bot Controls',
			`Managed: ${role.managed.toString()}, Editable: ${role.editable.toString()}`,
			true
		);
	roleinfoE.setFooter(`${role.name}'s Information`);
	roleinfoE.setTimestamp;
	return message.channel.send(roleinfoE);
}

exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "roleinfo",
    description: "Get information about a role",
    usage: "roleinfo [rolename]"
}
