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

            for(var i=0; i<args.length;i++)
            {
                if(args[i]="P:")
                {
                    if(args[i]!="Z:")
                    {
                        p= p + args[i+1];
                    }
                }
                if(args[i]="Z:")
                {
                    if(args[i]!="O:")
                    {
                        z= z + args[i+1];
                    }
                }
                if(args[i]="O:")
                {
                    if(args[i]!="L:")
                    {
                        o= o + args[i+1];
                    }
                }
                if(args[i]="L:")
                {
                    if(args[i]!="U:")
                    {
                        l= l + args[i+1];
                    }
                }
                if(args[i]="U:")
                {
                    if(args[i]!="K:")
                    {
                        u= u + args[i+1];
                    }
                }
                if(args[i]="K:")
                {
                    if(i<args.length)
                    {
                        k= k + args[i+1];
                    }
                }
            }
            message.channel.sendMessage(args[1]);
            message.channel.sendMessage(p);
            message.channel.sendMessage(z);
            message.channel.sendMessage(o);
            message.channel.sendMessage(l);
            message.channel.sendMessage(u);
            message.channel.sendMessage(k);
            /*var exampleEmbed = new Discord.RichEmbed()
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
