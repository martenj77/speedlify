module.exports = {
	name: "more10", // optional, falls back to object key
	description: "more10 stuff",
	// skip if localhost
	skip: !process.env.CONTEXT,
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://www.svenskfotboll.se/",
		"https://www.svenskfotboll.se/livescore",
		"https://www.botkyrka.se",
		"https://w2.more10.eu",
		
	]
};
