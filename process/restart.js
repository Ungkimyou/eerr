const Discord = require('discord.js');
const { owners_id } = require('../../config.json');

exports.run = async (client, message, args) => {
  
  owners_id.forEach(async function(owner) {
    if(message.author.id !== owner) return;

    message.channel.send("**Rebooting...**").then(m => {
        setTimeout(() => {
            m.edit("**Rebooting...**").then(ms => {
                setTimeout(() => {
                    ms.edit("**Done.**")
                }, 1000)
            })
        }, 1000);

    })
    
    .then(message => process.exit())
    .then(() => client.login(process.env.AKARI))
  });
 }

exports.conf = {
   aliases: ['shutdown', 'rst'], 
   cooldown: ''  
}

exports.help = {
  name: 'restart',
  description: 'This will restart the bot instance.',
  usage: 'restart'
};