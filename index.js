const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix, token } = require("./config.json")

var sending = false;
var a = 1;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity("Moon", {type: "LISTENING"})
});

client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) {
    return
  }

    var getUser = receivedMessage.author.toString() + ' ';

    if (receivedMessage.content === `${prefix}help`) {
        receivedMessage.channel.send(`**Command available** \n*${prefix}discord* - Get the discord server generator \n*${prefix}help* - Help command`)
      }

    if (receivedMessage.content === `${prefix}alt`) {
      if(a = 1) {
      receivedMessage.channel.send('asd')
      sending = true;
    } else if (sending = false) {
      receivedMessage.channel.send(getUser + 'This command is disabled in here!')
    }
  } else
  receivedMessage.author.send('Tao đéo có quyền dcm')
});

client.login(process.env.BOT_TOKEN);
