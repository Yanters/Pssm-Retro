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
            var pp=0,zp=0,op=0,lp=0,up=0,kp=0;
           
            for(var i=0; i<args.length;i++)
            {
                if(args[i]="test")
                {
                    pp=i;
                }
                if(args[i]="Z")
                {
                    zp=i;
                }
                if(args[i]="O")
                {
                    op=i;
                }
                if(args[i]="L")
                {
                    lp=i;
                }
                if(args[i]="U")
                {
                    up=i;
                }
                if(args[i]="K")
                {
                    kp=i;
                }

            }

            for(var i=pp+1; i<zp;i++)
            {
                p = p +" "+ args[i];
            }
            for(var i=zp+1; i<op;i++)
            {
                z = z +" " + args[i];
            }
            for(var i=op+1; i<lp;i++)
            {
                o = o +" " + args[i];
            }
            for(var i=lp+1; i<up;i++)
            {
                l = l +" " + args[i];
            }
            for(var i=up+1; i<kp;i++)
            {
                u = u +" " + args[i];
            }
            for(var i=kp+1; i<args.length;i++)
            {
                k = k +" " + args[i];
            }
           
            message.channel.sendMessage(pp);
            message.channel.sendMessage(zp);
            message.channel.sendMessage(op);
            message.channel.sendMessage(lp);
            message.channel.sendMessage(up);
            message.channel.sendMessage(kp);
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
