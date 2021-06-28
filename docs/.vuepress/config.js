/*
 * @Author: Gaoyi Wang
 * @Date: 2021-06-20 14:39:31
 * @Last Modified by: Gaoyi Wang
 * @Last Modified time: 2021-06-21 14:39:31
 * @Describe: vuepress 配置文件
 */
module.exports = {
	title: '前端开发规范手册',
	description: '前端开发规范手册',
	base: '/', // 将部署站点的基本URL
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: ''
			}
		]
	],
	DEST: '.vuepress/dist', // 指定输出目录
	themeConfig: {
		lastUpdated: '上次更新',
		serviceWorker: {
			updatePopup: {
				message: '发现新内容可用',
				buttonText: '刷新'
			}
		},
		displayAllHeaders: true, // 展开所有标题
		// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。

		// 以下为可选的编辑链接选项
		// 假如你的文档仓库和项目本身不在一个仓库：
		// docsRepo: 'vuejs/vuepress',
		// 假如文档不是放在仓库的根目录下：
		docsDir: 'docs',
		// 假如文档放在一个特定的分支下：
		docsBranch: 'master',
		// 默认是 false, 设置为 true 来启用
		editLinks: true,
		// 默认为 "Edit this page"
		editLinkText: '在GitHub上编辑此页面',
		nav: [
            {
				text: '项目应用',
				link: '/'
			},
			{
				text: '命名规范',
				link: '/name/'
			},
			{
				text: '代码规范',
				items: [
                    {
                        text: '编程规约',
                        link: '/code/total/'
                    },
					{
						text: 'HTML',
						link: '/code/html/'
					},
					{
						text: 'CSS',
						link: '/code/css/'
					},
					{
						text: 'JavaScript',
						link: '/code/javascript/'
					},
					{
						text: 'ECMAScript 6',
						link: '/code/es6/'
					},
				]
			},	
		],
		sidebar: {
			// 命名规范
			'/name/': [
				{
					title: '',
					collapsable: false,
					children: [ '/name/' ]
				}
			],
            // 编程规约 html
			'/code/total/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/total/' ]
				}
			],
			// 代码规范 html
			'/code/html/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/html/' ]
				}
			],
			// 代码规范 css
			'/code/css/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/css/' ]
				}
			],
			// 代码规范 javascript
			'/code/javascript/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/javascript/' ]
				}
			],
			// 代码规范 es6
			'/code/es6/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/es6/' ]
				}
			],
			// 快速入门
			'/': [
				{
					title: '',
					collapsable: false,
					children: [ '/' ]
				}
			]
		}
	}
};
