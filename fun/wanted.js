
const { RichEmbed, Attachment } = require('discord.js');

const fsn = require('fs-nextra');
const { Canvas } = require("canvas-constructor");

exports.run = async (client, message, args, color, prefix) => {
  let user = message.mentions.users.first() || client.users.get(args[0]);
  if (!user) user = message.author;
  try {
    const paintMess = await message.channel.send("🖌️ Painting...");
    const plate = await fsn.readFile("./assets/images/plate_wanted.jpg");
    const png = user.avatarURL.replace(/\.gif.+/g, ".png");
    const { body } = await client.snek.get(png);
    const getWanted = new Canvas(400, 562)
      .setColor("#000000")
      .addRect(0, 0, 400, 562)
      .addImage(plate, 0, 0, 400, 562)
      .addImage(body, 86, 178, 228, 228)
      .toBuffer();
    await paintMess.delete();
    return message.channel.send(new Attachment(getWanted, "wanted.png"));
  } catch (e) {
    return message.channel.send(
      `Oh no an error occured :( \`${e.message}\` try again later`
    );
  }
}

exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "wanted",
    description: "wanted someone",
    usage: "wanted <user>"
}
