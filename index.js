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

client.on('ready', () => {
    console.log('bot is online')
});

client.on('guildMemberAdd', guildMember =>{
    message.channel.send("hello");
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('961316217451319368').send(`welcome ${guildMember.username} to the server`);
});

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    args = message.content.slice(prefix.length).split(" ");
    command = args.shift().toLowerCase();

    if(command == 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command == 'poop'){
        client.commands.get('poop').execute(message, args);
    } else if(command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command == 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command == 'givebasicrole'){
        client.commands.get('givebasicrole').execute(message, args);
    }
});












client.login('OTYwOTMwNjkzNzM3NzQyMzk2.Ykxmcg.BN57Lv0uYu8r4MrPCytnj3Itp7w');