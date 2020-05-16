/*const Discord = require("discord.js");
const { Canvas } = require('canvas-constructor');
let xp = require("../../database/xp.json");

exports.run = async (client, message, args, color) => {
  if (message.channel.type == "dm") return;
  
var user = message.mentions.users.first() || client.users.get(args[0]);
  if(!user) user = message.author;
  if (user.bot) return message.channel.send(`**${message.author.username}, Bot don't have level!**`);
  //wajib biar ga undefined json
  if(!xp[user.id]){
   xp[user.id] = {
     xp: 0,
     level: 1
  };
}
  //buat read json
  let curxp = xp[user.id].xp;
  let curlvl = xp[user.id].level;
  let nxtLvlXp = curlvl * 500;
  let difference = curxp/nxtLvlXp *297;
  let difference2 = nxtLvlXp - curxp;
  
  try {
  async function createCanvas() {
  return new Canvas(300,50)
.setColor('lightgrey')
.addRect(0,0,300,200)
.setColor('#f44262')
.addRect(0,0,difference, 200)
.setTextFont('bold 15px Courier New') 
.setColor('#000000') 
.addText(`${curxp} / ${nxtLvlXp}`, 120,30)
.toBufferAsync() 
  } 
    let m = await message.channel.send('*Please Wait...*');
  const gumen = `
__**\`${user.username}\`'**s level information__

Current Level: **${curlvl}** - Total XP : **${curxp}**
Progress: ${getProgbar(curxp, nxtLvlXp, 10)}
Needed XP to reach level **${curlvl +1}** : **${difference2}**
`;
message.channel.send(gumen, {file: new Discord.Attachment(await createCanvas(), 'xp progress till level up.png')}).then(() => {m.delete()})
  } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later.`);
  } 
}
 function getProgbar(current, max, length){
   const curBer = Math.floor((current/max)*length);
   let str = '';
   for(let i = 0; i < length; i++){
       str += i < curBer ? '✅' :'⬛'
   }
    return str;
}

global.progBar = getProgbar

exports.conf = {
    aliases: ["lvl"],
    cooldown: "4"
}

exports.help = {
    name: 'level',
    description: 'To check someone level',
    usage: 'level [@mention]'
}*/

const Discord = require("discord.js");
const { Canvas } = require('canvas-constructor');
const { get } = require('node-superfetch');
let xp = require("../../database/xp.json");


exports.run = async (client, message, args, color) => {
  if (message.channel.type == "dm") return;
  
var user = message.mentions.users.first() || client.users.get(args[0]);
  if(!user) user = message.author;
  if (user.bot) return message.channel.send(`**${message.author.username}, Bot don't have level!**`);
  //wajib biar ga undefined json
  if(!xp[user.id]){
   xp[user.id] = {
     xp: 0,
     level: 1
  };
}
  //buat read json
  let curxp = xp[user.id].xp;
  let curlvl = xp[user.id].level;
  let nxtLvlXp = curlvl * 500;
  let difference = curxp/nxtLvlXp *1135;
  let difference2 = nxtLvlXp - curxp;
  
  try{
   async function createCanvas() {
    var imageUrlRegex = /\?size=2048$/g;
    var namam = user.username;
    var jadim = namam.length > 10 ? namam.substring(0, 12) + "..." : namam;
    var {body: avatar} = await get(user.displayAvatarURL.replace(imageUrlRegex, "?size128"));
    var {body: background1} = await get('https://cdn.discordapp.com/attachments/697137978321141821/703790713808224266/PicsArt_04-26-09.10.22.jpg')

  
     
     return new Canvas(1920, 835)
    .addImage(background1, 0,0,1920,835)
    .setTextFont('bold 90px Impact') 
    .setColor('#ff9900')
    .addText(`${jadim}#${user.discriminator}`, 930, 180)
    .addText(`Level ${curlvl}`, 1200,530) 
    .setColor('lightgrey')
    .setColor('#f44262')
    .addRect(770,650,difference, 160)
    .setTextFont("bold 60px RobotoRegular")
    .setColor("#00ffdc")
    .setTextAlign("center")
    .addText(`XP: ${curxp} / ${nxtLvlXp}`, 1330, 750)
    .addRoundImage(avatar, 50, 130, 550, 550, 550/2)
    .toBufferAsync() 
      }
  
  let m = await message.channel.send('*Please Wait...*');
 
  const gumen = `
**User Level card for ${user.tag}**
`; message.channel.send( {file: new Discord.Attachment(await createCanvas(), 'level.png')}).then(() => {m.delete()})

  }catch (e){
       message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later.`);
  }
}
 function getProgbar(current, max, length){
   const curBer = Math.floor((current/max)*length);
   let str = '';
   for(let i = 0; i < length; i++){
       str += i < curBer ? '✅' :'⬛'
   }
    return str;
}

global.progBar = getProgbar

exports.conf = {
    aliases: ["lvl"],
    cooldown: "4"
}

exports.help = {
    name: 'level',
    description: 'To check someone level',
    usage: 'level [@mention]'
}