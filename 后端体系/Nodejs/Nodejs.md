- [Api](#api)
- [开发框架](#开发框架)
- [工具库](#工具库)
- [包管理](#包管理)
  - [npm](#npm)
    - [npm简介](#npm简介)
    - [npm的组成](#npm的组成)
    - [npm有什么用](#npm有什么用)
    - [Node.js 安装配置链接（Node.js中内置有npm）](#nodejs-安装配置链接nodejs中内置有npm)
    - [npm中文文档](#npm中文文档)
    - [检测是否成功安装npm](#检测是否成功安装npm)
    - [npm基本使用](#npm基本使用)
    - [切换npm下载地址](#切换npm下载地址)
    - [package.json](#packagejson)
      - [简介](#简介)
      - [默认值](#默认值)
      - [name](#name)
      - [version](#version)
      - [description](#description)
      - [keywords](#keywords)
      - [homepage](#homepage)
      - [bugs](#bugs)
      - [license](#license)
      - [people fields: author, contributors](#people-fields-author-contributors)
      - [files](#files)
      - [main](#main)
      - [bin](#bin)
      - [man](#man)
      - [directories](#directories)
      - [repository](#repository)
      - [dependencies](#dependencies)
      - [依赖URL](#依赖url)
      - [devDependencies](#devdependencies)
      - [peerDependencies](#peerdependencies)
      - [bundledDependencies](#bundleddependencies)
      - [optionalDependencies](#optionaldependencies)
      - [engines](#engines)
      - [engineStrict](#enginestrict)
      - [os](#os)
      - [cpu](#cpu)
      - [preferGlobal](#preferglobal)
      - [private](#private)
      - [publishConfig](#publishconfig)
    - [上传自己的npm包](#上传自己的npm包)
    - [Nodejs模块加载机制](#nodejs模块加载机制)
    - [全局安装和局部安装的区别](#全局安装和局部安装的区别)
      - [本地安装](#本地安装)
      - [全局安装](#全局安装)
### Api

### 开发框架

- Express
- Koa
- Egg

### 工具库

### 包管理

> 用于安装 Node.js 的扩展、工具等。

#### npm

##### npm简介

> Npm(Node Package Manager) 是node的包管理工具，是用JavaScript写出来的工具 ，被内置进了node中

##### npm的组成

| 组成               | 简介                                                         |
| ------------------ | ------------------------------------------------------------ |
| 网站               | 网站 是开发者查找包（package）、设置参数以及管理 npm 使用体验的主要途径 |
| 注册表（registry） | 注册表 是一个巨大的数据库，保存了每个包（package）的信息     |
| 命令行工具 (CLI)   | CLI 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道       |
| npm服务器          | 用于存储所有的npm包                                          |

##### npm有什么用

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用

##### Node.js 安装配置链接（Node.js中内置有npm）

https://jingyan.baidu.com/article/c85b7a64b6498c003aac956a.html

##### npm中文文档

https://www.npmjs.com/ 官网
https://www.npmjs.com.cn/ 中文文档

##### 检测是否成功安装npm

```
npm -v		
6.4.1		//安装成功会返回这个版本号
```

##### npm基本使用

**npm安装模块**

【**npm install** xxx】利用 npm 安装xxx模块到当前命令行所在目录；
	  【**npm install** -g xxx】利用npm安装全局模块xxx；

**本地安装时将模块写入package.json中：**

【**npm install** xxx】安装但不写入package.json；
      【**npm install** xxx --save】 安装并写入package.json的"dependencies"中；
	  【**npm install** xxx --save-dev】安装并写入package.json的"devDependencies"中。

**npm 删除模块**

【**npm uninstall** xxx】删除xxx模块；
      **【npm uninstall -g xxx】删除全局模块xxx；**

**全局安装与本地安装**

npm 的包安装分为本地安装（local），全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如

```
	npm install <Module Name>         # 本地安装
     npm install <Module Name> -g      # 全局安装
     // install可以缩写为i
```

`npm install` 可以把发布在 npmjs 平台上的模块包下载到本地，`npm install -g` 可以把包下下来的同时，还帮我们配置好全局变量，让我们可以直接使用命令	   而不是通过 node 来执行或者配置 `package.json` 的 script 脚本来 run。

不全局安装的话需要在该依赖包下面执行npm link才能在命令行使用

**npm link**

npm link可以配置一些我们的终端命令

第一步，我们需要init一个package.json

然后在package.json中加入bin:index.js

![20210227220351](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220351.png)

然后在项目根目录上创建index.js

输入代码：

```
//这行是必须的，且必须放于首行
#!/usr/bin/env node

console.log('测试');
```

执行npm link

![image-20210221131628465](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220355.png)

这样我们就创建好我们的命令了

![image-20210221131655226](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220359.png)

如果想卸载的话可以使用npm unlink

**查看全局安装的依赖包**    npm list -g --depth 0

查看全局安装目录 npm config get prefix

##### 切换npm下载地址

由于国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。

一、npm切换下载地址

- 使用 npm install nrm -g 下载它
- 查询可用下载地址 nrm ls
- 切换 npm 下载地址 nrm use 下载地址名称
- nrm test测试各接口网速情况
- 增加定制源：nrm add test http://192.168.1.100:6666
- 删除源：nrm del test

二、cnpm安装

- 可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
  `npm install -g cnpm --registry=https://registry.npm.taobao.org`
  这样就可以使用 cnpm 命令来安装模块了：
  `cnpm install [name]`

但是有可能会出现以下问题：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200909204105073-1282103276.png)

 解决方法：　　

1、在系统中搜索框 输入 Windos PowerShell

2、点击“管理员身份运行”

3、输入“ set-ExecutionPolicy RemoteSigned”回车

4、根据提示，输入A，回车

5、再次回到cnpm -v执行成功。

##### package.json

```
{
  "name": "studyangular",
  "version": "0.0.0",
  "dependencies": {},
  "repository": {},
  "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-autoprefixer": "^2.0.0",
    "grunt-concurrent": "^1.0.0",
    "grunt-contrib-clean": "^0.6.0",
    "grunt-contrib-compass": "^1.0.0",
    "grunt-contrib-concat": "^0.5.0",
    "grunt-contrib-connect": "^0.9.0",
    "grunt-contrib-copy": "^0.7.0",
    "grunt-contrib-cssmin": "^0.12.0",
    "grunt-contrib-htmlmin": "^0.4.0",
    "grunt-contrib-imagemin": "^0.9.2",
    "grunt-contrib-jshint": "^0.11.0",
    "grunt-contrib-uglify": "^0.7.0",
    "grunt-contrib-watch": "^0.6.1",
    "grunt-filerev": "^2.1.2",
    "grunt-google-cdn": "^0.4.3",
    "grunt-newer": "^1.1.0",
    "grunt-ng-annotate": "^0.9.2",
    "grunt-svgmin": "^2.0.0",
    "grunt-usemin": "^3.0.0",
    "grunt-wiredep": "^2.0.0",
    "jshint-stylish": "^1.0.0",
    "load-grunt-tasks": "^3.1.0",
    "time-grunt": "^1.0.0"
  },
  "engines": {
    "node": ">=0.10.0"
  },
  "scripts": {
    "test": "grunt test"
  }
}
```

###### 简介

本文档有所有package.json中必要的配置。它必须是真正的json，而不是js对象。

本文档中描述的很多行为都受`npm-config(7)`的影响。

npm的package.json中文文档 : https://github.com/ericdum/mujiang.info/issues/6/

###### 默认值

npm会根据包内容设置一些默认值。

- `"scripts": {"start": "node server.js"}`

  如果包的根目录有`server.js`文件，npm会默认将`start`命令设置为`node server.js`。

- `"scripts":{"preinstall": "node-waf clean || true; node-waf configure build"}`

  如果包的根目录有`wscript`文件，npm会默认将`preinstall`命令用node-waf进行编译。

- `"scripts":{"preinstall": "node-gyp rebuild"}`

  如果包的根目录有`binding.gyp`文件，npm会默认将`preinstall`命令用node-gyp进行编译。

- `"contributors": [...]`

  如果包的根目录有`AUTHORS`文件，npm会默认逐行按`Name <email> (url)`格式处理，邮箱和url是可选的。#号和空格开头的行会被忽略。

###### name

在package.json中_最_重要的就是name和version字段。他们都是必须的，如果没有就无法install。name和version一起组成的标识在假设中是唯一的。改变包应该同时改变version。

name是这个东西的名字。注意：

- 不要把node或者js放在名字中。因为你写了package.json它就被假定成为了js，不过你可以用"engine"字段指定一个引擎（见后文）。
- 这个名字会作为在URL的一部分、命令行的参数或者文件夹的名字。任何non-url-safe的字符都是不能用的。
- 这个名字可能会作为参数被传入require()，所以它应该比较短，但也要意义清晰。
- 在你爱上你的名字之前，你可能要去npm registry查看一下这个名字是否已经被使用了。http://registry.npmjs.org/

###### version

在package.json中_最_重要的就是name和version字段。他们都是必须的，如果没有就无法install。name和version一起组成的标识在假设中是唯一的。改变包应该同时改变version。

version必须能被[node-semver](https://github.com/isaacs/node-semver)解析，它被包在npm的依赖中。（要自己用可以执行`npm install semver`）

可用的“数字”或者“范围”见[semver(7)](https://npmjs.org/doc/misc/semver.html).

###### description

放简介，字符串。方便屌丝们在`npm search`中搜索。

###### keywords

关键字，数组、字符串。还是方便屌丝们在`npm search`中搜索。

###### homepage

项目官网的url。

**注意**：这和“url”_不_一样。如果你放一个“url”字段，registry会以为是一个跳转到你发布在其他地方的地址，然后喊你滚粗。

嗯，滚粗，没开玩笑。

###### bugs

你项目的提交问题的url和（或）邮件地址。这对遇到问题的屌丝很有帮助。

差不多长这样：

```
{ "url" : "http://github.com/owner/project/issues"
, "email" : "project@hostname.com"
}
```

你可以指定一个或者指定两个。如果你只想提供一个url，那就不用对象了，字符串就行。

如果提供了url，它会被`npm bugs`命令使用。

###### license

你应该要指定一个许可证，让人知道使用的权利和限制的。

最简单的方法是，假如你用一个像BSD或者MIT这样通用的许可证，就只需要指定一个许可证的名字，像这样：

```
{ "license" : "BSD" }
```

如果你又更复杂的许可条件，或者想要提供给更多地细节，可以这样:

```
"licenses" : [
  { "type" : "MyLicense"
  , "url" : "http://github.com/owner/project/path/to/license"
  }
]
```

在根目录中提供一个许可证文件也蛮好的。

###### people fields: author, contributors

author是一个人。contributors是一堆人的数组。person是一个有name字段，可选的有url、email字段的对象，像这样：

```
{ "name" : "Barney Rubble"
, "email" : "b@rubble.com"
, "url" : "http://barnyrubble.tumblr.com/"
}
```

或者可以把所有的东西都放到一个字符串里，npm会给你解析：

```
"Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)
```

email和url在两种形式中都是可选的。

也可以在你的npm用户信息中设置一个顶级的maintainers字段。

###### files

files是一个包含项目中的文件的数组。如果命名了一个文件夹，那也会包含文件夹中的文件。（除非被其他条件忽略了）

你也可以提供一个.npmignore文件，让即使被包含在files字段中得文件被留下。其实就像.gitignore一样。

###### main

main字段配置一个文件名指向模块的入口程序。如果你包的名字叫`foo`，然后用户`require("foo")`，main配置的模块的exports对象会被返回。

这应该是一个相对于根目录的文件路径。

对于大多数模块，它是非常有意义的，其他的都没啥。

###### bin

很多包都有一个或多个可执行的文件希望被放到PATH中。npm让妈妈再也不用担心了（实际上，就是这个功能让npm可执行的）。

要用这个功能，给package.json中的`bin`字段一个命令名到文件位置的map。初始化的时候npm会将他链接到`prefix/bin`（全局初始化）或者`./node_modules/.bin/`（本地初始化）。

比如，npm有：

```
{ "bin" : { "npm" : "./cli.js" } }
```

所以，当你初始化npm，它会创建一个符号链接到`cli.js`脚本到`/usr/local/bin/npm`。

如果你只有一个可执行文件，并且名字和包名一样。那么你可以只用一个字符串，比如：

```
{ "name": "my-program"
, "version": "1.2.5"
, "bin": "./path/to/program" }
```

结果和这个一样：

```
{ "name": "my-program"
, "version": "1.2.5"
, "bin" : { "my-program" : "./path/to/program" } }
```

上传下载后npm会把package.json中的bin命令生成可执行命令放在.bin中，

我们可以通过./node_modules/.bin/脚本名，

或者通过node ./node_modules/包名/bin/脚本 执行，

还有就是通过我们设定的命令脚本script执行，

这个script会去.node_modules/.bin或者到全局安装目录去找找到该可执行脚本执行，但是都`比较麻烦`，

我们可以使用npx testbin来执行，它相当于npm run test



如果全局安装，那么可执行命令也会放到npm全局安装目录，这时候如果我们使用命令testbin，那么就会去npm全局安装目录去寻找该可执行命令

###### man

指定一个单一的文件或者一个文件数组供`man`程序使用。

如果只提供一个单一的文件，那么它初始化后就是`man <pkgname>`的结果，而不管实际的文件名是神马，比如：

```
{ "name" : "foo"
, "version" : "1.2.3"
, "description" : "A packaged foo fooer for fooing foos"
, "main" : "foo.js"
, "man" : "./man/doc.1"
}
```

这样`man foo`就可以用到`./man/doc.1`文件了。

如果文件名不是以包名开头，那么它会被冠以前缀，下面的：

```
{ "name" : "foo"
, "version" : "1.2.3"
, "description" : "A packaged foo fooer for fooing foos"
, "main" : "foo.js"
, "man" : [ "./man/foo.1", "./man/bar.1" ]
}
```

会为`man foo`和`man foo-bar`创建文件。

man文件需要以数字结束，然后可选地压缩后以`.gz`为后缀。The number dictates which man section the file is installed into.

```
{ "name" : "foo"
, "version" : "1.2.3"
, "description" : "A packaged foo fooer for fooing foos"
, "main" : "foo.js"
, "man" : [ "./man/foo.1", "./man/foo.2" ]
}
```

会为`man foo`和`man 2 foo`创建。

###### directories

CommonJS [Packages](http://wiki.commonjs.org/wiki/Packages/1.0)规范说明了几种方式让你可以用`directories`hash标示出包得结构。如果看一下[npm's package.json](http://registry.npmjs.org/npm/latest)，你会看到有directories标示出doc, lib, and man。

在未来，这个信息可能会被用到。

**directories.lib**

告诉屌丝们你的库文件夹在哪里。目前没有什么特别的东西需要用到lib文件夹，但确实是重要的元信息。

**directories.bin**

如果你指定一个“bin”目录，然后在那个文件夹中得所有文件都会被当做"bin"字段使用。

如果你已经指定了“bin”字段，那这个就无效。

**directories.man**

一个放满man页面的文件夹。贴心地创建一个“man”字段。
A folder that is full of man pages. Sugar to generate a "man" array by
walking the folder.

**directories.doc**

将markdown文件放在这里。最后，这些会被很好地展示出来，也许，某一天。
Put markdown files in here. Eventually, these will be displayed nicely,
maybe, someday.

**directories.example**

将事例脚本放在这里。某一天，它可能会以聪明的方式展示出来。

###### repository

指定你的代码存放的地方。这个对希望贡献的人有帮助。如果git仓库在github上，那么`npm docs`命令能找到你。

这样做：

```
"repository" :
  { "type" : "git"
  , "url" : "http://github.com/isaacs/npm.git"
  }

"repository" :
  { "type" : "svn"
  , "url" : "http://v8.googlecode.com/svn/trunk/"
  }
```

URL应该是公开的（即便是只读的）能直接被未经过修改的版本控制程序处理的url。不应该是一个html的项目页面。因为它是给计算机看的。

scripts

“scripts”是一个由脚本命令组成的hash对象，他们在包不同的生命周期中被执行。key是生命周期事件，value是要运行的命令。

参见 [npm-scripts(7)](https://npmjs.org/doc/misc/npm-scripts.html)

config

"config" hash可以用来配置用于包脚本中的跨版本参数。在实例中，如果一个包有下面的配置：

```
{ "name" : "foo"
, "config" : { "port" : "8080" } }
```

然后有一个“start”命令引用了`npm_package_config_port`环境变量，用户可以通过`npm config set foo:port 8001`来重写他。

参见 [npm-config(7)](https://npmjs.org/doc/misc/npm-config.html) 和 [npm-scripts(7)](https://npmjs.org/doc/misc/npm-scripts.html)。

###### dependencies

依赖是给一组包名指定版本范围的一个hash。这个版本范围是一个由一个或多个空格分隔的字符串。依赖还可以用tarball或者git URL。

**请不要将测试或过渡性的依赖放在`dependencies`hash中。**见下文的`devDependencies`。

详见[semver(7)](https://npmjs.org/doc/misc/semver.html).

- `version` 必须完全和`version`一致
- `>version` 必须比`version`大
- `>=version` 同上
- `<version` 同上
- `<=version` 同上
- `~version` 大约一样，见[semver(7)](https://npmjs.org/doc/misc/semver.html)
- `1.2.x` 1.2.0, 1.2.1, 等，但不包括1.3.0
- `http://...` 见下文'依赖URL'
- `*` 所有
- `""` 空，同`*`
- `version1 - version2` 同 `>=version1 <=version2`.
- `range1 || range2` 二选一。
- `git...` 见下文'依赖Git URL'
- `user/repo` 见下文'GitHub URLs'

比如下面都是合法的：

```
{ "dependencies" :
  { "foo" : "1.0.0 - 2.9999.9999"
  , "bar" : ">=1.0.2 <2.1.2"
  , "baz" : ">1.0.2 <=2.3.4"
  , "boo" : "2.0.1"
  , "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0"
  , "asd" : "http://asdf.com/asdf.tar.gz"
  , "til" : "~1.2"
  , "elf" : "~1.2.3"
  , "two" : "2.x"
  , "thr" : "3.3.x"
  }
}
```

###### 依赖URL

可以指定一个tarball URL，这个tarball将在包被初始化的时候下载并初始化。

**依赖Git URL**

Git urls 可以是下面几种形式：

```
git://github.com/user/project.git#commit-ish
git+ssh://user@hostname:project.git#commit-ish
git+ssh://user@hostname/project.git#commit-ish
git+http://user@hostname/project/blah.git#commit-ish
git+https://user@hostname/project/blah.git#commit-ish
```

`commit-ish`是可以被`git checkout`的任何tag、sha或者branch。默认为`master`。

**GitHub URLs**

1.1.65版后，你可以仅仅用“user/foo-project”引用GitHub urls，比如：

```
{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "visionmedia/express"
  }
}
```

###### devDependencies

如果有人要使用你的模块，那么他们可能不需要你开发使用的外部测试或者文档框架。

在这种情况下，最好将这些附属的项目列在`devDependencies`中。

这些东西会在执行`npm link`或者`npm install`的时候初始化，并可以像其他npm配置参数一样管理。详见[npm-config(7)](https://npmjs.org/doc/misc/npm-config.html)。

对于非特定平台的构建步骤，比如需要编译CoffeeScript，可以用`prepublish`脚本去实现，并把它依赖的包放在devDependency中。（译者注：prepublish定义了在执行`npm publish`的时候先行执行的脚本）

比如：

```
{ "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepublish": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}
```

`prepublish`脚本会在publishing前运行，这样用户就不用自己去require来编译就能使用。并且在开发模式中（比如本地运行`npm install`）会运行这个脚本以便更好地测试。

###### peerDependencies

在一些场景中，如在一个host中不必须进行`require`时候，你想表现你的package与一个host工具或者库的兼容关键。这一般用来引用_插件_。尤其是你的模块可能要暴露一个特定的接口，并由host文档来预期和指定。

比如：

```
{
  "name": "tea-latte",
  "version": "1.3.5"
  "peerDependencies": {
    "tea": "2.x"
  }
}
```

这能保证你的package可以只和tea的2.x版本一起初始化。`npm install tea-latte`可能会产生下面的依赖关系

```
â”œâ”€â”€ tea-latte@1.3.5
â””â”€â”€ tea@2.2.0
```

试图初始化另一个有会冲突的依赖的插件将导致一个错误。因此，确保你的插件的需求约束越弱越好，而不要去把它锁定到一个特定的版本。

假设这个host遵守semver规范，只改变这个package的主版本会打破你的插件。因此，如果你在package中用过每个1.x版本，就用"^1.0"或者"1.x"来表示。如果你依赖于功能介绍1.5.2，用">= 1.5.2 < 2"。

###### bundledDependencies

一组包名，他们会在发布的时候被打包进去。

拼成`"bundleDependencies"`（缺d）也可以。

###### optionalDependencies

如果一个依赖可用，但你希望在它安装错误的时候npm也能继续初始化，那么你可以把它放在`optionalDependencies` hash中。这是一个包名到版本或者url的map，就像`dependencies` hash一样。只是它运行错误。

处理缺乏依赖也是你的程序的责任。比如像这样：

```
try {
  var foo = require('foo')
  var fooVersion = require('foo/package.json').version
} catch (er) {
  foo = null
}
if ( notGoodFooVersion(fooVersion) ) {
  foo = null
}

// .. then later in your program ..

if (foo) {
  foo.doFooThings()
}
```

`optionalDependencies`会覆盖`dependencies`中同名的项，所以通常比只放在一个地方好。

###### engines

你可以指定工作的node的版本：

```
{ "engines" : { "node" : ">=0.10.3 <0.12" } }
```

并且，像dependensies一样，如果你不指定版本或者指定“*”作为版本，那么所有版本的node都可以。

如果指定一个“engines”字段，那么npm会需要node在里面，如果“engines”被省略，npm会假定它在node上工作。

你也可以用“engines”字段来指定哪一个npm版本能更好地初始化你的程序，如：

```
{ "engines" : { "npm" : "~1.0.20" } }
```

记住，除非用户设置`engine-strict`标记，这个字段只是建议值。

###### engineStrict

如果你确定你的模块_一定不_会运行在你指定版本之外的node或者npm上，你可以在package.json文件中设置`"engineStrict":true`。它会重写用户的`engine-strict`设置。

除非你非常非常确定，否则不要这样做。如果你的engines hash过度地限制，很可能轻易让自己陷入窘境。慎重地考虑这个选择。如果大家滥用它，它会再以后的npm版本中被删除。

###### os

你可以指定你的模块要运行在哪些操作系统中：

```
"os" : [ "darwin", "linux" ]
```

你也可以用黑名单代替白名单，在名字前面加上“!”就可以了：

```
"os" : [ "!win32" ]
```

操作系统用`process.platform`来探测。

虽然没有很好地理由，但它是同时支持黑名单和白名单的。

###### cpu

如果你的代码只能运行在特定的cpu架构下，你可以指定一个：

```
"cpu" : [ "x64", "ia32" ]
```

就像`os`选项，你也可以黑一个架构：

```
"cpu" : [ "!arm", "!mips" ]
```

cpu架构用`process.arch`探测。

###### preferGlobal

如果包主要是需要全局安装的命令行程序，就设置它为`true`来提供一个warning给只在局部安装的人。

它不会真正的防止用户在局部安装，但如果它没有按预期工作它会帮助防止产生误会。

###### private

如果你设置`"private": true`，npm就不会发布它。

这是一个防止意外发布私有库的方式。如果你要确定给定的包是只发布在特定registry（如内部registry）的，用`publishConfig`hash的描述来重写`registry`的publish-time配置参数。

###### publishConfig

这是一个在publish-time使用的配置集合。当你想设置tag或者registry的时候它非常有用，所以你可以确定一个给定的包没有打上“lastest”的tag或者被默认发布到全局的公开registry。

任何配置都可以被重写，但当然可能只有“tag”和“registry”与发布的意图有关。

参见[npm-config(7)](https://npmjs.org/doc/misc/npm-config.html)有可以被重写的列表。

##### 上传自己的npm包

**方法一**（最简单）：

**npm初始化**

```cpp
npm init
```

**目录结构：**

![image-20210109102616579](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220405.png)

index.js

```
     module.exports=function(){
          console.log('你好，这是我发布的npm包')
     }
```

package.json

```
     {
       "name": "webpontest224909",
       "version": "2.0.0",
       "description": "",
       "main": "index.js",
       "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1"
       },
       "author": "",
       "license": "ISC"
     }
```

.npmignore(要忽略的文件和文件夹)

```
     # 忽略目录
     examples/
     package/
     public/

     # 忽略指定文件
     vue.config.js
     *.map
```

Terminal打印

```cpp
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file
Press ^C at any time to quit.
package name: (ng-antd-cli)
version: (1.0.0)
git repository: (https://github.com/*****/ng-antd-cli.git)
author: *****
license: (ISC) MIT
About to write to D:\ng-antd-cli\package.json:
```

**npm登陆**

若是没有账号，请先注册 https://www.npmjs.com/，

```cpp
npm login
```

Terminal打印

如果曾经设置过淘宝的镜像代理，这里打印的内容为：

```cpp
Username: *****
Password:
Email: (this IS public) *****
Logged in as ***** on https://registry.npm.taobao.org/.
```

如果么有设置过淘宝的镜像代理，这里打印的内容为：

```cpp
Username: *****
Password:
Email: (this IS public) *****
Logged in as ***** on http://registry.npmjs.org/.
```

**npm发布**

```cpp
npm publish
```

Terminal打印

```cpp
npm notice
npm notice package: ng-antd-cli@1.0.0
npm notice === Tarball Contents ===
npm notice 246B  .editorconfig
npm notice 2.3kB index.js
npm notice 810B  package.json
npm notice 214B  README.md
npm notice === Tarball Details ===
npm notice name:          ng-antd-cli
npm notice version:       1.0.0
npm notice package size:  1.6 kB
npm notice unpacked size: 3.5 kB
npm notice shasum:        17453c1827a98e3aba1128ab92275b9ca1bb57e4
npm notice integrity:     sha512-e9gJf/qOqzABo[...]8imC9iepBwrmA==
npm notice total files:   4
npm notice
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://registry.npm.taobao.org/ng-antd-cli - [no_perms] Private mode enable, only admin can publish
 this module
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy.
```

`报错，这里报错是说没有权限，这里就与之前是否设置过淘宝镜像有关系，如果登陆的是淘宝镜像，这里就会报错`
`（因为国内网络问题，很多人把npm的镜像代理到淘宝或者别的地方了，这里要设置回原始的镜像）`

> 设置npm的镜像地址

```
原始地址
npm config set registry=http://registry.npmjs.org
```

再次发布

```cpp
npm publish
```

发布成功：

```cpp
npm notice
npm notice 810B  package.json
npm notice 214B  README.md
npm notice === Tarball Details ===
npm notice name:          ng-antd-cli
npm notice version:       1.0.0
npm notice package size:  1.6 kB
npm notice unpacked size: 3.5 kB
npm notice shasum:        17453c1827a98e3aba1128ab92275b9ca1bb57e4
npm notice integrity:     sha512-e9gJf/qOqzABo[...]8imC9iepBwrmA==
npm notice total files:   4
npm notice
+ ng-antd-cli@1.0.0
```

可以到npm网页查看发布的包

**删除发布的包**

删除24小时内发布的包

```cpp
npm unpublish --force 
```

删除指定名称的包

```cpp
npm unpublish easy-deisgn@1.0.1 --force
```

Terminal打印

```cpp
🔥 Unpublishing antd-ng-li...
+ npm (antd-ng-li)
npm ERR! owner mutate Error getting user data for $(npm
npm ERR! code E404
npm ERR! 404 Not Found - GET http://registry.npmjs.org/-/user/org.couchdb.user:%24(npm
🎉 Done.

D:\HC\webstorm\ng-antd-cli>
```

到网页查看仍可以看到该包名，但是点击后产看可以看到已删除信息
![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20191122163032514.png)
发布成功后，为了之后使用方便可以继续设置npm代理镜像

```cpp
npm config set registry=https://registry.npm.taobao.org
```

npm**更新**

所谓的更新，其实就是再次发布

```cpp
npm publish
```

Terminal打印

报错信息

```cpp
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT http://registry.npmjs.org/xxx-xxx - 
You cannot publish over the previously published versions: 2.0.0.
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy
```

每次更新的时候需要改变package.json中的版本号
重新发布，OK了

`上传npm,npm会把包进行处理，我们下载后会变得不一样`

上传之前：

![image-20210301014716717](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301014716.png)

package.json:

![image-20210301014734016](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301014734.png)

上传下载后

![image-20210301034240539](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301034240.png)

package.json:

![image-20210301034310175](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301034310.png)

两者区别：上传下载后npm会把package.json中的bin命令生成可执行命令放在.bin中，

我们可以通过./node_modules/.bin/脚本名，

或者通过node ./node_modules/包名/bin/脚本 执行，

还有就是通过我们设定的命令脚本script执行，

这个script会去.node_modules/.bin或者到全局安装目录去找找到该可执行脚本执行，但是都`比较麻烦`，

我们可以使用npx testbin来执行，它相当于npm run test



如果全局安装，那么可执行命令也会放到npm全局安装目录，这时候如果我们使用命令testbin，那么就会去npm全局安装目录去寻找该可执行命令



##### Nodejs模块加载机制

**1) 模块的类型**`（最优先）`

NodeJS模块分为两类，一类是核心模块，一类是文件模块。

1，核心模块就是NodeJS标准中提供的模块，如fs、http、net、vm等，官方提供的模块，编译成了二进制代码，直接可以通过require获取核心模块，核心模块具有最高的加载优先级，如果有模块和其命名冲突，nodeJS总会加载核心模块

2，文件模块则是存储为单独的文件或者文件夹的模块，可能是JS代码、JSON或编译好的C/C++代码。在不显示指定文件模块扩展名的时候，NodeJS会分别试图加上.js、.json和.node扩展名

**2)文件模块加载方式**

文件模块的加载有两种方式，一种是按路径加载，一种是查找node——modules文件夹

**A:按路径加载模块**

1，如果require参数以“/"开头，那么就以绝对路径的方式查找模块名称，例如require（‘/home/byvoid/module’)将会按照优先级依次尝试加载/home/byvoid/module.js、/home/byvoid/module.json、/home/byvoid/module.node(所有无后缀的模块加载方式都是按照js/json/node的顺序）

2，如果require参数以‘./’或者'../'开头，则以相对路径来查找模块

3、文件夹包含，通过npm安装的第三方模块都是这种方式，指定到模块所在的文件夹，该文件夹就是模块名，以express为例：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img031742515993561.png" alt="img" style="zoom:80%;" />

　　　加载代码：var ex = require('./node_modules/express')

　　　　加载机制：

​     首先搜索当前目录下的 package.json 文件，查找里面的mian属性，如果存在，则加载该属性所指定的的文件。

　　如果不存在 package.json 或者该文件里面没有main字段，nodejs将试图加载 index.js 

　　都不存在那么就只有说一声Cannot find module了。

**B：通过查找node_modules目录加载模块**

如果require参数不以”/","./“,"../”开头，而该模块又不是核心模块，那么就要通过node_module加载模块

在node_moduler目录的外面一层，我们可以直接使用require（‘express’)来代替require（'./node_modules/express'),这是node.js模块加载的一个重要特性，通过查找node_modules了目录来加载模块

`当require遇到一个既不是核心模块，又不是以路径形式表示的模块名称时，会试图在当前目录下的node_module目录中查找是不是有这样一个模块，如果没有找到，则会在当前目录的上一层的node_module目录中继续查找，返回执行这一过程，直到i遇到根目录位置。`

注意： 在node环境，`ES6中的模块化import，export目前尚未被支持，因此实际使用都是转换成`require，所以也会遵循nodejs模块机制

​			在.js中，完全按照nodejs的机制来查找，但是如果在.vue文件中使用import，那么会优先查找.vue文件，而不是.js、.json和.node这样的顺序

##### 全局安装和局部安装的区别

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-165556988153688.webp)

###### 本地安装

- 将安装包放在项目的 本目录中的node_modules 下（运行 npm 命令时所在的目录）如果没有 node_modules 目录，会在当前执行npm 命令的目录下生成node_modules 目录

- 可以通过 require() 来引入本地安装的包

  `注意：nodejs时用require引入包，ES6是用import`

  `最重要的是如果引入的包本地没有会到全局安装的里面找`

  `那为什么有些包在全局和局部都要安装呀？`

  `答：如果只在局部安装，那么想要在命令行运行一些命令的话就要输入 node ./node_modules/包名/bin/脚本，非常麻烦，`

  ​		`全局安装会在在环境变量注册，只需需要脚本名字即可执行。所以需要在命令行执行的包一般都要安装到全局。`

  ​	 `如果只在全局安装，在命令行和require，import都可以正常执行，因为require和import如果在node_modules没找到就会取全局中找，`

  ​	`但是会有一个问题，不同项目都使用同一个包，这有些时候会有兼容问题，比如项目1需要的是10版本，项目2需要的版本是5，但是只有全局`

  ​		 `一个版本，那么就有可能有兼容问题，这时候就需要在本地安装适合自己的版本`

###### 全局安装

- 默认将安装包放在C:\Users\web\AppData\Roaming\npm 下的 node_modules 的安装目录
- 可以直接在命令行里使用