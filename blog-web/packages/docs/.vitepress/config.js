
export const config = {
    base: '/blog/',
    title: 'webpon-blog',
    // description: 'a Vue 3 based component library for designers and developers',
    markdown: {
        anchor: {
            level: [1, 2, 3, 4, 5, 6]
        },
        toc: {
            includeLevel: [1, 2, 3]
        }
    },
    themeConfig: {
        logo: '/images/vite.svg',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-PRESENT vangleer and Vangle contributors'
        },
        algolia: {
            apiKey: 'your_api_key',
            indexName: 'index_name'
        },
        outlineTitle: '-页面大纲-',
        outline: [2, 3, 4],
        nav: [
            { text: '指南', link: '/guide/design' },
            { text: '组件', link: '/component/button' }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/webpon/wow-app-cli' }],

        sidebar: {
            '/': [
                {
                    text: '软件开发基础',
                    collapsible: true,
                    // collapsed: true,
                    items: [
                        {
                            text: 'Linux',
                            link: '/computer/linux'
                        },
                        {
                            text: '计算机网络',
                            link: '/computer/network'
                        },
                        {
                            text: '数据结构',
                            link: '/computer/dataStructure'
                        },
                        {
                            text: '算法',
                            link: '/computer/algorithm'
                        },
                        {
                            text: '设计模式',
                            link: '/computer/designPattern'
                        }
                    ]
                },
                {
                    text: '前端体系',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        {
                            text: '浏览器原理',
                            link: '/front-end/browser'
                        },
                        {
                            text: '计算机网络',
                            link: '/computer/network'
                        },
                        {
                            text: '数据结构',
                            link: '/computer/dataStructure'
                        },
                        {
                            text: '算法',
                            link: '/computer/algorithm'
                        },
                        {
                            text: '设计模式',
                            link: '/computer/designPattern'
                        }
                    ]
                },
                {
                    text: '学习记录',
                    items: [
                        {
                            text: '每月好文阅读',
                            link: '/learn-record/read'
                        },
                    ]
                },
            ],
        }
    }
}

export default config
