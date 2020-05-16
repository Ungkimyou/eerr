const { Attachment } = require("discord.js");
const Canvass = require("canvas");
const { Canvas } = require("canvas-constructor");

module.exports.run = async (client, msg, args) => {
  let user = msg.mentions.users.first() || client.users.get(args[0]);
  if (!user) user = msg.author;
  try {
    const paintMess = await msg.channel.send("🖌️ Painting...");
    const plate = await Canvass.loadImage("https://cdn.discordapp.com/attachments/697137978321141821/703264817623859742/download.png");
    const png = user.avatarURL.replace(/\.(gif|jpg|png|jpeg)\?size=(.+)/g, ".png?size=128");
    const { body } = await client.snek.get(png);
    const giveRespect = new Canvas(720, 405)
      .addRect(0, 0, 720, 405)
      .setColor("#000000")
      .addImage(body, 110, 45, 90, 90)
      .addImage(plate, 0, 0, 720, 405)
      .toBuffer();
    await paintMess.delete();
    return msg.channel.send(new Attachment(giveRespect, "paid-respects.png"))
      .then(x => x.react("🇫"));
  } catch (e) {
    return msg.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
  }
};

module.exports.conf = {
  aliases: ["pressf", "f", "ripme"]
};

module.exports.help = {
  name: "respect",
  description: "Pay respects to someone.",
  usage: "respect [@user | id ]"
};