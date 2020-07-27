const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
var prefix = config.prefix;
const status = require('./status.json');

client.once('ready', () => {
    console.log('Ready!');
    client.user.setStatus('available')
    client.user.setPresence(status);
});

client.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (msg.author.bot) return;

    if (msg.content.slice(0, 1) === prefix) {
        switch (cmd) {
            
        }
    }
});

client.login(config.token);