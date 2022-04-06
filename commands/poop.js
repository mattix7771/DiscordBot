module.exports = {
    name: 'poop',
    description: 'poop command',
    execute(message, args){
        member = message.mentions.users.first();
        
        if(member){
            memberTarger = message.guild.members.cache.get(member.id);
            message.channel.send(`${member.username} has been pooped on`);

        }else{
            message.channel.send("Can't poop on member");
        }
    }
}