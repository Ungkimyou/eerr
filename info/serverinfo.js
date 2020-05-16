const Discord  = require('discord.js');

exports.run = async (client, message, args, color, prefix) => {
const bot = client
     let roles = message.guild.roles
    let role = roles.array().join('|')
    let emojis = message.guild.emojis;
    let emoji = emojis.array().join(" ")
    let verif = message.guild.verified; 
    let textverif = 'This guild is not verified';
    let notif = message.guild.defaultMessageNotifications;
    let contentID = message.guild.explicitContentFilter;
    let contentIDtext = ''; 
    let joinedAt = message.guild.createdAt;
    let AFK = message.guild.afkChannel;
    let region = message.guild.region;
    let auth = message.guild.mfaLevel
    const textchannels = message.guild.channels.filter(m => m.type === 'text')
    const vocalchannels = message.guild.channels.filter(m => m.type === 'voice')
    const parentchannels = message.guild.channels.filter(m => m.type === 'category')
    let Large = message.guild.large;
   
    
    if(Large === false) {
        Large = 'No (There are less than 250 members on your server)'
    }

    if(Large === true) {
        Large = 'Yes (There are more than 250 members on your server)'
    }

    if(textchannels.length > 40) {
        textchannels = 'Too many channels'
    }

    if(vocalchannels.length > 40) {
        vocalchannels = 'Too many channels'
    }


    if(parentchannels.length > 40) {
        parentchannels = 'Too many channels'
    }


    if(auth === 0) {
        auth = 'Disable'
    }

    if(auth === 1) {
        auth = 'Enable'
    }

    if(AFK === null) {
        AFK = 'No channel'
    }

    if(contentID === 0) {
        contentIDtext = 'Don\'t scan any message.';
    }

    if(contentID === 1) {
        contentIDtext = 'Scan messages from members without a role.';
    }

    if(contentID === 2) {
        contentIDtext = 'Scan messages by all members.';
    }

    if(roles.size > 20) {
        role = 'Too many roles'
    }

    if(emojis.size > 15) {
        emoji = 'Too many emojis'
    }

    if(verif === true) {
        textverif === 'Your guild is verified'
    }

    if(notif === 'ALL') {
        notif = 'All messages'
    }

    if(notif === 'MENTIONS') {
        notif = 'Only @mentions'
    }

    const embed1 = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .addField(`Name`, `${message.guild.name}`, true)
        .addField(`IconURL`, `[IconURL](${message.guild.iconURL})`, true)
        .addField(`ID`, `${message.guild.id}`, true)
        .addField('Owner', `<@${message.guild.ownerID}> ||(${message.guild.ownerID})|| `) 
        .addField('Region', region, true)
        .addField('Verified', verif, true)
        .addField('Notification', notif, true)
        .addField('Members', message.guild.memberCount + ' Members', true)
        .addField('Roles', message.guild.roles.size, true)
        .addField('Emojis', message.guild.emojis.size, true)
        .addField('Channels', `Text: ${textchannels.size} Vocal: ${vocalchannels.size} Parent(category): ${parentchannels.size}`, true)
        .addField(`Content filter level`, `${contentIDtext} (${message.guild.explicitContentFilter})`, true)
        .addField('Created At', joinedAt, true)
        .addField('AFK channel', AFK, true)
        .addField('2FA', auth, true)
        .addField('Large', Large, true)
        .addField('Roles display',message.guild.roles.size + " roles\n" +role, true)
        .addField('Emojis display', message.guild.emojis.size + " emojis\n" + emoji, true)
        .addField('Boost Tier', `\`\`\`${message.guild.premiumTier}\`\`\``, true)
        // .addField('Text channels display', textchannels.array().join(' '), true)
        // .addField('Vocal channels display', vocalchannels.array().join(' '), true)
        // .addField('Parent(category) channels display', parentchannels.array().join(' '), true)
        .setThumbnail(message.guild.iconURL) 
        .setColor(`PURPLE`)
        .setTimestamp() //This sets the timestamp.
        .setFooter(`Requested by ${message.author.tag} `)              
              


    message.channel.send(embed1)
}

exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "serverinfo",
    description: "Information of server",
    usage: "serverinfo"
}
