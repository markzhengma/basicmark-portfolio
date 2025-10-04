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

const job = [
	{
		id: "job1",
		company: "叽里呱啦文化有限公司",
		time: "2020-2024",
		role: "项目负责人·产品经理·游戏策划",
		achievement: [
			"牵头公司科学启蒙课全新项目的0到1落地，带领初创团队进行产品设计论证以及MVP落地，负责开发基于Unity引擎(C#)的MVP进行立项。",
			"领导项目的Beta制作、商业价值分析验证、用户调研，基于用户数据和调研结论进行产品迭代。",
			"搭建业务团队，制定产品的商业、研发、内容方案，规划阶段产品及预算目标，在推进产品研发中进行过程把控和结果验收。",
			"为公司在双减期间开拓了新的业务线，美术风格开始3D化，游戏技术团队开始从cocos向unity转型",
			"实现了公司线上教育形式的改革：从看影片和大量重复带来的被动瞬时记忆，到动手探索解决问题感受科学现象的理解式学习。",
		],
		projectLink: "/work",
		pics: [
			"https://static.eileen-yu.com/portfolio/su.jpg",
			"https://static.eileen-yu.com/portfolio/hackathon.jpg",
			"https://static.eileen-yu.com/portfolio/beijing.jpg",
		],
	},
	{
		id: "job2",
		company: "叽里呱啦文化有限公司",
		time: "2020-2024",
		role: "项目负责人·产品经理·游戏策划",
		achievement: [
			"牵头公司科学启蒙课全新项目的0到1落地，带领初创团队进行产品设计论证以及MVP落地，负责开发基于Unity引擎(C#)的MVP进行立项。",
			"领导项目的Beta制作、商业价值分析验证、用户调研，基于用户数据和调研结论进行产品迭代。",
			"搭建业务团队，制定产品的商业、研发、内容方案，规划阶段产品及预算目标，在推进产品研发中进行过程把控和结果验收。",
			"为公司在双减期间开拓了新的业务线，美术风格开始3D化，游戏技术团队开始从cocos向unity转型",
			"实现了公司线上教育形式的改革：从看影片和大量重复带来的被动瞬时记忆，到动手探索解决问题感受科学现象的理解式学习。",
		],
		projectLink: "/work",
		pics: [
			"https://static.eileen-yu.com/portfolio/su.jpg",
			"https://static.eileen-yu.com/portfolio/hackathon.jpg",
			"https://static.eileen-yu.com/portfolio/beijing.jpg",
		],
	},
];

export { person, social, brand, job };
