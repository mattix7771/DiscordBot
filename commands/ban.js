module.exports = {
    name: 'ban',
    description: 'ban users',
    execute(message, args){
        member = message.mentions.users.first();
        
        if(member){
            memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(`${member.username} has been banned`);

        }else{
            message.channel.send("Can't ban member");
        }
    }
}