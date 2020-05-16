const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const Canvass = require("canvas");
const fs = require("fs");

const applyText = (canvas, text) => {
  const ctx = canvas.getContext("2d");
  let fontSize = 70;

  do {
    ctx.font = `bold ${(fontSize -= 10)}px sans-serif`;
  } while (ctx.measureText(text).width > canvas.width - 300);

  return ctx.font;
};
const applyText2 = (canvas, text) => {
  const ctx = canvas.getContext("2d");
  let fontSize = 70;

  do {
    ctx.font = `bold ${(fontSize -= 10)}px sans-serif`;
  } while (ctx.measureText(text).width > canvas.width - 300);

  return ctx.font;
};


module.exports = async(client, member) => {
    var welcome = JSON.parse(fs.readFileSync("./src/json/welcome.json", "utf8"));
    let welcomesetting = JSON.parse(
      fs.readFileSync("./src/json/welcomeonoff.json", "utf8")
    );
    if (!welcomesetting[member.guild.id]) {
      welcomesetting[member.guild.id] = {
        values: 1
      };
    }
    if (!welcome[member.guild.id]) return;
    let values = welcomesetting[member.guild.id].checker;

    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
      var welcome = JSON.parse(fs.readFileSync("./src/json/welcome.json", "utf8"));
      if (!welcome) return;
      let channel = member.guild.channels.get(
        `${welcome[member.guild.id].nick}`
      );
      if (!channel) return;

      var imageArray = [
        "https://cdn.discordapp.com/attachments/503595863814438914/578118432965394433/welcome-image1.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118405282856960/welcome-image2.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118407619346442/welcome-image4.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118413566869505/welcome-image5.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118421057765376/welcome-image7.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118424257888259/welcome-image8.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118426204045314/welcome-image9.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118415114436615/welcome-image6.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118426204045314/welcome-image9.jpg"
      ];
      var cuddle = [Math.floor(Math.random() * imageArray.length)];
      const guild = member.guild;
      var color = [
        "#ecd012",
        "#8edb30",
        "#d3dbd3",
        "#ffffff",
        "#fafdcb",
        "#ffffff",
        "#c0c096"
      ];
      var random = [Math.floor(Math.random() * color.length)];
      var color2 = [
        "#0000ff",
        "#fff600",
        "#ff0000",
        "#fa00ff",
        "#4cff00",
        "#00ffe1",
        "#ffae00"
      ];
      var random2 = [Math.floor(Math.random() * color.length)];

      //	const channel = member.guild.channels.find(ch => ch.name === 'wel-test');
      //	if (!channel) return;

      const canvas = Canvass.createCanvas(780, 250);
      const ctx = canvas.getContext("2d");

      const background = await Canvass.loadImage(`${imageArray[cuddle]}`);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#000000";
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      // Slightly smaller text placed above the member's display name
      ctx.font = applyText(canvas, "Welcome");
      ctx.fillStyle = `${color[random]}`;
      ctx.fillText("Welcome", canvas.width / 3.2, canvas.height / 3.5);

      // Add an exclamation point here and below
      ctx.font = applyText2(canvas, `${member.displayName}!`);
      ctx.fillStyle = `${color2[random2]}`;
      ctx.fillText(
        `${member.displayName}!`,
        canvas.width / 2.7,
        canvas.height / 1.8
      );

      let bots = guild.members.filter(m => m.user.bot).size;
      let members = member.guild.memberCount;
      ctx.font = "bold 25px Sans";
      ctx.fillStyle = "#ffff00";
      ctx.fillText(
        `: ${members} Member`,
        canvas.width / 2.82,
        canvas.height / 1.25
      );

      ctx.font = "bold 25px Sans";
      ctx.fillStyle = "#ffff00";
      ctx.fillText(
        ` : ${bots} Bots`,
        canvas.width / 1.45,
        canvas.height / 1.25
      );

      ctx.font = "bold 24px Sans";
      ctx.fillStyle = "#ffff00";
      ctx.fillText(
        `Hope you'll enjoy your stay`,
        canvas.width / 1.93,
        canvas.height / 1.06
      );

      ctx.beginPath();
      ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

      const { body: buffer } = await snekfetch.get(
        member.user.displayAvatarURL
      );
      const avatar = await Canvass.loadImage(buffer);
      ctx.drawImage(avatar, 25, 25, 200, 200);

      const attachment = new Discord.Attachment(
        canvas.toBuffer(),
        "welcome-image.png"
      );

      //	channel.send(`Welcome to the server, ${member}!`, attachment);

      channel.send(attachment); //`Welcome To **${guild.name}**,You are the **${member.guild.memberCount}** Member!`,
      //   channel.send(`Welcome To **${guild.name}**, **${member}** Hope You Enjoy In This Server\nYou are the **${member.guild.memberCount}** Member!`);
    };
  
  
  
  
  
  
  
  
  
  
  const guild = client.guilds.get('697137051329495181');
  guild.channels.get('697145561123520533').setName(`Total Member : ${guild.memberCount}`)
  let role = [
    "697139652783636601",
    "697139653450399775",
    "697139654465683488",
    "697139655442825278",
    "697139657724526714",
    "697140125913841736",
    "697140130397552730",
    "697140130397552730",
    "697140125913841736",
    "697139657724526714",
    "697139655442825278",
    "697139654465683488",
    "697139653450399775",
    "697139652783636601"
  ];
  let r = [Math.floor(Math.random() * role.length)];
member.addRole(role[r]);
member.addRole("697140331707105480");  
}