# DiscordCryptoBlocker
A discord.js package that automatically bans spambots, optimized for targeting crypto scammers, but could also work against other advertisement bots/selfbots.

# Example

```javascript
const client = require('DiscordCryptoBlocker');

client.login(token)
```

# Use
The package basically stores all messages that it picks up, but sorts them so that there are never duplicates in the storage, it will just add them together. It also counts how many messages each person sends. It uses these resources to determine if a person is a selfbot.

You need to enable the following permissions for the bot to operate correctly:  
VIEW_CHANNEL  
BAN_MEMBERS
