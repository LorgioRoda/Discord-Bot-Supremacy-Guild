const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('message', () => {
    console.log('Client is ready')
});

Client.login(process.env.TOKEN);