const { Client, Attachment } = require('discord.js');
const Discord = require('discord.js');
const bot = new Client();
const PREFIX = '!';








bot.on('ready', () => {
    console.log('This bot is online!');
});
bot.on('message', message => {



    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
       
        case 'amnesia':
            message.channel.sendMessage('dziala')
            break;
        
    }

});


bot.login(process.env.token);
