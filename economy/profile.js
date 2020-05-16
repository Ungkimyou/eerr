const { Canvas } = require('canvas-constructor');
const Discord = require('discord.js');
const { get } = require('node-superfetch');

let lepel = require('../../database/xp.json');
let coin = require('../../database/balance.json');
let reps = require('../../database/rep.json');
let info = require('../../database/note.json');
let bg = require('../../database/background.json');
let fishh = require('../../database/fish.json');
let works = require('../../database/works.json');

Canvas.registerFont(`${process.cwd()}/src/assets/font/NotoEmoji-Regular.ttf`, "NotoEmoji") 
Canvas.registerFont(`${process.cwd()}/src/assets/font/Roboto-Regular.ttf`, "RobotoRegular") 

exports.run = async (client, message, args, color) => {
	
  let user = message.mentions.users.first() || client.users.get(args[0]);
  if (!user) user = message.author;
  if (user.bot) return message.channel.send(`**${message.author.username}**, Bot not have a profile!`);
  
  /**
  * Define this all for fix undefined from JSON
  */
  if(!works[user.id]){
  	works[user.id] = {
  	 work: 0
  	};
 	}
 
  if(!fishh[user.id]){
    fishh[user.id] = {
      fish: 0
    };
  } 
  
  if(!bg[user.id]){
    bg[user.id] = {
      background: 'https://cdn.discordapp.com/attachments/492914262482878485/499770634172104715/Dreamy_Underwater_Bubbles_Sun_Light_iPhone_6_HD_Wallpaper-320x480.jpg' 
    };
  }
  
  if(!coin[user.id]){
    coin[user.id] = {
      balance: 0
    };
  }
  if(!lepel[user.id]){
    lepel[user.id] = {
      xp: 0,
      level: 1
    };
  }
  if(!reps[user.id]){
    reps[user.id] = {
      rep: 0
    };
  }
  if(!info[user.id]){
    info[user.id] = {
      note: 'No info set'
    } 
 } 
 
 /**
 * Takes all from JSON before call it
 */
  let xp = lepel[user.id].xp;
  let uLevel = lepel[user.id].level;
  let nxtLvlXp = uLevel * 500;
  let difference = xp/nxtLvlXp *900;
  let balance = coin[user.id].balance;
  let rep = reps[user.id].rep;
  let Info = info[user.id].note
  let background = bg[user.id].background;
  let fish = fishh[user.id].fish;
  let work = works[user.id].work;
  
  /**
  * Create Canvas function
  * Use try and catch for any error will caused
  */
    try {    
  async function createCanvas() {
    var imageUrlRegex = /\?size=2048$/g;
    var namam = user.username;
    var jadim = namam.length > 10 ? namam.substring(0, 12) + "..." : namam;
    var {body: avatar} = await get(user.displayAvatarURL.replace(imageUrlRegex, "?size128"));
    var {body: background1} = await get(background)
    var {body: background2} = await get('https://cdn.discordapp.com/attachments/697137978321141821/703892669495246848/PicsArt_04-26-03.55.35.png');
    var {body: dIcon} = await get('https://orig00.deviantart.net/2133/f/2016/200/f/a/discord_token_icon_dark_by_flexo013-daaj71i.png')
    var {body: FiSh} = await get('https://twemoji.maxcdn.com/2/72x72/1f3a3.png')
    var {body: cIcon} = await get('https://cdn.discordapp.com/attachments/492914262482878485/494027120557817866/chat-message-text-bubble-chatbubble-comment-speech-6-14759.png');
    var {body: wIcon} = await get('https://cdn.discordapp.com/attachments/501064603233681411/502354808750080002/1f4bc.png') 
    const lines = client.util.getWrapText(info, 17);

  return new Canvas(1300, 1200)
    .setColor('#000000')
    .addImage(background1, 0,0,1300,1200)
    .addBeveledImage(background2, 0,0,1300,1200)
    .setTextFont('70px NotoEmoji, RobotoRegular') 
    .addText(`Name: ${jadim}`, 665, 550)
    .setTextFont('30px Impact')
    .setTextFont('28px NotoEmoji')
    .addText(`${Info}`, 425, 805)
    .setTextFont('bold 50px Courier New')
    .addText('Level', 1120,750)
    .addText(`${uLevel}`, 1180,850)
    .setTextFont('40px RobotoRegular') 
    .addText(`${client.util.crFormat(xp)}`, 835, 1020)
    .addText(`💲${client.util.crFormat(balance)}`, 835, 1100)
    .setTextAlign('center')
    .setTextFont('bold 35px Courier New')
    .addText(`${client.util.crFormat(fish)}`,975,750)
    .addText(`${client.util.crFormat(work)}`, 975,900) 
    .setTextFont('bold 40px Courier New')
    .setColor("#006633")
    .addRect(400, 1150, difference, 1050)
    .setTextFont("40px RobotoRegular")
    .setColor("#000000")
    .setTextAlign("center")
    .addText(`XP: ${xp} / ${nxtLvlXp}`, 840, 1190)
    .addRoundImage(avatar, 44, 328, 410, 410, 410/2)
    .setTextFont('50px Impact') 
    .setColor('#ffffff')
    .addText(`+Rep:`, 980,630)
    .addText(`${rep}`, 1100,630) 
    .toBufferAsync();
  }
  
  let m = await message.channel.send('*Please Wait...*');
 
  const gumen = `
**User profile card for ${user.tag}**
`; message.channel.send(gumen, {file: new Discord.Attachment(await createCanvas(), 'profile.png')}).then(() => {m.delete()})

  } catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later.`);
  } 
  

}

exports.conf = {
    aliases: ['pf'],
    cooldown: "10"
}

exports.help = {
    name: "profile",
    description: "See your/someone profile",
    usage: "profile [@mention|userID]"
}