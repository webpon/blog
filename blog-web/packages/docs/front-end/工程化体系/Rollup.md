- [简单实用](#简单实用)
- [使用配置文件](#使用配置文件)
- [使用插件](#使用插件)
- [Javascipt API](#javascipt-api)
- [rollup.rollup](#rolluprollup)
- [输入参数(inputOptions)](#输入参数inputoptions)
- [输出参数(outputOptions)](#输出参数outputoptions)
- [监听参数(watchOptions)](#监听参数watchoptions)
##### 简单实用

> Rollup同样是一款ES Module打包器，从作用来看，Rollup与Webpack很相似，但Rollup更为小巧，仅仅是一款ESM打包器；比如Rollup中不不支持类似的HMR这种高级特性
>
> Rollup是为了提供一个充分利用ESM各项特性的高效（结构比较扁平，性能比较出众的类库）打包器

快速使用：

（1）安装：npm i rollup -g

（2）使用说明：rollup -h

（3）项目开始：

首先，我们需要个 入口。将以下代码粘贴到新建的文件 `src/main.js` 中：

```
     // src/main.js
     import foo from './foo.js';
     export default function () {
       console.log(foo);
     }
```

之后创建入口文件引用的 `foo.js` 模块：

```
     // src/foo.js
     export default 'hello world!';
```

现在可以创建 bundle 了：

```
     // cjs -> commonjs es->es module
     rollup src/main.js -o bundle.js -f cjs
```

##### 使用配置文件

> 上面的方式还不错，但是如果添加更多的选项，这种命令行的方式就显得麻烦了。
>
> 为此，我们可以创建配置文件来囊括所需的选项。配置文件由 JavaScript 写成，比 CLI 更加灵活。

在项目中创建一个名为 `rollup.config.js` 的文件，增加如下代码：

```
     // rollup.config.js
     export default {
       input: 'src/main.js',
       output: {
         file: 'bundle.js',
         format: 'cjs'
       }
     };
```

我们用 `--config` 或 `-c` 来使用配置文件，如果不知名配置文件，则默认取当前目录下的rollup.config.js：

```
     rm bundle.js # so we can check the command works!
     rollup -c
```

同样的命令行选项将会覆盖配置文件中的选项：

```bash
	rollup -c -o bundle-2.js # `-o` is short for `--output.file`
```

（注意 Rollup 本身会处理配置文件，所以可以使用 `export default` 语法——代码不会经过 Babel 等类似工具编译，所以只能使用所用 Node.js 版本支持的 ES2015 语法。）

如果愿意的话，也可以指定与默认 `rollup.config.js` 文件不同的配置文件：

```
     rollup --config rollup.config.dev.js
     rollup --config rollup.config.prod.js
```

##### 使用插件

> 目前为止，我们通过相对路径，将一个入口文件和一个模块创建成了一个简单的 bundle。随着构建更复杂的 bundle，通常需要更大的灵活性——引入 npm 安装的模块、通过 Babel 编译代码、和 JSON 文件打交道等。
>
> 为此，我们可以用 *插件(plugins)* 在打包的关键过程中更改 Rollup 的行为。[the Rollup wiki](https://github.com/rollup/rollup/wiki/Plugins) 维护了可用的插件列表。

此教程中，我们将使用 [rollup-plugin-json](https://github.com/rollup/rollup-plugin-json)，令 Rollup 从 JSON 文件中读取数据。

将 rollup-plugin-json 安装为开发依赖：

```bash
     npm install --save-dev rollup-plugin-json
```

（我们用的是 `--save-dev` 而不是 `--save`，因为代码实际执行时不依赖这个插件——只是在打包时使用。）

更新 `src/main.js` 文件，从 package.json 而非 `src/foo.js` 中读取数据：

```js
     // src/main.js
	import { version } from '../package.json';
     export default function () {  
          console.log('version ' + version);
     }
```

编辑 `rollup.config.js` 文件，加入 JSON 插件：

```js
     // rollup.config.jsimport json from 'rollup-plugin-json';
     export default {  
          input: 'src/main.js',  
          output: {    
               file: 'bundle.js',    
               format: 'cjs'  },  
          plugins: [ json() ]
     };
```

`npm run build` 执行 Rollup。结果如下：

```js
     'use strict';
     var version = "1.0.0";
     var main = function () {  
          console.log('version ' + version);
     };
     module.exports = main;
```

（注意只有我们实际需要的数据——name 和 devDependencies 和 package.json 中的其它数据被忽略了。这是 tree-shaking 起了作用。）

详情请访问：https://www.rollupjs.com/guide/tutorial

##### Javascipt API

> Rollup 提供 JavaScript 接口那样可以通过 Node.js 来使用。你可以很少使用，而且很可能使用命令行接口，
>
> 除非你想扩展 Rollup 本身，或者用于一些难懂的任务，例如用代码把文件束生成出来。

##### rollup.rollup

The `rollup.rollup` 函数返回一个 Promise，它解析了一个 `bundle` 对象，此对象带有不同的属性及方法，如下：

```javascript
     const rollup = require('rollup');

     // see below for details on the options
     const inputOptions = {...};
     const outputOptions = {...};

     async function build() {
       // create a bundle
       const bundle = await rollup.rollup(inputOptions);

       console.log(bundle.imports); // an array of external dependencies
       console.log(bundle.exports); // an array of names exported by the entry point
       console.log(bundle.modules); // an array of module objects

       // generate code and a sourcemap
       const { code, map } = await bundle.generate(outputOptions);

       // or write the bundle to disk
       await bundle.write(outputOptions);
     }

     build();
```

复制

##### 输入参数(inputOptions)

`inputOptions` 对象包含下列属性 (查看[big list of options](https://www.rollupjs.com/guide/big-list-of-options) 以获得这些参数更详细的资料):

```js
     const inputOptions = {
       // 核心参数
       input, // 唯一必填参数
       external,
       plugins,

       // 高级参数
       onwarn,
       cache,

       // 危险参数
       acorn,
       context,
       moduleContext,
       legacy
     };
```

复制

##### 输出参数(outputOptions)

`outputOptions` 对象包括下列属性 (查看 [big list of options](https://www.rollupjs.com/guide/big-list-of-options) 以获得这些参数更详细的资料):

```js
     const outputOptions = {
       // 核心参数
       file,   // 若有bundle.write，必填
       format, // 必填
       name,
       globals,

       // 高级参数
       paths,
       banner,
       footer,
       intro,
       outro,
       sourcemap,
       sourcemapFile,
       interop,

       // 危险区域
       exports,
       amd,
       indent
       strict
     };
```

**rollup.watch**

Rollup 也提供了 `rollup.watch` 函数，当它检测到磁盘上单个模块已经改变，它会重新构建你的文件束。 当你通过命令行运行 Rollup，并带上 `--watch` 标记时，此函数会被内部使用。

```js
     const rollup = require('rollup');

     const watchOptions = {...};
     const watcher = rollup.watch(watchOptions);

     watcher.on('event', event => {
       // event.code 会是下面其中一个：
       //   START        — 监听器正在启动（重启）
       //   BUNDLE_START — 构建单个文件束
       //   BUNDLE_END   — 完成文件束构建
       //   END          — 完成所有文件束构建
       //   ERROR        — 构建时遇到错误
       //   FATAL        — 遇到无可修复的错误
     });

     // 停止监听
     watcher.close();
```

##### 监听参数(watchOptions)

`watchOptions` 参数是一个你会从一个配置文件中导出的配置 (或一个配置数据)。

```js
     const watchOptions = {
       ...inputOptions,
       output: [outputOptions],
       watch: {
         chokidar,
         include,
         exclude
       }
     }
```