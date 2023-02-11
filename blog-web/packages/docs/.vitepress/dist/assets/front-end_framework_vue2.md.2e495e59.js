import{_ as C,c as A,d as s,e as n,b as a,t,n as y,g as D,f as d,a as l,r as e,o as u}from"./app.0aa8d8cc.js";const N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/framework/vue2.md"}'),g={name:"front-end/framework/vue2.md"},F=l(`<h4 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-hidden="true">#</a></h4><h5 id="环境安装" tabindex="-1">环境安装 <a class="header-anchor" href="#环境安装" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     npm install --global vue-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在vue.config.js中输入以下代码可以更简单使用文件路径：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       configureWebpack: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         resolve: {</span></span>
<span class="line"><span style="color:#A6ACCD;">           alias: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             assets: &quot;@/assets&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             common: &quot;@/common&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             components: &quot;@/components&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             network: &quot;@/network&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             views: &quot;@/views&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>引入全局css</p><p>在app.vue的style中引入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@import &quot;./assets/css/base.css&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>或者在main.js中引入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import &quot;./assets/css/base.css&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>打包Vue项目，</p><p>第一步：</p><p>在router得文件夹中的Index.js中的路由模式必须为hash模式（由于默认就是hash模式，所以我们不写也行，但不能写history模式）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const router = new VueRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;hash&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       base: p<wbr>rocess.env.BASE_URL,</span></span>
<span class="line"><span style="color:#A6ACCD;">       routes</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第二步：</p><p>在vue.config.js中添加：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> 	publicPath: &quot;./&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210405211627-1657022362068219.png" alt="image-20201128141508724"></p><p>之后执行:npm run build</p><p>然后打包成功，并放置在asset文件夹</p><h5 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h5><p><strong>dependencies和devDependencies</strong>的区别</p><p>为什么要分这两个东西来记录包呢？</p><p>举个例子，加入我们导入一个math模块</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     require math from &#39;math&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(math)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这样的话我们必须要用到math模块，所以必须放到<strong>dependencies</strong>中，</p><p>但是我比如想打包很多文件，那么就需要用到webpack，但是并不是什么时候都要用到的，而且也不需要引入到项目代码中，仅仅作为工具使用，</p><p>npm install会把<strong>dependencies和devDependencies</strong>的依赖都安装，其实大部分项目我们都需要把两个环境的依赖都安装</p><p>如果你只是单纯的想使用这个包而不需要进行一些改动测试之类的操作，则运行：（只安装dependencies而不安装devDependencies。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	npm install --production</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果想要安装devDependencies,则运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	npm install packagename --dev </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="模块化开发" tabindex="-1">模块化开发 <a class="header-anchor" href="#模块化开发" aria-hidden="true">#</a></h4><h5 id="全局样式" tabindex="-1">全局样式 <a class="header-anchor" href="#全局样式" aria-hidden="true">#</a></h5><blockquote><p>全局作用域的意思就是该css对全局的所有可匹配的元素产生影响</p></blockquote><ul><li><p>在main.js中直接import css文件</p><p>main.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./index.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.config.productionTip = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  render: h =&gt; h(App),</span></span>
<span class="line"><span style="color:#A6ACCD;">}).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(app);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>index.css</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">h1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: blue;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>app.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;我在app中的h1&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">h1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: pink;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgMrYoztds4via9lh.png" alt="image-20211001144805304"></p><p>可以看出，main.js导入的css对app.vue产生了影响，并且优先级大于统计的app.vue中的css样式，对其他组件同理</p></li><li><p>直接使用&lt;style&gt;不加scoped属性</p><p>app.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;HelloWorld msg=&quot;Welcome to Your Vue.js App&quot;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;我在app中的h1&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import HelloWorld from &#39;./components/HelloWorld.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;App&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    HelloWorld</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">h1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  /* color: pink; */</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>helloworld.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;{{ msg }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;HelloWorld&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    msg: String</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  h1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgJkCW1cd48obE2pn.png" alt="image-20211001145201563"></p><p>可以看出子组件中的style也对父组件app.vue产生了影响，如果父组件也有该全局样式，那父组件的优先级高于同级的选择器</p></li></ul><h5 id="局部css-scoped属性" tabindex="-1">局部css-scoped属性 <a class="header-anchor" href="#局部css-scoped属性" aria-hidden="true">#</a></h5><blockquote><p>在Vue文件中的style标签上有一个特殊的属性，scoped。当一个style标签拥有scoped属性时候，它的css样式只能用于当前的Vue组件，可以使组件的样式不相互污染。如果一个项目的所有style标签都加上了scoped属性，相当于实现了样式的模块化。</p></blockquote><p><strong>使用：</strong></p><p>​ 使用在style标签上</p><p>例如：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220503-1657022362068222.png" alt="image-20201029134008532"></p><p><strong>作用：实现组件样式的私有化不对全局造成样式污染</strong></p><p>例如：</p><p>子组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;p class=&quot;son&quot;&gt;son&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       name: &#39;HelloWorld&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         msg: String</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       .parent{</span></span>
<span class="line"><span style="color:#A6ACCD;">         color: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>父组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;hello-world/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p class=&quot;parent&quot;&gt;parent&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import HelloWorld from &#39;./components/HelloWorld.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       name: &#39;App&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         HelloWorld</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       .son{</span></span>
<span class="line"><span style="color:#A6ACCD;">         color: blue;</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>输出结果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220506-1657022362068217.png" alt="image-20201029134540897"></p><p>由于子组件中的style标签加了scoped属性，所以它的样式只对自身组件有效，并不能影响其他组件</p><p>父组件中的style标签没有scoped属性，所以它的样式可以控制全局样式</p><p>假如把子组件中的scoped去掉也一样可以控制父元素的样式</p><p><code>注意：只要不加scoped属性的都属于全局CSS可以控制全局的标签的，所以如果不加scoped，那么必须保证选择器不会影响到其他不相关的元素</code></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220510-1657022362067216.png" alt="image-20201029134837243"></p><p>假设父子组件都加上scoped,父组件还是能控制子组件最外层的元素的，因为为了更好的布局，会默认在子组件第一个元素加上父元素的哈希值</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210308033517-1657022362068223.png" alt="image-20210308033516460"></p><p><strong>原理：scoped是通过给当前组件的元素加上一个随机唯一属性，然后通过属性选择器进行唯一确认，从而不会影响到其他组件的元素</strong></p><p>但是有一个特别要注意的点，假设我们在一个组件使用另一个组件，我们在父组件使用</p><p>scoped也是会影响子组件的最外层div的，这是为了方便父元素布局，但是只能影响子组件的最外层div，其他无法影响</p><p>但是scoped也会带来一个问题，由于有了scoped的限制，我们引用的一些echrts和ui框架组件就不能直接影响他们的样式了，如果去掉scoped就会污染全局，</p><p>解决方案：我们可以在该选择器前面加上/deep/就行了，比如下图，这样我们的样式就只会影响.tableHome下面的元素了，而不会污染全局</p><p>使用样式穿透后 生成的额唯一标识 都只会在父级元素中，子级元素中的唯一标识使用父级后生成中的。</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210405212413-1657022362068218.png" alt="image-20201206233329101"></p><h4 id="模块化概述" tabindex="-1">模块化概述 <a class="header-anchor" href="#模块化概述" aria-hidden="true">#</a></h4><p><strong>传统开发模式的主要问题</strong></p><ul><li>命名冲突</li><li>文件依赖</li></ul><p><strong>通过模块化解决上述问题</strong></p><ul><li>模块化就是单独的一个功能封装到一个模块（文件）中，模块之间相互隔离，但是可以通过特定的接口公开内部成员，也可以依赖别的模块</li><li>模块化开发的好处：方便代码的重用，从而提升开发效率，并且方便后期的维护</li></ul><h5 id="浏览器端模块化规范" tabindex="-1"><strong>浏览器端模块化规范</strong> <a class="header-anchor" href="#浏览器端模块化规范" aria-hidden="true">#</a></h5><p>1、AMD</p><p>2、CMD</p><h5 id="服务器端模块化规范" tabindex="-1"><strong>服务器端模块化规范</strong> <a class="header-anchor" href="#服务器端模块化规范" aria-hidden="true">#</a></h5><p>CommonJS</p><ol><li><p>模块分为<code>单文件模块</code>与<code>包</code></p></li><li><p>模块成员导出：<code>module.exports</code>和<code>exports</code></p><p>module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量</p><p>node为每一个模块提供了一个exports变量(可以说是一个对象)，指向 module.exports。这相当于每个模块中都有一句这样的命令 var exports = module.exports;</p><p><strong>使用实例(文件均在同一个目录下）：</strong></p><p>c.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const a = 10</span></span>
<span class="line"><span style="color:#A6ACCD;">const b = 11</span></span>
<span class="line"><span style="color:#A6ACCD;">exports.a = a</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports.b = b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>d.js:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const c = require(&#39;./c&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(c)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>输出结果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220432-1657022362068220.png" alt="image-20201014225241275"></p><p>一般采用module.exports直接导出全部变量</p><p>当c.js变成这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const a = 10</span></span>
<span class="line"><span style="color:#A6ACCD;">const b = 11</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>输出结果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220437-1657022362068221.png" alt="image-20201014225244872"></p><p>可以实现一样的效果</p><p>使用ES6的对象结构语法接受导入对象也是比较常见的：</p><p>d.js：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { a, b } = require(&#39;./c&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(b)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220441-1657022362069226.png" alt="image-20201014225436175"></p></li><li><p>模块化成员导入：<code>require(&#39;模块标识符&#39;)</code></p></li></ol><h5 id="大一统的模块化规范-es6模块化" tabindex="-1"><strong>大一统的模块化规范-ES6模块化</strong> <a class="header-anchor" href="#大一统的模块化规范-es6模块化" aria-hidden="true">#</a></h5><p>在ES6模块化规范诞生之前，Javascript社区已经尝试并提出了AMD、CMD、CommonJS等模块化规范。</p><p>但是，这些社区提出的模块化标准，还是存在一定的差异性与局限性，并不是浏览器与服务器通用的模块化标准，例如：</p><ul><li>AMD和CMD适用于浏览器端的Javascript模块化</li><li>CommonJS适用于服务器端的Javascript模块化</li></ul><p>因此，ES6语法规范中，在语言层面上定义了ES6模块化规范，是浏览器端与服务器端通用的模块化开发规范。</p><p>ES6模块化规范中定义：</p><ul><li>每个js文件都是一个独立的模块</li><li><code>导入模块成员</code>使用<code>import</code>关键字</li><li><code>暴露模块成员</code>使用\`export和export default关键字</li></ul><blockquote><p>export和export default的区别</p></blockquote><p><strong>1.export与export default均可用于导出常量、函数、文件、模块等</strong><strong>2.在一个文件或模块中，export、import可以有多个，export default只可以有一个</strong><strong>3.通过export方式导出，在导入时要加{ }，而且名称要一一对应（可以用as来起别名），export default则不需要，名称也没有限制</strong></p><p><em><em>ES6模块化规范在服务器端的使用</em>（nodejs)</em>****</p><p>1、配置package.json，nodejs默认支持commonjs，需要在package.json配置type为module才可以</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220806204235061.png" alt="image-20220806204235061" style="zoom:67%;"><p>2、通过babel实现，nodejs环境默认不支持ES6模块化规范</p><p><code>babel是将高级、有兼容性的js，转换为低级、无兼容性的js的**语法转换工具**</code></p><ol><li><p>npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node</p></li><li><p>npm install --save @babel/polyfill</p></li><li><p>在项目根目录创建文件babel.config.js</p></li><li><p>babel.config.js文件内容如下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const presets = [</span></span>
<span class="line"><span style="color:#A6ACCD;">	[</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;@babel/env&quot;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">			targets:{</span></span>
<span class="line"><span style="color:#A6ACCD;">				edge:&quot;17&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">				firefox:&quot;60&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">				chrome:&quot;67&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">				safari:&quot;11.1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	presets</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>通过npx babel-node index.js 执行代码</p></li></ol><p><em><strong>注释：babel运行之前，先读取babel.config.js配置文件，根据配置信息，进行代码转换</strong></em></p><p><strong>使用实例(文件均在同一个目录下）：</strong></p><p>m1.js:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	 let a = 10</span></span>
<span class="line"><span style="color:#A6ACCD;">     function show() {</span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(&#39;11111&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       a,</span></span>
<span class="line"><span style="color:#A6ACCD;">       show,</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     export let s1 = &#39;aaa&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export function say() {</span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(&#39;asasas&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>index.js:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import m1, { s1, say } from &#39;./m1.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(m1)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(s1)</span></span>
<span class="line"><span style="color:#A6ACCD;">     say()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>输出结果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220444-1657022362069225.png" alt="image-20201014231044003"></p><p><strong>ES6模块化规范在浏览器端的使用</strong></p><p><strong>使用实例(文件均在同一个目录下）：</strong></p><p>a.js:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     var name = &#39;小明&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     var age = 18</span></span>
<span class="line"><span style="color:#A6ACCD;">     var address = &#39;广州&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 导出方式一，注意，只有这种方式才支持对象解构，export default不支持</span></span>
<span class="line"><span style="color:#A6ACCD;">     export { name, age }   </span></span>
<span class="line"><span style="color:#A6ACCD;">     //导出方式二：</span></span>
<span class="line"><span style="color:#A6ACCD;">     export var num1 = 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">     export function mul(numl) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       return num1</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     //导出方式三:</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default address</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>b.js:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	//第一种导入方式</span></span>
<span class="line"><span style="color:#A6ACCD;">	import address, { name as alias, age, num1, mul } from &#39;./a.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(alias)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(age)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(num1)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(mul)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(address)</span></span>
<span class="line"><span style="color:#A6ACCD;">     //第二种导入方式：</span></span>
<span class="line"><span style="color:#A6ACCD;">     import address, * as aaa from &#39;./a.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(aaa.name + aaa.age + aaa.num1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>index.html:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;!-- &lt;script src=&quot;./a.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt; --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;script src=&quot;./b.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>注：要使用export和import，在引入js文件的时候必须加上属性type=&#39;module&#39;,不需要全部文件都在html引入，只需要引入b.js，因为a.js已经在b.js引入了，a.js有作用的部分已经放到b.js中了，如果还在html引入就没有意义了</p><h4 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-hidden="true">#</a></h4><p>在Vue项目中，我们使用Element-ui,或者ant-design这些都需要使用Vue.use安装使用它，这是为什么？</p><p>比如：<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220447-1657022362069229.png" alt="image-20201031172437682"></p><p>因为这样相当于全局注册了该组件，就可以在任何组件中使用了。（注意：某些组件不能通过Vue.use注册，比如axios,是因为它没有install方法</p><p>我们首先自己自定义一个全局组件吧</p><p>在index.js中：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220450-1657022362069232.png" alt="image-20201031172809099"></p>`,114),m=s("table",null,null,-1),h=l(`<p>在main.js中注册(实际上就运行了下index.js中的table函数)</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220454-1657022362068224.png" alt="image-20201031173145811"></p><p>这样我们就可以在任何地方使用了</p><p>例如在user.vue中； <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220457-1657022362069231.png" alt="image-20201031173244669"></p><p>实际上注册全局组件并不需要那么复杂，只需要两行代码就行，上面的方法只是更好的封装以及功能更强大</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220500-1657022362069227.png" alt="image-20201031173930801"></p><p>只需要</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import index from &#39;./components/index.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     // Vue.use(index)</span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.component(&#39;Filters&#39;, index)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>要注意，记得加上.vue后缀，不能省略，因为在.js文件中，如果没有加后缀名，会优先加载.js</p><p>两行代码就能搞定的事为什么要搞那么复杂呢？</p><p>实际上Vue.use也是基于这两行代码</p><p>Vue.use()中的参数是一个对象，然后会执行参数对象中的install方法，所以使用Vue.use也是相当于执行了Vue.component(&#39;Filters&#39;, index)，没有区别，只不过</p><p>Vue.use()还可以注册全局方法等有用的东西</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    let MyPlugin={}</span></span>
<span class="line"><span style="color:#A6ACCD;">    MyPlugin.install = function (Vue, options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 1. 添加全局方法或 property</span></span>
<span class="line"><span style="color:#A6ACCD;">       Vue.myGlobalMethod = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 逻辑...</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 2. 添加全局资源</span></span>
<span class="line"><span style="color:#A6ACCD;">       Vue.directive(&#39;my-directive&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">         bind (el, binding, vnode, oldVnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 逻辑...</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ...</span></span>
<span class="line"><span style="color:#A6ACCD;">       })</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 3. 注入组件选项</span></span>
<span class="line"><span style="color:#A6ACCD;">       Vue.mixin({</span></span>
<span class="line"><span style="color:#A6ACCD;">         created: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 逻辑...</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ...</span></span>
<span class="line"><span style="color:#A6ACCD;">       })</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 4. 添加实例方法</span></span>
<span class="line"><span style="color:#A6ACCD;">       Vue.prototype.$myMethod = function (methodOptions) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 逻辑...</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default Myplugin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="vue基本语法" tabindex="-1">vue基本语法 <a class="header-anchor" href="#vue基本语法" aria-hidden="true">#</a></h4><h5 id="mustachae语法" tabindex="-1">Mustachae语法 <a class="header-anchor" href="#mustachae语法" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220515-1657022362069230.png" alt="image-20210222130408908" style="zoom:80%;"><h5 id="v-once" tabindex="-1">v-once <a class="header-anchor" href="#v-once" aria-hidden="true">#</a></h5><blockquote><p>该指令后面不需要跟任何表达式</p><p>该指令表示元素和组件不会随着数据的改变而改变。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h2&gt;{{message}}&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;!-- v-once:</span></span>
<span class="line"><span style="color:#A6ACCD;">        该指令后面不需要跟任何表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">        该指令表示元素和组件不会随着数据的改变而改变。 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h2 v-once&gt;{{message}}&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script src=&quot;./js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let app=new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">            el:&#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                message:&quot;你好呀&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="v-html、v-text" tabindex="-1">v-html、v-text <a class="header-anchor" href="#v-html、v-text" aria-hidden="true">#</a></h5><blockquote><p>用来渲染dom innerHTML和innerText的</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h2&gt;{{url}}&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h2 v-html=&quot;url&quot;&gt;&lt;/h2&gt;   //百度一下超链接</span></span>
<span class="line"><span style="color:#A6ACCD;">        //里面的7777会被覆盖掉，所以很少使用v-text</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h2 v-text=&quot;url&quot;&gt;7777&lt;/h2&gt;   //&lt;a href=&quot;http://www.baidu.com&quot;&gt;百度一下&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script src=&quot;./js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let app=new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">            el:&quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                url:\`&lt;a href=&quot;http://www.baidu.com&quot;&gt;百度一下&lt;/a&gt;\`</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="v-pre" tabindex="-1">v-pre <a class="header-anchor" href="#v-pre" aria-hidden="true">#</a></h5><blockquote><p>不会处理文本内容，保留原始内容和格式</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h2&gt;{{message}}&lt;/h2&gt;    //你好</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h2 v-pre&gt;{{message}}&lt;/h2&gt;  //{{message}} ，不做处理</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script src=&quot;./js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let app=new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">            el:&quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                message:&quot;你好&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>v-cloak</p><blockquote><p>这个用来解决闪烁问题</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /* 属性选择器 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        [v-cloak]{</span></span>
<span class="line"><span style="color:#A6ACCD;">            display: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div id=&quot;app&quot; v-cloak&gt;{{message}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script src=&quot;./js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        //在vue解析之前，div中有一个属性v-cloak</span></span>
<span class="line"><span style="color:#A6ACCD;">        //在vue解析之后，div中没有一个属性v-cloak</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            let app=new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">            el:&quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                message:&quot;你好呀&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        },1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="v-bind" tabindex="-1">v-bind <a class="header-anchor" href="#v-bind" aria-hidden="true">#</a></h5><blockquote><p>v-bind 主要用于属性绑定，Vue官方提供了一个简写方式 <strong>:bind</strong>，例如：</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 完整语法 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a v-bind:href=&quot;url&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- 缩写 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;a :href=&quot;url&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="绑定html-class" tabindex="-1">绑定HTML Class <a class="header-anchor" href="#绑定html-class" aria-hidden="true">#</a></h6><p><strong>一、对象语法：</strong></p><p>我们可以给v-bind:class 一个对象，以动态地切换class。注意：v-bind:class指令可以与普通的class特性共存</p><p>HTML代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;ul class=&quot;box&quot; v-bind:class=&quot;{‘textColor‘:isColor, ‘textSize‘:isSize}&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;学习Vue&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;学习Node&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;学习React&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>CSS代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.box{</span></span>
<span class="line"><span style="color:#A6ACCD;">    border:1px dashed #f0f;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.textColor{</span></span>
<span class="line"><span style="color:#A6ACCD;">    color:#f00;</span></span>
<span class="line"><span style="color:#A6ACCD;">    background-color:#eef;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.textSize{</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size:30px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-weight:bold;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>JS代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var vm= new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el:&#39;.box&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        isColor:true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isSize:true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>也可以直接绑定数据里的一个对象：</strong></p><p>HTML代码：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">classObject</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">学习Vue</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">学习Node</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">学习React</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>JS代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> vm</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">‘</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">box‘</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">classObject</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">            ‘textColor‘</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            ‘textSize‘</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//不渲染，注意看下面的截图</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwKioL1gLE7jBVrvSAACSP3ftTFM106.png" alt="技术分享" style="zoom:67%;"><p><strong>例子</strong></p>`,48),v=l(`<p><strong>二、数组语法</strong></p><p>我们可以把一个数组传给v-bind:class，以应用一个class列表</p><p>HTML代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;ul class=&quot;box&quot; :class=&quot;[classA, classB]&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;学习Vue&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;学习Node&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;学习React&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>JS代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var vm= new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el:‘.box‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        classA:‘textColor‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">        classB:‘textSize‘</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>如果想根据条件切换列表中的class，可以用三目运算</strong></p><p>HTML代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;ul class=&quot;box&quot; :class=&quot;[isA?classA:‘‘, classB]&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;学习Vue&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;学习Node&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;学习React&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>JS代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var vm= new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el:‘.box‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        classA:‘textColor‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">        classB:‘textSize‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">        isA:false </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在这个例子中，首先判断isA的boolean值，如果为true，则渲染classA；如果为false，则不渲染。classB没有做三目运算，所以是始终显示的，看看页面截图</p><p><a href="http://s2.51cto.com/wyfs02/M01/89/2F/wKioL1gLFw7zSxVrAACvZz_XHmk974.png" target="_blank" rel="noreferrer"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwKioL1gLFw7zSxVrAACvZz_XHmk974.png" alt="技术分享" style="zoom:80%;"></a></p><p><strong>对于多个class，可以这么写：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div v-bind:class=&quot;[classA, { classB: isB, classC: isC }]&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="绑定内联样式" tabindex="-1">绑定内联样式 <a class="header-anchor" href="#绑定内联样式" aria-hidden="true">#</a></h6><p><strong>一、对象语法</strong></p><p>v-bind:style 的对象语法十分直观--非常像CSS，其实它是一个Javascript对象，<strong>CSS属性名必须用驼峰命名法</strong>（官方文档写的是既可以用驼峰也可以用 短横分隔命名法），但是用短横分隔是会报错的，属性值如果没有加双引号，那么会被当成变量解析</p><p>HTML代码：<code>（这里演示CSS属性名用短横分隔报错）,注意css属性样按照驼峰命名法的规则去写</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	&lt;div id=&quot;box&quot; :style=&quot;{color:activeColor, fontSize:size}&quot;&gt;红嘴绿鹦哥&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>JS代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var vm= new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el:‘#box‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        activeColor:‘#f00‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">        size:‘30px‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">        shadow:‘5px 2px 6px #000‘</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>二、数组语法</strong></p><p>可将多个样式对象应用到一个元素上</p><p>HTML代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;box&quot; :style=&quot;[styleObjectA, styleObjectB]&quot;&gt;好好学习，天天向上&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>JS代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var vm2= new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el:‘.box‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        styleObjectA:{</span></span>
<span class="line"><span style="color:#A6ACCD;">            fontSize:‘36px‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">            color:‘blue‘</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        styleObjectB:{</span></span>
<span class="line"><span style="color:#A6ACCD;">            textDecoration:‘underline‘</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="添加图片src地址" tabindex="-1">添加图片SRC地址 <a class="header-anchor" href="#添加图片src地址" aria-hidden="true">#</a></h6>`,29),b=l(`<p>HTML代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;img class=&quot;box&quot; :src=&quot;url&quot; &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>JS代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var vm= new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el:‘.box‘,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        url:‘https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png‘</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220519-1657022362070233.png" alt="image-20201121213917611"></p><h6 id="component-内置组件-v-bind-is-实现动态组件" tabindex="-1">&lt;component&gt;内置组件 + v-bind: is：实现动态组件 <a class="header-anchor" href="#component-内置组件-v-bind-is-实现动态组件" aria-hidden="true">#</a></h6><blockquote><h5 id="component-元素是vue-里面的一个内置组件。" tabindex="-1">&lt;component&gt; 元素是vue 里面的一个内置组件。 <a class="header-anchor" href="#component-元素是vue-里面的一个内置组件。" aria-hidden="true">#</a></h5><p>在&lt;component&gt;里面使用 v-bind: is，可以实现动态组件的效果。</p><p>也就是说is等于什么这里就渲染哪个组件，而不需要使用v-if和v-else这些方法来筛选，并且能在同一个位置实现响应式动态显示不同组件</p></blockquote><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc5NjYzMQ==,size_27,color_FFFFFF,t_70.png" alt="img" style="zoom:80%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc5NjYzMQ==,size_27,color_FFFFFF,t_70-1657022361785149.png" alt="img" style="zoom:80%;"><p>使用实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;component v-bind:is=&quot;whichcomp&quot;&gt;&lt;/component&gt;//组件渲染的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;button v-on:click=&quot;choosencomp(&#39;a&#39;)&quot;&gt;a&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;button v-on:click=&quot;choosencomp(&#39;b&#39;)&quot;&gt;b&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;button v-on:click=&quot;choosencomp(&#39;c&#39;)&quot;&gt;c&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//做一个包含列表组件</span></span>
<span class="line"><span style="color:#A6ACCD;">//需要给组件创建props--&quot;todos&quot;,用于存放组件通过绑定prop --&quot;todo&quot;获取实例中的data数据&quot;todolists&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">var app=new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	components:{</span></span>
<span class="line"><span style="color:#A6ACCD;">		acomp:{</span></span>
<span class="line"><span style="color:#A6ACCD;">		   template:\`</span></span>
<span class="line"><span style="color:#A6ACCD;">				&lt;p&gt;这里是组件A&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			\`</span></span>
<span class="line"><span style="color:#A6ACCD;">			},</span></span>
<span class="line"><span style="color:#A6ACCD;">		bcomp:{</span></span>
<span class="line"><span style="color:#A6ACCD;">		   template:\`</span></span>
<span class="line"><span style="color:#A6ACCD;">				&lt;p&gt;这里是组件B&lt;/p&gt;		\`</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		ccomp:{</span></span>
<span class="line"><span style="color:#A6ACCD;">			template:\`</span></span>
<span class="line"><span style="color:#A6ACCD;">				&lt;p&gt;这里是组件C&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		\`</span></span>
<span class="line"><span style="color:#A6ACCD;">		}},</span></span>
<span class="line"><span style="color:#A6ACCD;">	data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">		whichcomp:&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	methods:{</span></span>
<span class="line"><span style="color:#A6ACCD;">	   choosencomp:function(x){</span></span>
<span class="line"><span style="color:#A6ACCD;">	   this.whichcomp=x+&quot;comp&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220523-1657022362072234.png" alt="image-20201121162128826" style="zoom:80%;"><h5 id="v-for" tabindex="-1">v-for <a class="header-anchor" href="#v-for" aria-hidden="true">#</a></h5><blockquote><p>循环</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        .active{</span></span>
<span class="line"><span style="color:#A6ACCD;">            color: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;li v-for=&quot;(item,index) in movies&quot; @click=&quot;active(index)&quot; :class={active:index==flag}&gt;{{item}}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script src=&quot;./js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let app=new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">            el:&quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                flag:-1,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span></span>
<span class="line"><span style="color:#A6ACCD;">                movies:[&#39;海王&#39;,&#39;海贼王&#39;,&#39;七龙珠&#39;,&#39;进击的巨人&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            methods:{</span></span>
<span class="line"><span style="color:#A6ACCD;">                active:function(index){</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.flag=index;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>组件的key属性，我们应该在使用v-for的时候使用:key = &#39;&#39;，但是不要使用index,可以使用item,性能会高很多</p><p>参考链接：<a href="https://cn.vuejs.org/v2/api/#key%EF%BC%8Chttps://blog.csdn.net/qq_41609404/article/details/84064064" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/api/#key，https://blog.csdn.net/qq_41609404/article/details/84064064</a></p><p>​ <a href="https://www.bilibili.com/video/BV15741177Eh?p=38&amp;spm_id_from=pageDriver" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV15741177Eh?p=38&amp;spm_id_from=pageDriver</a></p><h5 id="v-model" tabindex="-1">v-model <a class="header-anchor" href="#v-model" aria-hidden="true">#</a></h5><p>v-model可以实现输入框和值的双向绑定，利用@input=&quot;msg=$event.target.value&quot;监听输入并重新赋值和v-bind：value=“msg&quot;</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;input v-model=&quot;sth&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     //  等同于</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;input :value=&quot;sth&quot; @input=&quot;sth = $event.target.value&quot; /&gt; //自html5开始,input每次输入都会触发oninput事件，所以输入时input的内容会绑定到sth中，于是sth的值就被改变;</span></span>
<span class="line"><span style="color:#A6ACCD;">     //$event 指代当前触发的事件对象;</span></span>
<span class="line"><span style="color:#A6ACCD;">     //$event.target 指代当前触发的事件对象的dom;</span></span>
<span class="line"><span style="color:#A6ACCD;">     //$event.target.value 就是当前dom的value值;</span></span>
<span class="line"><span style="color:#A6ACCD;">     //在@input方法中，value =&gt; sth;</span></span>
<span class="line"><span style="color:#A6ACCD;">     //在:value中,sth =&gt; value;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>v-model的修饰符</p><ol><li><p>lazy</p><p>在默认情况下，<code>v-model</code> 在input事件中同步输入框的值与数据。</p><p>在添加了lazy之后，会把 <code>oninput</code> 事件改成 <code>onchange</code> 事件。</p><p>以下是核心代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input type=&quot;text&quot; v-model.lazy=&quot;msg&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p&gt;{{msg}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      msg: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-1657022361785150.webp" alt="img" style="zoom:67%;"><p>可以看到，input框输入的内容并不会实时更新到p标签里。因为这里使用了 <code>lazy</code> 修饰符，把 <code>oninput</code> 事件改成 <code>onchange</code> 事件。</p></li><li><p>number</p><p><code>number</code> 修饰符会把 <code>v-model</code> 的值转换成数值类型。</p><p>以下是核心代码</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model.number</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{msg}} : {{typeof(msg)}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;template/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      msg: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-1657022361785151.webp" alt="img" style="zoom:67%;"><p>需要注意的是，如果输入的第一个字是字符串，那<code>number</code>这个修饰符就不会生效。 输入的第一个只能是数字或者小数点或者是正负号。</p><p>从上图可以看到，如果一开始输入的是数字，后面跟着字符串。再<code>number</code>的转换后，会把后面的字符串删掉。</p></li><li><p>trim</p><p><code>trim</code>的作用是过滤用户输入时首尾的空格字符。</p><p>以下是核心代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input type=&quot;text&quot; v-model.trim=&quot;msg&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      msg: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    msg(newValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(newValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-1657022361785152.webp" alt="img" style="zoom:67%;"><p>这里用了 <code>watch</code> 来监听 <code>msg</code> ，每当 <code>msg</code> 的值有更新，就会在控制台输出更新后的值。</p><p>从控制台可以看到，我们在值的前后输入空格，通过 <code>trim</code> 转换后得到的新值首位的空格都是被清除了。</p></li></ol><h5 id="v-on" tabindex="-1">v-on <a class="header-anchor" href="#v-on" aria-hidden="true">#</a></h5><blockquote><p><code>v-on</code>就是<strong>用于绑定事件的</strong> 例如：有个按钮，当点击的时候执行一些操作</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button v-on:click=&quot;myclick&quot;&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上述代码中，<code>v-on:</code>后面的值是一个方法，可以写成<code>myclick()</code>，没有参数可以写成<code>myclick</code>。 另外这种事件对应的方法不是定义在<code>data</code>选项中，而是定义在<code>vue</code>实例的<code>methods</code>选项中，里面都是一个一个的<code>function</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el:&#39;.app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        myclick:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(111111);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	//这里的index变量不需要加this</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;li @click=&quot;active(index)&quot;&gt;按钮&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script src=&quot;./js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">      el: &quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        index: &#39;参数&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        active: function (index) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(index);   //参数</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>v-on</code>也可以绑定多个事件 多个事件可以单独多个v-on绑定</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button v-on:mouseenter=&#39;onenter&#39; v-on:mouseleave=&#39;leave&#39;&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>也可以使用一个<code>v-on</code>，里头用对象的形式书写，对象的键名就是事件名，对象的键值就是对应事件要执行的方法。多个事件之间通过<code>,</code>分开</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button v-on=&quot;{mouseenter:onenter,mouseleave:leave}&quot;&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>当然也可以混合使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button v-on=&quot;{mouseenter:onenter,mouseleave:leave}&quot; v-on:click=&quot;myclick&quot;&gt;click me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>例子：在绑定form表单中的提交事件时</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">submit</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onSubmit($event)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;!-- $event是vue里面的事件对象，vue能认识 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">提交</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el:&#39;.app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        onSubmit:function(e){</span></span>
<span class="line"><span style="color:#A6ACCD;">            e.preventDefault();</span></span>
<span class="line"><span style="color:#A6ACCD;">            //阻止浏览器的默认行为，因为在表单提交的时候，浏览器会默认发送一个get或者post请求到指定页面，刷新整个页面。</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&quot;onSubmited&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>注意： <code>$event</code>是<code>vue</code>里面的事件对象，<code>vue</code>能认识 在表单提交的时候，浏览器会默认发送一个<code>get</code>或者<code>post</code>请求到指定页面，刷新整个页面。阻止浏览器的默认行为，可以用事件对象<code>e.preventDefault()</code></p><p>但像上述form表单提交的这种浏览器默认事件，每次都要写<code>e.preventDefaul()</code>其实还是比较麻烦。<code>vue</code>中可以更好的解决，只要在事件的后面添加一个<code>prevent</code>修饰符即可，表示阻止默认事件</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;"> v-on:submit.prevent=&#39;onSubmit&#39;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;input </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">提交</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre></div><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">onSubmit</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onSubmited</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>绑定事件中，除了<code>prevent</code>修饰符，还有<code>stop</code>,表示停止冒泡事件</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> v-on:click.stop=&#39;onClick&#39;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/div&gt;  </span></span>
<span class="line"></span></code></pre></div><p>另外,当绑定的事件是<code>keyup</code>、<code>keypress</code>、<code>keydown</code>键盘事件时，当需要判断按下是回车时。 在以前我们需要判断事件对象的<code>keyCode</code>，虽然功能特别简单，但是每次去写还是特别麻烦。所以对应也有修饰符，如enter修饰符，表示按键是enter键</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> v-on:keydown.enter=&#39;mykeydownFn&#39;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/div&gt;  </span></span>
<span class="line"></span></code></pre></div><p>跟<code>v-bind</code>一样，v-on也非常常用，对应也有快捷方式： \`v-on:事件名 可以简写为 @事件名</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> @keydown.enter=&#39;mykeydownFn&#39;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/div&gt;  </span></span>
<span class="line"></span></code></pre></div><p><strong>v-on 修饰符</strong></p><ul><li>.stop - 调用 event.stopPropagation()，禁止事件冒泡。</li><li>.prevent - 调用 event.preventDefault()，阻止事件默认行为。</li><li>.capture - 添加事件侦听器时使用 capture 模式。</li><li>.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。</li><li>.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。</li><li><code>.native - 监听组件根元素的原生事件。</code></li><li>.once - 只触发一次回调。</li><li>.left - (2.2.0) 只当点击鼠标左键时触发。</li><li>.right - (2.2.0) 只当点击鼠标右键时触发。</li><li>.middle - (2.2.0) 只当点击鼠标中键时触发。</li><li>.passive - (2.3.0) 以 { passive: true } 模式添加侦听器</li><li>.native 如果你想在某个组件的根元素上绑定事件，直接使用 @click=&#39;&#39;function&#39; 是不生效的，我们可以添加.native修饰符 @click.native=&#39;&#39;function&#39;&#39;</li></ul><p>这些修饰符可以连着使用，比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@click.native.prevent=&#39;fun&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="数据响应式要注意的点" tabindex="-1">数据响应式要注意的点 <a class="header-anchor" href="#数据响应式要注意的点" aria-hidden="true">#</a></h4><p>假如data定义了一个对象，boy{name:&#39;laji&#39;},如果我们修改name为&#39;niubi&#39;,那么这个是可以实现响应式的，模板会对应更新的，</p><p>但是我想增加一个属性呢，比如增加一个属性age:11（this.boy.age=18这个方式增加),这不是响应式的，模板是不会随着更新的，如果想要实现响应式，有两种方法</p><ol><li>我们定义对象的时候可以先定义age:&#39;&#39;,这样怎么都是响应式的，但是这只能实现改，不能增加</li><li>要增加或者设置的话都可以使用这个方法this.$set(this.boy,&#39;age&#39;,18)——参数分别是对象，属性，值</li></ol><h4 id="组件的使用" tabindex="-1">组件的使用 <a class="header-anchor" href="#组件的使用" aria-hidden="true">#</a></h4><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210409100354-1657022362069228.png" alt="image-20210224172258326" style="zoom:50%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220527-1657022362074251.png" alt="image-20210224172905950" style="zoom:50%;"><h5 id="组件全局注册" tabindex="-1">组件全局注册 <a class="header-anchor" href="#组件全局注册" aria-hidden="true">#</a></h5><p><strong>组件全局注册基本使用一：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;cpn&gt;&lt;/cpn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;cpn&gt;&lt;/cpn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //1.构建组件构造器对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    const cpn = Vue.extend({</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: \`&lt;div&gt;  &lt;h2&gt;我是标题&lt;/h2&gt; &lt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                p &gt; 我是内容， 哈哈哈哈 &lt; /p&gt;&lt;/div &gt; \`</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    //2.注册组件</span></span>
<span class="line"><span style="color:#A6ACCD;">    Vue.component(&#39;cpn&#39;, cpn)</span></span>
<span class="line"><span style="color:#A6ACCD;">    const app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">      el: &quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        message: &quot;你好啊&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220531-1657022362073235.png" alt="image-20210224173053313"></p><p><strong>组件全局注册基本使用二：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     // 定义一个名为 button-counter 的新组件</span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.component(&#39;button-counter&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">       data: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return {</span></span>
<span class="line"><span style="color:#A6ACCD;">           count: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       template: &#39;&lt;button v-on:click=&quot;count++&quot;&gt;You clicked me {{ count }} times.&lt;/butto</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>组件全局注册基本使用三：</strong></p><blockquote><p>如果你恰好使用了 webpack (或在内部使用了 webpack 的 <a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noreferrer">Vue CLI 3+</a>)，那么就可以使用 <code>require.context</code> 只全局注册这些非常通用的基础组件。这里有一份可以让你在应用入口文件 (比如 <code>src/main.js</code>) 中全局导入基础组件的示例代码：</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     const requireComponent = require.context(</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 其组件目录的相对路径</span></span>
<span class="line"><span style="color:#A6ACCD;">       &#39;./&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 是否查询其子目录</span></span>
<span class="line"><span style="color:#A6ACCD;">       false,</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 匹配基础组件文件名的正则表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">       /Base[A-Z]\\w+\\.(vue|js)$/</span></span>
<span class="line"><span style="color:#A6ACCD;">     )</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(requireComponent.keys());</span></span>
<span class="line"><span style="color:#A6ACCD;">     requireComponent.keys().forEach(fileName =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 获取组件配置</span></span>
<span class="line"><span style="color:#A6ACCD;">       const componentConfig = requireComponent(fileName)</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 获取组件的 PascalCase 命名</span></span>
<span class="line"><span style="color:#A6ACCD;">       const componentName = fileName.replace(/^\\.\\//,&#39;&#39;).replace(/\\.vue/,&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(componentName);</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 全局注册组件</span></span>
<span class="line"><span style="color:#A6ACCD;">       Vue.component(</span></span>
<span class="line"><span style="color:#A6ACCD;">         componentName,</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 如果这个组件选项是通过 \`export default\` 导出的，</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 那么就会优先使用 \`.default\`，</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 否则回退到使用模块的根。</span></span>
<span class="line"><span style="color:#A6ACCD;">         componentConfig.default || componentConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">       )</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>参考资料：<a href="https://cn.vuejs.org/v2/guide/components-registration.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/guide/components-registration.html</a></p><h5 id="组件局部注册" tabindex="-1">组件局部注册 <a class="header-anchor" href="#组件局部注册" aria-hidden="true">#</a></h5><p><strong>组件局部注册基本使用一：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;cpn&gt;&lt;/cpn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;app2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;cpn&gt;&lt;/cpn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         //1.构建组件构造器对象</span></span>
<span class="line"><span style="color:#A6ACCD;">         const cpn = Vue.extend({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: \`&lt;div&gt;  &lt;h2&gt;我是标题&lt;/h2&gt; &lt;p&gt; 我是内容， 哈哈哈哈 &lt;/p&gt;&lt;/div &gt; \`</span></span>
<span class="line"><span style="color:#A6ACCD;">         const app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">           el: &quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             message: &quot;你好啊&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 局部注册,只能在注册的实例上使用</span></span>
<span class="line"><span style="color:#A6ACCD;">           components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             cpn: cpn</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">         const app2 = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">           el: &quot;#app2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             message: &quot;你好啊&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220534-1657022362073237.png" alt="image-20210224174635756" style="zoom:67%;"><p><strong>组件局部注册基本使用二：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;cpn&gt;&lt;/cpn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;button-counter&gt;&lt;/button-counter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 全局注册一个名为 button-counter 的新组件</span></span>
<span class="line"><span style="color:#A6ACCD;">         Vue.component(&#39;button-counter&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">           data: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">             return {</span></span>
<span class="line"><span style="color:#A6ACCD;">               count: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;&lt;button v-on:click=&quot;count++&quot;&gt;You clicked me {{ count }} times.&lt;/button&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">         const app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">           el: &quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             message: &quot;你好啊&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 局部注册</span></span>
<span class="line"><span style="color:#A6ACCD;">           components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             cpn: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               template: \`&lt;div&gt;  &lt;h2&gt;我是标题&lt;/h2&gt; &lt;p&gt; 我是内容， 哈哈哈哈 &lt;/p&gt;&lt;/div &gt; \`</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220537-1657022362073239.png" alt="image-20210224203444970"></p><p><strong>组件模板的分离写法（推荐使用）：</strong></p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220542-1657022362073236.png" alt="image-20210225015015539" style="zoom:50%;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;cpn&gt;&lt;/cpn&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;cpn2&gt;&lt;/cpn2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;!--1、script标签，注意：类型必须是text/template--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;!-- &lt;script type=&quot;text/template&quot; id=&#39;cpn&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;h2&gt;组件模板分离&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/script&gt; --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;!--2、template标签-&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;template id=&#39;cpn&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;h2&gt;组件模板分离&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         //注册一个全局组件</span></span>
<span class="line"><span style="color:#A6ACCD;">         Vue.component(&#39;cpn&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;#cpn&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">         const app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">           el: &quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             message: &quot;你好啊&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 局部注册</span></span>
<span class="line"><span style="color:#A6ACCD;">           components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             cpn2: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               template: &#39;#cpn&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/html&gt;	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220545-1657022362073238.png" alt="image-20210225014934504"></p><p><strong>父子组件：</strong></p><p>实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script src=&quot;../js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;!-- &lt;cpn&gt;&lt;/cpn&gt; --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;cpn2&gt;&lt;/cpn2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         //1.构建组件构造器对象</span></span>
<span class="line"><span style="color:#A6ACCD;">         const cpn = Vue.extend({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: \`&lt;div&gt;  &lt;h2&gt;我是标题&lt;/h2&gt; &lt;p&gt; 我是内容， 哈哈哈哈 &lt;/p&gt;&lt;/div &gt; \`</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">         const cpn2 = Vue.extend({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: \` &lt;div&gt; cpn2开始 &lt;cpn&gt;&lt;/cpn&gt;  &lt;h2&gt;我是标题2&lt;/h2&gt; &lt;p&gt; 我是内容，呵呵呵呵 &lt;br&gt;cpn2结束   &lt;/p&gt;&lt;/div &gt; \`,</span></span>
<span class="line"><span style="color:#A6ACCD;">           //继续使用组件</span></span>
<span class="line"><span style="color:#A6ACCD;">           components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             cpn: cpn</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">         const app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">           el: &quot;#app&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             message: &quot;你好啊&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 局部注册</span></span>
<span class="line"><span style="color:#A6ACCD;">           components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             cpn2: cpn2</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220549-1657022362073241.png" alt="image-20210224175523977"></p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220553-1657022362073240.png" alt="image-20210225152440433" style="zoom:67%;"><h4 id="vue实例和组件" tabindex="-1">Vue实例和组件 <a class="header-anchor" href="#vue实例和组件" aria-hidden="true">#</a></h4><blockquote><p>Vue实例是Vue应用的启动器，Vue组件是Vue实例的扩展。</p></blockquote><h5 id="_1-vue实例" tabindex="-1">1. Vue实例 <a class="header-anchor" href="#_1-vue实例" aria-hidden="true">#</a></h5><p>通过构造函数可以创建一个Vue的<strong>根实例</strong>。</p><p>SPA应用中，只会创建一个Vue根实例，应用都是通过这个根实例启动的。</p><p>实例化 Vue 时，需要传入一个选项对象，它可以包含数据（data），模板（template），挂载元素（el），方法（methods）与生命周期钩子函数（created，mounted...）等选项。下面是一个真实项目中定义的Vue实例：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 激活Vue调试工具vue-devtools</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">devtools </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    router</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// react-router</span></span>
<span class="line"><span style="color:#A6ACCD;">    store</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// vuex</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 需要渲染的DOM节点</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">h</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">h</span><span style="color:#A6ACCD;">(App) </span><span style="color:#676E95;font-style:italic;">// //h是createElement 的别名，创建/加载组件</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h5 id="_2-vue组件" tabindex="-1">2. Vue组件 <a class="header-anchor" href="#_2-vue组件" aria-hidden="true">#</a></h5><p>Vue组件是被扩展的Vue实例，同Vue实例类似，它也需要传入一个选项对象，包含数据，模板，生命周期钩子函数等等。</p><p>组件分为局部组件和全局组件。</p><h6 id="_1-局部组件" tabindex="-1">(1)局部组件 <a class="header-anchor" href="#_1-局部组件" aria-hidden="true">#</a></h6><p>局部组件只能在所定义的Vue实例中使用，格式如下：</p><div class="language-csharp"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//定义&lt;my-component&gt;组件</span></span>
<span class="line"><span style="color:#C792EA;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#89DDFF;">({</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// &lt;my-component&gt; 将只在父模板可用</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;div&gt;A custom component!&lt;/div&gt;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"></span></code></pre></div><h6 id="_2-全局组件" tabindex="-1">(2)全局组件 <a class="header-anchor" href="#_2-全局组件" aria-hidden="true">#</a></h6><p><strong>第一种方式：利用Vue提供的静态函数<code>component</code>注册：</strong></p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;div&gt;A custom component!&lt;/div&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//必须是用函数返回数据模型，这样才能让多个组件实例拥有自己的数据模型</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>第二种方式：单文件组件</strong></p><p>定义一个后缀为<code>.vue</code>的文件，利用webpack编译处理。</p><p>单文件组件的最大优点是，可以将组件相关的HTML，CSS，JS都定义在<code>.vue</code>文件内，默认支持CSS模块化（样式仅在该组件内有效），JavaScript模块化（CommonJs模块）。</p><p>参考官网例子：</p><img src="https:////upload-images.jianshu.io/upload_images/25750-d6d488ce3e040f4a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt="img" style="zoom:67%;"><p>注意，<code>&lt;style&gt;</code>有<code>scope</code>属性后，能够将标签内部的CSS选择器自动加上后缀，使其仅应用在此组件内。下图是编译后的组件内联样式：</p><p><img src="https:////upload-images.jianshu.io/upload_images/25750-2fc1686df9c8b5c6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/595/format/webp" alt="img"></p><p>vue文件组件也支持CSS预处理语言，比如scss或者less。如需使用scss，定义<code>lang</code>属性即可：</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> scoped&gt;</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>webpack.config中需要加载vue-loader来解析<code>.vue</code>文件（下面配置支持在vue组件中使用scss语法）。</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                loader</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                options</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    loaders</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                        </span><span style="color:#676E95;font-style:italic;">// Since sass-loader (weirdly) has SCSS as its default parse mode, we map</span></span>
<span class="line"><span style="color:#89DDFF;">                        </span><span style="color:#676E95;font-style:italic;">// the &quot;scss&quot; and &quot;sass&quot; values for the lang attribute to the right configs here.</span></span>
<span class="line"><span style="color:#89DDFF;">                        </span><span style="color:#676E95;font-style:italic;">// other preprocessors should work out of the box, no loader config like this necessary.</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-style-loader!css-loader!sass-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">sass</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-style-loader!css-loader!sass-loader?indentedSyntax</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#676E95;font-style:italic;">// other vue-loader options go here</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">......</span></span>
<span class="line"><span style="color:#F07178;">        ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div><h5 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-hidden="true">#</a></h5><p>建议采用单文件组件方式创建Vue项目，这样可以更好的和路由插件配合。 随着项目不断迭代，组件复杂度会随之增加，单文件组件有着更好的可读性和可扩展性，非常适合大中型项目。</p><p>详情</p><h4 id="父子组件通信" tabindex="-1">父子组件通信 <a class="header-anchor" href="#父子组件通信" aria-hidden="true">#</a></h4><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210421223218-1657022362076253.png" alt="image-20201027214048493" style="zoom:80%;"><h5 id="通过props向子组件传递数据-传" tabindex="-1">通过props向子组件传递数据（传） <a class="header-anchor" href="#通过props向子组件传递数据-传" aria-hidden="true">#</a></h5><p>父组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;child :sonmsg=&quot;parentmsg&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import child from &#39;./views/child&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;App&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    child,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      parentmsg: &#39;parentmsg&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>子组件（用法一）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;我是子组件&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;获取父组件的数据:{{ sonmsg }}&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;child&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">   // 不检测类型,全盘接受</span></span>
<span class="line"><span style="color:#A6ACCD;">   props: [&quot;sonmsg&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scpoed&gt;&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>子组件（用法二）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;我是子组件&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;获取父组件的数据:{{ sonmsg }}&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;child&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //定义方式一</span></span>
<span class="line"><span style="color:#A6ACCD;">    sonmsg: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">    //定义方式二</span></span>
<span class="line"><span style="color:#A6ACCD;">    // sonmsg: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   type: Number,</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   default: 10,//如果父组件没有传值那么默认就为10，</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果是数组或对象，默认值必须是一个函数来返回</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   propE: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 	type: Array,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 	default: () =&gt; []</span></span>
<span class="line"><span style="color:#A6ACCD;">    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 定义方式三:</span></span>
<span class="line"><span style="color:#A6ACCD;">    // sonmsg: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   type: Number,</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   required: true, //必须传，不然报错</span></span>
<span class="line"><span style="color:#A6ACCD;">    // },</span></span>
<span class="line"><span style="color:#A6ACCD;">    //定义方式四</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 自定义一个验证函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    // sonmsg: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   validator: (value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     return value &gt; 1000 //当函数返回 false 时，输出警告。该函数命名是规定叫validator</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scpoed&gt;&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>结果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220557-1657022362073242.png" alt="image-20201027220029318"></p><p><code>注意：经过测试发现，经过props传值后参数，在Props定义的该参数和父组件是一样的，由于对象是引用类型，所以当父组件把一个对象传给一个子组件的时候，实际上引用的是用一个对象，这时候子组件该值改变也会同时改变父组件该对象的值</code>（但实际并不应该这样做，这样违背了数据单向流原则）</p><p>实际上不符合上面规则也能正常显示，但是会报错</p><p>上面我们在vue的父子组件传值的时候，我们先需要的子组件上用props注册一些属性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             props:{{name}},{{age}} 或者 {{$props[&#39;name&#39;]}},{{$props[&#39;age&#39;]}}</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     export default{</span></span>
<span class="line"><span style="color:#A6ACCD;">         props: [&#39;name&#39;,&#39;age&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后父组件调用的时候当属性来传值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	&lt;child name=&quot;rick&quot; :age=&quot;18&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果我们给child传props没有注册的属性，我们就要用$attrs来取了</p><p>parent：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	&lt;child name=&quot;rick&quot; :age=&quot;18&quot; gender=&quot;male&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>child:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             props:{{name}},{{age}} 或者 {{$props[&#39;name&#39;]}},{{$props[&#39;age&#39;]}} </span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;br&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             attrs: {{$attrs[&#39;gender&#39;]}}  在$attrs里面只会有props没有注册的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     export default{</span></span>
<span class="line"><span style="color:#A6ACCD;">         props: [&#39;name&#39;,&#39;age&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>当然这个$attrs是vue2.4才推出的，为了简化父组件和孙组件的传值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	父组件 template（假设gender属性没有被props注册）:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	&lt;child1 gender=&quot;male&quot;&gt;&lt;/child1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,147),f=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	&lt;child2 v-bind=”$attrs”&gt;&lt;/child2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在child2里面，就可以直接用props注册gender,来直接获取来自“祖父组件”的gender值了（当然，不注册也是可以用$attrs来取值的）</p><h5 id="通过事件向父组件发送消息-传" tabindex="-1">通过事件向父组件发送消息（传） <a class="header-anchor" href="#通过事件向父组件发送消息-传" aria-hidden="true">#</a></h5><p>父组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;child @itemClick=&quot;parentfun&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import child from &#39;./views/child&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;App&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    child,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //不接收参数</span></span>
<span class="line"><span style="color:#A6ACCD;">    parentfun() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;子传父&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    //接收参数</span></span>
<span class="line"><span style="color:#A6ACCD;">    parentfun(item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;子传父&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style&gt;&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>子组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;btnClick(name)&quot;&gt;子组件按钮，发射事件&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;child&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;我是子组件中的name&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //不传参数</span></span>
<span class="line"><span style="color:#A6ACCD;">    btnClick() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //发射</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$emit(&#39;itemClick&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    //传参数</span></span>
<span class="line"><span style="color:#A6ACCD;">    btnClick(item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //发射</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$emit(&#39;itemClick&#39;, item)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scpoed&gt;&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="父组件访问子组件-访" tabindex="-1">父组件访问子组件（访） <a class="header-anchor" href="#父组件访问子组件-访" aria-hidden="true">#</a></h5><blockquote><p>父组件访问子组件：使用$children或$refs reference(引用)</p><p>this.$children或者$refs是一个数组类型，它包含子组件所有对象</p></blockquote><p><strong>$children</strong></p><p>直接输出this.$children:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.$children)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>输出</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220601-1657022362074249.png" alt="image-20201028001432768"></p><p>$this.children是所有子组件的一个数组，通过它可以访问它所有子组件的所有数据和方法等等，但是$this.children是通过数组下标来访问子组件数据，比如</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	console.log(this.$children[0].name)  //name是子组件的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(this.$children[0].btnClick)  //btnClick是子组件的方法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>可以直接访问子组件的数据和方法，不需要this.$children.data.name或者this.$children.methods.btnClick</p><p>但是this.$children有一个缺点，就是需要通过下标来访问子组件，假如有多个子组件，就得输出区查看对应子组件得下标值才能确定用哪个下标</p><p><strong>$refs</strong></p><p>直接输出this.$refs:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.$refs)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>输出</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220604-1657022362076252.png" alt="image-20201028002305031"></p><p>输出为一个空对象</p><p>$refs默认为一个空数组，但是在对应得子组件加上ref=&quot;自定义名字&quot;,就能访问该子组件了，并且可以通过该自定义名称来访问</p><p>当我在子组件child加上ref时</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210421223202-1657022362077255.png" alt="image-20201028002501028"></p><p>这时候再输出$refs</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220608-1657022362073243.png" alt="image-20201028002530448"></p><p>这时候就可以通过自定义名称访问子组件了，</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	console.log(this.$refs.one.name)  //name是子组件的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(this.$refs.one.btnClick)  //btnClick是子组件的方法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>最重要一点是,通过ref可以直接获取普通原宿的dom，这样就不需要document.get什么了，</code></p><p>例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;com-container&quot; ref=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;com-chart&quot; ref=&quot;seller_ref&quot;&gt;你好&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;Seller&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.$refs.test)      </span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.$refs.seller_ref.innerHTML)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>输出：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220612-1657022362073244.png" alt="image-20210106101430868"></p><h5 id="子组件访问父组件-访" tabindex="-1">子组件访问父组件（访） <a class="header-anchor" href="#子组件访问父组件-访" aria-hidden="true">#</a></h5><blockquote><p>子组件访问父组件：使用$parent</p></blockquote><p>子访问父由于只可能有一个父组件（定义在模板里面的不是子组件，只有调用了才算子组件，就算同一个模板在不同组件里面它们也是独立的，只可能有一个父组件），所以$parent非常简单</p><p>直接输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(this.$parent)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>输出：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220615-1657022362073245.png" alt="image-20201028003140417" style="zoom:67%;"><p>如果需要访问父组件的数据或者方法可以这样访问：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(this.$parent.name)  //name是父组件的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(this.$parent.btnClick)  //btnClick是父组件的方法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>虽然$children、$refs和$parent非常简单易用，但是会让组件之间不够独立，尽量减少使用</p><h5 id="this-root" tabindex="-1">this.$root <a class="header-anchor" href="#this-root" aria-hidden="true">#</a></h5><blockquote><p>当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。</p></blockquote><h4 id="provide-inject" tabindex="-1">provide/inject <a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a></h4><h4 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true">#</a></h4><blockquote><p><code>provide</code> 和 <code>inject</code> 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。</p><p>定义说明：这对选项是一起使用的。以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。</p><p>通俗的说就是：组件得引入层次过多，我们的子孙组件想要获取祖先组件得资源，那么怎么办呢，总不能一直取父级往上吧，而且这样代码结构容易混乱。这个就是这对选项要干的事情。</p><p>provide：是一个对象，或者是一个返回对象的函数。里面呢就包含要给子孙后代的东西，也就是属性和属性值。</p><p><code>inject</code> 选项应该是：</p><ul><li>一个字符串数组，或</li><li>一个对象，对象的 key 是本地的绑定名，value 是： <ul><li>在可用的注入内容中搜索用的 key (字符串或 Symbol)，或</li><li>一个对象，该对象的： <ul><li>from 属性是在可用的注入内容中搜索用的 key (字符串或 Symbol)----<code>非必须，如果没有的话则以对象键名为准</code></li><li>default 属性是降级情况下使用的 value</li></ul></li></ul></li></ul></blockquote><p><strong>父组件定义：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 父组件通过provide将自己的数据以对象形式传出去</span></span>
<span class="line"><span style="color:#A6ACCD;">       provide(){</span></span>
<span class="line"><span style="color:#A6ACCD;">         return {</span></span>
<span class="line"><span style="color:#A6ACCD;">           parentValue:&quot;我是父组件的值啊&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>子孙组件接受方式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // inject:[&quot;parentValue&quot;], // 使用一个注入的值作为数据入口：</span></span>
<span class="line"><span style="color:#A6ACCD;">       inject:{</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 使用一个默认值使其变成可选项</span></span>
<span class="line"><span style="color:#A6ACCD;">         parentValue: { // 键名，相当于别名</span></span>
<span class="line"><span style="color:#A6ACCD;">           from: &#39;parentValue&#39;, // 来源</span></span>
<span class="line"><span style="color:#A6ACCD;">           default: &#39;parentValue&#39; // 默认值</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>祖先组件中通过 <code>provider</code> 来提供变量，然后在子孙组件中通过 <code>inject</code> 来注入变量。<code>provide / inject API</code> 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。<code>provide</code> 和 <code>inject</code> 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。</p><p><strong>例子：</strong></p><p><em>父组件</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;child-a&gt;&lt;/child-a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;el-button @click=&#39;change&#39;&gt;change&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import ChildA from &#39;@/components/provide/ChildA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       provide: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         name: &#39;这是一个 provide 的数据&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       components: { ChildA },</span></span>
<span class="line"><span style="color:#A6ACCD;">       methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         change () {</span></span>
<span class="line"><span style="color:#A6ACCD;">           this._provided.name = &#39;修改一下看看子组件变不变&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     div{</span></span>
<span class="line"><span style="color:#A6ACCD;">       margin: 50px;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>子组件</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         来自父组件的内容： {{name}}</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       inject: [&#39;name&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>可以看到，在父组件中定义 <code>provide</code>，在子组件中使用 <code>inject</code> 就可以得到父组件 <code>provide</code> 中的值，但是我们点击修改父组件的值子组件的值并不会发生改变。</p><p>在官网文档中关于 provide/inject 有这么一个提示：</p><p>提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。<code>然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的</code>（<em>这句话的意思就是，如果直接传一个基本变量，就算是data、computed里面的也不会响应式，而是应该绑定一个响应式对象</em>）。</p><p>也就是说，Vue 不会对 provide 中的变量进行响应式处理。所以，要想 inject 接受的变量是响应式的，provide 提供的变量本身就需要是响应式的。</p><p>由于组件内部的各种状态就是可响应的，所以我们直接在根组件中将组件本身注入 provide，此时，我们可以在后代组件中任意访问根组件中的所有状态，根组件就成为了全局状态的容器，仔细想想，是不是很像 React 中的 context 呢？</p><h4 id="provide-inject-实现响应式" tabindex="-1"><code>provide/inject</code> 实现响应式 <a class="header-anchor" href="#provide-inject-实现响应式" aria-hidden="true">#</a></h4><p><code>provide</code> 祖先组件的实例，在子孙组件中注入依赖，这样就可以在子孙组件中直接修改祖先组件的实例的属性，不过这种方法有个缺点就是这个实例上挂载很多没有必要的东西比如 <code>props</code>，<code>methods</code> 使用2.6最新<code>API Vue.observable</code> 优化响应式 <code>provide</code>(推荐)</p><p>方法一例子：</p><p><strong>父组件</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      父组件</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-button</span><span style="color:#89DDFF;"> @click=&quot;change(&#39;red&#39;)&quot;&gt;改变Color&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    &lt;child-a&gt;&lt;/child-a&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C792EA;">import</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ChildA</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">from</span><span style="color:#89DDFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/components/provide/ChildA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  provide() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 方法一：提供祖先组件的实例</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  components: {</span><span style="color:#A6ACCD;"> ChildA </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">change</span><span style="color:#A6ACCD;">(color) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">color</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">color</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">color </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;style </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">div </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  margin: 50px;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码</span></span>
<span class="line"></span></code></pre></div><p><strong>子组件</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> :style=&quot;{ color: theme.color }&quot;&gt;子组件A来自父组件的内容&lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  inject: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//函数式组件取值不一样</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#C792EA;">复制代码</span></span>
<span class="line"></span></code></pre></div><p>方法二例子：</p><p><strong>父组件</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      父组件</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-button</span><span style="color:#89DDFF;"> @click=&quot;change(&#39;red&#39;)&quot;&gt;改变Color&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    &lt;child-a&gt;&lt;/child-a&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C792EA;">import</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ChildA</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">from</span><span style="color:#89DDFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/components/provide/ChildA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">import</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Vue</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">from</span><span style="color:#89DDFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  provide() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">theme </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">observable</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">theme</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  components: {</span><span style="color:#A6ACCD;"> ChildA </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">change</span><span style="color:#A6ACCD;">(color) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">color</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">theme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.theme.color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">theme</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;style </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">div </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  margin: 50px;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码</span></span>
<span class="line"></span></code></pre></div><p><strong>子组件</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> :style=&quot;{ color: theme.color }&quot;&gt;子组件A来自父组件的内容&lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  inject: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//函数式组件取值不一样</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><h4 id="事件总线-eventbus" tabindex="-1">事件总线（eventBus) <a class="header-anchor" href="#事件总线-eventbus" aria-hidden="true">#</a></h4><blockquote><p>有时候两个组件也需要通信（非父子关系）。当然Vue2.0提供了Vuex，但在简单的场景下，可以使用一个空的Vue实例作为中央事件总线。</p></blockquote><p>在main.js创建一个空的Vue实例，并且赋值给Vue.prototype.bus</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	Vue.prototype.bus = new Vue()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>现在，这个特定的总线使用两个方法 <code>$on</code> 和 <code>$emit</code> 。一个用于创建发出的事件，它就是<code>$emit</code> ；另一个用于订阅 <code>$on</code> ,可以在任意组件使用，但是尽量在平行组件使用，而且减少使用</p><p>在一个组件发送事件和数据：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	this.bus.$emit(&quot;eventName&quot;,data)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在另一个组件中接收事件和数据（一般放在created方法中)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	this.bus.$on(&quot;eventName&quot;,(data) =&gt; { console.log(data)})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>this的作用域要指向当前的vm实例，on监听事件一般放在组件生命周期函数中的created或者mounted中，注销bus需要在beforeDestroy中；</p><p>页面路由的时候，原有页面中的bus事件并没有被注销，依然隐藏在程序中，注册的总线事件要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情况可以在离开界面时注销bus。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">          beforeDestroy () {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.$bus.$off(&#39;eventName&#39;,this.todo);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>需要注意的是：<code>由于公车总线是利用新创建的Vue对象来进行传递事件的</code>，<code>所以emit和on中绑定的回调函数中的this并不指向原来的Vue对象，</code></p><p><code>所以我们需要提前定义一个变量来接收原来的this,比如在emit和on函数前写：let _this = this，这样我们就能拿到原来对象的数据了</code></p><h4 id="attrs和-listeners-常用来封装组件" tabindex="-1">$attrs和$listeners(常用来封装组件) <a class="header-anchor" href="#attrs和-listeners-常用来封装组件" aria-hidden="true">#</a></h4><blockquote><p><strong>$attrs</strong></p><p><em>包含了父作用域中不被props接收拿到的 (class 和 style 除外)。当一个组件没有声明任何 props 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind=”$attrs” 传入内部组件——在创建更高层次的组件时非常有用。</em></p><p>inheritAttrs：默认值为 true。</p><p>默认情况下父作用域的不被认作 props 的 attribute 绑定 (attribute bindings) 将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。通过设置 <code>inheritAttrs</code> 到 <code>false</code>，这些默认行为将会被去掉。而通过 (同样是 2.4 新增的) 实例 property <code>$attrs</code> 可以让这些 attribute 生效，且可以通过 <code>v-bind</code> 显性的绑定到非根元素上。</p><p>感觉还是挺晦涩难懂的，简单的说就是 <strong>inheritAttrs：true, $attrs继承除props之外的所有属性；inheritAttrs：false 只继承class属性。</strong></p><p><strong>$listeners</strong></p><p><em>包含了父作用域中的 (不含 .native 修饰器的) 所有v-on 事件。它可以通过 v-on=”$listeners” 传入内部组件——在创建更高层次的组件时非常有用</em></p></blockquote><h4 id="attrs" tabindex="-1">$attrs <a class="header-anchor" href="#attrs" aria-hidden="true">#</a></h4><ul><li>以下是<code>$attrs</code>的使用示例（父组件的列表行数据传递给孙子组件展示）</li></ul><ol><li>父组件（Father.vue），<strong>给子组件关联数据，子组件如果不用props接收，那么这些数据就作为普通的HTML特性应用在子组件的根元素上</strong></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;el-table :data=&#39;list&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;el-table-column</span></span>
<span class="line"><span style="color:#A6ACCD;">             prop=&quot;name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             label=&quot;姓名&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;el-table-column</span></span>
<span class="line"><span style="color:#A6ACCD;">             prop=&quot;study&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">             label=&quot;学习科目&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;el-table-column label=&quot;操作&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;template slot-scope=&quot;scope&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">               &lt;el-button @click=&#39;transmitClick(scope.row)&#39;&gt;传递&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;/el-table-column&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/el-table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;!-- 儿子组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;ChildView</span></span>
<span class="line"><span style="color:#A6ACCD;">           :is-show=&quot;isOpen&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           :row=&quot;row&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/ChildView&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import ChildView from &#39;./Child.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       components: { ChildView },</span></span>
<span class="line"><span style="color:#A6ACCD;">       data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return {</span></span>
<span class="line"><span style="color:#A6ACCD;">           isOpen: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">           row: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">           list: [</span></span>
<span class="line"><span style="color:#A6ACCD;">             { name: &#39;王丽&#39;, study: &#39;Java&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">             { name: &#39;李克&#39;, study: &#39;Python&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">           ]</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 传递事件</span></span>
<span class="line"><span style="color:#A6ACCD;">         transmitClick(row) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.isOpen = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.row = row</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2、儿子组件（Child.vue），中间层，作为父组件和孙子组件的传递中介，在儿子组件中给孙子组件添加<code>v-bind=&quot;$attrs&quot;</code>，这样孙子组件才能接收到数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div class=&#39;child-view&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;p&gt;儿子组件&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;GrandChild v-bind=&quot;$attrs&quot;&gt;&lt;/GrandChild&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import GrandChild from &#39;./GrandChild.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 继承所有父组件的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">       inheritAttrs: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">       components: { GrandChild },</span></span>
<span class="line"><span style="color:#A6ACCD;">       data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return {</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;style lang=&quot;stylus&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     .child-view {</span></span>
<span class="line"><span style="color:#A6ACCD;">       margin: 20px</span></span>
<span class="line"><span style="color:#A6ACCD;">       border: 2px solid red</span></span>
<span class="line"><span style="color:#A6ACCD;">       padding: 20px</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3.孙子组件（GrandChild.vue），<strong>在孙子组件中一定要使用props接收从父组件传递过来的数据</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div class=&#39;grand-child-view&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;p&gt;孙子组件&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;p&gt;传给孙子组件的数据：{{row.name}} {{row.name !== undefined? &#39;学习&#39; : &#39;&#39;}} {{row.study}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 不想继承所有父组件的内容,同时也不在组件根元素dom上显示属性</span></span>
<span class="line"><span style="color:#A6ACCD;">       inheritAttrs: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 在本组件中需要接收从父组件传递过来的数据，注意props里的参数名称不能改变，必须和父组件传递过来的是一样的</span></span>
<span class="line"><span style="color:#A6ACCD;">       props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         isShow: {</span></span>
<span class="line"><span style="color:#A6ACCD;">           type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">           dedault: false</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         row: {</span></span>
<span class="line"><span style="color:#A6ACCD;">           type: Object,</span></span>
<span class="line"><span style="color:#A6ACCD;">           dedault: () =&gt; { }</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;style lang=&quot;stylus&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     .grand-child-view {</span></span>
<span class="line"><span style="color:#A6ACCD;">       border: 2px solid green</span></span>
<span class="line"><span style="color:#A6ACCD;">       padding: 20px</span></span>
<span class="line"><span style="color:#A6ACCD;">       margin: 20px</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="listeners" tabindex="-1">$listeners <a class="header-anchor" href="#listeners" aria-hidden="true">#</a></h4><p>首先，$listeners是什么？</p><p>假设有父组件Parent和子组件Child</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// Parent</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">child</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-on:event-one</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">methodOne</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-on:event-two</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">methodTwo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><img src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" alt="点击并拖拽以移动"></p><p>那么你在使用Child时，传入的所有v-on事件都可以在$listeners对象中找到。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// Child</span></span>
<span class="line"><span style="color:#A6ACCD;">created () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(this.$listeners) // { &#39;event-one&#39;: f(), &#39;event-two&#39;: f() }</span></span>
<span class="line"><span style="color:#A6ACCD;">}![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)</span></span>
<span class="line"></span></code></pre></div><p>所以，官方示例中的computed -&gt; inputListeners就是把用户使用base-input组件时传入的v-on方法收集起来了。 然后通过v-on=&quot;inputListeners&quot;的形式，转发给了input框。</p><p>注：v-on=&quot;{a: f()}&quot;等价于v-on:a=&quot;f()&quot;</p><p>所以官网才会说base-input是一个透明包裹器，因为它确实只是转发了父组件传入的参数给input元素</p><h4 id="slot插槽" tabindex="-1">slot插槽 <a class="header-anchor" href="#slot插槽" aria-hidden="true">#</a></h4><h5 id="匿名插槽" tabindex="-1">匿名插槽 <a class="header-anchor" href="#匿名插槽" aria-hidden="true">#</a></h5><p>匿名插槽的基本使用，</p><p>使用例子：</p><p>子组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;child&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3&gt;这里是子组件&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;slot&gt;&lt;span&gt;默认值&lt;/span&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>父组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;father&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3&gt;这里是父组件&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div class=&quot;tmpl&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;span&gt;菜单1&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;span&gt;菜单2&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;span&gt;菜单3&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;span&gt;菜单4&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;span&gt;菜单5&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              &lt;span&gt;菜单6&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import Child from &#39;./Child.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">        components:{</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;child&#39;: Child</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在使用子组件时，只有当子组件里面定义了插槽才能往子组件里面填东西，而且都会插在匿名插槽里面</p><p><code>&lt;slot&gt;&lt;span&gt;默认值&lt;/span&gt;&lt;/slot&gt;，solt里面可以给定默认值，如果没有给他插入值，那么就显示默认值，如果有插入其他元素，那么默认值就会被覆盖</code></p><p>上面使用后输出结果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220619-1657022362073246.png" alt="image-20201028230741038"></p><h5 id="具名插槽" tabindex="-1">具名插槽 <a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a></h5><p>具名插槽的基本使用，</p><p>子组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;child&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot name=&quot;up&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;这里是子组件&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot name=&quot;down&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>父组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;father&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;这里是父组件&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div class=&quot;tmpl&quot; slot=&quot;up&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;span&gt;我是name为up的具名插槽&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div class=&quot;tmpl&quot; v-slot:&quot;down&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;span&gt;我是name为down的具名插槽&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div class=&quot;tmpl&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;span&gt;我是匿名插槽&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  import Child from &#39;./Child.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    components:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;child&#39;: Child</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,130),q=s("code",null,"具名插槽可以和匿名插槽混用",-1),E=l(`<p>上面例子的输出结果：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220622-1657022362074247.png" alt="image-20201028232146002" style="zoom:80%;"><h5 id="作用域插槽-vue3-0已废弃" tabindex="-1">作用域插槽(vue3.0已废弃) <a class="header-anchor" href="#作用域插槽-vue3-0已废弃" aria-hidden="true">#</a></h5><p>在接下来所有的 2.x 版本中 <code>slot</code> 和 <code>slot-scope</code> attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220625-1657022362074248.png" alt="image-20201028233714051" style="zoom:80%;"><p>由上面我们可以得知，作用域插槽的主要作用时能够让父组件自定义使用子组件里面的数据，比如下面例子</p><p>子组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;child&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;这里是子组件&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot :data=&quot;per&quot; name=&quot;up&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot :data=&quot;per&quot; &gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      per: [&quot;zhangsan&quot;, &quot;lisi&quot;, &quot;wanwu&quot;, &quot;zhaoliu&quot;, &quot;tianqi&quot;, &quot;xiaoba&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>子组件里面有数据data，通过:data=“per&quot;,我们可以把子组件中的一些数据传给父组件处理，而不是在子组件写死</p><p>父组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;father&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h3&gt;这里是父组件&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!--第一次使用：用flex展示数据--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div1 slot-scope=&quot;user1&quot; slot=&quot;up&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;tmpl&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;span v-for=&quot;item in user1.data&quot; :key=&quot;item&quot;&gt;{{ item }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!--第二次使用：用列表展示数据--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template slot-scope=&quot;user2&quot; slot=&quot;up&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;li v-for=&quot;item in user2.data&quot; :key=&quot;item&quot;&gt;{{ item }}&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!--第三次使用：直接显示数据--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;template slot-scope=&quot;user3&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {{ user3.data }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!--第四次使用：不使用其提供的数据--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      我就是模板</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Child from &quot;./Child.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    child: Child</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在要插入的内容中加上solt-scope=&#39;自定义名字&#39;就可以获取子组件中绑定给:data的数据了，并且赋值给自定义名字,</p><p>从上面可以看出，这时候就可以利用solt-scope获取子组件数据，从而实现自定义使用了</p><p>上面有些不是使用div而是使用template,这是因为旧版本要求必须是template,所以为了兼容性，有些时候会写template</p><p>注意：是通过自定义名字.data输出子组件数据</p><p>上面例子输出结果：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220629-1657022362074250.png" alt="image-20201029000428683" style="zoom:80%;"><h5 id="slots" tabindex="-1">$slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h5><blockquote><p>用来访问被<a href="https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9" target="_blank" rel="noreferrer">插槽分发</a>的内容。每个<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD" target="_blank" rel="noreferrer">具名插槽</a>有其相应的 property (例如：<code>v-slot:foo</code> 中的内容将会在 <code>vm.$slots.foo</code> 中被找到)。<code>default</code> property 包括了所有没有被包含在具名插槽中的节点，或 <code>v-slot:default</code> 的内容。</p><p>请注意插槽<strong>不是</strong>响应性的。如果你需要一个组件可以在被传入的数据发生变化时重渲染，我们建议改变策略，依赖诸如 <code>props</code> 或 <code>data</code> 等响应性实例选项。</p><p><strong>注意：</strong><code>v-slot:foo</code> 在 2.6 以上的版本才支持。对于之前的版本，你可以使用<a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95" target="_blank" rel="noreferrer">废弃了的语法</a>。</p><p>在使用<a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank" rel="noreferrer">渲染函数</a>书写一个组件时，访问 <code>vm.$slots</code> 最有帮助。</p></blockquote><ul><li><p><strong>示例</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;blog-post&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;template v-slot:header&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;About Me&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p&gt;Here&#39;s some page content, which will be included in vm.$slots.default, because it&#39;s not inside a named slot.&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;template v-slot:footer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p&gt;Copyright 2016 Evan You&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p&gt;If I have some content down here, it will also be included in vm.$slots.default.&lt;/p&gt;.</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/blog-post&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Vue.component(&#39;blog-post&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render: function (createElement) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var header = this.$slots.header</span></span>
<span class="line"><span style="color:#A6ACCD;">    var body   = this.$slots.default</span></span>
<span class="line"><span style="color:#A6ACCD;">    var footer = this.$slots.footer</span></span>
<span class="line"><span style="color:#A6ACCD;">    return createElement(&#39;div&#39;, [</span></span>
<span class="line"><span style="color:#A6ACCD;">      createElement(&#39;header&#39;, header),</span></span>
<span class="line"><span style="color:#A6ACCD;">      createElement(&#39;main&#39;, body),</span></span>
<span class="line"><span style="color:#A6ACCD;">      createElement(&#39;footer&#39;, footer)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgETNfjmbuSsB8Vp6.png" alt="image-20211001200351031"></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgJejbvApokOGLmwC.png" alt="image-20211001200452735"></p><h4 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-hidden="true">#</a></h4><blockquote><p>Vue实例有一个完整的生命周期，也就是说从开始创建、初始化数据、编译模板、挂在DOM、渲染-更新-渲染、卸载等一系列过程，我们成为Vue 实例的生命周期，钩子就是在某个阶段给你一个做某些处理的机会。</p></blockquote><h5 id="组件生命周期" tabindex="-1">组件生命周期 <a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imglifecycle.png" alt="lifecycle" style="zoom:67%;"><p><strong>beforeCreate( 创建前 )</strong></p><p>在实例初始化之后，数据观测和事件配置之前被调用，此时组件的选项对象还未创建，el 和 data ,methods并未初始化，因此无法访问methods， data， computed等上的方法和数据。</p><p><strong>created ( 创建后 ）</strong></p><p>实例已经创建完成之后被调用，在这一步，实例已完成以下配置：数据观测、属性和方法的运算，watch/event事件回调，完成了data 数据的初始化，el没有。 然而，挂在阶段还没有开始, $el属性目前不可见，这是一个常用的生命周期，因为你可以调用methods中的方法，改变data中的数据，并且修改可以通过vue的响应式绑定体现在页面上，，获取computed中的计算属性等等，通常我们可以在这里对实例进行预处理，也有一些童鞋喜欢在这里发ajax请求，值得注意的是，这个周期中是没有什么方法来对实例化过程进行拦截的，因此假如有某些数据必须获取才允许进入页面的话，并不适合在这个方法发请求，建议在组件路由钩子beforeRouteEnter中完成</p><p><strong>beforeMount</strong></p><p>挂在开始之前被调用，相关的render函数首次被调用（虚拟DOM），实例已完成以下的配置： 编译模板，把data里面的数据和模板生成html，完成了el和data 初始化，注意此时还没有挂在html到页面上。</p><p><strong>mounted</strong></p><p>挂在完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。</p><p><strong>beforeUpdate</strong></p><p>在数据更新之后被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程</p><p><strong>updated（更新后）</strong></p><p>虚拟dom重新被渲染挂载成功</p><p><strong>beforeDestroy（销毁前）</strong></p><p>在实例销毁之前调用，实例仍然完全可用，</p><ol><li>这一步还可以用this来获取实例，</li><li>一般在这一步做一些重置的操作，比如清除掉组件中的定时器 和 监听的dom事件</li></ol><p><strong>destroyed（销毁后）</strong></p><p>在实例销毁之后调用，调用后，所以的事件监听器会被移出，所有的子实例也会被销毁，该钩子在服务器端渲染期间不被调用</p><p>销毁后 （Dom元素存在，只是不再受vue控制）,卸载watcher，事件监听，子组件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p id=&quot;h3&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {{msg}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&#39;change&#39;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var vm = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">      el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        msg: &#39;我是msg&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        show() {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;执行了show方法&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        change() {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.msg = &#39;修改后的msg&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //这是第1个生命周期函数，表示实例完全被创建出来之前，data和methods中的数据都还没有初始化</span></span>
<span class="line"><span style="color:#A6ACCD;">      beforeCreate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;------beforeCreate------&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.msg);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.show()</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //这是第2个生命周期函数，data和methods中的数据已经初始化可以访问了</span></span>
<span class="line"><span style="color:#A6ACCD;">      created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;------created------&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.msg);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.show()</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //这是第3个生命周期函数，表示模板已经在内存中编辑成功了，但是尚未把模板渲染到页面中</span></span>
<span class="line"><span style="color:#A6ACCD;">      beforeMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;------beforeMount------&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(document.getElementById(&#39;app&#39;).innerHTML);</span></span>
<span class="line"><span style="color:#A6ACCD;">        //在beforeMount执行的时候，页面中的元素，还没有被真正替换过来</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //这是第4个生命周期函数，虚拟dom挂载完毕</span></span>
<span class="line"><span style="color:#A6ACCD;">      mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;------mounted------&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(document.getElementById(&#39;app&#39;).innerHTML);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //这是第5个生命周期函数，在数据更新之后被调用</span></span>
<span class="line"><span style="color:#A6ACCD;">      beforeUpdate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;------beforeUpdate------&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //这是第6个生命周期函数，虚拟dom重新被渲染挂载成功</span></span>
<span class="line"><span style="color:#A6ACCD;">      updated() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;------updated------&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      / 方法9：组件销毁前调用</span></span>
<span class="line"><span style="color:#A6ACCD;">      beforeDestory: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(777, this, arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // 方法10：主键销毁后调用</span></span>
<span class="line"><span style="color:#A6ACCD;">        destoryed: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(888, this, arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // 方法7：组件被激活时调用（用的少）</span></span>
<span class="line"><span style="color:#A6ACCD;">      // activated: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //     console.log(777, this, arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // 方法8：组件被移除时调用（用的少）</span></span>
<span class="line"><span style="color:#A6ACCD;">      // deactivated: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //     console.log(888, this, arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // },</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>结果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgVYoTyuexA4w2QtP.png" alt="img"></p><h5 id="父子组件的生命周期" tabindex="-1">父子组件的生命周期 <a class="header-anchor" href="#父子组件的生命周期" aria-hidden="true">#</a></h5><p><strong>加载渲染过程</strong> 父beforeCreate→父created→父beforeMount→子bereforeCreate→子created→子beforeMound→子mounted→父mounted</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img927816d581ea48a39402059ceb11e06f.png" alt="img"></p><p><strong>父组件更新过程</strong> 点击“父组件更新”按钮</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img6f072d42c3f74a4380ccfc7a0270e173.png" alt="img"></p><p>执行的生命周期钩子：父beforeUpdate→父updated</p><p><strong>子组件更新过程</strong> 点击‘子组件更新’按钮：</p><p>执行的生命周期钩子：子befforeUpdate→子updated</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img404d22356bdf4c5e9b3445e9d091a2ce.png" alt="img"></p><p><strong>父子组件更新过程</strong> 点击‘改变value’按钮</p><p>执行的生命周期钩子：父beforeUpdate→子beforeUpdate→子updated→父updated</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img6f072d42c3f74a4380ccfc7a0270e173.png" alt="img"></p><p><strong>销毁过程</strong></p><p>销毁是执行的生命周期钩子： 父beforeDestroy→子beforeDestroy→子destroyed→父destroyed</p><p><strong>代码示例</strong> Lifecycle.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Lifecycle</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;changeValue&quot;&gt;改变value&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;br /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;br /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;br /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;parent :value=&quot;value&quot;&gt;&lt;/parent&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Parent from &quot;./Parent.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;Lifecycle&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: { Parent },</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeValue() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.value++;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Parent.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p&gt;Parent-{{ parentData }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p&gt;Parent-value:{{ value }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;changeParentData&quot;&gt;父组件更新&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;br /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;br /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;br /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Child :value=&quot;value&quot;&gt;&lt;/Child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Child from &quot;./Child.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;Parent&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: [&quot;value&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: { Child },</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      parentData: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeParentData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.parentData++;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 创建vue实例前</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeCreate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;parent beforeCreate 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 创建vue实例后</span></span>
<span class="line"><span style="color:#A6ACCD;">  created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;parent created 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 挂载前</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;parent beforeMount 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 挂载后</span></span>
<span class="line"><span style="color:#A6ACCD;">  mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;parent mounted 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 更新前</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeUpdate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;parent beforeUpdate 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 更新后</span></span>
<span class="line"><span style="color:#A6ACCD;">  updated() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;parent updated 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 销毁前</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeDestroy() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;parent beforeDestroy 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 销毁后</span></span>
<span class="line"><span style="color:#A6ACCD;">  destroyed() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;parent destroyed 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>child.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p&gt;Child-{{ childData }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;p&gt;Child-value:{{ value }}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;changeChildData&quot;&gt;子组件更新&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;Child&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: [&quot;value&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      childData: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeChildData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.childData++;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 创建vue实例前</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeCreate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;Child beforeCreate 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 创建vue实例后</span></span>
<span class="line"><span style="color:#A6ACCD;">  created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;Child created 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 挂载前</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;Child beforeMount 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 挂载后</span></span>
<span class="line"><span style="color:#A6ACCD;">  mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;Child mounted 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 更新前</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeUpdate() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;Child beforeUpdate 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 更新后</span></span>
<span class="line"><span style="color:#A6ACCD;">  updated() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;Child updated 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 销毁前</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeDestroy() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;Child beforeDestroy 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 销毁后</span></span>
<span class="line"><span style="color:#A6ACCD;">  destroyed() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;Child destroyed 方法执行了&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="vue实例" tabindex="-1">Vue实例 <a class="header-anchor" href="#vue实例" aria-hidden="true">#</a></h4><blockquote><p>我们在一个工程化的Vue项目中，通过webpack的打包，我们一般以main.js为入口，然后进行对导入的各种文件进行处理，最终合成汇总成js文件插入到html中</p></blockquote><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgL23eb1HFhPd5xtQ.png" alt="image-20211016155330951" style="zoom:67%;"><p>这是我们的main.js一般写法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import store from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.config.productionTip = false</span></span>
<span class="line"><span style="color:#A6ACCD;">     new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">       router,</span></span>
<span class="line"><span style="color:#A6ACCD;">       store,</span></span>
<span class="line"><span style="color:#A6ACCD;">       render: h =&gt; h(App),</span></span>
<span class="line"><span style="color:#A6ACCD;">     }).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>接下来我们来分析下Vue是如何进行实例化的吧</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgEUVh4sMzouHetAb.png" alt="image-20211016170004005" style="zoom:67%;"><p>我们来输出Vue实例看下是什么：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import store from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     class test {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.config.productionTip = false</span></span>
<span class="line"><span style="color:#A6ACCD;">     const vm = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">       router,</span></span>
<span class="line"><span style="color:#A6ACCD;">       store,</span></span>
<span class="line"><span style="color:#A6ACCD;">       test,</span></span>
<span class="line"><span style="color:#A6ACCD;">       render: h =&gt; h(App),</span></span>
<span class="line"><span style="color:#A6ACCD;">     }).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(vm)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>结果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgjQnlA9zsC6DI2J8.png" alt="image-20211016172510954"></p><p>首先，我们来看下Vue实例化的过程是怎样的</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import store from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.config.productionTip = false</span></span>
<span class="line"><span style="color:#A6ACCD;">     // vue组件模板</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log({App});</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 把组件模板变成Vue实例，一个Vue实例就是一个组件，只不过main.js中实例为$root组件</span></span>
<span class="line"><span style="color:#A6ACCD;">     const component = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">       router,</span></span>
<span class="line"><span style="color:#A6ACCD;">       store,</span></span>
<span class="line"><span style="color:#A6ACCD;">       render: h =&gt; h(App),</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log({ component});</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 生成$el（真实DOM)并挂载到组件实例中</span></span>
<span class="line"><span style="color:#A6ACCD;">     const vm = component.$mount()</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log({vm});</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 挂载真实DOM</span></span>
<span class="line"><span style="color:#A6ACCD;">     document.querySelector(&#39;#app&#39;).appendChild(vm.$el)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>可以看出怎个过程就是<strong>组件模板-&gt;组件实例-&gt;真实DOM-&gt;挂载</strong></p><p>输出：</p><p>App:</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgmtnIBYgcXlhWeOJ.png" alt="image-20211016195603424"></p><p>component(此时还没有生成真实DOM,然后这个步骤会把组件的所有子组件都生成组件实例的）:</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgqhNB6iaTjxnp5s3.png" alt="image-20211016195637635"></p><p>vm:</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgeHryp5VwZx9aOIb.png" alt="image-20211016195801828"></p><p>当然以上步骤我们可以通过这个方式实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     console.log(App);</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;">     let app = Vue.extend(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(app);</span></span>
<span class="line"><span style="color:#A6ACCD;">     let component = new app()</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(component);</span></span>
<span class="line"><span style="color:#A6ACCD;">     let vm = component.$mount()</span></span>
<span class="line"><span style="color:#A6ACCD;">     document.getElementById(&#39;app&#39;).appendChild(vm.$el)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(component.$el);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>我们通过Vue.extend把返回了一个可以使用new 关键字实例化的类</p><p>在App.vue中的this指向App.vue实例</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img87WQvMHhrieLbNG.png" alt="image-20211016200250055"></p><h4 id="keep-alive" tabindex="-1">keep-alive <a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a></h4><h5 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h5><p><strong>问题描述（什么是keep-alive）</strong></p><ul><li>keep-alive顾名思义，保持活跃。保持谁活跃呢？</li><li>首先我们知道，因为vue就是组件化编程，一个.vue文件就是一个组件。就像万事万物一样，都有从出生到消亡的生命周期过程，vue的组件也是一样，也有自己的生命周期，比如create创建组件、mounted往组件上挂数据、update更新组件上挂的数据，destroy把组件实例销毁。</li><li>所以使用keep-alive就是保持组件活跃，不会被destroy销毁掉，就一直还活着，组件没有被销毁掉的话，组件上挂载的数据就还存在，所以状态就可以保留，所以，keep-alive就可以保持组件的状态。</li></ul><blockquote><p>http协议的请求头里面也有一个keep-alive，保持http通话，这样：Connection: keep-alive 功能虽然不一样，但是思想上是一样的即为~保持状态活跃</p></blockquote><p><strong>小demo，看一下keep-alive的使用效果</strong></p><p>demo分为上面的路由导航部分，下面的内容区部分。点击上面的路由导航，路由视图渲染对应的路由组件。效果图如下：</p><p><strong>未使用keep-alive的效果图</strong></p><p>!<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-5573ac77bf74dbc157428ed55d97c09b_b.webp" alt="动图"></p><p>对应代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// #App.vue中</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- 路由导航 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;nav&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;router-link to=&quot;/&quot;&gt;去home页面&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;router-link to=&quot;/about&quot;&gt;去about页面&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;router-link to=&quot;/detail&quot;&gt;去detail页面&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- 路由导航对应的内容区 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;main&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/main&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// home.vue中，放置一个复选框</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;el-checkbox v-model=&quot;checked&quot;&gt;备选项&lt;/el-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// about.vue中，放置一个输入框</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;el-input v-model=&quot;input&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// detail.vue中方式一个下拉框</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;el-select v-model=&quot;value&quot; placeholder=&quot;请选择&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;el-option</span></span>
<span class="line"><span style="color:#A6ACCD;">    v-for=&quot;item in options&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :key=&quot;item.value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :label=&quot;item.label&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    :value=&quot;item.value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/el-option&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/el-select&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>分析</p><ul><li>我们发现，当我们没有使用keep-alive组件包裹住router-view视图组件的时候，左边~我们在去home页面勾选了，在去about页面输入了，在去detail页面下拉选择了，离开这个路由页面，再回来时，我们发现我们之前做的操作，勾选、输入、下拉选择都不存在了，之前的状态都没了。原因很简单，当离开这个路由页面的时候，会触发这个路由页面对应组件上的destroy钩子方法，然后这个路由页面对应的组件就被销毁了，组件销毁了，组件上的挂载的数据也就啥也没有了。</li><li>与此同时，我们可以看到在右边的Vue.js devtools工具中，router-view视图层始终只是home、about、detail组件来回切换，组件来回切换，其实就是组件不断的创建、销毁的过程。加下来我们看看使用keep-alive的效果。</li></ul><p><strong>使用keep-alive的效果图</strong></p><p><img src="https://pic3.zhimg.com/v2-7c106a5d34b9483193e2a78715ceb5fa_b.webp" alt="动图"></p><p>对应代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- 路由导航 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;nav&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;router-link to=&quot;/&quot;&gt;去home页面&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;router-link to=&quot;/about&quot;&gt;去about页面&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;router-link to=&quot;/detail&quot;&gt;去detail页面&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- 路由导航对应的内容区 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;main&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;keep-alive&gt; &lt;!-- 使用keep-alive包了一层，就可以缓存啦 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/main&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>分析</p><ul><li>我们给视图层组件使用keep-alive包住以后，我们发现，我们勾选、输入、下拉选择的内容，在路由来回切换的时候，就不会丢失了，即使用keep-alive保存了之前的组件状态</li><li>与此同时，我们可以看到在右边的Vue.js devtools工具中，在router-view视图中对应的，切换过去的组件已经处于inactive状态，inactive英文意思是不活动的、未使用的，即已经缓存的，没有销毁的。所以组件上的我们所做的操作、组件的状态就被缓存了，所以我们勾选的、输入的、下拉选择的都还在。</li></ul><blockquote><p>Vue.js devtools挺好用，可以通过谷歌下载，vue开发中的很好的工具</p></blockquote><p>引出问题</p><p>看到这里我们发现，直接加上keep-alive的话，会把所有的router-view层级下的视图的组件都缓存了，不过有的时候，我们只想缓存部分，不想缓存所有的，那这怎么办呢？没关系，大佬们已考虑到了，已经提前为我们解决好了，就是keep-alive中的include、exclude属性</p><p>i<strong>nclude和exclude指定是否缓存某些组件</strong></p><p>include属性</p><p>include 包含的意思。值为字符串或正则表达式或数组。只有组件的名称与include的值相同的才会被缓存，即指定哪些被缓存，可以指定多个被缓存。这里以字符串为例，指定多个组件缓存，语法是用逗号隔开。如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 指定home组件和about组件被缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;keep-alive include=&quot;home,about&quot; &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/keep-alive&gt;	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>exclude属性</p><p>exclude相当于include的反义词，就是除了的意思，指定哪些组件不被缓存，用法和include类似，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 除了home组件和about组件别的都缓存，本例中就是只缓存detail组件</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;keep-alive exclude=&quot;home,about&quot; &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>以include=&quot;about,detail&quot;为例的效果图</strong></p><p>语法的意思是，只缓存about和detail，别的组件不缓存。我们看下图的vue工具，也可以看出来，缓存的组件，不处于对应展示的路由下，就会成为inactive状态。</p><p><img src="https://pic1.zhimg.com/v2-2ee52513e1130742c4399a239c5599ec_b.webp" alt="动图"></p><blockquote><p>keep-alive除了include和exclude属性之外，还有一个属性就是max属性，这个max一般情况用的不是太多，主要目的就是控制一下被缓存的组件的个数，后缓存的就会把先缓存的给挤掉线了，也是相当于缓存优化的一中策略了。毕竟适当缓存提高用户体验，缓存过渡，电脑变卡。</p></blockquote><p>include和exclude的属性值是组件的名称</p><p>include和exclude的属性值是组件的名称，也就是组件的name属性值，也就是如下的name属性值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;App&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>引出问题</p><p>我们知道组件中都有对应的逻辑js部分，而且组件要发请求获取数据的，一般情况下，我们都是在created或者mounted钩子中去发请求，向后端的大佬要数据的，关于使用keep-alive后的组件的钩子函数的问题，我们需要注意一下</p><p><strong>使用keep-alive的钩子函数执行顺序问题</strong></p><p>首先使用了keep-alive的组件以后，组件上就会自动加上了activated钩子和deactivated钩子。</p><ul><li>activated 当组件被激活（使用）的时候触发 可以简单理解为进入这个页面的时候触发</li><li>deactivated 当组件不被使用（inactive状态）的时候触发 可以简单理解为离开这个页面的时候触发</li></ul><p>进入组件和离开组件钩子执行顺序进入组件和离开组件钩子执行顺序</p><p>假设我们只缓存home组件，我们先看一下代码，再在钩子中打印出对应的顺序。就知道钩子执行的顺序了，自己动手印象深刻</p><p>代码如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;el-checkbox v-model=&quot;checked&quot;&gt;备选项&lt;/el-checkbox&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">name: &quot;home&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">data() { return { checked: false } },</span></span>
<span class="line"><span style="color:#A6ACCD;">created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;我是created钩子&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;我是mounted钩子&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">activated() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;我是activated钩子&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">deactivated() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;我是deactivated钩子&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">beforeDestroy() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&quot;我是beforeDestroy钩子&quot;);所以我们可以得出结论：</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 我们来回切换 看控制台打印顺序，得出结论如下</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>得出结论</p></li><li><ul><li>初始进入和离开 created ---&gt; mounted ---&gt; activated --&gt; deactivated</li><li>后续进入和离开 activated --&gt; deactivated</li></ul></li></ul><p>所以我们可以在activated 和deactivated钩子中去做一些逻辑处理，这两个钩子有点类似mounted和beforeDestroy钩子，但是还是不一样。毕竟使用keep-alive不会销毁组件</p><h5 id="keep-alive的应用场景举例" tabindex="-1">keep-alive的应用场景举例 <a class="header-anchor" href="#keep-alive的应用场景举例" aria-hidden="true">#</a></h5><ul><li>查看表格某条数据详情页，返回还是之前的状态，比如还是之前的筛选结果，还是之前的页数等</li><li>填写的表单的内容路由跳转返回还在，比如input框、下选择拉框、开关切换等用户输入了一大把东西，跳转再回来不能清空啊，不能让用户再写一遍啊，是吧老铁</li><li>反正就是保留之前的状态，具体应用场景其实也有很多，在此不赘述...</li></ul><h5 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-hidden="true">#</a></h5><p><strong>方式一：在App.vue中使用keep-alive标签，表示缓存所有页面</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  	&lt;keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	    &lt;tar-bar&gt;&lt;/tar-bar&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	    &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	      &lt;left-menu&gt;&lt;/left-menu&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	      &lt;Main /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>方式二：按条件缓存，使用include，exclude判断是否缓存</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 1. 将缓存 name 为 cc 的组件,如果有多个，可用逗号分</span></span>
<span class="line"><span style="color:#A6ACCD;">  	&lt;keep-alive include=&#39;cc&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;router-view/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2. 将不缓存 name 为 cc 的组件</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;keep-alive exclude=&#39;cc&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  	  &lt;router-view/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 3. 还可使用属性绑定动态判断</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;keep-alive :include=&#39;includedComs&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  	  &lt;router-view/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>方式三：在router目录下的index.js中，</strong></p><ul><li><p><strong>第一步：使用meta:{keepAlive = true },表示需要缓存</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> const routes = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path:&#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component:Home,</span></span>
<span class="line"><span style="color:#A6ACCD;">    meta:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        keepalive:true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path:&#39;/login&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component:Login</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">      path:&#39;/edit&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      component:Edit,</span></span>
<span class="line"><span style="color:#A6ACCD;">      meta:{</span></span>
<span class="line"><span style="color:#A6ACCD;">          istoken: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">      path:&#39;/home&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      component:Home,</span></span>
<span class="line"><span style="color:#A6ACCD;">      meta:{</span></span>
<span class="line"><span style="color:#A6ACCD;">          keepalive:true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p><strong>第二步：在App.vue中进行判断</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!--keep-alive 表示页面不会被销毁，即保持页面状态--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;router-view v-if=&quot;$route.meta.keepalive&quot;&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;router-view v-if=&quot;!$route.meta.keepalive&quot;&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h5 id="补充" tabindex="-1">补充 <a class="header-anchor" href="#补充" aria-hidden="true">#</a></h5><p>上述我们使用的是keep-alive包裹router-view的小案例来讲解的，实际上keep-alive一般情况下，要么包裹router-view，要么包裹动态组件component。代码写法实际上是一样的。包裹动态组件的用法如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">exclude</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">about</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">whichComponent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>keep-alive的include和exclude属性也支持v-bind的语法，所以也是很灵活的。</p></blockquote><h4 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-hidden="true">#</a></h4><blockquote><p>Vue中的 computed 属性称为 计算属性 。在模板内可以使用<a href="http://www.php.cn/wiki/81.html" target="_blank" rel="noreferrer">表达式</a>，而且模板内的表达式是非常的便利，但这种遍历是有一定的限制的，它们实际上是用于一些简单的运算。也就是说，如果在模板中放入太多的逻辑会让模板过重而且难以维护。</p></blockquote><p>实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;p id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;h1&gt;{{ message.split(&#39;&#39;).reverse().join(&#39;&#39;) }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在这个示例中，模板不再简单和清晰。你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转<a href="http://www.php.cn/wiki/57.html" target="_blank" rel="noreferrer">字符串</a>。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。</p><p>这就是对于任何复杂逻辑，你都应当使用 计算属性 的原因。接下来咱们一起来学习Vue中的计算属性。</p><p><code>计算属性可用于快速计算视图（ View ）中显示的属性。这些计算将被缓存，并且只在需要时更新</code>。</p><p>在Vue中有多种方法为视图设置值：</p><ul><li>使用指令直接将数据值绑定到视图</li><li>使用简单的表达式对内容进行简单的转换</li><li>使用过滤器对内容进行简单的转换</li></ul><p>除此之外，我们还可以使用计算属性根据数据模型中的值或一组值来计算显示值。</p><p><strong>计算属性</strong></p><blockquote><p>计算属性允许我们对指定的视图，复杂的值计算。这些值将绑定到依赖项值，只在需要时更新。</p></blockquote><p>例如，我们可以在数据模型中有一个 results 数组：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    results: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;English&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        marks: 70</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;Math&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        marks: 80</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;History&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        marks: 90</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>假设我们想要查看所有主题的总数。我们不能使用 filters 或 expressions 来完成这个任务。</p><ul><li>filters ：用于简单的数据格式，在应用程序的多个位置都需要它</li><li>expressions ：不允许使用流操作或其他复杂的逻辑。他们应该保持简单</li></ul><p>这个时候，计算属性就可以派上用场。我们可以向模型中添加一个计算值，如下：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  totalMarks: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let total = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    let me = this</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 0; i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">me</span><span style="color:#C792EA;">.results.length;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">i++)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">total</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">+</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">parseInt(me.results[i].marks)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">total</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">}</span></span>
<span class="line"><span style="color:#C792EA;">}</span></span>
<span class="line"></span></code></pre></div><p>totalMarks 计算属笥使用数组 resultes 的 marks 计算出总值。它只是循环遍历值并返回子总数。</p><p>然后，我们可以在视图中显示计算值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;p id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p v-for=&quot;subject in results&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;input v-model=&quot;subject.marks&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;span&gt;Marks for {{ subject.name }}: {{ subject.marks }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Total marks are: {{ totalMarks }}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>计算属性 vs 方法</strong></p><p>我们可以使用Vue中的 method 计算出学科的总分，最终得到的总数结果是相同的。</p>`,176),k=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let app = new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;"> el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"> data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">   results: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">     name: &#39;英语&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     marks: 70</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">     name: &#39;数学&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     marks: 80</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">     name: &#39;历史&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     marks: 90</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">   ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"> },</span></span>
<span class="line"><span style="color:#A6ACCD;"> methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  totalMarks: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">   let total = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">   let me = this</span></span>
<span class="line"><span style="color:#A6ACCD;">   for (let i = 0; i &lt; me.results.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    total += parseInt(me.results[i].marks)</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   return total</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>虽然这两种方式输出的结果是相同的，但是性能将遭受毁灭性的打击。使用这种方法， totalMarks() 方法在每次页面渲染时都被执行一次（例如，使用每一个change ）。</p><p>如果我们有一个计算属性，那么Vue会记住计算的属性所依赖的值（在我们这个示例中，那就是 results ）。通过这样做，<code>Vue只有在依赖变化时才可以计算值。否 则，将返回以前缓存的值。这也意味着 只要 results 还没有发生改变，多次访问 totalMarks 计算属性会立即返回之前的计算结果，而不必再次执行函数</code>。</p><p>上面两个示例也说明，<code>在Vue中 计算属性是基于它们的依赖进行缓存的，而方法是不会基于它们的依赖进行缓存的。从而使用计算属性要比方法性能更好。</code></p><p>这也同样意味着下面的计算属性将不再更新，VUE的computed和methods都是响应式的，但前提是在模板中使用它（也就是注册依赖，比如this.什么就是依赖），而且响应式是依据所收集的依赖发生变化而相应的，由于Date.now()在vue眼里是不变的，所以不会响应式改变：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      now: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">       return  Date.now()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>相比之下，每当触发重新渲染时，方法的调用方式将总是再次执行函数。因此，函数必须是一个纯函数。它不能有副作用。输出只能依赖于传递给函数的值。</p><p>那么我们为什么需要缓存？假设我们有一个性能开销比较大的的计算属性 A ，它需要遍历一个极大的数组和做大量的计算。然后我们可能有其他的计算属性依赖于 A 。如果没有缓存，我们将不可避免的多次执行 A 的 getter ！如果你不希望有缓存，请用方法来替代。</p><p><strong>计算属性的 setter</strong></p><p>计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">       fullName: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // getter</span></span>
<span class="line"><span style="color:#A6ACCD;">         get: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">           return this.firstName + &#39; &#39; + this.lastName</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         // setter</span></span>
<span class="line"><span style="color:#A6ACCD;">         set: function (newValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           var names = newValue.split(&#39; &#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.firstName = names[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.lastName = names[names.length - 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>你在输入框中输入一个 fullName ，然后点击 set 按钮，可以看到对应的效果。你现在再运行 app.fullName=&quot;Airen liao&quot; 时，计算属性的 setter 会被调用， app.firstName 和 app.lastName 也相应地会被更新。</p><h4 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h4><blockquote><p>可以监听特定数据变化</p></blockquote><p>虽然计算属性在大多数情况下更合适，但有时候也需要一个自定义的 watcher 。这是为什么Vue通过 watch 选项提供一个更通用的方法，来响应数据的变化。当你想要在数据变化响应时，执行异步操作或开销较大的操作，这是很有用的。</p><p>Vue确实提供了一种更通用的方式来观察和响应Vue实例上的数据变动： watch 属性 。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch 。然而，通常更好的想法是使用计算属性而不是命令式的 watch 回调。比如下面的示例：</p><p>基本用法：</p><p>当fullName值变化时，watch监听到并且执行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;FullName: {{fullName}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;FirstName: &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: &#39;#root&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    firstName: &#39;Dawei&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    lastName: &#39;Lou&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    fullName: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    firstName(newName, oldName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.fullName = newName + &#39; &#39; + this.lastName;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } </span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>watch中的函数名必须和要监听的数据变量名一致，参数中的newName和oldName分别为数据未改变前的值和改变后的值，当然，这两个参数名可以自定义，只需要注意第一个参数为旧值，第二个参数为新值就行</p><ul><li>handler方法和immediate属性 上面的例子是值变化时候，watch才执行，我们想让值最初时候watch就执行就用到了<code>handler</code>和<code>immediate</code>属性</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  firstName: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler(newName, oldName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.fullName = newName + &#39; &#39; + this.lastName;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法，如果设置了false，那么效果和上边例子一样</span></span>
<span class="line"><span style="color:#A6ACCD;">    immediate: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>deep属性（深度监听，常用语对象下面属性的改变）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;obj.a: {{obj.a}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p&gt;obj.a: &lt;input type=&quot;text&quot; v-model=&quot;obj.a&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  el: &#39;#root&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      a: 123</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      handler(newName, oldName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(&#39;obj.a changed&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      deep: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } </span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>我们在在输入框中输入数据视图改变obj.a的值时，我们发现是无效的。受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。</p><p>默认情况下 handler 只监听obj这个属性它的引用的变化，我们只有给obj赋值的时候它才会监听到，比如我们在 mounted事件钩子函数中对obj进行重新赋值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mounted: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a: &#39;456&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>那么我们需要监听obj里的属性a的值呢？这时候deep属性就派上用场了:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  obj: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    handler(newName, oldName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;obj.a changed&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    immediate: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    deep: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这样的方法对性能影响很大，修改obj里面任何一个属性都会触发这个监听器里的 handler。所以尽量少使用</p><p>实际开发中，watch会随着组件一并销毁。</p><h4 id="vue动画" tabindex="-1">Vue动画 <a class="header-anchor" href="#vue动画" aria-hidden="true">#</a></h4><h5 id="简介-1" tabindex="-1">简介 <a class="header-anchor" href="#简介-1" aria-hidden="true">#</a></h5><blockquote><p>Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具：</p><ul><li>在 CSS 过渡和动画中自动应用 class</li><li>可以配合使用第三方 CSS 动画库，如 Animate.css</li><li>在过渡钩子函数中使用 JavaScript 直接操作 DOM</li><li>可以配合使用第三方 JavaScript 动画库，如 Velocity.js</li></ul></blockquote><h5 id="单元素-组件的过渡" tabindex="-1"><a href="https://cn.vuejs.org/v2/guide/transitions.html#%E5%8D%95%E5%85%83%E7%B4%A0-%E7%BB%84%E4%BB%B6%E7%9A%84%E8%BF%87%E6%B8%A1" target="_blank" rel="noreferrer">单元素/组件的过渡</a> <a class="header-anchor" href="#单元素-组件的过渡" aria-hidden="true">#</a></h5><p>Vue 提供了 <code>transition</code> 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡</p><ul><li>条件渲染 (使用 <code>v-if</code>)</li><li>条件展示 (使用 <code>v-show</code>)</li><li>动态组件</li><li>组件根节点</li></ul><p>这里是一个典型的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;div id=&quot;demo&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;button v-on:click=&quot;show = !show&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             Toggle</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;transition name=&quot;fade&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;p v-show=&quot;show&quot;&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;/transition&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       name: &#39;App&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return {</span></span>
<span class="line"><span style="color:#A6ACCD;">           show: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* 这些类名都会加在transtion组件中的根元素上 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* 从元素显示和消失过程中这两个类名一直存在，最后一刻移除 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     .fade-enter-active,</span></span>
<span class="line"><span style="color:#A6ACCD;">     .fade-leave-active {</span></span>
<span class="line"><span style="color:#A6ACCD;">       transition: all 1s;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* 元素进入或消失过程中的第一帧存在,然后立刻消失 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     .fade-enter,</span></span>
<span class="line"><span style="color:#A6ACCD;">     .fade-leave-to {</span></span>
<span class="line"><span style="color:#A6ACCD;">       opacity: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">       background-color: red;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* 元素进入或消失过程中的第二帧存在,最后一刻移除 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     .fade-enter-to,</span></span>
<span class="line"><span style="color:#A6ACCD;">     .fade-leave {</span></span>
<span class="line"><span style="color:#A6ACCD;">       opacity: 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">       background-color: yellow;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img8edOzvyFaKlYoSh.gif" alt="chrome-capture"></p><p>当插入或删除包含在 <code>transition</code> 组件中的元素时，Vue 将会做以下处理：</p><ol><li>自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。</li><li>如果过渡组件提供了 <a href="https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-%E9%92%A9%E5%AD%90" target="_blank" rel="noreferrer">JavaScript 钩子函数</a>，这些钩子函数将在恰当的时机被调用。</li><li>如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 <code>nextTick</code> 概念不同)</li></ol><h5 id="过渡的类名" tabindex="-1"><a href="https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D" target="_blank" rel="noreferrer">过渡的类名</a> <a class="header-anchor" href="#过渡的类名" aria-hidden="true">#</a></h5><p>在进入/离开的过渡中，会有 6 个 class 切换。</p><ol><li><code>v-enter</code>：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。</li><li><code>v-enter-active</code>：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。</li><li><code>v-enter-to</code>：<strong>2.1.8 版及以上</strong>定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 <code>v-enter</code> 被移除)，在过渡/动画完成之后移除。</li><li><code>v-leave</code>：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。</li><li><code>v-leave-active</code>：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。</li><li><code>v-leave-to</code>：<strong>2.1.8 版及以上</strong>定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 <code>v-leave</code> 被删除)，在过渡/动画完成之后移除。</li></ol><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgjT4fzUmeMJdntZc.png" alt="Transition Diagram"></p><p>对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 <code>&lt;transition&gt;</code>，则 <code>v-</code> 是这些类名的默认前缀。</p><p>如果你使用了 <code>&lt;transition name=&quot;my-transition&quot;&gt;</code>，那么 <code>v-enter</code> 会替换为 <code>my-transition-enter</code>。</p><h5 id="css-过渡" tabindex="-1"><a href="https://cn.vuejs.org/v2/guide/transitions.html#CSS-%E8%BF%87%E6%B8%A1" target="_blank" rel="noreferrer">CSS 过渡</a> <a class="header-anchor" href="#css-过渡" aria-hidden="true">#</a></h5><p>常用的过渡都是使用 CSS 过渡。</p><p>下面是一个简单例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;example-1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;button @click=&quot;show = !show&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           Toggle render</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;transition name=&quot;slide-fade&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;p v-if=&quot;show&quot;&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/transition&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return {</span></span>
<span class="line"><span style="color:#A6ACCD;">           show: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* 这些类名都会加在transtion组件中的根元素上 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* 从元素显示和消失过程中这两个类名一直存在，最后一刻移除 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* 设置持续时间和动画函数 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     .slide-fade-enter-active {</span></span>
<span class="line"><span style="color:#A6ACCD;">       transition: all 0.3s ease;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     .slide-fade-leave-active {</span></span>
<span class="line"><span style="color:#A6ACCD;">       transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* 由于元素显示和消失的opacity和transform都有默认值,所以可以省略部分 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     .slide-fade-enter,</span></span>
<span class="line"><span style="color:#A6ACCD;">     .slide-fade-leave-to {</span></span>
<span class="line"><span style="color:#A6ACCD;">       transform: translateX(10px);</span></span>
<span class="line"><span style="color:#A6ACCD;">       opacity: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* 完整的写法应该是这样的,但这默认值就是这样,所以可以省略的, 其中的注释是为了兼容2.1.8以下版本 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     .slide-fade-enter-to,</span></span>
<span class="line"><span style="color:#A6ACCD;">     .slide-fade-leave /* .slide-fade-leave-active for below version 2.1.8 */{</span></span>
<span class="line"><span style="color:#A6ACCD;">       transform: translateX(0px);</span></span>
<span class="line"><span style="color:#A6ACCD;">       opacity: 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwVfDOypulQNS1vE.gif" alt="chrome-capture (1)"></p><h5 id="css-动画" tabindex="-1"><a href="https://cn.vuejs.org/v2/guide/transitions.html#CSS-%E5%8A%A8%E7%94%BB" target="_blank" rel="noreferrer">CSS 动画</a> <a class="header-anchor" href="#css-动画" aria-hidden="true">#</a></h5><p>CSS 动画用法同 CSS 过渡，区别是在动画中 <code>v-enter</code> 类名在节点插入 DOM 后不会立即删除，而是在 <code>animationend</code> 事件触发时删除。</p><p>示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;example-2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;button @click=&quot;show = !show&quot;&gt;Toggle show&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;transition name=&quot;bounce&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;p v-if=&quot;show&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</span></span>
<span class="line"><span style="color:#A6ACCD;">             facilisis enim libero, at lacinia diam fermentum id. Pellentesque</span></span>
<span class="line"><span style="color:#A6ACCD;">             habitant morbi tristique senectus et netus.</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/transition&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return {</span></span>
<span class="line"><span style="color:#A6ACCD;">           show: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     .bounce-enter-active {</span></span>
<span class="line"><span style="color:#A6ACCD;">       animation: bounce-in 0.5s;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     .bounce-leave-active {</span></span>
<span class="line"><span style="color:#A6ACCD;">       animation: bounce-in 0.5s reverse;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     @keyframes bounce-in {</span></span>
<span class="line"><span style="color:#A6ACCD;">       0% {</span></span>
<span class="line"><span style="color:#A6ACCD;">         transform: scale(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">       50% {</span></span>
<span class="line"><span style="color:#A6ACCD;">         transform: scale(1.5);</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">       100% {</span></span>
<span class="line"><span style="color:#A6ACCD;">         transform: scale(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imggzWSsbm93TPD4Fn.gif" alt="chrome-capture (2)"></p><h5 id="自定义过渡的类名" tabindex="-1"><a href="https://cn.vuejs.org/v2/guide/transitions.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D" target="_blank" rel="noreferrer">自定义过渡的类名</a> <a class="header-anchor" href="#自定义过渡的类名" aria-hidden="true">#</a></h5><p>我们可以通过以下 attribute 来自定义过渡类名：</p><ul><li><code>enter-class</code></li><li><code>enter-active-class</code></li><li><code>enter-to-class</code> (2.1.8+)</li><li><code>leave-class</code></li><li><code>leave-active-class</code></li><li><code>leave-to-class</code> (2.1.8+)</li></ul><p>他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 <a href="https://daneden.github.io/animate.css/" target="_blank" rel="noreferrer">Animate.css</a> 结合使用十分有用。</p><p>示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;link href=&quot;https://cdn.jsdelivr.net/npm/animate.css@3.5.1&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         .control-time {</span></span>
<span class="line"><span style="color:#A6ACCD;">           animation-duration: 2s;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div id=&quot;example-3&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;button @click=&quot;show = !show&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           Toggle render</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;transition name=&quot;custom-classes-transition&quot; enter-active-class=&quot;animated tada&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">           leave-active-class=&quot;animated bounceOutRight&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;!-- 这里加个类名用以控制动画时长 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">           &lt;p class=&quot;control-time&quot; v-if=&quot;show&quot;&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/transition&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">           el: &#39;#example-3&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             show: true</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgBgNlS6Qjec1qGit.gif" alt="chrome-capture (3)"></p><h5 id="在vue中使用animate-css" tabindex="-1">在vue中使用animate.css <a class="header-anchor" href="#在vue中使用animate-css" aria-hidden="true">#</a></h5><ol><li><p>安装依赖</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install animate.css --save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>全局导入animate样式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import &#39;animate.css&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;example-3&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;show = !show&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      Toggle render</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- duration这里仅仅是控制active类名的显示时长, 大部分时候并不能控制动画时长 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;transition</span></span>
<span class="line"><span style="color:#A6ACCD;">      name=&quot;custom-classes-transition&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      :duration=&quot;20000&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      enter-active-class=&quot;animate__animated animate__slideInDown&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      leave-active-class=&quot;animate__animated animate__slideOutLeft&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;!-- 这里加个类名用以控制动画时长 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;p class=&quot;control-time&quot; v-if=&quot;show&quot;&gt;hello&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/transition&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      show: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.control-time {</span></span>
<span class="line"><span style="color:#A6ACCD;">  animation-duration: 2s;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><p>效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgIUOf4CxFwqcLJVj.gif" alt="chrome-capture (4)"></p><p><code>注：animate.css更详细用法请访问：https://animate.style/#documentation</code></p><h5 id="同时使用过渡和动画" tabindex="-1"><a href="https://cn.vuejs.org/v2/guide/transitions.html#%E5%90%8C%E6%97%B6%E4%BD%BF%E7%94%A8%E8%BF%87%E6%B8%A1%E5%92%8C%E5%8A%A8%E7%94%BB" target="_blank" rel="noreferrer">同时使用过渡和动画</a> <a class="header-anchor" href="#同时使用过渡和动画" aria-hidden="true">#</a></h5><p>Vue 为了知道过渡的完成，必须设置相应的事件监听器。它可以是 <code>transitionend</code> 或 <code>animationend</code>，这取决于给元素应用的 CSS 规则。如果你使用其中任何一种，Vue 能自动识别类型并设置监听。</p><p>但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如 <code>animation</code> 很快的被触发并完成了，而 <code>transition</code> 效果还没结束。在这种情况中，你就需要使用 <code>type</code> attribute 并设置 <code>animation</code> 或 <code>transition</code> 来明确声明你需要 Vue 监听的类型。</p><h5 id="显性的过渡持续时间" tabindex="-1"><a href="https://cn.vuejs.org/v2/guide/transitions.html#%E6%98%BE%E6%80%A7%E7%9A%84%E8%BF%87%E6%B8%A1%E6%8C%81%E7%BB%AD%E6%97%B6%E9%97%B4" target="_blank" rel="noreferrer">显性的过渡持续时间</a> <a class="header-anchor" href="#显性的过渡持续时间" aria-hidden="true">#</a></h5><blockquote><p>2.2.0 新增</p></blockquote><p>在很多情况下，Vue 可以自动得出过渡效果的完成时机。默认情况下，Vue 会等待其在过渡效果的根元素的第一个 <code>transitionend</code> 或 <code>animationend</code> 事件。然而也可以不这样设定——比如，我们可以拥有一个精心编排的一系列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。</p><p>在这种情况下你可以用 <code>&lt;transition&gt;</code> 组件上的 <code>duration</code> prop 定制一个显性的过渡持续时间 (以毫秒计)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;transition :duration=&quot;1000&quot;&gt;...&lt;/transition&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>你也可以定制进入和移出的持续时间：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;transition :duration=&quot;{ enter: 500, leave: 800 }&quot;&gt;...&lt;/transition&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>注：这里仅仅是控制类名出现的时长，而不是动画时长</code></p><h4 id="vue-cli脚手架" tabindex="-1">vue-cli脚手架 <a class="header-anchor" href="#vue-cli脚手架" aria-hidden="true">#</a></h4><h5 id="环境变量和模式" tabindex="-1">环境变量和模式 <a class="header-anchor" href="#环境变量和模式" aria-hidden="true">#</a></h5><h5 id="简单实现" tabindex="-1">简单实现 <a class="header-anchor" href="#简单实现" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#!/usr/bin/env node</span></span>
<span class="line"><span style="color:#A6ACCD;">const program = require(&#39;commander&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const { promisify } = require(&#39;util&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const downloadRepo = promisify(require(&#39;download-git-repo&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">const { exec, spawn } = require(&#39;child_process&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// exec封装函数</span></span>
<span class="line"><span style="color:#A6ACCD;">const execCommand = (...args) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    exec(...args, (err, stdout, stderr) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject(err);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(stdout);</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// spawn执行函数</span></span>
<span class="line"><span style="color:#A6ACCD;">const spawnCommand = (...args) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const childProcess = spawn(...args);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // stdout是是输出流，由于我们是在子进程开启的任务，所以需要利用stdout中的pipe</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 向父进程的输出流输送子进程的输出</span></span>
<span class="line"><span style="color:#A6ACCD;">    childProcess.stdout.pipe(process.stdout);</span></span>
<span class="line"><span style="color:#A6ACCD;">    childProcess.stderr.pipe(process.stderr);</span></span>
<span class="line"><span style="color:#A6ACCD;">    childProcess.on(&#39;close&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义命令</span></span>
<span class="line"><span style="color:#A6ACCD;">program</span></span>
<span class="line"><span style="color:#A6ACCD;">  .version(&#39;1.0.0&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .command(&#39;create &lt;projectPath&gt;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  .description(&#39;这是简易版脚手架&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 第一个参数为create后面的参数，第二个参数为others，一个数组</span></span>
<span class="line"><span style="color:#A6ACCD;">  // action为该命令执行的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  .action(function (projectPath, others) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1,下载模板</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;--------------下载模板--------------&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    downloadRepo(&quot;direct:https://github.com/webpon/mall.git&quot;, projectPath, { clone: true }, async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //  2,执行终端命令npm install 安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;--------------安装依赖--------------&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 雖然exec更簡單,但是输出不能实时,而是得等执行完才会触发回调,所以还是采用spawn执行</span></span>
<span class="line"><span style="color:#A6ACCD;">      // process.platform属性是记录当前输入什么平台,如果是windows平台需要输入的是npm.cmd而不是npm ,其他平台则是npm</span></span>
<span class="line"><span style="color:#A6ACCD;">      const npm = process.platform === &#39;win32&#39; ? &#39;npm.cmd&#39; : &#39;npm&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      // await execCommand(&#39;npm install&#39;, { cwd: \`./\${projectPath}\` })</span></span>
<span class="line"><span style="color:#A6ACCD;">      await spawnCommand(npm, [&#39;install&#39;], { cwd: \`./\${projectPath}\` })</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;--------------运行项目--------------&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // await execCommand(&#39;npm run serve&#39;, { cwd: \`./\${projectPath}\` })</span></span>
<span class="line"><span style="color:#A6ACCD;">      await spawnCommand(npm, [&#39;run&#39;, &#39;serve&#39;], { cwd: \`./\${projectPath}\` })</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">// 解析终端指令</span></span>
<span class="line"><span style="color:#A6ACCD;">program.parse(process.argv);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="vue-router路由" tabindex="-1">vue-router路由 <a class="header-anchor" href="#vue-router路由" aria-hidden="true">#</a></h4><p>vue-router的基本使用</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220644-1657022362083285.png" alt="image-20201022001958526" style="zoom:67%;"><p>安装的话可以使用脚手架自动安装也可以手动安装</p><p>第一步导入路由对象：import VueRouter from &#39;vue-router&#39;</p><p>第二步创建路由实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import VueRouter from &#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import Main from &#39;../views/Main.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import CategoryEdit from &#39;views/CategoryEdit&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import CategoryList from &#39;views/CategoryList&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	Vue.use(VueRouter)</span></span>
<span class="line"><span style="color:#A6ACCD;">     const routes = [</span></span>
<span class="line"><span style="color:#A6ACCD;">       {</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         //路由重定向</span></span>
<span class="line"><span style="color:#A6ACCD;">         redirect: &#39;/main&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       {</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: &#39;/main&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         name: &#39;Main&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         component: Main,</span></span>
<span class="line"><span style="color:#A6ACCD;">         children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             path: &#39;/categories/create&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             component: CategoryEdit,</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             path: &#39;/categories/list&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             component: CategoryList,</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">         ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">     ]</span></span>
<span class="line"><span style="color:#A6ACCD;">     创建路由实例</span></span>
<span class="line"><span style="color:#A6ACCD;">     const router = new VueRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;history&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       base: p<wbr>rocess.env.BASE_URL,</span></span>
<span class="line"><span style="color:#A6ACCD;">       routes,</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default router</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第三步：在Vue实例挂载路由实例</p><p>在main.js中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import router from &#39;network/index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">      router,</span></span>
<span class="line"><span style="color:#A6ACCD;">      store,</span></span>
<span class="line"><span style="color:#A6ACCD;">      render: (h) =&gt; h(App),</span></span>
<span class="line"><span style="color:#A6ACCD;">     }).$mount(&#39;#app&#39;)			</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如何使用呢？</p><p>可以通过this.$router.push(&#39;/categories/list&#39;)和this.$router.replace(&#39;/categories/list&#39;),前者会保存历史，后者不会保存</p><p>通过上面方法可以改变url但不会重新刷新，然后$router会根据url重新渲染页面</p>`,102),x=s("p",null,[s("img",{src:"https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220648-1657022362077254.png",alt:"b"})],-1),w=s("p",null,"这时候的push和replace实际就是history的pushState和replaceState方法",-1),_=s("code",null,"<router-view>",-1),V=l(`<h5 id="vue的前进和后退" tabindex="-1">Vue<strong>的前进和后退</strong> <a class="header-anchor" href="#vue的前进和后退" aria-hidden="true">#</a></h5><blockquote><p>项目开发的时候，有时候可能需要我们来对页面后退和前进，这个东西跟浏览器自带的前进后退功能很像</p></blockquote><ol><li><p>后退功能</p><p>vue中的后退有好多种方法可以使用，<code>使用这些方法前要确认有之前的页面，否则后退就到了一个空页面！</code></p><p>可以通过history.length来获取历史记录的长度</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(history.length)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>1.window.history</code>对象中保存有页面访问的历史记录，在编写时可不使用 window 这个前缀。 加载历史列表中的前一个URL，这与在浏览器中点击前进按钮是相同的</p><p>window.history.back(); 后退1步</p><p>history.back(); 后退1步</p><p><code>2.this.$router.go(-1);</code> 通过vue的路由来进行后退1步</p><p>this.$router.go(-2); 后退2步</p><p>this.$router.back(); 后退1步</p></li><li><p>前进功能</p><p>可以通过history.forward(); 来加载历史列表中的下一个URL，这与在浏览器中点击前进按钮是相同的,<code>使用前需要确认有下一个URL，否则没反应~</code></p></li></ol><h5 id="动态路由" tabindex="-1">动态路由 <a class="header-anchor" href="#动态路由" aria-hidden="true">#</a></h5><h6 id="用法一" tabindex="-1">用法一 <a class="header-anchor" href="#用法一" aria-hidden="true">#</a></h6><p>定义</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220652-1657022362077258.png" alt="image-20201022005021089"></p><p>使用</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220655-1657022362077257.png" alt="image-20201022005410642"></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220658-1657022362083286.png" alt="image-20201022005341350"></p><p>跳转的页面展示：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220701-1657022362083287.png" alt="image-20201022005756913"></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220705-1657022362077256.png" alt="image-20201022005741368"></p><p><strong>this.$route.prams是获取当前活跃的页面的路由的参数，可以通过动态路由来传递数据</strong></p><p><strong>this.$route.path是获取当前活跃的页面的路由的参数</strong></p><h6 id="用法二" tabindex="-1">用法二 <a class="header-anchor" href="#用法二" aria-hidden="true">#</a></h6><p>在路由定义对象中加上props:true,然后在跳转的页面的props定义对应的变量就可以直接传值了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     routes:[</span></span>
<span class="line"><span style="color:#A6ACCD;">     path:’/about/:param’,</span></span>
<span class="line"><span style="color:#A6ACCD;">     component:About,</span></span>
<span class="line"><span style="color:#A6ACCD;">     props:true//这个表示用法一的$router.params会通过props传给下一个url中的props</span></span>
<span class="line"><span style="color:#A6ACCD;">     ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	//跳转的页面</span></span>
<span class="line"><span style="color:#A6ACCD;">	props:{</span></span>
<span class="line"><span style="color:#A6ACCD;">		param:&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="路由传递参数的另外两种方式" tabindex="-1">路由传递参数的另外两种方式 <a class="header-anchor" href="#路由传递参数的另外两种方式" aria-hidden="true">#</a></h5><p>我们经常使用this.$router.push(&quot;/home&quot;);,参数为字符串的方式来方式来跳转，这种方式很简单，但是不能传递参数</p><p>下面介绍的两种传递路由参数的方法都是以对象的方式进行传递</p><h6 id="命名路由" tabindex="-1">命名路由 <a class="header-anchor" href="#命名路由" aria-hidden="true">#</a></h6><blockquote><p>命名路由的前提就是在注册路由的地方需要给路由（跳转后的页面）命名如：</p></blockquote><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img70.png" alt="img" style="zoom:80%;"><p>命名路由传递参数需要使用params来传递，这里一定要注意使用params不是query。目标 页面接收传递参数时使用params</p><p><code>特别注意：命名路由这种方式传递的参数，如果在目标页面刷新是会出错的</code>，因为刷新后prams就为空了</p><p>使用方法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	this.$router.push({ name: &#39;news&#39;, params: { userId: 123 }})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	 &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;h1&gt;未跳转的页面&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;button @click=&quot;routerTo&quot;&gt;click here to news page&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       name: &#39;HelloWorld&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       methods:{</span></span>
<span class="line"><span style="color:#A6ACCD;">         routerTo(){</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.$router.push({ name: &#39;news&#39;, params: { userId: 123 }});</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>接收传递的参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         this is the news page.the transform param is {{this.$route.params.userId}}</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="查询参数传递-推荐使用" tabindex="-1">查询参数传递（推荐使用） <a class="header-anchor" href="#查询参数传递-推荐使用" aria-hidden="true">#</a></h6><blockquote><p>查询参数其实就是在路由地址后面带上参数和传统的url参数一致的，传递参数使用query而且必须配合path来传递参数而不能用name，目标页面接收传递的参数使用query。</p></blockquote><p><code>注意：和name配对的是params，和path配对的是query</code></p><p>使用方法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	this.$router.push({ path: &#39;/news&#39;, query: { userId: 123 }});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;h1&gt;跳转前&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;button @click=&quot;routerTo&quot;&gt;click here to news page&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       name: &#39;HelloWorld&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       methods:{</span></span>
<span class="line"><span style="color:#A6ACCD;">         routerTo(){</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.$router.push({ path: &#39;/news&#39;, query: { userId: 123 }});</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>接收参数如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    跳转后 {{this.$route.query.userId}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>最后总结：路由传递参数和传统传递参数是一样的，命名路由类似表单提交而查询就是url传递，在vue项目中基本上掌握了这两种传递参数就能应付大部分应用了，最后总结为以下两点： <em><strong>*1.命名路由搭配params，刷新页面参数会丢失 2.查询参数搭配query，刷新页面数据不会丢失 3.接受参数使用this.$router后面就是搭配路由的名称就能获取到参数的值*</strong></em></p><p>另外，二者还有点区别，直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示</p><h5 id="路由的懒加载" tabindex="-1">路由的懒加载 <a class="header-anchor" href="#路由的懒加载" aria-hidden="true">#</a></h5><blockquote><p>为什么需要懒加载？</p><p>像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时</p></blockquote><h6 id="实现方式" tabindex="-1">实现方式 <a class="header-anchor" href="#实现方式" aria-hidden="true">#</a></h6><blockquote><p>1、vue异步组件 2、es提案的import() 3、webpack的require,ensure()</p></blockquote><h6 id="vue异步组件技术-异步加载" tabindex="-1">vue异步组件技术 ==== 异步加载 <a class="header-anchor" href="#vue异步组件技术-异步加载" aria-hidden="true">#</a></h6><p>vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 . 但是,这种情况下一个组件生成一个js文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     /* vue异步组件技术 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     { path: &#39;/home&#39;, name: &#39;home&#39;, component: resolve =&gt; require([&#39;@/components/home&#39;],resolve) },</span></span>
<span class="line"><span style="color:#A6ACCD;">     { path: &#39;/index&#39;, name: &#39;Index&#39;, component: resolve =&gt; require([&#39;@/components/index&#39;],resolve) },</span></span>
<span class="line"><span style="color:#A6ACCD;">     { path: &#39;/about&#39;, name: &#39;about&#39;, component: resolve =&gt; require([&#39;@/components/about&#39;],resolve) }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>非懒加载：</p><p>懒加载</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3htMTAzNzc4Mjg0Mw==,size_16,color_FFFFFF,t_70.png" alt="img"></p><h6 id="组件懒加载方案二-路由懒加载-使用import" tabindex="-1">组件懒加载方案二 路由懒加载(使用import) <a class="header-anchor" href="#组件懒加载方案二-路由懒加载-使用import" aria-hidden="true">#</a></h6><p>这是基于ES11的新特性动态导入实现的，<code>推荐使用，简单</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const 组件名=() =&gt; import(&#39;组件路径&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 下面2行代码，没有指定webpackChunkName，每个组件打包成一个js文件。</span></span>
<span class="line"><span style="color:#A6ACCD;">     /* const Home = () =&gt; import(&#39;@/components/home&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     const Index = () =&gt; import(&#39;@/components/index&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     const About = () =&gt; import(&#39;@/components/about&#39;) */</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。</span></span>
<span class="line"><span style="color:#A6ACCD;">     把组件按组分块</span></span>
<span class="line"><span style="color:#A6ACCD;">     const Home = () =&gt; import(/* webpackChunkName: &#39;ImportFuncDemo&#39; */ &#39;@/components/home&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     const Index = () =&gt; import(/* webpackChunkName: &#39;ImportFuncDemo&#39; */ &#39;@/components/index&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     const About = () =&gt; import(/* webpackChunkName: &#39;ImportFuncDemo&#39; */ &#39;@/components/about&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     { path: &#39;/about&#39;, component: About }, { path: &#39;/index&#39;, component: Index }, { path: &#39;/home&#39;, component: Home }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="webpack提供的require-ensure" tabindex="-1">webpack提供的require.ensure() <a class="header-anchor" href="#webpack提供的require-ensure" aria-hidden="true">#</a></h6><p>vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     /* 组件懒加载方案三: webpack提供的require.ensure() */</span></span>
<span class="line"><span style="color:#A6ACCD;">     { path: &#39;/home&#39;, name: &#39;home&#39;, component: r =&gt; require.ensure([], () =&gt; r(require(&#39;@/components/home&#39;)), &#39;demo&#39;) },</span></span>
<span class="line"><span style="color:#A6ACCD;">     { path: &#39;/index&#39;, name: &#39;Index&#39;, component: r =&gt; require.ensure([], () =&gt; r(require(&#39;@/components/index&#39;)), &#39;demo&#39;) },</span></span>
<span class="line"><span style="color:#A6ACCD;">     { path: &#39;/about&#39;, name: &#39;about&#39;, component: r =&gt; require.ensure([], () =&gt; r(require(&#39;@/components/about&#39;)), &#39;demo-01&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">     // r就是resolve</span></span>
<span class="line"><span style="color:#A6ACCD;">     const list = r =&gt; require.ensure([], () =&gt; r(require(&#39;../components/list/list&#39;)), &#39;list&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 </span></span>
<span class="line"><span style="color:#A6ACCD;">     const router = new Router({</span></span>
<span class="line"><span style="color:#A6ACCD;">         routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">             {</span></span>
<span class="line"><span style="color:#A6ACCD;">                path: &#39;/list/blog&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                component: list,</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &#39;blog&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="给路由组件文件命名" tabindex="-1">给路由组件文件命名 <a class="header-anchor" href="#给路由组件文件命名" aria-hidden="true">#</a></h6><p>有时候我们想把个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 <a href="https://webpack.js.org/guides/code-splitting-require/#chunkname" target="_blank" rel="noreferrer">命名 chunk (opens new window)</a>，一个特殊的注释语法来提供 chunk name (需要 Webpack &gt; 2.4)。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#676E95;font-style:italic;">/* webpackChunkName: &quot;group-foo&quot; */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Foo.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Bar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#676E95;font-style:italic;">/* webpackChunkName: &quot;group-foo&quot; */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Bar.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Baz </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#676E95;font-style:italic;">/* webpackChunkName: &quot;group-foo&quot; */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Baz.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。</p><h5 id="嵌套路由-子路由" tabindex="-1">嵌套路由（子路由） <a class="header-anchor" href="#嵌套路由-子路由" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220708-1657022362077259.png" alt="image-20201022010256373" style="zoom:67%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220711-1657022362077260.png" alt="image-20201022010413211" style="zoom:67%;"><p>路由配置<code>（记住，子路由开头不能加/)</code></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220715-1657022362078261.png" alt="image-20201022010954082"></p><p>使用</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220720-1657022362078262.png" alt="image-20201022010828374"></p><p>子路由的view-router只能在父路由的组件中写router-view</p><h5 id="导航守卫" tabindex="-1">导航守卫 <a class="header-anchor" href="#导航守卫" aria-hidden="true">#</a></h5><ol><li><p>全局路由钩子</p><blockquote><p>是指路由实例上直接操作的钩子函数，他的特点是所有路由配置的组件都会触发，直白点就是触发路由就会触发这些钩子函数</p></blockquote><p><strong>beforeEach(to,from, next)</strong></p><p>这个钩子作用主要是用于登录验证，在路由跳转前触发</p><p>基本使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (to.path === &#39;/Login&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    next()</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let token = localStorage.token</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!token) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      next(&#39;/Login&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      next()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})//这些代码写在router文件夹中的index.js下</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>next(&#39;/Login&#39;)就是跳转到/Login路由，next()就是正常跳转，详情请看下面介绍</p><p><strong>beforeResolve(to,from, next)</strong></p><p>这个钩子和beforeEach类似，也是路由跳转前触发，即在 beforeEach 和 组件内beforeRouteEnter 之后，afterEach之前调用。</p><p><strong>afterEach(to,from)；</strong></p><p>和beforeEach相反，他是在路由跳转完成后触发，<code>参数包括to,from没有了next（参数会单独介绍）</code>,他发生在beforeEach和beforeResolve之后，beforeRouteEnter（组件内守卫，后讲）之前。</p></li><li><p>独享路由钩子</p><blockquote><p>指在单个路由配置的时候也可以设置的钩子函数，其位置就是下面示例中的位置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const router = new VueRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      path: &#39;/foo&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      component: Foo,</span></span>
<span class="line"><span style="color:#A6ACCD;">      beforeEnter: (to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>beforeEnter(to,from, next)；</strong></p><p>和beforeEach完全相同，在该组件渲染前执行，如果都设置则在beforeEach之后紧随执行，参数to、from、next</p></li><li><p>组件内路由钩子</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">指在组件内执行的钩子函数，类似于组件内的生命周期，相当于为配置路由的组件添加的生命周期钩子函数。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>beforeRouteEnter(to,from, next)</strong></p><p>路由进入之前调用，参数包括to，from，next。该钩子在全局守卫beforeEach和独享守卫beforeEnter之后，全局beforeResolve和全局afterEach之前调用，要注意的是该守卫内访问不到组件的实例，也就是this为undefined，也就是他在beforeCreate生命周期前触发。在这个钩子函数中，可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数，可以在这个守卫中请求服务端获取数据，当成功获取并能进入路由时，调用next并在回调中通过 vm访问组件实例进行赋值等操作，（next中函数的调用在mounted之后：为了确保能对组件实例的完整访问）。</p><p><strong>beforeRouteUpdate(to,from, next)</strong></p><p>在当前路由改变时，并且该组件被复用时调用，可以通过this访问实例。参数包括to，from，next。可能有的同学会疑问，what is 路由改变 or what is 组件被复用？</p><ul><li>对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，组件实例会被复用，该守卫会被调用</li><li>当前路由query变更时，该守卫会被调用</li></ul><p><strong>beforeRouteLeave(to,from, next)</strong></p><p>导航离开该组件的对应路由时调用，可以访问组件实例<code>this</code>，参数包括to，from，next。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default{</span></span>
<span class="line"><span style="color:#A6ACCD;">  data(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //...</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeRouteEnter (to, from, next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 在渲染该组件的对应路由被 confirm 前调用</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 不！能！获取组件实例 \`this\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 因为当守卫执行前，组件实例还没被创建</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeRouteUpdate (to, from, next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 在当前路由改变，但是该组件被复用时调用</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 可以访问组件实例 \`this\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeRouteLeave (to, from, next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 导航离开该组件的对应路由时调用</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 可以访问组件实例 \`this\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>导航守卫回调参数</strong></p><p>to：目标路由对象；</p><p>from：即将要离开的路由对象；</p><p>next：他是最重要的一个参数，他相当于佛珠的线，把一个一个珠子逐个串起来。以下注意点务必牢记：</p><p>1.但凡涉及到有next参数的钩子，必须调用next() 才能继续往下执行下一个钩子，否则路由跳转等会停止。</p><p>2.如果要中断当前的导航要调用next(false)。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到<code>from</code>路由对应的地址。（主要用于登录验证不通过的处理）</p><p>3.当然next可以这样使用，next(&#39;/&#39;) 或者 next({ path: &#39;/&#39; }): 跳转到一个不同的地址。意思是当前的导航被中断，然后进行一个新的导航。可传递的参数与<a href="https://link.zhihu.com/?target=https%3A//router.vuejs.org/zh/guide/essentials/navigation.html" target="_blank" rel="noreferrer">router.push</a>中选项一致。</p><p>4.在beforeRouteEnter钩子中next((vm)=&gt;{})内接收的回调函数参数为当前组件的实例vm，这个回调函数在生命周期mounted之后调用，也就是，他是所有导航守卫和生命周期函数最后执行的那个钩子。</p><p>5.next(error): (v2.4.0+) 如果传入 <code>next</code> 的参数是一个 <code>Error</code> 实例，则导航会被终止且该错误会被传递给 <code>router.onError()</code> 注册过的回调。</p><p>总结： <strong>当点击切换路由时：beforeRouterLeave--&gt;beforeEach--&gt;beforeEnter--&gt;beforeRouteEnter--&gt;beforeResolve--&gt;afterEach--&gt;beforeCreate--&gt;created--&gt;beforeMount--&gt;mounted--&gt;beforeRouteEnter的next的回调</strong>，</p><p><strong>当路由更新时：beforeRouteUpdate</strong></p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220723-1657022362078263.png" alt="image-20201107173715727" style="zoom:80%;"></li></ol><h5 id="前端路由如何实现的" tabindex="-1"><strong>前端路由如何实现的？</strong> <a class="header-anchor" href="#前端路由如何实现的" aria-hidden="true">#</a></h5><h6 id="简介-2" tabindex="-1">简介 <a class="header-anchor" href="#简介-2" aria-hidden="true">#</a></h6><ul><li>改变URL，但是页面不进行整体的刷新。</li><li><a href="https://router.vuejs.org/zh/guide/" target="_blank" rel="noreferrer">https://router.vuejs.org/zh/guide/</a></li></ul><p><strong>怎么实现呢？</strong></p><p>URL的hash</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220636-1657022362078265.png" alt="image-20201021235831243" style="zoom:67%;"><p>*location的完整api请访问：*<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Location" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Location</a></p><p>如果不想要很丑的 hash，我们可以用路由的 <strong>history 模式</strong>，这种模式充分利用 <code>history.pushState</code> API 来完成 URL 跳转而无须重新加载页面。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">VueRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">history</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>当你使用 history 模式时，URL 就像正常的 url，例如 <code>http://yoursite.com/user/id</code>，也好看！</p><p>不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 <code>http://oursite.com/user/id</code> 就会返回 404，这就不好看了。</p><p>所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 <code>index.html</code> 页面，这个页面就是你 app 依赖的页面。</p><p>*history的完整api请访问：*<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History_API" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/History_API</a></p><p>vue-router就是基于以上实现的</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220639-1657022362078264.png" alt="image-20201022001834640" style="zoom:50%;"><h6 id="具体实现" tabindex="-1">具体实现 <a class="header-anchor" href="#具体实现" aria-hidden="true">#</a></h6><p><strong>目录结构：</strong></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgW5JqaoXZOMmsUE2.png" alt="image-20210925153951246"></p><p><em>main.js:</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import App from &#39;./App&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import router from &#39;./zuo-router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.config.productionTip = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">       router,</span></span>
<span class="line"><span style="color:#A6ACCD;">       render:h=&gt;h(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>zuo-router/index.js:</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import Router from &#39;./zuo-router/zuo-router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import Detail from &#39;@/components/Detail&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import Home from &#39;@/components/Home&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.use(Router)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     export default new Router({</span></span>
<span class="line"><span style="color:#A6ACCD;">       routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         {</span></span>
<span class="line"><span style="color:#A6ACCD;">           path: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           redirect:&#39;/home&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         {</span></span>
<span class="line"><span style="color:#A6ACCD;">           path: &#39;/home&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           name: &#39;home&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           component: Home</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         {</span></span>
<span class="line"><span style="color:#A6ACCD;">           path: &#39;/detail&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           name: &#39;detail&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           component: Detail</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">       ]</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>zuo-router/zuo-router.js:</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	let Vue;</span></span>
<span class="line"><span style="color:#A6ACCD;">     class ZuoRouter {</span></span>
<span class="line"><span style="color:#A6ACCD;">       constructor(options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.$options = options</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 响应式数据</span></span>
<span class="line"><span style="color:#A6ACCD;">         Vue.util.defineReactive(this, &#39;currentPath&#39;, &#39;/&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 监听哈希路由变化</span></span>
<span class="line"><span style="color:#A6ACCD;">         window.addEventListener(&#39;hashchange&#39;, this.hashChange.bind(this))</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 监听页面刷新</span></span>
<span class="line"><span style="color:#A6ACCD;">         window.addEventListener(&#39;load&#39;, this.hashChange.bind(this))</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 初始化路由map</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.routeMap = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">         options.routes.forEach(route =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.routeMap[route.path] = route</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">       // location属于window对象，window.hash能拿到当前url中的#xxx哈希值</span></span>
<span class="line"><span style="color:#A6ACCD;">       hashChange () {</span></span>
<span class="line"><span style="color:#A6ACCD;">         this.currentPath = location.hash.slice(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     ZuoRouter.install = function (_Vue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       Vue = _Vue</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 混入</span></span>
<span class="line"><span style="color:#A6ACCD;">       Vue.mixin({</span></span>
<span class="line"><span style="color:#A6ACCD;">         beforeCreate () {</span></span>
<span class="line"><span style="color:#A6ACCD;">           if (this.$options.router) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">             Vue.prototype.$router = this.$options.router</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       })</span></span>
<span class="line"><span style="color:#A6ACCD;">       Vue.component(&#39;router-link&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">         props: [&#39;to&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">         render (h) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 参数1：标签名</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 参数2：属性名</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 参数3：子级</span></span>
<span class="line"><span style="color:#A6ACCD;">           return h(&#39;a&#39;, { attrs: { href: &#39;#&#39; + this.to }, class: &#39;router-link&#39; }, this.$slots.default)</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       })</span></span>
<span class="line"><span style="color:#A6ACCD;">       Vue.component(&#39;router-view&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">         render (h) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           let { routeMap, currentPath } = this.$router</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 获取当前路由的component</span></span>
<span class="line"><span style="color:#A6ACCD;">           let component = routeMap[currentPath].component</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 判断是否重定向</span></span>
<span class="line"><span style="color:#A6ACCD;">           if (!component) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             const redirect = routeMap[currentPath].redirect</span></span>
<span class="line"><span style="color:#A6ACCD;">             if (redirect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">               component = routeMap[redirect].component</span></span>
<span class="line"><span style="color:#A6ACCD;">             } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">               component = null</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 最简单实现方式</span></span>
<span class="line"><span style="color:#A6ACCD;">           // this.$router.$options.routes.forEach(route=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">           //     if(route.path === this.$router.currentPath){</span></span>
<span class="line"><span style="color:#A6ACCD;">           //         window.component = route.component</span></span>
<span class="line"><span style="color:#A6ACCD;">           //     }</span></span>
<span class="line"><span style="color:#A6ACCD;">           // })</span></span>
<span class="line"><span style="color:#A6ACCD;">           return h(component)</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       })</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     export default ZuoRouter</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>components/Detail.vue:</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             &lt;h2&gt;这是详情页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>components/Home.vue:</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;h2&gt;这是首页&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="vue-x" tabindex="-1">vue-x <a class="header-anchor" href="#vue-x" aria-hidden="true">#</a></h4><p><strong>vuex是做什么的？</strong></p><p>官方解释：Vuex是一个专为Vue.js应用程序开发的状态管理模式。</p><ul><li>它采用<code>集中式存储管理</code>应用的所有组件的状态(state),并以相应的规则保证状态以一种可预测的方式发生变化。</li><li>Vuex也集成到Vue的官方调试工具Devtools extension,提升了诸如零配置的time-travel调试、状态快照导入导出等高级调试功能。</li></ul><h5 id="state" tabindex="-1">State <a class="header-anchor" href="#state" aria-hidden="true">#</a></h5><h6 id="基本使用-不建议使用" tabindex="-1"><strong>基本使用</strong>（不建议使用） <a class="header-anchor" href="#基本使用-不建议使用" aria-hidden="true">#</a></h6><p>在store文件夹中的index.js添加以下代码（如果使用脚手架创建时选择了vuex功能那么以下代码会自动生成）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import Vuex from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     //使用插件</span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.use(Vuex)</span></span>
<span class="line"><span style="color:#A6ACCD;">     //创建并导出实例对象</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">         state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         //全局数据，可以在任何组件使用</span></span>
<span class="line"><span style="color:#A6ACCD;">             counter: 1000,</span></span>
<span class="line"><span style="color:#A6ACCD;">             studentarr:[]</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         actions: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">         modules: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在main.js中加上以上代码（如果使用脚手架创建时选择了vuex功能那么以下代码会自动生成）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import store from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.config.productionTip = false</span></span>
<span class="line"><span style="color:#A6ACCD;">     new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">       router,</span></span>
<span class="line"><span style="color:#A6ACCD;">       //挂载vuex实例对象</span></span>
<span class="line"><span style="color:#A6ACCD;">       store,</span></span>
<span class="line"><span style="color:#A6ACCD;">       render: h =&gt; h(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码配置完毕后就可以在任何组件使用vuex中的数据和方法了，在&lt;script&gt;中调用使用：this.$store.state.couter,</p><p>在&lt;template&gt;中调用使用：$store.state.counter</p><p>例如在home.vue中使用(直接修改state)：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220726-1657022362079266.png" alt="image-20201020205124071"></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220730-1657022362079267.png" alt="image-20201020205619263"></p><p>上面是最简单的使用方式，但是这样使用会导致Devtools无法监控数据的修改情况</p><p>为什么会这样呢？</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220733-1657022362079268.png" alt="image-20201020205936930"></p><p>因为这是vue官方规定的 ，但并不强制，而且这样这是可以的，并且devtools也能监控到数据变化，但是只能监控同步数据，</p><p>异步数据需要用action-&gt;mutations-&gt;state</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220741-1657022362079269.png" alt="image-20201020210332281"></p><h5 id="mutations" tabindex="-1">Mutations <a class="header-anchor" href="#mutations" aria-hidden="true">#</a></h5><p>处理同步函数</p><p>下面是第二种方法（通过mutations修改state）:</p><p>在store中的index.js的mutations加上方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import Vuex from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     //使用插件</span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.use(Vuex)</span></span>
<span class="line"><span style="color:#A6ACCD;">     //创建并导出实例对象</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">         state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         //全局数据，可以在任何组件使用</span></span>
<span class="line"><span style="color:#A6ACCD;">             counter: 1000,</span></span>
<span class="line"><span style="color:#A6ACCD;">             studentarr:[]</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         //定义mutations方法</span></span>
<span class="line"><span style="color:#A6ACCD;">         mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         	  increment(state){</span></span>
<span class="line"><span style="color:#A6ACCD;">         	  	state.counter++</span></span>
<span class="line"><span style="color:#A6ACCD;">         	  }</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         actions: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">         modules: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>调用mutations方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    add() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$store.commit(&#39;increment&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>那么mutations该怎么携带参数呢？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    istabbar(state, istrue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.main = istrue</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    addstudent(state, student) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.studentarr.push(student)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    addstudent() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let stu = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;卢本伟&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        mark: 89,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //这样只能携带一个参数，如果希望传入多个参数，可以以对象的形式传</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$store.commit(&#39;addstudent&#39;, stu)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h5><p>处理异步函数</p><p>第三种方法(action-&gt;mutations-&gt;state)：</p><p>Vuex要求我们Mutations中的方法必须是同步方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">      state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         main: &#39;true&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         studentarr: [{ name: &#39;卢本伟&#39;, mark: 78 }],</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         istabbar(state, istrue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           state.main = istrue</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         addstudent(state, student) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           state.studentarr.push(student)</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         //context上下文，这里的context相当于{state,commit,getter等等}</span></span>
<span class="line"><span style="color:#A6ACCD;">         aAddstudent(context, stu) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">             context.commit(&#39;addstudent&#39;, stu)</span></span>
<span class="line"><span style="color:#A6ACCD;">           }, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    addstudent() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let stu = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;卢本伟&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        mark: 89,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$store.dispatch(&#39;aAddstudent&#39;, stu)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果需要回调函数还可以这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //context上下文，这里的context相当于state</span></span>
<span class="line"><span style="color:#A6ACCD;">    aAddstudent(context, stu) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        context.commit(&#39;addstudent&#39;, stu.payload)</span></span>
<span class="line"><span style="color:#A6ACCD;">        stu.success()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  this.$store.dispatch(&#39;aAddstudent&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        payload: stu,</span></span>
<span class="line"><span style="color:#A6ACCD;">        success: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;执行完成&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>或者这样(<code>最推荐</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //context上下文，这里的context相当于state</span></span>
<span class="line"><span style="color:#A6ACCD;">    aAddstudent(context, stu) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     return new Promise((reslove,reject)={</span></span>
<span class="line"><span style="color:#A6ACCD;">		setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        context.commit(&#39;addstudent&#39;, stu.payload)</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve(&#39;执行完毕了&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">	}) </span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  this.$store.dispatch(&#39;aAddstudent&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        payload: stu,</span></span>
<span class="line"><span style="color:#A6ACCD;">        success: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;执行完成&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      }).then(res=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-hidden="true">#</a></h5><p>Module是模块的意思，为什么在Vuex中我们要使用模块呢？</p><ul><li>Vue使用单一状态树，那么也意味着很多状态都会交给Vuex来管理</li><li>当应用变得非常复杂时，store对象就有可能变得相当臃肿</li><li>为了解决这个问题，Vuex允许我们将store分割成模块（Module)，而每个模块拥有自己的state,mutation,action</li></ul><h6 id="vuex中模块的基础使用-不开启命名空间时" tabindex="-1">vuex中模块的基础使用（不开启命名空间时） <a class="header-anchor" href="#vuex中模块的基础使用-不开启命名空间时" aria-hidden="true">#</a></h6><blockquote><p>默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。这是什么意思？</p><p>简单来说就是模块内部的 action、mutation 定义可以重名，并且触发一次会把所有模块的对应重名的action、mutation 都触发，可以称为我们理想中的残血版本吧</p><p>不理解没事，接下来看例子：</p></blockquote><p>对于action、mutation 和 getter，是在模块中还是在全局中，它们的使用方式是相同的，只是state会有所不同，模块中的state会多一层模块名。</p><p>格式变成<code>store.state.模块名.状态名</code>（根state中的格式为<code>store.state.状态名</code>）。</p><h6 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-hidden="true">#</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├── store           # store目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── modules     # store中的所有模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── book.js    # book子模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── user.js  # user子模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── index.js        # store主文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>创建一个带模块的store</strong></p><p><strong>store主文件（store/index.js）内容</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vuex </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vuex</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> api </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/api/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 接口是虚构的，为了方便理解action的用法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./modules/user</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> book </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./modules/book</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(Vuex)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> store </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Vuex</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Store</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loading </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 是否加载中（接口请求时的全屏loading效果）</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">userInfo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 用户信息</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">loading</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">loading</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">userInfo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">userInfo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">userName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> stete</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">userInfo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">userName </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mutations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setLoading</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">loading</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">payload</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setUserInfo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">userInfo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">payload</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 获取用户信息</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">queryUserInfoAction</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">queryUserInfo</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setUserInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// user模块</span></span>
<span class="line"><span style="color:#A6ACCD;">    book</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// book数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> store</span></span>
<span class="line"></span></code></pre></div><p><strong>user模块（store/modules/user.js）内容</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> api </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/api/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userModule </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">themeObj</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 主题数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">themeData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        primaryColor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#fe3132</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 主颜色（如：按钮背景颜色）</span></span>
<span class="line"><span style="color:#F07178;">        subBgColor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#fff6f6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 次要颜色（如：浅色背景色）</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">themeObj</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 没有返回数据使用以上默认值，有则覆盖以上数据</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mutations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setTheme</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">这是user的mutation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">themeObj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">payload</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">queryThemeAction</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">queryTheme</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setTheme</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// user模块下的userTestAction</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">userTestAction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">这是book的action</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setTheme</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default userModule</span></span>
<span class="line"></span></code></pre></div><p><strong>book模块（store/modules/book.js）内容</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> api </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/api/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> productModule </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">proData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 产品数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">indexDataRes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 产品首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">proName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> stete</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">proData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">proName </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 产品名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">proDesc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> stete</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">proData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">proDesc </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 产品描述</span></span>
<span class="line"><span style="color:#A6ACCD;">    indexData: </span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> stete</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">indexDataRes </span><span style="color:#676E95;font-style:italic;">// 产品首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mutations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">setTheme</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">payload</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">这是user的mutation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">themeObj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">payload</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 获取产品数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">queryProDataAction</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">queryProData</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 页面数据</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setProData</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 获取首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">queryIndexDataAction</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">context</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">queryIndexData</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setIndexData</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// user模块下的userTestAction</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">userTestAction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">这是user的action</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">commit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setTheme</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> bookModule</span></span>
<span class="line"></span></code></pre></div><p><strong>在组件中使用</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { mapState, mapGetters, mapActions } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 【传统方式】获取store中的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 注意state和getter数据结构的区别（state需要带上模块名，而getter不需要模块名）</span></span>
<span class="line"><span style="color:#A6ACCD;">    /*</span></span>
<span class="line"><span style="color:#A6ACCD;">    proData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.store.state.book.proData</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    themeData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.store.getters[&#39;themeData&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    proName() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.store.getters[&#39;proName&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    proDesc() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.store.getters[&#39;proDesc&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    indexData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.store.getters[&#39;indexData&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 【辅助函数方式】获取store中的数据（代码更简洁）</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapState({ proData: state =&gt; state.proData }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapGetters([&#39;themeData&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapGetters([&#39;proName&#39;, &#39;proDesc&#39;, &#39;indexData&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	// 注意这里，这里可以解答上面的疑问，输出见下图</span></span>
<span class="line"><span style="color:#A6ACCD;">  	this.$store.commit(&#39;setTheme&#39;,&#39;test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     this.$store.dispatch(&#39;userTestAction&#39;,&#39;test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 【传统方式】获取异步数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    // this.store.dispatch(&#39;queryThemeAction&#39;) // 获取主题数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    // this.store.dispatch(&#39;queryProDataAction&#39;) // 获取产品数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    // this.store.dispatch(&#39;queryIndexDataAction&#39;) // 获取首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 【辅助函数方式】获取异步数据（需要先在methods中使用mapActions定义方法）</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.queryThemeAction() // 获取主题数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.queryProDataAction() // 获取产品数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.queryIndexDataAction() // 获取首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapActions([&#39;queryThemeAction&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapActions([&#39;queryProDataAction&#39;, queryIndexDataAction])</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面的注意点输出:<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img8CiMEfeLu9P1g6Z.png" alt="image-20211018004837232"></p><p>可以看出我们只执行了一次全局的commit和dispatch就把每个模块的mutation和action都触发了，所以现在就很好理解上面说的话了，模块内部的 action、mutation 定义可以重名，</p><p>并且触发一次会把所有模块的对应重名的action、mutation都触发，<code>但是getter不能重名，也是this.$store.getterName</code>就能获取了，是放在全局的</p><p>启用了命名空间的 getter 和 action 会收到局部化的 <code>getter</code>，<code>dispatch</code> 和 <code>commit</code>。换言之，你在使用模块内容（module assets）时不需要在同一模块内额外添加空间名前缀。更改 <code>namespaced</code> 属性后不需要修改模块内的代码。</p><p>当我们在上面的基础下，所有模块仅仅加多一行namespaced: true则可以变为我们理想中的满血版模块化Vuex</p><p>例子modules/user.js：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import api from &#39;@/api/index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const userModule = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    themeObj: {} // 主题数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    themeData: state =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        primaryColor: &#39;#fe3132&#39;, // 主颜色（如：按钮背景颜色）</span></span>
<span class="line"><span style="color:#A6ACCD;">        subBgColor: &#39;#fff6f6&#39;, // 次要颜色（如：浅色背景色）</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...state.themeObj // 没有返回数据使用以上默认值，有则覆盖以上数据</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTheme (state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;这是user的mutation&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.themeObj = payload</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    queryThemeAction({ commit }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return api.queryTheme().then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let data = (res &amp;&amp; res.result) || {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        commit(&#39;setTheme&#39;,  data)</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // user模块下的userTestAction</span></span>
<span class="line"><span style="color:#A6ACCD;">    userTestAction ({ commit }, params) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;这是book的action&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        commit(&#39;setTheme&#39;, params + 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 100);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default userModule</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>modules/book.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import api from &#39;@/api/index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const productModule = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proData: {}, // 产品数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    indexDataRes: {} // 产品首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proName: state =&gt; stete.proData.proName || &#39;&#39;, // 产品名称</span></span>
<span class="line"><span style="color:#A6ACCD;">    proDesc: state =&gt; stete.proData.proDesc || &#39;&#39; // 产品描述</span></span>
<span class="line"><span style="color:#A6ACCD;">    indexData: state =&gt; stete.indexDataRes // 产品首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTheme (state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;这是user的mutation&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.themeObj = payload</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 获取产品数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    queryProDataAction(context) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return api.queryProData().then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 页面数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        let data = (res &amp;&amp; res.result) || {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        context.commit(&#39;setProData&#39;,  data)</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 获取首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    queryIndexDataAction(context) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return api.queryIndexData().then(res =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let data = (res &amp;&amp; res.result) || {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        context.commit(&#39;setIndexData&#39;,  data)</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // user模块下的userTestAction</span></span>
<span class="line"><span style="color:#A6ACCD;">    userTestAction ({ commit }, params) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;这是user的action&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        commit(&#39;setTheme&#39;, params + 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 100);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default bookModule</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>接下所使用模块内的state、getter、mutation、action都需要加上模块名</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { mapState, mapGetters, mapActions } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 【传统方式】获取store中的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    /*</span></span>
<span class="line"><span style="color:#A6ACCD;">    proData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.store.state.book.proData</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    themeData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.store.getters[&#39;user/themeData&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    proName() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.store.getters[&#39;book/proName&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    proDesc() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.store.getters[&#39;book/proDesc&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    indexData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.store.getters[&#39;book/indexData&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 【辅助函数方式一】获取store中的数据（代码更简洁）</span></span>
<span class="line"><span style="color:#A6ACCD;">    /*</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapState({ proData: state =&gt; state.productModule.proData }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapGetters([&#39;user/themeData&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapGetters([&#39;user/proName&#39;, book/proDesc&#39;, &#39;user/indexData&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 【辅助函数方式二】获取store中的数据（代码最简洁）</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 将模块的空间名称字符串作为第一个参数传递给辅助函数，这样所有绑定都会自动将该模块作为上下文。</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapState(&#39;book&#39;, { proData: state =&gt; state.proData }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapGetters(&#39;user&#39;, [&#39;themeData&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapGetters(&#39;book&#39;, [&#39;proName&#39;, &#39;proDesc&#39;, &#39;indexData&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	// 注意这里，这里可以解答上面的疑问，输出见下图</span></span>
<span class="line"><span style="color:#A6ACCD;">     this.$store.commit(&#39;user/setTheme&#39;,&#39;test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     this.$store.dispatch(&#39;user/userTestAction&#39;,&#39;test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 【传统方式】获取异步数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    // this.store.dispatch(&#39;user/queryThemeAction&#39;) // 获取主题数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    // this.store.dispatch(&#39;book/queryProDataAction&#39;) // 获取产品数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    // this.store.dispatch(&#39;book/queryIndexDataAction&#39;) // 获取首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 【辅助函数方式】获取异步数据（需要先在methods中使用mapActions定义方法）</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.queryThemeAction() // 获取主题数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.queryProDataAction() // 获取产品数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.queryIndexDataAction() // 获取首页数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapActions(&#39;user&#39;, [&#39;queryThemeAction&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapActions(&#39;book&#39;, [&#39;queryProDataAction&#39;, queryIndexDataAction])</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="vue中使用axios" tabindex="-1">vue中使用axios <a class="header-anchor" href="#vue中使用axios" aria-hidden="true">#</a></h4><h5 id="基本使用-1" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用-1" aria-hidden="true">#</a></h5><p>axios功能特点：</p><ul><li>在浏览器中发送XMLHttpRequests请求</li><li>在node.js中发送http请求</li><li>支持Promise API</li><li>拦截请求和响应</li><li>转换请求和响应数据</li></ul><ol><li><p>安装axios(vue是不自带axios的，需要手动安装)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install axios --save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>引入并配置axios</p><p>第一步：创建network文件夹（非必须，个人习惯），在network文件夹下创建request.js</p><p>request.js输入以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const http = axios.create({</span></span>
<span class="line"><span style="color:#A6ACCD;">  baseURL: &#39;http://localhost:3000/api/admin&#39;,//这个按实际情况填写</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export default http</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第二部：在main.js中引入并配置axios(<code>推荐使用</code>)</p><p>如果想获取baseUrl,需要$http.defaults.baseUrl</p><p>输入以下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import http from &#39;network/index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.prototype.$http = http//这样可以让axios在所有组件中使用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>基本使用</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220745-1657022362082271.png" alt="image-20201020232129637" style="zoom:80%;"><p><strong>1、axios(config)</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">//如果method不写，默认是get请求</span></span>
<span class="line"><span style="color:#A6ACCD;">  axios({</span></span>
<span class="line"><span style="color:#A6ACCD;">  	 method:&#39;get&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      url: &#39;http://152.136.185.210:8000/home/data?type=sell&amp;page=3&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"> }).then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;"> })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  axios({</span></span>
<span class="line"><span style="color:#A6ACCD;">      url: &#39;http://152.136.185.210:8000/home/data&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      //专门针对get请求的参数拼接</span></span>
<span class="line"><span style="color:#A6ACCD;">      params:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        type=&#39;top&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        page:1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }}).then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2、axios.get(url[,config]),中括号[]里面的表示可选，config表示配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">//如果method不写，默认是get请求</span></span>
<span class="line"><span style="color:#A6ACCD;">  axios.get(&#39;http://152.136.185.210:8000/home/data?type=sell&amp;page=3&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">  	 method:&#39;get&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> }).then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;"> })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3、axios.post(url[,data[,config]])</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">//如果method不写，默认是get请求</span></span>
<span class="line"><span style="color:#A6ACCD;">  axios.post(&#39;http://152.136.185.210:8000&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">  	name:&#39;lisi&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  	age:18</span></span>
<span class="line"><span style="color:#A6ACCD;"> }).then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;"> })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><p>注意：axios请求返回的是一个promise，我们需要用.then(res =&gt;{})来拿到正常的数据类型</p><h5 id="axios发送并发请求" tabindex="-1">axios发送并发请求 <a class="header-anchor" href="#axios发送并发请求" aria-hidden="true">#</a></h5><p>指定一个或几个请求发送接收完毕再处理</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> axios</span></span>
<span class="line"><span style="color:#A6ACCD;">      .all([</span></span>
<span class="line"><span style="color:#A6ACCD;">        axios.get(&#39;url: &#39;http://152.136.185.210:8000/home/data&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">          params: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: &#39;top&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            page: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        }),</span></span>
<span class="line"><span style="color:#A6ACCD;">        axios.get(&#39;url: &#39;http://152.136.185.210:8000/home/data&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      ])</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then(</span></span>
<span class="line"><span style="color:#A6ACCD;">        axios.spread((res1, res2) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(res1)</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(res2)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>其中res1对应第一个请求结果，res2对应第二个请求结果</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220748-1657022362082270.png" alt="image-20201021005944417"></p><h5 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220753-1657022362082272.png" alt="image-20201021010330644" style="zoom:67%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220757-1657022362082273.png" alt="image-20201021012609384" style="zoom:67%;"><h5 id="axios的实例" tabindex="-1">axios的实例 <a class="header-anchor" href="#axios的实例" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">   const instance1 = axios.create({</span></span>
<span class="line"><span style="color:#A6ACCD;">      baseURL: &#39;http://localhost:3005/admin/api&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      timeout: 5000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance1.get(&#39;/index&#39;).then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="axios模块封装" tabindex="-1">axios模块封装 <a class="header-anchor" href="#axios模块封装" aria-hidden="true">#</a></h5><p>为了实现可复用，我们一般会采用封装的形式使用axios，也就是再network文件夹创建request.js,然后向外暴露接口，</p><p>有需要使用网络请求的直接调用这个接口</p><p>使用实例：</p><p>在network中的request.js中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     export function request(config) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 1、创建axios的实例</span></span>
<span class="line"><span style="color:#A6ACCD;">       const instance = axios.create({</span></span>
<span class="line"><span style="color:#A6ACCD;">         baseURL: &#39;http://152.136.185.210:8000&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         timeout: 5000,</span></span>
<span class="line"><span style="color:#A6ACCD;">       })</span></span>
<span class="line"><span style="color:#A6ACCD;">       //发送真正的网路请求</span></span>
<span class="line"><span style="color:#A6ACCD;">       return instance(config)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在其他组件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	import { request } from &#39;./network/request&#39;	</span></span>
<span class="line"><span style="color:#A6ACCD;">	request({</span></span>
<span class="line"><span style="color:#A6ACCD;">      url: &#39;/home/data&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">      .then((res) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      .catch((err) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>当然，上面方法还是需要在每个组件中导入，所以还不够好，以下方案比较推荐使用，不需要每次都导入，直接可以用$http引用</p><p>第一步：创建network文件夹（非必须，个人习惯），在network文件夹下创建request.js</p><p>request.js输入以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     const http = axios.create({</span></span>
<span class="line"><span style="color:#A6ACCD;">       baseURL: &#39;localhost:3000/admin/api&#39;,//这个按实际情况填写</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;">     export default http</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第二部：在main.js中引入并配置axios(<code>推荐使用</code>)</p><p>输入以下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import http from &#39;network/index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.prototype.$http = http//这样可以让axios在所有组件中使用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="axios拦截器-interceptors-的使用" tabindex="-1">axios拦截器（interceptors)的使用 <a class="header-anchor" href="#axios拦截器-interceptors-的使用" aria-hidden="true">#</a></h5><p>request请求拦截器：发送请求前统一处理，如：设置请求头headers、应用的版本号、终端类型,登录token等。</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220802-1657022362082274.png" alt="image-20201107110132399" style="zoom:67%;"><p>config就是发送的请求，必须return 返回，请求才能继续发送</p><p>如果我们想阻止发送请求或者接收请求，我们可以返回一个Promise.reject(err)</p><p>response响应拦截器：有时候我们要根据响应的状态码来进行下一步操作，例如：由于当前的token过期，接口返回401未授权，那我们就要进行重新登录的操作。</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220806-1657022362082275.png" alt="image-20201107110154752" style="zoom:80%;"><p>响应拦截可以实现登录控制，和返回数据处理</p><h5 id="处理跨域" tabindex="-1">处理跨域 <a class="header-anchor" href="#处理跨域" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210326090227-1657022362082278.png" style="zoom:67%;"><p>在vue.config.js（如果没有就在项目根目录新创建）中加上如下代码：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220809-1657022362082276.png" alt="image-20201017122820391"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//解决跨域问题</span></span>
<span class="line"><span style="color:#A6ACCD;">  devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //配置跨域</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;/api&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        target: &#39;http://121.121.67.254:8185/&#39;, //这里后台的地址模拟的;应该填写你们真实的后台接口</span></span>
<span class="line"><span style="color:#A6ACCD;">        changOrigin: true, //允许跨域</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>其中/api的意思是拦截你所有带有/api的请求，然后让拦截的本地模拟服务器请求数据，这样就不会产生跨域了</p><p><code>设置跨域后，组件中的请求地址就不能再带ip和端口了，因为这里设置的跨域处理会默认帮加上的，组件的请求的往本地服务器请求的，如果没有</code></p><p><code>注意：如果使用代理，那么axios请求就不需要写域名和ip了，否则还会报错</code></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210326084618-1657022362082277.png" alt="image-20210326084618241"></p><p><code>需要把域名端口去掉，或者加上和网页运行的域名端口，而不是服务器的域名和端口，服务器的端口和域名，代理会进行处理转发</code></p><h4 id="mixins" tabindex="-1">mixins <a class="header-anchor" href="#mixins" aria-hidden="true">#</a></h4><p>mixins基础概况</p><p>vue中的解释是这样的，如果觉得语言枯燥的可以自行跳过嘿~</p><p>混入 (mixins)： 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。</p><p>怎么用？</p><p>举个栗子：</p><p>定义一个混入对象</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406221445-1657022362086297.webp" alt="img"></p><p>把混入对象混入到当前的组件中</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406221706-1657022362082280.webp" alt="img"></p><p>用法是不是相当简单呀</p><p>mixins的特点</p><p><strong>1、 方法和参数在各组件中不共享</strong></p><p>混合对象中的参数num</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406222110-1657022362082281.webp" alt=""></p><p>组件1中的参数num进行+1的操作</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406222216-1657022362082279.webp" alt="img"></p><p>组件2中的参数num未进行操作</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406222411-1657022362082282.webp" alt="img"></p><p>看两组件中分别输出的num值</p><p><img src="https:////upload-images.jianshu.io/upload_images/10069417-951e440b483654f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/647/format/webp" alt="img"></p><p><img src="https:////upload-images.jianshu.io/upload_images/10069417-051a611fa184eb4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/580/format/webp" alt="img"></p><p>大家可以看到，我在组件1里改变了num里面的值，组件2中的num值还是混入对象里的初始值</p><p><strong>2、 值为对象的选项，如methods,components等，选项会被合并，键冲突的组件会覆盖混入对象的</strong></p><p><strong>混入对象中的方法</strong></p><p><img src="https:////upload-images.jianshu.io/upload_images/10069417-7eb65d68e5f3ad23.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/825/format/webp" alt="img"></p><p>组件中的方法</p><img src="https:////upload-images.jianshu.io/upload_images/10069417-4bb148ff01d43768.png?imageMogr2/auto-orient/strip|imageView2/2/w/1027/format/webp" alt="img" style="zoom:80%;"><p>打印台的输出</p><p><img src="https:////upload-images.jianshu.io/upload_images/10069417-1dbd24819335b26d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/542/format/webp" alt="img"></p><p><strong>3、 值为函数的选项，如created,mounted等，就会被合并调用，混合对象里的钩子函数在组件里的钩子函数之前调用</strong></p><p><strong>混入对象函数中的console</strong></p><p><img src="https:////upload-images.jianshu.io/upload_images/10069417-8d9de93e376fea49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/749/format/webp" alt="img"></p><p>组件函数中的console</p><p><img src="https:////upload-images.jianshu.io/upload_images/10069417-e7d281e45b2a6274.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/743/format/webp" alt="img"></p><p>打印台的打印</p><p><img src="https:////upload-images.jianshu.io/upload_images/10069417-4e01bb1cadb4055a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/554/format/webp" alt="img"></p><p><strong>当然，混入组件也是可以的</strong></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406231022-1657022362083283.png" alt="image-20210406231022018"></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406231051-1657022362083284.png" alt="image-20210406231051345"></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210406231139-1657022362085288.png" alt="image-20210406231138407"></p><p><strong>全局混入</strong></p><p>混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，它将影响<strong>每一个</strong>之后创建的 Vue 组件。使用恰当时，这可以用来为自定义选项注入处理逻辑。</p><p><strong>方法一：在工程的main.js中直接注册，实现如下：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import App from &#39;./App&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.mixin({</span></span>
<span class="line"><span style="color:#A6ACCD;">       created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(&#39;全局混入的钩子函数&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     /* eslint-disable no-new */</span></span>
<span class="line"><span style="color:#A6ACCD;">     new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">       el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       components: { App },</span></span>
<span class="line"><span style="color:#A6ACCD;">       template: &#39;&lt;App/&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>方法二</strong>：模块化注册，新建mixin.js文件并添加以下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">       install(Vue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         Vue.mixin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">             console.log(&#39;全局混入的钩子函数&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           methods:{</span></span>
<span class="line"><span style="color:#A6ACCD;">           	test(){</span></span>
<span class="line"><span style="color:#A6ACCD;">           		console.log(&quot;test&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">           	}</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后在main.js中引入该文件并使用use方法进行注册</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import App from &#39;./App&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import myMixin from &#39;./mixin.js&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     Vue.use(myMixin);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     /* eslint-disable no-new */</span></span>
<span class="line"><span style="color:#A6ACCD;">     new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">       el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       components: { App },</span></span>
<span class="line"><span style="color:#A6ACCD;">       template: &#39;&lt;App/&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后在任何组件都可以使用了，并且不需要引入</p><p>比如在一个组件中使用：</p><p>可以直接使用this.test()</p><p>与vuex的区别</p><p>经过上面的例子之后，他们之间的区别应该很明显了哈~</p><p>vuex：用来做状态管理的，里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。</p><p>Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。</p><p>与公共组件的区别</p><p>同样明显的区别来再列一遍哈~</p><p>组件：在父组件中引入组件，相当于在父组件中给出一片独立的空间供子组件使用，然后根据props来传值，但本质上两者是相对独立的。</p><p>Mixins：则是在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，可以理解为形成了一个新的组件。</p><p><code>注意：请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)。</code></p><p>​ <code>大多数情况下，只应当应用于自定义选项，就像上面示例一样。推荐将其作为[插件]发布，\`\`以避免重复应用混入。</code></p><h4 id="render函数" tabindex="-1">render函数 <a class="header-anchor" href="#render函数" aria-hidden="true">#</a></h4><blockquote><p>Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。</p><p>这时你可以用<strong>渲染函数</strong>，它比模板更接近编译器。</p></blockquote><p><strong>render函数的参数是createElement函数</strong></p><p>​ createElement返回值是一个虚拟dom。即VNode也就是我们要渲染的节点</p><p>createElement有三个参数</p><p>​ 第一个参数，必需，{ String | Object | Function }</p><p>​ <em>要渲染的html标签</em></p><p>​ 第二个参数，可选：{ Object }</p><p>​ <em>html标签的各种属性</em></p><p>​ 第三个参数：可选，{ String | Array }</p><p>​ <em>子虚拟节点（VNodes）,当前html标签的子元素</em></p><p><strong>Vue渲染过程</strong></p><ol><li><p>独立构建</p><p>包含模板编译器，html字符串 -&gt; render函数 -&gt; VNode -&gt; 真实DOM节点</p></li><li><p>运行时构建</p><p>不包含模板编译器，render函数 -&gt; VNode -&gt; 真实DOM节点</p><p><em>使用实例：</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;App&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  render(h) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const _elm = h(</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;div&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        class: &#39;class-name&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 设置style</span></span>
<span class="line"><span style="color:#A6ACCD;">        style: { color: &#39;red&#39;, fontSize: &#39;22px&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 设置html内容</span></span>
<span class="line"><span style="color:#A6ACCD;">        // domProps: { innerHTML: &#39;学习下render函数的用法！&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 设置html的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        attrs: { id: &#39;xx-id&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      [ </span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;我是父元素的文本！&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        h(&#39;h1&#39;, &#39;这是一个子标签！&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        h(&#39;p&#39;, &#39;这是一个子标签！&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        h(&#39;a&#39;, &#39;这是一个子标签！&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        h(&#39;h1&#39;, &#39;这是一个子标签！&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(_elm)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return _elm</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><h4 id="vue源码解析" tabindex="-1">Vue源码解析 <a class="header-anchor" href="#vue源码解析" aria-hidden="true">#</a></h4><h5 id="vue渲染过程" tabindex="-1">Vue渲染过程 <a class="header-anchor" href="#vue渲染过程" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220812-1657022362086295.png" alt="image-20210221172208779" style="zoom:50%;"><p>我们首先要了解Vue的两种渲染方式先，比如通过cdn引入的vue.js和通过vue脚手架(默认配置)搭建的vue项目有什么区别？其实两者在是存在区别，我们先看下官网是怎么说的吧</p><h5 id="术语" tabindex="-1">术语 <a class="header-anchor" href="#术语" aria-hidden="true">#</a></h5><ul><li><strong>完整版</strong>：同时包含编译器和运行时的版本。</li><li><strong>编译器</strong>：用来将模板字符串编译成为 JavaScript 渲染函数的代码。</li><li><strong>运行时</strong>：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切。</li><li><strong><a href="https://github.com/umdjs/umd" target="_blank" rel="noreferrer">UMD</a></strong>：UMD 版本可以通过 <code>&lt;script&gt;</code> 标签直接用在浏览器中。jsDelivr CDN 的 <a href="https://cdn.jsdelivr.net/npm/vue@2.6.14" target="_blank" rel="noreferrer">https://cdn.jsdelivr.net/npm/vue@2.6.14</a> 默认文件就是运行时 + 编译器的 UMD 版本 (<code>vue.js</code>)。</li><li><strong><a href="http://wiki.commonjs.org/wiki/Modules/1.1" target="_blank" rel="noreferrer">CommonJS</a></strong>：CommonJS 版本用来配合老的打包工具比如 <a href="http://browserify.org/" target="_blank" rel="noreferrer">Browserify</a> 或 <a href="https://webpack.github.io/" target="_blank" rel="noreferrer">webpack 1</a>。这些打包工具的默认文件 (<code>pkg.main</code>) 是只包含运行时的 CommonJS 版本 (<code>vue.runtime.common.js</code>)。</li><li><strong><a href="http://exploringjs.com/es6/ch_modules.html" target="_blank" rel="noreferrer">ES Module</a></strong>：从 2.6 开始 Vue 会提供两个 ES Modules (ESM) 构建文件： <ul><li>为打包工具提供的 ESM：为诸如 <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">webpack 2</a> 或 <a href="https://rollupjs.org/" target="_blank" rel="noreferrer">Rollup</a> 提供的现代打包工具。ESM 格式被设计为可以被静态分析，所以打包工具可以利用这一点来进行“tree-shaking”并将用不到的代码排除出最终的包。为这些打包工具提供的默认文件 (<code>pkg.module</code>) 是只有运行时的 ES Module 构建 (<code>vue.runtime.esm.js</code>)。</li><li>为浏览器提供的 ESM (2.6+)：用于在现代浏览器中通过 <code>&lt;script type=&quot;module&quot;&gt;</code> 直接导入。</li></ul></li></ul><h5 id="运行时-编译器-vs-只包含运行时" tabindex="-1">运行时 + 编译器 vs. 只包含运行时 <a class="header-anchor" href="#运行时-编译器-vs-只包含运行时" aria-hidden="true">#</a></h5><p>如果你需要在客户端编译模板 (比如传入一个字符串给 <code>template</code> 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 需要编译器</span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  template: &#39;&lt;div&gt;{{ hi }}&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 不需要编译器</span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  render (h) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return h(&#39;div&#39;, this.hi)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>当使用 <code>vue-loader</code> 或 <code>vueify</code> 的时候，<code>*.vue</code> 文件内部的模板会在构建时预编译成 JavaScript。你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可。</p><p>因为运行时版本相比完整版体积要小大约 30%，所以应该尽可能使用这个版本。如果你仍然希望使用完整版，则需要在打包工具里配置一个别名：</p><h5 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;vue$&#39;: &#39;vue/dist/vue.esm.js&#39; // 用 webpack 1 时需用 &#39;vue/dist/vue.common.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>也就是说，如果是通过cdn引入的是完整版vue.js，会走以下完整流程：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220812-1657022362086295.png" alt="image-20210221172208779" style="zoom:50%;"><p>如果是基于Vue-cli3以上的版本默认会去掉编译器的，也就是运行时模式，也就是会只能识别通过render函数构建的结构，普通的html字符串则不可以识别，而完整版可以</p><p>那么为什么运行时版本不需要编译器呢？</p><p>因为，webpack会把所有.vue文件打包成render构建的结构，而不再需要我们先转成ast -&gt; render结构</p><h5 id="html-ast实现-是基于html的-如果是string则还没了解" tabindex="-1">html -&gt; ast实现<code>（是基于html的，如果是string则还没了解）</code> <a class="header-anchor" href="#html-ast实现-是基于html的-如果是string则还没了解" aria-hidden="true">#</a></h5><p>domtotree</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div id=&quot;app&quot;&gt;divText</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;li OnClick=&quot;test()&quot;&gt;哈哈哈哈哈哈&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;li&gt;哈哈哈哈哈哈&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;li&gt;哈哈哈哈哈哈&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;img src=&quot;https://www.baidu.com/img/flexible/logo/pc/result.png&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        function test() {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;测试&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //获取DOM的所有有效属性，非默认</span></span>
<span class="line"><span style="color:#A6ACCD;">        function getDomAttrs(dom) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          const attrs = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">          for (var attrKey of dom.getAttributeNames()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (attrKey === &#39;@click&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              dom.addEventListener(&#39;click&#39;, test)</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            attrs[attrKey] = dom.getAttribute(attrKey)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          return attrs</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 把真实DOM解析为虚拟DOM</span></span>
<span class="line"><span style="color:#A6ACCD;">        function dom2tree(dom) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 初始化vNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          const vNode = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 分别文本和非文本元素进行处理</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (dom.tagName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            vNode.tag = dom.tagName</span></span>
<span class="line"><span style="color:#A6ACCD;">            vNode.attrs = getDomAttrs(dom)</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            vNode.tag = &#39;text&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            vNode.text = dom.data</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 初始化vNode的子元素</span></span>
<span class="line"><span style="color:#A6ACCD;">          vNode.children = []</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 递归调用</span></span>
<span class="line"><span style="color:#A6ACCD;">          dom.childNodes.forEach(child =&gt; vNode.children.push(dom2tree(child)))</span></span>
<span class="line"><span style="color:#A6ACCD;">          return vNode</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(dom2tree(document.body));</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>html被解析成了vdom</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220808001927545.png" alt="image-20220808001927545"></p><p>然后我们再把vdom转化为真实DOM，也就是render(vdom转换成真实DOM 的过程）</p><p>vdom to DOM</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 真正的渲染函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    function _render(vNode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (vNode.tag.toLowerCase() === &quot;text&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return document.createTextNode(vNode.data);</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var dom = document.createElement(vNode.tag);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (vNode.attrs) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 遍历属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.keys(vNode.attrs).forEach((key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          const value = vNode.attrs[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">          dom.setAttribute(key, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 子数组进行递归操作，空数组不进行处理</span></span>
<span class="line"><span style="color:#A6ACCD;">      vNode.children?.forEach((child) =&gt; dom.appendChild(_render(child)));</span></span>
<span class="line"><span style="color:#A6ACCD;">      return dom;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const tree = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      tag: &#39;DIV&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        { tag: &#39;SPAN&#39;, children: [] },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          tag: &#39;UL&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            { tag: &#39;LI&#39;, children: [{ tag: &#39;TEXT&#39;, data: &#39;hashdash&#39; },] },</span></span>
<span class="line"><span style="color:#A6ACCD;">          ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          tag: &#39;UL&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">              tag: &#39;LI&#39;, children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  tag: &#39;A&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  attrs: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    href: &quot;https://www.baidu.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                  },</span></span>
<span class="line"><span style="color:#A6ACCD;">                  children: [{ tag: &#39;TEXT&#39;, data: &#39;我是超链接&#39; }]</span></span>
<span class="line"><span style="color:#A6ACCD;">                }]</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            { tag: &#39;TEXT&#39;, data: &#39;我是文本&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">          ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          tag: &#39;IMG&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          attrs: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            src: &#39;https://www.baidu.com/img/flexible/logo/pc/result.png&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.querySelector(&#39;#app&#39;).parentNode.appendChild(_render(tree))</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>渲染结果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220808002008640.png" alt="image-20220808002008640"></p><h5 id="mvvm、mvp和mvc" tabindex="-1">MVVM、MVP和MVC <a class="header-anchor" href="#mvvm、mvp和mvc" aria-hidden="true">#</a></h5><p>MVVM，即<strong>model、view、view-model，业务层、视图层以及两者的绑定层</strong>。Vue的设计参考了MVVM架构，但不完全是一个MVVM框架，因为它没有严格意义上的绑定层。</p><p>MVVM要求开发者将业务层和视图层分开：业务层负责管理数据；视图层负责页面渲染；绑定层负责双向绑定，即视图层操作通过绑定层影响业务数据，业务数据的变化通过绑定层影响视图渲染，这三层是完全解耦的：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-0f709bd0d7d3be9dbe981a68908cc650_720w.jpg" alt="img"></p><p>举个例子，假如我们的页面有一个<code>h1</code>标题，它要渲染的是js中变量<code>title</code>的值：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">这是标题</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">这是标题</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>这里<code>h1</code>的文本内容就是由<code>view</code>层管理的；而<code>model</code>层负责的是管理业务数据<code>title</code>。现在<code>view</code>和<code>model</code>层都有了，下面我们就要让<code>h1</code>的文本内容和<code>title</code>的内容保持同步，这就是<code>view-model</code>层要做的事。假设我们有这样一个<a href="https://www.zhihu.com/search?q=xml%E6%96%87%E4%BB%B6&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">xml文件</a>：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{title}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>它表示<code>h1</code>的文本和变量<code>title</code>的值是绑定的，当一个发生变化时，另一个应该同步变化。</p><p>如果我们能够编写一个框架，自动根据一个值，更新另一个值，那么实际上就是实现了<code>view-model</code>层，我们的框架就可以称为一个MVVM框架。以后只要我们定义好视图和业务逻辑，并用一个xml文件描述两者的绑定关系，就可以实现视图和数据的同步了，这也是谷歌的<code>Data Binding</code>的基本实现思路。</p><p>MVVM模式参考自MVP模式，而两者都是借鉴自经典的MVC模式。先来说说MVVM和MVP的差异。</p><p>MVP的全写是<code>Model-View-Presenter</code>，即业务层、视图层和控制层。这里的控制层Presenter与<code>view-model</code>层的作用是完全一样的，就是负责对视图层和业务层进行同步。但不同的是，Presenter的实现较为复杂，它要求开发者必须手动封装两者的同步逻辑，如jQuery框架就可以看做一个MVP模式的实现：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">这是标题</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">text</span><span style="color:#A6ACCD;">(title)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>开发者需要定义当变量变化时如何更新视图，以及获取到用户输入时如何更新变量，这两者加起来就是它的Presenter层实现。这种方式也可以实现视图和业务逻辑的同步，但显然，MVP的控制层逻辑要比MVVM的声明式绑定写起来复杂得多，所以MVP模式基本上已经被MVVM代替。</p><p>而MVC是上述两个模式的鼻祖，也曾是java中最经典的模式之一，它的全写是<code>Model-View-Controller</code>。model和view层与上述两个模式一致，controller层与MVP的Presenter层一样，也被称作控制层。不过，MVC中的controller功能很弱，它实际上只是一个路由层，真正实现视图与业务数据同步的是<code>model</code>层的service，controller的作用就是找到对应的service而已。controller层的功能过于薄弱使得<code>model</code>层变得很复杂，所以目前<a href="https://www.zhihu.com/search?q=MVC%E6%A8%A1%E5%BC%8F&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">MVC模式</a>已经很少使用。</p><p>Vue之所以不是一个MVVM框架，是因为它没有真正的<code>view-model</code>层。在Vue中，<code>view-model</code>是通过<a href="https://www.zhihu.com/search?q=%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">模板语法</a>间接实现的，Vue通过编译模板，可以解析出视图层和业务层的绑定关系，通过响应式系统和虚拟DOM来实现两者的同步，详细的过程后面会加以介绍。</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ab2dbb3960771c48f7a684acf13c5ee4_720w.jpg" alt="img"></p><h5 id="vue的基本配置" tabindex="-1">Vue的基本配置 <a class="header-anchor" href="#vue的基本配置" aria-hidden="true">#</a></h5><p>由于讲解Vue配置不是本文的重点，这里我们只是简单地概括一下，需要详细学习这部分内容的可以阅读Vue的官方文档：<a href="https://link.zhihu.com/?target=https%3A//cn.vuejs.org/v2/guide" target="_blank" rel="noreferrer">Vue官方网站</a>。</p><p>为了简单，我们先以一个cdn版本的Vue为例：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">标题</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;h1&gt;{{title}}&lt;/h1&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">changeTitle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">title</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">changeTitle</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">新标题</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>执行完script脚本对应的框架代码后，window上会新增一个构造函数<code>Vue</code>，用于构建Vue实例。我们向<code>new Vue</code>传入了一个配置对象，这个对象包含如<code>el、data、template、methods</code>等属性，用于为Vue实例添加属性和方法。Vue会根据这些配置，生成一个可以自动生成视图的响应式的<a href="https://www.zhihu.com/search?q=Vue%E7%BB%84%E4%BB%B6&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">Vue组件</a>，它不仅负责管理视图层和业务层，还负责两者的同步。</p><p>我们来简单看一下一些常用配置的作用：</p><ol><li><strong>el</strong> 根元素，该参数只能由根节点声明，表示当前Vue应用需要被挂载到页面的哪个DOM节点上。如上面的例子指定了根元素为<code>#app</code>，那么该Vue实例生成的DOM就会直接替换id为<code>app</code>的元素。</li><li><strong>name</strong> 组件的名字，主要用于全局注册组件，如：</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> MyComponent </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MyComponent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(MyComponent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> MyComponent)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ol><li><strong>components</strong> 声明当前组件的外部依赖，相当于局部注册组件，在编写单组件时，如果需要用到其他的项目内组件通常会提供该参数。</li><li><strong>props</strong> 来自<a href="https://www.zhihu.com/search?q=%E7%88%B6%E7%BA%A7%E7%BB%84%E4%BB%B6&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">父级组件</a>的数据依赖，这个依赖是响应式的。</li><li><strong>data</strong> 业务数据，这个参数是<code>model</code>层的核心，相关的业务逻辑都是围绕data展开的。</li><li><strong>computed</strong> 计算属性，定义一组变量，这组变量的值是基于一个或多个props、data计算而来，computed内变量的值会根据这些依赖的值变化而自动更新，并且会自动缓存上次的计算结果。</li><li><strong>watch</strong> 手动监控props、data或者computed的变化，定义变化时的回调函数。</li><li><strong>生命周期方法</strong> 定义Vue组件在各个生命周期需要执行的回调函数，Vue在执行到对应的阶段时会调用它们。生命周期与Vue组件创建的细节是第二部分渲染原理的重点。</li><li><strong>methods</strong> 组件的工具方法集。methods定义了一组工具方法，可以在computed、watch、生命周期方法或者其他工具方法中调用。</li></ol><p>有了这些基本知识的铺垫，下面我们就开始详细介绍Vue的渲染过程。</p><h5 id="vue渲染原理" tabindex="-1">Vue渲染原理 <a class="header-anchor" href="#vue渲染原理" aria-hidden="true">#</a></h5><p>我们先来打通HTML与Vue模板的关系。</p><h6 id="_1-html与模板" tabindex="-1">1. HTML与模板 <a class="header-anchor" href="#_1-html与模板" aria-hidden="true">#</a></h6><p>下面是一个常见的Vue例子：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-b8cb2ab764b66a4f51d33b3be5b11ec0_720w.jpg" alt="img"></p><p>整个Vue应用被挂载到页面上id为app的节点上，传入的模板字符串是<code>&lt;App/&gt;</code>。Vue会解析组件App的模板来替换该标签。在解析App的模板时发现它又引入了另一个组件<code>MyComponent</code>，于是Vue继续解析MyComponent的模板，将解析结果替换到App组件模板内。全部解析之后会得到这样一个模板：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">111</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">comp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">222</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">333</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>注意，这并不是HTML代码，它仍然是Vue模板（只是这里没有定义数据绑定而已）。Vue会用纯JavaScript来描述上述结构，类似下面这样（这不是真正的内部表示，后面我们会看到Vue的真实内部表示）：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-00a10cdf02adf3d359350a82825d03b3_720w.jpg" alt="img"></p><p>这里最外部id为app的节点实际上是不存在的，Vue在生成DOM时会替换掉该元素。</p><p>我们看到，Vue用一个JavaScript对象描述了编译出来的模板（如果有数据绑定，它还会描述模板与数据的绑定关系）。接下来只需要调用原生的DOM方法依次创建这里的每一个节点，然后将它们挂载成一棵<a href="https://www.zhihu.com/search?q=DOM%E5%AD%90%E6%A0%91&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">DOM子树</a>，并插入页面，就可以得到真正的HTML。我们一般把这个树状JavaScript对象称为虚拟DOM树。下面是上面的JavaScript对象对应的DOM结构：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-f0acf0c6714be8e92385f7d1af32a0b7_720w.jpg" alt="img"></p><p>也就是说，通过模板可以得到真实HTML的JavaScript对象表示，然后调用原生的DOM方法，借助这个JavaScript对象去生成真实的HTML。不仅如此，在这个过程中，Vue还注入了响应式系统，可以根据数据变化自动更新视图，以及根据视图自动更新数据，下面我们来讲解具体的实现过程。</p><h6 id="_2-vue组件的完整渲染过程" tabindex="-1">2. Vue组件的完整渲染过程 <a class="header-anchor" href="#_2-vue组件的完整渲染过程" aria-hidden="true">#</a></h6><p>Vue的执行过程主要分两大阶段：Vue自身的初始化阶段和实例的生命周期管理阶段。</p><p>当通过&lt;script&gt;脚本或者<code>import Vue from &#39;vue&#39;</code>引入<code>Vue</code>时，Vue框架本身的代码会被执行，这一阶段的作用是对框架自身进行初始化。简单来说，就是定义构造函数<code>function Vue</code>，并为其添加大量的原型方法（以及一些工具方法），下面是一个说明示例：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 定义构造函数</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">_init</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 定义原型方法</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_init</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_update</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Vue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>而在执行<code>new Vue({ ... })</code>语句时，就进入了实例的生命周期管理阶段。这一阶段是调用上述构造函数，构造和初始化Vue实例，并且管理它的整个生命周期。</p><p>下面我们就具体来看看这两个阶段都做了什么。</p><p><strong>(1). Vue自身的初始化阶段</strong></p><p>打开Vue源码的<code>src &gt; core &gt; instance &gt; index.js</code>文件，可以看到以下代码：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ce1e5f5841c5fea7ed2a5ec63af02ac2_720w.jpg" alt="img"></p><p>实际上这就是主要的初始化过程，包括定义Vue构造函数，和调用5个mixin方法为Vue混入大量的原型方法。了解Vue自身初始化的关键就是探究这5个<a href="https://www.zhihu.com/search?q=mixin%E5%87%BD%E6%95%B0&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">mixin函数</a>究竟为Vue混入了哪些原型方法，下面是一个简单的例子：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-2.6.10-learning.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      var app = new Vue(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         el: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         template: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;div&gt;&lt;h1&gt;标题&lt;/h1&gt;&lt;p&gt;{{ message }}&lt;/p&gt;&lt;/div&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> return { </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         mounted () </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">              console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$data);</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$destroy</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5000</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>这个<code>vue-2.6.10-learning.js</code>是我下载到本地的一个Vue代码文件，我在文件内各个关键位置打上了console输出，以此来显式观察Vue的执行过程，下面是输出结果（以$开头的是直接暴露给开发者的接口，以_开头的是框架内部方法，不推荐开发者使用）：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ef9c7eb836d14d06626e34e2142cf13e_720w.jpg" alt="img"></p><p>这里就是Vue自身初始化的全过程，与组件实例构造相关方法的实现，我们会在组件的生命周期管理阶段详细剖析，下面是它们大致的介绍。</p><p>首先<code>initMixin</code>为Vue混入了<code>_init</code>原型方法，它的作用是根据传入的options初始化Vue组件实例。具体的初始化过程是生命周期管理阶段的重点之一，下一部分会详细介绍。</p><p>接着<code>stateMixin</code>为Vue混入了<code>$data、$props、$set、$delete和$watch</code>这5个与组件状态有关的原型方法或属性：<code>$data</code>和<code>$props</code>是<code>_data</code>和<code>_props</code>（这两个属性是初始化Vue实例时由_init添加到组件对象上的）的只读版本；<code>$set</code>和<code>$delete</code>是Vue提供的全局响应式方法，我们知道，由于JavaScript的限制，直接为已有对象添加或删除属性时，该属性不会被响应式系统观测到，<code>$set</code>和<code>$delete</code>就是响应式地新增或删除属性的全局方法；<code>$watch</code>与<code>watch</code>配置的作用是一致的，只是它可以通过js来手动调用，而不用提前在options中声明。</p><p>下面<code>eventsMixin</code>混入了<code>$on、$once、$off、$emit</code>这四个与事件相关的原型方法。<code>$on</code>用于向实例注册事件监听；<code>$once</code>则是注册一个只会被调用一次的事件监听；<code>$off</code>用于取消某个或某类事件监听；<code>$emit</code>用于触发某个事件。</p><p>然后<code>lifecycleMixin</code>则向Vue混入了<code>_update、$forceUpdate和$destroy</code>这4个与实例生命周期相关的原型方法。<code>_update</code>负责组件的更新；<code>$forceUpdate</code>用于强制更新组件，一般是由于某些编码bug导致数据与视图不同步时手动调用；<code>$destroy</code>用于销毁组件。</p><p>最后，<code>renderMixin</code>会向Vue混入<code>$nextTick和_render</code>这两个与组件渲染相关的原型方法。<code>$nextTick</code>用于将一段代码逻辑推入微任务队列，以保证视图更新后才会执行；<code>_render</code>负责渲染组件，它的主要实现逻辑是调用组件的<code>render</code>函数（<a href="https://www.zhihu.com/search?q=render%E5%87%BD%E6%95%B0&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">render函数</a>由模板编译而来，也可以手工编写）生成DOM，然后挂载到页面上。</p><p>上面的方法位于Vue的原型对象上，对任何一个Vue组件都是通用的，执行完上述代码后，内存中的Vue结构是这样的：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-199566fb5601a4f5eaa5d1f017678b81_720w.jpg" alt="img"></p><p>可以看到，Vue构造函数和原型对象都初始化完毕了。但是由于还没有执行<code>new Vue</code>，所以暂时还没有生成可用的Vue组件实例。</p><p><strong>(2). 组件实例的生命周期管理阶段</strong></p><p>a. 实例初始化阶段</p><p>这一阶段开始的标志就是调用<code>new vue()</code>来构造一个Vue组件实例。自该语句开始，一个Vue应用正式被构建。该阶段大致又可分为两个阶段，分别是初始化阶段和挂载（销毁）阶段。当初始化完成时，如果<code>el</code>配置存在，则立即进入挂载阶段，否则将等待手动调用<code>$mount</code>才会进入挂载阶段。</p><p>我们回顾一下Vue构造函数的实现：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">!</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Vue</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">warn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Vue is a constructor and should be called with the \`new\` keyword</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">_init</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>真正有效的就只有一行代码：<code>this._init(options)</code>，即调用原型上的<code>_init</code>方法，传入options，初始化组件实例。下面是初始化阶段的整个过程输出：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-f968af35f02fae0f20846ed7348c2a45_720w.jpg" alt="img"></p><p>整个过程的关键点为：</p><ol><li>初始化<code>$options</code>，这一步就是把组件配置<code>options</code>直接保存为实例的<code>$options</code>属性，以供后面的各种初始化使用。</li><li>调用<code>initProxy</code>方法初始化<code>proxy</code>代理。如果浏览器支持proxy，Vue会为当前实例生成一个代理对象，以它作为render函数的调用者，以提高性能，如果不支持，则该代理就是当前实例自身。</li><li>调用<code>initLifecycle</code>初始化组件生命周期。这里主要是初始化一些与生命周期相关的实例属性，如<code>$children、_watcher、_isMounted</code>等。它们暂时只是空值，会在进入特定的生命周期时被赋予特定的值。</li><li>调用<code>initEvents</code>初始化组件事件属性。主要是定义<code>_events</code>属性，该属性后面将用于存储与当前组件有关的事件监听，目前它的值是空的，挂载阶段才会为其赋值。</li><li>调用<code>initRender</code>初始化与渲染相关的实例属性和方法。包括初始化<code>_vnode、$slots、_c、$attrs、$listeners</code>等，<code>_vnode</code>将在挂载阶段保存当前组件对应的虚拟节点；<code>$slots</code>用于保存插槽内容；<code>_c</code>是渲染真实DOM的方法（配置<code>render: h =&gt; h(App)</code>的函数h指的正是<code>_c</code>），在浏览器环境下，它主要基于<code>document.createElement</code>实现；<code>$attrs和$listeners</code>用于保存来自父组件的属性和监听函数注入。</li><li><strong>执行到这里，与组件状态无关的配置都已经初始化完毕，<code>beforeCreate</code>生命周期钩子函数被调用。</strong></li><li>调用<code>initInjections</code>初始化注入。它要解析的是依赖注入模式下当前组件从外部注入的变量，关于依赖注入模式，这里暂不详解，请参考Vue官网。</li><li>调用<code>initState</code>初始化组件状态。这里分别又调用了<code>initProps、initMethods、initData、initComputed和initWatch</code>来初始化配置中的<code>props、methods、data、computed和watch</code>。它们都是与组件的业务逻辑息息相关的配置，执行完毕后，它们都以实例属性或方法的形式直接添加到了组件上。比如，当执行完<code>initData</code>后，你就可以直接用<code>this.message</code>来访问data中的<a href="https://www.zhihu.com/search?q=message%E5%8F%98%E9%87%8F&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">message变量</a>了，其他配置同理。值得一提的是，这一步骤的主要作用是构建响应式系统，比如<code>initData</code>不仅仅是将变量添加到组件上，而且为其生成了一个Observer观察者对象，这样Vue就可以对该变量的变化进行观测，关于响应式系统的实现，我们后面会继续讲到。</li><li>调用<code>initProvide</code>初始化<code>provide</code>，这是依赖注入模式的provide部分，与injections是对应的，感兴趣的可以参考Vue官网了解它的用法。</li><li><strong>现在组件实例已经初始化完毕，执行<code>create</code>生命周期钩子函数。</strong></li></ol><p>初始化完毕后的内存图是这样的：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-cc0445a2ed7f981de77ab437493fafe8_720w.jpg" alt="img"></p><p>在<code>_init</code>函数的最末尾，Vue会检查<code>el</code>属性是否存在，如果存在，将进入挂载阶段：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_init</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$mount</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>如果没有el属性，则需要等到手动调用<code>$mount</code>方法时才会进行挂载。</p><p>在讲解挂载阶段之前，我们再回头探讨一下响应式系统。我们知道，响应式系统的核心对象是<code>data</code>，所以响应式系统主要是在<code>initData</code>中构建起来的（props、computed等都间接地依赖data，因此它们的响应式本质上都来自于data的响应式特性），我们剥离出initData最关键的一行代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 调用observe观测data</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">observe</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">/* asRootData */</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://www.zhihu.com/search?q=observe%E5%87%BD%E6%95%B0&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">observe函数</a>用于将data转化为响应式，也就是搭建响应式系统。响应式系统包括三个核心对象：<code>Observer</code>、<code>Dep</code>和<code>Watcher</code>。</p><p>Observer以<code>__ob__</code>的属性的形式存在与数据对象上，用于观测对象属性的变化。Dep以<code>dep</code>属性的形式存在于<code>__ob__</code>属性内，负责帮助Observer收集和通知订阅者。而Watcher就是订阅者，它存在于<code>dep</code>属性的<a href="https://www.zhihu.com/search?q=subs%E6%95%B0%E7%BB%84&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">subs数组</a>属性内，负责在数据发生变化时执行某些操作（如更新视图或执行回调）。三者的结构如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// initData执行完毕后组件的_data属性</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 包含__ob__属性证明它已经是响应式的</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ‘’</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">__ob__</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">dep</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">subs</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [watcher</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> …]  </span><span style="color:#676E95;font-style:italic;">// 组件外部watcher</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">message</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 调用get时，依赖会被收集</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">message</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 内部包含对该属性的观察者对象</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 这里包含组件内对message的订阅者(watcher)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>调用observe观测data时，Vue会为它添加一个Observer类型的<code>__ob__</code>属性，这个过程中使用<code>Object.defineProperty</code>递归地修改data每个属性的get和set，同时<code>__ob__</code>属性还会初始化一个<a href="https://www.zhihu.com/search?q=dep%E5%B1%9E%E6%80%A7&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A266966092%7D" target="_blank" rel="noreferrer">dep属性</a>，用于管理相关依赖，这些依赖（即watchers）被保存在dep属性的subs数组内。调用<code>new Watcher</code>生成一个订阅者时，它会自动进入该数据对象的订阅者队列，而当数据变化时，Observer会通知Dep，Dep则依次调用每个watcher提供的run方法，执行对应的回调，以此实现响应式系统。具体的过程可参考我之前关于响应式系统的介绍：<a href="https://link.zhihu.com/?target=https%3A//blog.csdn.net/qq_41694291/article/details/100175402" target="_blank" rel="noreferrer">Vue源码笔记之响应式系统</a>。</p><p>b. 组件挂载、更新和销毁阶段</p><p>组件初始化完毕后，如果<code>el</code>属性存在，就可以进行挂载以生成真正的DOM了。下面是整个挂载、更新和销毁过程：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-a439d19484a658f29797f7137a717522_720w.jpg" alt="img"></p><p>以下是挂载阶段的流程图表示：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-c0e92885ba4c21915e9ee85faa84720e_720w.jpg" alt="img"></p><p>首先是检查render函数是否存在。对于完整版本的Vue，如果render函数不存在，那么它将调用自身的模板编译器对template进行编译；对于运行时版本，如果render函数不存在否则直接抛出异常。整个的编译过程较为复杂，我们直接给出编译前后的效果： 模板：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">“item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">in</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">items”</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          itemid: {{ item.id }}</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>渲染函数：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_render</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_c</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div’, { attrs:{&quot;id&quot;:&quot;app&quot;} },</span></span>
<span class="line"><span style="color:#F07178;">           [</span><span style="color:#82AAFF;">_c</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">_l</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">items</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">             </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_c</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">li</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                 [</span><span style="color:#82AAFF;">_v</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> itemid:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">_s</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)]</span></span>
<span class="line"><span style="color:#F07178;">             )</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          )</span></span>
<span class="line"><span style="color:#F07178;">       )]</span></span>
<span class="line"><span style="color:#F07178;">     )</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>上述模板与下面的渲染函数完全等价，可以相互转换。渲染函数里的<code>_c、_l、_v、_s</code>等都是Vue定义的辅助渲染函数，用于解析模板中不同的部分。如<code>_c</code>用于创建DOM，它主要基于document.createElement；<code>_l</code>用于解析列表，如<code>v-for</code>列表；<code>_v</code>用于解析标签文本；<code>_s</code>用于解析变量的值，辅助渲染函数还有很多，这里暂不一一详述。</p><p>有了渲染函数，接下来就是定义一个用于渲染和更新组件的函数：updateComponent，它的大致实现如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> updateComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_update</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_render</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>我们来看它的作用。<code>vm._render()</code>内部会调用上述<code>render</code>函数，新生成一个对DOM的虚拟描述，以下就是调用上述渲染函数生成的JavaScript对象：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-2491e6acae476b48ff14b01675cfaceb_720w.jpg" alt="img"></p><p>我们把这个对象称为虚拟节点（vnode），它对应一个组件的结构。对于一个Vue应用来说，所有的虚拟节点会组成一整棵树状结构，也就是我们所说的虚拟DOM树。</p><p>这个虚拟DOM就是我们最终要渲染到页面上的HTML的js版本，它被传递给组件的<code>_update</code>方法执行渲染。这里所说的渲染包括首次绘制和更新，_update内部会根据旧的vnode是否存在来判断是首绘还是更新。_update的实现大致如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_update</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">hydrating</span><span style="color:#89DDFF;">){</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">prevVnode</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// initial render </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">__patch__</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">hydrating</span><span style="color:#89DDFF;">,</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// updates </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">__patch__</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">prevVnode</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vnode</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>当旧的vnode不存在，说明这是首次绘制，<code>__patch__</code>将依据虚拟DOM生成真实DOM并绘制到页面。如果旧的vnode是存在的，说明当前组件已经被绘制到页面上了，这时候<code>__patch__</code>将负责比对两个vnode，然后判断如何最高效地更新真实DOM，最后去更新视图。<code>__patch__</code>过程较为复杂，如果感兴趣，可以参考我之前关于虚拟DOM的博客：<a href="https://link.zhihu.com/?target=https%3A//blog.csdn.net/qq_41694291/article/details/100884306" target="_blank" rel="noreferrer">Vue源码笔记之虚拟DOM</a>，里面有详细的patch过程和图解。</p><p>也就是说，调用updateComponent时，如果组件尚未渲染，则依据vnode渲染组件（该过程主要就是用document.createElement创建真实DOM标签，然后用appendChild添加到页面上）；如果组件已经存在，则比对vnode，产生高效更新算法，用原生的DOM方法去操作真实DOM，完整视图更新。</p><p>显然，定义这个函数是为了在数据变化时自动调用以更新视图，也就是说它必须接入到响应式系统才有意义。接下来的代码就是将其接入响应式系统：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mountCompnent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 上述函数</span></span>
<span class="line"></span></code></pre></div>`,429);function j(o,z,M,B,$,S){const c=e("Filters"),r=e("demo"),i=e("child2"),p=e("router-view");return u(),A("div",null,[F,s("p",null,[n("Vue.components中的Filters是真正使用的插件名，比如"),a(c),n(",而不是"),m]),h,s("div",null,[a(r,{src:"../demo/v-bing_class.vue",desc:"例子",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cul%20class%3D%22box%22%20v-bind%3Aclass%3D%22%7B%20textColor%3A%20isColor%2C%20textSize%3A%20isSize%20%7D%22%3E%0D%0A%20%20%20%20%3Cli%3E%E5%AD%A6%E4%B9%A0Vue%3C%2Fli%3E%0D%0A%20%20%20%20%3Cli%3E%E5%AD%A6%E4%B9%A0Node%3C%2Fli%3E%0D%0A%20%20%20%20%3Cli%3E%E5%AD%A6%E4%B9%A0React%3C%2Fli%3E%0D%0A%20%20%3C%2Ful%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%3E%0D%0Aexport%20default%20%7B%0D%0A%20%20data()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20%20isColor%3Atrue%2C%0D%0A%20%20%20%20%20%20%20isSize%3Atrue%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%2C%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A.box%20%7B%0D%0A%20%20border%3A%201px%20dashed%20%23f0f%3B%0D%0A%7D%0D%0A.textColor%20%7B%0D%0A%20%20color%3A%20%23f00%3B%0D%0A%20%20background-color%3A%20%23eef%3B%0D%0A%7D%0D%0A.textSize%20%7B%0D%0A%20%20font-size%3A%2030px%3B%0D%0A%20%20font-weight%3A%20bold%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",htmlStr:"%3Cpre%20class%3D%22shiki%22%20style%3D%22background-color%3A%20%23292D3E%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eul%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C3E88D%22%3Ebox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Ev-bind%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3EtextColor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EisColor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3EtextSize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3EisSize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%E5%AD%A6%E4%B9%A0Vue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%E5%AD%A6%E4%B9%A0Node%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%E5%AD%A6%E4%B9%A0React%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eli%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Eul%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Edefault%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3Ereturn%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%20%20%20isColor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF9CAC%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%20%20%20isSize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF9CAC%22%3Etrue%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C792EA%22%3Escoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3Ebox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Eborder%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E1px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20dashed%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Ef0f%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3EtextColor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Ecolor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Ef00%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Ebackground-color%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3Eeef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFCB6B%22%3EtextSize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Efont-size%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F78C6C%22%3E30px%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B2CCD6%22%3Efont-weight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A6ACCD%22%3E%20bold%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F07178%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2389DDFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",description:"%E4%BE%8B%E5%AD%90",codePath:"../../front-end/demo/v-bing_class.vue"})]),v,s("p",null,"给img标签的src属性赋值时，按照传统的方法"+t(o.url)+"：",1),b,a(i,y(D(o.$attrs)),null,16),n("，这是v-bind唯一可以直接跟等号的特殊写法):"),f,s("p",null,[q,n("，具名插槽有名字，子组件通过 "),d(o.$slots,"up"),n('定义，父组件在使用的时候通过slot="up"使用，并且会放到对应的位置')]),E,s("p",null,"在上例的基础上，我们把 computed 区块中的 totalMarks 函数整体移到 methods 中。同时在模板中将 "+t("totalMarks")+" 替换成 "+t("totalMarks()")+" 你最终看到的结果是一样的，如下所示：",1),k,s("p",null,[n("当然要渲染在哪里，需要一个标签"),a(p)]),s("p",null,[n("还可以用<keep-alive>包裹"),a(p),n("来保持状态，防止被销毁,使用keep-alive的保持的组件都要有name属性")]),x,w,s("p",null,[n("一级路由会在任何的"),a(p),n("中渲染对应的模板，App.vue中的 "),_,n(" 是最顶层的出口，渲染最高级路由匹配到的组件。子路由只会在父路由的"),a(p),n("中的模板的"),a(p),n("渲染")]),V])}const P=C(g,[["render",j]]);export{N as __pageData,P as default};
