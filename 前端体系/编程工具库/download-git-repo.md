- [简介](#简介)
- [安装](#安装)
- [使用](#使用)
##### 简介

> 从节点下载并提取git存储库（GitHub、GitLab、Bitbucket），Vue-cli的模板下载也是利用了这个库
>
> npm地址：https://www.npmjs.com/package/download-git-repo

##### 安装

```
	npm install download-git-repo
```

##### 使用

**API**

*download(repository, destination, options, callback)*

```
     const download = require('download-git-repo')
       // 1、下载地址；2、下载存放目录；3、options配置，可选，下面将介绍；4、回调函数
       download('github:webpon/mall', './dir', async function (err) {
         if(err) {
           console.log('下载失败');
         } else {
           console.log('下载成功');
         }
       })
```

下载一个 git repository 到 destination 文件夹，配置参数 options, 和 callback回调.

*repository*

**一、可以采用下面简写方式**

 GitHub - github:owner/name 或者 owner/name
		GitLab - gitlab:owner/name
		Bitbucket - bitbucket:owner/name

1、默认是 master 分支, 但你可以指定分枝和tag ，如 owner/name#my-branch. 

2、你还可以指定自定义来源，如 gitlab:custom.com:owner/name. 自定义来源默认为 https 或 git@ , 你也可以自己之定义协议. 

**二、Direct - direct:url方式**

这种方式会跳过上面简写的方式，直接传递 url.

1、如果使用 direct，并且没有 clone配置项, 你必须传入完整的zip文件地址, 包括分枝（如果需要的话）. 

2、如果使用 direct 并带有 clone配置项, 你必须传入完整的 git repo url , 你可以通过 direct:url#my-branch指定分枝.

```
     const download = require('download-git-repo')
	  // 使用这个方式需要加上options, {clone: true}
       download('direct:https://github.com/webpon/mall.git', './dir', { clone: true }, async function (err) {
         if (err) {
           console.log('下载失败');
         } else {
           console.log('下载成功');
		}
	}
```

*destination*

下载仓库的文件路径

 

*options*（可选）配置对象:

clone - boolean 默认 false - 如果设置成 true，会使用 git clone  http 下载. 这种方式可能会比较慢, 他不支持私人的 repositories.
其他配置项 (proxy, headers, filter, 等.) 会传递下去，并覆盖默认值
http下载特有配置项: https://github.com/kevva/download#options
clone 特有配置项: https://github.com/jaz303/git-clone#clonerepo-targetpath-options-cb
	  *callback*

回调函数，会传入err.
更多使用方式请访问：https://www.npmjs.com/package/download-git-repo