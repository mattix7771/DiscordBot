module.exports = {
    name: 'clear',
    description: 'clear messages',
    async execute(message, args){
        if(!args[0]) return message.reply("enter amount of messages to clear");
        if(isNaN(args[0])) return message.reply("enter a valid value");
        if(args[0] > 100) return message.reply("maximum value is 100");
        if(args[0] < 1) return message.reply("minumum value is 1");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}