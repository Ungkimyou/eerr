
const Discord = require('discord.js');
exports.run = async (client, message, args, color, prefix) => {

 if(!args[0]) {
       const nickbot = new Discord.RichEmbed()
       .setTitle(`__Ban__: **${message.prefix}ban <<@Name>> <reason>**`)
       .setColor(`PURPLE`)
       return message.channel.send(nickbot).then(msg => msg.delete(8000));
    }
    

  let user = message.mentions.users.first();
  if(!user) return message.reply("Please mention a user");

  let reason = args.join(" ");
        
  if(!reason) reason = "No reason given";

  if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("you don't have BAN_MEMBERS permissions to use this !");
	 let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	 if(!bUser) return message.channel.send("Can't find user!");   
   if(bUser === message.author) return message.channel.send("Are you retarded? Why do you want to ban yourself?")
	 let bReason = args.join(" ").slice(22);
   if(!bReason) return message.channel.send("Please provide a reason!")
	 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No can do pal!");
	 if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person have BAN MEMBERS perm can't be kicked!")
	 if(bUser.highestRole.position >= message.guild.me.highestRole.position) return message.channel.send("I can not ban someone that is a higher role than me!")

          
 
  message.guild.member(bUser).ban(reason).then(messaage => message.react("✅"))
     let embed = new Discord.RichEmbed()
    .setTitle("BAN")
    .addField("Banned In", message.guild.name)
    .setColor("PURPLE")
    .addField("Moderator", message.author.tag)
    .addField("Reason", `${bReason ? bReason : "None."}`)

  try{bUser.send(embed)}catch(e){message.channel.send("Unable to send message to user.")}
  
 

}

exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "ban",
    description: "ban member you want",
    usage: "ban <@user> <reason>"
}
