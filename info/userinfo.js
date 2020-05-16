const Discord  = require('discord.js');
const moment = require('moment')
exports.run = async (client, message, args, color, prefix) => {
const bot = client
 	let user;
	let find = args.join(' ');
	if (find) {
		user = message.mentions.users.first();
	}
	if (!user) user = message.author;
	const muser = message.guild.member(user);

	const embed = new Discord.RichEmbed()
		.setTitle(user.username + `' Information`)
		.setColor(`PURPLE`)
		.setThumbnail(user.avatarURL)
		.addField('Display Name', muser.displayName, true)
		.addField('Username', user.username, true)
		.addField('Discriminator', user.discriminator, true)
		.addField('Discord tag', user.tag, true)
		.addField('ID',` ||${user.id} || `, true)
		.addField('Status', user.presence.status, true)
		.addField(
			'Game',
			user.presence.game ? user.presence.game.name : 'None',
			true
		)
		.addField('Account Created', user.createdAt, true)
		.addField('Joined Server',`${moment(muser.joinedAt).format('YYYY/M/D HH:mm')}  \`${moment(muser.joinedAt).fromNow()}\``, true)
		.addField('Highest Role', muser.highestRole, true)
		.addField(
			'Roles',
			muser.roles.map(roles => `${roles.name}`).join(', @'),
			true
		)
		.setFooter(user.tag + `'s Information`, user.avatarURL)
		.setTimestamp();
	return message.channel.send(embed);
}

exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "userinfo",
    description: "Get information about a user",
    usage: "userinfo [@user]"
}
