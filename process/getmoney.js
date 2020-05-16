const fs = require('fs');
const { owners_id } = require("../../config.json");
let bal = require('../../database/balance.json');

exports.run = async (client, message, args, color) => {
    owners_id.forEach(async function(owner) {
    if (message.author.id !== owner) return;
  
    let amount = parseInt(args[0]);
  
    if (!amount) return args.missing(message, 'You need to specify amount to bet.', client.commands.get('getmoney').help)
    if (isNaN(amount)) return message.channel.send(`**${message.author.username}**, Please enter valid number!`);
  
  if(!bal[message.author.id]){
    bal[message.author.id] = {
      balance: 0
    };
  }
      let curBall = bal[message.author.id].balance;
    bal[message.author.id].balance = curBall + amount
  fs.writeFile('./src/database/balance.json', JSON.stringify(bal, null, 2), (err) => {
    message.channel.send(`Hey **${message.author.id}**, You got \<:dollar:705795560363524166> **${amount}** now u have **${curBall + amount}**`);
    if(err) console.log(err);  
  })
      
      
})
}

exports.conf = {
	aliases: ['gm'],
	cooldown: '2' 
}

exports.help = {
	name: 'getmoney',
	description: 'getmoney Owner',
	usage: 'getmoney <money>'
}