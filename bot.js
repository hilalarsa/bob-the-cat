const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

var triggerArray = [
	{trigger: "hey", response: "hey whaddup"},
	{trigger: "banana", response: "poteto"},
	{trigger: "lick me bob", response: "*lick lick lick*"},
	{trigger: "bob attac", response: "*kicks you in the nut*"},
	{trigger: "bob protecc", response: "*def!!*"}
]

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message)
	triggerArray.map(item=>{
		if(message.content == item.trigger){
			message.channel.send(item.response)
			return;
		}
	})
});

client.login(process.env.BOT_TOKEN);

