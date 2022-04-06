module.exports = {
    name: 'kick',
    description: 'kick users',
    execute(message, args){
        member = message.mentions.users.first();
        
        if(member){
            memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(`${member.username} has been kicked`);

        }else{
            message.channel.send("Can't kick member");
        }
    }
}