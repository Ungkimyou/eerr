const Discord  = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
const bot = client
 
if (!args[0]) {
		const emojiList = message.guild.emojis
   // const emojiList = message.guild.emoajis.filter(e => e.animated)//.map(e => e)
    //let emojiID = message.emojis.filter(e => e.id)
    // let ee = `\`${emoji.name}\``
// const emojiList = message.guild.emojis.filter(e => e.animated === true)//.map(e => e.name)

			.map(e => e + ' = ' + e.name)
			.join('\n');
		message.channel.send(`Do \`${prefix}emoji (name emoji here)\` to show ID of emoji\nExample : ${prefix}emoji ping \n\`Note: ping is name of emoji\` \n__**Emoji In Server**__\n${emojiList}\n\nServer ${message.guild.name} has ${message.guild.emojis.size} emojis\nPowered by khlang-bot | by : ${message.author.tag} `, { split: true });              
	} else {
    const emojiList = message.guild.emojis
   
		const emoji = emojiList.find(e => e.name === args[0])
		if (!emoji) {
			message.reply(`No Emoji's Found`);
		} else {
      const embed = new Discord.RichEmbed()
                    .setAuthor(`Emoji name: :${emoji.name}:`)
                    .setImage(`https://cdn.Discordapp.com/emojis/${emoji.id}.png`)
                    .setDescription(``)
                    .setColor('#D5BEC6');
			message.reply(`${emoji} | \`${emoji}\``);
		}
	}}

exports.conf = {
    aliases: [],
    cooldown: "2"
}

exports.help = {
    name: "emoji",
    description: "show all of emoji in sever",
    usage: "emoji"
}
