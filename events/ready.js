const http = require("http");
const express = require("express");
const app = express();

  

// const superagent = require('superagent');
// // const { get } = require('node-superfetch');
// const { RichEmbed } = require("discord.js");
// const client = new Discord.Client();
const fs = require("fs");
const server = http.createServer(app);

const DBL = require('dblapi.js');
const dbl = new DBL(process.env.TOPGG_TOKEN, { webhookPort: 3000, webhookAuth: 'khlang', webhookServer: server });





module.exports = async client => {
  //setTimeout(async () => {
    
      let guildsEval = await client.shard.broadcastEval('this.guilds.size')
      let channelsEval = await client.shard.broadcastEval('this.channels.size')
      let usersEval = await client.shard.broadcastEval('this.users.size')

     var botGuilds = guildsEval.reduce((prev, val) => prev + val)
     var botChannels = channelsEval.reduce((prev, val) => prev + val)
     var botUsers = usersEval.reduce((prev, val) => prev + val)
    
         var clientonmessage = `
| > Logging in...                       |
|                                       |
| Logged in as ${client.user.tag}      |
| Working on ${botGuilds} servers!                |
| ${botChannels} channels and ${botUsers} users cached!   |
|                                       |
|     LET'S GO!                         |
|                                       |
| Bot created by Kimyou |
        
-----------------Bot's commands logs------------------`
      
  console.log(clientonmessage) 
    const activities = require('../../src/assets/json/status');

    client.setInterval(() => {
		const activity = activities[Math.floor(Math.random() * activities.length)];
		client.user.setActivity(`//help | ${activity.text}`, { type: activity.type });
	}, 25000);
  
	 client.user.setStatus(`idle`)//.then(console.log)
  
  setInterval(() => require('quick.db').add('uptime', client.uptime), 3600000)
  // update stats
  setInterval(() => client.updateStats(), 1000 * 60);
  
  client.setInterval(() => {
  	for(const guild of client.guilds.array()){
	  	const channel = guild.channels.filter(x => x.name === 'neko-present').first();
	  	if(!channel) continue;
		client.commands.get('neko').getNeko(channel, 'Hourly Neko Present');
  	}
  },3600000)// 3600000);
  
//}, 10000)
  
  
  
  
  
  dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});

dbl.webhook.on('vote', async  (vote, message )=> {  
  
    console.log(`User with ID ${vote.user} just voted!`);
  
  try{
//  let {body} = await superagent.get(`https://hd-development.glitch.me/api/fetchUser?id=${vote.user}`);
//   let embed = new RichEmbed() 
// //  .setColor('RANDOM') 
//  .setThumbnail(body.avatarURL)   
//  // .setAuthor('KhangBot vote Webhook', 'https://cdn.discordapp.com/emojis/338808864352763904.png') 
//   .setDescription(`***${body.tag}*** Just voted EDGE\nWith ID: ${vote.user}`)
//   .setTimestamp();
// let U = client.channel.get('704011970478735450')
 

  let user = client.users.get(vote.user) || await client.fetchUser(vote.user)
   user.send("thanks for vote bot")
//   // await client.channels.get("702189119027281942").send(embed)
//  let bal = require('../../database/balance.json');
//   const fs = require('fs');
//   // let user = client.users.get(vote.user) || await client.fetchUser(vote.user)
// let amount = 10000
// if(!bal[user]){
//     bal[user] = {
//       balance: 0
//     };
//   }
//      let curBall = bal[user].balance;
//     bal[user].balance = curBall + amount
//   fs.writeFile('./src/database/balance.json', JSON.stringify(bal, null, 2), (err) => {
//    user.send(`Hey your ID **${user}**, You got \💲 **${amount}** now u have **${curBall + amount}**\n vote to get 10,000 coins`);
//     if(err) console.log(err);  
//   })

  return client.channels.get('704011970478735450').send(`> <@${vote.user}> Just vote on Khlang bot \n> With ID: ${vote.user}\n> ${vote.type} ${vote.isWeekend}`)

  } catch (e) {
    console.log(`Oh no an error occurred :( \`${e.message}\` try again later.`);
  }
});
  
server.listen(process.env.PORT, () => {
  console.log('Listening');
  console.log(process.env.PORT)
});


  
  
  
}