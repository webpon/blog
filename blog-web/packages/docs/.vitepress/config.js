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
    socialLinks: [{ icon: {
      svg: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.55014C1 4.20298 3.26552 2.30005 6.06021 2.30005C8.58473 2.30005 10.6089 3.85282 10.99 5.88329C10.9678 5.88221 10.9496 5.88122 10.9334 5.88034C10.8834 5.87761 10.8529 5.87594 10.7832 5.87594C8.23432 5.87594 6.16822 7.61153 6.16822 9.75217C6.16822 10.1132 6.22806 10.4623 6.3381 10.7939C6.24606 10.798 6.15351 10.8005 6.06021 10.8005C5.48273 10.8005 4.92529 10.7173 4.40842 10.5675C4.36138 10.553 4.31156 10.5453 4.25971 10.5453C4.16247 10.5453 4.07436 10.5751 3.99119 10.6234L2.88316 11.268C2.85235 11.2861 2.82256 11.2996 2.78579 11.2996C2.69261 11.2996 2.61718 11.2237 2.61718 11.1297C2.61718 11.098 2.62656 11.0663 2.63575 11.0354C2.63873 11.0254 2.64169 11.0154 2.64431 11.0055C2.64974 10.985 2.75058 10.6058 2.83294 10.2961L2.87225 10.1482C2.88214 10.112 2.89013 10.0776 2.89013 10.04C2.89013 9.92547 2.83409 9.82443 2.74839 9.76282C1.68168 8.98377 1 7.83098 1 6.55014ZM3.77516 5.1902C3.77516 5.52312 4.04305 5.79315 4.37368 5.79315C4.70381 5.79315 4.97169 5.52312 4.97169 5.1902C4.97169 4.85715 4.70381 4.58725 4.37368 4.58725C4.04305 4.58725 3.77516 4.85715 3.77516 5.1902ZM7.14872 5.1902C7.14872 5.52312 7.4166 5.79303 7.74698 5.79303C8.07736 5.79303 8.34525 5.52312 8.34525 5.1902C8.34525 4.85715 8.07736 4.58725 7.74698 4.58725C7.4166 4.58725 7.14872 4.85715 7.14872 5.1902Z" fill="currentColor" fill-opacity="0.9"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.7521C15 10.8193 14.432 11.7799 13.5431 12.4293C13.4716 12.4806 13.4249 12.565 13.4249 12.6601C13.4249 12.6914 13.4316 12.7203 13.4397 12.7504C13.5109 13.0173 13.6245 13.4448 13.6298 13.4648C13.632 13.4734 13.6346 13.482 13.6372 13.4908C13.6447 13.5162 13.6525 13.5422 13.6525 13.5685C13.6525 13.6466 13.5896 13.7101 13.5119 13.7101C13.4813 13.7101 13.4564 13.6984 13.4305 13.6837L12.5075 13.1464C12.4381 13.106 12.3645 13.0812 12.2837 13.0812C12.2404 13.0812 12.1988 13.0879 12.1597 13.0999C11.7289 13.2247 11.2642 13.294 10.7831 13.294C8.45434 13.294 6.56624 11.7083 6.56624 9.7521C6.56624 7.79592 8.45434 6.21044 10.7831 6.21044C13.1122 6.21044 15 7.79592 15 9.7521ZM8.85103 8.61884C8.85103 8.91182 9.08683 9.14927 9.37754 9.14927C9.66836 9.14927 9.90404 8.91182 9.90404 8.61884C9.90404 8.32573 9.66836 8.08815 9.37754 8.08815C9.08683 8.08815 8.85103 8.32573 8.85103 8.61884ZM11.6626 8.61884C11.6626 8.91182 11.898 9.14927 12.1888 9.14927C12.4797 9.14927 12.7153 8.91182 12.7153 8.61884C12.7153 8.32573 12.4797 8.08815 12.1888 8.08815C11.898 8.08815 11.6626 8.32573 11.6626 8.61884Z" fill="currentColor" fill-opacity="0.9"></path>
      </svg>`
    }, link: 'http://webpon-img.oss-cn-guangzhou.aliyuncs.com/chatFile/a0a32f7d-6c10-4e47-8ffe-fd8a40a2f4c5_mmqrcode1676008113785.png' },{ icon: 'github', link: 'https://github.com/webpon/blog' }],

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
