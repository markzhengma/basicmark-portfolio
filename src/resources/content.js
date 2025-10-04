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
		name: "Xiaohongshu",
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
