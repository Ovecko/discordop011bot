const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg = {
  if (msg.content === 'hello') {
    msg.reply('hi!');
  }
});

client.login(process.env.BOT_TOKEN);