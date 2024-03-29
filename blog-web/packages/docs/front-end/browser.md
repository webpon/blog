## 浏览器原理

```
参考词汇： 
```

### 浏览器的功能

#### 1、网络

> 浏览器通过网络模块来下载各式各样的资源，例如html文本；javascript代码；样式表；图片；音视频文件等。
>
> 网络部分本质上十分重要，因为它耗时长，而且需要安全访问互联网上的资源。

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227221121.png" alt="image-20210131141103418" style="zoom: 50%;" /> 

#### 2、资源管理

> 从网络下载，或者本地获取到的资源需要有高效的机制来管理他们。
>
> 例如：如何避免重复下载，资源如何缓存等

#### 3、网页浏览

> 这是浏览器的核心也是最基本的功能，最重要的功能。
>
> 如何将资源转变为可视化的结果。

浏览器的主要功能总结起来就是一句话：将用户输入的url转变成可视化的图像。

1、从url到DOM树

2、从DOM树到可视化图像

这两个过程之间的关系没有那么明确，我们可以统称这两个过程为页面的渲染。

### 浏览器的组成

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1426829-20180626200818008-861865339.png" alt="img" style="zoom:80%;" /> 

简单来说浏览器可以分为两部分，`shell+内核`。其中shell的种类相对比较多，内核则比较少。

Shell是指浏览器的外壳：包括User Interface（用户界面）、Browser engine（浏览器引擎）、Networking（网络）、UI Backend（UI 后端）、Date Persistence（数据持久化存储）。它是调用内核来实现各种功能的。

内核才是浏览器的核心。内核是基于标记语言显示内容的程序或模块。也有一些浏览器并不区分外壳和内核。 从Mozilla将Gecko独立出来后，才有了外壳和内核的明确划分。目前主流的浏览器有IE6、IE8、Mozilla、FireFox、Opera、Safari、Chrome、Netscape等。

`浏览器内核又可以分成两部分：渲染引擎(layout engineer或者Rendering Engine)和JS引擎`。它负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至 显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内 容的应用程序都需要内核。

JS引擎则是解析Javascript语言，执行javascript语言来实现网页的动态效果。最开始渲染引 擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，`内核就倾向于只指渲染引擎`。有一个网页标准计划小组制作了一个ACID来测试引擎的兼容性和性 能。内核的种类很多，如加上没什么人使用的非商业的免费内核，可能会有10多种，但是常见的浏览器内核可以分这四种：`Trident、Gecko、 Presto、Webkit。`

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210228015823.png)

**相互工作：**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210228015844.png)

- 用户界面 －包括地址栏、后退/前进按钮、书签目录等，也就是你-所看到的除了页面显示窗口之外的其他部分
- 浏览器引擎 －可以在用户界面和渲染引擎之间传送指令或在客户端本地缓存中读写数据等，是浏览器中各个部分之间相互通信的核心
- 渲染引擎 －解析DOM文档和CSS规则并将内容排版到浏览器中显示有样式的界面，也有人称之为排版引擎，我们常说的浏览器内核主要指的就是渲染引擎
- 网络 －用来完成网络调用或资源下载的模块
- UI 后端 －用来绘制基本的浏览器窗口内控件，如输入框、按钮、单选按钮等，根据浏览器不同绘制的视觉效果也不同，但功能都是一样的。
- JS引擎 －用来解释执行JS脚本的模块，如 V8 引擎、JavaScriptCore
- 数据存储持久层 - 浏览器需要把所有数据存到硬盘上，如cookies、localStorage、sessionStorage。新的HTML5规范规定了一个完整（虽然轻量级）的浏览器中的数据库 web database

`注意：chrome浏览器与其他浏览器不同，chrome使用多个渲染引擎实例，每个Tab页一个，即每个Tab都是一个独立进程。`

### 浏览器中的进程与线程

Chrome浏览器使用多个进程来隔离不同的网页，在Chrome中打开一个网页相当于起了一个进程，每个tab网页都有由其独立的渲染引擎实例。因为如果非多进程的话，如果浏览器中的一个tab网页崩溃，将会导致其他被打开的网页应用。另外相对于线程，进程之间是不共享资源和地址空间的，所以不会存在太多的安全问题，而由于多个线程共享着相同的地址空间和资源，所以会存在线程之间有可能会恶意修改或者获取非授权数据等复杂的安全问题。

`同一个网站打开多个网页使用一个进程。`

在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：

**1. GUI 渲染线程**

GUI渲染线程负责渲染浏览器界面HTML元素,当界面需要重绘(Repaint)或由于某种操作引发回流(reflow)时，该线程就会执行。在Javascript引擎运行脚本期间,GUI渲染线程都是处于挂起状态的，也就是说被冻结了.

**2. JavaScript引擎线程**

JS为处理页面中用户的交互，以及操作DOM树、CSS样式树来给用户呈现一份动态而丰富的交互体验和服务器逻辑的交互处理。如果JS是多线程的方式来操作这些UI DOM，则可能出现UI操作的冲突；如果JS是多线程的话，在多线程的交互下，处于UI中的DOM节点就可能成为一个临界资源，假设存在两个线程同时操作一个DOM，一个负责修改一个负责删除，那么这个时候就需要浏览器来裁决如何生效哪个线程的执行结果，当然我们可以通过锁来解决上面的问题。但为了避免因为引入了锁而带来更大的复杂性，JS在最初就选择了单线程执行。

`GUI渲染线程与JS引擎线程互斥的，是由于JavaScript是可操纵DOM的`，如果在修改这些元素属性同时渲染界面（即JavaScript线程和UI线程同时运行），那么渲染线程前后获得的元素数据就可能不一致。当JavaScript引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到引擎线程空闲时立即被执行。由于GUI渲染线程与JS执行线程是互斥的关系，当浏览器在执行JS程序的时候，GUI渲染线程会被保存在一个队列中，直到JS程序执行完成，才会接着执行。因此如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

**3. 定时触发器线程**

浏览器定时计数器并不是由JS引擎计数的, 因为JS引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确, 因此通过单独线程来计时并触发定时是更为合理的方案。

**4. 事件触发线程**

当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理。这些事件可以是当前执行的代码块如定时任务、也可来自浏览器内核的其他线程如鼠标点击、AJAX异步请求等，但由于JS的单线程关系所有这些事件都得排队等待JS引擎处理。

**5. 异步http请求线程**

​    在XMLHttpRequest在连接后是通过浏览器新开一个线程请求，将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件放到JS引擎的处理队列中等待处理。

### 前端页面渲染流程       

用户请求的HTML文本(text/html)通过浏览器的网络层到达渲染引擎后，渲染工作开始。每次通常渲染不会超过8K的数据块，其中基础的渲染流程图：

![640?wx_fmt=png](https://mmbiz.qpic.cn/mmbiz_png/XP4dRIhZqqV6B9SNRbyQflzvDFfqbdftQpnTDP7u7ic6kxy3kJCsQH0lZvUOhvjyvIXpRjhicywaYMIhCk0DyZCg/640?wx_fmt=png)		

webkit引擎渲染的详细流程，其他引擎渲染流程稍有不同：

![img](https://image.fundebug.com/2019-01-03-1.png)

浏览器工作流程大体分为如下三部分：

**1）浏览器会解析三个东西：**

- 一个是HTML/SVG/XHTML，事实上，Webkit有三个C++的类对应这三类文档。解析这三种文件会产生一个DOM Tree。
- CSS，解析CSS会产生CSS规则树。
- Javascript，脚本，主要是通过DOM API和CSSOM API来操作DOM Tree和CSS Rule Tree.

**2）解析完成后，浏览器引擎会通过DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree。**

- Rendering Tree 渲染树并不等同于DOM树，因为一些像Header或display:none的东西就没必要放在渲染树中了。
- CSS 的 Rule Tree主要是为了完成匹配并把CSS Rule附加上Rendering Tree上的每个Element。也就是DOM结点。也就是所谓的Frame。
- 然后，计算每个Frame（也就是每个Element）的位置，这又叫`layout`和`paint`过程。

**3）最后通过调用操作系统Native GUI的API绘制。**

> 接下来我们针对这其中所经历的重要步骤，一一详细阐述。

渲染过程:

浏览器渲染页面的整个过程：浏览器会从上到下解析文档。

1、遇见HTML标记，调用HTML解析器解析为对应的token（一个token就是一个标签文本的序列化）并构建DOM树（就是一块内存，保存

​	 着他们tokens，建立他们之间的关系）

2、遇见tyle/link标记调用解析器处理css标记并构建css样式树（CSSOM)，就算没有写css样式，也会有默认的样式，也会生成CSS树(CSSOM)。

3、遇见script标记调用javascript解析器处理script标记，绑定事件、修改DOM树/CSS树

4、将DOM树与CSS树合并成一个渲染树(这个过程并不需要等全部DOM和CSSOM生成，而是一点一点渲染，也不一定是遇到一个标签就渲染一次）

5、根据渲染树来渲染，以计算每个节点的几何信息（这一过程需要依赖图形库）

6、将各个节点绘制到屏幕上。

注：网页默认会有css样式，会生成默认的CSSOM，遇到html标签就会解析，一点一点解析，并渲染，但是现代浏览器为了优化性能，会解析到一定程度

才会渲染（重排和重绘），比如遇到&lt;style>&lt;link>&lt;script>标签，

css样式一般建议放在头部，这是为了解析到html的时候就有加载完成的CSSOM了，如果放在底部，html标签会根据默认的CSSOM来进行渲染，但是遇	  到最后的CSS又会重新渲染，这样就可能导致一些闪屏或者性能问题。

js代码一般建议放在底部，如果放在头部(代码不做处理，比如：不加window.onload函数），js解析会阻塞html渲染，这样就会导致页面显示延迟，造成体验效果不好，而且也无法获取到DOM.放在底部就可以避免这个问题

详细流程是，

**1、只存在html**(style标签中的样式由html解析器进行解析，浏览器加载资源是异步的，页面style标签写的内部样式是异步解析的)

​	 URL->DNS->ip->send Request(html)->Receive Response->Receive Date -> Finsish Loading -> Parse HTML

​	 ->Recalculate Style(重新计算样式)->Layout->Update Layer Tree->Paint->Composite Layers(合成图层)

注：`浏览器渲染页面一般不会一点一点渲染，而是渲染好全部才会渲染处理，但是遇到图片，script标签，link标签等会渲染一次`,根据chrome实测，如果时内联js，那么会等所有js执行完毕才会渲染html,外联的只会阻塞js下面的html

####  **构建DOM**

浏览器会遵守一套步骤将HTML 文件转换为 DOM 树。宏观上，可以分为几个步骤：

![img](https://image.fundebug.com/2019-01-03-2.png)

- 浏览器从磁盘或网络读取HTML的原始字节，并根据文件的指定编码（例如 UTF-8）将它们转换成字符串。

  在网络中传输的内容其实都是 0 和 1 这些字节数据。当浏览器接收到这些字节数据以后，它会将这些字节数据转换为字符串，也就是我们写的代码。

- 将字符串转换成Token，例如：`<html>`、`<body>`等。**Token中会标识出当前Token是“开始标签”或是“结束标签”亦或是“文本”等信息**。

这时候你一定会有疑问，节点与节点之间的关系如何维护？

事实上，这就是Token要标识“起始标签”和“结束标签”等标识的作用。例如“title”Token的起始标签和结束标签之间的节点肯定是属于“head”的子节点。

![img](https://image.fundebug.com/2019-01-03-3.png)

上图给出了节点之间的关系，例如：“Hello”Token位于“title”开始标签与“title”结束标签之间，表明“Hello”Token是“title”Token的子	   节点。同理“title”Token是“head”Token的子节点。

- 生成节点对象并构建DOM

  事实上，构建DOM的过程中，不是等所有Token都转换完成后再去生成节点对象，而是一边生成Token一边消耗Token来生成节点对象。换句话说，每个Token被生成后，会立刻消耗这个Token创建出节点对象。**注意：带有结束标签标识的Token不会创建节点对象。**

接下来我们举个例子，假设有段HTML文本：

```html
     <html>
     <head>
         <title>Web page parsing</title>
     </head>
     <body>
         <div>
             <h1>Web page parsing</h1>
             <p>This is an example Web page.</p>
         </div>
     </body>
     </html>
```

上面这段HTML会解析成这样：

![img](https://image.fundebug.com/2019-01-03-4.png)

#### **构建CSSOM**

DOM会捕获页面的内容，但浏览器还需要知道页面如何展示，所以需要构建CSSOM。

构建CSSOM的过程与构建DOM的过程非常相似，当浏览器接收到一段CSS，浏览器首先要做的是识别出Token，然后构建节点并生成CSSOM。

![img](https://image.fundebug.com/2019-01-03-5.png)

在这一过程中，浏览器会确定 每一个节点的样式到底是什么，并且这一过程其实是很消耗资源的。因为样式你可以自行设置给某个节点，也可以通过继承获得。在这一过程中，浏览器得递归 CSSOM 树，然后确定具体的元素到底是什么样式。

**注意：CSS匹配HTML元素是一个相当复杂和有性能问题的事情。所以，DOM树要小，CSS尽量用id和class，千万不要过度层叠下去**。

#### **构建渲染树**

当我们生成 DOM 树和 CSSOM 树以后，就需要将这两棵树组合为渲染树。

![img](https://image.fundebug.com/2019-01-03-6.png)

在这一过程中，不是简单的将两者合并就行了。**渲染树只会包括需要显示的节点和这些节点的样式信息**，如果某个节点是 `display: none` 的，那么就不会在渲染树中显示。

#### **布局与绘制**

当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。

布局流程的输出是一个“盒模型”，它会精确地捕获每个元素在视口内的确切位置和尺寸，所有相对测量值都将转换为屏幕上的绝对像素。

布局完成后，浏览器会立即发出“Paint Setup”和“Paint”事件，将渲染树转换成屏幕上的像素。

> 以上我们详细介绍了浏览器工作流程中的重要步骤，接下来我们讨论几个相关的问题：

#### CSS图层

 浏览器在渲染一个页面时，会将页面分为很多个图层，图层有大有小，每个图层上有一个或多个节点。

在渲染DOM的时候，浏览器所做的工作实际上是：

​	1、获取DOM后分割为多个图层

​	2、对每个图层的节点计算样式结果		(Recalculate style -- 样式重计算)

​	3、为每个节点生成图形和位置			 （Layout -- 重排（回流））

​	4、将每个节点绘制填充到图层位图中	(paint -- 重绘)

​	5、图层作为纹理上传至GPU

​	6、组合多个图层到页面上生成最终屏幕图像	（Composite Layers -- 图层重组）

**图层创建的条件**

​	Chrome浏览器满足以下任意情况就会创建图层：
​			1、拥有具有3D变换的CSS属性(最常用)

​			例：

```
    div{
       transform:translateZ(0)
    }
```

​	 2、使用加速视频解码的&lt;video>节点

​	 3、&lt;canvas>节点

​	 4、CSS3动画的节点

​	 5、拥有CSS加速属性的元素（will-change)

#### 问题一：渲染过程中遇到JS文件怎么处理？

JavaScript的加载、解析与执行会阻塞DOM的构建，也就是说，在构建DOM时，HTML解析器若遇到了JavaScript，那么它会暂停构建DOM，将控制权移交给JavaScript引擎，等JavaScript引擎运行完毕，浏览器再从中断的地方恢复DOM构建。

由于JavaScript有可能操作DOM和CSSOM，所以这时候DOM和CSSOM不会解析和合并

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h3 id="test">test</h3>
  <h3>test</h3>
  <h3>test</h3>
  <script src="./external.js">
  </script>
</body>
</html>
```

external.js

```
alert('test')
```

结果：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227221146.png" alt="image-20210104094806625" style="zoom:80%;" />

发生了阻塞，我们可以在script标签后面加上defer或者async或者把所有js代码放进load事情触发后执行，因为window.onload是异步事件就可以避免这种情况了

```
     <script src="./external.js" defer>
     </script>
```

![image-20210104095039347](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227221149.png)

注意：1、css的解析和js的执行是互斥的（互相排斥），css解析的时候js停止执行，js执行的时候css停止解析

​		  2、无论css阻塞，还是js阻塞，都不会阻塞浏览器加载外部资源（图片、视频、样式、脚本等）

​				原因：浏览器始终处于一种：“先把请求发出去”的工作模式，只要涉及到网络请求的内容，

​							无论是：图片、样式、脚本，都会先发送请求去获取资源，至于资源到本地之后什么时候用，

​							由浏览器自己协调。这种做法效率很高。

​		  3、webkit和firefox都进行了【预解析】这项优化。在执行js脚本时，浏览器的其他线程会预解析文档的js部分,预解析和js引擎是一起执行的，

​				预解析会比js快很多，当预解析完了，如果js中没有DOM操作，那么就继续往下解析dom

​				找出并加载

#### 问题二：为什么dom操作会影响性能？

在浏览器当中，dom的实现和ECMAScript的实现是分离的。

例如，在IE中，ECMAScrit的实现在jscript.dll中，而DOM的实现在mshtml.dll中；在Chrome中使用WebKit中的 WebCore处理DOM和渲染，但ECMAScript是在V8引擎中实现的，其他浏览器的情况类似。

因此，操作dom，就是通过js代码调用dom的接口，就相当于两个相互独立的模块发生了交互。这样，相比于在同一个模块当中互相调用，这种跨模块的调用它的性能损耗是非常高的。

把DOM和JavaScript（这里指ECMScript）各自想象为一个岛屿，它们之间用收费桥梁连接，ECMAScript每次访问DOM，都要途径这座桥，并交纳“过桥费”,访问DOM的次数越多，费用也就越高。因此，推荐的做法是尽量减少过桥的次数，努力待ECMAScript岛上。

然而，`dom操作影响性能最主要是因为它导致了浏览器的重绘（repaint）和重排（reflow）`。

但是：`现代浏览器中会有优化方法，就是把dom操作积累起来，做批量处理。`但是在有些情况下，浏览器会立即重排或重绘。比如请求如下的DOM元素布局信息：offsetTop/Left/Width/Height、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle()或 currentStyle。因为这些值都是动态计算的，所以浏览器需要尽快完成页面的绘制，然后计算返回值，从而打乱了重排或重绘的优化。

#### 问题三：CSS加载会造成阻塞吗？

为了完成本次测试，先来科普一下，如何利用chrome来设置下载速度

1. 打开chrome控制台(按下F12),可以看到下图，重点在我画红圈的地方

   ![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-00bec3ea167ad4320a7e60fa0e405978_720w.jpg)

2. 点击我画红圈的地方(No throttling),会看到下图,我们选择GPRS这个选项

   ![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-3b76909c0db211e6def82107ddaaabc9_720w.jpg)

3. 这样，我们对资源的下载速度上限就会被限制成20kb/s，好，那接下来就进入我们的正题

**css加载会阻塞DOM树的解析渲染吗？**

用代码说话：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css阻塞</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      h1 {
        color: red !important
      }
    </style>
    <script>
      function h () {
        console.log(document.querySelectorAll('h1'))
      }
      setTimeout(h, 0)
    </script>
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.css" rel="stylesheet">
  </head>
  <body>
    <h1>这是红色的</h1>
  </body>
</html>
```

假设： css加载会阻塞DOM树解析和渲染

假设下的结果: 在bootstrap.css还没加载完之前，下面的内容不会被解析渲染。那么我们一开始看到的应该是白屏，h1不会显示出来。并且此时console.log的结果应该是一个空数组。

实际结果:如下图

![image-20230114171041141](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20230114171041141.png)

**css会阻塞DOM树解析？**

由上图我们可以看到，当bootstrap.css还没加载完成的时候，h1并没有显示，但是此时控制台输出如下

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-655b4eabed2a09aaa75662cd971cb7fc_720w.jpg)

可以得知，此时DOM树至少已经解析完成到了h1那里，而此时css还没加载完成，也就说明，css并不会阻塞DOM树的解析。

**css加载会阻塞DOM树渲染？**

由上图，我们也可以看到，当css还没加载出来的时候，页面显示白屏，直到css加载完成之后，红色字体才显示出来，也就是说，下面的内容虽然解析了，但是并没有被渲染出来。所以，css加载会阻塞DOM树渲染。

**个人对这种机制的评价**

其实我觉得，这可能也是浏览器的一种优化机制。因为你加载css的时候，可能会修改下面DOM节点的样式，如果css加载不阻塞DOM树渲染的话，那么当css加载完之后，DOM树可能又得重新重绘或者回流了，这就造成了一些没有必要的损耗。所以干脆就先把DOM树的结构先解析完，把可以做的工作做完，然后等你css加载完之后，在根据最终的样式来渲染DOM树，这种做法性能方面确实会比较好一点。

**css加载会阻塞js运行吗？**

 由上面的推论，我们可以得出，css加载不会阻塞DOM树解析，但是会阻塞DOM树渲染。那么，css加载会不会阻塞js执行呢?

同样，通过代码来验证.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css阻塞</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
      console.log('before css')
      var startDate = new Date()
    </script>
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.css" rel="stylesheet">
  </head>
  <body>
    <h1>这是红色的</h1>
    <script>
      var endDate = new Date()
      console.log('after css')
      console.log('经过了' + (endDate -startDate) + 'ms')
    </script>
  </body>
</html>
```

假设: css加载会阻塞后面的js运行

预期结果: 在link后面的js代码，应该要在css加载完成后才会运行

实际结果:

![img](https://pic1.zhimg.com/v2-08c57cc17672558749803febff606468_b.jpg)

由上图我们可以看出，位于css加载语句前的那个js代码先执行了，但是位于css加载语句后面的代码迟迟没有执行，直到css加载完成后，它才执行。这也就说明了，css加载会阻塞后面的js语句的执行。详细结果看下图(css加载用了5600+ms):

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-00254fb0bd3edd4f25fcc093681a2006_720w.jpg)

**结论**

由上所述，我们可以得出以下结论:

声明：只有link引入的外部css才能够产生阻塞。

1、style标签中的样式

​	（1）由html解析器进行解析

​	（2）不阻塞浏览器渲染(可能会产生“闪屏现象”)，因为这时会多开一个html解析器，所以并不需要等style标签里面的css渲染完成才往下解析

​	（3）不阻塞DOM解析

2、link引入的外部css样式（推荐使用的方式）：

​	（1）由css解析器进行解析

​	（2）阻塞浏览器渲染（可以利用这种阻塞避免“闪屏现象”）

​	（3）阻塞其后面的js语句的执行

​			原因：如果后面js的内容是获取元素的样式，例如宽高等CSS控制的属性，

​					  如果不等样式解析完毕，后面的js就获得了错误的信息

​					  由于浏览器也不知道后续js的具体内容，所以只好等前面的所有样式解析完毕后，再执行js

​					  例如：Firefox在样式表加载和解析的过程中，会禁止掉所有的脚本

​			注意：现代浏览器越发注重用户体验，对于webkit内核的浏览器而言，

​					  仅当脚本尝试访问的样式属性、或可能受尚未加载的样式表影响时，它才会禁止该脚本

​	（4）不阻塞DOM的解析：

​			原因:DOM解析和CSS解析是两个并行的线程，浏览器解析DOM生成DOM TREE，

​					解析CSS生成CSS TREE,最终组成render Tree,再渲染也页面。

​					即：DOM的解析，和CSS的解析是并行执行的，即:不阻塞DOM的解析

1. `css加载不会阻塞DOM树的解析`

2. `css加载会阻塞DOM树的渲染`

3. `css加载会阻塞后面js语句的执行`

   加载也就是在请求css文件的过程

因此，为了避免让用户看到长时间的白屏时间，我们应该尽可能的提高css加载速度，比如可以使用以下几种方法:

1. 使用CDN(因为CDN会根据你的网络状况，替你挑选最近的一个具有缓存内容的节点为你提供资源，因此可以减少加载时间)
2. 对css进行压缩(可以用很多打包工具，比如webpack,gulp等，也可以通过开启gzip压缩)
3. 合理的使用缓存(设置cache-control,expires,以及E-tag都是不错的，不过要注意一个问题，就是文件更新后，你要避免缓存而带来的影响。其中一个解决防范是在文件名字后面加一个版本号)
4. 减少http请求数，将多个css文件合并，或者是干脆直接写成内联样式(内联样式的一个缺点就是不能缓存)

**更新**

**原理解析**

那么为什么会出现上面的现象呢？我们从浏览器的渲染过程来解析下。

不用浏览器使用的内核不同，所以他们的渲染过程也是不一样的。目前主要有两个：

**webkit渲染过程**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ddbb3012429ae454a92da09c816948de_720w.jpg)

**Gecko渲染过程**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-5030ffa6e418a4aab8f4bc5fce21fccd_720w.jpg)



从上面两个流程图我们可以看出来，浏览器渲染的流程如下：

1. HTML解析文件，生成DOM Tree，解析CSS文件生成CSSOM Tree
2. 将Dom Tree和CSSOM Tree结合，生成Render Tree(渲染树)
3. 根据Render Tree渲染绘制，将像素渲染到屏幕上。

从流程我们可以看出来

1. `DOM解析和CSS解析是两个并行的进程，所以这也解释了为什么CSS加载不会阻塞DOM的解析`。
2. `然而，由于Render Tree是依赖于DOM Tree和CSSOM Tree的，所以他必须等待到CSSOM Tree构建完成，也就是CSS资源加载完成(或者CSS资源加载失败)后，才能开始渲染。因此，CSS加载是会阻塞Dom的渲染的`。
3. `由于js可能会操作之前的Dom节点和css样式，因此浏览器会维持html中css和js的顺序。因此，样式表会在后面的js执行前先加载执行完毕。所以css会阻塞后面js的执行。`

**补充**

**DOMContentLoaded**

对于浏览器来说，页面加载主要有两个事件，一个是DOMContentLoaded，另一个是onLoad。而onLoad没什么好说的，就是等待页面的所有资源都加载完成才会触发，这些资源包括css、js、图片视频等。

而DOMContentLoaded，顾名思义，就是当页面的内容解析完成后，则触发该事件。那么，正如我们上面讨论过的，css会阻塞Dom渲染和js执行，而js会阻塞Dom解析。那么我们可以做出这样的假设

1. 当页面只存在css，或者js都在css前面，那么DomContentLoaded不需要等到css加载完毕。
2. 当页面里同时存在css和js，并且js在css后面的时候，DomContentLoaded必须等到css和js都加载完毕才触发。

我们先对第一种情况做测试：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css阻塞</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded');
      })
    </script>
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.css" rel="stylesheet">
  </head>
  <body>
  </body>
</html>
```

实验结果如下图：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-1e38a6bf92f702978c2ebb4aed4c403f_b.jpg)



从动图我们可以看出来，css还未加载完，就已经触发了DOMContentLoaded事件了。因为css后面没有任何js代码。

接下来我们对第二种情况做测试，很简单，就在css后面加一行代码就行了

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css阻塞</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded');
      })
    </script>
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.css" rel="stylesheet">

    <script>
      console.log('到我了没');
    </script>
  </head>
  <body>
  </body>
</html>
```

实验结果如下图：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-98b79021bbe1d0a3f2d3c2aef089278f_b.jpg)

我们可以看到，只有在css加载完成后，才会触发DOMContentLoaded事件。因此，我们可以得出结论：

1. 如果页面中同时存在css和js，并且存在js在css后面，则DOMContentLoaded事件会在css加载完后才执行。
2. 其他情况下，DOMContentLoaded都不会等待css加载，并且DOMContentLoaded事件也不会等待图片、视频等其他资源加载。

`CSS本来是可以并行下载的，在什么情况下会出现阻塞加载了(在测试观察中，IE6下CSS都是阻塞加载）`

`当CSS后面跟着嵌入的JS的时候，该CSS就会出现阻塞后面资源下载的情况。而当把嵌入JS放到CSS前面，就不会出现阻塞的情况了。`

`根本原因：因为浏览器会维持html中css和js的顺序，样式表必须在嵌入的JS执行前先加载、解析完。而嵌入的JS会阻塞后面的资源加载，所以就会出现上面CSS阻塞下载的情况`。

#### 问题四：为什么把 Script 标签放在 body 结束标签之后 html 结束标签之前？

由上面我们可以得知：js代码会阻塞后续的html渲染，这有可能会导致不好的用户体验。

所以我们必须采取措施：  

**之前推荐的方法：**

之前解决这个问题的方法是把`<script>` 标签放到`<body>`标签之后 ，这确保了解析到&lt;/body>之前都不会被script终端。

这个方法是有问题的: 浏览器在整个文档解析完成之前都不能下载script文件，如果文档很大的话，解析完HTML，用户依然要等待script文件下载并	  执行完成之后，才能操作这个网站。（主要是串行，先解析HTML完，再下载并执行script，速度肯定没有并行块，那么怎么并行呢？我们假设能在解析HTML一开始，就开始下载script，并且不阻断HTML的解析，是不是就并行了呢）如果你的网站在2秒之内没有响应，用户就会跑掉；

**推荐的解决方案：**

现在浏览器script标签支持 `async` 和 `defer` 属性. 应用这些属性当script被下载时，浏览器更安全而且可以并行下载（下载script并不阻断HTML解析）。

**async**

```text
<script type="text/javascript" src="path/to/script1.js" async></script>
<script type="text/javascript" src="path/to/script2.js" async></script
```

async标记的Script异步执行下载，并执行。这意味着script下载时并不阻塞HTML的解析，并且下载结束script马上执行。
异步意味着，上述代码script2可能比script1先下载完并执行完。

根据 [http://caniuse.com/#feat=script-async](https://link.zhihu.com/?target=http%3A//caniuse.com/%23feat%3Dscript-async), 90% 的浏览器支持async属性.

**defer**

```text
<script type="text/javascript" src="path/to/script1.js" defer></script>
<script type="text/javascript" src="path/to/script2.js" defer></script>
```

defer标签的script顺序执行。这种方式也不会阻断浏览器解析HTML。

跟 async不同, defer scripts在整个文档里的script都被下载完才**顺序执行**。

根据 [http://caniuse.com/#feat=script-defer](https://link.zhihu.com/?target=http%3A//caniuse.com/%23feat%3Dscript-defer), 90% 的浏览器支持这个属性. 92% 至少部分支持此属性。

**defer与async的区别**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1237064-20190225103543934-1114218399.png)

当浏览器碰到 `script` 脚本的时候：

1. `<script src="script.js"></script>`

`没有 defer 或 async`，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

2. `<script async src="script.js"></script>`

`有 async`，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

3. `<script defer src="myscript.js"></script>`

`有 defer`，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，`DOMContentLoaded` 事件触发之前完成。

> Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。

**实用角度**

然后从实用角度来说呢，首先把`所有脚本都丢到 </body> 之前`是最佳实践，因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。

接着，我们来看一张图:
![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1237064-20190225103106193-1835436522.jpg)

- 蓝色线代表网络读取，
- 红色线代表执行时间，这俩都是针对脚本的；
- 绿色线代表 HTML 解析。

此图告诉我们以下几个要点：

- `defer 和 async` 在`网络读取`（下载）这块儿是一样的，都是`异步的`（相较于 HTML 解析）
- `defer 和 async的差别在于脚本下载完之后何时执行`，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
- `关于 defer，此图未尽之处在于它是按照加载顺序执行脚本的`，这一点要善加利用
- `async 则是一个乱序执行`的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，`只要它加载完了就会立刻执行`
- 仔细想想，`async` 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以`不依赖任何脚本或不被任何脚本依赖的脚本`来说却是非常合适的，最典型的例子：`Google Analytics`

**总结**
		**1、如果嵌入JS放在head中，请把嵌入JS放在CSS头部。**
		**2、使用defer（只支持IE）anysc W3C**
		**3、不要在嵌入的JS中调用运行时间较长的函数，如果一定要用，可以用`setTimeout`来调用**

- 动态脚本元素：文档对象模型（DOM）允许你使用js动态创建HTML的几乎全部文档内容。

- async : 并行加载js，`下载完毕立即解释执行代码`，不会按照页面上的script顺序执行。
- defer : 并行下载js，在页面解析完毕之后，会按照页面上的script标签的顺序执行,同时会在document的DOMContentLoaded之前执行。
  - 注： HTML5规范要求脚本执行应该按照脚本出现的先后顺序执行，但实际情况下，延迟脚本不一定按照先后顺序执行

![img](https://image.fundebug.com/2019-01-03-7.png)

我们知道，当网页生成的时候，至少会渲染一次。在用户访问的过程中，还会不断重新渲染。重新渲染会重复上图中的第四步(回流)+第五步(重绘)或者只有第五个步(重绘)。

- 重绘:当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观、风格，而不会影响布局的，比如background-color。
- 回流:当render tree中的一部分(或全部)因为元素的规模尺寸、布局、隐藏等改变而需要重新构建

**回流必定会发生重绘，重绘不一定会引发回流**。重绘和回流会在我们设置节点样式时频繁出现，同时也会很大程度上影响性能。回流所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点的一系列回流。

#### 1）常见引起回流属性和方法

任何会改变元素几何信息(元素的位置和尺寸大小)的操作，都会触发回流，

- 添加或者删除可见的DOM元素；
- 元素尺寸改变——边距、填充、边框、宽度和高度
- 内容变化，比如用户在input框中输入文字
- 浏览器窗口尺寸改变——resize事件发生时
- 计算 offsetWidth 和 offsetHeight 属性
- 设置 style 属性的值

DOM的重绘和回流Repaint&Reflow

顺序：先回流在重绘

**重绘：**元素样式的改变（但宽度、大小、位置等不变）

​		**如outline,visiblity,color,background-color等**

**回流（重排）：**元素的大小或者位置发生了变化（当页面布局和几何信息发生变化的时候），触发了重新布局，导致渲染树重新计算布局和渲染

​		如添加或删除可见的DOM元素；元素的位置发生变化；元素的尺寸发生变化；内容发生变化(比如文本变化或图片被另一个不同尺寸的图片所替代)；页面一开始渲染的时候（这个无法避免）；因为回流是根据视口大小来计算元素的位置和大小的，所以浏览器的窗口尺寸变化也会引发回流...

注意：回流一定触发重绘，而重绘不一定会回流

​		  网页默认会有css样式，会生成默认的CSSOM，遇到html标签就会解析，一点一点解析，并渲染，但是现代浏览器为了优化性能，会解析到一定程度才会渲染（重排和重绘），比如遇到&lt;style>&lt;link>&lt;script>标签，

### 性能优化

#### **一、PC端优化策略**

   主要包括网络加载类、页面渲染类、CSS优化类、JavaScript执行类、缓存类、图片类、架构协议类等几类；

##### **1、网络加载类**

（1）减少HTTP资源请求次数：

   在前端页面中，通常建议尽可能合并静态资源图片、JavaScript或CSS代码，减少页面请求数和资源请求消耗，这样可以缩短首屏加载时间，通过构建工具合并雪碧图、CSS、JavaScript文件等都是为了减少HTTP资源请求次数，另外也要尽量避免重复的资源，防止增加多余请求；

（2）减少HTTP请求大小：

   除了减少HTTP资源请求次数，也要尽量减少每个HTTP请求的大小，如减少没必要的图片、JavaScript、CSS 及 HTML 代码，对文件进行压缩优化，或者使用gzip压缩传输内容等都可以用来减少文件大小，缩短网络传输等待时延，使用构建工具来压缩静态图片资源以及移除代码中的注释并压缩，目的都是为了减少HTTP请求的大小；

（3）将CSS或JavaScript放到外部文件中，避免使用style或script标签直接引入：

   在HTML文件上引用外部资源可以有效利用浏览器的静态资源缓存，但有时候在移动端页面CSS或JavaScript比较简单的情况下为了减少请求，也会将CSS或JavaScript直接写到HTML里面，具体要根据CSS或JavaScript文件的大小和业务的场景来分析，如果CSS或JavaScript文件内容较多，业务逻辑较复杂，建议放到外部文件引入；

```xml
     <link rel="stylesheet" href="/css/master.css">
     <script type="text/javascript" src="//cdn.domain.com/path/main.js"></script>
```

（4）避免页面中空的href和src：

   当&lt;link>标签的href属性为空，或&lt;script>、&lt;img>、&lt;iframe>标签的src属性为空时，浏览器在渲染过程中仍会将href属性或者src属性中的空内容进行加载，直至加载失败，这样就阻塞了页面中其他资源的下载进程，而且最终加载到的内容是无效的，因此要尽量避免；

```xml
       <!--不推荐-->
       <img src="" alt="photo" >
       <a href="">点击链接</a>
```

（5）为HTML指定Cache-Control或Expires：

   为HTML内容设置Cache-Control 或 Expires可以将HTML内容缓存起来，避免频繁向服务器端发送请求，在页面中的Cache-Control 或 Expires头部有效时，浏览器将直接从缓存中读取内容，不再向服务器端发送请求；

```xml
       <meta http-equiv="Cache-Control" content="max-age=7200">
       <meta http-equiv="Expires" content="Mon,20Jul201623:00:00GMT">
```

（6）合理设置Etag和Last-Modified：

   合理设置Etag 和 Last-Modified使用浏览器缓存，对于未修改的文件，静态资源服务器会向浏览器端返回304，让浏览器从缓存中读取文件，减少Web资源下载的带宽消耗并降低服务器负载；

```xml
	<meta http-equiv="last-modified" content="Sun,05 Nov 2017 13:45:57 GMT">
```

（7）减少页面重定向：

   页面每次重定向都会延长页面内容返回的等待延时，一次重定向大约需要200毫秒不等的时间开销（无缓存），为了保证用户尽快看到页面内容，要尽量避免页面重定向；

（8）使用静态资源分域存放来增加下载并行数：

   浏览器在同一时刻向同一域名请求文件的并行下载数是有限的，因此可以利用多个域名的主机来存放不同的静态资源，增大页面加载时资源的并行下载数，缩短页面资源加载的时间，通常根据多个域名来分别存储JavaScript、CSS和图片文件；

```xml
     <link rel="stylesheet" href="//cdn1.domain.com/path/main.css" >
     <script src="//cdn2.domain.com/path/main.js"></script>
```

（9）使用静态资源CDN来存储文件：
    如果条件允许，可以利用CDN网络加快同一个地理区域内重复静态资源文件的响应下载速度，缩短资源请求时间；

（10）使用CDN Combo下载传输内容：

   CDN Combo是在CDN服务器端将多个文件请求打包成一个文件的形式来返回的技术，这样可以实现HTTP连接传输的一次性复用，减少浏览器的HTTP请求数，加快资源下载速度，例如同一个域名CDN服务器上的a.js，b.js，c.js就可以按如下方式在一个请求中下载：



```xml
<script src="//cdn.domain.com/path/a.js,b.js,c.js"></script>
```

（11）使用可缓存的AJAX：

   对于返回内容相同的请求，没必要每次都直接从服务端拉取，合理使用AJAX缓存能加快AJAX响应速度并减轻服务器压力；

```tsx
$.ajax({
     url: url,
     type: 'get',
     cache: true, //推荐使用缓存
     data: {},
     success() {},
     error() {}
    });
```

（12）使用GET来完成AJAX请求：

   使用XMLHttpRequest时,浏览器中的POST方法会发起两次TCP数据包传输，首先会发送文件头，然后发送HTTP正文数据，而使用GET时只发送头部，所以在拉取服务端数据时使用GET请求效率更高；

```tsx
$.ajax({
  url: url,
  type: 'get', //推荐使用get完成请求
  data: {},
  success() {},
  error() {}
});
```

（13）减少Cookie的大小并进行Cookie隔离：

   HTTP请求通常默认带上浏览器端的Cookie一起发送给服务器，所以在非必要的情况下，要尽量减少Cookie来减少HTTP请求的大小，对于静态资源，尽量使用不同的域名来存放，因为Cookie默认是不能跨域的，这样就做到了不同域名下静态资源请求的Cookie隔离；

（14）缩小favicon.ico并缓存：

   有利favicon.ico的重复加载，因为一般一个Web应用的favicon.ico是很少改变的；

（15）推荐使用异步JavaScript资源：

   异步的JavaScript资源不会阻塞文档解析，所以允许在浏览器中优先渲染页面，延后加载脚本执行，例如JavaScript的引用可以如下设置，也可以使用模块化加载机制来实现；其中使用async时，加载和渲染后续文档元素的过程和main.js的加载与执行是并行的；使用defer时，加载后续文档元素的过程和main.js的加载是并行的，但是main.js的执行要在页面所有元素解析完成之后才开始执行；

```xml
<script src="main.js" defer></script>
<script src="main.js" async></script>
```

（16）消除阻塞渲染的CSS及JavaScript：

   对于页面中加载时间过长的CSS或JavaScript文件，需要进行合理拆分或延后加载，保证关键路径的资源能快速加载完成；

（17）避免使用CSS import引用加载CSS：

   CSS中的@import可以从另一个样式文件中引入样式，但应该避免这种用法，因为这样会增加CSS资源加载的关键路径长度，带有＠import的CSS样式需要在CSS文件串行解析到＠import时才会加载另外的CSS文件，大大延后CSS渲染完成的时间；

```xml
<!--不推荐-->
<style>
@import "path/main.css";
</style>

<!--推荐-->
<link rel="stylesheet" href="//cdn1.domain.com/path/main.css" >
```

##### **2、页面渲染类**

（1）把CSS资源引用放到HTML文件顶部：

   一般推荐将所有CSS资源指定在HTML文档&lt;head>中，这样浏览器可以优先下载CSS并尽早完成页面渲染；

（2）JavaScript资源引用放到HTML文件底部：

   JavaScript资源放到HTML文档底部可以防止JavaScript的加载和解析执行对页面渲染造成阻塞，由于JavaScript资源默认是解析阻塞的，除非被标记为异步或者通过其他的异步方式加载，否则会阻塞HTML DOM解析和CSS渲染过程；

（3）尽量预先设定图片等大小：

   在加载大量的图片元素时，尽量预先限定图片的尺寸大小，否则在图片加载过程中会更新图片的排版信息，产生大量的重排；

（4）不要在HTML中直接缩放图片：

   在HTML中直接缩放图片会导致页面内容的重排重绘，此时可能会使页面中的其他操作产生卡顿，因此要尽量减少在页面中直接进行图片缩放；

（5）减少DOM元素数量和深度：

   HTML中标签元素越多，标签的层级越深，浏览器解析DOM并绘制到浏览器中所花的时间就越长，所以应尽可能保持DOM元素简洁和层级较少；

```xml
     <!--不推荐-->
     <div>
       <span>
           <a href="javascript:void(0);">
               <img src="./path/photo.jpg" alt="图片">
           </a>
        </span>
     </div>
     <!--推荐-->
     <img src="./path/photo.jpg" alt="图片" >
```

（6）尽量避免在选择器末尾添加通配符：

   CSS解析匹配到渲染树的过程是从右到左的逆向匹配，在选择器末尾添加通配符至少会增加一倍多计算量；

（7）减少使用关系型样式表的写法：

   直接使用唯一的类名即可最大限度的提升渲染引擎绘制渲染树的效率；

（8）尽量减少使用JS动画：

   JS直接操作DOM极容易引起页面的重排；

（9）CSS动画使用translate、scale代替top、height：

   尽量使用CSS3的translate、scale属性代替top、left和height、width，避免大量的重排计算；

（10）尽量避免使用&lt;table>、&lt;iframe>：

```
 <table>内容的渲染是将table的DOM渲染树全部生成完并一次性绘制到页面上的，所以在长表格渲染时很耗性能，应该尽量避免使用它，可以考虑使用列表元素<ul>代替；尽量	 使用异步的方式动态添加iframe，因为iframe内资源的下载进程会阻塞父页面静态资源的下载与CSS及HTML DOM的解析；
```

（11）避免运行耗时的JavaScript：

   长时间运行的JavaScript会阻塞浏览器构建DOM树、DOM渲染树、渲染页面，所以任何与页面初次渲染无关的逻辑功能都应该延迟加载执行，这和JavaScript资源的异步加载思路是一致的；

（12）避免使用CSS表达式或CSS滤镜：

   CSS表达式或CSS滤镜的解析渲染速度是比较慢的，在有其他解决方案的情况下应该尽量避免使用；

```swift
     //不推荐
     .opacity{
         filter : progid : DXImageTransform.Microsoft.Alpha( opacity = 50 );
     }
```

（13）减少 DOM的回流

​		1、放弃传统操作dom的时代，基于vue/react开始数据影响视图模式

​				mvvc/mvc/virtual dom/dom diff...

​		2、分离读写操作（现代的浏览器都有渲染队列的机制，`如果操作dom代码的下一行还是操作dom,那么只会引发一次回流`）

​				offsetTop、offsetLeft...

​		3、样式集中改变

​				div.style.cssText = 'width:20px;height:20px'

​				div.className = 'box'

​				不要一条一条地修改DOM的样式，预先定义好class，然后修改DOM的className

​		4、缓存布局信息

​			<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215749.png" alt="image-20210103202306210" style="zoom:80%;" />

​		5、文档碎片（documentFragment) ----- vue使用了该种方式提升性能			

```
		//1、创建文档碎片
		let frg = document.createDocumentFragment()
		for(let i = 0;i<5;i++){
			let nweLi = document.createElement('li');
			newLi.innerHTML = i;
			//创建的li放到文档碎片中，这样不会引发回流，文档碎片只是一个临时的容器
			frg.appendChild(newLi)
		}
		//一次性把内容放到容器中，这样只会引发一次回流
		box.appendChild(frg)
		//销毁文档碎片容器
		frg = null
```

​		6、字符串拼接		

```
		let str = ``;
		for(let i = 0;i<5;i++){
			str+=`<li>${i}</li>
		} 
		box.innerHTML = str
```

​		7、动画效果应用到position属性为absolute或fixed的元素上（脱离文档流）

​		8、CSS3硬件加速（GPU加速）

​			transform:translateZ(0)

​			比起考虑如何减少回流重绘，我们更期待的是，根本不要回流重绘；transform\opacity\filters...这些属性会触发硬件加速，不会

​			引发回流和重绘......

​			可能引发的坑：过多使用会占用大量内存，性能消耗严重、有时候会导致字体模糊等

```
		//这样会引发回流
		//box.style.left = '100px'
		//这样会触发赢家加速，不会引发回流
		box.style.transform = 'translateX(100px)'
```

​		9、避免table布局和使用css的javascript表达式

​		10、将DOM离线后再修改

​				由于display属性为name的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。

​				如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发两次

​		11、使用opacity配合图层使用，既不触发重绘也不触发重排

##### 3、函数防抖

> 概念：延迟要执行的动作，若在延时的这段时间内，再次触发了，则取消之前开启的动作，重新计时
>
> 举例：电脑无操作一分钟后会进入休眠，当第40秒鼠标被移动了以下，重新计时1分子
>
> 实现：定时器
>
> 应用：搜索时等用户完整输入内容后再发送查询请求

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input type="text" id="user_input">
  <button id="btn">搜索</button>
  <script>
    let input = document.getElementById("user_input")
    let id  
    input.addEventListener('keyup',()=>{
      // 1、获取用户的输入
      let data = input.value
      clearTimeout(id)
      id = setTimeout(() => {
          mockAjax(data)
      }, 300);
    })
    function mockAjax(data) {
      console.log(`sendAjax------${data}`);
    }
  </script>
</body>
</html>
```

##### 4、函数节流

> 概念：设定一个特定的时间，让函数在特定的时间内只执行一次，不会频繁切换
>
> 举例：fps游戏，鼠标按住不松手，子弹也不会连成一条线
>
> 实现：定时器、标识
>
> 需求：在鼠标滚轮滚动的时候，每隔2秒钟，打印一次

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{
      height: 4000px;
    }
  </style>
</head>
<body>
  <div></div>
  <script>
    let flag = true
    document.onscroll = function () {
      if(flag){
        console.log(1);
        flag = false
        setTimeout(() => {
          flag = true
        }, 2000);
      }
    }
  </script>
</body>
</html>
```

防抖和节流的主要区别是：

​		**防抖是两个动作之间的时间间隔有限制，节流是在一定时间内执行次数的限制**

##### 5、请求动画帧

> window.requestAnimationFrame()

1、window.requestAnimationFrame()

​		说明：该方法会告诉浏览器在重绘之前调用你所指定的函数

​		1、参数：该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用

​						回调函数会被自动传入一个参数，DOMHighResTimeStamp,标识requestAnimationFrame()开始触发回调函数的当前时间

​		2、返回值：

​						一个long整数，也成为请求ID,是个非零值，是回调列表中唯一的标识，没别的意义。

2、window.cancelAnimationFrame(requestId)

​		取消一个先前通过调用window.requestAnimationFrame()方法添加到计划中的动画帧请求。

​		requestID是先前通过调用window.requestAnimationFrame()方法时返回的ID

#### **二、移动端优化策略**

##### **1、网络加载类**

（1）首屏数据请求提前，避免JavaScript文件加载后才请求数据：

   为了进一步提升页面加载速度，可以考虑将页面的数据请求尽可能提前，避免在JavaScript加载完成后才去请求数据，通常数据请求是页面内容渲染中关键路径最长的部分，而且不能并行，所以如果能将数据请求提前，可以极大程度缩短页面内容的渲染完成时间；

（2）首屏加载和按需加载，非首屏内容滚屏加载，保证首屏内容最小化：

   由于移动端网络速度相对较慢，网络资源有限，因此为了尽快完成页面内容的加载，需要保证首屏加载资源最小化，非首屏内容使用滚动的方式异步加载，一般推荐移动端页面首屏数据展示延时最长不超过3秒，目前中国联通3G的网络速度为338KB/s (2.71Mb/s)，所以推荐首屏所有资源大小不超过1014KB，即大约不超过1MB；

（3）模块化资源并行下载：

   在移动端资源加载中，尽量保证JavaScript资源并行加载，主要指的是模块化JavaScript资源的异步加载，例如AMD的异步模块，使用并行的加载方式能够缩短多个文件资源的加载时间；

（4）inline首屏必备的CSS和JavaScript：

   通常为了在HTML加载完成时能使浏览器中有基本的样式，需要将页面渲染时必备的CSS和JavaScript通过&lt;script>或&lt;style>内联到页面中，避免页面HTML载入完成到页面内容展示这段过程中页面出现空白；

```xml
<!DOCTYPE html>

<head>
  <meta charset="UTF-8">
  <title>样例</title>
  <meta>
  <style>
    /*必备的首屏CSS*/
    html,
    body {
      margin: 0;
      padding: 0;
      background-color: #ccc;
    }
  </style>
</head>

<body>
</body>

</html>
```

（5）meta dns prefetch设置DNS预解析：

   设置文件资源的DNS预解析，让浏览器提前解析获取静态资源的主机IP，避免等到请求时才发起DNS解析请求，通常在移动端HTML中可以采用如下方式完成：

```xml
<!--cdn域名预解析-->
<meta http-equiv="x-dns-prefetch-control" content="on" >
<link rel="dns-prefetch" href="//cdn.domain.com" >
```

（6）资源预加载：

   对于移动端首屏加载后可能会被使用的资源，需要在首屏完成加载后尽快进行加载，保证在用户需要浏览时已经加载完成，这时候如果再去异步请求就显得很慢；

（7）合理利用MTU策略：

   通常情况下，我们认为TCP网络传输的最大传输单元（Maximum Transmission Unit，MTU）为 1500B，即一个 RTT（Round-Trip Time，网络请求往返时间）内可以传输的数据量最大为1500字节，因此在前后端分离的开发模式中，尽量保证页面的HTML内容在1KB以内，这样整个HTML的内容请求就可以在一个RTT内请求完成，最大限度地提高HTML载入速度；

##### 2、缓存类

（1）合理利用浏览器缓存：

   除了上面所说的Cache-Control、Expires、Etag 和 Last-Modified来设置HTTP缓存外，在移动端还可以使用localStorage等来保存AJAX返回的数据，或者使用localStorage保存CSS或JavaScript静态资源内容，实现移动端的离线应用，尽可能减少网络请求，保证静态资源内容的快速加载；

（2）静态资源离线方案：

   对于移动端或Hybrid应用，可以设置离线文件或离线包机制让静态资源请求从本地读取，加快资源载入速度，并实现离线更新；

（3）尝试使用AMP HTML

   AMP HTML可以作为优化前端页面性能的一个解决方案，使用AMP Component中的元素来代替原始的页面元素进行直接渲染；

```xml
<!--不推荐-->
<video width="400" height="300" src="//www.domain.com/videos/myvideo.mp4"
poster="path/poster.jpg">
<div fallback>
    <p>Your browser doesn’t support HTML5 video</p>
</div>
<source type="video/mp4" src="foo.mp4">
<source type="video/webm" src="foo.webm">
</video>

<!--推荐-->
<amp-video width="400" height="300" src="//www.domain.com/videos/myvideo.mp4" poster="path/poster.jpg">
<div fallback>
   <p>Your browser doesn’t support HTML5 video</p>
</div>
<source type="video/mp4" src="foo.mp4">
<source type="video/webm" src="foo.webm">
</amp-video>
```

（4）尝试使用PWA模式：

   PWA（Progressive Web Apps）是 Google 提出的用前沿的 Web 技术为网页提供 App 般使用体验的一系列方案；

##### 3、图片类

（1）图片压缩处理：

   在移动端，通常要保证页面中一切用到的图片都是经过压缩优化处理的，而不是以原图的形式直接使用的，因为那样很消耗流量，而且加载时间更长；

（2）使用较小的图片，合理使用base64内嵌图片：

   在页面使用的背景图片不多且较小的情况下，可以将图片转化成base64编码嵌入到HTML页面或CSS文件中，这样可以减少页面的HTTP请求数，需要注意的是，要保证图片较小，一般图片大小超过2KB就不推荐使用base64嵌入显示了；

```css
.class-name{
    background-image : url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAMAAABxsOwqAAAAYFBMVEWnxwusyQukxQudwQyZvgyhxAyfwgyxzAsUHQGOuA0aJAERGAFIXwSTugyEqgtqhghQZgUwQQIpOQKbuguVtQuKrAuCowp2kQlheghTbQZHWQU7SwVAVgQ6TgQlLwMeKwFOemyQAAAAVElEQVQI1y3JVRaAIAAF0UconXbvf5ei8HfPDIQQhBAAFE10iKig3SLRNN4SP/p+N08VC0YnfIlNWtqIkhg/TPYbCvhqdHAWRXPZSp3g3CWZvVLXC6OJA3ukv0AaAAAAAElFTkSuQmCC');
}
```

（3）使用更高压缩比格式的图片：

   使用具有较高压缩比格式的图片，如webp（需要设计降级兼容方案）等，在同等图片画质的情况下，高压缩比格式的图片体积更小，能够更快完成文件传输，节省网络流量；

```xml
<img src="//cdn.domain.com/path/photo.webp" alt="webp格式图片" >
```

**（4）图片懒加载：**

   为了保证页面内容的最小化，加速页面的渲染，尽可能节省移动端网络流量，页面中的图片资源推荐使用懒加载实现，在页面滚动时动态载入图片；

```kotlin
<img data-src="//cdn.domain.com/path/photo.jpg" alt="懒加载图片" >
```

**具体实现原理：https://blog.csdn.net/qq_44947815/article/details/125286969**

（5）使用MediaQuery 或 srcset根据不同屏幕加载不同大小图片：

   针对不同的移动端屏幕尺寸和分辨率，输出不同大小的图片或背景图能保证在用户体验不降低的前提下节省网络流量，加快部分机型的图片加载速度，这在移动端非常值得推荐；

（6）使用iconfont代替图片图标：

   在页面中尽可能使用iconfont来代替图片图标，这样做的好处有：使用iconfont体积较小，而且是矢量图，因此缩放时不会失真；可以方便地修改图片大小尺寸和呈现颜色；但是需要注意的是，iconfont引用不同webfont格式时的兼容性写法，根据经验推荐尽量按照以下顺序书写，否则不容易兼容到所有的浏览器上；

```css
@font-face{
   font-family:iconfont;
   src:url("./iconfont.eot");
   src:url("./iconfont.eot?#iefix") format("eot"),
   url("./iconfont.woff") format("woff"),
   url("./iconfont.ttf") format("truetype");
}
```

（7）定义图片大小限制：

   加载的单张图片一般建议不超过30KB，避免大图片加载时间长而阻塞页面其他资源的下载，因此推荐10KB以内，如果用户上传的图片过大，建议设置告警系统，帮助我们观察了解整个网站的图片流量情况，做出进一步的改善；

（8）强缓存策略：

   对于一些永远不会变的图片可以使用强缓存的方式缓存在用户的浏览器上；

##### 4、脚本类

（1）尽量使用id：

   选择器选择页面DOM元素时尽量使用id选择器，因为id选择器速度最快；

（2）合理缓存DOM对象：

   对于需要重复使用的DOM对象，要优先设置缓存变量，避免每次使用时都要从整个DOM树中重新查找；

```jsx
//不推荐
$('#mod.active').remove('active');
$('#mod.not-active').addClass('active');

//推荐
let $mod=$('#mod');
$mod.find('.active').remove('active');
$mod.find('.not-active').addClass('active');
```

（3）页面元素尽量使用事件代理，避免直接事件绑定：

   使用事件代理可以避免对每个元素都进行绑定，并且可以避免出现内存泄露及需要动态添加元素的事件绑定问题，所以尽量不要直接使用事件绑定；

```jsx
//不推荐
$('.btn').on('click',function(e){
   console.log(this);
});

//推荐
$('body').on('click','.btn',function(e){
   console.log(this);
});
```

（4）使用touchstart代替click：

   由于移动端屏幕的设计，touchstart事件和click事件触发时间之间存在300毫秒的延时，所以在页面中没有实现touchmove滚动处理的情况下，可以使用touchstart事件来代替元素的click事件，加快页面点击的响应速度，提高用户体验，但同时我们也要注意页面重叠元素touch动作的点击穿透问题；

```jsx
//不推荐
$('body').on('click','.btn',function(e){
    console.log(this);
});

//推荐
$('body').on('touchstart','.btn',function(e){
    console.log(this);
});
```

（5）避免touchmove、scroll连续事件处理：

   需要对touchmove、scroll这类可能连续触发回调的事件设置事件节流，例如设置每隔16ms（60帧的帧间隔为16.7ms，因此可以合理地设置为16ms）才进行一次事件处理，避免频繁的事件调用导致移动端页面卡顿；

```jsx
//不推荐
$('.scroller').on('touchmove','.btn',function(e){
  console.log(this);
});

//推荐
$('.scroller').on('touchmove','.btn',function(e){
  let self=this;
  setTimeout(function(){
    console.log(self);
  },16);
});
```

（6）避免使用eval、with，使用join代替连接符+，推荐使用ECMAScript6的字符串模板，这些都是一些基础的安全脚本编写问题，尽可能使用较高效率的特性来完成这些操作，避免不规范或不安全的写法；

（7）尽量使用ECMAScript6+的特性来编程：

   ECMAScript6+一定程序上更加安全高效，而且部分特性执行速度更快，也是未来规范的需要，所以推荐使用ECMAScript6+的新特性来完成后面的开发；

##### 5、渲染类

（1）使用Viewport固定屏幕渲染，可以加速页面渲染内容：

   一般认为，在移动端设置Viewport可以加速页面的渲染，同时可以避免缩放导致页面重排重绘；

（2）避免各种形式重排重绘：

   页面的重排重绘很耗性能，所以一定要尽可能减少页面的重排重绘，例如页面图片大小变化，元素位置变化等这些情况都会导致重排重绘；

（3）使用CSS3动画，开启GPU加速：

   使用CSS3动画时可以设置transform:translateZ(0) 来开启移动设备浏览器的GPU图形处理加速，让动画过程更加流畅，但需要注意的是，在Native WebView 下 GPU 加速有几率产生 App Crash；

```css
     -webkit-transform:translateZ(0);
     -ms-transform:translateZ(0);
     -o-transform:translateZ(0);
     transform:translateZ(0);
```

（4）合理使用Canvas 和 requestAnimationFrame：

   选择Canvas 或requestAnimationFrame等更高效的动画实现方式，尽量避免使用setTimeout、setInterval等方式来直接处理连续动画；

（5）SVG 代替图片：

   部分情况下可以考虑使用SVG 代替图片实现动画，因为使用SVG格式内容更小，而且SVG  DOM结构方便调整；

（6）不滥用float：

   在DOM渲染树生成后的布局渲染阶段，使用float的元素布局计算比较耗性能，所以尽量减少float的使用，推荐使用固定布局或flex-box弹性布局的方式来实现页面元素布局；

（7）不滥用web字体或过多font-size声明：

   过多的font-size声明会增加字体的大小计算，而且也没有必要；

（8）做好脚本容错：

   脚本容错可以避免非正常环境的执行错误影响页面的加载和不相关功能的使用；

##### 6、架构协议类

（1）尝试使用 SPDY 和 HTTP2：

   在条件允许的情况下可以考虑使用 SPDY 协议来进行文件资源传输，利用连接复用加快传输过程，缩短资源加载时间，HTTP2 在未来也是可以考虑尝试的；

（2）使用后端数据渲染：

   使用后端数据渲染的方式可以加快页面内容的渲染展示，避免空白页面的出现，同时可以解决移动端页面 SEO 的问题，如果条件允许，后端数据渲染是一个很不错的实践思路；

（3）使用 NativeView 代替 DOM 的性能劣势：

   可以尝试使用 NativeView 的 MNV＊ 开发模式来避免 HTML DOM 性能慢的问题，目前使用 MNV＊ 的开发模式已经可以将页面内容渲染体验做到接近客户端 Native 应用的体验了，但需要避免 js Framework 和 native Framework 的频繁交互；

### 跨域

#### **前言**

前后端数据交互经常会碰到请求跨域，什么是跨域，以及有哪几种跨域方式，这是本文要探讨的内容。

**本文完整的源代码请猛戳 [github 博客](https://link.zhihu.com/?target=https%3A//github.com/ljianshu/Blog)，纸上得来终觉浅，建议大家动手敲敲代码。**

#### **一、什么是跨域？**

**1.什么是同源策略及其限制内容？**

同源策略是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到 XSS、CSFR 等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个 ip 地址，也非同源。

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-cc48a3801074a4274e0b2427a92c049f_720w.jpg)

**同源策略限制内容有：**

- Cookie、LocalStorage、IndexedDB 等存储性内容
- DOM 节点
- AJAX 请求发送后，结果被浏览器拦截了

但是有三个标签是允许跨域加载资源：

```js
● <img src=XXX>
● <link href=XXX>
● <script src=XXX>
```

**2.常见跨域场景**

**当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域**。不同域之间相互请求资源，就算作“跨域”。常见跨域场景如下图所示：

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-4fdf3a40eb526ab27a952e2e6a3fdb8c_720w.jpg)

特别说明两点：

**第一：如果是协议和端口造成的跨域问题“前台”是无能为力的。**
**第二：在跨域问题上，仅仅是通过“URL 的首部”来识别而不会根据域名对应的IP地址是否相同来判断。“URL 的首部”可以理解为“协议, 域名和端口必须匹配”**。

这里你或许有个疑问：**请求跨域了，那么请求到底发出去没有？**

**跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了**。你可能会疑问明明通过表单的方式可以发起跨域请求，为什么 Ajax 就不会?因为归根结底，跨域是为了阻止用户读取到另一个域名下的内容，Ajax 可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。

#### **二、跨域解决方案**

##### **1.JSONP**

**1) JSONP 原理**

利用 &lt;script> 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP 请求一定需要对方的服务器做支持才可以。

**2) JSONP 和 AJAX 对比**

JSONP 和 AJAX 相同，都是客户端向服务器端发送请求，从服务器端获取数据的方式。但AJAX 属于同源策略，JSONP 属于非同源策略（跨域请求）。

**3) JSONP 优缺点**

JSONP 优点是简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题。**缺点是仅支持 get 方法具有局限性,不安全可能会遭受 XSS 攻击。**

**4) JSONP 的实现流程**

`注：需要后端配合`

- 声明一个回调函数，其函数名(如 show )当做参数值，要传递给跨域请求数据的服务器，函数形参为要获取目标数据(服务器返回的 data )。
- 创建一个`<script>`标签，把那个跨域的 API 数据接口地址，赋值给 script 的 src，还要在这个地址中向服务器传递该函数名（可以通过问号传参 :?callback=show）。
- 服务器接收到请求后，需要进行特殊的处理：把传递进来的函数名和它需要给你的数据拼接成一个字符串，例如：传递进去的函数名是 show，它准备好的数据是`show('我不爱你')`。
- 最后服务器把准备的数据通过 HTTP 协议返回给客户端，客户端再调用执行之前声明的回调函数（show），对返回的数据进行操作。

在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP 函数。

```js
// index.html
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    window[callback] = function(data) {
      resolve(data)
      document.body.removeChild(script)
    }
    params = { ...params, callback } // wd=b&callback=show
    let arrs = []
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)
  })
}
jsonp({
  url: 'http://localhost:3000/say',
  params: { wd: 'Iloveyou' },
  callback: 'show'
}).then(data => {
  console.log(data)
})
```

上面这段代码相当于向`http://localhost:3000/say?wd=Iloveyou&callback=show`这个地址请求数据，然后后台返回`show('我不爱你')`，最后会运行 show() 这个函数，打印出'我不爱你'。

```js
// server.js
let express = require('express')
let app = express()
app.get('/say', function(req, res) {
  let { wd, callback } = req.query
  console.log(wd) // Iloveyou
  console.log(callback) // show
  res.end(`${callback}('我不爱你')`)
})
app.listen(3000)
```

**5) jQuery 的 jsonp 形式**

**JSONP 都是 GET 和异步请求的，不存在其他的请求方式和同步请求，且 jQuery 默认就会给 JSONP 的请求清除缓存。**

```js
$.ajax({
url:"http://crossdomain.com/jsonServerResponse",
dataType:"jsonp",
type:"get",//可以省略
jsonpCallback:"show",//->自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
jsonp:"callback",//->把传递函数名的那个形参callback，可省略
success:function (data){
console.log(data);}
});
```



##### **2.cors**

**CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现**。

浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。

服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。

虽然设置 CORS 和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为**简单请求**和**复杂请求**。

**1) 简单请求**

只要同时满足以下两大条件，就属于简单请求。

条件1：使用下列方法之一：

- GET
- HEAD
- POST



条件2：Content-Type 的值仅限于下列三者之一：

- text/plain
- multipart/form-data
- application/x-www-form-urlencoded



请求中的任意 XMLHttpRequestUpload 对象均没有注册任何事件监听器；

XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问。

\2) 复杂请求

不符合以上条件的请求就肯定是复杂请求了。

复杂请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为"预检"请求,该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。

我们用`PUT`向后台请求时，属于复杂请求，后台需做如下配置：

```js
// 允许哪个方法访问我
res.setHeader('Access-Control-Allow-Methods', 'PUT')
// 预检的存活时间
res.setHeader('Access-Control-Max-Age', 6)
// OPTIONS请求不做任何处理
if (req.method === 'OPTIONS') {
  res.end() 
}
// 定义后台返回的内容
app.put('/getData', function(req, res) {
  console.log(req.headers)
  res.end('我不爱你')
})
```



接下来我们看下一个完整复杂请求的例子，并且介绍下 CORS 请求相关的字段：

```js
// index.html
let xhr = new XMLHttpRequest()
document.cookie = 'name=xiamen' // cookie不能跨域
xhr.withCredentials = true // 前端设置是否带cookie
xhr.open('PUT', 'http://localhost:4000/getData', true)
xhr.setRequestHeader('name', 'xiamen')
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.response)
      //得到响应头，后台需设置Access-Control-Expose-Headers
      console.log(xhr.getResponseHeader('name'))
    }
  }
}
xhr.send()

// server1.js
let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(3000);

// server2.js
let express = require('express')
let app = express()
let whitList = ['http://localhost:3000'] //设置白名单
app.use(function(req, res, next) {
  let origin = req.headers.origin
  if (whitList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin)
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name')
    // 允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true)
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6)
    // 允许返回的头
    res.setHeader('Access-Control-Expose-Headers', 'name')
    if (req.method === 'OPTIONS') {
      res.end() // OPTIONS请求不做任何处理
    }
  }
  next()
})
app.put('/getData', function(req, res) {
  console.log(req.headers)
  res.setHeader('name', 'jw') //返回一个响应头，后台需设置
  res.end('我不爱你')
})
app.get('/getData', function(req, res) {
  console.log(req.headers)
  res.end('我不爱你')
})
app.use(express.static(__dirname))
app.listen(4000)
```



上述代码由`http://localhost:3000/index.html`向`http://localhost:4000/`跨域请求，正如我们上面所说的，后端是实现 CORS 通信的关键。

##### **3.Websocket**

Websocket 是 HTML5 的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。WebSocket 和 HTTP 都是应用层协议，都基于 TCP 协议。但是 **WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据**。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。

原生 WebSocket API 使用起来不太方便，我们使用`Socket.io`，它很好地封装了 WebSocket 接口，提供了更简单、灵活的接口，也对不支持 WebSocket 的浏览器提供了向下兼容。

我们先来看个例子：本地文件 socket.html 向`localhost:3000`发生数据和接受数据：

```js
// socket.html
<script>
    let socket = new WebSocket('ws://localhost:3000');
    socket.onopen = function () {
      socket.send('我爱你');//向服务器发送数据
    }
    socket.onmessage = function (e) {
      console.log(e.data);//接收服务器返回的数据
    }
</script>

// server.js
let express = require('express');
let app = express();
let WebSocket = require('ws');//记得安装ws
let wss = new WebSocket.Server({port:3000});
wss.on('connection',function(ws) {
  ws.on('message', function (data) {
    console.log(data);
    ws.send('我不爱你')
  });
})
```



##### **4. Node 中间件代理(两次跨域)**

实现原理：**同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略。**

代理服务器，需要做以下几个步骤：

- 接受客户端请求 。
- 将请求转发给服务器。
- 拿到服务器响应数据。
- 将响应转发给客户端。



![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-57de476a454a7fe5cea0ccc70ceb338c_720w.jpg)

我们先来看个例子：本地文件 index.html 文件，通过代理服务器`http://localhost:3000`向目标服务器`http://localhost:4000`请求数据。

```js
// index.html(http://127.0.0.1:5500)
 <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script>
      $.ajax({
        url: 'http://localhost:3000',
        type: 'post',
        data: { name: 'xiamen', password: '123456' },
        contentType: 'application/json;charset=utf-8',
        success: function(result) {
          console.log(result) // {"title":"fontend","password":"123456"}
        },
        error: function(msg) {
          console.log(msg)
        }
      })
     </script>

// server1.js 代理服务器(http://localhost:3000)
const http = require('http')
// 第一步：接受客户端请求
const server = http.createServer((request, response) => {
  // 代理服务器，直接和浏览器直接交互，需要设置CORS 的首部字段
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  // 第二步：将请求转发给服务器
  const proxyRequest = http
    .request(
      {
        host: '127.0.0.1',
        port: 4000,
        url: '/',
        method: request.method,
        headers: request.headers
      },
      serverResponse => {
        // 第三步：收到服务器的响应
        var body = ''
        serverResponse.on('data', chunk => {
          body += chunk
        })
        serverResponse.on('end', () => {
          console.log('The data is ' + body)
          // 第四步：将响应结果转发给浏览器
          response.end(body)
        })
      }
    )
    .end()
})
server.listen(3000, () => {
  console.log('The proxyServer is running at http://localhost:3000')
})

// server2.js(http://localhost:4000)
const http = require('http')
const data = { title: 'fontend', password: '123456' }
const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end(JSON.stringify(data))
  }
})
server.listen(4000, () => {
  console.log('The server is running at http://localhost:4000')
})
```



上述代码经过两次跨域，值得注意的是浏览器向代理服务器发送请求，也遵循同源策略，最后在 index.html 文件打印出`{"title":"fontend","password":"123456"}`。

##### **5.nginx 反向代理**

实现原理类似于 Node 中间件代理，需要你搭建一个中转 nginx 服务器，用于转发请求。

使用 nginx 反向代理实现跨域，是最简单的跨域方式。只需要修改 nginx 的配置即可解决跨域问题，支持所有浏览器，支持 session，不需要修改任何代码，并且不会影响服务器性能。

实现思路：通过 nginx 配置一个代理服务器（域名与 domain1 相同，端口不同）做跳板机，反向代理访问 domain2 接口，并且可以顺便修改 cookie 中 domain 信息，方便当前域 cookie 写入，实现跨域登录。

先下载 [nginx](https://link.zhihu.com/?target=http%3A//nginx.org/en/download.html)，然后将 nginx 目录下的 nginx.conf 修改如下：

```js
// proxy服务器
server {
    listen       81;
    server_name  www.domain1.com;
    location / {
        proxy_pass   http://www.domain2.com:8080;  #反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
        index  index.html index.htm;

        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
        add_header Access-Control-Allow-Credentials true;
    }
}
```



最后通过命令行`nginx -s reload`启动 nginx。

```js
// index.html
var xhr = new XMLHttpRequest();
// 前端开关：浏览器是否读写cookie
xhr.withCredentials = true;
// 访问nginx中的代理服务器
xhr.open('get', 'http://www.domain1.com:81/?user=admin', true);
xhr.send();

// server.js
var http = require('http');
var server = http.createServer();
var qs = require('querystring');
server.on('request', function(req, res) {
    var params = qs.parse(req.url.substring(2));
    // 向前台写cookie
    res.writeHead(200, {
        'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'   // HttpOnly:脚本无法读取
    });
    res.write(JSON.stringify(params));
    res.end();
});
server.listen('8080');
console.log('Server is running at port 8080...');
```

#### **三、总结**

- CORS 支持所有类型的 HTTP 请求，是跨域 HTTP 请求的根本解决方案；
- JSONP 只支持 GET 请求，JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据；
- 不管是 Node 中间件代理还是 nginx 反向代理，主要是通过同源策略对服务器不加限制；
- 日常工作中，用得比较多的跨域方案是 cors 和 nginx 反向代理。