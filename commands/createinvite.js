exports.run = (client, message) => {
    let guild = message.guild;
    message.delete();
    /*
      Check's for author permissions
    */
    if (!message.guild.member(message.author).hasPermission('CREATE_INSTANT_INVITE')) {
        return message.reply('OOPS you need permissions to `CREATE_INVITE`').catch(console.error);
    }
    /*
      Generates an infinite invite and sends it
    */
    guild.defaultChannel.createInvite({
        maxAge: 0
    }).then(invite => {
        message.channel.send(`**PERMANT LINK** \n http://discord.gg/${invite.code}`);
    }).catch(console.error);
};
module.exports.help = {
    name: 'createinvite'
};
