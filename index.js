const Discord = require('discord.js');

const { prefix, token } = require('./config.json');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
client.login(token);

//listeners
client.once('ready', () => {
    console.log('Ready!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});

client.on('message', async (message) => {
    //preliminary checks
    if(message.author.bot) return;
    else if(!message.content.startsWith(prefix)) return;


})