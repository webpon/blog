import demoblock from './demoblock';

export const config = {
  base: '/',
  title: 'webpon-blog',
  head: [
    // ['link', { rel: 'icon', href: 'https://wow-editor.oss-cn-hangzhou.aliyuncs.com/static/favicon.ico' }]
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/50807258?s=400&u=c33267d837d5860768a166e35e419e2b5e6769f7&v=4' }]
  ],
  // description: 'a Vue 3 based component library for designers and developers',
  markdown: {
    attrs: { disable: true },
    config: (md) => {
      md.use(demoblock)
    } 
  },
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/50807258?s=400&u=c33267d837d5860768a166e35e419e2b5e6769f7&v=4',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-PRESENT webpon contributors'
    },
    outlineTitle: '-页面大纲-',
    outline: 'deep',
    nav: [
      {
        text: '我的项目',
        link: 'project/'
      },
      {
        text: '学习记录',
        link: 'learn-record/read'
      },
      {
        text: '编程工具',
        items: [
          { text: 'httpbin', link: 'http://httpbin.org/' },
          { text: 'apifox', link: 'https://www.apifox.cn/web/main' },
          { text: '正则表达式工具', link: 'https://regex101.com/' },
          { text: '菜鸟工具', link: 'https://c.runoob.com/' },
          { text: 'JSON格式化工具', link: 'https://c.runoob.com/front-end/53/' },
          { text: 'js在线运行工具', link: 'https://c.runoob.com/compile/22/' },
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/webpon/blog' }],

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
              text: '前端基础',
              collapsible: true,
              items: [
                {
                  text: 'HTML',
                  link: ''
                },
                {
                  text: 'CSS',
                  link: '/front-end/CSS/CSS'
                },

                {
                  text: 'JavaScript',
                  items: [
                    {
                      text: '基础语法',
                      link: '/front-end/JavaScript/JavaScript'
                    },
                    {
                      text: 'ES6+',
                      link: '/front-end/JavaScript/ES6+'
                    },
                  ]
                },
                {
                  text: 'TypeScript',
                  link: '/front-end/TypeScript'
                },
                {
                  text: '基础框架',
                  items:  [
                    {          
                      text: 'vue2',
                      link: '/front-end/framework/vue2'
                    },
                    {
                      text: 'vue3',
                      link: '/front-end/framework/Vue3'
                    },
                    {
                      text: 'react',
                      link: '/front-end/framework/React'
                    }
                  ]
                },
                {
                  text: '编程工具库',
                  items: [
                    {
                      text: 'download-git-repo',
                      link: '/front-end/编程工具库/download-git-repo'
                    },
                    {
                      text: 'open',
                      link: '/front-end/编程工具库/open'
                    },
                    {
                      text: 'serve',
                      link: '/front-end/编程工具库/serve'
                    },
                    {
                      text: 'Axios',
                      link: 'https://www.axios-http.cn/docs/intro'
                    },
                    {
                      text: 'fs-extra',
                      link: '/front-end/编程工具库/fs-extra'
                    },
                    {
                      text: 'mockm',
                      link: 'https://hongqiye.com/doc/mockm/'
                    }
                  ]
                },
                {
                  text: '工程化体系',
                  items: [
                    {
                      text: '构建工具',
                      items: [
                        {
                          text: 'Gulp',
                        },
                        {
                          text: 'Grunt',
                        },
                        {
                          text: 'npm script',
                        }
                      ]
                    },
                    {
                      text: '打包工具',
                      items: [
                        {
                          text: 'webpack',
                          link: '/front-end/工程化体系/webpack'
                        },
                        {
                          text: 'Vite',
                          link: 'https://cn.vitejs.dev/'
                        },
                        {
                          text: 'Rollup',
                          link: '/front-end/工程化体系/Rollup'
                        }
                      ]
                    },
                  ]
                },
                {
                  text: 'CICD',
                  items: [
                    {
                      text: 'GitLab CI'
                    },
                    {
                      text: 'Jenkins'
                    }
                  ]
                },
                {
                  text: '部署',
                  items: [
                    {
                      text: 'Web服务器',
                      items: [
                        {
                          text: 'Nginx',
                        },
                        {
                          text: 'Apache',
                        }
                      ],
                    },
                    {
                      text: '容器',
                      items: [
                        {
                          text: 'Docker'
                        }
                      ]
                    },
                    {
                      text: '部署策略',
                      items: [
                        {
                          text: '全量发布',
                        },
                        {
                          text: '蓝绿发布'
                        },
                        {
                          text: '滚动发布'
                        },
                        {
                          text: '灰度发布'
                        }
                      ]
                    },
                    {
                      text: '内外穿透'
                    }
                  ]
                },
                {
                  text: '监控告警'
                },
                {
                  text: '跨平台开发',
                  items: [
                    {
                      text: '原生开发',
                      items: [
                        {
                          text: '安卓开发',
                          link: '/front-end/跨平台开发/安卓开发'
                        },
                        {
                          text: 'IOS开发'
                        }
                      ]
                    },
                    {
                      text: '混合App'
                    },
                    {
                      text: 'Native App',
                      items: [
                        {
                          text: 'Flutter'
                        },
                        {
                          text: 'ReactNative'
                        }
                      ]
                    },
                    {
                      text: '桌面应用',
                      items: [
                        {
                          text: 'Electron'
                        }
                      ]
                    },
                    {
                      text: '小程序',
                      items: [
                        {
                          text: 'uniapp'
                        },
                        {
                          text: 'Taro'
                        }
                      ]
                    },
                    {
                      text: '微前端',
                      items: [
                        {
                          text: 'qiankun'
                        },
                        {
                          text: 'single-spa'
                        }
                      ]
                    },
                    {
                      text: '前端求职',
                      items: [
                        {
                          text: '八股文',
                          items: [
                            {
                              text: '前端面试题汇总',
                              link: 'https://www.yuque.com/cuggz/interview'
                            }, 
                            {
                              text: '牛客前端工程师面试宝典',
                              link: 'https://www.nowcoder.com/tutorial/96/f5212664ab664984882b00635066ded2'
                            },
                            {
                              text: '前端知识',
                              link: 'http://www.h-camel.com/history.html'
                            }
                          ]
                        }, 
                        {
                          text: '面经',
                          items: [
                            {
                              text: '牛客网前端面经汇总',
                              link: 'https://www.nowcoder.com/experience/644'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      text: '手写核心原理系列', 
                      items: [
                        {
                          text: 'Webpack核心原理实现',
                          link: ''
                        },
                        {
                          text: 'Vue2核心原理实现',
                          link: ''
                        },
                        {
                          text: 'VueX核心原理实现',
                          link: 'https://github.com/webpon/Handwriting/tree/main/%E6%89%8B%E5%86%99Vuex/my_vuex'
                        },
                        {
                          text: 'Vue-router核心原理实现',
                          link: 'https://github.com/webpon/Handwriting/tree/main/%E6%89%8B%E5%86%99Vue-router/my_vue-router'
                        },
                        {
                          text: 'Promise核心原理实现',
                          link: 'https://github.com/webpon/Handwriting/tree/main/%E6%89%8B%E5%86%99Promise'
                        },
                        {
                          text: 'async await核心原理实现',
                          link: ''
                        },
                        {
                          text: '虚拟列表实现原理',
                          link: 'https://github.com/webpon/virtual-list'
                        },
                        {
                          text: '更多实现原理实现',
                          link: 'https://juejin.cn/post/6946136940164939813'
                        }
                      ]
                    },
                  ]
                }
              ]
            },
          ]
        },
        {
          text: '后端体系',
          collapsible: true,
          items: [
            {
              text: 'Java基础',
              link: '/back-end/Java/Java基础'
            },
            {
              text: 'Nodejs',
              items: [
                {
                  text: '基础语法',
                  link: '/back-end/Nodejs/Nodejs'
                },
                {
                  text: 'Yarn',
                  link: '/back-end/Nodejs/yarn'
                }
              ]
            },
            {
              text: '数据库',
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
