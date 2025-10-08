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
			{
				protocol: "https",
				hostname: "static.markzhengma.com",
				port: "",
				pathname: "/basicportfolio/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
