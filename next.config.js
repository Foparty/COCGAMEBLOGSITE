/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['media.graphassets.com'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};

module.exports = nextConfig;
