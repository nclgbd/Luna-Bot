/**
 * This is LunaBot, or at least the starting of her. I wanted to try and explore learning JavaScript, and since I don't really have a knack
 * for web development, node.js seemed like the next logical place to look. LunaBot is heavily focused on my dog Luna, since I absolutely adore
 * the vile creature, so many of these commands are dog based. I also really like dogs.
 *
 * I also want to note that a lot of this code is taken from places trying to help people get into Discord.js
 * @author Nicole Guobadia
 * @version 1.0.0.
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
});

// Create an event listener for messages
client.on('message', message => {

    // !hi || !hello || !bark
    if (message.content == 'hi' || message.content == 'hello' || message.content == 'bark') {
        message.channel.send('Bork!').catch(console.error);

    }

    // If the message is "ping"
    if (message.content === 'ping') {
        // Send "pong" to the same channel
        message.channel.send('pong').catch(console.error);


    }

    // !avatar
    if (message.content === '!avatar') {
        // Send the user's avatar URL
        message.channel.send(message.author.avatarURL).catch(console.error);


    }

    // !help
    if (message.content === '!help') {
        message.channel.send('Soon to be implemented.').catch(console.error);

    }

    // !no u
    if (message.content == 'no u') {
        message.channel.send('no u!').catch(console.error);

    }

    // !hentai
    if (message.content == '!hentai') {
        message.channel.send('shut the fuck up ben.').catch(console.error);

    }

    // !stats
    if (message.content.startsWith('!stats')) {
        const user = message.mentions.users.first();
        userstats(user);

    }

    // !serverinfo || !serverstats
    if (message.content === '!serverinfo' || message.content == '!serverstats') {
        const memberCount = client.users.size;
        const channelCount = client.channels.size;
        serverstats(memberCount, channelCount);

    }

    // !botinfo
    if (message.content.startsWith('!botinfo')) {
        botstats();

    }

    /**
     * Creates a user embed of various statistics obtained on that user included (but not limited to):
     * user's pfp, created at, last message, total amount of lines ever typed (soon to be implemented),
     * time period most active (soon to be implemented), and the game the user is currently playing.
     * I plan on going back and trying to access these values using json files, but for now this is how it works...
     *
     * @param user the user that the embed with create the information of
     */
    function userstats(user) {
        try {
            const useremb = new Discord.RichEmbed()
                .setThumbnail(user.avatarURL)
                .setTitle('Stats on ' + user.username)
                .setColor('#6c00f9')
                .addField('Member since: ', user.createdAt)
                .addField('Last Message: ', user.lastMessage)
                .addField('Total Lines:', 'Soon to be implemented.')
                .addField('Most Active: ', 'Soon to be implemented.')
                .addField('Currently Playing:', user.presence.game);
            message.channel.send(useremb).catch(console.error);


        } catch (e) {
            message.reply(e + ", ask Nicole.");
        }
    }

    /**
     * Creates an embed of different stats about the server.
     *
     * @param memberCount the total amount of members in the server
     * @param channelCount the total amount of channels in the server
     */
    function serverstats(memberCount, channelCount){
        const servemb = new Discord.RichEmbed()
            .setThumbnail('https://cdn.discordapp.com/attachments/508830285698301992/509874800093823005/luna.jpg')
            .setDescription('This is where Nicole goes to cry herself to sleep at night.')
            .setTitle('Server Information')
            .addField('Total Members', memberCount)
            .addField('Number of Channels', channelCount)
            .addField('Most Active', 'Soon to be implemented.')
            .addField('Least Active', 'Soont to be implemented.');

        message.channel.send(servemb).catch(console.error);

    }

    function botstats(){
        const botemb = new Discord.RichEmbed()
            .setImage('https://images-ext-1.discordapp.net/external/MMQb0Vu5DMcaGRG3w2miQ_sf85bAt7BEiG8N1R4YIlY/https/images-ext-2.discordapp.net/external/D8ozmmy64ZqzofWD1JTbF6jKqAPDJzjaLtBaPWt9UPg/%253Fsize%253D2048/https/cdn.discordapp.com/avatars/434476424204910592/98ff181fdef6c3f99e94e02cd9dc4f33.png')
            .setTitle('LunaBot')
            .setDescription('Luna but in bot form.')
            .setColor('#6c00f9');

        message.channel.send(botemb).catch(console.error);

    }

    function createMember(user) {
         let member = {
             name: user.username.toString(),
             date_joined: user.createdAt.toDateString(),




        };

        return member;

    }


})

client.login('NDM0NDc2NDI0MjA0OTEwNTky.DsEY6g.CKtNUX9cQtYRWNPhWJpJnH2MvVA').catch(console.error);