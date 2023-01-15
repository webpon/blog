- [简介](#简介)
- [基本使用](#基本使用)
  - [初始化](#初始化)
  - [简单使用](#简单使用)
- [开发环境](#开发环境)
  - [基础配置](#基础配置)
  - [publicPath](#publicpath)
- [打包css/less资源](#打包cssless资源)
- [打包 HTML 资源](#打包-html-资源)
- [打包图片资源](#打包图片资源)
- [打包Vue组件](#打包vue组件)
- [打包其他资源](#打包其他资源)
- [配置devserver](#配置devserver)
- [开发环境配置](#开发环境配置)
- [生产环境](#生产环境)
  - [提取css/less成单独文件](#提取cssless成单独文件)
  - [css兼容性处理](#css兼容性处理)
  - [压缩css](#压缩css)
  - [js语法检查](#js语法检查)
  - [js兼容性处理](#js兼容性处理)
  - [js压缩](#js压缩)
  - [html压缩](#html压缩)
  - [生产环境配置](#生产环境配置)
  - [性能优化](#性能优化)
- [开发环境性能优化](#开发环境性能优化)
  - [优化打包构建速度](#优化打包构建速度)
  - [优化代码调试](#优化代码调试)
- [生产环境性能优化](#生产环境性能优化)
  - [优化打包构建速度：](#优化打包构建速度-1)
  - [oneOf](#oneof)
  - [**缓存**](#缓存)
  - [多进程打包](#多进程打包)
  - [externals](#externals)
  - [dll](#dll)
  - [优化代码运行的性能：](#优化代码运行的性能)
  - [缓存(hash-chunkhash-contenthash)](#缓存hash-chunkhash-contenthash)
  - [tree shaking](#tree-shaking)
  - [code split](#code-split)
  - [懒加载/预加载](#懒加载预加载)
  - [pwa](#pwa)
  - [项目体积优化：](#项目体积优化)
  - [使用CDN引入](#使用cdn引入)
  - [开启gzip压缩](#开启gzip压缩)
  - [去除无用代码](#去除无用代码)
  - [按需引入](#按需引入)
- [webpack配置详解](#webpack配置详解)
- [不同环境不同配置](#不同环境不同配置)
##### 简介

> webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。 
>
> 在 webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。 
>
> 它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)
>
> 详情请访问：https://v4.webpack.docschina.org/

![image-20220703194410747](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220703194410747.png)

**webpack五个核心概念**

***1 Entry*** 

入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。 

***2 Output*** 

输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。 

***3 Loader*** 

Loader 让 webpack 能 够 去 处 理 那 些 非 JavaScript 文 件 (webpack 自 身 只 理 解 

JavaScript、JSON) 

***4 Plugins*** 

插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩， 

一直到重新定义环境中的变量等。 

***5 Mode*** 

模式(Mode)指示 webpack 使用相应模式的配置。 

![image-20220703194615590](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220703194615590.png)

##### 基本使用

###### 初始化

1、初始化 package.json 

​	    输入指令: 

​	    npm init

2、下载并安装 webpack 

​		输入指令: 

​		npm install webpack@4.41.6 webpack-cli@3.3.11 -g （这是为了执行包的终端命令,webpack-cli的作用应该是处理打包的文件）

​		npm install webpack@4.41.6 webpack-cli@3.3.11 -D (这不是必须的，但是如果没有，那么项目就会去全局寻找，如果项目发给别人运行，就无法保证webpack版本一致)

​		`建议以这种方式安装（推荐）：`

​		npm install webpack@4.41.6 webpack-cli@3.3.11 -D 

​		然后使用npx webpack运行

​		为什么要局部和全局两次安装呢？

​		答：

​			全局安装的目的是为了可以使用webpack命令，这个命令它会去全局去找，不会在局部中的.bin找，我们也可以不全局安装，使用npx webpack也行，

​			局部安装：局部安装是为了保存到package.json中，所以没有什么用，而全局安装是不会记录在项目package.json中的，

验证：当我局部和全局都安装webpack了,我在局部安装的webpack脚本加上一句

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301041437-165684898882132.png" alt="image-20210301041436910" style="zoom:67%;" />

全局安装的webpack脚本也加上一句

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301041603-165684898882133.png" alt="image-20210301041602966" style="zoom:67%;" />

执行命令webpack

![image-20210301041758167](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301041758-165684898882131.png)

###### 简单使用

1. 创建文件 

   ![image-20210226133412510](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210312180403-165684901491835.png)

2. 运行指令 

   开发环境指令：webpack ./src/index.js -o ./build/built.js --mode=development 

   ​	`功能：webpack 能够编译打包 js 和 json 文件，并且能将 es6 的模块化语法转换成` 

   ​	`浏览器能识别的语法。` 

   生产环境指令：webpack ./src/index.js -o ./build/built.js --mode=production 

   功能：在开发配置功能上多一个功能，压缩代码。 

   index.js代码：

   ```
   import data from './data.json';
   console.log(data);
   function add(x, y) {
     return x + y;
   }
   console.log(add(1, 2));
   ```

   ![image-20210226133313700](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210312180357-165684901491834.png)

3. 结论

   webpack 能够编译打包 js 和 json 文件。 

   能将 es6 的模块化语法转换成浏览器能识别的语法。 

   ![image-20210226133751605](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210312180411-165684901491836.png)

   能压缩代码。 

4. 问题

   不能编译打包 css、img 等文件。 

   不能将 js 的 es6 基本语法转化为 es5 以下语法。

   注：这时候webpack只能打包js/json，还不需要配置webpack配置，我们可以通过命令行配置出入口

##### 开发环境

> module中的rules是从上到下执行的，rules中的use数组是从下到上执行的，plugin需要导入依赖，loader则不需要

###### 基础配置

**创建基础配置文件** 

1. 创建文件 webpack.config.js (作用：`当你运行webpakc指令时，指示webpack干哪些活`)

2. 目录结构

   ![image-20211026010016371](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imglVoPnfz73Kx8Hb4.png)

3. 配置内容如下 

```
     const { resolve } = require('path');
     // node 内置核心模块，用来处理路径问题
     module.exports = {
       // 入口文件 
       entry: './src/index.js',
       // 输出配置 
       output: {
         // 输出文件名
         filename: 'built.js',
         // 输出文件路径配置,__dirname nodejs的变量，代表当前文件的目录绝对路径，这个配置的作用是会在当前目录(执行webpack命令的路径)下生成build文件夹，用于存放打包生成的资源
         path: resolve(__dirname, 'build'),
         //静态文件打包存放的目录。静态文件是指 img 的src ,link ，script 标签等所指向的文件。publicPath 是相对于path 所在的路径。是一个相对路径。
         //publicPath: './'
       },
       mode: 'development'
       //开发环境 
     };
```

 1. 运行指令: webpack 

    在当前目前下新建了build文件夹，并且生成了built.js

    ![image-20211026005949869](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgYAw1L3MNcWoGu5B.png)

    ![image-20211026010045313](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img8zb9vIRqWiD4JYT.png)

   **4. 结论: 此时功能与上节一致** 

###### publicPath

> 静态文件打包存放的目录。静态文件是指 img 的src ,link ，script 标签等所指向的文件。publicPath 是相对于path 所在的路径。是一个相对路径。
>
> 这句话可能不太好理解，接下来一步步分析

我们先来看下下面html文件

![image-20211107232124411](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgJ8rCOEn79Mg2e5b.png)

再来看下webpack的一些配置

```
     const { resolve } = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: './src/index.js',
       output: {
         filename: 'built.js',
         path: resolve(__dirname, 'build'),
       },
       module: {
         rules: [
           {
             test: /\.html$/,
             // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
             loader: 'html-loader'
           },
           {
             // 问题：默认处理不了html中img图片
             // 处理图片资源
             test: /\.(jpg|png|gif)$/,
             // 使用一个loader
             // 下载 url-loader file-loader
             // 当图片体积大于 8192 字节时，默认会使用 file- loader
             // （虽然代码没有配置 file - loader，但还是需要使用 npm i file - loader - D 安装），
             // 并且会将配置的选项传递给 file - loader（也就是说上面可以配置 name、outputPath 等选项）
             loader: 'url-loader',
             options: {
               // 图片大小小于8kb，就会被base64处理
               // 优点: 减少请求数量（减轻服务器压力）
               // 缺点：图片体积会更大（文件请求速度更慢）
               limit: 8 * 1024,
               // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
               // 解析时会出问题：[object Module]
               // 解决：关闭url-loader的es6模块化，使用commonjs解析
               esModule: false,
               // 给图片进行重命名
               // [hash:10]取图片的hash的前10位
               // [ext]取文件原来扩展名
               name: '[hash:10].[ext]',
               outputPath: 'img'
             }
           },
           {
             test: /\.less$/,
             // 要使用多个loader处理用use
             use: ['style-loader', 'css-loader', 'less-loader']
           }

         ]
       },
       plugins: [
         new HtmlWebpackPlugin({
           template: './src/index.html'
         })
       ],
       mode: 'development'
     };
```

然后我们看下打包后的html

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgvBJ8tCykbOom4uF.png" alt="image-20211107232408194" style="zoom:80%;" />

`我们可以发现webpack并不在乎我们编写代码时的资源路径是多少，这个路径只是便于webpack找到对应的资源文件，`

`然后把资源文件复制到配置好的地方，如果我们配置了outputPath则会放置与outputPath，否则直接放在根目录，`

`然后我们引入资源文件的路径也会被改写，从../src/img/angular.jpg变成了img/9a4a32dc0c.jpg`

那么output中的publicPath有什么作用呢？

我们加上publicPath看下

```
     output: {
         filename: 'built.js',
         path: resolve(__dirname, 'build'),
         publicPath: '/'
       },
```

再次打包看下

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgAkU8peSInO1xiYF.png" alt="image-20211107233005925" style="zoom: 80%;" />

原来publicPath就是会在资源路径前缀加上去，/代表了服务器根目录，所以我们必须在服务器把build部署为根路径，否则会报错，

但是可以省略，或者写成'./'就好了，不过vue-cli的生产模式应该默认就是'/'，我们如果直接以live serve这种插件运行则会报错，因为这个插件的根目录是

以编译器打开的整个目录为服务器根目录的，所以这时我们可以通过把publicPath设为'./'解决该问题

详情可以参考：https://cli.vuejs.org/zh/config/#publicpath

##### 打包css/less资源

1. 创建文件 

2. 下载安装 loader 包 

   打包css: npm i css-loader style-loader -D

   打包less: npm i css-loader style-loader less-loader@5.0.0 less -D 

3. 修改配置文件 

```
     /*
       webpack.config.js  webpack的配置文件
         作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

         所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
     */

     // resolve用来拼接绝对路径的方法
     const { resolve } = require('path');
     module.exports = {
       // webpack配置
       // 入口起点
       entry: './src/index.js',
       // 输出
       output: {
         // 输出文件名
         filename: 'built.js',
         // 输出路径
         // __dirname nodejs的变量，代表当前文件的目录绝对路径
         path: resolve(__dirname, 'build')
       },
       // loader的配置
       module: {
         rules: [
           // 详细loader配置
           // 不同文件必须配置不同loader处理
           {
             // 匹配哪些文件
             test: /\.css$/,
             // 使用哪些loader进行处理
             use: [
               // use数组中loader执行顺序：从右到左，从下到上 依次执行
               // 创建style标签，将js中的样式资源插入进行，添加到head中生效
               'style-loader',
               // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
               'css-loader'
             ]
           },
           {
             test: /\.less$/,
             use: [
               'style-loader',
               'css-loader',
               // 将less文件编译成css文件
               // 需要下载 less-loader和less
               'less-loader'
             ]
           }
         ]
       },
       // plugins的配置
       plugins: [
         // 详细plugins的配置
       ],
       // 模式
       mode: 'development', // 开发模式
       // mode: 'production'
     }
```

4. 运行指令: webpack 

##### 打包 HTML 资源 

1. 创建文件 

2. 下载安装 plugin 包 

   ```
   npm install --save-dev html-webpack-plugin
   ```

3. 修改配置文件 

```
     /*
       loader: 1. 下载   2. 使用（配置loader）
       plugins: 1. 下载  2. 引入  3. 使用
     */
     const { resolve } = require('path');
     //打包html文件
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     module.exports = {
       entry: './src/index.js',
       output: {
         filename: 'built.js',
         path: resolve(__dirname, 'build2')
       },
       module: {
         rules: [
           // loader的配置
         ]
       },
       plugins: [
         // plugins的配置
         // html-webpack-plugin
         // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
         // 需求：需要有结构的HTML文件
         new HtmlWebpackPlugin({
           // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）,默认复制到output目录
           template: './src/index.html'
         })
       ],
       mode: 'development'
     };
```

4.运行指令: webpack 

#####  打包图片资源 

1. 创建文件 

2. 下载安装 loader 包 

   ```
   npm install --save-dev html-loader@0.5.5 url-loader file-loader 
   ```

3. 修改配置文件 

```
     const { resolve } = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: './src/index.js',
       output: {
         filename: 'built.js',
         path: resolve(__dirname, 'build')
       },
       module: {
         rules: [
         	//将HTML导出为字符串。当编译器需要时，HTML被最小化。
           {
             test: /\.html$/,
             // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
             loader: 'html-loader'
           },
           {
             // 问题：默认处理不了html中img图片
             // 处理图片资源
             test: /\.(jpg|png|gif)$/,
             // 使用一个loader
             // 下载 url-loader file-loader
             // 当图片体积大于 8192 字节时，默认会使用 file- loader
             // （虽然代码没有配置 file - loader，但还是需要使用 npm i file - loader - D 安装），
             // 并且会将配置的选项传递给 file - loader（也就是说上面可以配置 name、outputPath 等选项）
             loader: 'url-loader',
             options: {
               // 图片大小小于8kb，就会被base64处理
               // 优点: 减少请求数量（减轻服务器压力）
               // 缺点：图片体积会更大（文件请求速度更慢）
               limit: 8 * 1024,
               // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
               // 解析时会出问题：[object Module]
               // 解决：关闭url-loader的es6模块化，使用commonjs解析
               esModule: false,
               // 给图片进行重命名
               // [hash:10]取图片的hash的前10位
               // [ext]取文件原来扩展名
               name: '[hash:10].[ext]',
                // 输出文件夹，相对于build文件下
               outputPath: 'imgs'
             }
           },
           {
             test: /\.less$/,
             // 要使用多个loader处理用use
             use: ['style-loader', 'css-loader', 'less-loader']
           }

         ]
       },
       plugins: [
         new HtmlWebpackPlugin({
           template: './src/index.html'
         })
       ],
       mode: 'development'
     };
```

4. 运行指令: webpack

注：这样能处理html和css中的图片

##### 打包Vue组件

1、初始化项目

![image-20211114153529618](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgsmRUvexaQ9DpyNj.png)

2、安装所需依赖

```
	npm i vue-loader vue-template-compiler -D
```

3、在webpack.config.js配置文件中，添加vue-loader的配置项如下：

```
     const path = require('path')
     const HtmlWebpackPlugin = require('html-webpack-plugin')
     // 注意这里引入路径
     const VueLoaderPlugin = require('vue-loader/lib/plugin');

     module.exports = {
       //编译模式
       mode: 'development',
       entry: path.join(__dirname, './main.js'),
       output: {
         path: path.join(__dirname, "./dist"),//输出文件的存放路径
         filename: 'bundle.js'//输出文件的名称
       },
       plugins: [
         new HtmlWebpackPlugin({
           template: './src/index.html',
           filename: 'index.html'
         }),
         // 虽然我也不知道为什么需要配置这行，但就是要配置
         new VueLoaderPlugin()
       ],

       //所有第三方文件模块的匹配规则
       module: {
         rules: [
         	 { test: /\.vue$/, use: 'vue-loader' }
           { test: /\.css$/, use: ['style-loader', 'css-loader'] },
           { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
         ]
       }
     }
```

运行效果：

![image-20211114155418398](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgoz6TLmUlbcNhuZV.png)

##### 打包其他资源 

1. 创建文件

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220422-165685003482948.png" alt="image-20210226142039333" style="zoom:80%;" />

2. 修改配置文件 

```
     const { resolve } = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: './src/index.js',
       output: {
         filename: 'built.js',
         path: resolve(__dirname, 'build')
       },
       module: {
         rules: [
          //!处理其他资源
      	 {
        		exclude: /\.(js|css|less|html|jpg|png|gif|vue)/,
       		 loader: 'file-loader',
       		 options: {
               // 当加载的图片小于limit时，会将图片编译成base64字符串形式
               //当加载的土拍你大于limit时，需要使用file-loader模块进行加载
               // [hash:10]取图片的hash的前10位
               //[name]是指原来的名字
               // [ext]取文件原来扩展名
               name: '[name].[hash:8].[ext]',
               // 输出文件夹，相对于build文件下
               outputPath: 'media'
             }
     	 }
           {
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
           },
           // 打包其他资源(除了html/js/css资源以外的资源)
         ]
       },
       plugins: [
         new HtmlWebpackPlugin({
           template: './src/index.html'
         })
       ],
       mode: 'development'
     };
```

4. 运行指令: webpack 

##### 配置devserver 

1. 创建文件

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220426-165685003482946.png" alt="image-20210226142228647" style="zoom:80%;" />

安装 npm i webpack-dev-server -D

2. 修改配置文件

```
     const { resolve } = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: './src/js/index.js',
       output: {
         filename: 'js/built.js',
         path: resolve(__dirname, 'build')
       },
       module: {
         rules: [
           // loader的配置
           {
             // 处理less资源
             test: /\.less$/,
             use: ['style-loader', 'css-loader', 'less-loader']
           },
           {
             // 处理css资源
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
           },
           {
             // 处理图片资源
             test: /\.(jpg|png|gif)$/,
             loader: 'url-loader',
             options: {
               limit: 8 * 1024,
               name: '[hash:10].[ext]',
               // 关闭es6模块化
               esModule: false,
               outputPath: 'imgs'
             }
           },
           {
             // 处理html中img资源
             test: /\.html$/,
             loader: 'html-loader'
           },
           {
             // 处理其他资源
             exclude: /\.(html|js|css|less|jpg|png|gif)/,
             loader: 'file-loader',
             options: {
               name: '[hash:10].[ext]',
               outputPath: 'media'
             }
           }
         ]
       },
       plugins: [
         // plugins的配置
         new HtmlWebpackPlugin({
           template: './src/index.html'
         })
       ],
       /*
       开发环境配置：能让代码运行
         运行项目指令：
           webpack 会将打包结果输出出去
           npx webpack-dev-server 只会在内存中编译打包，没有输出
       */
       mode: 'development',
       devServer: {
        // 这里最好和项目构建后路径一样，把打包生成的目录设为根目录，只不过是模拟生成的而已
         // 这里是根目录，静态资源都是相对于这个路径的
         contentBase: resolve(__dirname, 'build'),
         // 启动它gzip压缩
         compress: true,
         // 端口号
         port: 3000,
         // 自动打开浏览器
         open: true
       }
     };
```

4. 运行指令: npx webpack-dev-server 

webpack-dev-server还有其他很多妙用：比如代理处理跨域、热替换等等

1、代理处理跨域

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210326090205-165685003482947.png" alt="image-20210326090205349" style="zoom: 67%;" />

```
     //解决跨域问题
       devServer: {
         proxy: {  //配置跨域
           '/api': {
             target: 'http://121.121.67.254:8185/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
             changeOrigin: true,  //允许跨域
             pathRewrite: {
               /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
                 实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
                */
               '^/api': ''
             }
           },
         }
       },
```

如果是vue项目，我们应该写在vue.config.js中

```
     module.exports = {
       //解决跨域问题
       devServer: {
         proxy: {  //配置跨域
           '/api': {
             target: 'http://121.121.67.254:8185/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
             changeOrigin: true,  //允许跨域
             pathRewrite: {
               /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
                 实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
                */
               //这里是取出api
               '^/api': ''
             }
           },
         }
       },
     }
```

`注意：如果使用代理，那么axios请求就不需要写域名和ip了，否则还会报错`

![image-20210326084618241](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210326084618-165685003482945.png)

`需要把域名端口去掉，或者加上和网页运行的域名端口，而不是服务器的域名和端口，服务器的端口和域名，代理会进行处理转发`

热替换下面介绍

##### 开发环境配置

1.创建文件

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220429-165685003482949.png" alt="image-20210226142313243" style="zoom:80%;" />

2. 修改配置文件 

   webpack.config.js

```
     const { resolve } = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     module.exports = {
       entry: './src/js/index.js',
       output: {
         filename: 'js/built.js',
         path: resolve(__dirname, 'build')
       },
       module: {
         rules: [
           // loader的配置
           {
             // 处理less资源
             test: /\.less$/,
             use: ['style-loader', 'css-loader', 'less-loader']
           },
           {
             // 处理css资源
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
           },
           {
             // 处理图片资源
             test: /\.(jpg|png|gif)$/,
             loader: 'url-loader',
             options: {
               limit: 8 * 1024,
               name: '[hash:10].[ext]',
               // 关闭es6模块化
               esModule: false,
               outputPath: 'imgs'
             }
           },
           {
             // 处理html中img资源
             test: /\.html$/,
             loader: 'html-loader'
           },
           {
             // 处理其他资源
             exclude: /\.(html|js|css|less|jpg|png|gif)/,
             loader: 'file-loader',
             options: {
               name: '[hash:10].[ext]',
               outputPath: 'media'
             }
           }
         ]
       },
       plugins: [
         // plugins的配置
         new HtmlWebpackPlugin({
           template: './src/index.html'
         })
       ],
       /*
       开发环境配置：能让代码运行
         运行项目指令：
           webpack 会将打包结果输出出去
           npx webpack-dev-server 只会在内存中编译打包，没有输出
       */
       mode: 'development',
       devServer: {
         contentBase: resolve(__dirname, 'build'),
         // 启动它gzip压缩
         compress: true,
         // 端口号
         port: 3000,
         // 自动打开浏览器
         open: true
       }
     };
```

package.json

```
     {
       "name": "development",
       "version": "1.0.0",
       "description": "开发环境搭建",
       "main": "index.js",
       "scripts": {
         "build": "webpack",
         "serve": "webpack-dev-server"
       },
       "author": "",
       "license": "ISC",
       "devDependencies": {
         "css-loader": "^5.1.1",
         "file-loader": "^5.1.0",
         "html-loader": "^0.5.5",
         "html-webpack-plugin": "^3.2.0",
         "less": "^4.1.1",
         "less-loader": "^5.0.0",
         "style-loader": "^2.0.0",
         "url-loader": "^3.0.0",
         "webpack": "^4.41.6",
         "webpack-cli": "^3.3.11",
         "webpack-dev-server": "^3.10.3"
       }
     }
```

运行指令: npx webpack-dev-server  打包使用webpack

##### 生产环境

###### 提取css/less成单独文件

1. 下载安装包 

   ![image-20210302141928999](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302141929-165685142800351.png)

  2.下载插件 

​		npm install --save-dev mini-css-extract-plugin 

3. 修改配置文件 

```
     const { resolve } = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     const MiniCssExtractPlugin = require('mini-css-extract-plugin');
     module.exports = {
       entry: './main.js',
       output: {
         filename: 'js/built.js',
         path: resolve(__dirname, 'build')
       },
       module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               // 创建style标签，将样式放入
               // 'style-loader', 
               // 这个loader取代style-loader。作用：提取js中的css成单独文件
               MiniCssExtractPlugin.loader,
               // 将css文件整合到js文件中
               'css-loader'
             ]
           },
           {
             test: /\.less$/,
             use: [
               // 创建style标签，将样式放入
               // 'style-loader', 
               // 这个loader取代style-loader。作用：提取js中的css成单独文件
               MiniCssExtractPlugin.loader,
               // 将css文件整合到js文件中
               'css-loader',
               'less-loader'
             ]
           }
         ]
       },
       plugins: [
         new HtmlWebpackPlugin({
           template: './src/index.html'
         }),
         new MiniCssExtractPlugin({
           // 对输出的css文件进行重命名
           filename: 'css/built.css'
         })
       ],
       mode: 'development'
     };
```

4 .运行指令: webpack

###### css兼容性处理

1.创建文件 

![image-20210302144902972](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302144903-165685142800350.png)

2.下载 loader 

npm install --save-dev postcss-loader postcss-preset-env 

3.修改配置文件 

```
     const { resolve } = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     const MiniCssExtractPlugin = require('mini-css-extract-plugin');

     module.exports = {
       entry: './main.js',
       output: {
         filename: 'js/built.js',
         path: resolve(__dirname, 'build')
       },
       module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               // 创建style标签，将样式放入
               // 'style-loader', 
               // 这个loader取代style-loader。作用：提取js中的css成单独文件
               MiniCssExtractPlugin.loader,
               // 将css文件整合到js文件中
               'css-loader',
               //css兼容性处理
               {
                 loader: 'postcss-loader',
                 options: {
                   ident: 'postcss',
                   plugins: () => [
                     // postcss 的插件
                     require('postcss-preset-env')()]
                 }
               }
             ]
           },
           {
             test: /\.less$/,
             use: [
               // 创建style标签，将样式放入
               // 'style-loader', 
               // 这个loader取代style-loader。作用：提取js中的css成单独文件
               MiniCssExtractPlugin.loader,
               // 将css文件整合到js文件中
               'css-loader',
               {
                 loader: 'postcss-loader',
                 options: {
                 ident: 'postcss', 
                 plugins: () => [
                     // postcss 的插件
                     require('postcss-preset-env')()]
                 }
               },
               'less-loader'
             ]
           }
         ]
       },
       plugins: [
         new HtmlWebpackPlugin({
           template: './src/index.html'
         }),
         new MiniCssExtractPlugin({
           // 对输出的css文件进行重命名
           filename: 'css/built.css'
         })
       ],
       mode: 'development'
     };
```

4. 修改 package.json

   ```
   // 做兼容性处理需要在package.json定义该字段，以指示postcss插件如何做兼容性处理
   "browserslist": { 
   	"development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ],
   	"production": [ ">0.2%", "not dead", "not op_mini all" ]
     }
   ```

   或者安装autoprefixer（自动添加前缀插件）    npm i autoprefixer

   在根目录新建 `postcss.config.js` ,并添加如下代码之后，写的css会自动根据Can i use里的数据添加不同前缀了。

   ```
   module.exports = {
        plugins: {
         autoprefixer({
               browsers: ["last 5 version"]
         }),
        "postcss-px-to-viewport": {
             viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度.
             viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度.(也可以不配置)
             unitPrecision: 5, // 保留几位小数，指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
             viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
             selectorBlackList: ['tab-bar', 'tab-bar-item','shopping-cart-bottom-bar'], // 指定不需要转换的类
             minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位.
             mediaQuery: false // 允许在媒体查询中转换`px`
             },
        }
   }
   ```

   如果是vue-cli4，则需要在根目录下配置.browserslistrc，

   ```
   [production staging]
   > 1%
   ie 10
    
   [development]
   last 1 chrome version
   last 1 firefox version
   ```

   postcss.config.js

   ```
   module.exports = {
     plugins: {
       'autoprefixer': {},
     }
   }
   ```

   

5. 运行指令: webpack

###### 压缩css

1.创建文件

​	![image-20210302152140533](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302152141-165685142800353.png)

2. 下载安装包 

   ```
   npm install --save-dev optimize-css-assets-webpack-plugin 
   ```

3. 修改配置文件 

   ```
   const { resolve } = require('path');
   //处理html模板
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   //把css从js抽离成单独文件
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   // 压缩 css 
   const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
   module.exports = {
     entry: './main.js',
     output: {
       filename: 'js/built.js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             // 创建style标签，将样式放入
             // 'style-loader', 
             // 这个loader取代style-loader。作用：提取js中的css成单独文件
             MiniCssExtractPlugin.loader,
             // 将css文件整合到js文件中
             'css-loader',
             {
               loader: 'postcss-loader',
               options: {
                 ident: 'postcss',
                 plugins: () => [
                   // postcss 的插件
                   require('postcss-preset-env')()]
               }
             }
           ]
         },
         {
           test: /\.less$/,
           use: [
             // 创建style标签，将样式放入
             // 'style-loader', 
             // 这个loader取代style-loader。作用：提取js中的css成单独文件
             MiniCssExtractPlugin.loader,
             // 将css文件整合到js文件中
             'css-loader',
             {
               loader: 'postcss-loader',
               options: {
                 ident: 'postcss',
                 plugins: () => [
                   // postcss 的插件
                   require('postcss-preset-env')()]
               }
             },
             'less-loader'
           ]
         }
       ]
     },
     plugins: [
       //处理html模板
       new HtmlWebpackPlugin({
         template: './src/index.html'
       }),
       //把css从js抽离成单独文件
       new MiniCssExtractPlugin({
         // 对输出的css文件进行重命名
         filename: 'css/built.css'
       }),
       // 压缩 css 
       new OptimizeCssAssetsWebpackPlugin()
     ],
     mode: 'development'
   };
   ```

4. 运行指令npx webpack

###### js语法检查

1.创建文件

![image-20210302154538295](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302154538-165685142800352.png)

2. 下载安装包 

```
	npm install --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import 
```



3. 修改配置文件

   ```
   const { resolve } = require('path');
   //处理html模板
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   //把css从js抽离成单独文件
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   // 压缩 css 
   const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
   module.exports = {
     entry: './main.js',
     output: {
       filename: 'js/built.js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             // 创建style标签，将样式放入
             // 'style-loader', 
             // 这个loader取代style-loader。作用：提取js中的css成单独文件
             MiniCssExtractPlugin.loader,
             // 将css文件整合到js文件中
             'css-loader',
             {
               loader: 'postcss-loader',
               options: {
                 ident: 'postcss',
                 plugins: () => [
                   // postcss 的插件
                   require('postcss-preset-env')()]
               }
             }
           ]
         },
         {
           test: /\.less$/,
           use: [
             // 创建style标签，将样式放入
             // 'style-loader', 
             // 这个loader取代style-loader。作用：提取js中的css成单独文件
             MiniCssExtractPlugin.loader,
             // 将css文件整合到js文件中
             'css-loader',
             {
               loader: 'postcss-loader',
               options: {
                 ident: 'postcss',
                 plugins: () => [
                   // postcss 的插件
                   require('postcss-preset-env')()]
               }
             },
             'less-loader'
           ]
         },
         /*语法检查： eslint-loader eslint 注意：只检查自己写的源代码，第三方的库是不用检查的 
         npm install --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import
         设置检查规则： package.json 中 eslintConfig 中设置~
          "eslintConfig": { "extends": "airbnb-base" } airbnb --> eslint-config-airbnb-base eslint-plugin-import eslint */
         {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'eslint-loader',
           options: {
             // 自动修复 eslint 的错误 
             fix: true
           }
         }
       ]
     },
     plugins: [
       //处理html模板
       new HtmlWebpackPlugin({
         template: './src/index.html'
       }),
       //把css从js抽离成单独文件
       new MiniCssExtractPlugin({
         // 对输出的css文件进行重命名
         filename: 'css/built.css'
       }),
       // 压缩 css 
       new OptimizeCssAssetsWebpackPlugin()
     ],
     mode: 'development'
   };
   ```

4. 配置 package.json 

   ```
   // 使用airbnb-base的语法规则，
   /* 
   	eslint不认识window、navigator全局变量
   	解决：需要修改package.json中的eslintConfig配置
   		"env": {
   			"browser": true
   		}
   */
   "eslintConfig": { "extends": "airbnb-base", "env": { "browser": true } }
   ```

   或者使用.eslintrc文件（支持JSON和YAML两种语法）

   **.eslintrc 文件示例：**

   ```
   {
     "env": {
       "browser": true,
     },
     "globals": {
       "angular": true,
     },
     "rules": {
       "camelcase": 2,
       "curly": 2,
       "brace-style": [2, "1tbs"],
       "quotes": [2, "single"],
       "semi": [2, "always"],
       "space-in-brackets": [2, "never"],
       "space-infix-ops": 2,
     }
   }
   ```

   eslintrc 放在项目根目录，则会应用到整个项目；如果子目录中也包含 .eslintrc 文件，则子目录会忽略根目录的配置文件，应用该目录中的配置文件。这样可以方便地对不同环境的代码应用不同的规则。

   `详情请访问：`https://www.jianshu.com/p/ad6784d028aa

   **在js中忽略某部分js代码语法检查：**

   1. 关闭段落校验

      ```
      /* eslint-disable */
      some code
      some code
      /* eslint-enable */
      ```

   2. 关闭当前行校

      ```
      some code // eslint-disable-line
      ```

   3. 关闭下一行校验

      ```
      // eslint-disable-next-line
      some code
      ```

5. 运行指令: npx webpack

###### js兼容性处理

1.创建文件

![image-20210302160841263](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302160842-165685142800354.png)

2. 下载安装包 

```
	npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/polyfill core-js 
```

3. 修改配置文件

   ```
   const { resolve } = require('path');
   //处理html模板
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   //把css从js抽离成单独文件
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   // 压缩 css 
   const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
   module.exports = {
     entry: './main.js',
     output: {
       filename: 'js/built.js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             // 创建style标签，将样式放入
             // 'style-loader', 
             // 这个loader取代style-loader。作用：提取js中的css成单独文件
             MiniCssExtractPlugin.loader,
             // 将css文件整合到js文件中
             'css-loader',
             {
               loader: 'postcss-loader',
               options: {
                 ident: 'postcss',
                 plugins: () => [
                   // postcss 的插件
                   require('postcss-preset-env')()]
               }
             }
           ]
         },
         {
           test: /\.less$/,
           use: [
             // 创建style标签，将样式放入
             // 'style-loader', 
             // 这个loader取代style-loader。作用：提取js中的css成单独文件
             MiniCssExtractPlugin.loader,
             // 将css文件整合到js文件中
             'css-loader',
             {
               loader: 'postcss-loader',
               options: {
                 ident: 'postcss',
                 plugins: () => [
                   // postcss 的插件
                   require('postcss-preset-env')()]
               }
             },
             'less-loader'
           ]
         },
         /*语法检查： eslint-loader eslint 注意：只检查自己写的源代码，第三方的库是不用检查的 
         npm install --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import
         设置检查规则： package.json 中 eslintConfig 中设置~
          "eslintConfig": { "extends": "airbnb-base" } airbnb --> eslint-config-airbnb-base eslint-plugin-import eslint */
         {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'eslint-loader',
           // 优先执行 
           enforce: 'pre',
           options: {
             // 自动修复 eslint 的错误 
             fix: true
           }
         },
         //js兼容性处理
         {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           options: {
             // npm install --save- dev babel - loader @babel/core @babel/preset - env @babel/polyfill core-js
              // npm install --save- dev babel - loader @babel/core @babel/preset - env @babel/polyfill core-js
             /*  
               js兼容性处理：babel-loader @label/core @babel/preset-env
               1. 基本js兼容性处理 --> @babel/preset-env
                   问题：只能转换基本语法，如promise不能转换
               2. 全部js兼容性处理 --> @babel/polyfill（不推荐）
                   问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
               3. 需要做兼容性处理的就做：按需加载  --> core-js
             */
             // 预设：指示 babel 做怎么样的兼容性处理 
             presets: [['@babel/preset-env', {
               // 按需加载 
               useBuiltIns: 'usage',
               // 指定 core-js 版本 
               corejs: { version: 3 },
               // 指定兼容性做到哪个版本浏览器 
               targets: { chrome: '60', firefox: '60', ie: '9', safari: '10', edge: '17' }
             }]]
           }
         }
       ]
     },
     plugins: [
       //处理html模板
       new HtmlWebpackPlugin({
         template: './src/index.html'
       }),
       //把css从js抽离成单独文件
       new MiniCssExtractPlugin({
         // 对输出的css文件进行重命名
         filename: 'css/built.css'
       }),
       // 压缩 css 
       new OptimizeCssAssetsWebpackPlugin()
     ],
     mode: 'development'
   };
   ```

4、运行

​	npx webpack

###### js压缩

1.创建文件 

2、修改配置文件

```
     // 生产环境下会自动压缩 js 代码 
     mode: 'production'
```

运行指令: npx webpack

###### html压缩

1.创建文件

2、修改配置文件 

```
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩 html 代码 
      minify: {
        // 移除空格 
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    })
  ],
  mode: 'production'
};
```

###### 生产环境配置

配置

webpack.config.js

```
const { resolve } = require('path');
//处理html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
//把css从js抽离成单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩 css 
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// 定义nodejs环境变量：决定使用browserslist的哪个环境,这个browserslist是处理js兼容性使用的
process.env.NODE_ENV = 'production';
//复用Loader
const commonCssLoader = [
  // 创建style标签，将样式放入
  // 'style-loader', 
  // 这个loader取代style-loader。作用：提取js中的css成单独文件
  MiniCssExtractPlugin.loader,
  // 将css文件整合到js文件中
  'css-loader',
  //!css兼容性处理
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        // postcss 的插件
        require('postcss-preset-env')()]
    }
  }
]
module.exports = {
  entry: ['./main.js', './src/index.html'],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      //!css处理
      {
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      //!less处理
      {
        test: /\.less$/,
        use: [...commonCssLoader, 'less-loader']
      },
      //!js语法检查
      /*语法检查： eslint-loader eslint 注意：只检查自己写的源代码，第三方的库是不用检查的 
      npm install --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import
      设置检查规则： package.json 中 eslintConfig 中设置~
       "eslintConfig": { "extends": "airbnb-base" } airbnb --> eslint-config-airbnb-base eslint-plugin-import eslint */
      /*
        正常来讲，一个文件只能被一个loader处理。
        当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
        比如js则要先执行eslint 再执行babel, 可以使用enforce： 'pre'指示该loader优先执行 
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        // 优先执行 
        enforce: 'pre',
        options: {
          // 自动修复 eslint 的错误 
          fix: true
        }
      },
      //!js兼容性处理
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // npm install --save- dev babel - loader @babel/core @babel/preset - env @babel/polyfill core-js
          /*  
            js兼容性处理：babel-loader @label/core @babel/preset-env
            1. 基本js兼容性处理 --> @babel/preset-env
                问题：只能转换基本语法，如promise不能转换
            2. 全部js兼容性处理 --> @babel/polyfill（不推荐）
                问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
            3. 需要做兼容性处理的就做：按需加载  --> core-js
          */
          // 预设：指示 babel 做怎么样的兼容性处理 
          presets: [['@babel/preset-env', {
            // 按需加载 
            useBuiltIns: 'usage',
            // 指定 core-js 版本 
            corejs: { version: 3 },
            // 指定兼容性做到哪个版本浏览器 
            targets: { chrome: '60', firefox: '60', ie: '9', safari: '10', edge: '17' }
          }]]
        }
      },
      //将HTML导出为字符串。当编译器需要时，HTML被最小化。
      {
        test: /\.html$/,
        // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-loader'
      },
      {
        // 问题：默认处理不了html中img图片
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        // 使用一个loader
        // 下载 url-loader file-loader
        // 当图片体积大于 8192 字节时，默认会使用 file- loader
        // （虽然代码没有配置 file - loader，但还是需要使用 npm i file - loader - D 安装），
        // 并且会将配置的选项传递给 file - loader（也就是说上面可以配置 name、outputPath 等选项）
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb，就会被base64处理
          // 优点: 减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片的hash的前10位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]',
          // 输出文件夹，相对于build文件下
          outputPath: 'imgs'
        }
      },
      //!处理其他资源
      {
        exclude: /\.(js|css|less|html|jpg|png|gif|vue)/,
        loader: 'file-loader',
        options: {
          // 当加载的图片小于limit时，会将图片编译成base64字符串形式
          //当加载的土拍你大于limit时，需要使用file-loader模块进行加载
          // [hash:10]取图片的hash的前10位
          //[name]是指原来的名字
          // [ext]取文件原来扩展名
          name: '[name].[hash:8].[ext]',
          // 输出文件夹，相对于build文件下
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    //!处理html模板
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩 html 代码 
      minify: {
        // 移除空格 
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    }),
    //!把css从js抽离成单独文件
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: 'css/built.css'
    }),
    //! 压缩 css 
    new OptimizeCssAssetsWebpackPlugin()
  ],
  // 生产环境下会自动压缩 js 代码
  mode: 'production'
};

```

package.json

```
{
  "name": "production",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.13.8",
    "@babel/polyfill": "^7.12.1",
    "@babel/preset-env": "^7.13.9",
    "babel-loader": "^8.2.2",
    "core-js": "^3.9.1",
    "css-loader": "^5.1.1",
    "eslint": "^7.21.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-import": "^2.22.1",
    "file-loader": "^6.2.0",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "less": "^4.1.1",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.9.0",
    "optimize-css-assets-webpack-plugin": "^5.0.4",
    "postcss-loader": "^3.0.0",
    "postcss-preset-env": "^6.7.0",
    "style-loader": "^2.0.0",
    "url-loader": "^4.1.1",
    "webpack": "^4.41.6",
    "webpack-cli": "^3.3.11"
  },
  "eslintConfig": {
    "extends": "airbnb-base",
    "env": {
      "browser": true
    }
  }
}
```

.browerslistrc

```
[production staging]
> 1%
ie 10
 
[development]
last 1 chrome version
last 1 firefox version
```

###### 性能优化

> webpack性能优化可分为开发环境性能优化和生成环境优化，两个环境优化主要从以下方面入手：
>
> 开发环境优化：
>
> ​	1、优化打包构建速度
>
> ​	2、优化代码调试
>
> 生产环境性能优化：
>
> ​	1、优化打包构建速度
>
> ​	2、优化代码运行的性能

##### 开发环境性能优化

> 1、HMR
>
> 2、source-map

######  优化打包构建速度

>   HMR：hot module replacement 热模块替换/模块热替换
>
>   作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块极大提升构建速度

配置：

```
 //入口
  entry: ['./main.js', './src/index.html'],
 
 
 devServer: {
    // 这需要和项目构建后路径一样，把打包生成的目录设为根目录，只不过是模拟生成的而已
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true,
    //! 开启 HMR 功能 
    // 当修改了 webpack 配置，新配置要想生效，必须重新开启webpack 服务 
    /*
      HMR: hot module replacement 热模块替换 / 模块热替换
        作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块） 
          极大提升构建速度
          
          样式文件：可以使用HMR功能：因为style-loader内部实现了~
          js文件：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码
            注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。
          html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）
            解决：修改entry入口，将html文件引入entry: ['./main.js', './src/index.html'],
    */
    hot: true
  },
```

如果js需要处理的话（暂时还没完全理解）：

```
     import res from './src/js/index'
     import print from "./src/js/print"
     import print2 from "./src/js/print2"
     import './src/css/index.css';
     import './src/css/index.less';
     import './src/others/iconfont.css'
     document.write('hello world')
     console.log(res);
     console.log('21323');
     //为了可以自动隔离js更新，我们使用
     if (module.hot) {
       // 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效a
       const files = require.context('./src/js', true, /\.js$/);
       console.log(files);
       files.keys().map(key => {
         console.log('./src/js'+key.replace('.',''));
         module.hot.accept('./src/js' + key.replace('.', ''), function () {
           // 方法会监听 print.js 文件的变化，一旦发生变化，其他模块不会重新打包构建。
           // 会执行后面的回调函数
           // console.log(key);
           // key.replace('./js', '')()
           // console.log(key.replace('./js', ''));
           console.log(key);
         });
       })
     }
```

###### 优化代码调试

>  source-map：一种提供源代码到构建后代码映射技术（如果代码出错了，通过映射可以追踪源代码错误）

配置:

```
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理css资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 关闭es6模块化
          esModule: false,
          outputPath: 'imgs'
        }
      },
      {
        // 处理html中img资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    hot: true
  },
  //source-map配置
  devtool: 'eval-source-map'
};

```

source-map详细介绍：

```
/*
  source-map: 一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

    source-map：外部
      错误代码准确信息 和 源代码的错误位置
    inline-source-map：内联
      只生成一个内联source-map
      错误代码准确信息 和 源代码的错误位置
    hidden-source-map：外部
      错误代码错误原因，但是没有错误位置
      不能追踪源代码错误，只能提示到构建后代码的错误位置
    eval-source-map：内联
      每一个文件都生成对应的source-map，都在eval
      错误代码准确信息 和 源代码的错误位置
    nosources-source-map：外部
      错误代码准确信息, 但是没有任何源代码信息
    cheap-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      只能精确的行
    cheap-module-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      module会将loader的source map加入

    内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快

    开发环境：速度快，调试更友好
      速度快(eval>inline>cheap>...)
        eval-cheap-souce-map
        eval-source-map
      调试更友好  
        souce-map
        cheap-module-souce-map
        cheap-souce-map
	 // 建议使用优先级
      --> eval-source-map  / eval-cheap-module-source-map

    生产环境：源代码要不要隐藏? 调试要不要更友好
      内联会让代码体积变大，所以在生产环境不用内联
      // 隐藏源代码模式
      nosources-source-map 全部隐藏
      hidden-source-map 只隐藏源代码，会提示构建后代码错误信息
	 // 不考虑隐藏源代码建议使用优先级
      --> source-map / cheap-module-souce-map
*/
```

##### 生产环境性能优化

###### 优化打包构建速度：

###### oneOf

> module的Oneof配置提高loader匹配效率，使匹配到一个loader后，后面就不会再继续匹配了

```
     const { resolve } = require('path');
     const MiniCssExtractPlugin = require('mini-css-extract-plugin');
     const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
     const HtmlWebpackPlugin = require('html-webpack-plugin');

     // 定义nodejs环境变量：决定使用browserslist的哪个环境
     process.env.NODE_ENV = 'production';

     // 复用loader
     const commonCssLoader = [
       MiniCssExtractPlugin.loader,
       'css-loader',
       {
         // 还需要在package.json中定义browserslist
         loader: 'postcss-loader',
         options: {
           ident: 'postcss',
           plugins: () => [require('postcss-preset-env')()]
         }
       }
     ];

     module.exports = {
       entry: './src/js/index.js',
       output: {
         filename: 'js/built.js',
         path: resolve(__dirname, 'build')
       },
       module: {
         rules: [
           {
             // 在package.json中eslintConfig --> airbnb
             test: /\.js$/,
             exclude: /node_modules/,
             // 优先执行
             enforce: 'pre',
             loader: 'eslint-loader',
             options: {
               fix: true
             }
           },
           {
             // 以下loader只会匹配一个
             // 注意：不能有两个配置处理同一种类型文件，所以把eslint-loader提出了完美解决了问题
             oneOf: [
               {
                 test: /\.css$/,
                 use: [...commonCssLoader]
               },
               {
                 test: /\.less$/,
                 use: [...commonCssLoader, 'less-loader']
               },
               /*
                 正常来讲，一个文件只能被一个loader处理。
                 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
                   先执行eslint 在执行babel
               */
               {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 options: {
                   presets: [
                     [
                       '@babel/preset-env',
                       {
                         useBuiltIns: 'usage',
                         corejs: {version: 3},
                         targets: {
                           chrome: '60',
                           firefox: '50'
                         }
                       }
                     ]
                   ]
                 }
               },
               {
                 test: /\.(jpg|png|gif)/,
                 loader: 'url-loader',
                 options: {
                   limit: 8 * 1024,
                   name: '[hash:10].[ext]',
                   outputPath: 'imgs',
                   esModule: false
                 }
               },
               {
                 test: /\.html$/,
                 loader: 'html-loader'
               },
               {
                 exclude: /\.(js|css|less|html|jpg|png|gif)/,
                 loader: 'file-loader',
                 options: {
                   outputPath: 'media'
                 }
               }
             ]
           }
         ]
       },
       plugins: [
         new MiniCssExtractPlugin({
           filename: 'css/built.css'
         }),
         new OptimizeCssAssetsWebpackPlugin(),
         new HtmlWebpackPlugin({
           template: './src/index.html',
           minify: {
             collapseWhitespace: true,
             removeComments: true
           }
         })
       ],
       mode: 'production'
     };
```

######  **缓存**

> babel缓存：
>   cacheDirectory:true
>   -->让第二次打包构建速度更快
> 文件资源缓存：
>   hash:每次webpack构建时会生成一个唯一的hash值
>   问题：因为js和css使用同一个hash值，如果重新打包会导致所有的缓存失效（可能我只改动了一个文件）
>   chunkhash:根据chunk生成的hash值。如果打包来源于同一个chunk,name hash值就一样。
>   问题：可能js和css还是一样的，因为css在js中被引入的，同属于一个chunk。（所以根据入口文件引入的文件都会生成一个chunk)
>   contenthash（推荐）:根据文件内容生成hash值，不同文件不一样
>   -->让代码上线运行缓存更好使用

1 创建文件 

​		![image-20211101200236915](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgnE2w3sumjX6QLyi.png)

2. 修改配置文件 

   ```
   const { resolve } = require('path');
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
   // 定义nodejs环境变量：决定使用browserslist的哪个环境
   process.env.NODE_ENV = 'production';
   
   // 复用loader
   const commonCssLoader = [
     MiniCssExtractPlugin.loader,
     'css-loader',
     {
       // 还需要在package.json中定义browserslist
       loader: 'postcss-loader',
       options: {
         ident: 'postcss',
         plugins: () => [require('postcss-preset-env')()]
       }
     }
   ];
   
   module.exports = {
     entry: './src/js/index.js',
     output: {
       // 当项目重新构建时，利用文件hash不一致，让强制缓存失效，从而得到更新
       filename: 'js/built.[contenthash:10].js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         {
           // 在package.json中eslintConfig --> airbnb
           test: /\.js$/,
           exclude: /node_modules/,
           // 优先执行
           enforce: 'pre',
           loader: 'eslint-loader',
           options: {
             fix: true
           }
         },
         {
           // 以下loader只会匹配一个
           // 注意：不能有两个配置处理同一种类型文件，所以把eslint-loader提出了完美解决了问题
           oneOf: [
             {
               test: /\.css$/,
               use: [...commonCssLoader]
             },
             {
               test: /\.less$/,
               use: [...commonCssLoader, 'less-loader']
             },
             /*
               正常来讲，一个文件只能被一个loader处理。
               当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
                 先执行eslint 在执行babel
             */
             {
               test: /\.js$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               options: {
                 presets: [
                   [
                     '@babel/preset-env',
                     {
                       useBuiltIns: 'usage',
                       corejs: { version: 3 },
                       targets: {
                         chrome: '60',
                         firefox: '50'
                       }
                     }
                   ]
                 ],
                 // babel缓存
                 cacheDirectory: true
               }
             },
             {
               test: /\.(jpg|png|gif)/,
               loader: 'url-loader',
               options: {
                 limit: 8 * 1024,
                 name: '[hash:10].[ext]',
                 outputPath: 'imgs',
                 esModule: false
               }
             },
             {
               test: /\.html$/,
               loader: 'html-loader'
             },
             {
               exclude: /\.(js|css|less|html|jpg|png|gif)/,
               loader: 'file-loader',
               options: {
                 outputPath: 'media'
               }
             }
           ]
         }
       ]
     },
     plugins: [
       new MiniCssExtractPlugin({
         // 当项目重新构建时，利用文件hash不一致，让强制缓存失效，从而得到更新
         filename: 'css/built.[contenthash:10].css'
       }),
       new OptimizeCssAssetsWebpackPlugin(),
       new HtmlWebpackPlugin({
         template: './src/index.html',
         minify: {
           collapseWhitespace: true,
           removeComments: true
         }
       })
     ],
     mode: 'production'
   }
   ```

######  多进程打包

> 开启多进程打包，提升打包速度，但是开启进程需要一定时间，如果是比较小的项目，使开启多进程打包反而会适得其反

安装依赖

```
     npm i thread-loader -D
```

使用：

```
     const { resolve } = require('path');
     const MiniCssExtractPlugin = require('mini-css-extract-plugin');
     const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

     /*
       PWA: 渐进式网络开发应用程序(离线可访问)
         workbox --> workbox-webpack-plugin
     */

     // 定义nodejs环境变量：决定使用browserslist的哪个环境
     process.env.NODE_ENV = 'production';

     // 复用loader
     const commonCssLoader = [
       MiniCssExtractPlugin.loader,
       'css-loader',
       {
         // 还需要在package.json中定义browserslist
         loader: 'postcss-loader',
         options: {
           ident: 'postcss',
           plugins: () => [require('postcss-preset-env')()]
         }
       }
     ];

     module.exports = {
       entry: './src/js/index.js',
       output: {
         filename: 'js/built.[contenthash:10].js',
         path: resolve(__dirname, 'build')
       },
       module: {
         rules: [
           {
             // 在package.json中eslintConfig --> airbnb
             test: /\.js$/,
             exclude: /node_modules/,
             // 优先执行
             enforce: 'pre',
             loader: 'eslint-loader',
             options: {
               fix: true
             }
           },
           {
             // 以下loader只会匹配一个
             // 注意：不能有两个配置处理同一种类型文件
             oneOf: [
               {
                 test: /\.css$/,
                 use: [...commonCssLoader]
               },
               {
                 test: /\.less$/,
                 use: [...commonCssLoader, 'less-loader']
               },
               /*
                 正常来讲，一个文件只能被一个loader处理。
                 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
                   先执行eslint 在执行babel
               */
               {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: [
                   /* 
                     开启多进程打包。 
                     进程启动大概为600ms，进程通信也有开销。
                     只有工作消耗时间比较长，才需要多进程打包
                   */
                   {
                     loader: 'thread-loader',
                     options: {
                       workers: 2 // 进程2个
                     }
                   },
                   {
                     loader: 'babel-loader',
                     options: {
                       presets: [
                         [
                           '@babel/preset-env',
                           {
                             useBuiltIns: 'usage',
                             corejs: { version: 3 },
                             targets: {
                               chrome: '60',
                               firefox: '50'
                             }
                           }
                         ]
                       ],
                       // 开启babel缓存
                       // 第二次构建时，会读取之前的缓存
                       cacheDirectory: true
                     }
                   }
                 ]
               },
               {
                 test: /\.(jpg|png|gif)/,
                 loader: 'url-loader',
                 options: {
                   limit: 8 * 1024,
                   name: '[hash:10].[ext]',
                   outputPath: 'imgs',
                   esModule: false
                 }
               },
               {
                 test: /\.html$/,
                 loader: 'html-loader'
               },
               {
                 exclude: /\.(js|css|less|html|jpg|png|gif)/,
                 loader: 'file-loader',
                 options: {
                   outputPath: 'media'
                 }
               }
             ]
           }
         ]
       },
       plugins: [
         new MiniCssExtractPlugin({
           filename: 'css/built.[contenthash:10].css'
         }),
         new OptimizeCssAssetsWebpackPlugin(),
         new HtmlWebpackPlugin({
           template: './src/index.html',
           minify: {
             collapseWhitespace: true,
             removeComments: true
           }
         }),
         new WorkboxWebpackPlugin.GenerateSW({
           /*
             1. 帮助serviceworker快速启动
             2. 删除旧的 serviceworker

             生成一个 serviceworker 配置文件~
           */
           clientsClaim: true,
           skipWaiting: true
         })
       ],
       mode: 'production',
       devtool: 'source-map'
     };
```

######  externals

> 官网文档解释的很清楚，就是webpack可以不处理应用的某些依赖库，使用externals配置后，依旧可以在代码中通过CMD、AMD或者window/global全局的方式访问。
>
> 怎么理解呢？我们先通过官网说的那个jquery的案例来理解。
>
> 有时我们希望我们通过script引入的库，如用CDN的方式引入的jquery，我们在使用时，依旧用require的方式来使用，但是却不希望webpack将它又编译进文件中。

但是我们希望我们通过script引入的库，如用CDN的方式引入的jquery，我们在使用时，依旧用require的方式来使用，但是却不希望webpack将它又编译进文件中。  

```
 	<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script> 
```

jquery的使用如下

```
	// 我们不想这么用
	// const $ = window.jQuery
	// 而是这么用const $ = require("jquery")
	$("#content").html("<h1>hello world</h1>"
```

这时，我们便需要配置externals

```
     const { resolve } = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');

     module.exports = {
       entry: './src/js/index.js',
       output: {
         filename: 'js/built.js',
         path: resolve(__dirname, 'build')
       },
       plugins: [
         new HtmlWebpackPlugin({
           template: './src/index.html'
         })
       ],
       mode: 'production',
       externals: {
         // 拒绝jQuery被打包进来
         jquery: 'jQuery'
       }
     };
```

我们可以看看编译后的文件

```
     ({
        0: function(...) {
            var jQuery = require(1);
            /* ... */
        },
        1: function(...) {
          // 很明显这里是把window.jQuery赋值给了module.exports
          // 因此我们便可以使用require来引入了。
          module.exports = jQuery;
        },
          /* ... */
     });
```

　但是，我们还是得在html手动引入Cdn的

```
     <!DOCTYPE html>
     <html lang="en">

     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>webpack</title>
     </head>

     <body>
       <h1 id="title">hello html</h1>
       <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
     </body>

     </html>
```

######  dll

> 使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包
>
> 也就是让webpack这个命令不打包某些库，让我们手动通过webpack --config webpack.dll.js更新

安装依赖库

```
	npm i add-asset-html-webpack-plugin -D
```

配置：

webpack.dll.js:

```
     /*
       使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包
         当你运行 webpack 时，默认查找 webpack.config.js 配置文件
         需求：需要运行 webpack.dll.js 文件
           --> webpack --config webpack.dll.js
     */

     const { resolve } = require('path');
     const webpack = require('webpack');

     module.exports = {
       entry: {
         // 最终打包生成的[name] --> jquery
         // ['jquery'] --> 要打包的库是jquery
         jquery: ['jquery'],
       },
       output: {
         filename: '[name].js',
         path: resolve(__dirname, 'dll'),
         library: '[name]_[hash]' // 打包的库里面向外暴露出去的内容叫什么名字
       },
       plugins: [
         // 打包生成一个 manifest.json --> 提供和jquery映射
         new webpack.DllPlugin({
           name: '[name]_[hash]', // 映射库的暴露的内容名称
           path: resolve(__dirname, 'dll/manifest.json') // 输出文件路径
         })
       ],
       mode: 'production'
     };
```

当我们执行webpack --config webpack.dll.js就会生成mainfest.json和单独打包的库，mainfest.json的作用是告诉webpack哪些文件可以忽略打包

webpack.config.js

```
     const { resolve } = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     const webpack = require('webpack');
     const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

     module.exports = {
       entry: './src/index.js',
       output: {
         filename: 'built.js',
         path: resolve(__dirname, 'build')
       },
       plugins: [
         new HtmlWebpackPlugin({
           template: './src/index.html'
         }),
         // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
         new webpack.DllReferencePlugin({
           manifest: resolve(__dirname, 'dll/manifest.json')
         }),
         // 将某个文件打包输出去，并在html中自动引入该资源
         new AddAssetHtmlWebpackPlugin({
           filepath: resolve(__dirname, 'dll/jquery.js')
         })
       ],
       mode: 'production'
     };
```

由于某些库是单独打包的，所以并不在bulit.js中，也不会自动引入，所以我们需要依赖add-asset-html-webpack-plugin这个库来帮我们自动引入

![image-20211107212720457](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img249TNQiBYzhn3Uf.png)

###### 优化代码运行的性能：

######  缓存(hash-chunkhash-contenthash)

######  tree shaking

> 去除无用代码, 减少代码体积，但是当在package.json中配置"sideEffects": false则表示对所有的文件都执行tree shaking,
>
> 这样就有可能会导致css和@babel/polyfill文件被误删，产生副作用
>
> 使用前提：1、必须使用ES6模块化 2、开启production模式

**一、tree shaking是什么？**

创建一个math.js文件，math.js文件中会导出两个函数：

math.js:

```js
     // 导出add函数
     export function add(a, b){
         return a + b;
     };

     // 导出minus函数
     export function minus(a, b){
         return a - b;
     };
```

然后在index.js中导入并调用add函数：

index.js:

```js
     import { add } from "./math.js";

     console.log(add(5, 3));
```

然后进行打包：

打开打包后的main.js，可以发现math.js中的minus函数也被打包进了main.js中：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-bcb13b5dcec712043e6dd9274ee16fea_720w.jpg)

可是在index.js文件中根本就不需要调用minus函数。

那么就应该把minus从main.js中剔除掉，或者说把minus看作树上枯黄的叶子，应该把它从树上摇落，这就是tree shaking，一种把无用代码“摇落”的功能！

**二、在开发模式下开启tree shaking**

要在开发模式下开启tree shaking，就要首先配置webpack.config.js文件：

webpack.config.js:

```js
     const path = require('path');
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     const { CleanWebpackPlugin } = require('clean-webpack-plugin');    
     const webpack = require('webpack');

     module.exports = {
         mode: 'development',
         devtool: 'cheap-module-eval-source-map',                
         entry: {
             main: './src/index.js',                   
         },
         output: {
             filename: '[name].js',                 
             path: path.resolve(__dirname, 'dist')   
         },
         plugins:[
             new HtmlWebpackPlugin({
                 filename: 'dist.html',          
                 template: './src/template.html' 
             }),
             new CleanWebpackPlugin(),
             new webpack.HotModuleReplacementPlugin()               
         ],
         optimization: {                 
             usedExports: true               // 在开发模式中开启tree shaking
         },
         devServer: {
             contentBase: './dist',                   
             port: '8080',                            
             hot: true,              
             hotOnly: true           
         },
         module: {
             rules: [
                 {
                     rules: [
                         {
                             test: /\.(png|svg|jpg|gif)$/,  
                             use: [{
                                 loader: 'url-loader',     
                                 options: {
                                     limit: 1024            
                                 }
                             }]
                         },{
                             test: /\.css$/,
                             use: [
                                 'style-loader',
                                 'css-loader'
                             ]
                         },{
                             rules: [{
                                 test: /\.js$/,   
                                 exclude: /node_modules/,  
                                 loader: 'babel-loader',
                             }]
                         }
                     ]    
                 }
             ]
         }
     }
```

任何导入的文件都会收到tree shaking的影响，所以一些导入时会执行特殊行为的代码，它们不是仅仅暴露一个export或多个export（**副作用**），比如polyfill，就会被tree shaking给删除。另外，css文件，也会因为这种原因被tree shaking删除。

为了避免这种无意的删除，就需要在package.json中对sideEffects选项进行设置：

package.json:

```json
     {
       "name": "webpack-demo",
       "version": "1.0.0",
       "description": "",
       "private": true,
       "main": "index.js",
       "sideEffects": [
         "@babel/polyfill",
         "*.css"
       ],
       "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "bundle": "webpack",
         "watch": "webpack --watch",
         "server": "webpack-dev-server"
       },
       "author": "",
       "license": "ISC",
       "devDependencies": {
         "@babel/core": "^7.6.4",
         "@babel/preset-env": "^7.6.3",
         "autoprefixer": "^9.6.1",
         "babel-loader": "^8.0.6",
         "clean-webpack-plugin": "^3.0.0",
         "css-loader": "^3.2.0",
         "file-loader": "^4.2.0",
         "html-webpack-plugin": "^3.2.0",
         "node-sass": "^4.12.0",
         "postcss-loader": "^3.0.0",
         "sass-loader": "^8.0.0",
         "style-loader": "^1.0.0",
         "url-loader": "^2.1.0",
         "webpack": "^4.39.3",
         "webpack-cli": "^3.3.7",
         "webpack-dev-server": "^3.8.0"
       },
       "dependencies": {
         "@babel/polyfill": "^7.6.0",
         "core-js": "^3.3.2",
         "install": "^0.13.0",
         "npm": "^6.12.0"
       }
     }
```

现在全部设置完毕，进行打包：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-b21fad4dfc17ec91b73aaf041b13ff67_720w.jpg)

再次打开main.js，可以发现tree shaking就生效了：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-d34b226cd2a5f34d75c5c875c310289f_720w.jpg)

但是开发模式下并不会把没用的代码删掉，因为如果删掉的话回导致调试困难，比如source map提示的行数不对应等。

**二、在生产模式下开启tree shaking**

在生产模式下就不要optimization选项进行设置了，因为webpack会在生产模式下默认打开tree shaking。

所以把webpack.config.js修改成：

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');    
const webpack = require('webpack');

module.exports = {
    mode: 'production',             // 生产模式
    devtool: 'cheap-module-eval-source-map',                
    entry: {
        main: './src/index.js',                   
    },
    output: {
        filename: '[name].js',                 
        path: path.resolve(__dirname, 'dist')   
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'dist.html',          
            template: './src/template.html' 
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()               
    ],
    devServer: {
        contentBase: './dist',                   
        port: '8080',                            
        hot: true,              
        hotOnly: true           
    },
    module: {
        rules: [
            {
                rules: [
                    {
                        test: /\.(png|svg|jpg|gif)$/,  
                        use: [{
                            loader: 'url-loader',     
                            options: {
                                limit: 1024            
                            }
                        }]
                    },{
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            'css-loader'
                        ]
                    },{
                        rules: [{
                            test: /\.js$/,   
                            exclude: /node_modules/,  
                            loader: 'babel-loader',
                        }]
                    }
                ]    
            }
        ]
    }
}
```

进行打包：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ff6c4a1aa95ffcef2c6cb35b890eee3f_720w.jpg)

再打开main.js文件就可以发现只剩下add函数的相关代码：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-00e62fe184fe8ca98ad4da400cd72418_720w.png)

而minus函数相关的代码没有被打包到main.js中。

######  code split

> 代码分离（codeSplit）是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。
>
> 代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

**方式一**

在 webpack 中可以定义多入口，将不同的入口文件打包为不同的 chunk

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img3iT7CRQ2cuXSAO4.png)

构建后的 文件中有两个单独的 js

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606163645530-561456213.png)

**方式二**

webpack 中 optimization 配置 还可以 将node_modules中代码单独打包一个chunk最终输出，如果是多入口，可以 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606164355985-1262234522.png)

当在 index.js 和 test.js 两个入口文件中都引入 jQury 时，webpack 将公共的 jQuery 单独打包为一个 chunk

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606164936402-1837182916.png)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606164954908-1912835539.png)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606165012764-577933963.png)

**方式三（重要）**

> 通过 js 代码，可以让指定某个文件被单独打包成一个 chunk，
>
> 如在 index.js 中通过 import 语法而不需要配置webpack.config.js，将引入的 test.js 单独打包为一个 chunk，

```
     function add(x, y) {
         return x + y;
     }
     // eslint-disable-next-line
     console.log("1+1=", add(1, 1))
	/*
       通过js代码，让某个文件被单独打包成一个chunk
       import动态导入语法：能将某个文件单独打包
       webpackChunkName: 可以配置chunk的部分名称以便于区分
     */
     import(/*webpackChunkName: 'test'*/'./test') 
         .then(({ count }) => { //count 结构赋值
             // eslint-disable-next-line
             console.log("test.js加载成功，10-2等于：",count(10, 2));
         })
         .catch(() => {
             // eslint-disable-next-line
             console.log('文件加载失败~');
         });
```

构建后的文件中，test被单独打包：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgM9YAiak16xlNXWb.png)

常用于路由文件引入：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220703230721679.png" alt="image-20220703230721679" style="zoom:67%;" />

######  懒加载/预加载

> 懒加载,是在进入这个方法时才加载,文件test进行第一次加载并执行里面的代码
>
> 预加载:会在使用之前加载js文件(js文件先加载了,但是并不会去执行代码)，等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
>
> ​		   当点击按钮进入该方法时,加载的是该文件的缓存,同时去执行test文件的内容
>
> 正常加载: 可以认为是并行加载(同一时间加载多个文件)

不需要安装依赖

使用：

```
console.log('index.js 文件被加载了')
document.getElementById('btn').onclick= function(){
    //懒加载~:当文件需要使用时才加载
    //import(/*webpackChunkName:'test'*/'./test')
    //预加载 webpackPrefetch:true 会在使用之前加载js文件(js文件先加载了,但是并不会去执行代码)，等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
    import(/*webpackChunkName:'test' ,webpackPrefetch:true */'./test')
}test.jsconsole.log('test.js文件被加载了')
```

######  pwa

> PWA: 渐进式网络开发应用程序（离线可访问）
>
> ​		workbox --> workbox-webpack-plugin
>
> 在webpack中通过workbox插件实现，也就是 workbox-webpack-plugin

安装依赖：

```
      npm i workbox-webpack-plugin
```

使用：

webpack.config.js

```
     const { resolve } = require('path');
     const MiniCssExtractPlugin = require('mini-css-extract-plugin');
     const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

     /*
       PWA: 渐进式网络开发应用程序(离线可访问)
         workbox --> workbox-webpack-plugin
     */

     // 定义nodejs环境变量：决定使用browserslist的哪个环境
     process.env.NODE_ENV = 'production';

     // 复用loader
     const commonCssLoader = [
       MiniCssExtractPlugin.loader,
       'css-loader',
       {
         // 还需要在package.json中定义browserslist
         loader: 'postcss-loader',
         options: {
           ident: 'postcss',
           plugins: () => [require('postcss-preset-env')()]
         }
       }
     ];

     module.exports = {
       entry: './src/js/index.js',
       output: {
         filename: 'js/built.[contenthash:10].js',
         path: resolve(__dirname, 'build')
       },
       module: {
         rules: [
           {
             // 在package.json中eslintConfig --> airbnb
             test: /\.js$/,
             exclude: /node_modules/,
             // 优先执行
             enforce: 'pre',
             loader: 'eslint-loader',
             options: {
               fix: true
             }
           },
           {
             // 以下loader只会匹配一个
             // 注意：不能有两个配置处理同一种类型文件
             oneOf: [
               {
                 test: /\.css$/,
                 use: [...commonCssLoader]
               },
               {
                 test: /\.less$/,
                 use: [...commonCssLoader, 'less-loader']
               },
               /*
                 正常来讲，一个文件只能被一个loader处理。
                 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
                   先执行eslint 在执行babel
               */
               {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 options: {
                   presets: [
                     [
                       '@babel/preset-env',
                       {
                         useBuiltIns: 'usage',
                         corejs: { version: 3 },
                         targets: {
                           chrome: '60',
                           firefox: '50'
                         }
                       }
                     ]
                   ],
                   // 开启babel缓存
                   // 第二次构建时，会读取之前的缓存
                   cacheDirectory: true
                 }
               },
               {
                 test: /\.(jpg|png|gif)/,
                 loader: 'url-loader',
                 options: {
                   limit: 8 * 1024,
                   name: '[hash:10].[ext]',
                   outputPath: 'imgs',
                   esModule: false
                 }
               },
               {
                 test: /\.html$/,
                 loader: 'html-loader'
               },
               {
                 exclude: /\.(js|css|less|html|jpg|png|gif)/,
                 loader: 'file-loader',
                 options: {
                   outputPath: 'media'
                 }
               }
             ]
           }
         ]
       },
       plugins: [
         new MiniCssExtractPlugin({
           filename: 'css/built.[contenthash:10].css'
         }),
         new OptimizeCssAssetsWebpackPlugin(),
         new HtmlWebpackPlugin({
           template: './src/index.html',
           minify: {
             collapseWhitespace: true,
             removeComments: true
           }
         }),
         new WorkboxWebpackPlugin.GenerateSW({
           /*
             1. 帮助serviceworker快速启动
             2. 删除旧的 serviceworker

             生成一个 serviceworker 配置文件~
           */
           clientsClaim: true,
           skipWaiting: true
         })
       ],
       mode: 'production',
       devtool: 'source-map'
     };

```

在入口Js中注册service-worker

```
     import { mul } from './test';
     import '../css/index.css';

     function sum(...args) {
       return args.reduce((p, c) => p + c, 0);
     }

     // eslint-disable-next-line
     console.log(mul(2, 3));
     // eslint-disable-next-line
     console.log(sum(1, 2, 3, 4));

     /*
       1. eslint不认识 window、navigator全局变量
         解决：需要修改package.json中eslintConfig配置
           "env": {
             "browser": true // 支持浏览器端全局变量
           }
        2. sw代码必须运行在服务器上
           --> nodejs
           -->
             npm i serve -g
             serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
     */
     // 注册serviceWorker
     // 处理兼容性问题
     if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
         navigator.serviceWorker
           .register('/service-worker.js')
           .then(() => {
             console.log('sw注册成功了~');
           })
           .catch(() => {
             console.log('sw注册失败了~');
           });
       });
     }
```

注意：service-worker只能在https服务器下或者localhost使用

这样即使离线也能访问网页了

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgd75cweJKqP1knLj.png" alt="image-20211104002209080" style="zoom:67%;" />

因为网页文件已经缓存下来了

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgn8pjCK7wAP4ukmQ.png" alt="image-20211104002255849" style="zoom:50%;" />

详情请访问：https://www.jianshu.com/p/768be2733872

###### 项目体积优化：

###### 使用CDN引入

**前言**
CDN（内容分发网络）指请求资源的方式，即通过script头去请求对应的脚本资源的一种方式，项目里配置之后不需要通过npm包管理工具去下载配置的包。
目的：将引用的外部js、css文件剥离开来，不编译到vendor.js中，而是用资源的形式引用，这样浏览器可以使用多个线程异步将vendor.js、外部的js等加载下来，达到加速首页展示效果。

1. 在vue.config.js进行配置
   本人对vue、vuex、vue-router、axios、element-ui、echarts进行了cdn引用。（请求element-ui、echarts的cdn较慢）

```
  //生产环境标记
  const IS_PRODUCTION = process.env.NODE_ENV === 'production'
  //配置引用cdn的js、css地址
  const cdn = {
      css: [
          'https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css'
      ],
      js: [
          'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
          'https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.2/vue-router.min.js',
          'https://cdn.bootcdn.net/ajax/libs/vuex/3.1.0/vuex.min.js',
          'https://cdn.bootcdn.net/ajax/libs/axios/0.18.1/axios.min.js',
          'https://unpkg.com/element-ui@2.13.2/lib/index.js',
          'https://cdn.bootcdn.net/ajax/libs/echarts/5.0.1/echarts.min.js'
      ]
  }
  //配置打包时使用CDN节点（加入externals外部扩展）， 忽略打包的第三方库
  //左面放package.json中的扩展的名称,右面放项目依赖的名称(项目初始化要用的名称)
  const externals = {
    // 属性名称 vue, 表示遇到 import xxx from 'vue' 这类引入 'vue'的，不去 node_modules 中找，而是去找全局变量 Vue（其他的为VueRouter、Vuex、axios、ELEMENT、echarts，注意全局变量是一个确定的值，不能修改为其他值，修改为其他大小写或者其他值会报错，若有异议可留言）
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      'element-ui': 'ELEMENT',
      'echarts': 'echarts'
  }
  chainWebpack(config) {
          if (IS_PRODUCTION) {
              config.plugin('html').tap(args => {
                  args[0].cdn = cdn
                  return args
              })
              //视为一个外部库，而不将它打包进来
              config.externals(externals)
          }
      }      
```

  2.在public/index.html文件配置
  使用 webpack中自带的插件 html插件进行配置，在 index.html 中增加判断，是否使用 CDN， htmlWebpackPlugin.options 使用的是vue.config中的config.plugin('html')的插件属性。

```
    <!-- 使用CDN的CSS文件 -->
       <% for (var i in
       htmlWebpackPlugin.options.cdn&&htmlWebpackPlugin.options.cdn.css) { %>
       <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="preload" as="style" />
       <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet" />
     <% } %>
      <!-- 使用CDN加速的JS文件，配置在vue.config.js下 -->
     <% for (var i in
       htmlWebpackPlugin.options.cdn&&htmlWebpackPlugin.options.cdn.js) { %>
       <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
     <% } %>
```

  3.易出错点

  1. Router is not defined
     ![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img10863986f2694a28b5f36601c1976c8b.png)![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img7a085daa60154d79b99e9d114eb56ef9.png)![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgf0847ab5240b44aab83ca4bd700899b2.png)
     解决方案： 将Router 改为 ‘VueRouter’

  2. Uncaught TypeError: Illegal constructor
     ![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imga6036ad48d344387bc0431d3886e6062.png)
     解决方案：修改externals 中‘'element-ui’的value

     ```
         const externals = {
          'element-ui': 'ELEMENT',
         }
     ```

###### 开启gzip压缩   

**一、背景**

> 在使用vue-cli3搭建项目的时候，当使用npm run build进行生产环境打包的时候会发现有以下显示：
>
> 我们可以看到Gzipped那一列，也就是编译生成后的每一个文件都会有对应的Gzipped文件，
>
> 并且比原文件小了不止3倍，这无疑会大大节省服务器的网络带宽。那什么是gzip呢？

![截图](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpeGFt,size_16,color_FFFFFF,t_70.png)

**二、认识gzip**

**1、什么是gzip**

> gzip是GNUzip的缩写，最早用于UNIX系统的文件压缩。HTTP协议上的gzip编码是一种用来改进web应用程序性能的技术，
>
> web服务器和客户端（浏览器）必须共同支持gzip。目前主流的浏览器：Chrome、firefox、IE等都支持该协议。常见的服务器如Apache，Nginx，IIS同样支持gzip。

**2、gzip工作原理**

![gzip工作原理](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpeGFt,size_16,color_FFFFFF,t_70-1656944803871143.png)

**1)**浏览器请求url，并在request header中设置属性accept-encoding：gzip，表明浏览器支持gzip。

**2)**服务器收到浏览器发送的请求之后，判断浏览器是否支持gzip，如果支持gzip，则向浏览器传送压缩过的内容，不支持则向浏览器发送未经压缩的内容。

一般情况下，浏览器和服务器都支持gzip，response headers返回包含content-encoding: gzip。

**3)**浏览器接收到服务器的响应之后判断内容是否被压缩，如果被压缩则解压缩显示页面内容。

下面我们打开taobao查看一下示例（google）：

从上图的Content-Encoding那一列我们可以看到，前面三个文件都使用的是gzip文件。
下面再放一张网络图(我自己查看的时候Request Headers没有Accept-Encoding这一项emmm很尴尬)，可以更清晰。

![淘宝截图](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpeGFt,size_16,color_FFFFFF,t_70-1656944889638145.png)

**3、哪些文件可以进行gzip压缩**
gzip 可以压缩所有的文件，但是这不代表我们要对所有文件进行压缩，我们写的代码（css,js）之类的文件会有很好的压缩效果，但是图片之类文件则不会被 gzip 压缩太多，因为它们已经内置了一些压缩，一些文件（比如一些已经被压缩的像.zip文件那种）再去压缩可能会让生成的文件体积更大一些。当然已经很小的文件也没有去压缩的必要了。

**三、如何配置**
**1、为什么前端要配置**
看起来只需要服务端参与：当浏览器请求时，服务器实时压缩文件然后返回。那为什么还要前端去参与呢？
每次请求服务端都要压缩然后返回信息回来，会增加服务器开销，压缩等级越高越消耗cpu。

我们在 Webpack打包时就直接生成高压缩等级的文件，作为静态资源放在服务器上，就会高效很多。

**2、如何生成gzip文件**
webpack中的compression-webpack-plugin就能帮我们完成这个事情。
简单配置如下：

```
// vue.config.js
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
	// ...
    configureWebpack: config => {
        return {
        	plugin: [
        		/* 压缩文件，并生产gzip文件 */
              new CompressionPlugin({
                filename: '[path][base].gz', // 生成的文件名
                algorithm: 'gzip', // 类型
                test: new RegExp('\\.(js|css)$'), // 匹配规则
                threshold: 1024, // 字节数 只处理比这个大的资源
                minRatio: 0.8, // 压缩率 只有比这个小的才会处理
                // deleteOriginalAssets: true // 删除原文件
              }),
        	]
        }
    }
}
运行npm run build打包生成后，就可以发现生成了额外的.gz文件。
```

四、nginx开启gzip功能

​		当gzip文件已经生成了，我们只需要在nginx下配置以下一句即可：

```
gzip_static on;   // 其中gzip_static on这个属性是静态加载本地的gz文件。
```

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220704223708226.png" alt="image-20220704223708226" style="zoom:67%;" />

**需要注意的问题：**

<ul>
<li>
<p>优化是对资源分配的平衡，压缩需要cpu来参与计算，所以开启压缩是需要与cpu开销问题一起来综合考虑。不能一味追求高压缩比。比如当文件很大时，压缩文件会带来明显延迟，系统CPU也会产生瞬间冲上去。</p>
</li>
<li>
<p><code>html、js、json、css</code>等，开启压缩，会给网站带来明显的优化效果。 而针对大文件的情况，要么事先手工压缩好，要通过其它方式提供服务，不建议在<code>nginx</code>中开启对大文件的压缩。</p>
</li>
</ul>


**当然，我们也可以采用服务器进行gzip压缩**

浏览器请求xx.js文件时，服务器对xx.js文件进行gzip压缩后传输给浏览器

前端不用进行任何配置，也不用webpack生成gz文件，服务器进行处理，拿nginx举例：

```
http {
    # 开启gzip
    gzip  on;
   
    # 设置缓冲区大小
    gzip_buffers 4 16k;
    
    #压缩级别官网建议是6
    gzip_comp_level 6;
 
    #压缩的类型
    gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php;

    server {
        listen       8462;
        server_name  localhost;

        location / {
            root   dist;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

```

上面有一些关于gzip的配置，首先是开启gzip，设置缓冲区大小，压缩的等级，需要压缩的文件等（如果需要更详细的配置，可以查看nginx的配置文档），看下效果：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220704230117094.png" alt="image-20220704230117094" style="zoom:67%;" />

响应头中会携带gzip压缩配置，每次请求xx.js文件，服务器都会进行实时压缩。

两种方案的优缺点：

1、webpack打包，然后直接使用静态的gz，缺点就是打包后文件体积太大，但是不耗服务器性能；
2、使用nginx在线gzip，缺点就是耗性能，需要实时压缩，但是vue打包后的文件体积小。

这里可能有些同学就要问题，我想在有gz文件的时候进行静态压缩，不存在gz文件的时候进行在线压缩而不是加载源文件，要怎么做呢？

简单，两种配置都写上即可。

```
gzip on;
gzip_static on;
gzip_comp_level 2;
gzip_types text/plain text/html text/css application/x-javascript text/xml application/xml application/xml+rss text/javascript;  
```

首先，gzip_static的优先级高，会先加载静态gz文件，当同目录下不存在此文件的时候，会执行在线压缩的命令。

有些小伙伴就会纳闷，既然都开启的情况下，我们怎么区分使用了静态加载还是在线压缩呢？
响应头的Content-Edcoding:gzip表示gzip压缩已经生效，而Etag中只有简单字符表示静态资源加载，而前面带 W/ 表示启动了在线压缩。看下图：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220704230422925.png" alt="image-20220704230422925" style="zoom:50%;" />

五、检测网站
如何去检测某个网站有没有开启gzip压缩，压缩比例是多少呢等等信息，这里提供一个快捷检查网站：站长工具

###### 去除无用代码

```
const TerserPlugin = require("terser-webpack-plugin");
// 去除无用代码
new TerserPlugin({
    terserOptions: {
    compress: {
    warnings: true,
    drop_console: true,
    drop_debugger: true,
    pure_funcs: ['console.log', "console.table"] // 删除console
    }
    }
})
```

###### 按需引入

##### webpack配置详解

##### 不同环境不同配置

> 实际项目中，往往不同环境有不同的构建需求。比如开发、测试和生产环境对应的后端接口地址不同，生产环境需要进行代码混淆、压缩等。
>
> 因此，往往还需要将webpack配置分成多个

安装webpack-merge，用于合并配置：

```
     npm install webpack-merge --save-dev
```

拆分webpack.config.js为以下几个配置：

基础配置 webpack.base.config.js：

```
     const path = require('path');
     const webpack = require('webpack');

     const ROOT_PATH = path.resolve(__dirname);
     const SRC_PATH = path.resolve(ROOT_PATH, 'src');
     const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

     module.exports = {
         entry: {
             index: path.resolve(SRC_PATH, 'index.jsx')
         },
         output: {
             path: BUILD_PATH,
             filename: 'js/[name].[hash:5].js'
         },
         resolve: {
             extensions: ['.js', '.jsx']
         },
         module: {
             loaders: [
                 {
                     test: /\.jsx?$/,
                     loaders: ['eslint-loader'],
                     include: SRC_PATH,
                     enforce: 'pre'
                 }, {
                     test: /\.jsx?$/,
                     loaders: ['babel-loader'],
                     include: SRC_PATH,
                     exclude: path.resolve(ROOT_PATH, 'node_modules')
                 }
             ]
         }
     };
```



