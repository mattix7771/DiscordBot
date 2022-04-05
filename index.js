const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-';

const fs = require('fs');
const ping = require('./commands/ping');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(file of commandFiles){
    command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('bot is online')
})

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    args = message.content.slice(prefix.length).split(" ");
    command = args.shift().toLowerCase();

    if(command == 'ping'){
        client.commands.get('ping').execute(message, args);
    }
});












client.login('OTYwOTMwNjkzNzM3NzQyMzk2.Ykxmcg.BN57Lv0uYu8r4MrPCytnj3Itp7w');