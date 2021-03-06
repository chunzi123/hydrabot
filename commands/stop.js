const log = require("../helpers/log.js");

exports.run = (bot, msg, params) => {
	log(msg.author.username + " (" + msg.author.id + ") issued command: " + msg.content);

	if (msg.author.id === msg.guild.ownerID && dispatchers.get(msg.guild.id)) {
		if (dispatchers.get(msg.guild.id)) {
			queue[msg.guild.id] = [];
			skips[msg.guild.id] = null;
			connections.get(msg.guild.id).disconnect();
			
			msg.channel.sendMessage("Playback stopped.")
				.then(msg => log(`Sent message: ${msg.content}`))
				.catch(console.error);
		}
	}

};

exports.info = {
	name: "stop",
	description: "Stops the music and clears the queue.",
	usage: "stop"
};
