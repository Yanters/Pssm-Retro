const { Client, Attachment } = require('discord.js');
const bot = new Client();
const PREFIX = '!';
const cheerio = require('cheerio');
const request = require('request');




bot.on('ready', () => {
    console.log('This bot is online!');
});
bot.on('message', message => {

    

    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0]) {
        case 'not':
            var p="",z="",o="",l="",u="",k="";
            var test = "";
            for(var i=0; i<args.length();i++)
            {
                test += test + " ";
            }
            message.channel.sendMessage(test);
           /* message.channel.sendMessage(p);
            message.channel.sendMessage(z);
            message.channel.sendMessage(o);
            message.channel.sendMessage(l);
            message.channel.sendMessage(u);
            message.channel.sendMessage(k);
            var exampleEmbed = new Discord.RichEmbed()
            .setColor('#A40000')
            .setTitle('Typ akcji:  '+ p)
            .setDescription(` ** Zgłaszający: ** ${z} \n ** Opis zdarzenia: **  ${o}  `)
            .addField(`** Date: ** `, ` *${o}*`)
            .addField(`** Reporter: **`, `*${o}*`);

        message.channel.sendMessage(exampleEmbed);*/

        break;
    }

});


bot.login(process.env.token);
