/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.eileen-yu.com",
				port: "",
				pathname: "/portfolio/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
