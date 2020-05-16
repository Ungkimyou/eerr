const http = require("http");
const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", function(request, response) {
 response.sendFile(__dirname + "/views/index.html");
 // response.sendStatus(1000);
 });
/*const listener = app.listen(process.env.PORT, function() {
console.log("Your app is listening on port " + listener.address().port);
 });
*/

const { ShardingManager } = require('discord.js');
const config = require('./src/config.json');

const shards = new ShardingManager('./index.js', {
    token: config.env.TOKEN,
    totalShards: 1
});

shards.on('launch', shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});

shards.on('message', (shard, msg) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] #${shard.id} | ${msg._eval} | ${msg._result}`);
});

shards.spawn();

const keepalive = require("express-glitch-keepalive");
app.use(keepalive);

app.get("/", (req, res) => {
  res.json("Ok");
});