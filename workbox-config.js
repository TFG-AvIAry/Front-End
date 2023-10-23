module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,png,html,txt,css,js,woff,woff2,svg,jpg,webp}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};