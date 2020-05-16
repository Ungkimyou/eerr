const Discord  = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
  let users = client.users;
  let searchTerm = args[0];
  if(!searchTerm) {   
    message.channel.send(":x: Failed to search! Please type a term to search!");
    return;
  }
  let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
  message.channel.send(matches.map(u => u.tag));
}

exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "finduser",
    description: "Get about a user",
    usage: "finduser [name user]"
}
