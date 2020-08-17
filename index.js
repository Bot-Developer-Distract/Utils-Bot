const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix } = require("./config.json")
usedCommandRecently4 = new Set();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  //client.user.setActivity("Moon", {type: "LISTENING"})
});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
      return
    }

    var getUser = receivedMessage.author.toString() + ' ';
    let args = receivedMessage.content.substring(prefix.length).split(" ");

    switch(args[0]) {
      case 'help':
      receivedMessage.channel.send(`Command:\n ${prefix}help`)
      receivedMessage.delete();
	     break;
      case 'c':
       var string = `a b c d e f g h i k l m n o p q r s t u v x y A B C E D F G H J I K L M N O P Q R S T U X Y`

        var words = string.split(' ');
        let random1 = words[Math.floor(Math.random()*words.length)];
        let random2 = words[Math.floor(Math.random()*words.length)];
        let random3 = words[Math.floor(Math.random()*words.length)];
        let random4 = words[Math.floor(Math.random()*words.length)];
        let random5 = words[Math.floor(Math.random()*words.length)];
        let random6 = words[Math.floor(Math.random()*words.length)];
        let random7 = words[Math.floor(Math.random()*words.length)];
        let random8 = words[Math.floor(Math.random()*words.length)];
        let random9 = words[Math.floor(Math.random()*words.length)];
        let random10 = words[Math.floor(Math.random()*words.length)];
        let random11 = words[Math.floor(Math.random()*words.length)];
        let random12 = words[Math.floor(Math.random()*words.length)];
        let random13 = words[Math.floor(Math.random()*words.length)];
        let random14 = words[Math.floor(Math.random()*words.length)];
        let random15 = words[Math.floor(Math.random()*words.length)];
        let random16 = words[Math.floor(Math.random()*words.length)];

	       receivedMessage.author.send(`${random1}` + `${random2}` + `${random3}` + `${random4}` + `${random5}` + `${random6}` + `${random7}` + `${random8}` + `${random9}` + `${random10}` + `${random11}` + `${random12}` + `${random13}` + `${random14}` + `${random15}` + `${random16}`);
	        receivedMessage.delete();
	         break;
}
});

client.login(token);
