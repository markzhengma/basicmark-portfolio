import { iconLibrary } from "./icon";

const person = {
	name: "马铮",
	name_eng: "Zheng Ma",
	nickname: "Mark",
	role: "全栈开发工程师",
	role_eng: "Full-Stack Developer",
	avatar: "https://static.markzhengma.com/basicportfolio/person1.jpeg",
	email: "markzhengma@qq.com",
	city: "上海",
	city_eng: "Shanghai",
	country: "中国",
	country_eng: "China",
	languages: ["英文·流利", "中文·母语"],
	languages_eng: ["English", "Mandarin"],
	description:
		"我是一位全栈开发工程师，目前居住在中国上海。我热衷于项目从0到1的落地，而且享受通过技术来搭建设计与实现之间的桥梁。我的学习和工作主要聚焦于科技与教育领域，但又覆盖了不同的行业和岗位类型。这些经历给我带来了丰富的视角来思考和创造。",
	description_eng:
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
	headline: "用技术 让更多美好的设计成为现实。",
	selfintro:
		"我是Mark，一名全栈Web工程师。也是一名游戏设计开发者、产品经理，同时也是一位教师和自媒体工作者。很高兴你来到这里！",
	selfintro_eng:
		"I'm Mark, a full-stack developer, product manager, game designer, and a teacher. It's good to see you!",
	end: "寻求合作——请直接联系我！",
	end_eng: "Looking for collaborations? Let's get in touch!",
};

const job = [
	{
		id: "job1",
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
		projectLink: "/work#project2",
		pics: [
			"https://static.markzhengma.com/basicportfolio/jlgl_2.JPG",
			"https://static.markzhengma.com/basicportfolio/jlgl_1.JPG",
			"https://static.markzhengma.com/basicportfolio/ggsteam_1.PNG",
			"https://static.markzhengma.com/basicportfolio/ggsteam_2.JPG",
		],
	},
	{
		id: "job2",
		company: "壳牌有限公司",
		time: "2019-2024",
		role: "Web工程师（Freelance）",
		achievement: [
			"负责经销商信息管理系统设计和搭建，以及门店微信小程序开发（详见项目列表）",
			"实现了经销商各门店的企业信息同步，门店客户更便捷查询个人记录，拉动经销商营业额的增长。",
		],
		projectLink: "/work#project3",
		pics: [
			"https://static.markzhengma.com/basicportfolio/shell_1.JPG",
			"https://static.markzhengma.com/basicportfolio/shell_3.PNG",
		],
	},
	{
		id: "job3",
		company: "酷我音乐科技有限公司（北京） ",
		time: "2019-2020",
		role: "Web工程师",
		achievement: [
			"为酷我前端团队提供中台服务支持（BFF），包括新需求的服务搭建、大后端数据整理封装api、项目的自动容器化部署、NGINX及k8s配置。提高服务的自动化程度和稳定性优化。",
			"产出需求有关的技术文档，为团队整理总结工作流程优化文档，分享服务端技术和Linux操作文档。",
			"负责酷我音乐小程序（微信、百度、头条）服务端开发。",
			"负责酷我主播电台、腾讯音乐人平台项目的前端和服务端开发。",
		],
		projectLink: "/work#project4",
		pics: [
			"https://static.markzhengma.com/basicportfolio/kuwo_8.JPG",
			"https://static.markzhengma.com/basicportfolio/kuwo_6.jpg",
		],
	},
	{
		id: "job4",
		company: "ZZYW Studio（纽约） ",
		time: "2019",
		role: "Web & Unity工程师（Freelance）",
		achievement: [
			"参与开发The Creator’s Planetarium系列艺术展的数字艺术内容。",
			"负责移动端web内容开发、基于Firebase的实时多人交互、以及Unity游戏的交互逻辑开发。",
		],
		projectLink: "/work#project1",
		pics: [
			"https://static.markzhengma.com/basicportfolio/planet_4.jpg",
			"https://static.markzhengma.com/basicportfolio/planet_2.jpg",
		],
	},
	{
		id: "job5",
		company: "哥伦比亚大学教育学院（纽约） ",
		time: "2018",
		role: "教育科技专员",
		achievement: [
			"为学校的教职工培训教学软件的使用方法、解决使用问题，如Turnitin, Canvas等。",
			"在校内开展Workshop类型的宣讲活动，向教职工普及新教育技术的使用方法并收集使用反馈。",
		],
		projectLink: "",
		pics: ["https://static.markzhengma.com/basicportfolio/columbia_1.jpg"],
	},
	{
		id: "job6",
		company: "Hudson Way Immersion School（纽约）",
		time: "2016-2017",
		role: "2-4年级教师",
		achievement: [
			"负责沉浸式中文学校的教学工作（教案设计、授课、测验），课程包括中文课、数学课、科学课。",
			"监督引导学生的学校生活，组织家长学生活动，包括Science Fair、节日庆典、Field Study等。",
		],
		projectLink: "",
		pics: [
			"https://static.markzhengma.com/basicportfolio/hwis_1.JPG",
			"https://static.markzhengma.com/basicportfolio/hwis_2.jpg",
		],
	},
];

const study = [
	{
		id: "study1",
		school: "哥伦比亚大学（纽约）",
		time: "2017-2019",
		department: "教育学院",
		program: "游戏设计开发硕士",
	},
	{
		id: "study2",
		school: "General Assembly（纽约）",
		time: "2017",
		department: "",
		program: "全栈Web开发",
	},
	{
		id: "study3",
		school: "雪城大学（纽约州雪城）",
		time: "2014-2016",
		department: "教育学院",
		program: "教育学硕士",
	},
	{
		id: "study4",
		school: "北京语言大学（北京）",
		time: "2010-2014",
		department: "人文学院",
		program: "汉语言文学学士",
	},
];

const skill = [
	{
		id: "skill1",
		title: "游戏设计开发",
		desc:
			"基于现代化游戏理论设计高可玩性的游戏，使用Unity引擎开发3D及VR/AR游戏。",
		tools: [
			{
				icon: iconLibrary.unity,
				name: "Unity3D",
			},
			{
				icon: iconLibrary.code,
				name: "C#",
			},
			{
				icon: iconLibrary.ar,
				name: "Vuforia AR",
			},
			{
				icon: iconLibrary.vive,
				name: "HTC Vive",
			},
		],
		pics: [
			"https://static.markzhengma.com/basicportfolio/mithackathon_2.JPG",
			"https://static.markzhengma.com/basicportfolio/mithackathon_7.jpg",
			"https://static.markzhengma.com/basicportfolio/ggsteam_10.PNG",
			"https://static.markzhengma.com/basicportfolio/planet_4.jpg",
		],
	},
	{
		id: "skill2",
		title: "Web前端开发",
		desc:
			"运用现代前端开发技术，实现页面设计，搭建网站前端，建立与中后台服务的通信。",
		tools: [
			{
				icon: iconLibrary.git,
				name: "Git",
			},
			{
				icon: iconLibrary.html,
				name: "HTML",
			},
			{
				icon: iconLibrary.css,
				name: "CSS",
			},
			{
				icon: iconLibrary.javascript,
				name: "JavaScript",
			},
			{
				icon: iconLibrary.jquery,
				name: "jQuery",
			},
			{
				icon: iconLibrary.reactjs,
				name: "ReactJS",
			},
			{
				icon: iconLibrary.nextjs,
				name: "NextJS",
			},
			{
				icon: iconLibrary.bootstrap,
				name: "Bootstrap",
			},
			{
				icon: iconLibrary.vuejs,
				name: "VueJS",
			},
		],
		pics: [
			"https://static.markzhengma.com/basicportfolio/shell_3.PNG",
			"https://static.markzhengma.com/basicportfolio/kuwo_9.JPG",
		],
	},
	{
		id: "skill3",
		title: "服务端开发",
		desc:
			"基于容器化技术搭建现代化服务，搭建自动备份数据库、缓存方案，开发分隔版本环境、跨平台的API。",
		tools: [
			{
				icon: iconLibrary.linux,
				name: "Linux",
			},
			{
				icon: iconLibrary.network,
				name: "HTTP",
			},
			{
				icon: iconLibrary.nodejs,
				name: "NodeJS",
			},
			{
				icon: iconLibrary.nginx,
				name: "Nginx",
			},
			{
				icon: iconLibrary.docker,
				name: "Docker",
			},
			{
				icon: iconLibrary.k8s,
				name: "Kubernetes",
			},
			{
				icon: iconLibrary.mongodb,
				name: "MongoDB",
			},
			{
				icon: iconLibrary.postgresql,
				name: "PostgreSQL",
			},
			{
				icon: iconLibrary.firebase,
				name: "Firebase",
			},
		],
		pics: ["https://static.markzhengma.com/basicportfolio/mithackathon_4.jpg"],
	},
	{
		id: "skill4",
		title: "微信小程序开发",
		desc:
			"处理微信小程序的注册、配置、发布流程。基于微信生态进行小程序开发，包括微信登录、权限管理、服务号推送。",
		tools: [
			{
				icon: iconLibrary.wechat,
				name: "微信生态",
			},
			{
				icon: iconLibrary.html,
				name: "WXML",
			},
			{
				icon: iconLibrary.css,
				name: "Vant",
			},
			{
				icon: iconLibrary.javascript,
				name: "Javascript",
			},
		],
		pics: [
			"https://static.markzhengma.com/basicportfolio/shell_6.JPG",
			"https://static.markzhengma.com/basicportfolio/kuwo_10.JPG",
		],
	},
	{
		id: "skill5",
		title: "影像内容创作",
		desc:
			"拍摄照片、影片，基于Lightroom进行照片精修，通过Final Cut Pro和剪映进行视频制作。欢迎关注我的小红书和Youtube账号！",
		tools: [
			{
				icon: iconLibrary.camera,
				name: "摄像",
			},
			{
				icon: iconLibrary.video,
				name: "摄影",
			},
			{
				icon: iconLibrary.mcreate,
				name: "Final Cut Pro",
			},
			{
				icon: iconLibrary.medit,
				name: "剪映",
			},
			{
				icon: iconLibrary.lightroom,
				name: "Lightroom",
			},
		],
		pics: [
			"https://static.markzhengma.com/basicportfolio/gallery_1.jpg",
			"https://static.markzhengma.com/basicportfolio/gallery_2.jpg",
			"https://static.markzhengma.com/basicportfolio/gallery_3.jpg",
			"https://static.markzhengma.com/basicportfolio/gallery_4.jpg",
		],
	},
];

const project = [
	{
		id: "project1",
		title: "Space Exploration Lab",
		time: "2019",
		role: "Unity工程师·Web全栈工程师",
		brief: "通过Unity3D引擎、基于Firebase实时通信开发的数字艺术体验。",
		desc:
			"在纽约举办的宇宙探索主题艺术展Creator's Planetarium。在这个视觉艺术交互体验中，一个有着五颜六色星球的宇宙（Unity场景）被投射在了展厅的全部墙上，营造出置身宇宙中的感觉。参观者通过移动端网页设计自己的纸飞机，然后放飞在“宇宙”中。参观者能够通过手机来实时遥控驾驶纸飞机在“宇宙”中飞行，并与星球和其他纸飞机进行碰撞交互。",
		techspecs: [
			"基于Google Firebase的Web开发。包括用户信息收集、自定义图案绘制保存、利用Firebase实现实时遥控驾驶信号的发送。",
			"在Unity场景中基于Firebase的事件创建“飞机”并实现单场景多人实时互动。",
		],
		pics: [
			"https://static.markzhengma.com/basicportfolio/planet_1.gif",
			"https://static.markzhengma.com/basicportfolio/planet_4.jpg",
			"https://static.markzhengma.com/basicportfolio/planet_2.jpg",
			"https://static.markzhengma.com/basicportfolio/planet_3.jpg",
		],
	},
	{
		id: "project2",
		title: "叽里呱啦科学启蒙课",
		time: "2021-2024",
		role: "项目负责人",
		brief:
			"叽里呱啦数字教育产品中的学龄前STEAM课程。主张孩子通过动手体验来观察科学现象、理解科学原理。",
		desc:
			"呱呱爱科学，是叽里呱啦数字教育产品中的学龄前科学启蒙课程，主张孩子通过动手体验来观察科学现象、理解科学原理。为公司在双减期间开拓了新的业务线，沉淀了3D化美术设计，搭建Unity技术团队。实现了公司线上教育形式的改革：从看影片和大量重复带来的被动瞬时记忆，到动手探索解决问题感受科学现象的理解式学习。",
		techspecs: [
			"立项阶段：牵头项目的0到1。在双减后参与公司发展方向探索，并整理总结大量学龄前儿童进行科学启蒙教育这一赛道的可行性方案。主导了基于Unity3D引擎和VuforiaAR引擎的Demo开发并成功立项、搭建包括项管、美术、开发、影视、教研、游戏策划在内的约20人项目团队。",
			"测试阶段：负责领导项目的MVP制作、进行项目规划、商业价值分析验证、用户调研",
			"生产阶段：扩大团队、搭建业务梯队，获取资源批量制作课程。在团队管理的同时，主导产品的教学内容规划、商业目标制定、预算计划和过程把控，推进制作。",
		],
		pics: [
			"https://static.markzhengma.com/basicportfolio/ggsteam_12.PNG",
			"https://static.markzhengma.com/basicportfolio/ggsteam_1.PNG",
			"https://static.markzhengma.com/basicportfolio/ggsteam_8.PNG",
			"https://static.markzhengma.com/basicportfolio/ggsteam_13.PNG",
			"https://static.markzhengma.com/basicportfolio/ggsteam_11.PNG",
			"https://static.markzhengma.com/basicportfolio/ggsteam_10.PNG",
		],
	},
	{
		id: "project3",
		title: "壳牌经销商信息管理系统",
		time: "2019-2024",
		role: "Web全栈工程师",
		brief: "由CRM网站、门店微信小程序和后端服务构成的汽车养护中心信息管理系统。",
		desc:
			"0-1独立完成经销商信息管理系统的需求、设计、开发，沟通门店经理、员工的生产经营活动应用场景，了解客户的诉求和使用流程，从2019年开始不断进行迭代，目前阶段已实现基于腾讯云服务器上Docker容器化的、由EggJS应用服务为核心驱动的、ReactJS网页CRM应用与微信小程序三分离的企业级应用。",
		techspecs: [
			"CRM前端：供企业管理员使用。ReactJS+Bootstrap+Nginx+腾讯云，通过微信登录进行权限校验，供企业进行客户及其养护信息查询录入、产品及赠品列表编辑修改、管理员信息管理、微信小程序头图/公众号文章的编辑。",
			"后端服务：系统的核心驱动。EggJS+MongoDB+Nginx+腾讯云，提供CRM和微信小程序所需的所有数据接口、封装微信API，定期数据备份和发送月报邮件。",
			"微信小程序：供门店客户和门店员工使用。微信登录权限校验（基于CRM维护的管理员信息）：客户查看养护记录和积分；员工进行养护信息的录入编辑。",
		],
		pics: [
			"https://static.markzhengma.com/basicportfolio/shell_6.JPG",
			"https://static.markzhengma.com/basicportfolio/shell_7.JPG",
			"https://static.markzhengma.com/basicportfolio/shell_3.PNG",
			"https://static.markzhengma.com/basicportfolio/shell_4.JPG",
			"https://static.markzhengma.com/basicportfolio/shell_5.JPG",
		],
	},
	{
		id: "project4",
		title: "酷我音乐小程序",
		time: "2019-2020",
		role: "Web服务端工程师",
		brief: "基于EggJS和Kubernetes的微信、百度、头条平台的小程序服务。",
		desc:
			"0-1建立基于EggJS+K8S的更易于维护的业务导向BFF服务，赋能前端团队承接多样需求",
		techspecs: [
			"封装大后台接口，对数据进行规范化整合、古早代码带来的冗余数据进行剔除，输出为小程序渲染所需的轻量化数据接口。",
			"通过MongoDB和K8S定时任务进行高计算量但低时效性要求的数据缓存，以提高页面响应速度、降低服务器压力。",
			"挂载Prometheus监控系统，实时监控服务的负载情况。",
		],
		pics: [
			"https://static.markzhengma.com/basicportfolio/kuwo_10.JPG",
			"https://static.markzhengma.com/basicportfolio/kuwo_11.JPG",
		],
	},
	{
		id: "project5",
		title: "酷我主播电台&腾讯音乐人平台",
		time: "2019-2020",
		role: "Web前端工程师",
		brief:
			"酷我音乐UGC平台搭建，用户能够在此平台成为签约主播并发布作品、获得收益。",
		desc:
			"酷我音乐UGC平台搭建，用户能够在此平台成为签约主播并发布作品、获得收益。",
		techspecs: [
			"基于VueJS的PC端/移动端网页开发，主要实现数据可视化图表，以及主播个人信息的浏览编辑。",
			"基于KoaJS+MongoDB的数据接口服务。",
		],
		pics: [
			"https://static.markzhengma.com/basicportfolio/kuwo_12.png",
			"https://static.markzhengma.com/basicportfolio/kuwo_9.JPG",
		],
	},
];

export { person, social, brand, job, study, skill, project };
