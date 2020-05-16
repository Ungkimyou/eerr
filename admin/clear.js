const { RichEmbed } = require('discord.js')
exports.run = async (client, message, args, color) => {
/*  
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}, Sorry but you need \`MANAGE_MESSAGES\` Permission to use this command.**`).then(m => m.delete(7000));
  
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**${message.author.username}, Uh i want do this but i need following permission to \`purge\` to work: \`MANAGE_MESSAGES\`**`).then(x => x.delete(7000));
  
  if (isNaN(args[0])) return message.channel.send(`**${message.author.username}, Please supply a valid amount of messages to purge**!`);
  
  if (args[0] > 100) return message.channel.send(`**${message.author.username}, Please supply a number less than 100**!`).then(u => u.delete(7000));
  
  message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages.**`).then(msg => msg.delete({
      timeout: 5000
    })))
  */
  
  
  const user = message.mentions.users.first();
  const author = message.guild.member(message.author);
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if(author.hasPermission(8192)){
if (!amount){
	var embed = new RichEmbed()
	.setDescription(":x:Error:x:")
	.addField("Type of Error", "You have not specified an amount of messages to delete")
	return message.channel.send(embed);
}


if (!amount && !user){
	var embed = new RichEmbed()
	.setDescription(":x:Error:x:")
	.addField("Type of Error", "You have not mentioned either a user to purge or an amount of messages to purge")
	return message.channel.send(embed);
}


message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
  
});
} else {
	var embed = new RichEmbed()
	.setDescription(":x:Error:x:")
	.addField("Type of Error", "You don't seem to have permission to use this command.")
	return message.channel.send(embed);
}
  
  
}

exports.conf = {
    aliases: ['clear'],
    cooldown: "5"
}

exports.help = {
    name: "clear",
    description: "Removes last of messages from the channel (up to 99)",
    usage: "clear <number> or clear <number 2-99> <@mention>"
}
