/*const { get } = require("node-superfetch");

exports.run = async (client, message, args, color, prefix) => {
  
  const shipped = message.mentions.members.size === 2 ? message.mentions.members.array()[1] : message.member;
    const shipper = message.mentions.members.size === 1 || message.mentions.members.size === 2 ? message.mentions.members.array()[0] : message.member;
    const first_length = Math.round(shipper.displayName.length / 2);
    const first_half = shipper.displayName.slice(0, first_length);
    const second_length = Math.round(shipped.displayName.length / 2);
    const second_half = shipped.displayName.slice(second_length);
    const final_name = first_half + second_half;
    const score = Math.random() * (0, 100);
    const prog_bar = Math.ceil(Math.round(score) / 100 * 10);
    const counter = "▰".repeat(prog_bar) + "▱".repeat(10 - prog_bar);
    const m = await message.channel.send('*Please Wait...*');
  message.channel.startTyping();
    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=ship&user1=${shipper.user.displayAvatarURL}&user2=${shipped.user.displayAvatarURL}`);

    return message.channel.send({
      embed: {
        "title": `${shipper.displayName} ❤ ${shipped.displayName}`,
        "description": `**Love %**\n${counter}\n\n${final_name}`,
        "url": body.message,
        "color": 6192321,
        "image": {
          "url": body.message
        },
        "footer": {
          "icon_url": message.author.displayAvatarURL,
          "text": `Request by ${message.author.tag} | ${client.user.username} v${client.version}`
        }
      }
    }).then(() => {m.delete(); message.channel.stopTyping();});

}*/
const { RichEmbed } = require('discord.js');
const { Canvas } = require('canvas-constructor');
const Discord = require('discord.js');
const { get } = require('node-superfetch');

Canvas.registerFont(`${process.cwd()}/src/assets/font/NotoEmoji-Regular.ttf`, "NotoEmoji") 
Canvas.registerFont(`${process.cwd()}/src/assets/font/Roboto-Regular.ttf`, "RobotoRegular") 

exports.run = async (client, message, args, color, prefix) => {

  const shipped = message.mentions.members.size === 2 ? message.mentions.members.array()[1] : message.member;
    const shipper = message.mentions.members.size === 1 || message.mentions.members.size === 2 ? message.mentions.members.array()[0] : message.member;
    const first_length = Math.round(shipper.displayName.length / 2);
    const first_half = shipper.displayName.slice(0, first_length);
    const second_length = Math.round(shipped.displayName.length / 2);
    const second_half = shipped.displayName.slice(second_length);
    const final_name = first_half + second_half;
    var bondLevel = Math.floor(Math.random() * 102);
  if (bondLevel > 100 ) {
        var ship = 'Perfect Couple <3_<3 :ok_hand:'
    } else
    if (bondLevel == 100) {
        var ship = 'Lit Couple <3 :ok_hand:'  
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Great Couple <3' 
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Great Couple <3'
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Great Couple <3' 
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'A littly risky but can work out! ' 
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'Eh.'
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = 'Eh. '  
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = 'Eh. '
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Eh. '
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'No Comment'
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Rip'
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Rip'
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Not even possible...'
        }


  message.channel.startTyping();
  
  try {
  async function createCanvas() {
    var imageUrlRegex = /\?size=2048$/g;
    var namam = shipper.user.username;
    var jadim = namam.length > 10 ? namam.substring(0, 13) + '..' : namam;
    var namam1 = shipped.user.username;
    var jadim1 = namam1.length > 10 ? namam1.substring(0, 13) + '..' : namam1;
    
    
    var {body: avatar} = await get(shipper.user.displayAvatarURL.replace(imageUrlRegex, "?size128"));
   var {body: avatar2} = await get(shipped.user.displayAvatarURL.replace(imageUrlRegex, "?size128"));
    var {body: background} = await get("https://cdn.discordapp.com/attachments/697137978321141821/704862947184214136/PicsArt_04-29-08.06.44.jpg")
   // const lines = client.util.getWrapText(info, 17);

  return new Canvas(1920, 1200)
    .setColor('#000000')
    .addImage(background, 0,0,1920,1200)
    .setTextFont('bold 90px NotoEmoji, RobotoRegular') 
    .addText(`${jadim}`, 60, 920)
    .addText(`${jadim1}`,1250  ,300)
    .addText(`${bondLevel}%`,850  ,640)
    .addImage(avatar, 60, 110, 600, 600, 600)
    .addImage(avatar2, 1265, 480, 600, 600, 600)
    .toBufferAsync();

  }
   
  let m = await message.channel.send('*Please Wait...*');
 
  message.channel.send(`${shipper.displayName}#${shipper.user.discriminator} ❤ ${shipped.displayName}#${shipped.user.discriminator} \n${ship}`, {file: new Discord.Attachment(await createCanvas(), 'ship.png')}).then(() => {m.delete(); message.channel.stopTyping();});

    }catch (e) {
    message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later.`);
  }
  
}

exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "ship",
    description: "Ship user1 and user2",
    usage: "ship [@user1] [@user2]"
}
