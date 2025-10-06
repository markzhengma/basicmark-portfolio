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
		company: "Hudson Way Immersion School（纽约）",
		time: "2016-2017",
		role: "2-4年级教师",
		achievement: [
			"负责沉浸式中文学校的教学工作（教案设计、授课、测验），课程包括中文课、数学课、科学课。",
			"监督引导学生的学校生活，组织家长学生活动，包括Science Fair、节日庆典、Field Study等。",
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
		company: "哥伦比亚大学教师学院（纽约） ",
		time: "2018",
		role: "教育科技专员",
		achievement: [
			"为学校的教职工培训教学软件的使用方法、解决使用问题，如Turnitin, Canvas等。",
			"在校内开展Workshop类型的宣讲活动，向教职工普及新教育技术的使用方法并收集使用反馈。",
		],
		projectLink: "/work",
		pics: [
			"https://static.eileen-yu.com/portfolio/su.jpg",
			"https://static.eileen-yu.com/portfolio/hackathon.jpg",
			"https://static.eileen-yu.com/portfolio/beijing.jpg",
		],
	},
	{
		id: "job3",
		company: "ZZYW Studio（纽约） ",
		time: "2019",
		role: "Web & Unity工程师",
		achievement: [
			"参与开发The Creator’s Planetarium系列艺术展的数字艺术内容。",
			"负责移动端web内容开发、基于Firebase的实时多人交互、以及Unity游戏的交互逻辑开发。",
		],
		projectLink: "/work",
		pics: [
			"https://static.eileen-yu.com/portfolio/su.jpg",
			"https://static.eileen-yu.com/portfolio/hackathon.jpg",
			"https://static.eileen-yu.com/portfolio/beijing.jpg",
		],
	},
	{
		id: "job4",
		company: "酷我音乐科技有限公司（北京） ",
		time: "2019-2020",
		role: "Web工程师",
		achievement: [
			"为酷我前端团队提供中台服务支持（BFF），包括新需求的服务搭建、大后端数据整理封装api、项目的自动容器化部署、NGINX及k8s配置。提高服务的自动化程度和稳定性优化。",
			"产出需求有关的技术文档，为团队整理总结工作流程优化文档，分享服务端技术和Linux操作文档。",
			"负责酷我音乐小程序（微信、百度、头条）服务端开发。",
			"负责酷我主播电台、腾讯音乐人平台项目的前端和服务端开发。",
		],
		projectLink: "/work",
		pics: [
			"https://static.eileen-yu.com/portfolio/su.jpg",
			"https://static.eileen-yu.com/portfolio/hackathon.jpg",
			"https://static.eileen-yu.com/portfolio/beijing.jpg",
		],
	},
	{
		id: "job5",
		company: "壳牌有限公司（内蒙古）",
		time: "2019-2024",
		role: "Web工程师（Freelance）",
		achievement: [
			"负责经销商信息管理系统设计和搭建，以及门店微信小程序开发（详见项目列表）",
			"实现了经销商各门店的企业信息同步，门店客户更便捷查询个人记录，拉动经销商营业额的增长。",
		],
		projectLink: "/work",
		pics: [
			"https://static.eileen-yu.com/portfolio/su.jpg",
			"https://static.eileen-yu.com/portfolio/hackathon.jpg",
			"https://static.eileen-yu.com/portfolio/beijing.jpg",
		],
	},
	{
		id: "job6",
		company: "叽里呱啦文化有限公司（上海）",
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

const study = [
	{
		id: "study1",
		school: "北京语言大学（北京）",
		time: "2010-2014",
		department: "人文学院",
		program: "汉语言文学学士",
	},
	{
		id: "study2",
		school: "雪城大学（纽约州雪城）",
		time: "2014-2016",
		department: "教育学院",
		program: "教育学硕士",
	},
	{
		id: "study3",
		school: "General Assembly（纽约）",
		time: "2017",
		department: "",
		program: "全栈网站开发",
	},
	{
		id: "study4",
		school: "哥伦比亚大学（纽约）",
		time: "2017-2019",
		department: "教育学院",
		program: "游戏设计开发硕士",
	},
];

export { person, social, brand, job, study };
