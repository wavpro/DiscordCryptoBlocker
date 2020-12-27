const store = require('data-store')({ path: process.cwd() + '/AntiScammerCord.json' });
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });

client.once('ready', () => {
	console.log(`Logged in as ${client.user.username}`);
  client.user.setActivity(`${membercount} Users`, { type: 'WATCHING' });
});

client.on('message', async message => {
  if (message.guild && message.member.user.username !== client.user.username) {
    var checkif = await store.get(`${message.content}`);
    if (!checkif) {
       await store.set(`${message.content}`, '1'); 
       await store.save();
    } else {
       var checkif1 = 1*checkif
       var amount = 1+checkif1
      await store.set(`${message.content}`, `${amount}`)
      await store.save();
    }
  const checkdb = await store.get(`${message.author.id}`);
  if (!checkdb) {
  await store.set(`${message.author.id}`, '1'); 
  await store.save();
} else {
  var checkif1 = 1*checkdb
  var amount = 1+checkif1
  await store.set(`${message.author.id}`, `${amount}`)
  await store.save();
}
  const messages1 = await store.get(`${message.author.id}`);
  var messages = messages1*1
  if (messages < 3) {
  if (message.member.joinedTimestamp + 600000 > Date.now()) {
  var content = await store.get(`${message.content}`);
  var contentnum = content*1;
  if (contentnum > 2) {
    if (message.content.length > 120) {
      await message.delete()
      await message.author.send('Hey! It seems like you have been banned from the AirReps server. This action was done by our anti bot protection. We are truly sorry if this action was wrong. If you are not a bot, join https://discord.gg/phwbfDPSwz and ask to be unbanned.');
  await message.member.ban(({
                reason: 'Crypto Scammer'
  }))
    }
  } else {
    return;
  }
  } else {
    return;
  }
  }
  }
    if (message.content.toLowerCase() === 'ping') {
    message.reply('Pong! The AI is running!');
  }
});

module.exports = {
    login: function(token) {client.login(token)},
    run: async function() {
        await store.save();
    }
}
