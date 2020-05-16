const { Attachment } = require("discord.js");
const Canvass = require("canvas");
const { Canvas } = require("canvas-constructor");

module.exports.run = async (client, msg, args) => {
 let user = msg.mentions.users.first() || client.users.get(args[0]);
  if (!user) user = msg.author;
  try {
    const paintMess = await msg.channel.send("🖌️ Painting...");
    const plate = await Canvass.loadImage("https://cdn.discordapp.com/attachments/697137978321141821/703266984711815260/download.png");
    const png = user.avatarURL.replace(/\.gif.+/g, ".png");
    const { body } = await client.snek.get(png);
    const getBeautiful = new Canvas(634, 675)
      .setColor("#000000")
      .addRect(0, 0, 634, 675)
      .addImage(body, 423, 45, 168, 168)
      .addImage(body, 426, 382, 168, 168)
      .addImage(plate, 0, 0, 634, 675)
      .toBuffer();
    await paintMess.delete();
    return msg.channel.send(new Attachment(getBeautiful, "beautiful.jpg"));
  } catch (e) {
    return msg.channel.send(`Oh no an error occured :( \`${e.message}\` try again later`);
  }
};

module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "beautiful",
  description: "Admire the beauty of another user or you",
  usage: "beautiful [@user | id ]"
};
