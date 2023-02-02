#### 初始化

##### 环境安装

```
     npm install --global vue-cli
```

在vue.config.js中输入以下代码可以更简单使用文件路径：

```
     module.exports = {
       configureWebpack: {
         resolve: {
           alias: {
             assets: "@/assets",
             common: "@/common",
             components: "@/components",
             network: "@/network",
             views: "@/views"
           }
         }
       },
     };
```

引入全局css

在app.vue的style中引入

```
@import "./assets/css/base.css";
```

或者在main.js中引入

```
import "./assets/css/base.css";
```

打包Vue项目，

第一步：

在router得文件夹中的Index.js中的路由模式必须为hash模式（由于默认就是hash模式，所以我们不写也行，但不能写history模式）

```
     const router = new VueRouter({
       mode: 'hash',
       base: process.env.BASE_URL,
       routes
     })
```

第二步：

在vue.config.js中添加：

```
 	publicPath: "./"
```

![image-20201128141508724](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210405211627-1657022362068219.png)

之后执行:npm run build

然后打包成功，并放置在asset文件夹

##### package.json

**dependencies和devDependencies**的区别

为什么要分这两个东西来记录包呢？

举个例子，加入我们导入一个math模块

```
     require math from 'math'
     console.log(math)
```

这样的话我们必须要用到math模块，所以必须放到**dependencies**中，

但是我比如想打包很多文件，那么就需要用到webpack，但是并不是什么时候都要用到的，而且也不需要引入到项目代码中，仅仅作为工具使用，

npm install会把**dependencies和devDependencies**的依赖都安装，其实大部分项目我们都需要把两个环境的依赖都安装

如果你只是单纯的想使用这个包而不需要进行一些改动测试之类的操作，则运行：（只安装dependencies而不安装devDependencies。）

```
	npm install --production
```

如果想要安装devDependencies,则运行：

```
	npm install packagename --dev 
```

#### 模块化开发

##### 全局样式

> 全局作用域的意思就是该css对全局的所有可匹配的元素产生影响

- 在main.js中直接import css文件

  main.js

  ```
  import Vue from 'vue'
  import App from './App.vue'
  import './index.css'
  
  Vue.config.productionTip = false
  
  const app = new Vue({
    render: h => h(App),
  }).$mount('#app')
  console.log(app);
  ```

  index.css

  ```
  h1 {
    color: blue;
  }
  ```

  app.vue

  ```
  <template>
    <div id="app">
      <h1>我在app中的h1</h1>
    </div>
  </template>
  
  <script>
  </script>
  
  <style>
  h1 {
    color: pink;
  }
  </style>
  ```

  效果：

  ![image-20211001144805304](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgMrYoztds4via9lh.png)

  可以看出，main.js导入的css对app.vue产生了影响，并且优先级大于统计的app.vue中的css样式，对其他组件同理

- 直接使用&lt;style>不加scoped属性

  app.vue

  ```
  <template>
    <div id="app">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <h1>我在app中的h1</h1>
    </div>
  </template>
  
  <script>
  import HelloWorld from './components/HelloWorld.vue'
  
  export default {
    name: 'App',
    components: {
      HelloWorld
    },
  }
  </script>
  
  <style>
  h1 {
    /* color: pink; */
  }
  </style>
  ```

  helloworld.vue

  ```
  <template>
    <div class="hello">
      <h1>{{ msg }}</h1>
  
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
  </script>
  <style>
    h1 {
      color: red;
    }
  </style>
  ```

  效果

  ![image-20211001145201563](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgJkCW1cd48obE2pn.png)

  可以看出子组件中的style也对父组件app.vue产生了影响，如果父组件也有该全局样式，那父组件的优先级高于同级的选择器

  

##### 局部css-scoped属性

> 在Vue文件中的style标签上有一个特殊的属性，scoped。当一个style标签拥有scoped属性时候，它的css样式只能用于当前的Vue组件，可以使组件的样式不相互污染。如果一个项目的所有style标签都加上了scoped属性，相当于实现了样式的模块化。

**使用：**

​	使用在style标签上	

例如：

![image-20201029134008532](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220503-1657022362068222.png)

**作用：实现组件样式的私有化不对全局造成样式污染**

例如：

子组件：

```
     <template>
         <p class="son">son</p>
     </template>
     <script>
     export default {
       name: 'HelloWorld',
       props: {
         msg: String
       }
     }
     </script>
     <style scoped>
       .parent{
         color: red;
       }
     </style>
```

父组件：

```
     <template>
       <div id="app">
        <hello-world/>
        <p class="parent">parent</p>
       </div>
     </template>
     <script>
     import HelloWorld from './components/HelloWorld.vue'
     export default {
       name: 'App',
       components: {
         HelloWorld
       }
     }
     </script>
      <style>
       .son{
         color: blue;
       }
     </style>
```

输出结果：

![image-20201029134540897](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220506-1657022362068217.png)

由于子组件中的style标签加了scoped属性，所以它的样式只对自身组件有效，并不能影响其他组件

父组件中的style标签没有scoped属性，所以它的样式可以控制全局样式

假如把子组件中的scoped去掉也一样可以控制父元素的样式

`注意：只要不加scoped属性的都属于全局CSS可以控制全局的标签的，所以如果不加scoped，那么必须保证选择器不会影响到其他不相关的元素`

![image-20201029134837243](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220510-1657022362067216.png)

假设父子组件都加上scoped,父组件还是能控制子组件最外层的元素的，因为为了更好的布局，会默认在子组件第一个元素加上父元素的哈希值

![image-20210308033516460](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210308033517-1657022362068223.png)

**原理：scoped是通过给当前组件的元素加上一个随机唯一属性，然后通过属性选择器进行唯一确认，从而不会影响到其他组件的元素**

但是有一个特别要注意的点，假设我们在一个组件使用另一个组件，我们在父组件使用

scoped也是会影响子组件的最外层div的，这是为了方便父元素布局，但是只能影响子组件的最外层div，其他无法影响

但是scoped也会带来一个问题，由于有了scoped的限制，我们引用的一些echrts和ui框架组件就不能直接影响他们的样式了，如果去掉scoped就会污染全局，

解决方案：我们可以在该选择器前面加上/deep/就行了，比如下图，这样我们的样式就只会影响.tableHome下面的元素了，而不会污染全局

使用样式穿透后 生成的额唯一标识 都只会在父级元素中，子级元素中的唯一标识使用父级后生成中的。

![image-20201206233329101](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210405212413-1657022362068218.png)

#### 模块化概述

**传统开发模式的主要问题**

- 命名冲突
- 文件依赖

**通过模块化解决上述问题**

- 模块化就是单独的一个功能封装到一个模块（文件）中，模块之间相互隔离，但是可以通过特定的接口公开内部成员，也可以依赖别的模块
- 模块化开发的好处：方便代码的重用，从而提升开发效率，并且方便后期的维护

##### **浏览器端模块化规范**

1、AMD

2、CMD

##### **服务器端模块化规范**

CommonJS

1. 模块分为`单文件模块`与`包`

2. 模块成员导出：`module.exports`和`exports`

   module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量

   node为每一个模块提供了一个exports变量(可以说是一个对象)，指向 module.exports。这相当于每个模块中都有一句这样的命令 var exports = module.exports;

   **使用实例(文件均在同一个目录下）：**

   c.js

   ```
   const a = 10
   const b = 11
   exports.a = a
   module.exports.b = b
   ```

   d.js:

   ```
   const c = require('./c')
   console.log(c)
   ```

   输出结果：

   ![image-20201014225241275](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220432-1657022362068220.png)

   一般采用module.exports直接导出全部变量

   当c.js变成这样：

   ```
   const a = 10
   const b = 11
   module.exports = {
     a,
     b,
   }
   ```

   输出结果：

   ![image-20201014225244872](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220437-1657022362068221.png)

   可以实现一样的效果

   使用ES6的对象结构语法接受导入对象也是比较常见的：

   d.js：

   ```
   const { a, b } = require('./c')
   console.log(a)
   console.log(b)
   ```

   ![image-20201014225436175](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220441-1657022362069226.png)

3. 模块化成员导入：`require('模块标识符')`

##### **大一统的模块化规范-ES6模块化**

在ES6模块化规范诞生之前，Javascript社区已经尝试并提出了AMD、CMD、CommonJS等模块化规范。

但是，这些社区提出的模块化标准，还是存在一定的差异性与局限性，并不是浏览器与服务器通用的模块化标准，例如：

- AMD和CMD适用于浏览器端的Javascript模块化
- CommonJS适用于服务器端的Javascript模块化

因此，ES6语法规范中，在语言层面上定义了ES6模块化规范，是浏览器端与服务器端通用的模块化开发规范。

ES6模块化规范中定义：

- 每个js文件都是一个独立的模块
- `导入模块成员`使用`import`关键字
- `暴露模块成员`使用`export和export default关键字

> export和export default的区别

 **1.export与export default均可用于导出常量、函数、文件、模块等**
	   **2.在一个文件或模块中，export、import可以有多个，export default只可以有一个**
	   **3.通过export方式导出，在导入时要加{ }，而且名称要一一对应（可以用as来起别名），export default则不需要，名称也没有限制**	

**ES6模块化规范在服务器端的使用*（nodejs)*****

1、配置package.json，nodejs默认支持commonjs，需要在package.json配置type为module才可以

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220806204235061.png" alt="image-20220806204235061" style="zoom:67%;" />

2、通过babel实现，nodejs环境默认不支持ES6模块化规范

`babel是将高级、有兼容性的js，转换为低级、无兼容性的js的**语法转换工具**`

1. npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node

2. npm install --save @babel/polyfill

3. 在项目根目录创建文件babel.config.js

4. babel.config.js文件内容如下代码：

   ```
   const presets = [
   	[
   		"@babel/env",{
   			targets:{
   				edge:"17",
   				firefox:"60",
   				chrome:"67",
   				safari:"11.1"
   			}
   		}
   	]
   ]
   module.exports = {
   	presets
   }
   ```

5. 通过npx babel-node index.js 执行代码

***注释：babel运行之前，先读取babel.config.js配置文件，根据配置信息，进行代码转换***

**使用实例(文件均在同一个目录下）：**

m1.js:

```
	 let a = 10
     function show() {
       console.log('11111')
     }
     export default {
       a,
       show,
     }
     export let s1 = 'aaa'
     export function say() {
       console.log('asasas')
     }
```

index.js:

```
     import m1, { s1, say } from './m1.js'
     console.log(m1)
     console.log(s1)
     say()
```

输出结果：

![image-20201014231044003](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220444-1657022362069225.png)

**ES6模块化规范在浏览器端的使用**

**使用实例(文件均在同一个目录下）：**

a.js:

```
     var name = '小明'
     var age = 18
     var address = '广州'
     // 导出方式一，注意，只有这种方式才支持对象解构，export default不支持
     export { name, age }   
     //导出方式二：
     export var num1 = 1000
     export function mul(numl) {
       return num1
     }
     //导出方式三:
     export default address
```

b.js:

```
	//第一种导入方式
	import address, { name as alias, age, num1, mul } from './a.js'
     console.log(alias)
     console.log(age)
     console.log(num1)
     console.log(mul)
     console.log(address)
     //第二种导入方式：
     import address, * as aaa from './a.js'
	console.log(aaa.name + aaa.age + aaa.num1)
```

index.html:

```
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Document</title>
       </head>
       <body>
         <!-- <script src="./a.js" type="module"></script> -->
         <script src="./b.js" type="module"></script>
       </body>
     </html>
```

注：要使用export和import，在引入js文件的时候必须加上属性type='module',不需要全部文件都在html引入，只需要引入b.js，因为a.js已经在b.js引入了，a.js有作用的部分已经放到b.js中了，如果还在html引入就没有意义了

#### 插件

在Vue项目中，我们使用Element-ui,或者ant-design这些都需要使用Vue.use安装使用它，这是为什么？

比如：![image-20201031172437682](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220447-1657022362069229.png)

因为这样相当于全局注册了该组件，就可以在任何组件中使用了。（注意：某些组件不能通过Vue.use注册，比如axios,是因为它没有install方法

我们首先自己自定义一个全局组件吧

在index.js中：

![image-20201031172809099](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220450-1657022362069232.png)

Vue.components中的Filters是真正使用的插件名，比如<Filters/>,而不是<table/>

在main.js中注册(实际上就运行了下index.js中的table函数)

![image-20201031173145811](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220454-1657022362068224.png)

这样我们就可以在任何地方使用了

例如在user.vue中；
	![image-20201031173244669](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220457-1657022362069231.png)

实际上注册全局组件并不需要那么复杂，只需要两行代码就行，上面的方法只是更好的封装以及功能更强大

![image-20201031173930801](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220500-1657022362069227.png)

只需要

```
     import index from './components/index.vue'
     // Vue.use(index)
     Vue.component('Filters', index)
```

要注意，记得加上.vue后缀，不能省略，因为在.js文件中，如果没有加后缀名，会优先加载.js

两行代码就能搞定的事为什么要搞那么复杂呢？

实际上Vue.use也是基于这两行代码

Vue.use()中的参数是一个对象，然后会执行参数对象中的install方法，所以使用Vue.use也是相当于执行了Vue.component('Filters', index)，没有区别，只不过

Vue.use()还可以注册全局方法等有用的东西

```
    let MyPlugin={}
    MyPlugin.install = function (Vue, options) {
       // 1. 添加全局方法或 property
       Vue.myGlobalMethod = function () {
         // 逻辑...
       }
       // 2. 添加全局资源
       Vue.directive('my-directive', {
         bind (el, binding, vnode, oldVnode) {
           // 逻辑...
         }
         ...
       })
       // 3. 注入组件选项
       Vue.mixin({
         created: function () {
           // 逻辑...
         }
         ...
       })
       // 4. 添加实例方法
       Vue.prototype.$myMethod = function (methodOptions) {
         // 逻辑...
       }
     }
     export default Myplugin
```

#### 				vue基本语法

##### Mustachae语法

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220515-1657022362069230.png" alt="image-20210222130408908" style="zoom:80%;" />

##### v-once

>  该指令后面不需要跟任何表达式
>
>  该指令表示元素和组件不会随着数据的改变而改变。 

```
 <div id="app">
        <h2>{{message}}</h2>
        <!-- v-once:
        该指令后面不需要跟任何表达式
        该指令表示元素和组件不会随着数据的改变而改变。 -->
        <h2 v-once>{{message}}</h2>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        let app=new Vue({
            el:'#app',
            data:{
                message:"你好呀"
            }
        })
    </script>
```

##### v-html、v-text

> 用来渲染dom innerHTML和innerText的

```
  <div id="app">
        <h2>{{url}}</h2>
        <h2 v-html="url"></h2>   //百度一下超链接
        //里面的7777会被覆盖掉，所以很少使用v-text
        <h2 v-text="url">7777</h2>   //<a href="http://www.baidu.com">百度一下</a>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        let app=new Vue({
            el:"#app",
            data:{
                url:`<a href="http://www.baidu.com">百度一下</a>`
            }
        })
    </script>
```

##### v-pre

> 不会处理文本内容，保留原始内容和格式

```
<div id="app">
        <h2>{{message}}</h2>    //你好
        <h2 v-pre>{{message}}</h2>  //{{message}} ，不做处理
    </div>
    <script src="./js/vue.js"></script>
    <script>
        let app=new Vue({
            el:"#app",
            data:{
                message:"你好"
            }
        })
    </script>
```

v-cloak

> 这个用来解决闪烁问题

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 属性选择器 */
        [v-cloak]{
            display: none;
        }
    </style>
</head>
<body>
    <div id="app" v-cloak>{{message}}</div>
    <script src="./js/vue.js"></script>
    
    <script>
        //在vue解析之前，div中有一个属性v-cloak
        //在vue解析之后，div中没有一个属性v-cloak
        setTimeout(function(){
            let app=new Vue({
            el:"#app",
            data:{
                message:"你好呀"
            }
        })
        },1000)
    </script>
```

##### v-bind

> v-bind  主要用于属性绑定，Vue官方提供了一个简写方式 **:bind**，例如：

```
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```

###### 绑定HTML Class

**一、对象语法：**

我们可以给v-bind:class 一个对象，以动态地切换class。注意：v-bind:class指令可以与普通的class特性共存

HTML代码：

```
<ul class="box" v-bind:class="{‘textColor‘:isColor, ‘textSize‘:isSize}">
    <li>学习Vue</li>
    <li>学习Node</li>
    <li>学习React</li>
</ul>
```

CSS代码：

```
.box{
    border:1px dashed #f0f;
}
.textColor{
    color:#f00;
    background-color:#eef;
}
.textSize{
    font-size:30px;
    font-weight:bold;
}
```

JS代码：

```
var vm= new Vue({
    el:'.box',
    data:{
        isColor:true,
        isSize:true
    }
})
```

**也可以直接绑定数据里的一个对象：**

HTML代码：

```
<ul class="box" :class="classObject">
    <li>学习Vue</li>
    <li>学习Node</li>
    <li>学习React</li>
</ul>
```

JS代码：

```
var vm= new Vue({
    el:‘.box‘,
    data:{
        classObject:{
            ‘textColor‘:true,
            ‘textSize‘:false //不渲染，注意看下面的截图
        }
    }
})
```

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwKioL1gLE7jBVrvSAACSP3ftTFM106.png" alt="技术分享" style="zoom:67%;" />

<demo src="../demo/v-bing_class.vue" desc="例子"></demo>

**二、数组语法**

我们可以把一个数组传给v-bind:class，以应用一个class列表

HTML代码：

```
<ul class="box" :class="[classA, classB]">
    <li>学习Vue</li>
    <li>学习Node</li>
    <li>学习React</li>
</ul>
```

JS代码：

```
var vm= new Vue({
    el:‘.box‘,
    data:{
        classA:‘textColor‘,
        classB:‘textSize‘
    }
})
```

**如果想根据条件切换列表中的class，可以用三目运算**

HTML代码：

```
<ul class="box" :class="[isA?classA:‘‘, classB]">
    <li>学习Vue</li>
    <li>学习Node</li>
    <li>学习React</li>
</ul>
```

JS代码：

```
var vm= new Vue({
    el:‘.box‘,
    data:{
        classA:‘textColor‘,
        classB:‘textSize‘,
        isA:false 
    }
})
```

在这个例子中，首先判断isA的boolean值，如果为true，则渲染classA；如果为false，则不渲染。classB没有做三目运算，所以是始终显示的，看看页面截图

[<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwKioL1gLFw7zSxVrAACvZz_XHmk974.png" alt="技术分享" style="zoom:80%;" />](http://s2.51cto.com/wyfs02/M01/89/2F/wKioL1gLFw7zSxVrAACvZz_XHmk974.png)

**对于多个class，可以这么写：**

```
<div v-bind:class="[classA, { classB: isB, classC: isC }]">
```

###### 绑定内联样式

**一、对象语法**

v-bind:style 的对象语法十分直观--非常像CSS，其实它是一个Javascript对象，**CSS属性名必须用驼峰命名法**（官方文档写的是既可以用驼峰也可以用 短横分隔命名法），但是用短横分隔是会报错的，属性值如果没有加双引号，那么会被当成变量解析

HTML代码：`（这里演示CSS属性名用短横分隔报错）,注意css属性样按照驼峰命名法的规则去写`

```
	<div id="box" :style="{color:activeColor, fontSize:size}">红嘴绿鹦哥</div>
```

JS代码：

```
var vm= new Vue({
    el:‘#box‘,
    data:{
        activeColor:‘#f00‘,
        size:‘30px‘,
        shadow:‘5px 2px 6px #000‘
    }
})
```

**二、数组语法**

可将多个样式对象应用到一个元素上

HTML代码：

```
<div class="box" :style="[styleObjectA, styleObjectB]">好好学习，天天向上</div>
```

JS代码：

```
var vm2= new Vue({
    el:‘.box‘,
    data:{
        styleObjectA:{
            fontSize:‘36px‘,
            color:‘blue‘
        },
        styleObjectB:{
            textDecoration:‘underline‘
        }
    }
})
```

###### 添加图片SRC地址

给img标签的src属性赋值时，按照传统的方法{{url}}：

HTML代码：

```
<img class="box" :src="url" >
```

JS代码：

```
var vm= new Vue({
    el:‘.box‘,
    data:{
        url:‘https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png‘
    }
})
```

![image-20201121213917611](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220519-1657022362070233.png)

###### &lt;component>内置组件 + v-bind: is：实现动态组件

>  ##### &lt;component> 元素是vue 里面的一个内置组件。
>
>  在&lt;component>里面使用 v-bind: is，可以实现动态组件的效果。
>
>  也就是说is等于什么这里就渲染哪个组件，而不需要使用v-if和v-else这些方法来筛选，并且能在同一个位置实现响应式动态显示不同组件

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc5NjYzMQ==,size_27,color_FFFFFF,t_70.png" alt="img" style="zoom: 80%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc5NjYzMQ==,size_27,color_FFFFFF,t_70-1657022361785149.png" alt="img" style="zoom:80%;" />

使用实例：

```
<div id="app">
     <component v-bind:is="whichcomp"></component>//组件渲染的位置
     <button v-on:click="choosencomp('a')">a</button>
     <button v-on:click="choosencomp('b')">b</button>
     <button v-on:click="choosencomp('c')">c</button>
</div>
```

```
//做一个包含列表组件
//需要给组件创建props--"todos",用于存放组件通过绑定prop --"todo"获取实例中的data数据"todolists"
var app=new Vue({
  el: '#app',
	components:{
		acomp:{
		   template:`
				<p>这里是组件A</p>
			`
			},
		bcomp:{
		   template:`
				<p>这里是组件B</p>		`
		},
		ccomp:{
			template:`
				<p>这里是组件C</p>
		`
		}},
	data:{
		whichcomp:""
	},
	methods:{
	   choosencomp:function(x){
	   this.whichcomp=x+"comp"}
   }
})
```

效果：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220523-1657022362072234.png" alt="image-20201121162128826" style="zoom:80%;" />

##### v-for

> 循环

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .active{
            color: red;
        }
    </style>
</head>
<body>
    <div id="app">
        <ul>
            <li v-for="(item,index) in movies" @click="active(index)" :class={active:index==flag}>{{item}}</li>
        </ul>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        let app=new Vue({
            el:"#app",
            data:{
                flag:-1,
          
                movies:['海王','海贼王','七龙珠','进击的巨人']
            },
            methods:{
                active:function(index){
                    this.flag=index;
                }
           }
        })
    </script>
```

组件的key属性，我们应该在使用v-for的时候使用:key = ''，但是不要使用index,可以使用item,性能会高很多

参考链接：https://cn.vuejs.org/v2/api/#key，https://blog.csdn.net/qq_41609404/article/details/84064064

​				https://www.bilibili.com/video/BV15741177Eh?p=38&spm_id_from=pageDriver

##### v-model

v-model可以实现输入框和值的双向绑定，利用@input="msg=$event.target.value"监听输入并重新赋值和v-bind：value=“msg"

```
     <input v-model="sth" />
     //  等同于
     <input :value="sth" @input="sth = $event.target.value" /> //自html5开始,input每次输入都会触发oninput事件，所以输入时input的内容会绑定到sth中，于是sth的值就被改变;
     //$event 指代当前触发的事件对象;
     //$event.target 指代当前触发的事件对象的dom;
     //$event.target.value 就是当前dom的value值;
     //在@input方法中，value => sth;
     //在:value中,sth => value;
```

v-model的修饰符

1. lazy

   在默认情况下，`v-model` 在input事件中同步输入框的值与数据。

   在添加了lazy之后，会把 `oninput` 事件改成 `onchange` 事件。

   以下是核心代码

   ```
     <div id="app">
       <input type="text" v-model.lazy="msg">
       <p>{{msg}}</p>
     </div>
   </template>
   
   <script>
   export default {
     name: 'app',
     data () {
       return {
         msg: ''
       }
     }
   }
   </script>
   ```

   <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-1657022361785150.webp" alt="img" style="zoom:67%;" />

   可以看到，input框输入的内容并不会实时更新到p标签里。因为这里使用了 `lazy` 修饰符，把 `oninput` 事件改成 `onchange` 事件。

2. number

   `number` 修饰符会把 `v-model` 的值转换成数值类型。

   以下是核心代码

   ```xml
   <template>
     <div id="app">
       <input type="text" v-model.number="msg">
       <p>{{msg}} : {{typeof(msg)}}</p>
     <div/
   <template/>
   <script>
   export default {
     name: 'app',
     data () {
       return {
         msg: ''
       }
     }
   }
   </script>
   ```

   <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-1657022361785151.webp" alt="img" style="zoom:67%;" />

   需要注意的是，如果输入的第一个字是字符串，那`number`这个修饰符就不会生效。
    输入的第一个只能是数字或者小数点或者是正负号。

   从上图可以看到，如果一开始输入的是数字，后面跟着字符串。再`number`的转换后，会把后面的字符串删掉。

3. trim

   `trim`的作用是过滤用户输入时首尾的空格字符。

   以下是核心代码

   ```
   <template>
     <div id="app">
       <input type="text" v-model.trim="msg">
     </div>
   </template>
   <script>
   export default {
     name: 'app',
     data () {
       return {
         msg: ''
       }
     },
     watch: {
       msg(newValue) {
         console.log(newValue);
       }
     }
   }
   </script>
   ```

   <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-1657022361785152.webp" alt="img" style="zoom:67%;" />

   这里用了 `watch` 来监听 `msg` ，每当 `msg` 的值有更新，就会在控制台输出更新后的值。

   从控制台可以看到，我们在值的前后输入空格，通过 `trim` 转换后得到的新值首位的空格都是被清除了。

##### v-on

> `v-on`就是**用于绑定事件的**
> 例如：有个按钮，当点击的时候执行一些操作

```
<div class="app">
    <button v-on:click="myclick">click me</button>
</div>  
```

上述代码中，`v-on:`后面的值是一个方法，可以写成`myclick()`，没有参数可以写成`myclick`。
 另外这种事件对应的方法不是定义在`data`选项中，而是定义在`vue`实例的`methods`选项中，里面都是一个一个的`function`

```
var app = new Vue({
    el:'.app',
    data:{
        
    },
    methods:{
        myclick:function(){
            console.log(111111);
        }
    }
});
```

```
  <div id="app">
    <ul>
    	//这里的index变量不需要加this
      <li @click="active(index)">按钮</li>
    </ul>
  </div>
  <script src="./js/vue.js"></script>
  <script>
    let app = new Vue({
      el: "#app",
      data: {
        index: '参数'
      },
      methods: {
        active: function (index) {
          console.log(index);   //参数
        }
      }
    })
  </script>
```

`v-on`也可以绑定多个事件
多个事件可以单独多个v-on绑定

```
<div class="app">
    <button v-on:mouseenter='onenter' v-on:mouseleave='leave'>click me</button>
</div>  
```

也可以使用一个`v-on`，里头用对象的形式书写，对象的键名就是事件名，对象的键值就是对应事件要执行的方法。多个事件之间通过`,`分开

```
<div class="app">
    <button v-on="{mouseenter:onenter,mouseleave:leave}">click me</button>
</div>  
```

当然也可以混合使用

```
<div class="app">
    <button v-on="{mouseenter:onenter,mouseleave:leave}" v-on:click="myclick">click me</button>
</div>  
```

例子：在绑定form表单中的提交事件时

```jsx
<div class="app">
    <form v-on:submit='onSubmit($event)'>
        <!-- $event是vue里面的事件对象，vue能认识 -->
        <input type="text" >
        <button type="submit">提交</button>
    </form>
</div>  
```

```
var app = new Vue({
    el:'.app',
    data:{
        
    },
    methods:{
        onSubmit:function(e){
            e.preventDefault();
            //阻止浏览器的默认行为，因为在表单提交的时候，浏览器会默认发送一个get或者post请求到指定页面，刷新整个页面。
            console.log("onSubmited");
        }
    }
});
```

注意：
 `$event`是`vue`里面的事件对象，`vue`能认识
 在表单提交的时候，浏览器会默认发送一个`get`或者`post`请求到指定页面，刷新整个页面。阻止浏览器的默认行为，可以用事件对象`e.preventDefault()`

但像上述form表单提交的这种浏览器默认事件，每次都要写`e.preventDefaul()`其实还是比较麻烦。`vue`中可以更好的解决，只要在事件的后面添加一个`prevent`修饰符即可，表示阻止默认事件

```jsx
<div class="app">
    <form v-on:submit.prevent='onSubmit'>
        <input type="text" >
        <button type="submit">提交</button>
    </form>
</div>  
```

```jsx
var app = new Vue({
    el:'.app',
    data:{
        
    },
    methods:{
        onSubmit:function(){
            console.log("onSubmited");
        }
    }
});
```

绑定事件中，除了`prevent`修饰符，还有`stop`,表示停止冒泡事件

```jsx
<div class="app">
    <div v-on:click.stop='onClick'>
    </div>
</div>  
```

另外,当绑定的事件是`keyup`、`keypress`、`keydown`键盘事件时，当需要判断按下是回车时。
 在以前我们需要判断事件对象的`keyCode`，虽然功能特别简单，但是每次去写还是特别麻烦。所以对应也有修饰符，如enter修饰符，表示按键是enter键

```jsx
<div class="app">
    <div v-on:keydown.enter='mykeydownFn'>
    </div>
</div>  
```

跟`v-bind`一样，v-on也非常常用，对应也有快捷方式：
 `v-on:事件名 可以简写为 @事件名

```jsx
<div class="app">
    <div @keydown.enter='mykeydownFn'>
    </div>
</div>  
```

**v-on 修饰符**

- .stop - 调用 event.stopPropagation()，禁止事件冒泡。
- .prevent - 调用 event.preventDefault()，阻止事件默认行为。
- .capture - 添加事件侦听器时使用 capture 模式。
- .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
- `.native - 监听组件根元素的原生事件。`
- .once - 只触发一次回调。
- .left - (2.2.0) 只当点击鼠标左键时触发。
- .right - (2.2.0) 只当点击鼠标右键时触发。
- .middle - (2.2.0) 只当点击鼠标中键时触发。
- .passive - (2.3.0) 以 { passive: true } 模式添加侦听器
- .native   如果你想在某个组件的根元素上绑定事件，直接使用 @click=''function' 是不生效的，我们可以添加.native修饰符 @click.native=''function''

这些修饰符可以连着使用，比如：

```
@click.native.prevent='fun'
```

#### 数据响应式要注意的点

假如data定义了一个对象，boy{name:'laji'},如果我们修改name为'niubi',那么这个是可以实现响应式的，模板会对应更新的，

但是我想增加一个属性呢，比如增加一个属性age:11（this.boy.age=18这个方式增加),这不是响应式的，模板是不会随着更新的，如果想要实现响应式，有两种方法

1. 我们定义对象的时候可以先定义age:'',这样怎么都是响应式的，但是这只能实现改，不能增加
2. 要增加或者设置的话都可以使用这个方法this.$set(this.boy,'age',18)——参数分别是对象，属性，值

#### 组件的使用

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210409100354-1657022362069228.png" alt="image-20210224172258326" style="zoom: 50%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220527-1657022362074251.png" alt="image-20210224172905950" style="zoom: 50%;" />

##### 组件全局注册

**组件全局注册基本使用一：**

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="../js/vue.js"></script>
  <title>Document</title>
</head>
<body>
  <div id="app">
    <cpn></cpn>
    <cpn></cpn>
  </div>
  <script>
    //1.构建组件构造器对象
    const cpn = Vue.extend({
      template: `<div>  <h2>我是标题</h2> <
                p > 我是内容， 哈哈哈哈 < /p></div > `
    })
    //2.注册组件
    Vue.component('cpn', cpn)
    const app = new Vue({
      el: "#app",
      data: {
        message: "你好啊"
      }
    })
  </script>
</body>
</html>
```

效果：

![image-20210224173053313](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220531-1657022362073235.png)

**组件全局注册基本使用二：**

```
     // 定义一个名为 button-counter 的新组件
     Vue.component('button-counter', {
       data: function () {
         return {
           count: 0
         }
       },
       template: '<button v-on:click="count++">You clicked me {{ count }} times.</butto
     })
```

**组件全局注册基本使用三：**

> 如果你恰好使用了 webpack (或在内部使用了 webpack 的 [Vue CLI 3+](https://github.com/vuejs/vue-cli))，那么就可以使用 `require.context` 只全局注册这些非常通用的基础组件。这里有一份可以让你在应用入口文件 (比如 `src/main.js`) 中全局导入基础组件的示例代码：

```
     import Vue from 'vue'
     const requireComponent = require.context(
       // 其组件目录的相对路径
       './',
       // 是否查询其子目录
       false,
       // 匹配基础组件文件名的正则表达式
       /Base[A-Z]\w+\.(vue|js)$/
     )
     console.log(requireComponent.keys());
     requireComponent.keys().forEach(fileName => {
       // 获取组件配置
       const componentConfig = requireComponent(fileName)
       // 获取组件的 PascalCase 命名
       const componentName = fileName.replace(/^\.\//,'').replace(/\.vue/,'')
       console.log(componentName);
       // 全局注册组件
       Vue.component(
         componentName,
         // 如果这个组件选项是通过 `export default` 导出的，
         // 那么就会优先使用 `.default`，
         // 否则回退到使用模块的根。
         componentConfig.default || componentConfig
       )
     })
```

参考资料：https://cn.vuejs.org/v2/guide/components-registration.html

##### 组件局部注册

**组件局部注册基本使用一：**

```
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <script src="../js/vue.js"></script>
       <title>Document</title>
     </head>
     <body>
       <div id="app">
         <cpn></cpn>
       </div>
       <div id="app2">
         <cpn></cpn>
       </div>
       <script>
         //1.构建组件构造器对象
         const cpn = Vue.extend({
           template: `<div>  <h2>我是标题</h2> <p> 我是内容， 哈哈哈哈 </p></div > `
         const app = new Vue({
           el: "#app",
           data: {
             message: "你好啊"
           },
           // 局部注册,只能在注册的实例上使用
           components: {
             cpn: cpn
           }
         })
         const app2 = new Vue({
           el: "#app2",
           data: {
             message: "你好啊"
           }
         })
       </script>
     </body>
     </html>
```

效果：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220534-1657022362073237.png" alt="image-20210224174635756" style="zoom:67%;" />

**组件局部注册基本使用二：**

```
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <script src="../js/vue.js"></script>
       <title>Document</title>
     </head>
     <body>
       <div id="app">
         <cpn></cpn>
         <button-counter></button-counter>
       </div>
       <script>
         // 全局注册一个名为 button-counter 的新组件
         Vue.component('button-counter', {
           data: function () {
             return {
               count: 0
             }
           },
           template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
         })
         const app = new Vue({
           el: "#app",
           data: {
             message: "你好啊"
           },
           // 局部注册
           components: {
             cpn: {
               template: `<div>  <h2>我是标题</h2> <p> 我是内容， 哈哈哈哈 </p></div > `
             }
           }
         })
       </script>
     </body>
     </html>
```

效果：

![image-20210224203444970](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220537-1657022362073239.png)

**组件模板的分离写法（推荐使用）：**

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220542-1657022362073236.png" alt="image-20210225015015539" style="zoom: 50%;" />

```
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <script src="../js/vue.js"></script>
       <title>Document</title>
     </head>
     <body>
       <div id="app">
         <cpn></cpn>
         <cpn2></cpn2>
       </div>
       <!--1、script标签，注意：类型必须是text/template-->
       <!-- <script type="text/template" id='cpn'>
         <div>
           <h2>组件模板分离</h2>
         </div>
       </script> -->
       <!--2、template标签->
       <template id='cpn'>
         <div>
           <h2>组件模板分离</h2>
         </div>
       </template>
       <script>
         //注册一个全局组件
         Vue.component('cpn', {
           template: '#cpn'
         })
         const app = new Vue({
           el: "#app",
           data: {
             message: "你好啊"
           },
           // 局部注册
           components: {
             cpn2: {
               template: '#cpn'
             }
           }
         })
       </script>
     </body>
     </html>	
```

效果：

![image-20210225014934504](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220545-1657022362073238.png)

**父子组件：**

实例：

```
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <script src="../js/vue.js"></script>
       <title>Document</title>
     </head>
     <body>
       <div id="app">
         <!-- <cpn></cpn> -->
         <cpn2></cpn2>
       </div>
       <script>
         //1.构建组件构造器对象
         const cpn = Vue.extend({
           template: `<div>  <h2>我是标题</h2> <p> 我是内容， 哈哈哈哈 </p></div > `
         })
         const cpn2 = Vue.extend({
           template: ` <div> cpn2开始 <cpn></cpn>  <h2>我是标题2</h2> <p> 我是内容，呵呵呵呵 <br>cpn2结束   </p></div > `,
           //继续使用组件
           components: {
             cpn: cpn
           }
         })
         const app = new Vue({
           el: "#app",
           data: {
             message: "你好啊"
           },
           // 局部注册
           components: {
             cpn2: cpn2
           }
         })
       </script>
     </body>
     </html>
```

效果：

![image-20210224175523977](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220549-1657022362073241.png)

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220553-1657022362073240.png" alt="image-20210225152440433" style="zoom:67%;" />

#### Vue实例和组件

> Vue实例是Vue应用的启动器，Vue组件是Vue实例的扩展。

##### 1. Vue实例

通过构造函数可以创建一个Vue的**根实例**。

SPA应用中，只会创建一个Vue根实例，应用都是通过这个根实例启动的。

实例化 Vue 时，需要传入一个选项对象，它可以包含数据（data），模板（template），挂载元素（el），方法（methods）与生命周期钩子函数（created，mounted...）等选项。下面是一个真实项目中定义的Vue实例：

```jsx
import Vue from 'vue';
import App from './App.vue'
...
// 激活Vue调试工具vue-devtools
Vue.config.devtools = true;

new Vue({
    router, // react-router
    store,  // vuex
    el: '#app', // 需要渲染的DOM节点
    render: h => h(App) // //h是createElement 的别名，创建/加载组件
});
```

##### 2. Vue组件

Vue组件是被扩展的Vue实例，同Vue实例类似，它也需要传入一个选项对象，包含数据，模板，生命周期钩子函数等等。

组件分为局部组件和全局组件。

###### (1)局部组件

局部组件只能在所定义的Vue实例中使用，格式如下：

```csharp
//定义<my-component>组件
new Vue({
  // ...
  components: {
    // <my-component> 将只在父模板可用
    'my-component': {
      template: '<div>A custom component!</div>'
    }
  }
})
```

###### (2)全局组件

**第一种方式：利用Vue提供的静态函数`component`注册：**

```jsx
Vue.component('my-component', {
  template: '<div>A custom component!</div>',
  //必须是用函数返回数据模型，这样才能让多个组件实例拥有自己的数据模型
  data: function () {
    return data;
  }
})
```

**第二种方式：单文件组件**

定义一个后缀为`.vue`的文件，利用webpack编译处理。

单文件组件的最大优点是，可以将组件相关的HTML，CSS，JS都定义在`.vue`文件内，默认支持CSS模块化（样式仅在该组件内有效），JavaScript模块化（CommonJs模块）。

参考官网例子：

<img src="https:////upload-images.jianshu.io/upload_images/25750-d6d488ce3e040f4a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt="img" style="zoom:67%;" />

注意，`<style>`有`scope`属性后，能够将标签内部的CSS选择器自动加上后缀，使其仅应用在此组件内。下图是编译后的组件内联样式：

![img](https:////upload-images.jianshu.io/upload_images/25750-2fc1686df9c8b5c6.png?imageMogr2/auto-orient/strip|imageView2/2/w/595/format/webp)

vue文件组件也支持CSS预处理语言，比如scss或者less。如需使用scss，定义`lang`属性即可：

```xml
<style lang="scss" scoped>...</style>
```

webpack.config中需要加载vue-loader来解析`.vue`文件（下面配置支持在vue组件中使用scss语法）。

```tsx
module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            ......
        ]
    },
```

##### 小结

建议采用单文件组件方式创建Vue项目，这样可以更好的和路由插件配合。
 随着项目不断迭代，组件复杂度会随之增加，单文件组件有着更好的可读性和可扩展性，非常适合大中型项目。

详情

#### 父子组件通信

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210421223218-1657022362076253.png" alt="image-20201027214048493" style="zoom:80%;" />

##### 通过props向子组件传递数据（传）

父组件：

```
<template>
  <div id="app">
    <child :sonmsg="parentmsg"></child>
  </div>
</template>
<script>
import child from './views/child'
export default {
  name: 'App',
  components: {
    child,
  },
  data() {
    return {
      parentmsg: 'parentmsg',
    }
  },
}
</script>
<style></style>
```

子组件（用法一）：

```
<template>
  <div>
    <h3>我是子组件</h3>
    <h3>获取父组件的数据:{{ sonmsg }}</h3>
  </div>
</template>
<script>
export default {
  name: 'child',
   // 不检测类型,全盘接受
   props: ["sonmsg"],
}
</script>
<style scpoed></style>
```

子组件（用法二）：

```
<template>
  <div>
    <h3>我是子组件</h3>
    <h3>获取父组件的数据:{{ sonmsg }}</h3>
  </div>
</template>
<script>
export default {
  name: 'child',
  data() {
    return {}
  },
  props: {
    //定义方式一
    sonmsg: String,
    //定义方式二
    // sonmsg: {
    //   type: Number,
    //   default: 10,//如果父组件没有传值那么默认就为10，
    // 如果是数组或对象，默认值必须是一个函数来返回
    //   propE: {
    // 	type: Array,
    // 	default: () => []
    // }
    // },
    // 定义方式三:
    // sonmsg: {
    //   type: Number,
    //   required: true, //必须传，不然报错
    // },
    //定义方式四
    // 自定义一个验证函数
    // sonmsg: {
    //   validator: (value) => {
    //     return value > 1000 //当函数返回 false 时，输出警告。该函数命名是规定叫validator
    //   },
    // },
  },
}
</script>
<style scpoed></style>

```

结果：

![image-20201027220029318](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220557-1657022362073242.png)

`注意：经过测试发现，经过props传值后参数，在Props定义的该参数和父组件是一样的，由于对象是引用类型，所以当父组件把一个对象传给一个子组件的时候，实际上引用的是用一个对象，这时候子组件该值改变也会同时改变父组件该对象的值`（但实际并不应该这样做，这样违背了数据单向流原则）

实际上不符合上面规则也能正常显示，但是会报错

上面我们在vue的父子组件传值的时候，我们先需要的子组件上用props注册一些属性：

```
     <template>
         <div>
             props:{{name}},{{age}} 或者 {{$props['name']}},{{$props['age']}}
         </div>
     </template>

     export default{
         props: ['name','age']
     }
```

然后父组件调用的时候当属性来传值

```
	<child name="rick" :age="18"></child>
```

如果我们给child传props没有注册的属性，我们就要用$attrs来取了

parent：

```
	<child name="rick" :age="18" gender="male"></child>
```

child:

```
     <template>
         <div>
             props:{{name}},{{age}} 或者 {{$props['name']}},{{$props['age']}} 
             <br>
             attrs: {{$attrs['gender']}}  在$attrs里面只会有props没有注册的属性
         </div>
     </template>

     export default{
         props: ['name','age']
     }
```

当然这个$attrs是vue2.4才推出的，为了简化父组件和孙组件的传值：

```
	父组件 template（假设gender属性没有被props注册）:
```

```
	<child1 gender="male"></child1>
```

<child2 v-bind="$attrs"></child2>，这是v-bind唯一可以直接跟等号的特殊写法):

```
	<child2 v-bind=”$attrs”></child2>
```

在child2里面，就可以直接用props注册gender,来直接获取来自“祖父组件”的gender值了（当然，不注册也是可以用$attrs来取值的）

##### 通过事件向父组件发送消息（传）

父组件：

```
<template>
  <div id="app">
    <child @itemClick="parentfun"></child>
  </div>
</template>
<script>
import child from './views/child'
export default {
  name: 'App',
  components: {
    child,
  },
  methods: {
    //不接收参数
    parentfun() {
      console.log('子传父')
    },
    //接收参数
    parentfun(item) {
      console.log(item)
      console.log('子传父')
    },
  },
}
</script>
<style></style>
```

子组件：

```
<template>
  <div>
    <button @click="btnClick(name)">子组件按钮，发射事件</button>
  </div>
</template>
<script>
export default {
  name: 'child',
  data() {
    return {
      name: '我是子组件中的name',
    }
  },
  methods: {
    //不传参数
    btnClick() {
      //发射
      this.$emit('itemClick')
    },
    //传参数
    btnClick(item) {
      //发射
      this.$emit('itemClick', item)
    },
  },
}
</script>
<style scpoed></style>
```

##### 父组件访问子组件（访）

> 父组件访问子组件：使用$children或$refs reference(引用)
>
> this.$children或者$refs是一个数组类型，它包含子组件所有对象

**$children**

直接输出this.$children:

```
  created() {
    console.log(this.$children)
  },
```

输出

![image-20201028001432768](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220601-1657022362074249.png)

$this.children是所有子组件的一个数组，通过它可以访问它所有子组件的所有数据和方法等等，但是$this.children是通过数组下标来访问子组件数据，比如

```
	console.log(this.$children[0].name)  //name是子组件的数据
	console.log(this.$children[0].btnClick)  //btnClick是子组件的方法
```

可以直接访问子组件的数据和方法，不需要this.$children.data.name或者this.$children.methods.btnClick

但是this.$children有一个缺点，就是需要通过下标来访问子组件，假如有多个子组件，就得输出区查看对应子组件得下标值才能确定用哪个下标

**$refs**

直接输出this.$refs:

```
  created() {
    console.log(this.$refs)
  },
```

输出

![image-20201028002305031](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220604-1657022362076252.png)

输出为一个空对象

$refs默认为一个空数组，但是在对应得子组件加上ref="自定义名字",就能访问该子组件了，并且可以通过该自定义名称来访问

当我在子组件child加上ref时

![image-20201028002501028](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210421223202-1657022362077255.png)

这时候再输出$refs

![image-20201028002530448](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220608-1657022362073243.png)

这时候就可以通过自定义名称访问子组件了，

```
	console.log(this.$refs.one.name)  //name是子组件的数据
	console.log(this.$refs.one.btnClick)  //btnClick是子组件的方法
```

`最重要一点是,通过ref可以直接获取普通原宿的dom，这样就不需要document.get什么了，`

例：

```
<template>
  <div class="com-container" ref="test">
    <div class="com-chart" ref="seller_ref">你好</div>
  </div>
</template>
<script>
export default {
  name: 'Seller',
  data() {
    return {}
  },
  components: {},
  methods: {
  },
  mounted() {
    console.log(this.$refs.test)      
    console.log(this.$refs.seller_ref.innerHTML)
  },
}
</script>
```

输出：

![image-20210106101430868](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220612-1657022362073244.png)

##### 子组件访问父组件（访）

> 子组件访问父组件：使用$parent

子访问父由于只可能有一个父组件（定义在模板里面的不是子组件，只有调用了才算子组件，就算同一个模板在不同组件里面它们也是独立的，只可能有一个父组件），所以$parent非常简单

直接输出：

```
  created() {
    console.log(this.$parent)
  },
```

输出：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220615-1657022362073245.png" alt="image-20201028003140417" style="zoom:67%;" />

如果需要访问父组件的数据或者方法可以这样访问：

```
console.log(this.$parent.name)  //name是父组件的数据
console.log(this.$parent.btnClick)  //btnClick是父组件的方法
```

虽然$children、$refs和$parent非常简单易用，但是会让组件之间不够独立，尽量减少使用

##### this.$root

> 当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。

#### provide/inject  

#### 基本使用

> `provide` 和 `inject` 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。
>
> 定义说明：这对选项是一起使用的。以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
>
> 通俗的说就是：组件得引入层次过多，我们的子孙组件想要获取祖先组件得资源，那么怎么办呢，总不能一直取父级往上吧，而且这样代码结构容易混乱。这个就是这对选项要干的事情。
>
> provide：是一个对象，或者是一个返回对象的函数。里面呢就包含要给子孙后代的东西，也就是属性和属性值。
>
> `inject` 选项应该是：
>
> - 一个字符串数组，或
> - 一个对象，对象的 key 是本地的绑定名，value 是：
>   - 在可用的注入内容中搜索用的 key (字符串或 Symbol)，或
>   - 一个对象，该对象的：
>     - from 属性是在可用的注入内容中搜索用的 key (字符串或 Symbol)----`非必须，如果没有的话则以对象键名为准`
>     - default 属性是降级情况下使用的 value

**父组件定义：**

```
     <script>
     export default {
       // 父组件通过provide将自己的数据以对象形式传出去
       provide(){
         return {
           parentValue:"我是父组件的值啊"
         }
       }
     };
     </script>
```

**子孙组件接受方式：**

```
     <script>
     export default {
       // inject:["parentValue"], // 使用一个注入的值作为数据入口：
       inject:{
         // 使用一个默认值使其变成可选项
         parentValue: { // 键名，相当于别名
           from: 'parentValue', // 来源
           default: 'parentValue' // 默认值
         }
       }
     }
     </script>
```

祖先组件中通过 `provider` 来提供变量，然后在子孙组件中通过 `inject` 来注入变量。`provide / inject API` 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。`provide` 和 `inject` 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。

**例子：**

*父组件*

```
     <template>
       <div>
         <child-a></child-a>
         <el-button @click='change'>change</el-button>
       </div>
     </template>
     <script>
     import ChildA from '@/components/provide/ChildA'
     export default {
       provide: {
         name: '这是一个 provide 的数据'
       },
       components: { ChildA },
       methods: {
         change () {
           this._provided.name = '修改一下看看子组件变不变'
         }
       }
     }
     </script>
     <style scoped>
     div{
       margin: 50px;
     }
     </style>
```

*子组件*

```
     <template>
       <div>
         来自父组件的内容： {{name}}
       </div>
     </template>
     <script>
     export default {
       inject: ['name']
     }
     </script>
```

可以看到，在父组件中定义 `provide`，在子组件中使用 `inject` 就可以得到父组件 `provide` 中的值，但是我们点击修改父组件的值子组件的值并不会发生改变。

在官网文档中关于 provide/inject 有这么一个提示：

提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。`然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的`（*这句话的意思就是，如果直接传一个基本变量，就算是data、computed里面的也不会响应式，而是应该绑定一个响应式对象*）。

也就是说，Vue 不会对 provide 中的变量进行响应式处理。所以，要想 inject 接受的变量是响应式的，provide 提供的变量本身就需要是响应式的。

由于组件内部的各种状态就是可响应的，所以我们直接在根组件中将组件本身注入 provide，此时，我们可以在后代组件中任意访问根组件中的所有状态，根组件就成为了全局状态的容器，仔细想想，是不是很像 React 中的 context 呢？

#### `provide/inject` 实现响应式

`provide` 祖先组件的实例，在子孙组件中注入依赖，这样就可以在子孙组件中直接修改祖先组件的实例的属性，不过这种方法有个缺点就是这个实例上挂载很多没有必要的东西比如 `props`，`methods` 使用2.6最新`API Vue.observable` 优化响应式 `provide`(推荐)

方法一例子：

**父组件**

```js
<template>
  <div>
    <p>
      父组件
      <el-button @click="change('red')">改变Color</el-button>
    </p>

    <child-a></child-a>
  </div>
</template>
<script>
import ChildA from "@/components/provide/ChildA";
export default {
  data() {
    return {
      color: "blue"
    };
  },
  provide() {
    return {
      theme: this // 方法一：提供祖先组件的实例
    };
  },
  components: { ChildA },
  methods: {
    change(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    }
  }
};
</script>
<style scoped>
div {
  margin: 50px;
}
</style>
复制代码
```

**子组件**

```js
<template>
  <div :style="{ color: theme.color }">子组件A来自父组件的内容</div>
</template>
<script>
export default {
  inject: {
    theme: {
      //函数式组件取值不一样
      default: () => ({})
    }
  }
};
</script>
复制代码
```

方法二例子：

**父组件**

```js
<template>
  <div>
    <p>
      父组件
      <el-button @click="change('red')">改变Color</el-button>
    </p>

    <child-a></child-a>
  </div>
</template>
<script>
import ChildA from "@/components/provide/ChildA";
import Vue from "vue";
export default {
  data() {
    return {
      color: "blue"
    };
  },
  provide() {
    this.theme = Vue.observable({
      color: "blue"
    });
    return {
      theme: this.theme
    };
  },
  components: { ChildA },
  methods: {
    change(color) {
      if (color) {
        this.theme.color = color;
      } else {
        this.theme.color = this.theme.color === "blue" ? "red" : "blue";
      }
    }
  }
};
</script>
<style scoped>
div {
  margin: 50px;
}
</style>
复制代码
```

**子组件**

```js
<template>
  <div :style="{ color: theme.color }">子组件A来自父组件的内容</div>
</template>
<script>
export default {
  inject: {
    theme: {
      //函数式组件取值不一样
      default: () => ({})
    }
  }
};
</script>
```

#### 事件总线（eventBus)

> 有时候两个组件也需要通信（非父子关系）。当然Vue2.0提供了Vuex，但在简单的场景下，可以使用一个空的Vue实例作为中央事件总线。

在main.js创建一个空的Vue实例，并且赋值给Vue.prototype.bus

```
	Vue.prototype.bus = new Vue()
```

现在，这个特定的总线使用两个方法 `$on` 和 `$emit` 。一个用于创建发出的事件，它就是`$emit` ；另一个用于订阅 `$on` ,可以在任意组件使用，但是尽量在平行组件使用，而且减少使用

在一个组件发送事件和数据：

```
	this.bus.$emit("eventName",data)
```

在另一个组件中接收事件和数据（一般放在created方法中)：

```
	this.bus.$on("eventName",(data) => { console.log(data)})
```

this的作用域要指向当前的vm实例，on监听事件一般放在组件生命周期函数中的created或者mounted中，注销bus需要在beforeDestroy中；

页面路由的时候，原有页面中的bus事件并没有被注销，依然隐藏在程序中，注册的总线事件要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情况可以在离开界面时注销bus。

```
          beforeDestroy () {
                this.$bus.$off('eventName',this.todo);
          }
```

需要注意的是：`由于公车总线是利用新创建的Vue对象来进行传递事件的`，`所以emit和on中绑定的回调函数中的this并不指向原来的Vue对象，`

`所以我们需要提前定义一个变量来接收原来的this,比如在emit和on函数前写：let _this = this，这样我们就能拿到原来对象的数据了`

#### $attrs和$listeners(常用来封装组件)

> **$attrs**
>
> *包含了父作用域中不被props接收拿到的 (class 和 style 除外)。当一个组件没有声明任何 props 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind=”$attrs” 传入内部组件——在创建更高层次的组件时非常有用。*
>
> inheritAttrs：默认值为 true。
>
> 默认情况下父作用域的不被认作 props 的 attribute 绑定 (attribute bindings) 将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。通过设置 `inheritAttrs` 到 `false`，这些默认行为将会被去掉。而通过 (同样是 2.4 新增的) 实例 property `$attrs` 可以让这些 attribute 生效，且可以通过 `v-bind` 显性的绑定到非根元素上。
>
> 感觉还是挺晦涩难懂的，简单的说就是 **inheritAttrs：true, $attrs继承除props之外的所有属性；inheritAttrs：false 只继承class属性。**
>
> **$listeners**
>
> *包含了父作用域中的 (不含 .native 修饰器的) 所有v-on 事件。它可以通过 v-on=”$listeners” 传入内部组件——在创建更高层次的组件时非常有用*

#### $attrs

- 以下是`$attrs`的使用示例（父组件的列表行数据传递给孙子组件展示）

1. 父组件（Father.vue），**给子组件关联数据，子组件如果不用props接收，那么这些数据就作为普通的HTML特性应用在子组件的根元素上**

```
     <template>
       <div>
         <el-table :data='list'>
           <el-table-column
             prop="name"
             label="姓名"
           ></el-table-column>
           <el-table-column
             prop="study"
             label="学习科目"
           ></el-table-column>
           <el-table-column label="操作">
             <template slot-scope="scope">
               <el-button @click='transmitClick(scope.row)'>传递</el-button>
             </template>
           </el-table-column>
         </el-table>

         <!-- 儿子组件 -->
         <ChildView
           :is-show="isOpen"
           :row="row"
         >
         </ChildView>
       </div>
     </template>

     <script>
     import ChildView from './Child.vue'
     export default {
       components: { ChildView },
       data() {
         return {
           isOpen: false,
           row: {},
           list: [
             { name: '王丽', study: 'Java' },
             { name: '李克', study: 'Python' }
           ]
         }
       },
       methods: {
         // 传递事件
         transmitClick(row) {
           this.isOpen = true;
           this.row = row
         }
       }
     }
     </script>
```

2、儿子组件（Child.vue），中间层，作为父组件和孙子组件的传递中介，在儿子组件中给孙子组件添加`v-bind="$attrs"`，这样孙子组件才能接收到数据

```
     <template>
       <div class='child-view'>
         <p>儿子组件</p>
         <GrandChild v-bind="$attrs"></GrandChild>
       </div>
     </template>

     <script>
     import GrandChild from './GrandChild.vue'
     export default {
       // 继承所有父组件的内容
       inheritAttrs: true,
       components: { GrandChild },
       data() {
         return {
         }
       }
     }
     </script>

     <style lang="stylus">
     .child-view {
       margin: 20px
       border: 2px solid red
       padding: 20px
     }
     </style>
```

3.孙子组件（GrandChild.vue），**在孙子组件中一定要使用props接收从父组件传递过来的数据**

```
     <template>
       <div class='grand-child-view'>
         <p>孙子组件</p>
         <p>传给孙子组件的数据：{{row.name}} {{row.name !== undefined? '学习' : ''}} {{row.study}}</p>
       </div>
     </template>

     <script>
     export default {
       // 不想继承所有父组件的内容,同时也不在组件根元素dom上显示属性
       inheritAttrs: false,
       // 在本组件中需要接收从父组件传递过来的数据，注意props里的参数名称不能改变，必须和父组件传递过来的是一样的
       props: {
         isShow: {
           type: Boolean,
           dedault: false
         },
         row: {
           type: Object,
           dedault: () => { }
         }
       }
     }
     </script>

     <style lang="stylus">
     .grand-child-view {
       border: 2px solid green
       padding: 20px
       margin: 20px
     }
     </style>
```

#### $listeners

首先，$listeners是什么？

假设有父组件Parent和子组件Child

```html
// Parent
<template>
  ...
  <child v-on:event-one="methodOne" v-on:event-two="methodTwo" />
  ...
</template>
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

那么你在使用Child时，传入的所有v-on事件都可以在$listeners对象中找到。

```html
// Child
created () {
  console.log(this.$listeners) // { 'event-one': f(), 'event-two': f() }
}![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)
```

所以，官方示例中的computed -> inputListeners就是把用户使用base-input组件时传入的v-on方法收集起来了。
然后通过v-on="inputListeners"的形式，转发给了input框。

注：v-on="{a: f()}"等价于v-on:a="f()"

所以官网才会说base-input是一个透明包裹器，因为它确实只是转发了父组件传入的参数给input元素

#### slot插槽

##### 匿名插槽

匿名插槽的基本使用，

使用例子：

子组件：

```
<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <slot><span>默认值</span></slot>
    </div>
</template>

```

父组件：

```
<template>
    <div class="father">
        <h3>这里是父组件</h3>
        <child>
            <div class="tmpl">
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
              <span>菜单4</span>
              <span>菜单5</span>
              <span>菜单6</span>
            </div>
        </child>
    </div>
</template>
<script>
  import Child from './Child.vue'
    export default {
        components:{
          'child': Child
        }
    }
</script>
```

在使用子组件时，只有当子组件里面定义了插槽才能往子组件里面填东西，而且都会插在匿名插槽里面

`<slot><span>默认值</span></slot>，solt里面可以给定默认值，如果没有给他插入值，那么就显示默认值，如果有插入其他元素，那么默认值就会被覆盖`

上面使用后输出结果：

![image-20201028230741038](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220619-1657022362073246.png)

##### 具名插槽

具名插槽的基本使用，

子组件：

```
<template>
  <div class="child">
    <slot name="up"></slot>
    <h3>这里是子组件</h3>
    <slot name="down"></slot>
    <slot></slot>
  </div>
</template>
```

父组件：

```
<template>
  <div class="father">
    <h3>这里是父组件</h3>
    <child>
      <div class="tmpl" slot="up">
        <span>我是name为up的具名插槽</span>
      </div>
      <div class="tmpl" v-slot:"down">
        <span>我是name为down的具名插槽</span>
      </div>
      <div class="tmpl">
        <span>我是匿名插槽</span>
      </div>
    </child>
  </div>
</template>
<script>
  import Child from './Child.vue'
  export default {
    components:{
      'child': Child
    }
  }
</script>
```

`具名插槽可以和匿名插槽混用`，具名插槽有名字，子组件通过 <slot name="up"></slot>定义，父组件在使用的时候通过slot="up"使用，并且会放到对应的位置

上面例子的输出结果：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220622-1657022362074247.png" alt="image-20201028232146002" style="zoom:80%;" />

##### 作用域插槽(vue3.0已废弃)

在接下来所有的 2.x 版本中 `slot` 和 `slot-scope` attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220625-1657022362074248.png" alt="image-20201028233714051" style="zoom:80%;" />

由上面我们可以得知，作用域插槽的主要作用时能够让父组件自定义使用子组件里面的数据，比如下面例子

子组件：

```
<template>
  <div class="child">
    <h3>这里是子组件</h3>
    <slot :data="per" name="up"></slot>
    <slot :data="per" ></slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      per: ["zhangsan", "lisi", "wanwu", "zhaoliu", "tianqi", "xiaoba"]
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>
```

子组件里面有数据data，通过:data=“per",我们可以把子组件中的一些数据传给父组件处理，而不是在子组件写死

父组件：

```
<template>
  <div class="father">
    <h3>这里是父组件</h3>
    <!--第一次使用：用flex展示数据-->
    <child>
      <div1 slot-scope="user1" slot="up">
        <div class="tmpl">
          <span v-for="item in user1.data" :key="item">{{ item }}</span>
        </div>
      </div1>
    </child>
    <!--第二次使用：用列表展示数据-->
    <child>
      <template slot-scope="user2" slot="up">
        <ul>
          <li v-for="item in user2.data" :key="item">{{ item }}</li>
        </ul>
      </template>
    </child>
    <!--第三次使用：直接显示数据-->
    <child>
      <template slot-scope="user3">
        {{ user3.data }}
      </template>
    </child>
    <!--第四次使用：不使用其提供的数据-->
    <child>
      我就是模板
    </child>
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  components: {
    child: Child
  }
};
</script>
```

在要插入的内容中加上solt-scope='自定义名字'就可以获取子组件中绑定给:data的数据了，并且赋值给自定义名字,

从上面可以看出，这时候就可以利用solt-scope获取子组件数据，从而实现自定义使用了

上面有些不是使用div而是使用template,这是因为旧版本要求必须是template,所以为了兼容性，有些时候会写template

注意：是通过自定义名字.data输出子组件数据

上面例子输出结果：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220629-1657022362074250.png" alt="image-20201029000428683" style="zoom:80%;" />

##### $slots

> 用来访问被[插槽分发](https://cn.vuejs.org/v2/guide/components.html#通过插槽分发内容)的内容。每个[具名插槽](https://cn.vuejs.org/v2/guide/components-slots.html#具名插槽)有其相应的 property (例如：`v-slot:foo` 中的内容将会在 `vm.$slots.foo` 中被找到)。`default` property 包括了所有没有被包含在具名插槽中的节点，或 `v-slot:default` 的内容。
>
> 请注意插槽**不是**响应性的。如果你需要一个组件可以在被传入的数据发生变化时重渲染，我们建议改变策略，依赖诸如 `props` 或 `data` 等响应性实例选项。
>
> **注意：**`v-slot:foo` 在 2.6 以上的版本才支持。对于之前的版本，你可以使用[废弃了的语法](https://cn.vuejs.org/v2/guide/components-slots.html#废弃了的语法)。
>
> 在使用[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)书写一个组件时，访问 `vm.$slots` 最有帮助。

- **示例**：

  ```
  <blog-post>
    <template v-slot:header>
      <h1>About Me</h1>
    </template>
  
    <p>Here's some page content, which will be included in vm.$slots.default, because it's not inside a named slot.</p>
  
    <template v-slot:footer>
      <p>Copyright 2016 Evan You</p>
    </template>
  
    <p>If I have some content down here, it will also be included in vm.$slots.default.</p>.
  </blog-post>
  ```

  ```
  Vue.component('blog-post', {
    render: function (createElement) {
      var header = this.$slots.header
      var body   = this.$slots.default
      var footer = this.$slots.footer
      return createElement('div', [
        createElement('header', header),
        createElement('main', body),
        createElement('footer', footer)
      ])
    }
  })
  ```

![image-20211001200351031](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgETNfjmbuSsB8Vp6.png)

![image-20211001200452735](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgJejbvApokOGLmwC.png)

#### 生命周期

> Vue实例有一个完整的生命周期，也就是说从开始创建、初始化数据、编译模板、挂在DOM、渲染-更新-渲染、卸载等一系列过程，我们成为Vue 实例的生命周期，钩子就是在某个阶段给你一个做某些处理的机会。

##### 组件生命周期	

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imglifecycle.png" alt="lifecycle" style="zoom: 67%;" />

**beforeCreate( 创建前 )**

在实例初始化之后，数据观测和事件配置之前被调用，此时组件的选项对象还未创建，el 和 data ,methods并未初始化，因此无法访问methods， data， computed等上的方法和数据。

**created ( 创建后 ）**

实例已经创建完成之后被调用，在这一步，实例已完成以下配置：数据观测、属性和方法的运算，watch/event事件回调，完成了data 数据的初始化，el没有。 然而，挂在阶段还没有开始, $el属性目前不可见，这是一个常用的生命周期，因为你可以调用methods中的方法，改变data中的数据，并且修改可以通过vue的响应式绑定体现在页面上，，获取computed中的计算属性等等，通常我们可以在这里对实例进行预处理，也有一些童鞋喜欢在这里发ajax请求，值得注意的是，这个周期中是没有什么方法来对实例化过程进行拦截的，因此假如有某些数据必须获取才允许进入页面的话，并不适合在这个方法发请求，建议在组件路由钩子beforeRouteEnter中完成

**beforeMount**

挂在开始之前被调用，相关的render函数首次被调用（虚拟DOM），实例已完成以下的配置： 编译模板，把data里面的数据和模板生成html，完成了el和data 初始化，注意此时还没有挂在html到页面上。

**mounted**

挂在完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。

**beforeUpdate**

在数据更新之后被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程

**updated（更新后）**

虚拟dom重新被渲染挂载成功

**beforeDestroy（销毁前）**

在实例销毁之前调用，实例仍然完全可用，

1. 这一步还可以用this来获取实例，
2. 一般在这一步做一些重置的操作，比如清除掉组件中的定时器  和 监听的dom事件

**destroyed（销毁后）**

在实例销毁之后调用，调用后，所以的事件监听器会被移出，所有的子实例也会被销毁，该钩子在服务器端渲染期间不被调用

销毁后 （Dom元素存在，只是不再受vue控制）,卸载watcher，事件监听，子组件。	

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <p id="h3">
      {{msg}}
    </p>
    <button @click='change'>按钮</button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    var vm = new Vue({
      el: '#app',
      data: {
        msg: '我是msg'
      },
      methods: {
        show() {
          console.log('执行了show方法');
        },
        change() {
          this.msg = '修改后的msg'
        }
      },
      //这是第1个生命周期函数，表示实例完全被创建出来之前，data和methods中的数据都还没有初始化
      beforeCreate() {
        console.log('------beforeCreate------');
        console.log(this.msg);
        this.show()
      },
      //这是第2个生命周期函数，data和methods中的数据已经初始化可以访问了
      created() {
        console.log('------created------');
        console.log(this.msg);
        this.show()
      },
      //这是第3个生命周期函数，表示模板已经在内存中编辑成功了，但是尚未把模板渲染到页面中
      beforeMount() {
        console.log('------beforeMount------');
        console.log(document.getElementById('app').innerHTML);
        //在beforeMount执行的时候，页面中的元素，还没有被真正替换过来
      },
      //这是第4个生命周期函数，虚拟dom挂载完毕
      mounted() {
        console.log('------mounted------');
        console.log(document.getElementById('app').innerHTML);
      },
      //这是第5个生命周期函数，在数据更新之后被调用
      beforeUpdate() {
        console.log('------beforeUpdate------');
      },
      //这是第6个生命周期函数，虚拟dom重新被渲染挂载成功
      updated() {
        console.log('------updated------');
      },
      / 方法9：组件销毁前调用
      beforeDestory: function () {
      console.log(777, this, arguments)
      },

      // 方法10：主键销毁后调用
        destoryed: function () {
        console.log(888, this, arguments)
      },


      // 方法7：组件被激活时调用（用的少）
      // activated: function() {
      //     console.log(777, this, arguments)
      // },

      // 方法8：组件被移除时调用（用的少）
      // deactivated: function () {
      //     console.log(888, this, arguments)
      // },
    })
  </script>
</body>

</html>
```

结果：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgVYoTyuexA4w2QtP.png)

##### 父子组件的生命周期

**加载渲染过程**
父beforeCreate→父created→父beforeMount→子bereforeCreate→子created→子beforeMound→子mounted→父mounted

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img927816d581ea48a39402059ceb11e06f.png)

**父组件更新过程**
点击“父组件更新”按钮

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img6f072d42c3f74a4380ccfc7a0270e173.png)

 执行的生命周期钩子：父beforeUpdate→父updated

**子组件更新过程**
点击‘子组件更新’按钮：

 执行的生命周期钩子：子befforeUpdate→子updated

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img404d22356bdf4c5e9b3445e9d091a2ce.png)

**父子组件更新过程**
点击‘改变value’按钮

执行的生命周期钩子：父beforeUpdate→子beforeUpdate→子updated→父updated

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img6f072d42c3f74a4380ccfc7a0270e173.png)

**销毁过程**


销毁是执行的生命周期钩子： 父beforeDestroy→子beforeDestroy→子destroyed→父destroyed

**代码示例**
Lifecycle.vue

```
<template>
  <div>
    Lifecycle
    <button @click="changeValue">改变value</button>
    <br />
    <br />
    <br />
    <parent :value="value"></parent>
  </div>
</template>
<script>
import Parent from "./Parent.vue";
export default {
  name: "Lifecycle",
  components: { Parent },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    changeValue() {
      this.value++;
    },
  },
};
</script>
```

Parent.vue

```
<template>
  <div>
    <p>Parent-{{ parentData }}</p>
    <p>Parent-value:{{ value }}</p>
 
    <button @click="changeParentData">父组件更新</button>
    <br />
    <br />
    <br />
    <Child :value="value"></Child>
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  props: ["value"],
  components: { Child },
  data() {
    return {
      parentData: 0,
    };
  },
  methods: {
    changeParentData() {
      this.parentData++;
    },
  },
  // 创建vue实例前
  beforeCreate() {
    console.log("parent beforeCreate 方法执行了");
  },
  // 创建vue实例后
  created() {
    console.log("parent created 方法执行了");
  },
  // 挂载前
  beforeMount() {
    console.log("parent beforeMount 方法执行了");
  },
  // 挂载后
  mounted() {
    console.log("parent mounted 方法执行了");
  },
  // 更新前
  beforeUpdate() {
    console.log("parent beforeUpdate 方法执行了");
  },
  // 更新后
  updated() {
    console.log("parent updated 方法执行了");
  },
  // 销毁前
  beforeDestroy() {
    console.log("parent beforeDestroy 方法执行了");
  },
  // 销毁后
  destroyed() {
    console.log("parent destroyed 方法执行了");
  },
};
</script>
```

child.vue

```
<template>
  <div>
    <p>Child-{{ childData }}</p>
    <p>Child-value:{{ value }}</p>
    <button @click="changeChildData">子组件更新</button>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: ["value"],
  data() {
    return {
      childData: 0,
    };
  },
  methods: {
    changeChildData() {
      this.childData++;
    },
  },
  // 创建vue实例前
  beforeCreate() {
    console.log("Child beforeCreate 方法执行了");
  },
  // 创建vue实例后
  created() {
    console.log("Child created 方法执行了");
  },
  // 挂载前
  beforeMount() {
    console.log("Child beforeMount 方法执行了");
  },
  // 挂载后
  mounted() {
    console.log("Child mounted 方法执行了");
  },
  // 更新前
  beforeUpdate() {
    console.log("Child beforeUpdate 方法执行了");
  },
  // 更新后
  updated() {
    console.log("Child updated 方法执行了");
  },
  // 销毁前
  beforeDestroy() {
    console.log("Child beforeDestroy 方法执行了");
  },
  // 销毁后
  destroyed() {
    console.log("Child destroyed 方法执行了");
  },
};
</script>
```



#### Vue实例

> 我们在一个工程化的Vue项目中，通过webpack的打包，我们一般以main.js为入口，然后进行对导入的各种文件进行处理，最终合成汇总成js文件插入到html中

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgL23eb1HFhPd5xtQ.png" alt="image-20211016155330951" style="zoom: 67%;" />

这是我们的main.js一般写法：

```
     import Vue from 'vue'
     import App from './App.vue'
     import router from './router'
     import store from './store'

     Vue.config.productionTip = false
     new Vue({
       router,
       store,
       render: h => h(App),
     }).$mount('#app')
```

接下来我们来分析下Vue是如何进行实例化的吧

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgEUVh4sMzouHetAb.png" alt="image-20211016170004005" style="zoom:67%;" />

我们来输出Vue实例看下是什么：

```
     import Vue from 'vue'
     import App from './App.vue'
     import router from './router'
     import store from './store'
     class test {

     }
     Vue.config.productionTip = false
     const vm = new Vue({
       router,
       store,
       test,
       render: h => h(App),
     }).$mount('#app')
	console.log(vm)
```

结果：

![image-20211016172510954](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgjQnlA9zsC6DI2J8.png)

首先，我们来看下Vue实例化的过程是怎样的

```
     import Vue from 'vue'
     import App from './App.vue'
     import router from './router'
     import store from './store'
     Vue.config.productionTip = false
     // vue组件模板
     console.log({App});
     // 把组件模板变成Vue实例，一个Vue实例就是一个组件，只不过main.js中实例为$root组件
     const component = new Vue({
       router,
       store,
       render: h => h(App),
     })
     console.log({ component});
     // 生成$el（真实DOM)并挂载到组件实例中
     const vm = component.$mount()
     console.log({vm});
     // 挂载真实DOM
     document.querySelector('#app').appendChild(vm.$el)
```

可以看出怎个过程就是**组件模板->组件实例->真实DOM->挂载**

输出：

App:

![image-20211016195603424](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgmtnIBYgcXlhWeOJ.png)

component(此时还没有生成真实DOM,然后这个步骤会把组件的所有子组件都生成组件实例的）:

![image-20211016195637635](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgqhNB6iaTjxnp5s3.png)

vm:

![image-20211016195801828](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgeHryp5VwZx9aOIb.png)

当然以上步骤我们可以通过这个方式实现：

```
     console.log(App);
     
     let app = Vue.extend(App)
     console.log(app);
     let component = new app()
     console.log(component);
     let vm = component.$mount()
     document.getElementById('app').appendChild(vm.$el)
     console.log(component.$el);
```

我们通过Vue.extend把返回了一个可以使用new 关键字实例化的类

在App.vue中的this指向App.vue实例

![image-20211016200250055](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img87WQvMHhrieLbNG.png)

#### keep-alive

##### 简介

**问题描述（什么是keep-alive）**

- keep-alive顾名思义，保持活跃。保持谁活跃呢？
- 首先我们知道，因为vue就是组件化编程，一个.vue文件就是一个组件。就像万事万物一样，都有从出生到消亡的生命周期过程，vue的组件也是一样，也有自己的生命周期，比如create创建组件、mounted往组件上挂数据、update更新组件上挂的数据，destroy把组件实例销毁。
- 所以使用keep-alive就是保持组件活跃，不会被destroy销毁掉，就一直还活着，组件没有被销毁掉的话，组件上挂载的数据就还存在，所以状态就可以保留，所以，keep-alive就可以保持组件的状态。

> http协议的请求头里面也有一个keep-alive，保持http通话，这样：Connection: keep-alive 功能虽然不一样，但是思想上是一样的即为~保持状态活跃

**小demo，看一下keep-alive的使用效果**

demo分为上面的路由导航部分，下面的内容区部分。点击上面的路由导航，路由视图渲染对应的路由组件。效果图如下：

**未使用keep-alive的效果图**	

!![动图](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-5573ac77bf74dbc157428ed55d97c09b_b.webp)

对应代码

```
// #App.vue中
<template>
  <div class="box">
    <!-- 路由导航 -->
    <div class="nav">
      <router-link to="/">去home页面</router-link>
      <router-link to="/about">去about页面</router-link>
      <router-link to="/detail">去detail页面</router-link>
    </div>
    <!-- 路由导航对应的内容区 -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

// home.vue中，放置一个复选框
<el-checkbox v-model="checked">备选项</el-checkbox>

// about.vue中，放置一个输入框
<el-input v-model="input" placeholder="请输入内容"></el-input>

// detail.vue中方式一个下拉框
<el-select v-model="value" placeholder="请选择">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
  >
  </el-option>
</el-select>
```

分析

- 我们发现，当我们没有使用keep-alive组件包裹住router-view视图组件的时候，左边~我们在去home页面勾选了，在去about页面输入了，在去detail页面下拉选择了，离开这个路由页面，再回来时，我们发现我们之前做的操作，勾选、输入、下拉选择都不存在了，之前的状态都没了。原因很简单，当离开这个路由页面的时候，会触发这个路由页面对应组件上的destroy钩子方法，然后这个路由页面对应的组件就被销毁了，组件销毁了，组件上的挂载的数据也就啥也没有了。
- 与此同时，我们可以看到在右边的Vue.js devtools工具中，router-view视图层始终只是home、about、detail组件来回切换，组件来回切换，其实就是组件不断的创建、销毁的过程。加下来我们看看使用keep-alive的效果。

**使用keep-alive的效果图**

![动图](https://pic3.zhimg.com/v2-7c106a5d34b9483193e2a78715ceb5fa_b.webp)

对应代码

```
<template>
  <div class="box">
    <!-- 路由导航 -->
    <div class="nav">
      <router-link to="/">去home页面</router-link>
      <router-link to="/about">去about页面</router-link>
      <router-link to="/detail">去detail页面</router-link>
    </div>
    <!-- 路由导航对应的内容区 -->
    <main>
      <keep-alive> <!-- 使用keep-alive包了一层，就可以缓存啦 -->
        <router-view></router-view>
      </keep-alive>
    </main>
  </div>
</template>
```

分析

- 我们给视图层组件使用keep-alive包住以后，我们发现，我们勾选、输入、下拉选择的内容，在路由来回切换的时候，就不会丢失了，即使用keep-alive保存了之前的组件状态
- 与此同时，我们可以看到在右边的Vue.js devtools工具中，在router-view视图中对应的，切换过去的组件已经处于inactive状态，inactive英文意思是不活动的、未使用的，即已经缓存的，没有销毁的。所以组件上的我们所做的操作、组件的状态就被缓存了，所以我们勾选的、输入的、下拉选择的都还在。

> Vue.js devtools挺好用，可以通过谷歌下载，vue开发中的很好的工具

引出问题

看到这里我们发现，直接加上keep-alive的话，会把所有的router-view层级下的视图的组件都缓存了，不过有的时候，我们只想缓存部分，不想缓存所有的，那这怎么办呢？没关系，大佬们已考虑到了，已经提前为我们解决好了，就是keep-alive中的include、exclude属性

i**nclude和exclude指定是否缓存某些组件**

include属性

include 包含的意思。值为字符串或正则表达式或数组。只有组件的名称与include的值相同的才会被缓存，即指定哪些被缓存，可以指定多个被缓存。这里以字符串为例，指定多个组件缓存，语法是用逗号隔开。如下：

```
// 指定home组件和about组件被缓存
<keep-alive include="home,about" >
    <router-view></router-view>
</keep-alive>	
```

exclude属性

exclude相当于include的反义词，就是除了的意思，指定哪些组件不被缓存，用法和include类似，如下：

```
// 除了home组件和about组件别的都缓存，本例中就是只缓存detail组件
<keep-alive exclude="home,about" >
    <router-view></router-view>
</keep-alive>
```

**以include="about,detail"为例的效果图**

语法的意思是，只缓存about和detail，别的组件不缓存。我们看下图的vue工具，也可以看出来，缓存的组件，不处于对应展示的路由下，就会成为inactive状态。

![动图](https://pic1.zhimg.com/v2-2ee52513e1130742c4399a239c5599ec_b.webp)

> keep-alive除了include和exclude属性之外，还有一个属性就是max属性，这个max一般情况用的不是太多，主要目的就是控制一下被缓存的组件的个数，后缓存的就会把先缓存的给挤掉线了，也是相当于缓存优化的一中策略了。毕竟适当缓存提高用户体验，缓存过渡，电脑变卡。

include和exclude的属性值是组件的名称

include和exclude的属性值是组件的名称，也就是组件的name属性值，也就是如下的name属性值

```
<script>
    export default {
      name: "App"
      // ...
    };
</script>
```

引出问题

我们知道组件中都有对应的逻辑js部分，而且组件要发请求获取数据的，一般情况下，我们都是在created或者mounted钩子中去发请求，向后端的大佬要数据的，关于使用keep-alive后的组件的钩子函数的问题，我们需要注意一下

**使用keep-alive的钩子函数执行顺序问题**

首先使用了keep-alive的组件以后，组件上就会自动加上了activated钩子和deactivated钩子。

- activated 当组件被激活（使用）的时候触发 可以简单理解为进入这个页面的时候触发
- deactivated 当组件不被使用（inactive状态）的时候触发 可以简单理解为离开这个页面的时候触发

进入组件和离开组件钩子执行顺序进入组件和离开组件钩子执行顺序

假设我们只缓存home组件，我们先看一下代码，再在钩子中打印出对应的顺序。就知道钩子执行的顺序了，自己动手印象深刻

代码如下

```
<template>
<div>
  <el-checkbox v-model="checked">备选项</el-checkbox>
</div>
</template>
<script>
export default {
name: "home",
data() { return { checked: false } },
created() {
  console.log("我是created钩子");
},
mounted() {
  console.log("我是mounted钩子");
},
activated() {
  console.log("我是activated钩子");
},
deactivated() {
  console.log("我是deactivated钩子");
},
beforeDestroy() {
  console.log("我是beforeDestroy钩子");所以我们可以得出结论：
},
};
</script

// 我们来回切换 看控制台打印顺序，得出结论如下
```

- 得出结论

- - 初始进入和离开 created ---> mounted ---> activated --> deactivated
  - 后续进入和离开 activated --> deactivated

所以我们可以在activated 和deactivated钩子中去做一些逻辑处理，这两个钩子有点类似mounted和beforeDestroy钩子，但是还是不一样。毕竟使用keep-alive不会销毁组件

##### keep-alive的应用场景举例

- 查看表格某条数据详情页，返回还是之前的状态，比如还是之前的筛选结果，还是之前的页数等
- 填写的表单的内容路由跳转返回还在，比如input框、下选择拉框、开关切换等用户输入了一大把东西，跳转再回来不能清空啊，不能让用户再写一遍啊，是吧老铁
- 反正就是保留之前的状态，具体应用场景其实也有很多，在此不赘述...

##### 使用方式

**方式一：在App.vue中使用keep-alive标签，表示缓存所有页面**

```
  <div id="app">
  	<keep-alive>
	    <tar-bar></tar-bar>
	    <div class="container">
	      <left-menu></left-menu>
	      <Main />
	    </div>
    </keep-alive>
  </div>
```

**方式二：按条件缓存，使用include，exclude判断是否缓存**

```
// 1. 将缓存 name 为 cc 的组件,如果有多个，可用逗号分
  	<keep-alive include='cc'>
      <router-view/>
    </keep-alive>
// 2. 将不缓存 name 为 cc 的组件
	<keep-alive exclude='cc'>
  	  <router-view/>
	</keep-alive>
// 3. 还可使用属性绑定动态判断
	<keep-alive :include='includedComs'>
  	  <router-view/>
	</keep-alive>
```

**方式三：在router目录下的index.js中，**

- **第一步：使用meta:{keepAlive = true },表示需要缓存**

  ```
   const routes = [
    {
      path:'/',
      component:Home,
      meta:{
          keepalive:true
      }
    },
    {
      path:'/login',
      component:Login
    },
     {
        path:'/edit',
        component:Edit,
        meta:{
            istoken: true
        }
     },
    {
        path:'/home',
        component:Home,
        meta:{
            keepalive:true
        }
    }
  ]
  ```

- **第二步：在App.vue中进行判断**

  ```
  <div id="app">
      <!--keep-alive 表示页面不会被销毁，即保持页面状态-->
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepalive"></router-view>
  </div>
  ```

##### 补充

上述我们使用的是keep-alive包裹router-view的小案例来讲解的，实际上keep-alive一般情况下，要么包裹router-view，要么包裹动态组件component。代码写法实际上是一样的。包裹动态组件的用法如下：

```html
<keep-alive include="home" exclude="about">
     <component :is="whichComponent"></component>
</keep-alive>
```

> keep-alive的include和exclude属性也支持v-bind的语法，所以也是很灵活的。

#### computed

> Vue中的 computed 属性称为 计算属性 。在模板内可以使用[表达式](http://www.php.cn/wiki/81.html)，而且模板内的表达式是非常的便利，但这种遍历是有一定的限制的，它们实际上是用于一些简单的运算。也就是说，如果在模板中放入太多的逻辑会让模板过重而且难以维护。

实例：

```
     <p id="app">
       <h1>{{ message.split('').reverse().join('') }}</h1>
     </p>
```

在这个示例中，模板不再简单和清晰。你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转[字符串](http://www.php.cn/wiki/57.html)。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。

这就是对于任何复杂逻辑，你都应当使用 计算属性 的原因。接下来咱们一起来学习Vue中的计算属性。

`计算属性可用于快速计算视图（ View ）中显示的属性。这些计算将被缓存，并且只在需要时更新`。

在Vue中有多种方法为视图设置值：

- 使用指令直接将数据值绑定到视图
- 使用简单的表达式对内容进行简单的转换
- 使用过滤器对内容进行简单的转换

除此之外，我们还可以使用计算属性根据数据模型中的值或一组值来计算显示值。

**计算属性**

> 计算属性允许我们对指定的视图，复杂的值计算。这些值将绑定到依赖项值，只在需要时更新。

例如，我们可以在数据模型中有一个 results 数组：

```
data () {
  return {
    results: [
      {
        name: 'English',
        marks: 70
      },
      {
        name: 'Math',
        marks: 80
      },
      {
        name: 'History',
        marks: 90
      }
    ]
  }
}
```

假设我们想要查看所有主题的总数。我们不能使用 filters 或 expressions 来完成这个任务。

- filters ：用于简单的数据格式，在应用程序的多个位置都需要它
- expressions ：不允许使用流操作或其他复杂的逻辑。他们应该保持简单

这个时候，计算属性就可以派上用场。我们可以向模型中添加一个计算值，如下：

```vue
computed: {
  totalMarks: function () {
    let total = 0
    let me = this
    for (let i = 0; i < me.results.length; i++) {
      total += parseInt(me.results[i].marks)
    }
    return total
  }
}
```

totalMarks 计算属笥使用数组 resultes 的 marks 计算出总值。它只是循环遍历值并返回子总数。

然后，我们可以在视图中显示计算值：

```
<p id="app">
  <p v-for="subject in results">
    <input v-model="subject.marks">
    <span>Marks for {{ subject.name }}: {{ subject.marks }}</span>
  </p>
  <p>
    Total marks are: {{ totalMarks }}
  </p>
</p>
```

**计算属性 vs 方法**

我们可以使用Vue中的 method 计算出学科的总分，最终得到的总数结果是相同的。

在上例的基础上，我们把 computed 区块中的 totalMarks 函数整体移到 methods 中。同时在模板中将 {{ 'totalMarks' }} 替换成 {{ 'totalMarks()' }} 你最终看到的结果是一样的，如下所示：

```
let app = new Vue({
 el: '#app',
 data () {
  return {
   results: [
    {
     name: '英语',
     marks: 70
    },
    {
     name: '数学',
     marks: 80
    },
    {
     name: '历史',
     marks: 90
    }
   ]
  }
 },
 methods: {
  totalMarks: function () {
   let total = 0
   let me = this
   for (let i = 0; i < me.results.length; i++) {
    total += parseInt(me.results[i].marks)
   }
   return total
  }
 }
})
```

虽然这两种方式输出的结果是相同的，但是性能将遭受毁灭性的打击。使用这种方法， totalMarks() 方法在每次页面渲染时都被执行一次（例如，使用每一个change ）。

如果我们有一个计算属性，那么Vue会记住计算的属性所依赖的值（在我们这个示例中，那就是 results ）。通过这样做，`Vue只有在依赖变化时才可以计算值。否		则，将返回以前缓存的值。这也意味着 只要 results 还没有发生改变，多次访问 totalMarks 计算属性会立即返回之前的计算结果，而不必再次执行函数`。

上面两个示例也说明，`在Vue中 计算属性是基于它们的依赖进行缓存的，而方法是不会基于它们的依赖进行缓存的。从而使用计算属性要比方法性能更好。`

这也同样意味着下面的计算属性将不再更新，VUE的computed和methods都是响应式的，但前提是在模板中使用它（也就是注册依赖，比如this.什么就是依赖），而且响应式是依据所收集的依赖发生变化而相应的，由于Date.now()在vue眼里是不变的，所以不会响应式改变：

```
     computed: {
      now: function() {
       return  Date.now()
      }
     }
```

相比之下，每当触发重新渲染时，方法的调用方式将总是再次执行函数。因此，函数必须是一个纯函数。它不能有副作用。输出只能依赖于传递给函数的值。

那么我们为什么需要缓存？假设我们有一个性能开销比较大的的计算属性 A ，它需要遍历一个极大的数组和做大量的计算。然后我们可能有其他的计算属性依赖于 A 。如果没有缓存，我们将不可避免的多次执行 A 的 getter ！如果你不希望有缓存，请用方法来替代。

**计算属性的 setter**

计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：

```
     computed: {
       fullName: {
         // getter
         get: function () {
           return this.firstName + ' ' + this.lastName
         },
         // setter
         set: function (newValue) {
           var names = newValue.split(' ')
           this.firstName = names[0]
           this.lastName = names[names.length - 1]
         }
       }
     }
```

你在输入框中输入一个 fullName ，然后点击 set 按钮，可以看到对应的效果。你现在再运行 app.fullName="Airen liao" 时，计算属性的 setter 会被调用， app.firstName 和 app.lastName 也相应地会被更新。

#### watch

> 可以监听特定数据变化

虽然计算属性在大多数情况下更合适，但有时候也需要一个自定义的 watcher 。这是为什么Vue通过 watch 选项提供一个更通用的方法，来响应数据的变化。当你想要在数据变化响应时，执行异步操作或开销较大的操作，这是很有用的。

Vue确实提供了一种更通用的方式来观察和响应Vue实例上的数据变动： watch 属性 。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch 。然而，通常更好的想法是使用计算属性而不是命令式的 watch 回调。比如下面的示例：

基本用法：

当fullName值变化时，watch监听到并且执行

```
<div>
      <p>FullName: {{fullName}}</p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
</div>
new Vue({
  el: '#root',
  data: {
    firstName: 'Dawei',
    lastName: 'Lou',
    fullName: ''
  },
  watch: {
    firstName(newName, oldName) {
      this.fullName = newName + ' ' + this.lastName;
    }
  } 
})
```

watch中的函数名必须和要监听的数据变量名一致，参数中的newName和oldName分别为数据未改变前的值和改变后的值，当然，这两个参数名可以自定义，只需要注意第一个参数为旧值，第二个参数为新值就行

- handler方法和immediate属性
  上面的例子是值变化时候，watch才执行，我们想让值最初时候watch就执行就用到了`handler`和`immediate`属性

```
watch: {
  firstName: {
    handler(newName, oldName) {
      this.fullName = newName + ' ' + this.lastName;
    },
    // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法，如果设置了false，那么效果和上边例子一样
    immediate: true
  }
}
```

- deep属性（深度监听，常用语对象下面属性的改变）

```
<div>
      <p>obj.a: {{obj.a}}</p>
      <p>obj.a: <input type="text" v-model="obj.a"></p>
</div>
new Vue({
  el: '#root',
  data: {
    obj: {
      a: 123
    }
  },
  watch: {
    obj: {
      handler(newName, oldName) {
         console.log('obj.a changed');
      },
      deep: true
    }
  } 
})
```

我们在在输入框中输入数据视图改变obj.a的值时，我们发现是无效的。受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。

 默认情况下 handler 只监听obj这个属性它的引用的变化，我们只有给obj赋值的时候它才会监听到，比如我们在 mounted事件钩子函数中对obj进行重新赋值：

```
mounted: {
  this.obj = {
    a: '456'
  }
}
```

 那么我们需要监听obj里的属性a的值呢？这时候deep属性就派上用场了:

```
watch: {
  obj: {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    deep: true
  }
}
```

 这样的方法对性能影响很大，修改obj里面任何一个属性都会触发这个监听器里的 handler。所以尽量少使用

实际开发中，watch会随着组件一并销毁。

#### Vue动画

##### 简介	

> Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具：
>
> - 在 CSS 过渡和动画中自动应用 class
> - 可以配合使用第三方 CSS 动画库，如 Animate.css
> - 在过渡钩子函数中使用 JavaScript 直接操作 DOM
> - 可以配合使用第三方 JavaScript 动画库，如 Velocity.js

##### [单元素/组件的过渡](https://cn.vuejs.org/v2/guide/transitions.html#单元素-组件的过渡)

Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

这里是一个典型的例子：

```
     <template>
       <div id="app">
         <div id="demo">
           <button v-on:click="show = !show">
             Toggle
           </button>
           <transition name="fade">
             <p v-show="show">hello</p>
           </transition>
         </div>
       </div>
     </template>

     <script>
     export default {
       name: 'App',
       data() {
         return {
           show: true,
         }
       },
     }
     </script>

     <style>
     /* 这些类名都会加在transtion组件中的根元素上 */
     /* 从元素显示和消失过程中这两个类名一直存在，最后一刻移除 */
     .fade-enter-active,
     .fade-leave-active {
       transition: all 1s;
     }
     /* 元素进入或消失过程中的第一帧存在,然后立刻消失 */
     .fade-enter,
     .fade-leave-to {
       opacity: 0;
       background-color: red;
     }
     /* 元素进入或消失过程中的第二帧存在,最后一刻移除 */
     .fade-enter-to,
     .fade-leave {
       opacity: 1;
       background-color: yellow;
     }
     </style>
```

效果：

![chrome-capture](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img8edOzvyFaKlYoSh.gif)

当插入或删除包含在 `transition` 组件中的元素时，Vue 将会做以下处理：

1. 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。
2. 如果过渡组件提供了 [JavaScript 钩子函数](https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-钩子)，这些钩子函数将在恰当的时机被调用。
3. 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 `nextTick` 概念不同)

##### [过渡的类名](https://cn.vuejs.org/v2/guide/transitions.html#过渡的类名)

在进入/离开的过渡中，会有 6 个 class 切换。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`：**2.1.8 版及以上**定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
4. `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`：**2.1.8 版及以上**定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

![Transition Diagram](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgjT4fzUmeMJdntZc.png)

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的默认前缀。

如果你使用了 `<transition name="my-transition">`，那么 `v-enter` 会替换为 `my-transition-enter`。

##### [CSS 过渡](https://cn.vuejs.org/v2/guide/transitions.html#CSS-过渡)

常用的过渡都是使用 CSS 过渡。

下面是一个简单例子：

```
     <template>
       <div id="example-1">
         <button @click="show = !show">
           Toggle render
         </button>
         <transition name="slide-fade">
           <p v-if="show">hello</p>
         </transition>
       </div>
     </template>

     <script>
     export default {
       data() {
         return {
           show: true,
         }
       },
     }
     </script>

     <style>
     /* 这些类名都会加在transtion组件中的根元素上 */
     /* 从元素显示和消失过程中这两个类名一直存在，最后一刻移除 */
     /* 设置持续时间和动画函数 */
     .slide-fade-enter-active {
       transition: all 0.3s ease;
     }
     .slide-fade-leave-active {
       transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
     }
     /* 由于元素显示和消失的opacity和transform都有默认值,所以可以省略部分 */
     .slide-fade-enter,
     .slide-fade-leave-to {
       transform: translateX(10px);
       opacity: 0;
     }
     /* 完整的写法应该是这样的,但这默认值就是这样,所以可以省略的, 其中的注释是为了兼容2.1.8以下版本 */
     .slide-fade-enter-to,
     .slide-fade-leave /* .slide-fade-leave-active for below version 2.1.8 */{
       transform: translateX(0px);
       opacity: 1;
     }
     </style>
```

效果：



![chrome-capture (1)](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwVfDOypulQNS1vE.gif)

##### [CSS 动画](https://cn.vuejs.org/v2/guide/transitions.html#CSS-动画)

CSS 动画用法同 CSS 过渡，区别是在动画中 `v-enter` 类名在节点插入 DOM 后不会立即删除，而是在 `animationend` 事件触发时删除。

示例：

```
     <template>
       <div id="example-2">
         <button @click="show = !show">Toggle show</button>
         <transition name="bounce">
           <p v-if="show">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
             facilisis enim libero, at lacinia diam fermentum id. Pellentesque
             habitant morbi tristique senectus et netus.
           </p>
         </transition>
       </div>
     </template>

     <script>
     export default {
       data() {
         return {
           show: true,
         }
       },
     }
     </script>

     <style scoped>
     .bounce-enter-active {
       animation: bounce-in 0.5s;
     }
     .bounce-leave-active {
       animation: bounce-in 0.5s reverse;
     }
     @keyframes bounce-in {
       0% {
         transform: scale(0);
       }
       50% {
         transform: scale(1.5);
       }
       100% {
         transform: scale(1);
       }
     }
     </style>
```

效果：

![chrome-capture (2)](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imggzWSsbm93TPD4Fn.gif)

##### [自定义过渡的类名](https://cn.vuejs.org/v2/guide/transitions.html#自定义过渡的类名)

我们可以通过以下 attribute 来自定义过渡类名：

- `enter-class`
- `enter-active-class`
- `enter-to-class` (2.1.8+)
- `leave-class`
- `leave-active-class`
- `leave-to-class` (2.1.8+)

他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 [Animate.css](https://daneden.github.io/animate.css/) 结合使用十分有用。

示例：

```
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
       <style>
         .control-time {
           animation-duration: 2s;
         }
       </style>
     </head>

     <body>
       <div id="example-3">
         <button @click="show = !show">
           Toggle render
         </button>
         <transition name="custom-classes-transition" enter-active-class="animated tada"
           leave-active-class="animated bounceOutRight">
            <!-- 这里加个类名用以控制动画时长 -->
           <p class="control-time" v-if="show">hello</p>
         </transition>
       </div>
       <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
       <script>
         new Vue({
           el: '#example-3',
           data: {
             show: true
           }
         })
       </script>
     </body>
     </html>
```

效果：

![chrome-capture (3)](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgBgNlS6Qjec1qGit.gif)

##### 在vue中使用animate.css

1. 安装依赖

   ```
   npm install animate.css --save
   ```

2. 全局导入animate样式

   ```
   import 'animate.css';
   ```

3. 使用

   ```
   <template>
     <div id="example-3">
       <button @click="show = !show">
         Toggle render
       </button>
       <!-- duration这里仅仅是控制active类名的显示时长, 大部分时候并不能控制动画时长 -->
       <transition
         name="custom-classes-transition"
         :duration="20000"
         enter-active-class="animate__animated animate__slideInDown"
         leave-active-class="animate__animated animate__slideOutLeft"
       >
         <!-- 这里加个类名用以控制动画时长 -->
         <p class="control-time" v-if="show">hello</p>
       </transition>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         show: true,
       }
     },
   }
   </script>
   <style scoped>
   .control-time {
     animation-duration: 2s;
   }
   </style>
   ```

效果：

![chrome-capture (4)](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgIUOf4CxFwqcLJVj.gif)

`注：animate.css更详细用法请访问：https://animate.style/#documentation`

##### [同时使用过渡和动画](https://cn.vuejs.org/v2/guide/transitions.html#同时使用过渡和动画)

Vue 为了知道过渡的完成，必须设置相应的事件监听器。它可以是 `transitionend` 或 `animationend`，这取决于给元素应用的 CSS 规则。如果你使用其中任何一种，Vue 能自动识别类型并设置监听。

但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如 `animation` 很快的被触发并完成了，而 `transition` 效果还没结束。在这种情况中，你就需要使用 `type` attribute 并设置 `animation` 或 `transition` 来明确声明你需要 Vue 监听的类型。

##### [显性的过渡持续时间](https://cn.vuejs.org/v2/guide/transitions.html#显性的过渡持续时间)

> 2.2.0 新增

在很多情况下，Vue 可以自动得出过渡效果的完成时机。默认情况下，Vue 会等待其在过渡效果的根元素的第一个 `transitionend` 或 `animationend` 事件。然而也可以不这样设定——比如，我们可以拥有一个精心编排的一系列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。

在这种情况下你可以用 `<transition>` 组件上的 `duration` prop 定制一个显性的过渡持续时间 (以毫秒计)：

```
<transition :duration="1000">...</transition>
```

你也可以定制进入和移出的持续时间：

```
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

`注：这里仅仅是控制类名出现的时长，而不是动画时长`

#### 				vue-cli脚手架

##### 环境变量和模式

##### 简单实现

```
#!/usr/bin/env node
const program = require('commander');
const { promisify } = require('util');
const downloadRepo = promisify(require('download-git-repo'));
const { exec, spawn } = require('child_process');
// exec封装函数
const execCommand = (...args) => {
  return new Promise((resolve, reject) => {
    exec(...args, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(stdout);
      resolve();
    })
  })
}
// spawn执行函数
const spawnCommand = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    // stdout是是输出流，由于我们是在子进程开启的任务，所以需要利用stdout中的pipe
    // 向父进程的输出流输送子进程的输出
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on('close', () => {
      resolve();
    })
  })
}
// 定义命令
program
  .version('1.0.0')
  .command('create <projectPath>')
  .description('这是简易版脚手架')
  // 第一个参数为create后面的参数，第二个参数为others，一个数组
  // action为该命令执行的方法
  .action(function (projectPath, others) {
    // 1,下载模板
    console.log('--------------下载模板--------------');
    downloadRepo("direct:https://github.com/webpon/mall.git", projectPath, { clone: true }, async () => {
      //  2,执行终端命令npm install 安装依赖
      console.log('--------------安装依赖--------------');
      // 雖然exec更簡單,但是输出不能实时,而是得等执行完才会触发回调,所以还是采用spawn执行
      // process.platform属性是记录当前输入什么平台,如果是windows平台需要输入的是npm.cmd而不是npm ,其他平台则是npm
      const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
      // await execCommand('npm install', { cwd: `./${projectPath}` })
      await spawnCommand(npm, ['install'], { cwd: `./${projectPath}` })
      console.log('--------------运行项目--------------');
      // await execCommand('npm run serve', { cwd: `./${projectPath}` })
      await spawnCommand(npm, ['run', 'serve'], { cwd: `./${projectPath}` })
    })
  })
// 解析终端指令
program.parse(process.argv);
```



#### 				vue-router路由

vue-router的基本使用

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220644-1657022362083285.png" alt="image-20201022001958526" style="zoom: 67%;" />

安装的话可以使用脚手架自动安装也可以手动安装

第一步导入路由对象：import VueRouter from 'vue-router'

第二步创建路由实例：

```
	import Vue from 'vue'
     import VueRouter from 'vue-router'
     import Main from '../views/Main.vue'
     import CategoryEdit from 'views/CategoryEdit'
     import CategoryList from 'views/CategoryList'
	Vue.use(VueRouter)
     const routes = [
       {
         path: '',
         //路由重定向
         redirect: '/main',
       },
       {
         path: '/main',
         name: 'Main',
         component: Main,
         children: [
           {
             path: '/categories/create',
             component: CategoryEdit,
           },
           {
             path: '/categories/list',
             component: CategoryList,
           },
         ],
       },
     ]
     创建路由实例
     const router = new VueRouter({
       mode: 'history',
       base: process.env.BASE_URL,
       routes,
     })
     export default router
```

第三步：在Vue实例挂载路由实例

在main.js中：

```
     import router from 'network/index'
     new Vue({
      router,
      store,
      render: (h) => h(App),
     }).$mount('#app')			
```

如何使用呢？

可以通过this.$router.push('/categories/list')和this.$router.replace('/categories/list'),前者会保存历史，后者不会保存

通过上面方法可以改变url但不会重新刷新，然后$router会根据url重新渲染页面

当然要渲染在哪里，需要一个标签<router-view/>

还可以用&lt;keep-alive>包裹<router-view/>来保持状态，防止被销毁,使用keep-alive的保持的组件都要有name属性

![b](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220648-1657022362077254.png)

这时候的push和replace实际就是history的pushState和replaceState方法

一级路由会在任何的<router-view/>中渲染对应的模板，App.vue中的 `<router-view>` 是最顶层的出口，渲染最高级路由匹配到的组件。子路由只会在父路由的<router-view/>中的模板的<router-view/>渲染

##### Vue**的前进和后退**

> 项目开发的时候，有时候可能需要我们来对页面后退和前进，这个东西跟浏览器自带的前进后退功能很像

1. 后退功能

   vue中的后退有好多种方法可以使用，`使用这些方法前要确认有之前的页面，否则后退就到了一个空页面！`

   可以通过history.length来获取历史记录的长度

   ```
   console.log(history.length)
   ```

   `1.window.history`对象中保存有页面访问的历史记录，在编写时可不使用 window 这个前缀。 加载历史列表中的前一个URL，这与在浏览器中点击前进按钮是相同的

   window.history.back();  后退1步

   history.back();        后退1步

   `2.this.$router.go(-1);`   通过vue的路由来进行后退1步

     this.$router.go(-2);   后退2步

     this.$router.back();   后退1步

2. 前进功能

   可以通过history.forward(); 来加载历史列表中的下一个URL，这与在浏览器中点击前进按钮是相同的,`使用前需要确认有下一个URL，否则没反应~`

##### 动态路由

###### 用法一

定义

![image-20201022005021089](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220652-1657022362077258.png)

使用

![image-20201022005410642](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220655-1657022362077257.png)

![image-20201022005341350](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220658-1657022362083286.png)

跳转的页面展示：

![image-20201022005756913](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220701-1657022362083287.png)

![image-20201022005741368](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220705-1657022362077256.png)

**this.$route.prams是获取当前活跃的页面的路由的参数，可以通过动态路由来传递数据**

**this.$route.path是获取当前活跃的页面的路由的参数**



###### 用法二

在路由定义对象中加上props:true,然后在跳转的页面的props定义对应的变量就可以直接传值了

```
     routes:[
     path:’/about/:param’,
     component:About,
     props:true//这个表示用法一的$router.params会通过props传给下一个url中的props
     ]
```

```
	//跳转的页面
	props:{
		param:''
	}
```



##### 路由传递参数的另外两种方式

我们经常使用this.$router.push("/home");,参数为字符串的方式来方式来跳转，这种方式很简单，但是不能传递参数

下面介绍的两种传递路由参数的方法都是以对象的方式进行传递

###### 命名路由

> 命名路由的前提就是在注册路由的地方需要给路由（跳转后的页面）命名如：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img70.png" alt="img" style="zoom:80%;" />

命名路由传递参数需要使用params来传递，这里一定要注意使用params不是query。目标 页面接收传递参数时使用params

`特别注意：命名路由这种方式传递的参数，如果在目标页面刷新是会出错的`，因为刷新后prams就为空了

使用方法如下：

```
	this.$router.push({ name: 'news', params: { userId: 123 }})
```

代码如下：

```
	 <template>
       <div class="hello">
         <h1>未跳转的页面</h1>
         <button @click="routerTo">click here to news page</button>
       </div>
     </template>
     <script>
     export default {
       name: 'HelloWorld',
       methods:{
         routerTo(){
           this.$router.push({ name: 'news', params: { userId: 123 }});
         }
       }
     }
```

接收传递的参数：

```
     <template>
       <div>
         this is the news page.the transform param is {{this.$route.params.userId}}
       </div>
     </template>
     <script>
     </script>
```

###### 查询参数传递（推荐使用）

> 查询参数其实就是在路由地址后面带上参数和传统的url参数一致的，传递参数使用query而且必须配合path来传递参数而不能用name，目标页面接收传递的参数使用query。

`注意：和name配对的是params，和path配对的是query`

使用方法如下：

```
	this.$router.push({ path: '/news', query: { userId: 123 }});
```

代码如下：

```
     <template>
       <div class="hello">
         <h1>跳转前</h1>
         <button @click="routerTo">click here to news page</button>
       </div>
     </template>
     <script>
     export default {
       name: 'HelloWorld',
       methods:{
         routerTo(){
           this.$router.push({ path: '/news', query: { userId: 123 }});
         }
       }
     }
     </script>
```

接收参数如下：

```
<template>
  <div>
    跳转后 {{this.$route.query.userId}}
  </div>
</template>
<script>
</script>
```

最后总结：路由传递参数和传统传递参数是一样的，命名路由类似表单提交而查询就是url传递，在vue项目中基本上掌握了这两种传递参数就能应付大部分应用了，最后总结为以下两点：
***\*1.命名路由搭配params，刷新页面参数会丢失
	2.查询参数搭配query，刷新页面数据不会丢失
	3.接受参数使用this.$router后面就是搭配路由的名称就能获取到参数的值\****

另外，二者还有点区别，直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示

##### 路由的懒加载

> 为什么需要懒加载？
>
> 　　像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时

###### 实现方式

> 1、vue异步组件
> 	  2、es提案的import()
> 	  3、webpack的require,ensure()

###### vue异步组件技术 ==== 异步加载 

vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 . 
但是,这种情况下一个组件生成一个js文件

```
     /* vue异步组件技术 */
     { path: '/home', name: 'home', component: resolve => require(['@/components/home'],resolve) },
     { path: '/index', name: 'Index', component: resolve => require(['@/components/index'],resolve) },
     { path: '/about', name: 'about', component: resolve => require(['@/components/about'],resolve) }
```

非懒加载：


懒加载

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3htMTAzNzc4Mjg0Mw==,size_16,color_FFFFFF,t_70.png)

###### 组件懒加载方案二 路由懒加载(使用import)

这是基于ES11的新特性动态导入实现的，`推荐使用，简单`

```
     const 组件名=() => import('组件路径');
     // 下面2行代码，没有指定webpackChunkName，每个组件打包成一个js文件。
     /* const Home = () => import('@/components/home')
     const Index = () => import('@/components/index')
     const About = () => import('@/components/about') */
     // 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。
     把组件按组分块
     const Home = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
     const Index = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/index')
     const About = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/about')
     { path: '/about', component: About }, { path: '/index', component: Index }, { path: '/home', component: Home }
```

###### webpack提供的require.ensure() 

vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。 
这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

```
     /* 组件懒加载方案三: webpack提供的require.ensure() */
     { path: '/home', name: 'home', component: r => require.ensure([], () => r(require('@/components/home')), 'demo') },
     { path: '/index', name: 'Index', component: r => require.ensure([], () => r(require('@/components/index')), 'demo') },
     { path: '/about', name: 'about', component: r => require.ensure([], () => r(require('@/components/about')), 'demo-01') }
     // r就是resolve
     const list = r => require.ensure([], () => r(require('../components/list/list')), 'list');
     // 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
     const router = new Router({
         routes: [
             {
                path: '/list/blog',
                component: list,
                name: 'blog'
             }
         ]
     })
```

###### 给路由组件文件命名

有时候我们想把个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 [命名 chunk (opens new window)](https://webpack.js.org/guides/code-splitting-require/#chunkname)，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。

```js
     const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
     const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
     const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```

Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。

##### 嵌套路由（子路由）

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220708-1657022362077259.png" alt="image-20201022010256373" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220711-1657022362077260.png" alt="image-20201022010413211" style="zoom:67%;" />

路由配置`（记住，子路由开头不能加/)`

![image-20201022010954082](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220715-1657022362078261.png)

使用

![image-20201022010828374](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220720-1657022362078262.png)

子路由的view-router只能在父路由的组件中写router-view

##### 导航守卫

1. 全局路由钩子

   > 是指路由实例上直接操作的钩子函数，他的特点是所有路由配置的组件都会触发，直白点就是触发路由就会触发这些钩子函数

   **beforeEach(to,from, next)**

   这个钩子作用主要是用于登录验证，在路由跳转前触发

   基本使用：

   ```
   router.beforeEach((to, from, next) => {
     if (to.path === '/Login') {
       next()
     } else {
       let token = localStorage.token
       if (!token) {
         next('/Login')
       } else {
         next()
       }
     }
   })//这些代码写在router文件夹中的index.js下
   ```

   next('/Login')就是跳转到/Login路由，next()就是正常跳转，详情请看下面介绍

   **beforeResolve(to,from, next)**

   这个钩子和beforeEach类似，也是路由跳转前触发，即在 beforeEach 和 组件内beforeRouteEnter 之后，afterEach之前调用。

   **afterEach(to,from)；**

   和beforeEach相反，他是在路由跳转完成后触发，`参数包括to,from没有了next（参数会单独介绍）`,他发生在beforeEach和beforeResolve之后，beforeRouteEnter（组件内守卫，后讲）之前。

2. 独享路由钩子

   > 指在单个路由配置的时候也可以设置的钩子函数，其位置就是下面示例中的位置

   ```
   const router = new VueRouter({
     routes: [
       {
         path: '/foo',
         component: Foo,
         beforeEnter: (to, from, next) => {
           // ...
         }
       }
     ]
   })
   ```

   **beforeEnter(to,from, next)；**

   和beforeEach完全相同，在该组件渲染前执行，如果都设置则在beforeEach之后紧随执行，参数to、from、next

3. 组件内路由钩子

   ```
   指在组件内执行的钩子函数，类似于组件内的生命周期，相当于为配置路由的组件添加的生命周期钩子函数。
   ```

   **beforeRouteEnter(to,from, next)**

   路由进入之前调用，参数包括to，from，next。该钩子在全局守卫beforeEach和独享守卫beforeEnter之后，全局beforeResolve和全局afterEach之前调用，要注意的是该守卫内访问不到组件的实例，也就是this为undefined，也就是他在beforeCreate生命周期前触发。在这个钩子函数中，可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数，可以在这个守卫中请求服务端获取数据，当成功获取并能进入路由时，调用next并在回调中通过 vm访问组件实例进行赋值等操作，（next中函数的调用在mounted之后：为了确保能对组件实例的完整访问）。

   **beforeRouteUpdate(to,from, next)**

   在当前路由改变时，并且该组件被复用时调用，可以通过this访问实例。参数包括to，from，next。可能有的同学会疑问，what is 路由改变 or what is 组件被复用？

   - 对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，组件实例会被复用，该守卫会被调用
   - 当前路由query变更时，该守卫会被调用

   **beforeRouteLeave(to,from, next)**

   导航离开该组件的对应路由时调用，可以访问组件实例`this`，参数包括to，from，next。

   ```
   <template>
     ...
   </template>
   export default{
     data(){
       //...
     },
     beforeRouteEnter (to, from, next) {
       // 在渲染该组件的对应路由被 confirm 前调用
       // 不！能！获取组件实例 `this`
       // 因为当守卫执行前，组件实例还没被创建
     },
     beforeRouteUpdate (to, from, next) {
       // 在当前路由改变，但是该组件被复用时调用
       // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
       // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
       // 可以访问组件实例 `this`
     },
     beforeRouteLeave (to, from, next) {
       // 导航离开该组件的对应路由时调用
       // 可以访问组件实例 `this`
     }
   }
   ```

   **导航守卫回调参数**

   to：目标路由对象；

   from：即将要离开的路由对象；

   next：他是最重要的一个参数，他相当于佛珠的线，把一个一个珠子逐个串起来。以下注意点务必牢记：

   1.但凡涉及到有next参数的钩子，必须调用next() 才能继续往下执行下一个钩子，否则路由跳转等会停止。

   2.如果要中断当前的导航要调用next(false)。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到`from`路由对应的地址。（主要用于登录验证不通过的处理）

   3.当然next可以这样使用，next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。意思是当前的导航被中断，然后进行一个新的导航。可传递的参数与[router.push](https://link.zhihu.com/?target=https%3A//router.vuejs.org/zh/guide/essentials/navigation.html)中选项一致。

   4.在beforeRouteEnter钩子中next((vm)=>{})内接收的回调函数参数为当前组件的实例vm，这个回调函数在生命周期mounted之后调用，也就是，他是所有导航守卫和生命周期函数最后执行的那个钩子。

   5.next(error): (v2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 `router.onError()` 注册过的回调。

   总结：
   **当点击切换路由时：beforeRouterLeave-->beforeEach-->beforeEnter-->beforeRouteEnter-->beforeResolve-->afterEach-->beforeCreate-->created-->beforeMount-->mounted-->beforeRouteEnter的next的回调**，

   **当路由更新时：beforeRouteUpdate**

   <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220723-1657022362078263.png" alt="image-20201107173715727" style="zoom:80%;" />

##### **前端路由如何实现的？**

###### 简介

- 改变URL，但是页面不进行整体的刷新。
- https://router.vuejs.org/zh/guide/

**怎么实现呢？**

URL的hash

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220636-1657022362078265.png" alt="image-20201021235831243" style="zoom:67%;" />

*location的完整api请访问：*https://developer.mozilla.org/zh-CN/docs/Web/API/Location

如果不想要很丑的 hash，我们可以用路由的 **history 模式**，这种模式充分利用 `history.pushState` API 来完成 URL 跳转而无须重新加载页面。

```js
     const router = new VueRouter({
       mode: 'history',
       routes: [...]
     })
```

当你使用 history 模式时，URL 就像正常的 url，例如 `http://yoursite.com/user/id`，也好看！

不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 `http://oursite.com/user/id` 就会返回 404，这就不好看了。

所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 `index.html` 页面，这个页面就是你 app 依赖的页面。

*history的完整api请访问：*https://developer.mozilla.org/zh-CN/docs/Web/API/History_API

vue-router就是基于以上实现的

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220639-1657022362078264.png" alt="image-20201022001834640" style="zoom: 50%;" />

###### 具体实现

**目录结构：**

![image-20210925153951246](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgW5JqaoXZOMmsUE2.png)

*main.js:*

```
     import Vue from 'vue'
     import App from './App'
     import router from './zuo-router'
     Vue.config.productionTip = false

     new Vue({
       router,
       render:h=>h(App)
     }).$mount('#app')
```

*zuo-router/index.js:*

```
     import Vue from 'vue'
     import Router from './zuo-router/zuo-router'
     import Detail from '@/components/Detail'
     import Home from '@/components/Home'

     Vue.use(Router)

     export default new Router({
       routes: [
         {
           path: '/',
           redirect:'/home'
         },
         {
           path: '/home',
           name: 'home',
           component: Home
         },
         {
           path: '/detail',
           name: 'detail',
           component: Detail
         },
       ]
     })
```

*zuo-router/zuo-router.js:*

```
	let Vue;
     class ZuoRouter {
       constructor(options) {
         this.$options = options
         // 响应式数据
         Vue.util.defineReactive(this, 'currentPath', '/')
         // 监听哈希路由变化
         window.addEventListener('hashchange', this.hashChange.bind(this))
         // 监听页面刷新
         window.addEventListener('load', this.hashChange.bind(this))
         // 初始化路由map
         this.routeMap = {}
         options.routes.forEach(route => {
           this.routeMap[route.path] = route
         })
       }
       // location属于window对象，window.hash能拿到当前url中的#xxx哈希值
       hashChange () {
         this.currentPath = location.hash.slice(1)
       }
     }
     ZuoRouter.install = function (_Vue) {
       Vue = _Vue
       // 混入
       Vue.mixin({
         beforeCreate () {
           if (this.$options.router) {
             console.log(this);
             Vue.prototype.$router = this.$options.router
           }
         }
       })
       Vue.component('router-link', {
         props: ['to'],
         render (h) {
           // 参数1：标签名
           // 参数2：属性名
           // 参数3：子级
           return h('a', { attrs: { href: '#' + this.to }, class: 'router-link' }, this.$slots.default)
         }
       })
       Vue.component('router-view', {
         render (h) {
           let { routeMap, currentPath } = this.$router
           // 获取当前路由的component
           let component = routeMap[currentPath].component
           // 判断是否重定向
           if (!component) {
             const redirect = routeMap[currentPath].redirect
             if (redirect) {
               component = routeMap[redirect].component
             } else {
               component = null
             }
           }
           // 最简单实现方式
           // this.$router.$options.routes.forEach(route=>{
           //     if(route.path === this.$router.currentPath){
           //         window.component = route.component
           //     }
           // })
           return h(component)
         }
       })
     }

     export default ZuoRouter
```

*components/Detail.vue:*

```
     <template>
         <div>
             <h2>这是详情页</h2>
         </div>
     </template>
```

*components/Home.vue:*

```
     <template>
       <div>
         <h2>这是首页</h2>
       </div>
     </template>
```

#### 				vue-x

**vuex是做什么的？**

官方解释：Vuex是一个专为Vue.js应用程序开发的状态管理模式。

- 它采用`集中式存储管理`应用的所有组件的状态(state),并以相应的规则保证状态以一种可预测的方式发生变化。
- Vuex也集成到Vue的官方调试工具Devtools extension,提升了诸如零配置的time-travel调试、状态快照导入导出等高级调试功能。

##### State

###### **基本使用**（不建议使用）

在store文件夹中的index.js添加以下代码（如果使用脚手架创建时选择了vuex功能那么以下代码会自动生成）：

```
     import Vue from 'vue'
     import Vuex from 'vuex'
     //使用插件
     Vue.use(Vuex)
     //创建并导出实例对象
     export default new Vuex.Store({
         state: {
         //全局数据，可以在任何组件使用
             counter: 1000,
             studentarr:[]
         },
         mutations: {
         },
         actions: {},
         modules: {}
     })
```

在main.js中加上以上代码（如果使用脚手架创建时选择了vuex功能那么以下代码会自动生成）：

```
     import Vue from 'vue'
     import App from './App.vue'
     import router from './router'
     import store from './store'
     Vue.config.productionTip = false
     new Vue({
       router,
       //挂载vuex实例对象
       store,
       render: h => h(App)
     }).$mount('#app')
```

上面代码配置完毕后就可以在任何组件使用vuex中的数据和方法了，在&lt;script>中调用使用：this.$store.state.couter,

在&lt;template>中调用使用：$store.state.counter

例如在home.vue中使用(直接修改state)：

![image-20201020205124071](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220726-1657022362079266.png)

![image-20201020205619263](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220730-1657022362079267.png)

上面是最简单的使用方式，但是这样使用会导致Devtools无法监控数据的修改情况

为什么会这样呢？

![image-20201020205936930](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220733-1657022362079268.png)

因为这是vue官方规定的 ，但并不强制，而且这样这是可以的，并且devtools也能监控到数据变化，但是只能监控同步数据，

异步数据需要用action->mutations->state

![image-20201020210332281](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220741-1657022362079269.png)

##### Mutations

处理同步函数

下面是第二种方法（通过mutations修改state）:

在store中的index.js的mutations加上方法：

```
	import Vue from 'vue'
     import Vuex from 'vuex'
     //使用插件
     Vue.use(Vuex)
     //创建并导出实例对象
     export default new Vuex.Store({
         state: {
         //全局数据，可以在任何组件使用
             counter: 1000,
             studentarr:[]
         },
         //定义mutations方法
         mutations: {
         	  increment(state){
         	  	state.counter++
         	  }
         },
         actions: {},
         modules: {}
     })
```

调用mutations方法：

```
 methods: {
    add() {
      this.$store.commit('increment')
    },
  },
```

那么mutations该怎么携带参数呢？

```
mutations: {
    istabbar(state, istrue) {
      state.main = istrue
    },
    addstudent(state, student) {
      state.studentarr.push(student)
    },
  },
```

```
methods: {
    addstudent() {
      let stu = {
        name: '卢本伟',
        mark: 89,
      }
      //这样只能携带一个参数，如果希望传入多个参数，可以以对象的形式传
      this.$store.commit('addstudent', stu)
    },
  },
```

##### Actions

处理异步函数

第三种方法(action->mutations->state)：

Vuex要求我们Mutations中的方法必须是同步方法。

```
      state: {
         main: 'true',
         studentarr: [{ name: '卢本伟', mark: 78 }],
       },
       mutations: {
         istabbar(state, istrue) {
           state.main = istrue
         },
         addstudent(state, student) {
           state.studentarr.push(student)
         },
       },
       actions: {
         //context上下文，这里的context相当于{state,commit,getter等等}
         aAddstudent(context, stu) {
           setInterval(() => {
             context.commit('addstudent', stu)
           }, 1000)
         },
       },
```

```
 methods: {
    addstudent() {
      let stu = {
        name: '卢本伟',
        mark: 89,
      }
      this.$store.dispatch('aAddstudent', stu)
    },
  },
```

如果需要回调函数还可以这样：

```
 actions: {
    //context上下文，这里的context相当于state
    aAddstudent(context, stu) {
      setInterval(() => {
        context.commit('addstudent', stu.payload)
        stu.success()
      }, 1000)
    },
  },
```

```
  this.$store.dispatch('aAddstudent', {
        payload: stu,
        success: () => {
          console.log('执行完成')
        },
      })
```

或者这样(`最推荐`）：

```
 actions: {
    //context上下文，这里的context相当于state
    aAddstudent(context, stu) {
     return new Promise((reslove,reject)={
		setInterval(() => {
        context.commit('addstudent', stu.payload)
        resolve('执行完毕了')
      }, 1000)
	}) 
    },
  },
```

```
  this.$store.dispatch('aAddstudent', {
        payload: stu,
        success: () => {
          console.log('执行完成')
        },
      }).then(res=>{
      console.log(res)
      })
```

##### Module

Module是模块的意思，为什么在Vuex中我们要使用模块呢？

- Vue使用单一状态树，那么也意味着很多状态都会交给Vuex来管理
- 当应用变得非常复杂时，store对象就有可能变得相当臃肿
- 为了解决这个问题，Vuex允许我们将store分割成模块（Module)，而每个模块拥有自己的state,mutation,action

###### vuex中模块的基础使用（不开启命名空间时）

> 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。这是什么意思？
>
> 简单来说就是模块内部的 action、mutation 定义可以重名，并且触发一次会把所有模块的对应重名的action、mutation 都触发，可以称为我们理想中的残血版本吧
>
> 不理解没事，接下来看例子：

对于action、mutation 和 getter，是在模块中还是在全局中，它们的使用方式是相同的，只是state会有所不同，模块中的state会多一层模块名。

格式变成`store.state.模块名.状态名`（根state中的格式为`store.state.状态名`）。

###### 目录结构

```
├── store           # store目录
│   ├── modules     # store中的所有模块
│   │   ├── book.js    # book子模块
│   │   ├── user.js  # user子模块
│   ├── index.js        # store主文件
```

**创建一个带模块的store**

**store主文件（store/index.js）内容**

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index'   // 接口是虚构的，为了方便理解action的用法

import user from './modules/user'
import book from './modules/book'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading : false, // 是否加载中（接口请求时的全屏loading效果）
    userInfo: {} // 用户信息
  },
  getters: {
    loading: state => state.loading,
    userInfo: state => state.userInfo, 
    userName: state => stete.userInfo.userName || ''
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    // 获取用户信息
    queryUserInfoAction({ commit }) {
      api.queryUserInfo().then((res) => {
        let result = res && res.result || {}
        commit('setUserInfo', result)
      })
    }
  },
  modules: {
    user, // user模块
    book, // book数据
  }
})

export default store
```

**user模块（store/modules/user.js）内容**

```javascript
import api from '@/api/index'

const userModule = {
  state: {
    themeObj: {} // 主题数据
  },
  getters: {
    themeData: state => {
      return {
        primaryColor: '#fe3132', // 主颜色（如：按钮背景颜色）
        subBgColor: '#fff6f6', // 次要颜色（如：浅色背景色）
        ...state.themeObj // 没有返回数据使用以上默认值，有则覆盖以上数据
      }
    }
  },
  mutations: {
    setTheme (state, payload) {
      console.log('这是user的mutation');
      state.themeObj = payload
    }
  },
  actions: {
    queryThemeAction({ commit }) {
      return api.queryTheme().then(res => {
        let data = (res && res.result) || {}
        commit('setTheme',  data)
      })
    },
    // user模块下的userTestAction
    userTestAction ({ commit }, params) {
      return setTimeout(() => {
        console.log('这是book的action');
        commit('setTheme', params + 1)
      }, 100);
  }
}
export default userModule
```

**book模块（store/modules/book.js）内容**

```javascript
import api from '@/api/index'

const productModule = {
  state: {
    proData: {}, // 产品数据
    indexDataRes: {} // 产品首页数据
  },
  getters: {
    proName: state => stete.proData.proName || '', // 产品名称
    proDesc: state => stete.proData.proDesc || '' // 产品描述
    indexData: state => stete.indexDataRes // 产品首页数据
  },
  mutations: {
    setTheme (state, payload) {
      console.log('这是user的mutation');
      state.themeObj = payload
    }
  },
  actions: {
    // 获取产品数据
    queryProDataAction(context) {
      return api.queryProData().then(res => {
        // 页面数据
        let data = (res && res.result) || {}
        context.commit('setProData',  data)
      })
    },
    // 获取首页数据
    queryIndexDataAction(context) {
      return api.queryIndexData().then(res => {
        let data = (res && res.result) || {}
        context.commit('setIndexData',  data)
      })
    },
    // user模块下的userTestAction
    userTestAction ({ commit }, params) {
      return setTimeout(() => {
        console.log('这是user的action');
        commit('setTheme', params + 1)
      }, 100);
    }
  }
}
export default bookModule
```

**在组件中使用**

```
import { mapState, mapGetters, mapActions } from 'vuex'

export default {

  computed: {
    // 【传统方式】获取store中的数据
    // 注意state和getter数据结构的区别（state需要带上模块名，而getter不需要模块名）
    /*
    proData() {
        return this.store.state.book.proData
    },
    themeData() {
      return this.store.getters['themeData']
    },
    proName() {
      return this.store.getters['proName']
    },
    proDesc() {
      return this.store.getters['proDesc']
    },
    indexData() {
      return this.store.getters['indexData']
    },
    */

    // 【辅助函数方式】获取store中的数据（代码更简洁）
    ...mapState({ proData: state => state.proData }),
    ...mapGetters(['themeData']),
    ...mapGetters(['proName', 'proDesc', 'indexData'])
  },
  created() {
  	// 注意这里，这里可以解答上面的疑问，输出见下图
  	this.$store.commit('setTheme','test')
     this.$store.dispatch('userTestAction','test')
    // 【传统方式】获取异步数据
    // this.store.dispatch('queryThemeAction') // 获取主题数据
    // this.store.dispatch('queryProDataAction') // 获取产品数据
    // this.store.dispatch('queryIndexDataAction') // 获取首页数据

    // 【辅助函数方式】获取异步数据（需要先在methods中使用mapActions定义方法）
    this.queryThemeAction() // 获取主题数据
    this.queryProDataAction() // 获取产品数据
    this.queryIndexDataAction() // 获取首页数据
  },
  methods: {
    ...mapActions(['queryThemeAction']),
    ...mapActions(['queryProDataAction', queryIndexDataAction])
  }
}
```

上面的注意点输出:![image-20211018004837232](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img8CiMEfeLu9P1g6Z.png)

可以看出我们只执行了一次全局的commit和dispatch就把每个模块的mutation和action都触发了，所以现在就很好理解上面说的话了，模块内部的 action、mutation 定义可以重名，

并且触发一次会把所有模块的对应重名的action、mutation都触发，`但是getter不能重名，也是this.$store.getterName`就能获取了，是放在全局的

启用了命名空间的 getter 和 action 会收到局部化的 `getter`，`dispatch` 和 `commit`。换言之，你在使用模块内容（module assets）时不需要在同一模块内额外添加空间名前缀。更改 `namespaced` 属性后不需要修改模块内的代码。

当我们在上面的基础下，所有模块仅仅加多一行namespaced: true则可以变为我们理想中的满血版模块化Vuex

例子modules/user.js：

```
import api from '@/api/index'

const userModule = {
  namespaced: true,
  state: {
    themeObj: {} // 主题数据
  },
  getters: {
    themeData: state => {
      return {
        primaryColor: '#fe3132', // 主颜色（如：按钮背景颜色）
        subBgColor: '#fff6f6', // 次要颜色（如：浅色背景色）
        ...state.themeObj // 没有返回数据使用以上默认值，有则覆盖以上数据
      }
    }
  },
  mutations: {
    setTheme (state, payload) {
      console.log('这是user的mutation');
      state.themeObj = payload
    }
  },
  actions: {
    queryThemeAction({ commit }) {
      return api.queryTheme().then(res => {
        let data = (res && res.result) || {}
        commit('setTheme',  data)
      })
    },
    // user模块下的userTestAction
    userTestAction ({ commit }, params) {
      return setTimeout(() => {
        console.log('这是book的action');
        commit('setTheme', params + 1)
      }, 100);
  }
}
export default userModule
```

modules/book.js

```
import api from '@/api/index'

const productModule = {
  namespaced: true,
  state: {
    proData: {}, // 产品数据
    indexDataRes: {} // 产品首页数据
  },
  getters: {
    proName: state => stete.proData.proName || '', // 产品名称
    proDesc: state => stete.proData.proDesc || '' // 产品描述
    indexData: state => stete.indexDataRes // 产品首页数据
  },
  mutations: {
    setTheme (state, payload) {
      console.log('这是user的mutation');
      state.themeObj = payload
    }
  },
  actions: {
    // 获取产品数据
    queryProDataAction(context) {
      return api.queryProData().then(res => {
        // 页面数据
        let data = (res && res.result) || {}
        context.commit('setProData',  data)
      })
    },
    // 获取首页数据
    queryIndexDataAction(context) {
      return api.queryIndexData().then(res => {
        let data = (res && res.result) || {}
        context.commit('setIndexData',  data)
      })
    },
    // user模块下的userTestAction
    userTestAction ({ commit }, params) {
      return setTimeout(() => {
        console.log('这是user的action');
        commit('setTheme', params + 1)
      }, 100);
    }
  }
}
export default bookModule
```

接下所使用模块内的state、getter、mutation、action都需要加上模块名

```
import { mapState, mapGetters, mapActions } from 'vuex'

export default {

  computed: {
    // 【传统方式】获取store中的数据
    /*
    proData() {
        return this.store.state.book.proData
    },
    themeData() {
      return this.store.getters['user/themeData']
    },
    proName() {
      return this.store.getters['book/proName']
    },
    proDesc() {
      return this.store.getters['book/proDesc']
    },
    indexData() {
      return this.store.getters['book/indexData']
    },
    */

    // 【辅助函数方式一】获取store中的数据（代码更简洁）
    /*
    ...mapState({ proData: state => state.productModule.proData }),
    ...mapGetters(['user/themeData']),
    ...mapGetters(['user/proName', book/proDesc', 'user/indexData'])
    */

    // 【辅助函数方式二】获取store中的数据（代码最简洁）
    // 将模块的空间名称字符串作为第一个参数传递给辅助函数，这样所有绑定都会自动将该模块作为上下文。
    ...mapState('book', { proData: state => state.proData }),
    ...mapGetters('user', ['themeData']),
    ...mapGetters('book', ['proName', 'proDesc', 'indexData'])
  },
  created() {
  	// 注意这里，这里可以解答上面的疑问，输出见下图
     this.$store.commit('user/setTheme','test')
     this.$store.dispatch('user/userTestAction','test')
    // 【传统方式】获取异步数据
    // this.store.dispatch('user/queryThemeAction') // 获取主题数据
    // this.store.dispatch('book/queryProDataAction') // 获取产品数据
    // this.store.dispatch('book/queryIndexDataAction') // 获取首页数据

    // 【辅助函数方式】获取异步数据（需要先在methods中使用mapActions定义方法）
    this.queryThemeAction() // 获取主题数据
    this.queryProDataAction() // 获取产品数据
    this.queryIndexDataAction() // 获取首页数据
  },
  methods: {
    ...mapActions('user', ['queryThemeAction']),
    ...mapActions('book', ['queryProDataAction', queryIndexDataAction])
  }
}
```



#### vue中使用axios

##### 基本使用

axios功能特点：

- 在浏览器中发送XMLHttpRequests请求
- 在node.js中发送http请求
- 支持Promise API
- 拦截请求和响应
- 转换请求和响应数据

1. 安装axios(vue是不自带axios的，需要手动安装)

   ```
   npm install axios --save
   ```

2. 引入并配置axios

   第一步：创建network文件夹（非必须，个人习惯），在network文件夹下创建request.js

   request.js输入以下内容：

   ```
   import axios from 'axios'
   const http = axios.create({
     baseURL: 'http://localhost:3000/api/admin',//这个按实际情况填写
   })
   export default http
   ```

   第二部：在main.js中引入并配置axios(`推荐使用`)

   如果想获取baseUrl,需要$http.defaults.baseUrl

   输入以下代码：

   ```
   import http from 'network/index'
   Vue.prototype.$http = http//这样可以让axios在所有组件中使用
   ```

3. 基本使用

   <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220745-1657022362082271.png" alt="image-20201020232129637" style="zoom:80%;" />

   **1、axios(config)**

   ```
   import axios from 'axios'
   //如果method不写，默认是get请求
     axios({
     	 method:'get'
         url: 'http://152.136.185.210:8000/home/data?type=sell&page=3',
    }).then((res) => {
         console.log(res)
    })
   ```

   ```
     axios({
         url: 'http://152.136.185.210:8000/home/data',
         //专门针对get请求的参数拼接
         params:{
           type='top',
           page:1
         }}).then((res) => {
         console.log(res)
       })
   ```

   2、axios.get(url[,config]),中括号[]里面的表示可选，config表示配置

   ```
   import axios from 'axios'
   //如果method不写，默认是get请求
     axios.get('http://152.136.185.210:8000/home/data?type=sell&page=3',{
     	 method:'get'
    }).then((res) => {
         console.log(res)
    })
   ```

   3、axios.post(url[,data[,config]])

   ```
   import axios from 'axios'
   //如果method不写，默认是get请求
     axios.post('http://152.136.185.210:8000',{
     	name:'lisi',
     	age:18
    }).then((res) => {
         console.log(res)
    })
   ```

注意：axios请求返回的是一个promise，我们需要用.then(res =>{})来拿到正常的数据类型

##### axios发送并发请求

指定一个或几个请求发送接收完毕再处理

```
 axios
      .all([
        axios.get('url: 'http://152.136.185.210:8000/home/data',
          {
          params: {
            type: 'top',
            page: 1,
          },
        }),
        axios.get('url: 'http://152.136.185.210:8000/home/data'),
      ])
      .then(
        axios.spread((res1, res2) => {
          console.log(res1)
          console.log(res2)
        })
      )
```

其中res1对应第一个请求结果，res2对应第二个请求结果

![image-20201021005944417](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220748-1657022362082270.png)

##### 全局配置

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220753-1657022362082272.png" alt="image-20201021010330644" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220757-1657022362082273.png" alt="image-20201021012609384" style="zoom:67%;" />

##### axios的实例

```
   const instance1 = axios.create({
      baseURL: 'http://localhost:3005/admin/api',
      timeout: 5000,
    })
    instance1.get('/index').then((res) => {
      console.log(res)
    })
```

##### axios模块封装

为了实现可复用，我们一般会采用封装的形式使用axios，也就是再network文件夹创建request.js,然后向外暴露接口，

有需要使用网络请求的直接调用这个接口

使用实例：

在network中的request.js中：

```
	import axios from 'axios'
     export function request(config) {
       // 1、创建axios的实例
       const instance = axios.create({
         baseURL: 'http://152.136.185.210:8000',
         timeout: 5000,
       })
       //发送真正的网路请求
       return instance(config)
     }
```

在其他组件中：

```
	import { request } from './network/request'	
	request({
      url: '/home/data',
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
```

当然，上面方法还是需要在每个组件中导入，所以还不够好，以下方案比较推荐使用，不需要每次都导入，直接可以用$http引用

第一步：创建network文件夹（非必须，个人习惯），在network文件夹下创建request.js

request.js输入以下内容：

```
     import axios from 'axios'
     const http = axios.create({
       baseURL: 'localhost:3000/admin/api',//这个按实际情况填写
     })
     export default http
```

第二部：在main.js中引入并配置axios(`推荐使用`)

输入以下代码：

```
     import http from 'network/index'
     Vue.prototype.$http = http//这样可以让axios在所有组件中使用
```

##### axios拦截器（interceptors)的使用

request请求拦截器：发送请求前统一处理，如：设置请求头headers、应用的版本号、终端类型,登录token等。

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220802-1657022362082274.png" alt="image-20201107110132399" style="zoom:67%;" />	  

config就是发送的请求，必须return 返回，请求才能继续发送

如果我们想阻止发送请求或者接收请求，我们可以返回一个Promise.reject(err)

response响应拦截器：有时候我们要根据响应的状态码来进行下一步操作，例如：由于当前的token过期，接口返回401未授权，那我们就要进行重新登录的操作。

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220806-1657022362082275.png" alt="image-20201107110154752" style="zoom:80%;" />

响应拦截可以实现登录控制，和返回数据处理

##### 处理跨域

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210326090227-1657022362082278.png" style="zoom:67%;" />

在vue.config.js（如果没有就在项目根目录新创建）中加上如下代码：

![image-20201017122820391](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220809-1657022362082276.png)

```
//解决跨域问题
  devServer: {
    proxy: {
      //配置跨域
      '/api': {
        target: 'http://121.121.67.254:8185/', //这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true, //允许跨域
      },
    },
  },
```

其中/api的意思是拦截你所有带有/api的请求，然后让拦截的本地模拟服务器请求数据，这样就不会产生跨域了

`设置跨域后，组件中的请求地址就不能再带ip和端口了，因为这里设置的跨域处理会默认帮加上的，组件的请求的往本地服务器请求的，如果没有`

`注意：如果使用代理，那么axios请求就不需要写域名和ip了，否则还会报错`

![image-20210326084618241](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210326084618-1657022362082277.png)

`需要把域名端口去掉，或者加上和网页运行的域名端口，而不是服务器的域名和端口，服务器的端口和域名，代理会进行处理转发`

#### mixins

mixins基础概况

vue中的解释是这样的，如果觉得语言枯燥的可以自行跳过嘿~

混入 (mixins)： 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

怎么用？

举个栗子：

定义一个混入对象

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406221445-1657022362086297.webp)

把混入对象混入到当前的组件中

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406221706-1657022362082280.webp)

用法是不是相当简单呀

mixins的特点

**1、 方法和参数在各组件中不共享**

混合对象中的参数num

![](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406222110-1657022362082281.webp)

组件1中的参数num进行+1的操作

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406222216-1657022362082279.webp)

组件2中的参数num未进行操作

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406222411-1657022362082282.webp)

看两组件中分别输出的num值

![img](https:////upload-images.jianshu.io/upload_images/10069417-951e440b483654f1.png?imageMogr2/auto-orient/strip|imageView2/2/w/647/format/webp)

![img](https:////upload-images.jianshu.io/upload_images/10069417-051a611fa184eb4b.png?imageMogr2/auto-orient/strip|imageView2/2/w/580/format/webp)

大家可以看到，我在组件1里改变了num里面的值，组件2中的num值还是混入对象里的初始值

**2、 值为对象的选项，如methods,components等，选项会被合并，键冲突的组件会覆盖混入对象的**

**混入对象中的方法**

![img](https:////upload-images.jianshu.io/upload_images/10069417-7eb65d68e5f3ad23.png?imageMogr2/auto-orient/strip|imageView2/2/w/825/format/webp)

组件中的方法

<img src="https:////upload-images.jianshu.io/upload_images/10069417-4bb148ff01d43768.png?imageMogr2/auto-orient/strip|imageView2/2/w/1027/format/webp" alt="img" style="zoom:80%;" />

打印台的输出

![img](https:////upload-images.jianshu.io/upload_images/10069417-1dbd24819335b26d.png?imageMogr2/auto-orient/strip|imageView2/2/w/542/format/webp)

**3、 值为函数的选项，如created,mounted等，就会被合并调用，混合对象里的钩子函数在组件里的钩子函数之前调用**

**混入对象函数中的console**

![img](https:////upload-images.jianshu.io/upload_images/10069417-8d9de93e376fea49.png?imageMogr2/auto-orient/strip|imageView2/2/w/749/format/webp)

组件函数中的console

![img](https:////upload-images.jianshu.io/upload_images/10069417-e7d281e45b2a6274.png?imageMogr2/auto-orient/strip|imageView2/2/w/743/format/webp)

打印台的打印

![img](https:////upload-images.jianshu.io/upload_images/10069417-4e01bb1cadb4055a.png?imageMogr2/auto-orient/strip|imageView2/2/w/554/format/webp)

**当然，混入组件也是可以的**

![image-20210406231022018](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406231022-1657022362083283.png)

![image-20210406231051345](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406231051-1657022362083284.png)

![image-20210406231138407](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406231139-1657022362085288.png)

**全局混入**

混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，它将影响**每一个**之后创建的 Vue 组件。使用恰当时，这可以用来为自定义选项注入处理逻辑。

**方法一：在工程的main.js中直接注册，实现如下：**

```
     import Vue from 'vue';
     import App from './App';

     Vue.mixin({
       created() {
         console.log('全局混入的钩子函数');
       }
     });

     /* eslint-disable no-new */
     new Vue({
       el: '#app',
       components: { App },
       template: '<App/>'
     });
```

**方法二**：模块化注册，新建mixin.js文件并添加以下代码：

```
	export default {
       install(Vue) {
         Vue.mixin({
           created() {
             console.log('全局混入的钩子函数');
           },
           methods:{
           	test(){
           		console.log("test")
           	}
           }
         })
       }
     }
```

然后在main.js中引入该文件并使用use方法进行注册

```
     import Vue from 'vue';
     import App from './App';
     import myMixin from './mixin.js';

     Vue.use(myMixin);

     /* eslint-disable no-new */
     new Vue({
       el: '#app',
       components: { App },
       template: '<App/>'
     });
```

然后在任何组件都可以使用了，并且不需要引入

比如在一个组件中使用：

可以直接使用this.test()

与vuex的区别

经过上面的例子之后，他们之间的区别应该很明显了哈~

vuex：用来做状态管理的，里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。

Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。

与公共组件的区别

同样明显的区别来再列一遍哈~

组件：在父组件中引入组件，相当于在父组件中给出一片独立的空间供子组件使用，然后根据props来传值，但本质上两者是相对独立的。

Mixins：则是在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，可以理解为形成了一个新的组件。

`注意：请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)。`

​			`大多数情况下，只应当应用于自定义选项，就像上面示例一样。推荐将其作为[插件]发布，``以避免重复应用混入。`

#### render函数

> Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。
>
> 这时你可以用**渲染函数**，它比模板更接近编译器。

**render函数的参数是createElement函数**

​		createElement返回值是一个虚拟dom。即VNode也就是我们要渲染的节点

createElement有三个参数

​		第一个参数，必需，{ String | Object | Function }

​					*要渲染的html标签*

​		第二个参数，可选：{ Object }

​					*html标签的各种属性*

​		第三个参数：可选，{ String | Array }

​					*子虚拟节点（VNodes）,当前html标签的子元素*

**Vue渲染过程**

1. 独立构建

   包含模板编译器，html字符串 -> render函数 -> VNode -> 真实DOM节点

2. 运行时构建

   不包含模板编译器，render函数 -> VNode -> 真实DOM节点

   *使用实例：*

   ```
   <script>
   export default {
     name: 'App',
     render(h) {
       const _elm = h(
         'div',
         {
           class: 'class-name',
           // 设置style
           style: { color: 'red', fontSize: '22px' },
           // 设置html内容
           // domProps: { innerHTML: '学习下render函数的用法！' },
           // 设置html的属性
           attrs: { id: 'xx-id' },
         },
         [ 
           '我是父元素的文本！',
           h('h1', '这是一个子标签！'),
           h('p', '这是一个子标签！'),
           h('a', '这是一个子标签！'),
           h('h1', '这是一个子标签！'),
         ]
       )
       console.log(_elm)
       return _elm
     },
   }
   </script>
   ```

   

#### Vue源码解析

##### Vue渲染过程

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220812-1657022362086295.png" alt="image-20210221172208779" style="zoom:50%;" />

我们首先要了解Vue的两种渲染方式先，比如通过cdn引入的vue.js和通过vue脚手架(默认配置)搭建的vue项目有什么区别？其实两者在是存在区别，我们先看下官网是怎么说的吧

##### 术语

- **完整版**：同时包含编译器和运行时的版本。
- **编译器**：用来将模板字符串编译成为 JavaScript 渲染函数的代码。
- **运行时**：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切。
- **[UMD](https://github.com/umdjs/umd)**：UMD 版本可以通过 `<script>` 标签直接用在浏览器中。jsDelivr CDN 的 https://cdn.jsdelivr.net/npm/vue@2.6.14 默认文件就是运行时 + 编译器的 UMD 版本 (`vue.js`)。
- **[CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1)**：CommonJS 版本用来配合老的打包工具比如 [Browserify](http://browserify.org/) 或 [webpack 1](https://webpack.github.io/)。这些打包工具的默认文件 (`pkg.main`) 是只包含运行时的 CommonJS 版本 (`vue.runtime.common.js`)。
- **[ES Module](http://exploringjs.com/es6/ch_modules.html)**：从 2.6 开始 Vue 会提供两个 ES Modules (ESM) 构建文件：
  - 为打包工具提供的 ESM：为诸如 [webpack 2](https://webpack.js.org/) 或 [Rollup](https://rollupjs.org/) 提供的现代打包工具。ESM 格式被设计为可以被静态分析，所以打包工具可以利用这一点来进行“tree-shaking”并将用不到的代码排除出最终的包。为这些打包工具提供的默认文件 (`pkg.module`) 是只有运行时的 ES Module 构建 (`vue.runtime.esm.js`)。
  - 为浏览器提供的 ESM (2.6+)：用于在现代浏览器中通过 `<script type="module">` 直接导入。

##### 运行时 + 编译器 vs. 只包含运行时

如果你需要在客户端编译模板 (比如传入一个字符串给 `template` 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版：

```
// 需要编译器
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 不需要编译器
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```

当使用 `vue-loader` 或 `vueify` 的时候，`*.vue` 文件内部的模板会在构建时预编译成 JavaScript。你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可。

因为运行时版本相比完整版体积要小大约 30%，所以应该尽可能使用这个版本。如果你仍然希望使用完整版，则需要在打包工具里配置一个别名：

##### webpack

```
module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  }
}
```

也就是说，如果是通过cdn引入的是完整版vue.js，会走以下完整流程：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220812-1657022362086295.png" alt="image-20210221172208779" style="zoom:50%;" />

如果是基于Vue-cli3以上的版本默认会去掉编译器的，也就是运行时模式，也就是会只能识别通过render函数构建的结构，普通的html字符串则不可以识别，而完整版可以

那么为什么运行时版本不需要编译器呢？

因为，webpack会把所有.vue文件打包成render构建的结构，而不再需要我们先转成ast -> render结构

##### html -> ast实现`（是基于html的，如果是string则还没了解）`

domtotree

```
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>

    <body>
      <div id="app">divText
        <ul>
          <li OnClick="test()">哈哈哈哈哈哈</li>
          <li>哈哈哈哈哈哈</li>
          <li>哈哈哈哈哈哈</li>
          <img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt="">
        </ul>
      </div>
      <script>
        function test() {
          console.log('测试');
        }
        //获取DOM的所有有效属性，非默认
        function getDomAttrs(dom) {
          const attrs = {};
          for (var attrKey of dom.getAttributeNames()) {
            if (attrKey === '@click') {
              dom.addEventListener('click', test)
            }
            attrs[attrKey] = dom.getAttribute(attrKey)
          }
          return attrs
        }
        // 把真实DOM解析为虚拟DOM
        function dom2tree(dom) {
          // 初始化vNode
          const vNode = {}
          // 分别文本和非文本元素进行处理
          if (dom.tagName) {
            vNode.tag = dom.tagName
            vNode.attrs = getDomAttrs(dom)
          } else {
            vNode.tag = 'text'
            vNode.text = dom.data
          }
          // 初始化vNode的子元素
          vNode.children = []
          // 递归调用
          dom.childNodes.forEach(child => vNode.children.push(dom2tree(child)))
          return vNode
        }
        console.log(dom2tree(document.body));
      </script>
    </body>
    </html>
```

html被解析成了vdom

![image-20220808001927545](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220808001927545.png)

然后我们再把vdom转化为真实DOM，也就是render(vdom转换成真实DOM 的过程）

vdom to DOM

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="app"></div>
  <script>
    // 真正的渲染函数
    function _render(vNode) {
      if (vNode.tag.toLowerCase() === "text") {
        return document.createTextNode(vNode.data);
      } else {
        var dom = document.createElement(vNode.tag);
      }
      if (vNode.attrs) {
        // 遍历属性
        Object.keys(vNode.attrs).forEach((key) => {
          const value = vNode.attrs[key];
          dom.setAttribute(key, value);
        });
      }
      // 子数组进行递归操作，空数组不进行处理
      vNode.children?.forEach((child) => dom.appendChild(_render(child)));
      return dom;
    }
    const tree = {
      tag: 'DIV',
      children: [
        { tag: 'SPAN', children: [] },
        {
          tag: 'UL',
          children: [
            { tag: 'LI', children: [{ tag: 'TEXT', data: 'hashdash' },] },
          ]
        },
        {
          tag: 'UL',
          children: [
            {
              tag: 'LI', children: [
                {
                  tag: 'A',
                  attrs: {
                    href: "https://www.baidu.com"
                  },
                  children: [{ tag: 'TEXT', data: '我是超链接' }]
                }]
            },
            { tag: 'TEXT', data: '我是文本' },
          ]
        },
        {
          tag: 'IMG',
          attrs: {
            src: 'https://www.baidu.com/img/flexible/logo/pc/result.png'
          }
        }
      ]
    }
    document.querySelector('#app').parentNode.appendChild(_render(tree))
  </script>
</body>
</html>
```

渲染结果：

![image-20220808002008640](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220808002008640.png)

##### MVVM、MVP和MVC

MVVM，即**model、view、view-model，业务层、视图层以及两者的绑定层**。Vue的设计参考了MVVM架构，但不完全是一个MVVM框架，因为它没有严格意义上的绑定层。

MVVM要求开发者将业务层和视图层分开：业务层负责管理数据；视图层负责页面渲染；绑定层负责双向绑定，即视图层操作通过绑定层影响业务数据，业务数据的变化通过绑定层影响视图渲染，这三层是完全解耦的：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-0f709bd0d7d3be9dbe981a68908cc650_720w.jpg)

举个例子，假如我们的页面有一个`h1`标题，它要渲染的是js中变量`title`的值：

```html
<h1>这是标题</h1>

<script>
  let title = '这是标题';
</script>
```

这里`h1`的文本内容就是由`view`层管理的；而`model`层负责的是管理业务数据`title`。现在`view`和`model`层都有了，下面我们就要让`h1`的文本内容和`title`的内容保持同步，这就是`view-model`层要做的事。假设我们有这样一个[xml文件](https://www.zhihu.com/search?q=xml文件&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})：

```html
<h1>{{title}}</h1>
```

它表示`h1`的文本和变量`title`的值是绑定的，当一个发生变化时，另一个应该同步变化。

如果我们能够编写一个框架，自动根据一个值，更新另一个值，那么实际上就是实现了`view-model`层，我们的框架就可以称为一个MVVM框架。以后只要我们定义好视图和业务逻辑，并用一个xml文件描述两者的绑定关系，就可以实现视图和数据的同步了，这也是谷歌的`Data Binding`的基本实现思路。

MVVM模式参考自MVP模式，而两者都是借鉴自经典的MVC模式。先来说说MVVM和MVP的差异。

MVP的全写是`Model-View-Presenter`，即业务层、视图层和控制层。这里的控制层Presenter与`view-model`层的作用是完全一样的，就是负责对视图层和业务层进行同步。但不同的是，Presenter的实现较为复杂，它要求开发者必须手动封装两者的同步逻辑，如jQuery框架就可以看做一个MVP模式的实现：

```html
<h1></h1>

<script>
  let title = '这是标题';

  $('h1').text(title);
</script>
```

开发者需要定义当变量变化时如何更新视图，以及获取到用户输入时如何更新变量，这两者加起来就是它的Presenter层实现。这种方式也可以实现视图和业务逻辑的同步，但显然，MVP的控制层逻辑要比MVVM的声明式绑定写起来复杂得多，所以MVP模式基本上已经被MVVM代替。

而MVC是上述两个模式的鼻祖，也曾是java中最经典的模式之一，它的全写是`Model-View-Controller`。model和view层与上述两个模式一致，controller层与MVP的Presenter层一样，也被称作控制层。不过，MVC中的controller功能很弱，它实际上只是一个路由层，真正实现视图与业务数据同步的是`model`层的service，controller的作用就是找到对应的service而已。controller层的功能过于薄弱使得`model`层变得很复杂，所以目前[MVC模式](https://www.zhihu.com/search?q=MVC模式&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})已经很少使用。

Vue之所以不是一个MVVM框架，是因为它没有真正的`view-model`层。在Vue中，`view-model`是通过[模板语法](https://www.zhihu.com/search?q=模板语法&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})间接实现的，Vue通过编译模板，可以解析出视图层和业务层的绑定关系，通过响应式系统和虚拟DOM来实现两者的同步，详细的过程后面会加以介绍。

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ab2dbb3960771c48f7a684acf13c5ee4_720w.jpg)

##### Vue的基本配置

由于讲解Vue配置不是本文的重点，这里我们只是简单地概括一下，需要详细学习这部分内容的可以阅读Vue的官方文档：[Vue官方网站](https://link.zhihu.com/?target=https%3A//cn.vuejs.org/v2/guide)。

为了简单，我们先以一个cdn版本的Vue为例：

```html
<script type="text/javascript" src="https://unpkg.com/vue"></script>

<div id="app"></div>

<script>
  let app = new Vue({
    el: '#app',
    data: { title: '标题' },
    template: '<h1>{{title}}</h1>',
    methods: {
      changeTitle (title) { this.title = title; }
    }
  });

  setTimeout(function () {
    app.changeTitle('新标题');
  }, 1000);
</script>
```

执行完script脚本对应的框架代码后，window上会新增一个构造函数`Vue`，用于构建Vue实例。我们向`new Vue`传入了一个配置对象，这个对象包含如`el、data、template、methods`等属性，用于为Vue实例添加属性和方法。Vue会根据这些配置，生成一个可以自动生成视图的响应式的[Vue组件](https://www.zhihu.com/search?q=Vue组件&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})，它不仅负责管理视图层和业务层，还负责两者的同步。

我们来简单看一下一些常用配置的作用：

1. **el**
   根元素，该参数只能由根节点声明，表示当前Vue应用需要被挂载到页面的哪个DOM节点上。如上面的例子指定了根元素为`#app`，那么该Vue实例生成的DOM就会直接替换id为`app`的元素。
2. **name**
   组件的名字，主要用于全局注册组件，如：

```js
    import MyComponent from 'MyComponent';
    Vue.component(MyComponent.name, MyComponent);
```

1. **components**
   声明当前组件的外部依赖，相当于局部注册组件，在编写单组件时，如果需要用到其他的项目内组件通常会提供该参数。
2. **props**
   来自[父级组件](https://www.zhihu.com/search?q=父级组件&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})的数据依赖，这个依赖是响应式的。
3. **data**
   业务数据，这个参数是`model`层的核心，相关的业务逻辑都是围绕data展开的。
4. **computed**
   计算属性，定义一组变量，这组变量的值是基于一个或多个props、data计算而来，computed内变量的值会根据这些依赖的值变化而自动更新，并且会自动缓存上次的计算结果。
5. **watch**
   手动监控props、data或者computed的变化，定义变化时的回调函数。
6. **生命周期方法**
   定义Vue组件在各个生命周期需要执行的回调函数，Vue在执行到对应的阶段时会调用它们。生命周期与Vue组件创建的细节是第二部分渲染原理的重点。
7. **methods**
   组件的工具方法集。methods定义了一组工具方法，可以在computed、watch、生命周期方法或者其他工具方法中调用。

有了这些基本知识的铺垫，下面我们就开始详细介绍Vue的渲染过程。

##### Vue渲染原理

我们先来打通HTML与Vue模板的关系。

###### 1. HTML与模板

下面是一个常见的Vue例子：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-b8cb2ab764b66a4f51d33b3be5b11ec0_720w.jpg)

整个Vue应用被挂载到页面上id为app的节点上，传入的模板字符串是`<App/>`。Vue会解析组件App的模板来替换该标签。在解析App的模板时发现它又引入了另一个组件`MyComponent`，于是Vue继续解析MyComponent的模板，将解析结果替换到App组件模板内。全部解析之后会得到这样一个模板：

```html
<template>
  <div id="a">
    <p>111</p>
    
    <div id="comp">
      <h1>222</h1>
      <p>333</p>
    </div>
    
  </div>
</template>
```

注意，这并不是HTML代码，它仍然是Vue模板（只是这里没有定义数据绑定而已）。Vue会用纯JavaScript来描述上述结构，类似下面这样（这不是真正的内部表示，后面我们会看到Vue的真实内部表示）：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-00a10cdf02adf3d359350a82825d03b3_720w.jpg)

这里最外部id为app的节点实际上是不存在的，Vue在生成DOM时会替换掉该元素。

我们看到，Vue用一个JavaScript对象描述了编译出来的模板（如果有数据绑定，它还会描述模板与数据的绑定关系）。接下来只需要调用原生的DOM方法依次创建这里的每一个节点，然后将它们挂载成一棵[DOM子树](https://www.zhihu.com/search?q=DOM子树&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})，并插入页面，就可以得到真正的HTML。我们一般把这个树状JavaScript对象称为虚拟DOM树。下面是上面的JavaScript对象对应的DOM结构：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-f0acf0c6714be8e92385f7d1af32a0b7_720w.jpg)

也就是说，通过模板可以得到真实HTML的JavaScript对象表示，然后调用原生的DOM方法，借助这个JavaScript对象去生成真实的HTML。不仅如此，在这个过程中，Vue还注入了响应式系统，可以根据数据变化自动更新视图，以及根据视图自动更新数据，下面我们来讲解具体的实现过程。

###### 2. Vue组件的完整渲染过程

Vue的执行过程主要分两大阶段：Vue自身的初始化阶段和实例的生命周期管理阶段。

当通过&lt;script>脚本或者`import Vue from 'vue'`引入`Vue`时，Vue框架本身的代码会被执行，这一阶段的作用是对框架自身进行初始化。简单来说，就是定义构造函数`function Vue`，并为其添加大量的原型方法（以及一些工具方法），下面是一个说明示例：

```js
(function(){
  ...
  // 定义构造函数
  function Vue (options) {
    this._init(options);
  }
  // 定义原型方法
  Vue.prototype._init = function (options) { ... }
  Vue.prototype._update = function () { ... }
  ...
  window.Vue = Vue;
})();
```

而在执行`new Vue({ ... })`语句时，就进入了实例的生命周期管理阶段。这一阶段是调用上述构造函数，构造和初始化Vue实例，并且管理它的整个生命周期。

下面我们就具体来看看这两个阶段都做了什么。

**(1). Vue自身的初始化阶段**

打开Vue源码的`src > core > instance > index.js`文件，可以看到以下代码：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ce1e5f5841c5fea7ed2a5ec63af02ac2_720w.jpg)

实际上这就是主要的初始化过程，包括定义Vue构造函数，和调用5个mixin方法为Vue混入大量的原型方法。了解Vue自身初始化的关键就是探究这5个[mixin函数](https://www.zhihu.com/search?q=mixin函数&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})究竟为Vue混入了哪些原型方法，下面是一个简单的例子：

```js
<!DOCTYPE html>
  <html>
  <head>
       <script src="vue-2.6.10-learning.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      var app = new Vue({
         el: '#app',
         template: "<div><h1>标题</h1><p>{{ message }}</p></div>",
         data () { return { message: 1 } },
         mounted () { 
              console.log(this.$data);
              setTimeout(() => { this.message = 2; }, 1000);
              setTimeout(() => { this.$destroy(); }, 5000);
         }
      })
    </script>
  </body>
  </html>
```

这个`vue-2.6.10-learning.js`是我下载到本地的一个Vue代码文件，我在文件内各个关键位置打上了console输出，以此来显式观察Vue的执行过程，下面是输出结果（以$开头的是直接暴露给开发者的接口，以_开头的是框架内部方法，不推荐开发者使用）：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ef9c7eb836d14d06626e34e2142cf13e_720w.jpg)

这里就是Vue自身初始化的全过程，与组件实例构造相关方法的实现，我们会在组件的生命周期管理阶段详细剖析，下面是它们大致的介绍。

首先`initMixin`为Vue混入了`_init`原型方法，它的作用是根据传入的options初始化Vue组件实例。具体的初始化过程是生命周期管理阶段的重点之一，下一部分会详细介绍。

接着`stateMixin`为Vue混入了`$data、$props、$set、$delete和$watch`这5个与组件状态有关的原型方法或属性：`$data`和`$props`是`_data`和`_props`（这两个属性是初始化Vue实例时由_init添加到组件对象上的）的只读版本；`$set`和`$delete`是Vue提供的全局响应式方法，我们知道，由于JavaScript的限制，直接为已有对象添加或删除属性时，该属性不会被响应式系统观测到，`$set`和`$delete`就是响应式地新增或删除属性的全局方法；`$watch`与`watch`配置的作用是一致的，只是它可以通过js来手动调用，而不用提前在options中声明。

下面`eventsMixin`混入了`$on、$once、$off、$emit`这四个与事件相关的原型方法。`$on`用于向实例注册事件监听；`$once`则是注册一个只会被调用一次的事件监听；`$off`用于取消某个或某类事件监听；`$emit`用于触发某个事件。

然后`lifecycleMixin`则向Vue混入了`_update、$forceUpdate和$destroy`这4个与实例生命周期相关的原型方法。`_update`负责组件的更新；`$forceUpdate`用于强制更新组件，一般是由于某些编码bug导致数据与视图不同步时手动调用；`$destroy`用于销毁组件。

最后，`renderMixin`会向Vue混入`$nextTick和_render`这两个与组件渲染相关的原型方法。`$nextTick`用于将一段代码逻辑推入微任务队列，以保证视图更新后才会执行；`_render`负责渲染组件，它的主要实现逻辑是调用组件的`render`函数（[render函数](https://www.zhihu.com/search?q=render函数&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})由模板编译而来，也可以手工编写）生成DOM，然后挂载到页面上。

上面的方法位于Vue的原型对象上，对任何一个Vue组件都是通用的，执行完上述代码后，内存中的Vue结构是这样的：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-199566fb5601a4f5eaa5d1f017678b81_720w.jpg)

可以看到，Vue构造函数和原型对象都初始化完毕了。但是由于还没有执行`new Vue`，所以暂时还没有生成可用的Vue组件实例。

**(2). 组件实例的生命周期管理阶段**

a. 实例初始化阶段

这一阶段开始的标志就是调用`new vue()`来构造一个Vue组件实例。自该语句开始，一个Vue应用正式被构建。该阶段大致又可分为两个阶段，分别是初始化阶段和挂载（销毁）阶段。当初始化完成时，如果`el`配置存在，则立即进入挂载阶段，否则将等待手动调用`$mount`才会进入挂载阶段。

我们回顾一下Vue构造函数的实现：

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

真正有效的就只有一行代码：`this._init(options)`，即调用原型上的`_init`方法，传入options，初始化组件实例。下面是初始化阶段的整个过程输出：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-f968af35f02fae0f20846ed7348c2a45_720w.jpg)

整个过程的关键点为：

1. 初始化`$options`，这一步就是把组件配置`options`直接保存为实例的`$options`属性，以供后面的各种初始化使用。
2. 调用`initProxy`方法初始化`proxy`代理。如果浏览器支持proxy，Vue会为当前实例生成一个代理对象，以它作为render函数的调用者，以提高性能，如果不支持，则该代理就是当前实例自身。
3. 调用`initLifecycle`初始化组件生命周期。这里主要是初始化一些与生命周期相关的实例属性，如`$children、_watcher、_isMounted`等。它们暂时只是空值，会在进入特定的生命周期时被赋予特定的值。
4. 调用`initEvents`初始化组件事件属性。主要是定义`_events`属性，该属性后面将用于存储与当前组件有关的事件监听，目前它的值是空的，挂载阶段才会为其赋值。
5. 调用`initRender`初始化与渲染相关的实例属性和方法。包括初始化`_vnode、$slots、_c、$attrs、$listeners`等，`_vnode`将在挂载阶段保存当前组件对应的虚拟节点；`$slots`用于保存插槽内容；`_c`是渲染真实DOM的方法（配置`render: h => h(App)`的函数h指的正是`_c`），在浏览器环境下，它主要基于`document.createElement`实现；`$attrs和$listeners`用于保存来自父组件的属性和监听函数注入。
6. **执行到这里，与组件状态无关的配置都已经初始化完毕，`beforeCreate`生命周期钩子函数被调用。**
7. 调用`initInjections`初始化注入。它要解析的是依赖注入模式下当前组件从外部注入的变量，关于依赖注入模式，这里暂不详解，请参考Vue官网。
8. 调用`initState`初始化组件状态。这里分别又调用了`initProps、initMethods、initData、initComputed和initWatch`来初始化配置中的`props、methods、data、computed和watch`。它们都是与组件的业务逻辑息息相关的配置，执行完毕后，它们都以实例属性或方法的形式直接添加到了组件上。比如，当执行完`initData`后，你就可以直接用`this.message`来访问data中的[message变量](https://www.zhihu.com/search?q=message变量&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})了，其他配置同理。值得一提的是，这一步骤的主要作用是构建响应式系统，比如`initData`不仅仅是将变量添加到组件上，而且为其生成了一个Observer观察者对象，这样Vue就可以对该变量的变化进行观测，关于响应式系统的实现，我们后面会继续讲到。
9. 调用`initProvide`初始化`provide`，这是依赖注入模式的provide部分，与injections是对应的，感兴趣的可以参考Vue官网了解它的用法。
10. **现在组件实例已经初始化完毕，执行`create`生命周期钩子函数。**

初始化完毕后的内存图是这样的：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-cc0445a2ed7f981de77ab437493fafe8_720w.jpg)

在`_init`函数的最末尾，Vue会检查`el`属性是否存在，如果存在，将进入挂载阶段：

```js
Vue.prototype._init = function (options) {
  ...
  if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
}
```

如果没有el属性，则需要等到手动调用`$mount`方法时才会进行挂载。

在讲解挂载阶段之前，我们再回头探讨一下响应式系统。我们知道，响应式系统的核心对象是`data`，所以响应式系统主要是在`initData`中构建起来的（props、computed等都间接地依赖data，因此它们的响应式本质上都来自于data的响应式特性），我们剥离出initData最关键的一行代码：

```js
function initData () {
  ...
  // 调用observe观测data
  observe(data, true /* asRootData */)
}
```

[observe函数](https://www.zhihu.com/search?q=observe函数&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})用于将data转化为响应式，也就是搭建响应式系统。响应式系统包括三个核心对象：`Observer`、`Dep`和`Watcher`。

Observer以`__ob__`的属性的形式存在与数据对象上，用于观测对象属性的变化。Dep以`dep`属性的形式存在于`__ob__`属性内，负责帮助Observer收集和通知订阅者。而Watcher就是订阅者，它存在于`dep`属性的[subs数组](https://www.zhihu.com/search?q=subs数组&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})属性内，负责在数据发生变化时执行某些操作（如更新视图或执行回调）。三者的结构如下：

```js
// initData执行完毕后组件的_data属性
// 包含__ob__属性证明它已经是响应式的
this._data = {
    message: ‘’,
    __ob__: {
        dep: {
             subs: [watcher, …]  // 组件外部watcher
        }
    },
    get message (): {}  // 调用get时，依赖会被收集
    set message (): {    // 内部包含对该属性的观察者对象
        // 这里包含组件内对message的订阅者(watcher)
    }
}
```

调用observe观测data时，Vue会为它添加一个Observer类型的`__ob__`属性，这个过程中使用`Object.defineProperty`递归地修改data每个属性的get和set，同时`__ob__`属性还会初始化一个[dep属性](https://www.zhihu.com/search?q=dep属性&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A266966092})，用于管理相关依赖，这些依赖（即watchers）被保存在dep属性的subs数组内。调用`new Watcher`生成一个订阅者时，它会自动进入该数据对象的订阅者队列，而当数据变化时，Observer会通知Dep，Dep则依次调用每个watcher提供的run方法，执行对应的回调，以此实现响应式系统。具体的过程可参考我之前关于响应式系统的介绍：[Vue源码笔记之响应式系统](https://link.zhihu.com/?target=https%3A//blog.csdn.net/qq_41694291/article/details/100175402)。

b. 组件挂载、更新和销毁阶段

组件初始化完毕后，如果`el`属性存在，就可以进行挂载以生成真正的DOM了。下面是整个挂载、更新和销毁过程：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-a439d19484a658f29797f7137a717522_720w.jpg)

以下是挂载阶段的流程图表示：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-c0e92885ba4c21915e9ee85faa84720e_720w.jpg)

首先是检查render函数是否存在。对于完整版本的Vue，如果render函数不存在，那么它将调用自身的模板编译器对template进行编译；对于运行时版本，如果render函数不存在否则直接抛出异常。整个的编译过程较为复杂，我们直接给出编译前后的效果：
模板：

```html
<template>
  <div id="app">
     <ul>
       <li v-for=“item in items”>
          itemid: {{ item.id }}
       </li>
    </ul>
  </div>
</template>
```

渲染函数：

```js
vm._render = function(){
    with(this){
       return _c('div’, { attrs:{"id":"app"} },
           [_c('ul',_l((items),function(item){
             return _c('li',
                 [_v("\n itemid:"+_s(item.id)+"\n ")]
             )}
          )
       )]
     )}
  }
```

上述模板与下面的渲染函数完全等价，可以相互转换。渲染函数里的`_c、_l、_v、_s`等都是Vue定义的辅助渲染函数，用于解析模板中不同的部分。如`_c`用于创建DOM，它主要基于document.createElement；`_l`用于解析列表，如`v-for`列表；`_v`用于解析标签文本；`_s`用于解析变量的值，辅助渲染函数还有很多，这里暂不一一详述。

有了渲染函数，接下来就是定义一个用于渲染和更新组件的函数：updateComponent，它的大致实现如下：

```js
const updateComponent = () => {
  vm._update(vm._render());
}
```

我们来看它的作用。`vm._render()`内部会调用上述`render`函数，新生成一个对DOM的虚拟描述，以下就是调用上述渲染函数生成的JavaScript对象：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-2491e6acae476b48ff14b01675cfaceb_720w.jpg)

我们把这个对象称为虚拟节点（vnode），它对应一个组件的结构。对于一个Vue应用来说，所有的虚拟节点会组成一整棵树状结构，也就是我们所说的虚拟DOM树。

这个虚拟DOM就是我们最终要渲染到页面上的HTML的js版本，它被传递给组件的`_update`方法执行渲染。这里所说的渲染包括首次绘制和更新，_update内部会根据旧的vnode是否存在来判断是首绘还是更新。_update的实现大致如下：

```js
Vue.prototype._update = function (vnode, hydrating){ 
  ... 
  if (!prevVnode) { // initial render 
    vm.$el = vm.__patch__(vm.$el,vnode,hydrating,false)
  } else { // updates 
    vm.$el = vm.__patch__(prevVnode, vnode) 
  } 
  ... 
}
```

当旧的vnode不存在，说明这是首次绘制，`__patch__`将依据虚拟DOM生成真实DOM并绘制到页面。如果旧的vnode是存在的，说明当前组件已经被绘制到页面上了，这时候`__patch__`将负责比对两个vnode，然后判断如何最高效地更新真实DOM，最后去更新视图。`__patch__`过程较为复杂，如果感兴趣，可以参考我之前关于虚拟DOM的博客：[Vue源码笔记之虚拟DOM](https://link.zhihu.com/?target=https%3A//blog.csdn.net/qq_41694291/article/details/100884306)，里面有详细的patch过程和图解。

也就是说，调用updateComponent时，如果组件尚未渲染，则依据vnode渲染组件（该过程主要就是用document.createElement创建真实DOM标签，然后用appendChild添加到页面上）；如果组件已经存在，则比对vnode，产生高效更新算法，用原生的DOM方法去操作真实DOM，完整视图更新。

显然，定义这个函数是为了在数据变化时自动调用以更新视图，也就是说它必须接入到响应式系统才有意义。接下来的代码就是将其接入响应式系统：

```js
function mountCompnent () {
  ...
  // 上述函数
