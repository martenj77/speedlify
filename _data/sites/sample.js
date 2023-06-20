module.exports = {
	name: "more10", // optional, falls back to object key
	description: "Stuff",
	options: {
		runs: 1,
		frequency: 60 * 11 + 30, // 11h, 30m
	},
	urls: [
		"https://www.svenskfotboll.se/",
		"https://www.svenskfotboll.se/livescore/",
		"https://svff-motionsfotboll-dev.azurewebsites.net/",
		"https://svff-motionsfotboll-prod.azurewebsites.net/",
		"https://www.more10.eu/"
	]
};