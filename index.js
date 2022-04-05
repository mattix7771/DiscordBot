const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-';

client.once('ready', () => {
    console.log('bot is online')
})

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    list = message.content.slice(prefix.length).split(" ");
    cmd = list.shift().toLowerCase();

    if(cmd == 'ping'){
        message.channel.send('pong');
    }
});












client.login('OTYwOTMwNjkzNzM3NzQyMzk2.Ykxmcg.BN57Lv0uYu8r4MrPCytnj3Itp7w');