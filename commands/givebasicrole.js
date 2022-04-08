module.exports = {
    name: 'givebasicrole',
    description: 'give member role manually to users',
    execute(message, args){
        member = message.mentions.users.first();
        let memberTarget = message.guild.members.cache.get(member.id);
        let welcomeRole = message.guild.roles.cache.find(role => role.name === '.☆Homie☆.。');

        if(member){

            

            memberTarget.roles.add(welcomeRole);
            memberTarget.guild.channels.cache.get('961316217451319368').send(`welcome ${member.username} to the server`);

        }else{
            message.channel.send("Can't find member");
        }
    }
}