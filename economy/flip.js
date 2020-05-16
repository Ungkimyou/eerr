const Discord = require("discord.js");
const fs = require('fs');
const numeral = require('numeral');
let bal = require('../../database/balance.json');
const prefix = '..';

exports.run = (client, message, args) => {
//const cmd = args[0].toLowerCase();
  if(!bal[message.author.id]){
    bal[message.author.id] = {
      balance: 0
    };
  }
  let curBal = bal[message.author.id].balance;
   
  
    let amount = parseInt(args[0]);
    if (args[0] === "all") amount = curBal;
    if (!amount) return args.missing(message, 'You need to specify amount to bet.', client.commands.get('flip').help)
   if (isNaN(amount)) return message.channel.send(`**${message.author.username}**, Please enter valid number!`);
   // if (amount > 99999999999) return message.channel.send('Bet msx to 99999999999 only');
    
    if(bal[message.author.id].balance < amount) return message.channel.send(`**${message.author.username}**, You\'re betting more than you have!`);
    
    
   
//if (cmd === 'cf' || cmd === 'coin' || cmd === 'flip' || cmd === 'coinflip') {

    if (args[1] != undefined) {
      let choice = args[1].toLowerCase(); 
      if (!choice) return message.reply(`head or tail`)
      
      
       // console.log(`choice : ${choice}`);

//         if (choice == 'heads' || choice == 'h' || choice == 'head') {
//             choice = 'heads';
//         }

//         else if (choice == 'tails' || choice == 't' || choice == 'tail') {
//             choice = 'tails';
//         }
        if (choice == 'h' || choice == 'head') {
            choice = 'head';
        }

        else if (choice == 't' || choice == 'tail') {
            choice = 'tail';
        }


        var coins = [
            "tail",
            "head",
            "head",
            "tail",
            "head",
            "head",
            "head",
            "tail",
            "head",
            "tail",
            "head",
            "tail"
        ];
       let coinz = coins[Math.floor(Math.random() * 2, 3, 4, 2)]//nz.length)];2, 3, 4, 2)]

        if (choice != coinz) {
          bal[message.author.id].balance = curBal - amount;
                fs.writeFile('./src/database/balance.json', JSON.stringify(bal, null, 2), (err) => {
                 if(err) console.log(err);
				return message.channel.send({embed: {
                               color: 10110000 ,
                               description: `Outcome: \`${coinz}\` you lose : <:dollar:705795560363524166> ` + numeral(curBal - amount).format('0,0')}});
                })
        } else {
          bal[message.author.id].balance = curBal + amount;
                fs.writeFile('./src/database/balance.json', JSON.stringify(bal, null, 2), (err) => {
                 if(err) console.log(err);
				return message.channel.send({embed: {
                               color: 10110000 ,
                               description: `Outcome: \`${coinz}\` you win : <:dollar:705795560363524166> ` + numeral(curBal + amount).format('0,0')}});
                  })
        };
    }
   
    else {
        message.reply("please choose *heads* or *tails* before the coin flip.");
    }
}



	exports.conf = {
		aliases: [], 
		cooldown: '2'
		} 
		exports.help = {
			name: 'flip', 
			description: 'Play a game of flip.', 
			usage: 'flip <bet> <head or tail>' 
			} 
