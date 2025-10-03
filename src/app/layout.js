import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import { Footer, Header, Navigation } from "@/components";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Mark Zheng Ma's Portfolio",
	description: "Mark's personal website.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Header />
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
