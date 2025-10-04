import { iconLibrary } from "./icon";

const person = {
	name: "Zheng Ma",
	nickname: "Mark",
	role: "Full-Stack Developer",
	avatar: "https://static.eileen-yu.com/portfolio/person1.jpeg",
	email: "markzhengma@gmail.com",
	city: "Shanghai",
	country: "China",
	languages: ["English", "Mandarin"],
	description:
		"I am a Shanghai-based full-stack web developer, with passions about landing projects 0-1, using technologies to close the gaps between designs and realizations. My job and school study focus on technology and education, covering different industries and roles. I am always thankful for the various perspectives I built throughout these experiences.",
};

const social = [
	{
		name: "GitHub",
		icon: iconLibrary.github,
		link: "https://github.com/markzhengma",
	},
	{
		name: "Youtube",
		icon: iconLibrary.youtube,
		link: "https://www.youtube.com/@m-e-travel-vlog",
	},
	{
		name: "RedNote",
		icon: iconLibrary.xiaohongshu,
		link: "https://xhslink.com/m/LXJnstZzNm",
	},
	{
		name: "Email",
		icon: iconLibrary.email,
		link: `mailto:${person.email}`,
	},
];

const brand = {
	headline: "Building bridges between design and code",
	selfintro:
		"I'm Mark, a full-stack developer, product manager, game designer, and a teacher.",
	end: "Looking for collaborations? Let's get in touch!",
};

export { person, social, brand };
