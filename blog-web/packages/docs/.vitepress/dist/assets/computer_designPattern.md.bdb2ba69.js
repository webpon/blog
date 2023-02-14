import{_ as s,c as n,o as a,a as l}from"./app.f2fbcdc9.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[{"level":3,"title":"设计原则","slug":"设计原则","link":"#设计原则","children":[]},{"level":3,"title":"工厂模式","slug":"工厂模式","link":"#工厂模式","children":[]},{"level":3,"title":"建造者模式","slug":"建造者模式","link":"#建造者模式","children":[]},{"level":3,"title":"单例模式","slug":"单例模式","link":"#单例模式","children":[]},{"level":3,"title":"装饰者模式","slug":"装饰者模式","link":"#装饰者模式","children":[]},{"level":3,"title":"组合模式","slug":"组合模式","link":"#组合模式","children":[]},{"level":3,"title":"观察者模式","slug":"观察者模式","link":"#观察者模式","children":[]},{"level":3,"title":"策略模式","slug":"策略模式","link":"#策略模式","children":[]},{"level":3,"title":"链模式","slug":"链模式","link":"#链模式","children":[]},{"level":3,"title":"委托模式","slug":"委托模式","link":"#委托模式","children":[]},{"level":3,"title":"数据访问对象模式","slug":"数据访问对象模式","link":"#数据访问对象模式","children":[]},{"level":3,"title":"等待者模式","slug":"等待者模式","link":"#等待者模式","children":[]},{"level":3,"title":"MVC模式","slug":"mvc模式","link":"#mvc模式","children":[]},{"level":3,"title":"MVVM模式","slug":"mvvm模式","link":"#mvvm模式","children":[]}]}],"relativePath":"computer/designPattern.md"}'),p={name:"computer/designPattern.md"},e=l(`<h2 id="设计模式" tabindex="-1">设计模式 <a class="header-anchor" href="#设计模式" aria-hidden="true">#</a></h2><blockquote><p>Design Pattern</p></blockquote><p>什么是设计模式？</p><blockquote><p>假设有一个空房间，我们要日复一日地往里 面放一些东西。最简单的办法当然是把这些东西 直接扔进去，但是时间久了，就会发现很难从这 个房子里找到自己想要的东西，要调整某几样东西的位置也不容易。所以在房间里做一些柜子也许是个更好的选择，虽然柜子会增加我们的成 本，但它可以在维护阶段为我们带来好处。使用这些柜子存放东西的规则，或许就是一种模式</p></blockquote><p>学习设计模式，有助于写出可复用和可维护性高的程序</p><p>设计模式的原则是“找出 程序中变化的地方，并将变化封装起来”，它的关键是意图，而不是结构。</p><p>不过要注意，使用不当的话，可能会事倍功半。</p><h3 id="设计原则" tabindex="-1">设计原则 <a class="header-anchor" href="#设计原则" aria-hidden="true">#</a></h3><p><strong>单一职责原则（SRP）</strong></p><p>一个对象或方法只做一件事情。如果一个方法承担了过多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。</p><p>应该把对象或方法划分成较小的粒度</p><p><strong>最少知识原则（LKP）</strong></p><p>一个软件实体应当 尽可能少地与其他实体发生相互作用</p><p>应当尽量减少对象之间的交互。如果两个对象之间不必彼此直接通信，那么这两个对象就不要发生直接的 相互联系，可以转交给第三方进行处理</p><p><strong>开放-封闭原则（OCP）</strong></p><p>软件实体（类、模块、函数）等应该是可以 扩展的，但是不可修改</p><p>当需要改变一个程序的功能或者给这个程序增加新功能的时候，可以使用增加代码的方式，尽量避免改动程序的源代码，防止影响原系统的稳定</p><h3 id="工厂模式" tabindex="-1">工厂模式 <a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a></h3><blockquote><p>工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型（抽象工厂）。</p><p>这个模式十分有用，尤其是创建对象的流程赋值的时候，比如依赖于很多设置文件等。并且，你会经常在程序里看到工厂方法，用于让子类定义需要创建的对象类型。</p><p>工厂模式根据抽象程度的不同可以分为：1.简单工厂 2.工厂方法 3.抽象工厂</p></blockquote><h4 id="_1-简单工厂" tabindex="-1">1.简单工厂 <a class="header-anchor" href="#_1-简单工厂" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let  factory = function (role) {</span></span>
<span class="line"><span style="color:#A6ACCD;">function superman() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name =&#39;超级管理员&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.role = [&#39;修改密码&#39;, &#39;发布消息&#39;, &#39;查看主页&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function commonMan() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = &#39;普通游客&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.role = [&#39;查看主页&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">switch(role) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;superman&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new superman();</span></span>
<span class="line"><span style="color:#A6ACCD;">    break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    case &#39;man&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new commonMan();</span></span>
<span class="line"><span style="color:#A6ACCD;">    break;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new Error(&#39;参数错误&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let superman = factory(&#39;superman&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">let man = factory(&#39;man&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在上述代码中,factory就是一个简单的工厂,该工厂中有二个构造函数分别对应不同的权限。我们只需要传递相应的参数就可以获取一个实例对象了。</p><p>简单工厂的优点: 你只需要传递一个合法的参数,就可以获取到你想要的对象,而无需知道创建的具体的细节。但是在函数内包含了所有对象的构造函数和判断逻辑的代码, 每次如果需要添加一个对象,那么我们需要新增一个构造函数,当我们需要维护的对象不是上面这2个,而是20个或者更多,那么这个函数将会成为超级函数,使得我们难以维护。所以简单工厂模式只适用于在创建时对象数量少,以及逻辑简单的情况。</p><h4 id="_2-工厂方法" tabindex="-1">2.工厂方法 <a class="header-anchor" href="#_2-工厂方法" aria-hidden="true">#</a></h4><p>工厂方法模式本意是将实际创造的对象推迟到子类中,这样核心类就变成了抽象类。但是在js中很难像那些传统面向对象语言那样去实现抽象类,所以在js中我们只需要参考他的思想即可。</p><p>我们可以把工厂函数看成是一个工厂类。在简单模式我们,我们添加一个新的对象需要修改二处地方,在加入工厂方法模式以后,我们只需要修改一处即可。工厂方法的工厂类,他只做实例化这一件事情。我们只需要修改他的原型类即可。我们采用安全模式创建工厂对象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    function Person(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    Person.prototype.getName = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(this.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    function Car(model) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.model = model</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    Car.prototype.getModel = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(this.model);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    function create(type, param) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (this instanceof create) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new this[type](param)</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new create(type, param)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    create.prototype = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      person: Person,</span></span>
<span class="line"><span style="color:#A6ACCD;">      car: Car</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var person1 = new create(&#39;person&#39;, &#39;zhang san&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    var car1 = create(&#39;car&#39;, &#39;Benz&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(person1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(car1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    person1.getName()</span></span>
<span class="line"><span style="color:#A6ACCD;">    car1.getModel()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在上述代码中要是忘记加new了, 那么我们就获取不到Person，Car等构造函数了,使用安全模式可以很好的解决这个问题。</p><p><strong>什么时候使用工厂模式</strong></p><p>工厂模式在应用于以下情况时尤其有用：</p><p>当我们创建的对象或组件涉及到了很高的复杂度。当我们需要根据所处的环境生成不同的对象实例时。当我们处理含有相同属性的对象或组件时。当创建的对象是其他对象的实例，而且要求它们有一致的API接口时。有利于解耦。</p><h3 id="建造者模式" tabindex="-1">建造者模式 <a class="header-anchor" href="#建造者模式" aria-hidden="true">#</a></h3><blockquote><p>建造者模式可以将一个复杂的对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。也就是说如果我们用了建造者模式，那么用户就需要指定需要建造的类型就可以得到它们，而具体建造的过程和细节就不需要知道了。建造者模式实际就是一个指挥者，一个建造者，一个使用指挥者调用具体建造者工作得出结果的客户。</p><p>建造者模式主要用于“分步骤构建一个复杂的对象”，在这其中“分步骤”是一个稳定的算法，而复杂对象的各个部分则经常变化。</p></blockquote><p><strong>建造者模式的作用和注意事项</strong></p><p>模式作用：</p><p>1.分步创建一个复杂的对象</p><p>2.解耦封装过程和具体创建组件</p><p>3.无需关心组件如何组装</p><p>注意事项：</p><p>1.一定要一个稳定的算法进行支持</p><p>2.加工工艺是暴露的</p><p><strong>普通代码</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	   // 应聘者信息</span></span>
<span class="line"><span style="color:#A6ACCD;">         var data = [</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             name: &#39;zhang san&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             age: 23,</span></span>
<span class="line"><span style="color:#A6ACCD;">             work: &#39;engineer&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             name: &#39;li si&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             age: 26,</span></span>
<span class="line"><span style="color:#A6ACCD;">             work: &#39;teacher&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             name: &#39;wang wu&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             age: 13,</span></span>
<span class="line"><span style="color:#A6ACCD;">             work: &#39;xxx&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">         //生成应聘者实例的类</span></span>
<span class="line"><span style="color:#A6ACCD;">         function Candidate(param) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           var _candidate = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">           _candidate.name = param.name</span></span>
<span class="line"><span style="color:#A6ACCD;">           _candidate.age = param.age</span></span>
<span class="line"><span style="color:#A6ACCD;">           _candidate.firstName = _candidate.name.split(&#39; &#39;)[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">           _candidate.secondName = _candidate.name.split(&#39; &#39;)[1]</span></span>
<span class="line"><span style="color:#A6ACCD;">           _candidate.work = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">         	function switchFun(work) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             switch (work) {</span></span>
<span class="line"><span style="color:#A6ACCD;">               case &#39;engineer&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">                 _candidate.work.name = &#39;工程师&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 _candidate.work.description = &#39;热爱编程&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 break;</span></span>
<span class="line"><span style="color:#A6ACCD;">               case &#39;teacher&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">                 _candidate.work.name = &#39;教师&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 _candidate.work.description = &#39;乐于分享&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 break;</span></span>
<span class="line"><span style="color:#A6ACCD;">               default:</span></span>
<span class="line"><span style="color:#A6ACCD;">                 _candidate.work.name = work</span></span>
<span class="line"><span style="color:#A6ACCD;">                 _candidate.work.description = &#39;无&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">           switchFun(param.work)</span></span>
<span class="line"><span style="color:#A6ACCD;">           //更改工作的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">           _candidate.work.changeWork = function (work) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             this.name = work;</span></span>
<span class="line"><span style="color:#A6ACCD;">             switchFun(work)</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">           //更改工作描述的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">           _candidate.work.changeDes = function (des) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             this.description = des</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">           return _candidate</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">         var candidateArr = []</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 遍历生成应聘者实例</span></span>
<span class="line"><span style="color:#A6ACCD;">         for (var i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           candidateArr[i] = Candidate(data[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(candidateArr[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 更改工作名称</span></span>
<span class="line"><span style="color:#A6ACCD;">         candidateArr[0].work.changeWork(&#39;xxx&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(candidateArr[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>使用建造者模式改造</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">        // 应聘者信息</span></span>
<span class="line"><span style="color:#A6ACCD;">         var data = [</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             name: &#39;zhang san&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             age: 23,</span></span>
<span class="line"><span style="color:#A6ACCD;">             work: &#39;engineer&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             name: &#39;li si&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             age: 26,</span></span>
<span class="line"><span style="color:#A6ACCD;">             work: &#39;teacher&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             name: &#39;wang wu&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             age: 13,</span></span>
<span class="line"><span style="color:#A6ACCD;">             work: &#39;xxx&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">         //生成应聘者实例的类</span></span>
<span class="line"><span style="color:#A6ACCD;">         function Candidate(param) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           var _candidate = new Person(param)</span></span>
<span class="line"><span style="color:#A6ACCD;">           _candidate.name = new CreateName(param.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">           _candidate.work = new CreateWork(param.work)</span></span>
<span class="line"><span style="color:#A6ACCD;">           return _candidate</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         function Person(param) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.age = param.age</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         function CreateName(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.wholeName = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.firstName = name.split(&#39; &#39;)[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">           this.secondName = name.split(&#39; &#39;)[1]</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">         function CreateWork(work) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           switch (work) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             case &#39;engineer&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">               this.name = &#39;工程师&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">               this.description = &#39;热爱编程&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">               break;</span></span>
<span class="line"><span style="color:#A6ACCD;">             case &#39;teacher&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">               this.name = &#39;教师&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">               this.description = &#39;乐于分享&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">               break;</span></span>
<span class="line"><span style="color:#A6ACCD;">             default:</span></span>
<span class="line"><span style="color:#A6ACCD;">               this.name = work</span></span>
<span class="line"><span style="color:#A6ACCD;">               this.description = &#39;无&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">           //更改工作的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">           CreateWork.prototype.changeWork = function (work) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             CreateWork.call(this, work)</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">           //更改工作描述的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">           CreateWork.prototype.changeDes = function (des) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             this.description = des</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">         var candidateArr = []</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 遍历生成应聘者实例</span></span>
<span class="line"><span style="color:#A6ACCD;">         for (var i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           candidateArr[i] = Candidate(data[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(candidateArr[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 更改工作名称</span></span>
<span class="line"><span style="color:#A6ACCD;">         candidateArr[0].work.changeWork(&#39;xxx&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(candidateArr[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>对比可以发现，普通代码把所有实现逻辑都放在一个类中，让这个类看起来非常臃肿阅读性差，而建造者模式会分步骤，一步步简化每个类里面的代码量，从而提高阅读性</p><h3 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-hidden="true">#</a></h3><blockquote><p>单例就是保证一个类只有一个实例，实现方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。</p></blockquote><p>问题：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    function NotSingle() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.a = 123</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var a1 = new NotSingle()</span></span>
<span class="line"><span style="color:#A6ACCD;">    var a2 = new NotSingle()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a1 === a2);   //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>同一个类创造的实例不相等，如果就想他们想相等呢？</p><p>可以采用单例模式来进行改造</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">   var _unique = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    function createSingle() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        a: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (_unique === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        _unique = obj</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return _unique</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var a = createSingle()</span></span>
<span class="line"><span style="color:#A6ACCD;">    var b = createSingle()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a === b);  //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面这种方法虽然可以实现单例模式，但是由于实例对象定义在全局中，不安全，下面使用闭包来进行改造</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> //使用闭包进行改造</span></span>
<span class="line"><span style="color:#A6ACCD;">    var createSingle = (function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var _unique = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      function single() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">          a: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (_unique === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          _unique = single()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return _unique</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })()</span></span>
<span class="line"><span style="color:#A6ACCD;">    var a = createSingle()</span></span>
<span class="line"><span style="color:#A6ACCD;">    var b = createSingle()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a === b);  //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="装饰者模式" tabindex="-1">装饰者模式 <a class="header-anchor" href="#装饰者模式" aria-hidden="true">#</a></h3><blockquote><p>装饰者模式，希望在不改变原对象的基础上，通过对其拓展功能和属性来实现更复杂的逻辑。</p></blockquote><p>有一个案例：4s店在卖一种车，价格为10万元，如果用户需要在此基础上加装一些配置则需要加钱。比如加热座椅配置需要2万元，电动后视镜需要0.8万元等等</p><p><strong>普通写法：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  function Car() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.price = 10</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    Car.prototype = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      addHeatSeat: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.hasHeatSeat = true</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.price += 2</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      addAutoMirror: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.hasAutoMirror = true</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.price += 0.8</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var car1 = new Car()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(car1.price);  //10</span></span>
<span class="line"><span style="color:#A6ACCD;">    car1.addHeatSeat()</span></span>
<span class="line"><span style="color:#A6ACCD;">    car1.addAutoMirror()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(car1.price);  //12.8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>装饰者模式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	function Car() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.price = 10</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    function carWithHeatSeat(carExample) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      carExample.hasHeatSeat = true</span></span>
<span class="line"><span style="color:#A6ACCD;">      carExample.price += 2</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    function carWithHeatMirror(carExample) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      carExample.hasAutoMirror = true</span></span>
<span class="line"><span style="color:#A6ACCD;">      carExample.price += 0.8</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    var car2 = new Car();</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(car2.price); //10</span></span>
<span class="line"><span style="color:#A6ACCD;">    carWithHeatSeat(car2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    carWithHeatMirror(car2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(car2.price); //12.8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>两种模式对比，装饰者模式是独立与构造函数之外的函数，这样就能减少对构造函数的介入</p><h3 id="组合模式" tabindex="-1">组合模式 <a class="header-anchor" href="#组合模式" aria-hidden="true">#</a></h3><blockquote><p>组合模式作用于将多个部分通过组合变成一个整体。</p></blockquote><p>比如我们在工作中经常会制作一些表单，比如登录，注册，或者一些信息填写等等，这些表单其实都是类似的，如果你今天制作一个注册的表单，明天做个调查问卷的表单，是不是会觉得很妈蛋，有点重复劳动的感觉？</p><p>组合模式可以解决这个问题</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //寄生式组合继承</span></span>
<span class="line"><span style="color:#A6ACCD;">    function inheritPrototype(subClass, superClass) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      function F() { }</span></span>
<span class="line"><span style="color:#A6ACCD;">      F.prototype = superClass.prototype;</span></span>
<span class="line"><span style="color:#A6ACCD;">      subClass.prototype = new F()</span></span>
<span class="line"><span style="color:#A6ACCD;">      subClass.prototype.constructor = subClass</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //组合继承</span></span>
<span class="line"><span style="color:#A6ACCD;">    // function inheritPrototype(subClass, superClass) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   subClass.prototype = new superClass()</span></span>
<span class="line"><span style="color:#A6ACCD;">    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //基类</span></span>
<span class="line"><span style="color:#A6ACCD;">    function Container() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      aa</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.children = []</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element = null</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    Container.prototype = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      init: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;请重写init方法&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      add: function (child) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.children.push(child)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.appendChild(child.element)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //基于容器基类创建表单容器</span></span>
<span class="line"><span style="color:#A6ACCD;">    function CreateForm(id, method, action, parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Container.call(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.id = id || &#39;get&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.method = method || &#39;get&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.action = action || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.parent = parent</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.init()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    inheritPrototype(CreateForm, Container)</span></span>
<span class="line"><span style="color:#A6ACCD;">    CreateForm.prototype.init = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element = document.createElement(&#39;form&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.id = this.id</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.method = this.method</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.action = this.action</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    CreateForm.prototype.show = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.parent.appendChild(this.element)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //行容器组件</span></span>
<span class="line"><span style="color:#A6ACCD;">    function CreateLine(className) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Container.call(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.className = className === undefined ? &#39;form-line&#39; : &#39;form-line&#39; + className</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.init()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    inheritPrototype(CreateLine, Container)</span></span>
<span class="line"><span style="color:#A6ACCD;">    CreateLine.prototype.init = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.className = this.className</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //label</span></span>
<span class="line"><span style="color:#A6ACCD;">    function CreateLabel(text, forName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.text = text || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.forName = forName || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.init()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    CreateLabel.prototype.init = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element = document.createElement(&#39;label&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.setAttribute(&#39;for&#39;, this.forName)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.innerHTML = this.text</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //input</span></span>
<span class="line"><span style="color:#A6ACCD;">    function CreateInput(type, id, name, defaultValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.type = type || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.id = id || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.name = name || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.defaultValue = defaultValue || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.init()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    CreateInput.prototype.init = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element = document.createElement(&#39;input&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.type = this.type</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.id = this.id</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.name = this.name</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.element.value = this.defaultValue</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    var form = new CreateForm(&#39;owner-form&#39;, &#39;GET&#39;, &#39;https://www.baidu.com/s&#39;, document.body)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(new CreateLine());</span></span>
<span class="line"><span style="color:#A6ACCD;">    var userLine = new CreateLine()</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateLabel(&#39;用户名&#39;, &#39;user&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateInput(&#39;text&#39;, &#39;user&#39;, &#39;wd&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    var pwdLine = new CreateLine()</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateLabel(&#39;密码&#39;, &#39;pwd&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateInput(&#39;password&#39;, &#39;pwd&#39;, &#39;pwd&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    var submitLine = new CreateLine()</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateInput(&#39;submit&#39;, &#39;&#39;, &#39;&#39;, &#39;登录&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    form.add(userLine).add(pwdLine).add(submitLine).show()</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用ES6 class来改造</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //基类</span></span>
<span class="line"><span style="color:#A6ACCD;">    class Container {</span></span>
<span class="line"><span style="color:#A6ACCD;">      constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.children = [],</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.element = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw new Error(&#39;请重写init方法&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      add(child) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.children.push(child)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.appendChild(child.element)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //基于容器基类创建表单容器</span></span>
<span class="line"><span style="color:#A6ACCD;">    class CreateForm extends Container {</span></span>
<span class="line"><span style="color:#A6ACCD;">      constructor(id, method, action, parent) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.id = id || &#39;get&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.method = method || &#39;get&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.action = action || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.parent = parent</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.init()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element = document.createElement(&#39;form&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.id = this.id</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.method = this.method</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.action = this.action</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      show() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.parent.appendChild(this.element)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //行容器组件</span></span>
<span class="line"><span style="color:#A6ACCD;">    class CreateLine extends Container {</span></span>
<span class="line"><span style="color:#A6ACCD;">      constructor(className) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        super()</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.className = className === undefined ? &#39;form-line&#39; : &#39;form-line&#39; + className</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.init()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.className = this.className</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //label类</span></span>
<span class="line"><span style="color:#A6ACCD;">    class CreateLabel {</span></span>
<span class="line"><span style="color:#A6ACCD;">      constructor(text, forName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.text = text || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.forName = forName || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.init()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element = document.createElement(&#39;label&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.setAttribute(&#39;for&#39;, this.forName)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.innerHTML = this.text</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //input类</span></span>
<span class="line"><span style="color:#A6ACCD;">    class CreateInput {</span></span>
<span class="line"><span style="color:#A6ACCD;">      constructor(type, id, name, defaultValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.type = type || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.id = id || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name = name || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.defaultValue = defaultValue || &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.init()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element = document.createElement(&#39;input&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.type = this.type</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.id = this.id</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.name = this.name</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element.value = this.defaultValue</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    var form = new CreateForm(&#39;owner-form&#39;, &#39;GET&#39;, &#39;https://www.baidu.com/s&#39;, document.body)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(new CreateLine());</span></span>
<span class="line"><span style="color:#A6ACCD;">    var userLine = new CreateLine()</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateLabel(&#39;用户名&#39;, &#39;user&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateInput(&#39;text&#39;, &#39;user&#39;, &#39;wd&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    var pwdLine = new CreateLine()</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateLabel(&#39;密码&#39;, &#39;pwd&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateInput(&#39;password&#39;, &#39;pwd&#39;, &#39;pwd&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    var submitLine = new CreateLine()</span></span>
<span class="line"><span style="color:#A6ACCD;">      .add(new CreateInput(&#39;submit&#39;, &#39;&#39;, &#39;&#39;, &#39;登录&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    form.add(userLine).add(pwdLine).add(submitLine).show()</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="观察者模式" tabindex="-1">观察者模式 <a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a></h3><blockquote><p>观察者模式又叫发布订阅模式或者消息模式。</p><p>是设计模式中非常著名也是非常重要的一种模式，这种模式一般会定义一个主体和众多的个体，这里主体可以想象为一个消息中心，里面有各种</p><p>各样的消息，众多的个体可以订阅不同的消息，当未来消息中心发布某条消息的时候，订阅过他的个体就会得到通知</p></blockquote><p>核心：</p><p>​ 取代对象之间硬编码的通知机制，一个对象不用再显式地调用另外一个对象的某个接口。</p><p>​ 与传统的发布-订阅模式实现方式（将订阅者自身当成引用传入发布者）不同，在JS中通常使用注册回调函数的形式来订阅</p><p>实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    //订阅发布中心</span></span>
<span class="line"><span style="color:#A6ACCD;">    var msgCenter = (function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var _msg = {};  //储存消息</span></span>
<span class="line"><span style="color:#A6ACCD;">      // var _msg = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //   &#39;carInfo&#39; : [fn1,fn2...],</span></span>
<span class="line"><span style="color:#A6ACCD;">      //   &#39;newsInfo&#39;: [fn1,fn2...],</span></span>
<span class="line"><span style="color:#A6ACCD;">      //    ......</span></span>
<span class="line"><span style="color:#A6ACCD;">      // }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //用于订阅一个消息</span></span>
<span class="line"><span style="color:#A6ACCD;">        subscribe: function (type, fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (_msg[type]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            _msg[type].push(fn)</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            _msg[type] = [fn]</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        //用于发布消息</span></span>
<span class="line"><span style="color:#A6ACCD;">        release: function (type, args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (!_msg[type]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          var event = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: type,</span></span>
<span class="line"><span style="color:#A6ACCD;">            args: args || {}</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          for (let index = 0; index &lt; _msg[type].length; index++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            _msg[type][index](event)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        //用于取消订阅消息</span></span>
<span class="line"><span style="color:#A6ACCD;">        cancel: function (type, fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (!_msg[type]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          for (let index = 0; index &lt; _msg[type].length; index++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (_msg[type][index] === fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              _msg[type].splice(index, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">              break</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })()</span></span>
<span class="line"><span style="color:#A6ACCD;">    //订阅者类</span></span>
<span class="line"><span style="color:#A6ACCD;">    function Person() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.alreadysubscribe = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">      Person.prototype.subscribe = function (type, fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //防止重复订阅</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.alreadysubscribe[type]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;你已经订阅过这个消息了，请不要重复订阅！&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          msgCenter.subscribe(type, fn)</span></span>
<span class="line"><span style="color:#A6ACCD;">          //这句话是为了保存每个实例的订阅回调方法，通过对比，可以防止重复订阅</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.alreadysubscribe[type] = fn</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      Person.prototype.cancel = function (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        msgCenter.cancel(type, this.alreadysubscribe[type])</span></span>
<span class="line"><span style="color:#A6ACCD;">        delete this.alreadysubscribe[type]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var person1 = new Person()</span></span>
<span class="line"><span style="color:#A6ACCD;">    var person2 = new Person()</span></span>
<span class="line"><span style="color:#A6ACCD;">    var person3 = new Person()</span></span>
<span class="line"><span style="color:#A6ACCD;">    //订阅</span></span>
<span class="line"><span style="color:#A6ACCD;">    person1.subscribe(&#39;carInfo&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;person1得到了关于&#39; + e.type + &#39;的消息，消息内容是：&#39; + e.args.info);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    person1.subscribe(&#39;newsInfo&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;person1得到了关于&#39; + e.type + &#39;的消息，消息内容是：&#39; + e.args.info);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    person2.subscribe(&#39;carInfo&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;person2得到了关于&#39; + e.type + &#39;的消息，消息内容是：&#39; + e.args.info);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    person3.subscribe(&#39;newsInfo&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;person3得到了关于&#39; + e.type + &#39;的消息，消息内容是：&#39; + e.args.info);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    person3.subscribe(&#39;carInfo&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;person3得到了关于&#39; + e.type + &#39;的消息，消息内容是：&#39; + e.args.info);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    //发布消息</span></span>
<span class="line"><span style="color:#A6ACCD;">    msgCenter.release(&#39;carInfo&#39;, { info: &#39;新款汽车上市！&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    msgCenter.release(&#39;newsInfo&#39;, { info: &#39;某国家领导人访华&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    //测试检测重复订阅功能</span></span>
<span class="line"><span style="color:#A6ACCD;">    person3.subscribe(&#39;carInfo&#39;, function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;person3得到了关于&#39; + e.type + &#39;的消息，消息内容是：&#39; + e.args.info);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    //测试取消订阅功能</span></span>
<span class="line"><span style="color:#A6ACCD;">    person3.cancel(&#39;carInfo&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    msgCenter.release(&#39;carInfo&#39;,{info:&#39;再发一条消息&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码实现的核心是把每个实例的函数传递给msgCenter函数中的_msg数组保存好，并且通过type属性来进行区分，如果有消息发布，就全部执行一遍该数组的所有方法</p><h3 id="策略模式" tabindex="-1">策略模式 <a class="header-anchor" href="#策略模式" aria-hidden="true">#</a></h3><blockquote><p>strategy，</p><p>在现实生活中常常遇到实现某种目标存在多种策略可供选择的情况，例如，出行旅游可以乘坐飞机、乘坐火车、骑自行车或自己开私家车等，超市促销可以釆用打折、送商品、送积分等方法。</p><p>在软件开发中也常常遇到类似的情况，当实现某一个功能存在多种算法或者策略，我们可以根据环境或者条件的不同选择不同的算法或者策略来完成该功能，如数据排序策略有冒泡排序、选择排序、插入排序、二叉树排序等。</p><p>如果使用多重条件转移语句实现（即硬编码），不但使条件语句变得很复杂，而且增加、删除或更换算法要修改原代码，不易维护，违背开闭原则。如果采用策略模式就能很好解决该问题。</p></blockquote><p>通俗解析:</p><blockquote><p>假设一段文字需要进行检测是否为数字，是否为空，是否是邮箱等等，一般来说我们会使用if_else来进行判断，如果既要检测是否为数字又是否为电话号码，那么就需要两个if_else，且灵活性和复用性并不强，而策略模式是把一大堆需要用到的检测方法或者算法或者功能封装到一个对象中，并且为对象配置validate方法，用以调用对象中的方法，随便用，一个或者多个，复用，都没问题</p></blockquote><p>例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;input type=&quot;text&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //策略模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    var formStrategy = (function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var strategy = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        notEmpty: function (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return value.length ? &#39;&#39; : &#39;请填写内容&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        isNumber: function (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var reg = /^[0-9]+(\\.[0-9])?$/;</span></span>
<span class="line"><span style="color:#A6ACCD;">          return reg.test(value) ? &#39;&#39; : &#39;请填写一个数字&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        isPhone: function (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //010-12345678 0022-1234567</span></span>
<span class="line"><span style="color:#A6ACCD;">          var reg = /^\\d{3}-\\d{8}$|^\\d{4}-\\d{7}$/</span></span>
<span class="line"><span style="color:#A6ACCD;">          return reg.test(value) ? &#39;&#39; : &#39;请输入一个正确的电话好吗&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 检测方法，type是输入要检测的类型，value是值</span></span>
<span class="line"><span style="color:#A6ACCD;">        validate: function (type, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //去除输入文字两边的空白符</span></span>
<span class="line"><span style="color:#A6ACCD;">          value = value.replace(/^\\s*|\\s*$/g, &quot;&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">          return strategy[type] ? strategy[type](value) : &#39;没有这个检测方法，请手动添加&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        //临时添加自定义检测算法</span></span>
<span class="line"><span style="color:#A6ACCD;">        addStrategy: function (type, fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (strategy[type]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return &#39;这个方法已经存在&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            strategy[type] = fn</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })()</span></span>
<span class="line"><span style="color:#A6ACCD;">    //测试</span></span>
<span class="line"><span style="color:#A6ACCD;">    var oInput = document.querySelector(&#39;input&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    oInput.onchange = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var result;</span></span>
<span class="line"><span style="color:#A6ACCD;">      result = formStrategy.validate(&#39;notEmpty&#39;, this.value) || formStrategy.validate(&#39;isNumber&#39;, this.value) || &#39;通过检测&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(result);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="链模式" tabindex="-1">链模式 <a class="header-anchor" href="#链模式" aria-hidden="true">#</a></h3><blockquote><p>链模式是实现链式调用的主要方法，通过在自身方法中返回自身的方式，在一个对象连续多次调用自身方法可以简化写法</p><p>这种链式调用在开很多库和框架如jquery/zepto中频繁的被使用。</p></blockquote><p>简单的链模式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      a: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;aaa&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      b: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;bbb&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    obj.a().b().a().a()    ///aaa bbb aaa aaa</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="委托模式" tabindex="-1">委托模式 <a class="header-anchor" href="#委托模式" aria-hidden="true">#</a></h3><blockquote><p>当多个对象需要处理同一请求时，可以将这些请求交由另一个对象统一处理</p></blockquote><p>普通模式</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ul class=&quot;ul1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;aaaa&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;bbbb&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;cccc&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;dddd&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     var aLis = document.getElementsByTagName(&#39;li&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     for (let index = 0; index &lt; aLis.length; index++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       (function (i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        aLis[index].onclick = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">           console.log(index);</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       })(index)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这样会绑定多个事件，会影响性能</p><p>使用委托模式进行改进：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ul class=&quot;ul1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;aaaa&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;bbbb&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;cccc&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;li&gt;dddd&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var oUl = document.querySelector(&#39;ul&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    oUl.onclick = function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(e);</span></span>
<span class="line"><span style="color:#A6ACCD;">      var e = e || window.event</span></span>
<span class="line"><span style="color:#A6ACCD;">      target = e.target || e.srcElement</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(target.nodeName.toLowerCase() === &#39;li&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(target.innerHTML);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var oLi = document.createElement(&#39;li&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    oLi.innerHTMl = &#39;eeee&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    oUl.appendChild(oLi)</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="数据访问对象模式" tabindex="-1">数据访问对象模式 <a class="header-anchor" href="#数据访问对象模式" aria-hidden="true">#</a></h3><blockquote><p>数据访问对象模式主要是用来抽象和封装一个对象来对数据源进行访问和存储，这样可以方便对数据的管理，以及避免数据间的重复，覆盖等问题</p></blockquote><p>实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   key: expire|value</span></span>
<span class="line"><span style="color:#A6ACCD;">    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">    function DataVisitor(splitSign) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.splitSign = splitSign || &#39;|&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    DataVisitor.prototype = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      status: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        SUCCESS: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        FAILURE: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">        OVERFLOWER: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">        TIMEOUT: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      set: function (key, value, cbFn, expireTime) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var status = this.status.SUCCESS;</span></span>
<span class="line"><span style="color:#A6ACCD;">        expireTime = typeof expireTime === &#39;number&#39; ? expireTime + new Date().getTime() : -1</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">          window.localStorage.setItem(key, expireTime + this.splitSign + value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        } catch (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          status = this.status.OVERFLOWER</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        cbFn &amp;&amp; cbFn.call(this, status, key, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return value</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      get: function (key, cbFn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var status = this.status.SUCCESS</span></span>
<span class="line"><span style="color:#A6ACCD;">        var value = window.localStorage.getItem(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var index = value.indexOf(this.splitSign),</span></span>
<span class="line"><span style="color:#A6ACCD;">            time = value.slice(0, index)</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (time &gt; new Date().getTime() || time == -1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            value = value.slice(index + this.splitSign.length)</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            value = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">            status = this.status.TIMEOUT;</span></span>
<span class="line"><span style="color:#A6ACCD;">            window.localStorage.removeItem(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          status = this.status.FAILURE</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        cbFn &amp;&amp; cbFn.call(this, status, key, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      remove: function (key, cbFn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var status = this.status.FAILURE;</span></span>
<span class="line"><span style="color:#A6ACCD;">        value = window.localStorage.getItem(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          value.slice(value.indexOf(this.splitSign) + this.splitSign.length)</span></span>
<span class="line"><span style="color:#A6ACCD;">          window.localStorage.removeItem(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">          status = this.status.SUCCESS;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        cbFn &amp;&amp; cbFn.call(this, status)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    var test = new DataVisitor();</span></span>
<span class="line"><span style="color:#A6ACCD;">    test.set(&#39;aaa&#39;, &#39;1273&#39;, function (status) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(Boolean(status));</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    test.get(&#39;aaa&#39;, function (status, key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(status, key, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      test.get(&#39;aaa&#39;, function (status, key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(status, key, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      test.get(&#39;aaa&#39;, function (status, key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(status, key, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 3000);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // test.remove(&#39;aaa&#39;,function (status) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //    console.log(Boolean(status));</span></span>
<span class="line"><span style="color:#A6ACCD;">    // })</span></span>
<span class="line"><span style="color:#A6ACCD;">    // test.remove(&#39;aaab&#39;, function (status) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     console.log(Boolean(status));</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   })</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="等待者模式" tabindex="-1">等待者模式 <a class="header-anchor" href="#等待者模式" aria-hidden="true">#</a></h3><blockquote><p>通过对多个异步进程的监听，对未来事件进行统一管理。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> //等待对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    var Writer = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var dfd = [],//等待对象容器,When中传入的异步执行方法，实为事件对象数组</span></span>
<span class="line"><span style="color:#A6ACCD;">        doneArr = [],//成功回调方法容器，用于存放done中传入的成功回调方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        failArr = [],//失败回调方法容器，用于存放fail中传入的失败回调方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        slice = Array.prototype.slice,</span></span>
<span class="line"><span style="color:#A6ACCD;">        that = this;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      //监控对象类</span></span>
<span class="line"><span style="color:#A6ACCD;">      var Primise = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //监控成功状态</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.resolved = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        //监控失败状态</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.rejected = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      //扩展对异步逻辑的监控方法，这两个方法都是因异步逻辑状态的改变而执行相应操作的</span></span>
<span class="line"><span style="color:#A6ACCD;">      Primise.prototype = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //解决成功</span></span>
<span class="line"><span style="color:#A6ACCD;">        resolve: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //设置当前监控对象解决成功，每一个事件都有自己独立的监控对象，</span></span>
<span class="line"><span style="color:#A6ACCD;">          //都有自己的独立成功状态与失败状态</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.resolved = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">          //如果没有监控对象则取消执行</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (!dfd.length) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">          //遍历所有注册了的监控对象</span></span>
<span class="line"><span style="color:#A6ACCD;">          for (var i = dfd.length - 1; i &gt;= 0; i--) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            //如果有任意一个监控对象没有被解决或者解决失败则返回</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (dfd[i] &amp;&amp; !dfd[i].resolved || dfd[i].rejected) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              return;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            //如果已经解决则清除已解决监控对象</span></span>
<span class="line"><span style="color:#A6ACCD;">            dfd.splice(i, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //执行解决成功回调方法</span></span>
<span class="line"><span style="color:#A6ACCD;">          _exec(doneArr);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        //解决失败</span></span>
<span class="line"><span style="color:#A6ACCD;">        reject: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //设置当前监控对象解决失败</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.rejected = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">          //如果没有监控对象则取消执行</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (!dfd.length) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">          //清除所有监控对象</span></span>
<span class="line"><span style="color:#A6ACCD;">          dfd.splice(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">          //执行解决失败回调方法</span></span>
<span class="line"><span style="color:#A6ACCD;">          _exec(failArr);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //创建监控对象</span></span>
<span class="line"><span style="color:#A6ACCD;">      that.Deferred = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return new Primise();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //监控异步方法 参数：监控对象，用于监测已经注册过的监控对象的异步逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">      that.When = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //设置监控对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        dfd = slice.call(arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var i = dfd.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (--i; i &gt;= 0; i--) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //如果不存在监控对象，或者监控对象已经解决，或者不是监控对象</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (!dfd[i] || dfd[i].resolved || dfd[i].rejected || !dfd[i] instanceof Primise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            //清除当前监控对象</span></span>
<span class="line"><span style="color:#A6ACCD;">            dfd.splice(i, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return that;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //解决成功回调函数添加方法，用于向对应的回调容器中添加相应回调</span></span>
<span class="line"><span style="color:#A6ACCD;">      that.done = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        doneArr = doneArr.concat(slice.call(arguments));</span></span>
<span class="line"><span style="color:#A6ACCD;">        return that;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //解决失败回调函数添加方法，用于向对应的回调容器中添加相应回调</span></span>
<span class="line"><span style="color:#A6ACCD;">      that.fail = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        failArr = failArr.concat(slice.call(arguments));</span></span>
<span class="line"><span style="color:#A6ACCD;">        return that;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //回调执行方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      function _exec(arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //遍历回调数组执行回调,注意，此处为了按先后顺序执行，不能用逆向循环</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (var i = 0, len = arr.length; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          try {</span></span>
<span class="line"><span style="color:#A6ACCD;">            arr[i] &amp;&amp; arr[i]();</span></span>
<span class="line"><span style="color:#A6ACCD;">          } catch (e) { }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //运用场景模拟：假设页面中有多个随机运动的彩蛋，每个彩蛋结束后都要展示一个欢迎页面</span></span>
<span class="line"><span style="color:#A6ACCD;">    var waiter = new Writer();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //第1个彩蛋，5秒后停止</span></span>
<span class="line"><span style="color:#A6ACCD;">    var first = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //创建监听对象</span></span>
<span class="line"><span style="color:#A6ACCD;">      var dtd = waiter.Deferred();</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;first&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        //发布解决成功消息，执行解决成功回调，</span></span>
<span class="line"><span style="color:#A6ACCD;">        //当在执行成功回调时，同时会检查其他事件的最后状态，</span></span>
<span class="line"><span style="color:#A6ACCD;">        //如果其他事件都已经成功执行，则执行成功回调</span></span>
<span class="line"><span style="color:#A6ACCD;">        //如果有其他事件还未执行完毕，则只负责把自己的状态设置为成功，</span></span>
<span class="line"><span style="color:#A6ACCD;">        dtd.resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 500);</span></span>
<span class="line"><span style="color:#A6ACCD;">      //返回监听对象</span></span>
<span class="line"><span style="color:#A6ACCD;">      return dtd;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //第2个彩蛋，10秒后停止</span></span>
<span class="line"><span style="color:#A6ACCD;">    var second = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //创建监听对象</span></span>
<span class="line"><span style="color:#A6ACCD;">      var dtd = waiter.Deferred();</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;second&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        //发布解决成功消息</span></span>
<span class="line"><span style="color:#A6ACCD;">        dtd.resolve();//</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">      //返回监听对象</span></span>
<span class="line"><span style="color:#A6ACCD;">      return dtd;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //最后，我们用等待者对象监听两个彩蛋的工作状态，并执行相应的成功回调与失败回调</span></span>
<span class="line"><span style="color:#A6ACCD;">    waiter</span></span>
<span class="line"><span style="color:#A6ACCD;">      .When(first, second)//把异步方法加入when当中监听</span></span>
<span class="line"><span style="color:#A6ACCD;">      .done(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //把成功回调方法加入donearr中保存，在监听的事件中，</span></span>
<span class="line"><span style="color:#A6ACCD;">        //只要有一个事件的最终状态为失败，则整个结果为失败，成功队列中的方法不再执行</span></span>
<span class="line"><span style="color:#A6ACCD;">        //当且仅当所有的最终结果为成功，才算成功，才会执行done中方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;success&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;success again&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      .fail(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //把失败回调方法加入failarr中保存，只要有一个事件的最终结果为失败，则执行失败回调方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;fail&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, function () {//把失败回调方法加入failarr中保存</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;fail again&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     //first</span></span>
<span class="line"><span style="color:#A6ACCD;">     //second</span></span>
<span class="line"><span style="color:#A6ACCD;">     //success</span></span>
<span class="line"><span style="color:#A6ACCD;">     //success again</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="mvc模式" tabindex="-1">MVC模式 <a class="header-anchor" href="#mvc模式" aria-hidden="true">#</a></h3><blockquote><p>MVC即Model-View-Controller（模型-视图-控制器）是一种软件设计模式，最早出现在Smalltalk语言中，后被Sun公司推荐为Java EE平台的设计模式。</p></blockquote><p>MVC把应用程序分成了上面3个核心模块，这3个模块又可被称为业务层-视图层-控制层。顾名思义，它们三者在应用程序中的主要作用如下：</p><p><strong>业务层</strong>：负责实现应用程序的业务逻辑，封装有各种对数据的处理方法。它不关心它会如何被视图层显示或被控制器调用，它只接受数据并处理，然后返回一个结果。</p><p><strong>视图层</strong>：负责应用程序对用户的显示，它从用户那里获取输入数据并通过控制层传给业务层处理，然后再通过控制层获取业务层返回的结果并显示给用户。</p><p><strong>控制层</strong>：负责控制应用程序的流程，它接收从视图层传过来的数据，然后选择业务层中的某个业务来处理，接收业务层返回的结果并选择视图层中的某个视图来显示结果。</p><p><img src="https://t11.baidu.com/it/u=3066061642,1532806395&amp;fm=173&amp;app=25&amp;f=JPEG?w=504&amp;h=300&amp;s=A983CC1223DA6DC80A761159020050FA" alt="img"></p><p>在MVC里，View是可以直接访问Model的，所以View里会包含Model信息以及一些业务逻辑。 MVC模型关注的是Model的不变，所以在MVC模型里，Model不依赖于View，但是 View是依赖于Model的。不仅如此，因为有一些业务逻辑在View里实现了，导致要更改View也是比较困难的，至少那些业务逻辑是无法重用的。</p><p>代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //一个简单的mvc实例</span></span>
<span class="line"><span style="color:#A6ACCD;">    var MVC = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    MVC.model = (function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var data = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        sidebar: [{</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &#39;sidebar1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          href: &#39;./a.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, {</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &#39;sidebar2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          href: &#39;./b.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, {</span></span>
<span class="line"><span style="color:#A6ACCD;">          title: &#39;sidebar3&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          href: &#39;http://www.baidu.com&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        getData: function (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return data[key]</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        setData: function (key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          data[key] = value</span></span>
<span class="line"><span style="color:#A6ACCD;">          MVC.view(&#39;createSidebar&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    MVC.view = (function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var m = MVC.model</span></span>
<span class="line"><span style="color:#A6ACCD;">      var view = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        createSidebar: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var data = m.getData(&#39;sidebar&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">          var html = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          html += &#39;&lt;div id =&quot;#sidebar&quot;&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          for (let i = 0; i &lt; data.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            html += &#39;&lt;div class=&quot;sidebar-item&quot;&gt;&lt;a href=&quot;&#39; + data[i].href + &#39;&quot;&gt;&#39; + data[i].title + &#39;&lt;/a&gt;&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          html += &#39;&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          document.body.innerHTML += html</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return function (v) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        view[v]()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    MVC.ctrl = (function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var m = MVC.model</span></span>
<span class="line"><span style="color:#A6ACCD;">      var v = MVC.view</span></span>
<span class="line"><span style="color:#A6ACCD;">      var c = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        initSideBar: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          v(&#39;createSidebar&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        updateSiderBar: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          m.setData(&#39;sidebar&#39;, [{ title: &#39;new sidebar&#39;, href: &#39;http://www.baidu.com&#39; }])</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return c</span></span>
<span class="line"><span style="color:#A6ACCD;">    })()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    window.onload = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //从control修改model</span></span>
<span class="line"><span style="color:#A6ACCD;">      MVC.ctrl.initSideBar()</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        MVC.ctrl.updateSiderBar()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 3000);</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        MVC.view(&#39;createSidebar&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 6000);</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        MVC.view(&#39;createSidebar&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 9000);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="mvvm模式" tabindex="-1">MVVM模式 <a class="header-anchor" href="#mvvm模式" aria-hidden="true">#</a></h3><blockquote><p>MVVM模式在传统MVC模式下进行改造，实现其重在数据驱动视图的一种设计模式。</p></blockquote><img src="https://i.loli.net/2021/02/27/WZCXuRrNTIUvdHf.png" alt="image-20210219030956917" style="zoom:67%;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //如何实现数据与视图绑定</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1、需要知道哪个数据改变了。一般我们可以使用数据访问对象的方法。在vue中我们使用的是es5的对象访问属性get/set</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2、修改视图</span></span>
<span class="line"><span style="color:#A6ACCD;">    var model = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      b: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // vm</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (var key in model) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      ; (function (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var value = model[key]</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.defineProperty(model, key, {</span></span>
<span class="line"><span style="color:#A6ACCD;">          get: function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return value</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          set: function (newVal) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            value = newVal</span></span>
<span class="line"><span style="color:#A6ACCD;">            render()</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      })(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //view</span></span>
<span class="line"><span style="color:#A6ACCD;">    let render = (function render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;render执行了&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      document.body.innerHTML = &#39;&lt;div&gt;&lt;h3&gt;想显示一些文案&lt;/h3&gt;&lt;p&gt;a的值: &#39; + model.a + &#39;,b的值：&#39; + model.b + &#39;&lt;/p&gt;&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return render</span></span>
<span class="line"><span style="color:#A6ACCD;">    })()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      model.b = 3</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 2000);</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      model.b = 11111</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 3000);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>MVC与MVVM的区别</strong></p><p>在MVC里，View是可以直接访问Model的，所以View里会包含Model信息以及一些业务逻辑。 MVC模型关注的是Model的不变，所以在MVC模型里，Model不依赖于View，但是 View是依赖于Model的。不仅如此，因为有一些业务逻辑在View里实现了，导致要更改View也是比较困难的，至少那些业务逻辑是无法重用的。</p><p>MVVM在概念上是真正将页面与数据逻辑分离的模式，它把数据绑定工作放到一个JS里去实现，而这个JS文件的主要功能是完成数据的绑定，即把model绑定到UI的元素上。此外MVVM另一个重要特性双向绑定，它更方便你去同时维护页面上都依赖于某个字段的N个区域，而不用手动更新它们。</p>`,119),o=[e];function t(c,C,i,A,r,y){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
