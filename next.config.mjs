/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'persiaspalace.com',
			},
		],
	},
};
export default nextConfig;
