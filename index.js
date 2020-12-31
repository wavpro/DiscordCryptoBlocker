const store = require('data-store')({ path: process.cwd() + '/AntiScammerCord.json' });
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });

client.once('ready', () => {
	var membercount = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString('en');
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
});

module.exports = {
    login: function(token) {client.login(token)},
    run: async function() {
        await store.save();
    }
}
