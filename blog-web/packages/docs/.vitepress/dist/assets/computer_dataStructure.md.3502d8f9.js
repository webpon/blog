import{_ as s,c as n,o as a,a as l}from"./app.cf50a950.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"栈（stack)","slug":"栈-stack","link":"#栈-stack","children":[]},{"level":3,"title":"队列(queue)","slug":"队列-queue","link":"#队列-queue","children":[]},{"level":3,"title":"链表结构","slug":"链表结构","link":"#链表结构","children":[]},{"level":3,"title":"集合结构","slug":"集合结构","link":"#集合结构","children":[]},{"level":3,"title":"字典结构","slug":"字典结构","link":"#字典结构","children":[]},{"level":3,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]},{"level":3,"title":"树（tree)","slug":"树-tree","link":"#树-tree","children":[]}],"relativePath":"computer/dataStructure.md"}'),p={name:"computer/dataStructure.md"},e=l(`<h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h3><blockquote><p>数据结构是相互之间存在一种或多种特定关系的数据元素的集合</p></blockquote><h3 id="栈-stack" tabindex="-1">栈（stack) <a class="header-anchor" href="#栈-stack" aria-hidden="true">#</a></h3><blockquote><p>栈是一种操作受限的线性表只允许从一端插入和删除数据。</p><p>栈有两种存储方式，即线性存储和链接存储（链表）。栈的一个最重要的特征就是栈的插入和删除只能在栈顶进行，所以每次删除的元素都是最后进栈的元素，故栈也被称为后进先出（LIFO）表。每个栈都有一个栈顶指针，它初始值为-1，且总是指向最后一个入栈的元素，栈有两种处理方式，即进栈（push）和出栈（pop），因为在进栈只需要移动一个变量存储空间，所以它的时间复杂度为O(1)，但是对于出栈分两种情况，栈未满时，时间复杂度也为O(1)，但是当栈满时，需要重新分配内存，并移动栈内所有数据，所以此时的时间复杂度为O(n)。以下举例栈结构的两种实现方式，线性存储和链接存储。</p></blockquote><h4 id="javascript栈的实现-线性存储" tabindex="-1">javascript栈的实现（线性存储） <a class="header-anchor" href="#javascript栈的实现-线性存储" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    //封装栈类</span></span>
<span class="line"><span style="color:#A6ACCD;">    function Stack() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //栈中的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.items = []</span></span>
<span class="line"><span style="color:#A6ACCD;">      //栈的相关操作</span></span>
<span class="line"><span style="color:#A6ACCD;">      //  1、将元素压入栈</span></span>
<span class="line"><span style="color:#A6ACCD;">      Stack.prototype.push = function (element) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items.push(element)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 2、从栈中取出元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      Stack.prototype.pop = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.pop()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //3、查看栈顶元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      Stack.prototype.peek = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items[this.items.length - 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 4、判断栈是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">      Stack.prototype.isEmpty = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.length == 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 5、获取栈中元素的个数</span></span>
<span class="line"><span style="color:#A6ACCD;">      Stack.prototype.size = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.length</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 6、toString方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      Stack.prototype.toString = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let resultString = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; this.items.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resultString += this.items[i] + &#39; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return resultString</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //栈的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    var s = new Stack()</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.push(&#39;2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.push(&#39;3&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.push(&#39;4&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(s);  </span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(s.size()); //3</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(s.peek()); //4</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(s.isEmpty()); //false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="栈的应用" tabindex="-1">栈的应用 <a class="header-anchor" href="#栈的应用" aria-hidden="true">#</a></h4><p><strong>1、把十进制数转为二进制数</strong></p><p>​ 要把十进制转化成二进制，我们可以将十进制数字和2整除(向下取整)（二进制是满二进一），直到结果是0为止。</p><p>​ 举个例子，把十进制的数字10转化成二进制的数字，过程大概是这样：</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgXLHYj2UJDnf8g4I.png" alt="image-20210116173230197" style="zoom:80%;"></p><p>代码实现（栈实现代码继续使用上面的代码）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"> // 函数：将十进制转成二进制   </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 十进制  二进制</span></span>
<span class="line"><span style="color:#A6ACCD;">      // Decimal binary</span></span>
<span class="line"><span style="color:#A6ACCD;">    function dec2bin(decNumber) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 1、定义栈对象</span></span>
<span class="line"><span style="color:#A6ACCD;">      let stack = new Stack()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // 2、循环操作</span></span>
<span class="line"><span style="color:#A6ACCD;">      while(decNumber &gt; 0){</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2.1、获取余数，并且放入到栈中</span></span>
<span class="line"><span style="color:#A6ACCD;">        stack.push(decNumber % 2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //2.2、获取整除后的结果，作为下一次运行的数字</span></span>
<span class="line"><span style="color:#A6ACCD;">        decNumber = Math.floor(decNumber / 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 3、从栈中取出0和1</span></span>
<span class="line"><span style="color:#A6ACCD;">      let binaryString = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      while(!stack.isEmpty()){</span></span>
<span class="line"><span style="color:#A6ACCD;">        binaryString += stack.pop()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return binaryString</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //测试十进制转二进制的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(dec2bin(5));  //101</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(dec2bin(50)); //110010</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="队列-queue" tabindex="-1">队列(queue) <a class="header-anchor" href="#队列-queue" aria-hidden="true">#</a></h3><blockquote><p>只允许在一端插入数据操作，在另一端进行删除数据操作的特殊线性表；</p><p>进行插入操作的一端称为队尾（入队列），进行删除操作的一端称为队头（出队列）；队列具有先进先出（FIFO）的特性。</p></blockquote><h4 id="js基础队列" tabindex="-1">js基础队列 <a class="header-anchor" href="#js基础队列" aria-hidden="true">#</a></h4><h5 id="线性存储实现" tabindex="-1">线性存储实现 <a class="header-anchor" href="#线性存储实现" aria-hidden="true">#</a></h5><p>ES5语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">//封装队列类</span></span>
<span class="line"><span style="color:#A6ACCD;">    function Queue() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //队列中的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.items = []</span></span>
<span class="line"><span style="color:#A6ACCD;">      //栈的相关操作</span></span>
<span class="line"><span style="color:#A6ACCD;">      //  1、将元素加入到队列中</span></span>
<span class="line"><span style="color:#A6ACCD;">      Queue.prototype.add = function (element) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items.push(element)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 2、从队列中删除前端元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      Queue.prototype.delete = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //3、查看队列前端元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      Queue.prototype.front = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 4、判断队列是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">      Queue.prototype.isEmpty = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.length == 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 5、获取队列中元素的个数</span></span>
<span class="line"><span style="color:#A6ACCD;">      Queue.prototype.size = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.length</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 6、toString方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      Queue.prototype.toString = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let resultString = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; this.items.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resultString += this.items[i] + &#39; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return resultString</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //队列的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    let q = new Queue()</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;22&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;33&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;44&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.delete()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.size());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.front());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.isEmpty());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>ES6语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    //封装队列类</span></span>
<span class="line"><span style="color:#A6ACCD;">    class Queue {</span></span>
<span class="line"><span style="color:#A6ACCD;">        constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            //队列中的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.items = []</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //栈的相关操作</span></span>
<span class="line"><span style="color:#A6ACCD;">      //  1、将元素加入到队列中</span></span>
<span class="line"><span style="color:#A6ACCD;">      add = function (element) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items.push(element)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 2、从队列中删除前端元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      delete = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //3、查看队列前端元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      front = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 4、判断队列是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">      isEmpty = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.length == 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 5、获取队列中元素的个数</span></span>
<span class="line"><span style="color:#A6ACCD;">      size = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.length</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 6、toString方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      toString = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let resultString = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; this.items.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resultString += this.items[i] + &#39; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return resultString</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //栈的使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    var q = new Queue()</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;22&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;33&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;44&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.delete()</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.size());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.front());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.isEmpty());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="优先级队列" tabindex="-1">优先级队列 <a class="header-anchor" href="#优先级队列" aria-hidden="true">#</a></h4><blockquote><p>优先级队列是一种常见的数据结构，在《STL源码剖析》中给出的定义是：priorty_queue是以个带权值观念的queue，它允许加入新元素，移除旧元素，审视元素值等功能。</p><p>由于这是一个queue，所以只允许在底端加入元素，并从顶端取出元素。 但是优先级队列中的元素并非依照被推入队列的顺序排列。而是自动依照元素的权值排列。权值最高者排在最前面。 缺省的情况下维护的是一个大堆，即权值以从高到低排列。</p><p>因为优先级队列的内部是用堆来维护，所以很多时候我们要使用堆的情况下会选择用优先级队列来代替</p></blockquote><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JlZF9yZWRfcmVk,size_16,color_FFFFFF,t_70.png" alt="img"></p><p>优先级队列的实现：</p><p>​ 实现优先级队列主要考虑两个方面：</p><p>​ 1、封装元素和优先级放在一起（可以封装一个新的构造函数）</p><p>​ 2、添加元素时，将新插入元素的优先级和队列中已经存在的元素优先级进行比较，优先级高的优先，同等优先级的按先后顺序</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    //封装优先级队列</span></span>
<span class="line"><span style="color:#A6ACCD;">    function PriorityQueue() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //在PriorityQueue重新创建了一个类：可以理解为内部类</span></span>
<span class="line"><span style="color:#A6ACCD;">      function QueueElement(element, priority) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.element = element</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.priority = priority</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //封装属性</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.items = []</span></span>
<span class="line"><span style="color:#A6ACCD;">      //实现插入方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      PriorityQueue.prototype.add = function (element, priority) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //1、创建QueueElement实例</span></span>
<span class="line"><span style="color:#A6ACCD;">        let queueElement = new QueueElement(element, priority)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、判断队列是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.items.length == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.items.push(queueElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let added = false</span></span>
<span class="line"><span style="color:#A6ACCD;">          for (let i = 0; i &lt; this.items.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (queueElement.priority &gt; this.items[i].priority) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              this.items.splice(i, 0, queueElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">              added = true</span></span>
<span class="line"><span style="color:#A6ACCD;">              break</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (!added) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.items.push(queueElement)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 2、从队列中删除前端元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      PriorityQueue.prototype.delete = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //3、查看队列前端元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      PriorityQueue.prototype.front = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 4、判断队列是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">      PriorityQueue.prototype.isEmpty = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.length == 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 5、获取队列中元素的个数</span></span>
<span class="line"><span style="color:#A6ACCD;">      PriorityQueue.prototype.size = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.length</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 6、toString方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      PriorityQueue.prototype.toString = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let resultString = &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; this.items.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          resultString += &quot;&lt;——&quot; + &quot;[&quot; + this.items[i].element + &#39;，&#39; + this.items[i].priority + &quot;]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return resultString</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    let q = new PriorityQueue()</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;三级(a)&#39;, 1)    </span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;一级(b)&#39;, 100)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;二级(c)&#39;, 10)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;三级(d)&#39;, 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;一级(e)&#39;, 100)</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;二级(f)&#39;, 10)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.front())    // QueueElement {element: &quot;一级(b)&quot;, priority: 100}element: &quot;一级(b)&quot;priority: 100__proto__: Object</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.size())	//6</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.toString()) //&lt;——[一级(b)，100]&lt;——[一级(e)，100]&lt;——[二级(c)，10]&lt;——[二级(f)，10]&lt;——[三级(a)，1]&lt;——[三级(d)，1]</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.delete()				</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.size()) 	//5</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.toString()) //&lt;——[一级(e)，100]&lt;——[二级(c)，10]&lt;——[二级(f)，10]&lt;——[三级(a)，1]&lt;——[三级(d)，1]</span></span>
<span class="line"><span style="color:#A6ACCD;">    q.add(&#39;二级(g)&#39;, 10)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.size())     //6</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(q.toString()) //&lt;——[一级(e)，100]&lt;——[二级(c)，10]&lt;——[二级(f)，10]&lt;——[二级(g)，10]&lt;——[三级(a)，1]&lt;——[三级(d)，1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="双端队列" tabindex="-1">双端队列 <a class="header-anchor" href="#双端队列" aria-hidden="true">#</a></h4><blockquote><p><strong>双端队列</strong> 是一种允许我们同时从前端和后端添加和删除元素的特殊队列，它是队列和栈的结合体。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Deque {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.lowestCount = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 等同于Array中的unshift方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    addFront(ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.isEmpty()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.items[this.count] = ele</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (this.lowestCount &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.lowestCount -= 1</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.items[this.lowestCount] = ele</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            for (let i = this.count; i &gt; 0; i--) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.items[i] = this.items[i - 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.items[0] = ele</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.count++</span></span>
<span class="line"><span style="color:#A6ACCD;">            return ele</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 等同于Array中的shift方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeFront() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.isEmpty()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        const delEle = this.items[this.lowestCount]</span></span>
<span class="line"><span style="color:#A6ACCD;">        delete this.items[this.lowestCount]</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.lowestCount++</span></span>
<span class="line"><span style="color:#A6ACCD;">        return delEle</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    addBack(ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items[this.count] = ele</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.count++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    removeBack() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.isEmpty()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        const delEle = this.items[this.count - 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">        delete this.items[this.count - 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.count--</span></span>
<span class="line"><span style="color:#A6ACCD;">        return delEle</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    peekFront() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.isEmpty()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items[this.lowestCount]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    peekBack() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.isEmpty()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items[this.count - 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    size() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.count - this.lowestCount</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    isEmpty() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.size() === 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    clear() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.lowestCount = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    toString() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.isEmpty()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        let objString = \`\${this.items[this.lowestCount]}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = this.lowestCount + 1; i &lt; this.count; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">            objString = \`\${objString}, \${this.items[i]}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return objString</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-hidden="true">#</a></h4><h5 id="击鼓传花" tabindex="-1">击鼓传花 <a class="header-anchor" href="#击鼓传花" aria-hidden="true">#</a></h5><blockquote><p>击鼓传花游戏规则 就是 所有人围城一圈 从1开始报数 报到给定数字的出局 接着下个人重新从1报数 留下最后一个人胜利</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"> // 定义队列</span></span>
<span class="line"><span style="color:#A6ACCD;">  class Queue {</span></span>
<span class="line"><span style="color:#A6ACCD;">    items = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(params) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.items = [...params];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 往队列尾添加元素</span></span>
<span class="line"><span style="color:#A6ACCD;">    push(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.items.push(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 获取队列最底部元素</span></span>
<span class="line"><span style="color:#A6ACCD;">    delect() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.items.shift();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    seeItem() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.items[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    size() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.items.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    toString(symbol = &quot; &quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let result = &quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let i = 0, len = this.items.length; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        result = this.items[i] + symbol;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function hotPotato(nameList, num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const queue = new Queue(nameList);</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (queue.size() &gt; 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let i = 0; i &lt; num - 1; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        queue.push(queue.delect());</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      queue.delect();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    nameList.indexOf(queue.items[0]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    alert(</span></span>
<span class="line"><span style="color:#A6ACCD;">      \`最终是\${queue.items[0]}赢了，在原数组中的位置是\${nameList.indexOf(</span></span>
<span class="line"><span style="color:#A6ACCD;">        queue.items[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">      )}\`吧 </span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  hotPotato吧 ([&quot;小名&quot;, &quot;李磊&quot;, &quot;小花&quot;, &quot;小黑&quot;, &quot;小绿&quot;, &quot;小兰&quot;], 3);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="字符串回文验证" tabindex="-1">字符串回文验证 <a class="header-anchor" href="#字符串回文验证" aria-hidden="true">#</a></h5><blockquote><p>回文是正反都能读回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam或racecar。</p></blockquote><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function palindromeChecker(str) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if((str!==null &amp;&amp; str.length== 0) || str === undefined || str === null){</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  const q = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  const str1 = str</span></span>
<span class="line"><span style="color:#A6ACCD;">  const len = str1.length</span></span>
<span class="line"><span style="color:#A6ACCD;">  let flag = true</span></span>
<span class="line"><span style="color:#A6ACCD;">  for(let i = 0;i&lt;len;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      q.push(str1[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">  while(q.length &gt; 1 &amp;&amp; flag) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     const frontEl = q.shift()</span></span>
<span class="line"><span style="color:#A6ACCD;">     const backEl = q.pop()</span></span>
<span class="line"><span style="color:#A6ACCD;">     if(frontEl != backEl) { </span></span>
<span class="line"><span style="color:#A6ACCD;">        flag = false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return flag</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625230919595.png" alt="image-20220625230919595"></p><h3 id="链表结构" tabindex="-1">链表结构 <a class="header-anchor" href="#链表结构" aria-hidden="true">#</a></h3><h4 id="单向链表简介" tabindex="-1">单向链表简介 <a class="header-anchor" href="#单向链表简介" aria-hidden="true">#</a></h4><blockquote><p>链表是一种物理<a href="https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E5%8D%95%E5%85%83/8727749" target="_blank" rel="noreferrer">存储单元</a>上非连续、非顺序的<a href="https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/350782" target="_blank" rel="noreferrer">存储结构</a>，<a href="https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%85%83%E7%B4%A0/715313" target="_blank" rel="noreferrer">数据元素</a>的逻辑顺序是通过链表中的引用或者<a href="https://baike.baidu.com/item/%E6%8C%87%E9%92%88/2878304" target="_blank" rel="noreferrer">指针</a>链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储<a href="https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%85%83%E7%B4%A0" target="_blank" rel="noreferrer">数据元素</a>的数据域，另一个是存储下一个结点地址的<a href="https://baike.baidu.com/item/%E6%8C%87%E9%92%88/2878304" target="_blank" rel="noreferrer">指针</a>域。</p></blockquote><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20180502195346635.png" alt="img"></p><p><strong>相对于数组，链表有以下优势：</strong></p><p>​ 1、内存空间不是必须连续的，可以充分，利用计算机的内存，实现灵活的内存动态管理</p><p>​ 2、链表不必在创建时就确定大小，并且大小可以无限的延伸下去</p><p>​ 3、链表在插入和删除数据时，时间复杂度可以达到O(1),相对数组效率高很多</p><p>注：插入操作复杂度：单链表 表头 O(1) 表尾O(n) 循环链表 表头 O(1) 表尾O(n) 双向链表 O(1)</p><p><strong>相对于数组，链表有以下缺点：</strong></p><p>​ 1、链表访问任何一个位置的元素时，都需要从头开始访问。（无法跳过第一个元素访问任何一个元素)</p><p>​ 2、无法通过下标直接访问元素，需要从头一个个访问，直到找到对应元素，时间复杂度为O(n),而线性表和顺序表相应的时间复杂度分别是O(logn)和O(1)。</p><h4 id="js单链表的实现" tabindex="-1">js单链表的实现 <a class="header-anchor" href="#js单链表的实现" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">//封装单向链表类</span></span>
<span class="line"><span style="color:#A6ACCD;">    function LinkedList() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //内部类：节点类</span></span>
<span class="line"><span style="color:#A6ACCD;">      function Node(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.data = data</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.next = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //属性</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.head = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.length = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      //1、append追加方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.append = function (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、创建新的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        let newNode = new Node(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">        //2、判断是否添加的是第一个节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.length === 0) {   //2.1、是第一个节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.head = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {                   //2.2、不是第一个节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          //找到最后一个节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">          while (current.next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //最后节点的next指向新的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          current.next = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length++</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 3、insert插入方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.insert = function (position, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、对position进行越界判断</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position &lt; 0 || position &gt; this.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //2、根据data创建newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">        let newNode = new Node(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3、判断插入的位置是否是第一个</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          newNode.next = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.head = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span></span>
<span class="line"><span style="color:#A6ACCD;">          let previous = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          while (index &lt; position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            index++</span></span>
<span class="line"><span style="color:#A6ACCD;">            previous = current</span></span>
<span class="line"><span style="color:#A6ACCD;">            current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          newNode.next = current</span></span>
<span class="line"><span style="color:#A6ACCD;">          previous.next = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 4、length ++</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length++</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //2、toString将链表转成字符串形式</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.toString = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let str = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">        //while循环中的括号会进行隐性转换</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (current) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          str += current.data + &quot; &quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return str</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 3、get方法 获取对应位置的元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.get = function (position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、对position进行越界判断</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position &lt; 0 || position &gt;= this.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、获得对应的data</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">        let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (index &lt; position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          index++</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return current.data</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 4、indexOf 返回元素在列表中的索引</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.indexOf = function (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、获得对应的data</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">        let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (current) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (current.data === data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            flag = true</span></span>
<span class="line"><span style="color:#A6ACCD;">            return index</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          index++</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return -1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 5、update方法 修改某个位置的元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.update = function (position, newData) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、对position进行越界判断</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position &lt; 0 || position &gt;= this.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、查找正确的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">        let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (index &lt; position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          index++</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3、将position位置的node的data修改成newData</span></span>
<span class="line"><span style="color:#A6ACCD;">        current.data = newData</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 6、removeAt 从列表的特定位置移除一项</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.removeAt = function (position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、对position进行越界判断</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position &lt; 0 || position &gt;= this.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、判断是否删除的是第一个节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.head = this.head.next</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.head.next = null</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">          let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">          let previous = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          while (index &lt; position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            index++</span></span>
<span class="line"><span style="color:#A6ACCD;">            previous = current</span></span>
<span class="line"><span style="color:#A6ACCD;">            current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 前一个节点的next指current的next即可</span></span>
<span class="line"><span style="color:#A6ACCD;">          previous.next = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">          current.next = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 3、length - 1</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.length--</span></span>
<span class="line"><span style="color:#A6ACCD;">          return true</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 7、remove从列表中移除一项</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.remove = function (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、获取data在列表中的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">        let position = this.indexOf(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、根据位置信息，删除节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.removeAt(position)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 8、isEmpty 如果链表中不包含任何元素，返回true,如果链表长度大于0则返回false</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.isEmpty = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.length === 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //9、size 如果链表包含的元素个数</span></span>
<span class="line"><span style="color:#A6ACCD;">      LinkedList.prototype.size = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.length</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //實例化單鏈表</span></span>
<span class="line"><span style="color:#A6ACCD;">    let link = new LinkedList()</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.append(&#39;10&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.append(&#39;11&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link);</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.insert(1, &#39;fuck&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.insert(3, &#39;you&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.toString());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.get(1));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.indexOf(&#39;fuck&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.update(1, &#39;fuc&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.removeAt(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.remove(&#39;11&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.toString());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.isEmpty());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.size());</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>插入操作图示</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imghf1Lld9nB2AFZY5.png" alt="image-20210120214609061" style="zoom:80%;"><h4 id="双向链表简介" tabindex="-1">双向链表简介 <a class="header-anchor" href="#双向链表简介" aria-hidden="true">#</a></h4><blockquote><p>双向链表也叫双链表，是链表的一种，它的每个数据<a href="https://baike.baidu.com/item/%E7%BB%93%E7%82%B9/9794643" target="_blank" rel="noreferrer">结点</a>中都有两个引用或<a href="https://baike.baidu.com/item/%E6%8C%87%E9%92%88/2878304" target="_blank" rel="noreferrer">指针</a>，分别指向直接后继和直接前驱。所以，从双向链表中的任意一个结点开始，都可以很方便地访问它的前驱结点和后继结点。一般我们都构造双向<a href="https://baike.baidu.com/item/%E5%BE%AA%E7%8E%AF%E9%93%BE%E8%A1%A8/3228465" target="_blank" rel="noreferrer">循环链表</a>。</p></blockquote><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1146465-20170429154748350-758050755.png" alt="img"><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgPZybI8rs74BgjUD.png" alt="image-20210121115202505"></p><p>特点：</p><p>1、既可以从头遍历到尾，也可以从尾遍历到头</p><p>2、一个节点既有向前连接的引用，也有一个向后连接的引用</p><p>双向链表的缺点：</p><p>1、每次在插入或删除某个节点时，需要处理四个引用，而不是两个。也就是实现起来要困难一些</p><p>2、并且对比单向链表，占用内存空间更大一些</p><p>但是这些缺点和我们使用起来的方便程度相比是微不足道的</p><h4 id="js双向链表的实现" tabindex="-1">js双向链表的实现 <a class="header-anchor" href="#js双向链表的实现" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    //封装双向链表</span></span>
<span class="line"><span style="color:#A6ACCD;">    function DoublyLinkedList() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //内部类：节点类</span></span>
<span class="line"><span style="color:#A6ACCD;">      function Node(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.data = data</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.prev = null</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.next = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //属性</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.head = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.tail = null</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.length = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 常见的操作：方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 1、append方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.append = function (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、根据data创建节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        let newNode = new Node(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、判断添加的是否是第一个节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.length == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.head = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.tail = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          newNode.prev = this.tail</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.tail.next = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.tail = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length++</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 2、insert 插入</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.insert = function (position, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、越界判断</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position &lt; 0 || position &gt; this.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、根据data创建新的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        let newNode = new Node(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3、判断原来的列表是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.head = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.tail = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (position === 0) {   //2.1、判断position是否为0</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.head.prev = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">            newNode.next = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.head = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else if (position === this.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.tail.next = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">            newNode.prev = this.tail</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.tail = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">            newNode.next = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">            let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">            while (index &lt; position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              index++</span></span>
<span class="line"><span style="color:#A6ACCD;">              current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            //修改指针</span></span>
<span class="line"><span style="color:#A6ACCD;">            current.prev.next = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">            newNode.prev = current.prev</span></span>
<span class="line"><span style="color:#A6ACCD;">            newNode.next = current</span></span>
<span class="line"><span style="color:#A6ACCD;">            current.prev = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length++</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 3、get方法      </span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.get = function (position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、越界判断</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position &lt; 0 || position &gt;= this.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、获取元素</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">        let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (index &lt; position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          index++</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return current.data</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 4、indexOf方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.indexOf = function (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">        let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (current) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (current.data === data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return index</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">            index++</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return -1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 5、update方法      </span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.update = function (position, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、越界判断</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position &lt; 0 || position &gt;= this.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2、获取元素</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">        let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (index &lt; position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          index++</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        current.data = data</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 6、removeAt 从列表的特定位置移除一项</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.removeAt = function (position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1、越界判断</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (position &lt; 0 || position &gt;= this.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2,判断是否只有一个节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.head = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.tail = null</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (position == 0) {   //判断是否删除的是第一个节点</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.head.next.prev = null</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.head = this.head.next</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else if (position == this.length - 1) {  //最后节点</span></span>
<span class="line"><span style="color:#A6ACCD;">            current = this.tail</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.tail.prev.next = null</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.tail = this.tail.prev</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            while (index &lt; position) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">              index++</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            current.prev.next = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">            current.next.prev = current.prev</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.length--</span></span>
<span class="line"><span style="color:#A6ACCD;">        return current.data</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 7,remove方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.remove = function (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1,根据data获取下标值</span></span>
<span class="line"><span style="color:#A6ACCD;">        let index = this.indexOf(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2,根据index删除对应位置的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.removeAt(index)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 8,isEmpty方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.isEmpty = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.length</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 9,size方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.size = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.length</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 10,获取链表的第一个元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.getHead = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.head.data</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 11,获取链表的最后一个元素</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.getTail = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.tail.data</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // toString方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.toString = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.forwardString()</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //  forwardString 返回正向遍历的节点字符串形式</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.forwardString = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let str = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.head</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (current !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          str += current.data + &quot; &quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.next</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return str</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // backwardString 返回反向遍历的节点字符串形式</span></span>
<span class="line"><span style="color:#A6ACCD;">      DoublyLinkedList.prototype.backwardString = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let str = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let current = this.tail</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (current !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          str += current.data + &quot; &quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.prev</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return str</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    let link = new DoublyLinkedList()</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.append(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.append(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.append(3)</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.insert(2, 4)</span></span>
<span class="line"><span style="color:#A6ACCD;">    link.insert(3, 5)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.update(1, &#39;update&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.removeAt(0));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.toString());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.backwardString());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.get(4));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.indexOf(4));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.size());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(link.getHead());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="集合结构" tabindex="-1">集合结构 <a class="header-anchor" href="#集合结构" aria-hidden="true">#</a></h3><h4 id="简介-1" tabindex="-1">简介 <a class="header-anchor" href="#简介-1" aria-hidden="true">#</a></h4><p>同数学中所学的一样，集合(Set)是由一组无序但彼此之间又有一定关系性的成员构成，每个成员在集合中只能出现一次，不同于我们之前说的<a href="https://www.jb51.net/article/167971.htm" target="_blank" rel="noreferrer">字典</a>，<a href="https://www.jb51.net/article/167962.htm" target="_blank" rel="noreferrer">链表</a>之类的，它是一种包含了不同元素的数据结构(集合中的元素称为成员)，从其定义中我们可以看出它具有两个很重要的特征：首先，集合中的成员是无序的，其次，集合中的成员是不相同的，即集合中不存在相同的成员。</p><p><strong>集合的定义</strong></p><p>我们要实现一个集合，首先要对其一些定义做了解</p><ul><li>不包含任何成员的集合称为<strong>空集</strong>，包含一切可能成员的集合称为<strong>全集</strong>。</li><li>如果两个集合里的成员都完全相同，则称两个集合相等。</li><li>如果一个集合所有成员都包含于另一个集合，则前一集合称为后一集合的一个<strong>子集</strong>。</li></ul><p><strong>集合的操作</strong></p><p>通常来说，集合的基本操作有以下三种：</p><ul><li>并集：将两个集合中的成员进行合并，得到一个新的集合</li><li>交集：将两个集合中共同存在的成员组成的一个新的集合</li><li>补集：属于一个集合而不属于另一个集合的成员组成的新的集合</li></ul><p>注：集合通常是由一组无序的，不能重复的元素构成。</p><p>​ 1、和数学中的集合名词比较相似，但是数组中的集合范围更大一些，也允许集合中的元素重复</p><p>​ 2、在计算机中，集合通常表示的结构中元素是不允许重复的</p><p>集合是特殊的数组：</p><p>​ 1、特殊之处在于里面的元素没有顺序，也不能重复</p><p>​ 2、没有顺序意味着不能通过下标值进行访问，不能重复意味着相同的对象在集合中只会存在一份</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img5lgpkNYFSyzKrXh.png" alt="image-20210121175253633" style="zoom:67%;"><h4 id="js集合实现" tabindex="-1">js集合实现 <a class="header-anchor" href="#js集合实现" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">    function Set(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //属性</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.items = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">      //方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      //add方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.add = function (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //判断当前集合中是否已经包含了该元素</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (this.has(value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //将元素添加到集合中</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.items[value] = value</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //has方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.has = function (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items.hasOwnProperty(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //remove方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.remove = function (value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1,判断该集合中是否包含该元素</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!this.has(value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2,将元素从属性中删除</span></span>
<span class="line"><span style="color:#A6ACCD;">        delete this.items[value]</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //clear方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.clear = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //size方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.size = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Object.keys(this.items).length</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //获取集合中所有的值</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.values = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      	</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Object.keys(this.items)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //集合间的操作</span></span>
<span class="line"><span style="color:#A6ACCD;">      //并集:对于给定的两个集合,返回一个包含两个集合中所有元素的新集合</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.union = function (otherSet){</span></span>
<span class="line"><span style="color:#A6ACCD;">        //this:集合对象A</span></span>
<span class="line"><span style="color:#A6ACCD;">        //otherSet:集合对象B</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1,创建新的集合</span></span>
<span class="line"><span style="color:#A6ACCD;">        let unionSet = new Set()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2,将A集合中所有的元素添加到新集合中</span></span>
<span class="line"><span style="color:#A6ACCD;">        let values = this.values()</span></span>
<span class="line"><span style="color:#A6ACCD;">        for(var i = 0; i &lt; values.length; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">          unionSet.add(values[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3,将B集合中所有的元素添加到新集合中</span></span>
<span class="line"><span style="color:#A6ACCD;">        values = otherSet.values()</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (var i = 0; i &lt; values.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          unionSet.add(values[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return unionSet</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //交集:对于给定的两个集合,返回一个包含两个集合中共有元素的新集合</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.intersection = function (otherSet) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //this:集合对象A</span></span>
<span class="line"><span style="color:#A6ACCD;">        //otherSet:集合对象B</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1,创建新的集合</span></span>
<span class="line"><span style="color:#A6ACCD;">        let intersection = new Set()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2,将A集合中所有的元素添加到新集合中</span></span>
<span class="line"><span style="color:#A6ACCD;">        let values = this.values()</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (var i = 0; i &lt; values.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let item = values[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">          if(otherSet.has(item)){</span></span>
<span class="line"><span style="color:#A6ACCD;">            intersection.add(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return intersection</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //差集:对于给定的两个集合,返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.difference = function (otherSet) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         //this:集合对象A</span></span>
<span class="line"><span style="color:#A6ACCD;">        //otherSet:集合对象B</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1,创建新的集合</span></span>
<span class="line"><span style="color:#A6ACCD;">        let differenceSet = new Set()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2,将A集合中所有的元素添加到新集合中</span></span>
<span class="line"><span style="color:#A6ACCD;">        let values = this.values()</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (var i = 0; i &lt; values.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let item = values[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (!otherSet.has(item)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            differenceSet.add(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return differenceSet</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //子集:验证一个给定集合是否是另一个集合的子集</span></span>
<span class="line"><span style="color:#A6ACCD;">      Set.prototype.subset = function (otherSet) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //this:集合对象A</span></span>
<span class="line"><span style="color:#A6ACCD;">        //otherSet:集合对象B</span></span>
<span class="line"><span style="color:#A6ACCD;">        let values = this.values()</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (var i = 0; i &lt; values.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let item = values[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (!otherSet.has(item)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (Array.isArray(value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let index = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (index &lt; value.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.add(value[index])</span></span>
<span class="line"><span style="color:#A6ACCD;">          index++</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //测试Set类</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1,常见Set类对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    let set = new Set([&#39;a&#39;,&#39;b&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">    let setB = new Set([&#39;a&#39;,&#39;c&#39;,&#39;d&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set.add(111));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set.add(111));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set.add(222));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set.remove(111));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set.size());</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set.union(setB));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set.intersection(setB));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(set.difference(setB));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(setB.subset(new Set([&#39;a&#39;,&#39;c&#39;,&#39;d&#39;])));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="字典结构" tabindex="-1">字典结构 <a class="header-anchor" href="#字典结构" aria-hidden="true">#</a></h3><blockquote><p>字典是以[键，值]的形式来存储元素。字典也称作映射、符号表或关联数组。</p><p>集合、字典、散列表都可以存储不重复的数据。字典和我们上面实现的集合很像。</p><p>ES5包含了一个Map类的实现，即我们所说的字典。</p></blockquote><p>代码实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">    class Dictionary {</span></span>
<span class="line"><span style="color:#A6ACCD;">      constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 向字典中添加新元素。如果key已经存在，那么已存在的value会被indeed值覆盖</span></span>
<span class="line"><span style="color:#A6ACCD;">      set(key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.items[key] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //通过键值作为参数查找特定的数值并返回。</span></span>
<span class="line"><span style="color:#A6ACCD;">      get(key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.items[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //通过使用键值作为参数来从字典中移除键值对应的数据值</span></span>
<span class="line"><span style="color:#A6ACCD;">      remove(key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        delete this.items[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //将字典所包含的所有键名以数组形式返回</span></span>
<span class="line"><span style="color:#A6ACCD;">      keys() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Object.keys(this.items);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //将字典所包含的所有数值以数组形式返回</span></span>
<span class="line"><span style="color:#A6ACCD;">      values() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // es7 提供的 Object.values 方法</span></span>
<span class="line"><span style="color:#A6ACCD;">        // return Object.values(this.items);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 或者循环输出</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Object.keys(this.items).reduce((previousValue, currentValue, currentIndex) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          previousValue.push(this.items[currentValue]);</span></span>
<span class="line"><span style="color:#A6ACCD;">          return previousValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, [])</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    let dictionary = new Dictionary();</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictionary.set(&#39;Gandalf&#39;, &#39;gandalf@email.com&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictionary.set(&#39;John&#39;, &#39;johnsnow@email.com&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictionary.set(&#39;Tyrion&#39;, &#39;tyrion@email.com&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    dictionary.remove(&#39;John&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(dictionary.get(&#39;John&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(dictionary.get(&#39;Gandalf&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(dictionary)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(dictionary.keys())</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(dictionary.values())</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(dictionary.items)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="哈希表" tabindex="-1">哈希表 <a class="header-anchor" href="#哈希表" aria-hidden="true">#</a></h3><blockquote><p><code>哈希表</code>（Hash T able/Hash Map，也叫散列表），是根据键（Key）而直接访问在<code>内存存储位置</code>的<code>数据结构</code>。也就是说，它通过计算一个关于键值的函数，将所需查询的数据映射到表中一个位置来访问记录，这加快了查找速度。这个映射函数称做<code>哈希函数</code>，<code>存放记录</code>的<code>数组</code>称做<code>哈希表</code>。</p></blockquote><p><strong>一.数组的缺点</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     1.数组进行插入操作时，效率比较低。</span></span>
<span class="line"><span style="color:#A6ACCD;">     2.数组基于索引去查找的操作效率非常高，基于内容去查找效率很低。</span></span>
<span class="line"><span style="color:#A6ACCD;">     3.数组进行删除操作，效率也不高。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>二.哈希表</strong></p><p>1.几乎所有的编程语言都有直接或间接的应用这种数据结构</p><p>2.哈希表是基于 数组 实现的，但相对于数组有很多优势。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     1.它可以提供非常快速的 插入-删除-查找 操作</span></span>
<span class="line"><span style="color:#A6ACCD;">     2.无论多少数据，插入和删除需要接近常量的时间。即O（1）的时间级</span></span>
<span class="line"><span style="color:#A6ACCD;">     3.哈希表的速度比树还要快，基本可以瞬间找到想要的元素。</span></span>
<span class="line"><span style="color:#A6ACCD;">     4.哈希表相对于树来说编码要容易</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3.哈希表对于数组的一些不足</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     1.哈希表中的数据是没有顺序的，所以不能以一种固定的方式来遍历其中的元素。</span></span>
<span class="line"><span style="color:#A6ACCD;">     2.通常情况下，哈希表中的key是不允许重复的，不能放置相同的key，用于保存不同的元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>4.哈希表的实质</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     1.哈希表不同于（数组和链表，甚至于树可以画出他的结构）。</span></span>
<span class="line"><span style="color:#A6ACCD;">     2.他的结构就是数组，但他神奇的地方在于它对下标值的一种变换，这种变换称为 哈希函数 ， 通过哈希函数可以获取到 HashCode。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>5.哈希表的一些概念</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     1.哈希化：将大数字转化为数组范围内下表的过程，我们称之为哈希化。（对大数字取余）</span></span>
<span class="line"><span style="color:#A6ACCD;">     2.哈希函数：通常我们会将单词转化成大数字，大数字在进行哈希化的代码实现放在一个函数中，这个韩式称为哈希函数。</span></span>
<span class="line"><span style="color:#A6ACCD;">     3.哈希表：最终的数据插入到的这个数组，对整个结构的封装，我们称之为是一个哈希表。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>6.解决 哈希化后的下标值冲突 方案</p><p>------------------------1. 链地址法---------------------------</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjQ5ODEwMg==,size_16,color_FFFFFF,t_70.png" alt="在这里插入图片描述"> 1）每个存储单元存放的不再是单个数据，而是一个链条。 2）链条的结构可以是，数组或者链表。 3）比如是链表，一旦哈希化的下标值发生重复。将重复的元素插入到链表的首端或者尾端即可。 4）查询的时候，先根据哈希化后的下标值找到相应的位置，再取出链表，依次查询寻找需要的数据 5）根据业务需要选择数组还是链表，需要插在链条的最前面，选择链表。 插在后端选择数组或者链表都可以。</p><p>------------------------2. 开放地址法---------------------------</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjQ5ODEwMg==,size_16,color_FFFFFF,t_70-16555279849751.png" alt="在这里插入图片描述"> 1）开放地址法的主要工作方式是 寻找空白的的单元格来添加重复的数据 2）寻找位置的方法有三种 线性探测 ， 二次探测， 再哈希化。</p><p>-------------线性探测---------------</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     1. 下标值重复时，采取index+1向后寻找空白位置插入数据。</span></span>
<span class="line"><span style="color:#A6ACCD;">     2. 查找数据时，先去用哈希化后的索引去取值比对，如果不符合，向下继续线性查找。</span></span>
<span class="line"><span style="color:#A6ACCD;">     3. 查找数据时，当哈希化后的索引值上的数据不符合，如果在线性查找时遇到数组项空白时，则停止查找，此数组中不存在目标数据。</span></span>
<span class="line"><span style="color:#A6ACCD;">     4. 删除某数组中存的数据时，不能把值设置为null，可以进行特殊处理（比如设置为-1) 。来防止下次线性查找失败。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>！！！！线性探索的问题：线性探测会产生聚集，即数据聚在在一连串的存储单元当中。影响之后的插入查询 删除 操作的效率，影响哈希表的性能。</p><p>-------------二次探测---------------</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     1. 二次探测， 对步长进行了优化，index + 1 平方 ， + 2 平方， +3 平方，这样就可以一次探测比较长的距离，避免聚集带来的影响。</span></span>
<span class="line"><span style="color:#A6ACCD;">     2. 可是还是会造成步长不一 的 一种聚集，还是会影响效率。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>-------------再哈希化---------------</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     1.把关键字用另一个哈希函数再做一次哈希化，用这个哈希化 的 结果 作为步长，对于指定的关键字，步长在探索中是不变的，不同的关键字使用不同的步长。</span></span>
<span class="line"><span style="color:#A6ACCD;">     2.需要和第一个哈希函数不同，不能输出为0.</span></span>
<span class="line"><span style="color:#A6ACCD;">     3. stepszies（步长） = constant（常数，小于数组容量） - （key % constant）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>结论： -------链地址法，使哈希表性能下降较为稳定。------开发地址法，由于填充因子，步长等因素会使性能下降的急剧。</p><p><strong>哈希函数</strong></p><p><img src="https://i.loli.net/2021/02/27/xiCFyMAd89n4qzN.png" alt="image-20210208150444904" style="zoom:67%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgkA7awjPhRQYx3tX.png" alt="image-20210208150738643" style="zoom:80%;"></p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img3NHWPUmhrfbKXly.png" alt="image-20210208150754449" style="zoom:80%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgReksFliDnWt5TPj.png" alt="image-20210208150944918" style="zoom:67%;"><p><strong>散列函数的构造方法</strong></p><p>好的散列函数要求：（1）计算简单，至少散列函数的计算时间不应该超过其他查找技术与关键字比较的时间；（2）计算出的散列地址分布均匀，这样可以保证存储空间的有效利用，并减少为处理冲突而耗费的时间。</p><p><strong>1.</strong> <strong>直接定址法</strong></p><p>取关键字或关键字的某个线性函数值为散列地址。即H(key)=key或H(key) = a·key + b，其中a和b为常数（这种散列函数叫做自身函数）。</p><p><strong>2.</strong> <strong>数字分析法</strong></p><p>假设某公司的员工登记表以员工的手机号作为关键字。手机号一共11位。前3位是接入号，对应不同运营商的子品牌；中间4位表示归属地；最后4位是用户号。不同手机号前7位相同的可能性很大，所以可以选择后4位作为散列地址，或者对后4位反转（1234 -&gt; 4321）、循环右移（1234 -&gt; 4123）、循环左移等等之后作为散列地址。</p><p>数字分析法通常适合处理关键字位数比较大的情况，如果事先知道关键字的分布且关键字的若干位分布比较均匀，就可以考虑这个方法。</p><p><strong>3.</strong> <strong>平方取中法</strong></p><p>假设关键字是1234、平方之后是1522756、再抽取中间3位227，用作散列地址。平方取中法比较适合于不知道关键字的分布，而位数又不是很大的情况。</p><p><strong>4.</strong> <strong>折叠法</strong></p><p>将关键字从左到右分割成位数相等的几部分，最后一部分位数不够时可以短些，然后将这几部分叠加求和，并按散列表表长，取后几位作为散列地址。</p><p>比如关键字是9876543210，散列表表长是3位，将其分为四组，然后叠加求和：987 + 654 + 321 + 0 = 1962，取后3位962作为散列地址。</p><p>折叠法事先不需要知道关键字的分布，适合关键字位数较多的情况。</p><p><strong>5.</strong> <strong>除留余数法</strong></p><p>f(key) = key mod p (p≤m)，m为散列表长。这种方法不仅可以对关键字直接取模，也可在折叠、平方取中后再取模。根据经验，若散列表表长为m，通常p为小于或等于表长（最好接近m）的最小质数，可以更好的减小冲突。</p><p>此方法为最常用的构造散列函数方法。</p><p><strong>6.</strong> <strong>随机数法</strong></p><p>f(key) = random(key)，这里random是随机函数。当关键字的长度不等时，采用这个方法构造散列函数是比较合适的。</p><p>实际应用中，应该视不同的情况采用不同的散列函数。如果关键字是英文字符、中文字符、各种各样的符号，都可以转换为某种数字来处理，比如其unicode编码。下面这些因素可以作为选取散列函数的参考：（1）计算散列地址所需的时间；（2）关键字长度；（3）散列表大小；（4）关键字的分布情况；（5）查找记录的频率。</p><p><strong>哈希表的基本实现：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">class HashTable {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.storage = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.limit = 7</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 1、将字符串转成比较大的数字：hasCode</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 2、将大的数字hashCode压缩到数组范围（大小）之内</span></span>
<span class="line"><span style="color:#A6ACCD;">  //! 哈希算法</span></span>
<span class="line"><span style="color:#A6ACCD;">  hashFunc (str, size) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   //1、定义hashCode变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    var hashCode = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    // cats -&gt; Unicode编码</span></span>
<span class="line"><span style="color:#A6ACCD;">    //! 普通模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   for(var i = 0; i &lt; str.length; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     let j = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     let flag = str.length -1 - i</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     while(flag){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //       console.log(&#39;flag:&#39;+flag);</span></span>
<span class="line"><span style="color:#A6ACCD;">    //       j *= 37</span></span>
<span class="line"><span style="color:#A6ACCD;">    //       console.log(j);</span></span>
<span class="line"><span style="color:#A6ACCD;">    //       flag--</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     hashCode += str.charCodeAt(i) * j</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   console.log(hashCode);</span></span>
<span class="line"><span style="color:#A6ACCD;">    //! 2、使用霍纳算法，来计算hashCode的值</span></span>
<span class="line"><span style="color:#A6ACCD;">    // for (var i = 0; i &lt; str.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //   hashCode = 37 * hashCode + str.charCodeAt(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //! 3、自创的随机算法</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 通过split把字符串分割成单字符数组</span></span>
<span class="line"><span style="color:#A6ACCD;">    let numArray = str.split(&#39;&#39;).map(char =&gt; char.charCodeAt(0));</span></span>
<span class="line"><span style="color:#A6ACCD;">    //将所有数组元素连成字符串，不能直接相加</span></span>
<span class="line"><span style="color:#A6ACCD;">    numArray = numArray.join(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 变成随机数值</span></span>
<span class="line"><span style="color:#A6ACCD;">    hashCode = Math.sin(numArray).toString().split(&#39;.&#39;)[1].slice(0, 10);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 3、取余操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    var index = hashCode % size</span></span>
<span class="line"><span style="color:#A6ACCD;">    return index</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  //!添加元素</span></span>
<span class="line"><span style="color:#A6ACCD;">  put (key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //1.根据key获取对应的index</span></span>
<span class="line"><span style="color:#A6ACCD;">    var index = this.hashFunc(key, this.limit)</span></span>
<span class="line"><span style="color:#A6ACCD;">    //2.根据index取得对应的bucket(bucket是key的hashCode对应下表位置，)</span></span>
<span class="line"><span style="color:#A6ACCD;">    var bucket = this.storage[index]</span></span>
<span class="line"><span style="color:#A6ACCD;">    //3.判断当前bucket是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (bucket == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      bucket = []</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.storage[index] = bucket</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //4.判断是否修改数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (var i = 0; i &lt; bucket.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var tuple = bucket[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (tuple[0] == key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        tuple[1] = value</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //5.当前bucket(链表)中没有该数据,就直接添加该数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    bucket.push([key, value])</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.count += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    //数组扩容</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.count &gt; this.limit * 0.75) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.resize(&#39;expand&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  //!get获取元素</span></span>
<span class="line"><span style="color:#A6ACCD;">  get (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">    *1.根据key,获得index;</span></span>
<span class="line"><span style="color:#A6ACCD;">    * 2.根据index,获得bucket;</span></span>
<span class="line"><span style="color:#A6ACCD;">    * 3.判断bucket是否为null,为null就直接返回null</span></span>
<span class="line"><span style="color:#A6ACCD;">    * 4.bucket不为null，则遍历找到对应的key</span></span>
<span class="line"><span style="color:#A6ACCD;">    * 5.遍历完后，没有找到对应的key，就返回null</span></span>
<span class="line"><span style="color:#A6ACCD;">    **/</span></span>
<span class="line"><span style="color:#A6ACCD;">    var index = this.hashFunc(key, this.limit)</span></span>
<span class="line"><span style="color:#A6ACCD;">    var bucket = this.storage[index]</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (bucket == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return null</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (var i = 0; i &lt; bucket.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var tuple = bucket[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (tuple[0] == key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return tuple[1]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //在index对应的bucket（不为null）中没有找到对应的key</span></span>
<span class="line"><span style="color:#A6ACCD;">    return null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  //!remove方法</span></span>
<span class="line"><span style="color:#A6ACCD;">  remove (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var index = this.hashFunc(key, this.limit)</span></span>
<span class="line"><span style="color:#A6ACCD;">    var bucket = this.storage[index]</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (bucket == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return null</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (var i = 0; i &lt; bucket.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var tuple = bucket[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (tuple[0] == key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        bucket.splice(i, 1)//删除当前位置的元素https://wangdoc.com/javascript/stdlib/array.html#splice</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.count--</span></span>
<span class="line"><span style="color:#A6ACCD;">        return tuple[1]</span></span>
<span class="line"><span style="color:#A6ACCD;">        //缩小容量</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this.limit &gt; 7 &amp;&amp; this.count &lt; this.limit * 0.25) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.resize(&#39;narrow&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return null</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  //!判断哈希表是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">  isEmpty () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.count == 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  //!获取哈希表的长度</span></span>
<span class="line"><span style="color:#A6ACCD;">  size () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this.count</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  //!哈希表的扩容</span></span>
<span class="line"><span style="color:#A6ACCD;">  resize (newLimit) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">      //! 1、获取哈希表新的数组大小限制</span></span>
<span class="line"><span style="color:#A6ACCD;">      getNewLimit.call(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">      //! 2、重新初始化哈希表</span></span>
<span class="line"><span style="color:#A6ACCD;">      var oldStorage = init.call(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">      //! 3、把值转移到新的哈希表上</span></span>
<span class="line"><span style="color:#A6ACCD;">      moveHash.call(this, oldStorage)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 获取哈希表新的limit</span></span>
<span class="line"><span style="color:#A6ACCD;">    function getNewLimit () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (newLimit === &#39;expand&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var newSize = this.limit * 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        var newPrime = getPrime(newSize)</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else if (newLimit === &#39;narrow&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var newSize = Math.floor(this.limit / 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">        var newPrime = getPrime(newSize)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.limit = newPrime</span></span>
<span class="line"><span style="color:#A6ACCD;">      //*判断数字是否是质数</span></span>
<span class="line"><span style="color:#A6ACCD;">      function isPrime (num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //1.获得num的平方根</span></span>
<span class="line"><span style="color:#A6ACCD;">        //特点：智能被1和自己整除，不能被2到num-1数字整除</span></span>
<span class="line"><span style="color:#A6ACCD;">        //*普通算法</span></span>
<span class="line"><span style="color:#A6ACCD;">        // for(var i = 2;i &lt; num;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        //   if (num % i == 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //     return false</span></span>
<span class="line"><span style="color:#A6ACCD;">        //   }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //*优化算法</span></span>
<span class="line"><span style="color:#A6ACCD;">        var temp = Math.ceil(Math.sqrt(num))</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (var i = 2; i &lt;= temp; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (num % i === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      //*获取质数的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">      function getPrime (num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (!isPrime(num)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          num++</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(num);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return num</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //*初始化哈希表</span></span>
<span class="line"><span style="color:#A6ACCD;">    function init () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">      var oldStorage = this.storage</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.storage = []</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      var bucket = []</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.storage = []</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.count = 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(oldStorage);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return oldStorage</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    //*转移哈希表</span></span>
<span class="line"><span style="color:#A6ACCD;">    function moveHash (oldStorage) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var bucket = []</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (var i = 0; i &lt; oldStorage.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        bucket = oldStorage[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!bucket) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          continue</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (var j = 0; j &lt; bucket.length; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var tuple = bucket[j]</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.put(tuple[0], tuple[1])</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var hash = new HashTable()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;abc&#39;, &#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;abd&#39;, &#39;456&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;cbd&#39;, &#39;789&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;a34c&#39;, &#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;a43bd&#39;, &#39;456&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;c434bd&#39;, &#39;789&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;ab434c&#39;, &#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;a434bd&#39;, &#39;456&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;c434bd&#39;, &#39;789&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;ab2434c&#39;, &#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;a434b3d&#39;, &#39;456&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;c21314bd&#39;, &#39;789&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;c212334bd&#39;, &#39;789&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">hash.put(&#39;c2123314bd&#39;, &#39;789&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(hash);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(hash.get(&#39;ab2434c&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>哈希表的扩容：</strong></p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgeagT1pLnc4iJIMX.png" alt="image-20210213160949118" style="zoom:67%;"><h3 id="树-tree" tabindex="-1">树（tree) <a class="header-anchor" href="#树-tree" aria-hidden="true">#</a></h3><blockquote><p>树结构是一种非线性存储结构，存储的是具有“一对多”关系的数据元素的集合 。</p><p>树是由结点或顶点和边组成的(可能是非线性的)且不存在着任何环的一种数据结构。没有结点的树称为空(null或empty)树。一棵非空的树包括一个根结点，还(很可能)有多个附加结点，所有结点构成一个多级分层结构。</p></blockquote><h4 id="一、树结构简介" tabindex="-1">一、树结构简介 <a class="header-anchor" href="#一、树结构简介" aria-hidden="true">#</a></h4><h5 id="_1-1-简单了解树结构" tabindex="-1">1.1.简单了解树结构 <a class="header-anchor" href="#_1-1-简单了解树结构" aria-hidden="true">#</a></h5><p><strong>什么是树？</strong></p><p>真实的树：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1.png" alt="image-20200229205530929"></p><p><strong>树的特点：</strong></p><ul><li>树一般都有一个<strong>根</strong>，连接着根的是<strong>树干</strong>；</li><li>树干会发生分叉，形成许多<strong>树枝</strong>，树枝会继续分化成更小的<strong>树枝</strong>；</li><li>树枝的最后是<strong>叶子</strong>；</li></ul><p>现实生活中很多结构都是树的抽象，模拟的树结构相当于旋转<code>180°</code>的树。</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2.png" alt="image-20200229205630945"></p><p><strong>树结构对比于数组/链表/哈希表有哪些优势呢：</strong></p><p><strong>数组：</strong></p><ul><li>优点：可以通过<strong>下标值访问</strong>，效率高；</li><li>缺点：查找数据时需要先对数据进行<strong>排序</strong>，生成<strong>有序数组</strong>，才能提高查找效率；并且在插入和删除元素时，需要大量的<strong>位移操作</strong>；</li></ul><p><strong>链表：</strong></p><ul><li>优点：数据的插入和删除操作效率都很高；</li><li>缺点：<strong>查找</strong>效率低，需要从头开始依次查找，直到找到目标数据为止；当需要在链表中间位置插入或删除数据时，插入或删除的效率都不高。</li></ul><p><strong>哈希表：</strong></p><ul><li>优点：哈希表的插入/查询/删除效率都非常高；</li><li>缺点：<strong>空间利用率不高</strong>，底层使用的数组中很多单元没有被利用；并且哈希表中的元素是<strong>无序</strong>的，不能按照固定顺序遍历哈希表中的元素；而且不能快速找出哈希表中<strong>最大值或最小值</strong>这些特殊值。</li></ul><p><strong>树结构：</strong></p><p>优点：树结构综合了上述三种结构的优点，同时也弥补了它们存在的缺点（虽然效率不一定都比它们高），比如树结构中数据都是有序的，查找效率高；空间利用率高；并且可以快速获取最大值和最小值等。</p><p>总的来说：<strong>每种数据结构都有自己特定的应用场景</strong></p><p><strong>树结构：</strong></p><ul><li><strong>树（Tree）</strong>:由 n（n ≥ 0）个节点构成的<strong>有限集合</strong>。当 n = 0 时，称为<strong>空树</strong>。</li></ul><p>对于任一棵非空树（n &gt; 0），它具备以下性质：</p><ul><li>数中有一个称为**根（Root）**的特殊节点，用 **r **表示；</li><li>其余节点可分为 m（m &gt; 0）个互不相交的有限集合 T1，T2，...，Tm，其中每个集合本身又是一棵树，称为原来树的<strong>子树（SubTree）</strong>。</li></ul><p><strong>树的常用术语：</strong></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img3.png" alt="image-20200229221126468"></p><ul><li><strong>节点的度（Degree）</strong>：节点的<strong>子树个数</strong>，比如节点B的度为2；</li><li><strong>树的度</strong>：树的所有节点中<strong>最大的度数</strong>，如上图树的度为2；</li><li><strong>叶节点（Leaf）</strong>：<strong>度为0的节点</strong>（也称为叶子节点），如上图的H，I等；</li><li><strong>父节点（Parent）</strong>：度不为0的节点称为父节点，如上图节点B是节点D和E的父节点；</li><li><strong>子节点（Child）</strong>：若B是D的父节点，那么D就是B的子节点；</li><li><strong>兄弟节点（Sibling）</strong>：具有同一父节点的各节点彼此是兄弟节点，比如上图的B和C，D和E互为兄弟节点；</li><li><strong>路径和路径长度</strong>：路径指的是一个节点到另一节点的通道，路径所包含边的个数称为路径长度，比如A-&gt;H的路径长度为3；</li><li><strong>节点的层次（Level）</strong>：规定<strong>根节点在1层</strong>，其他任一节点的层数是其父节点的<strong>层数加1</strong>。如B和C节点的层次为2；</li><li><strong>树的深度（Depth）</strong>：树种所有节点中的<strong>最大层次</strong>是这棵树的深度，如上图树的深度为4；</li></ul><h5 id="_1-2-树结构的表示方式" tabindex="-1">1.2.树结构的表示方式 <a class="header-anchor" href="#_1-2-树结构的表示方式" aria-hidden="true">#</a></h5><ul><li><strong>最普通的表示方法</strong>：</li></ul><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img4.png" alt="image-20200229230417613" style="zoom:80%;"><p>如图，树结构的组成方式类似于链表，都是由一个个节点连接构成。不过，根据每个父节点子节点数量的不同，每一个父节点需要的引用数量也不同。比如节点A需要3个引用，分别指向子节点B，C，D；B节点需要2个引用，分别指向子节点E和F；K节点由于没有子节点，所以不需要引用。</p><p>这种方法缺点在于我们无法确定某一结点的引用数。</p><ul><li><strong>儿子-兄弟表示法</strong>：</li></ul><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img5.png" alt="image-20200229232805477"></p><p>这种表示方法可以完整地记录每个节点的数据，比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">//节点A</span></span>
<span class="line"><span style="color:#A6ACCD;">Node{</span></span>
<span class="line"><span style="color:#A6ACCD;">  //存储数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.data = data</span></span>
<span class="line"><span style="color:#A6ACCD;">  //统一只记录左边的子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.leftChild = B</span></span>
<span class="line"><span style="color:#A6ACCD;">  //统一只记录右边的第一个兄弟节点</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.rightSibling = null</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//节点B</span></span>
<span class="line"><span style="color:#A6ACCD;">Node{</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.data = data</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.leftChild = E</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.rightSibling = C</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//节点F</span></span>
<span class="line"><span style="color:#A6ACCD;">Node{</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.data = data</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.leftChild = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.rightSibling = null</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这种表示法的优点在于每一个节点中引用的数量都是确定的。</p><ul><li><strong>儿子-兄弟表示法旋转</strong></li></ul><p>以下为儿子-兄弟表示法组成的树结构：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img6.png" alt="image-20200229234549049"></p><p>将其顺时针旋转45°之后：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img7.png" alt="image-20200229235549522"></p><p>这样就成为了一棵<strong>二叉树</strong>，由此我们可以得出结论：<strong>任何树都可以通过二叉树进行模拟</strong>。但是这样父节点不是变了吗？其实，父节点的设置只是为了方便指向子节点，在代码实现中谁是父节点并没有关系，只要能正确找到对应节点即可。</p><h4 id="二、二叉树" tabindex="-1">二、二叉树 <a class="header-anchor" href="#二、二叉树" aria-hidden="true">#</a></h4><h5 id="_2-1-二叉树简介" tabindex="-1">2.1.二叉树简介 <a class="header-anchor" href="#_2-1-二叉树简介" aria-hidden="true">#</a></h5><p><strong>二叉树的概念</strong>：如果树中的每一个节点最多只能由<strong>两个子节点</strong>，这样的树就称为<strong>二叉树</strong>；</p><p>二叉树十分重要，不仅仅是因为简单，更是因为几乎所有的树都可以表示成二叉树形式。</p><p><strong>二叉树的组成</strong>：</p><ul><li>二叉树可以为空，也就是没有节点；</li><li>若二叉树不为空，则它由根节点和称为其左子树TL和右子树TR的两个不相交的二叉树组成；</li></ul><p><strong>二叉树的五种形态</strong>：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img8.png" alt="image-20200301001718079"></p><p>上图分别表示：空的二叉树、只有一个节点的二叉树、只有左子树TL的二叉树、只有右子树TR的二叉树和有左右两个子树的二叉树。</p><p><strong>二叉树的特性</strong>：</p><ul><li>一个二叉树的第 i 层的最大节点数为：2^(i-1)，i &gt;= 1；</li><li>深度为k的二叉树的最大节点总数为：2^k - 1 ，k &gt;= 1；</li><li>对任何非空二叉树，若 n0 表示叶子节点的个数，n2表示度为2的非叶子节点个数，那么两者满足关系：n0 = n2 + 1；如下图所示：H，E，I，J，G为叶子节点，总数为5；A，B，C，F为度为2的非叶子节点，总数为4；满足n0 = n2 + 1的规律。</li></ul><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img9.png" alt="image-20200301092140211"></p><p><strong>完美二叉树</strong></p><p>完美二叉树（Perfect Binary Tree）也称为满二叉树（Full Binary Tree），在二叉树中，除了最下一层的叶子节点外，每层节点都有2个子节点，这就构成了完美二叉树。</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img10.png" alt="image-20200301093237681"></p><p><strong>完全二叉树</strong></p><p>完全二叉树（Complete Binary Tree）:</p><ul><li>除了二叉树最后一层外，其他各层的节点数都达到了最大值；</li><li>并且，最后一层的叶子节点从左向右是连续存在，只缺失右侧若干叶子节点；</li><li>完美二叉树是特殊的完全二叉树；</li></ul><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img11.png" alt="image-20200301093659373"></p><p>在上图中，由于H缺失了右子节点，所以它不是完全二叉树。</p><h5 id="_2-3-二叉树的数据存储" tabindex="-1">2.3.二叉树的数据存储 <a class="header-anchor" href="#_2-3-二叉树的数据存储" aria-hidden="true">#</a></h5><p>常见的二叉树存储方式为<strong>数组</strong>和<strong>链表</strong>：</p><p><strong>使用数组：</strong></p><ul><li><strong>完全二叉树</strong>：按从上到下，从左到右的方式存储数据。</li></ul><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img12.png" alt="image-20200301094919588"></p><table><thead><tr><th>节点</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th></tr></thead><tbody><tr><td><strong>序号</strong></td><td><strong>1</strong></td><td><strong>2</strong></td><td><strong>3</strong></td><td><strong>4</strong></td><td><strong>5</strong></td><td><strong>6</strong></td><td><strong>7</strong></td><td><strong>8</strong></td></tr></tbody></table><p>使用数组存储时，取数据的时候也十分方便：左子节点的序号等于父节点序号 * 2，右子节点的序号等于父节点序号 * 2 + 1 。</p><ul><li><strong>非完全二叉树</strong>：非完全二叉树需要转换成完全二叉树才能按照上面的方案存储，这样会浪费很大的存储空间。</li></ul><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img13.png" alt="image-20200301100043636"></p><table><thead><tr><th>节点</th><th>A</th><th>B</th><th>C</th><th>^</th><th>^</th><th>F</th><th>^</th><th>^</th><th>^</th><th>^</th><th>^</th><th>^</th><th>M</th></tr></thead><tbody><tr><td><strong>序号</strong></td><td><strong>1</strong></td><td><strong>2</strong></td><td><strong>3</strong></td><td><strong>4</strong></td><td><strong>5</strong></td><td><strong>6</strong></td><td><strong>7</strong></td><td><strong>8</strong></td><td><strong>9</strong></td><td><strong>10</strong></td><td><strong>11</strong></td><td><strong>12</strong></td><td><strong>13</strong></td></tr></tbody></table><p><strong>使用链表</strong></p><p>二叉树最常见的存储方式为<strong>链表</strong>：每一个节点封装成一个Node，Node中包含存储的数据、左节点的引用和右节点的引用。</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img14.png" alt="image-20200301100616105"></p><h4 id="三、二叉搜索树" tabindex="-1">三、二叉搜索树 <a class="header-anchor" href="#三、二叉搜索树" aria-hidden="true">#</a></h4><h5 id="认识二叉搜索树" tabindex="-1">认识二叉搜索树 <a class="header-anchor" href="#认识二叉搜索树" aria-hidden="true">#</a></h5><p><strong>二叉搜索树</strong>（<strong>BST</strong>，Binary Search Tree），也称为<strong>二叉排序树</strong>和<strong>二叉查找树</strong>。</p><p>二叉搜索树是一棵二叉树，可以为空；</p><p>如果不为空，则满足以下<strong>性质</strong>：</p><ul><li>条件1：非空左子树的<strong>所有</strong>键值<strong>小于</strong>其根节点的键值。比如三中节点6的所有非空左子树的键值都小于6；</li><li>条件2：非空右子树的<strong>所有</strong>键值<strong>大于</strong>其根节点的键值；比如三中节点6的所有非空右子树的键值都大于6；</li><li>条件3：左、右子树本身也都是二叉搜索树；</li></ul><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img15.png" alt="image-20200301103139916"></p><p>如上图所示，树二和树三符合3个条件属于二叉树，树一不满足条件3所以不是二叉树。</p><p><strong>总结：<strong>二叉搜索树的特点主要是</strong>较小的值</strong>总是保存在<strong>左节点</strong>上，相对<strong>较大的值</strong>总是保存在<strong>右节点</strong>上。这种特点使得二叉搜索树的查询效率非常高，这也就是二叉搜索树中&quot;搜索&quot;的来源。</p><h5 id="二叉搜索树应用举例" tabindex="-1">二叉搜索树应用举例 <a class="header-anchor" href="#二叉搜索树应用举例" aria-hidden="true">#</a></h5><p>下面是一个二叉搜索树：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img16.png" alt="image-20200301111718686"></p><p>若想在其中查找数据10，只需要查找4次，查找效率非常高。</p><ul><li>第1次：将10与根节点9进行比较，由于10 &gt; 9，所以10下一步与根节点9的右子节点13比较；</li><li>第2次：由于10 &lt; 13，所以10下一步与父节点13的左子节点11比较；</li><li>第3次：由于10 &lt; 11，所以10下一步与父节点11的左子节点10比较；</li><li>第4次：由于10 = 10，最终查找到数据10 。</li></ul><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img17.png" alt="image-20200301111751041" style="zoom:80%;"><p>同样是15个数据，在排序好的数组中查询数据10，需要查询10次：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img18.png" alt="image-20200301115348138"></p><p>其实：如果是排序好的数组，可以通过二分查找：第一次找9，第二次找13，第三次找15...。我们发现如果把每次二分的数据拿出来以树的形式表示的话就是<strong>二叉搜索树</strong>。这就是数组二分法查找效率之所以高的原因。</p><h5 id="二叉搜索树的实现" tabindex="-1">二叉搜索树的实现 <a class="header-anchor" href="#二叉搜索树的实现" aria-hidden="true">#</a></h5><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182900-1656862441972126.png" alt="image-20210214212225358"></p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182903-1656862441972127.png" alt="image-20210214222239631" style="zoom:67%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182909-1656862441971124.png" alt="image-20210214222327176" style="zoom:67%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182911-1656862441972125.png" alt="image-20210214231854466" style="zoom:80%;"><p>//前中后序遍历属于深度优先遍历</p><p>//而层序遍历则属于广度优先遍历</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182918-1656862441972130.png" alt="image-20210215002601824" style="zoom:67%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182920-1656862441972129.png" alt="image-20210215002223399" style="zoom:67%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182924-1656862441972131.png" alt="image-20210215120744477" style="zoom:67%;"><p>删除总结：</p><p>1、<strong>删除的节点是叶子节点的话，就直接让其父节点的指向它的引用为null就行</strong></p><p>2、<strong>删除的节点含有左子树或者右子树，用其子树来代替成为被删除节点的父节点的子树</strong></p><p>3、<strong>删除左右都有孩子的节点，找到右边子树最小的节点作为父节点</strong></p><p>代码实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     //封装二叉搜索树</span></span>
<span class="line"><span style="color:#A6ACCD;">     function BinarySearchTree () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          function Node (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.key = key</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.left = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.right = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          // 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.root = null</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          //方法</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 插入数据： 对外给用户调用的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.insert = function (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //1、根据key值创建节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          var newNode = new Node(key)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          // 2、判断根节点是否有值</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (this.root === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.root = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.insertNode(this.root, newNode)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.insertNode = function (node, newNode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (newNode.key &lt; node.key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //向左查找</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (node.left === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          node.left = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.insertNode(node.left, newNode)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //向右查找</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (node.right === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          node.right = newNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.insertNode(node.right, newNode)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          //树的遍历</span></span>
<span class="line"><span style="color:#A6ACCD;">          //! 1、先序遍历 --- 根-&gt;左-&gt;右</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.preOrderTraversal = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var str = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          function handler (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          str += key + &#39; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.preOrderTraversalNode(this.root, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(str);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (node !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 1、处理经过的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          handler(node.key)</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 2、处理经过节点的左子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.preOrderTraversalNode(node.left, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 3、处理经过节点的右子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.preOrderTraversalNode(node.right, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //! 2、中序遍历 --- 左-&gt;根-&gt;右</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.midOrderTraversal = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var str = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          function handler (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          str += key + &#39; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.midOrderTraversalNode(this.root, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(str);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (node !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 1、处理经过节点的左子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.midOrderTraversalNode(node.left, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 2、处理经过的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          handler(node.key)</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 3、处理经过节点的右子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.midOrderTraversalNode(node.right, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //! 3、后序遍历 --- 左-&gt;右-&gt;根</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.postOrderTraversal = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var str = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          function handler (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          str += key + &#39; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.postOrderTraversalNode(this.root, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(str);</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (node !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 1、处理经过节点的左子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.postOrderTraversalNode(node.left, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 2、处理经过节点的右子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.postOrderTraversalNode(node.right, handler)</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 3、处理经过的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          handler(node.key)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //!获取最小值</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.min = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var node = this.root</span></span>
<span class="line"><span style="color:#A6ACCD;">          while (node.left !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          node = node.left</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          return node.key</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //!获取最大值</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.max = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">          var node = this.root</span></span>
<span class="line"><span style="color:#A6ACCD;">          while (node.right !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          node = node.right</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          return node.key</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //!搜索特定的值</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.search = function (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return this.searchNode(this.root, key)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.searchNode = function (node, key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 1、如果传入的node为null，那么就退出递归</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (node === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          //2、判断node节点值和传入的key大小</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (node.key &gt; key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return this.searchNode(node.left, key)</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else if (node.key &lt; key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return this.searchNode(node.right, key)</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return true</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //!删除节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.remove = function (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 1、寻找要删除的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 1、1定义变量，保存一些信息</span></span>
<span class="line"><span style="color:#A6ACCD;">          var current = this.root</span></span>
<span class="line"><span style="color:#A6ACCD;">          var parent = this.root</span></span>
<span class="line"><span style="color:#A6ACCD;">          var isLeftChild = true</span></span>
<span class="line"><span style="color:#A6ACCD;">          //1、2 开始寻找删除的节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          while (current.key !== key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (key &lt; current.key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          isLeftChild = true</span></span>
<span class="line"><span style="color:#A6ACCD;">          parent = current</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.left</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          isLeftChild = false</span></span>
<span class="line"><span style="color:#A6ACCD;">          parent = current</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.right</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          //某种情况：已经找到了最后的节点，依然没有找到 == key</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (current === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return false</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(current);</span></span>
<span class="line"><span style="color:#A6ACCD;">          //2、根据对应的情况删除节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          //2、1删除的节点是叶子节点（没有子节点）</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (current.left === null &amp;&amp; current.right == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (current === this.root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.root = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else if (isLeftChild) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          parent.left = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;ok&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          parent.right = null</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 2、2.删除的节点有一个子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          else if (current.right === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (current === this.root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.root = current.left</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          else if (isLeftChild) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          parent.left = current.left</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          parent.right = current.left</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          else if (current.left === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (current === this.root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.root = current.right</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          else if (isLeftChild) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          parent.left = current.right</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          parent.right = current.right</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //2.3.删除的节点有两边子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          //1、获取后继节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          var successor = this.getSuccssor(current)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          //2、判断是否根节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (current === this.root) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          this.root = successor</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else if (isLeftChild) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          parent.left = successor</span></span>
<span class="line"><span style="color:#A6ACCD;">          } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          parent.right = successor</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          //3、将删除节点的左子树  = current.left</span></span>
<span class="line"><span style="color:#A6ACCD;">          successor.left = current.left</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          //找后继的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">          BinarySearchTree.prototype.getSuccssor = function (delNode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 1、定义变量，保存找到的后推</span></span>
<span class="line"><span style="color:#A6ACCD;">          var successor = delNode</span></span>
<span class="line"><span style="color:#A6ACCD;">          var current = delNode.right</span></span>
<span class="line"><span style="color:#A6ACCD;">          var successorParent = delNode</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          // 2、循环查找</span></span>
<span class="line"><span style="color:#A6ACCD;">          while (current !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          successorParent = successor</span></span>
<span class="line"><span style="color:#A6ACCD;">          successor = current</span></span>
<span class="line"><span style="color:#A6ACCD;">          current = current.left</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">          // 3、判断寻找的后继节点是否直接就是delNode的right节点</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (successor !== delNode.right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          successorParent.left = successor.right</span></span>
<span class="line"><span style="color:#A6ACCD;">          successor.right = delNode.right</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          return successor</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     //测试代码</span></span>
<span class="line"><span style="color:#A6ACCD;">     var bst = new BinarySearchTree()</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.insert(11)</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.insert(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.insert(14)</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.insert(6)</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.insert(131)</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.insert(171)</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.insert(8)</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.insert(9)</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.insert(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(bst);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.preOrderTraversal()</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.midOrderTraversal()</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.postOrderTraversal()</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(bst.min());</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(bst.max());</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(bst.search(111));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     //测试删除代码</span></span>
<span class="line"><span style="color:#A6ACCD;">     bst.remove(6)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(bst);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="二叉搜索树的缺陷" tabindex="-1">二叉搜索树的缺陷 <a class="header-anchor" href="#二叉搜索树的缺陷" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182932-1656862441972133.png" alt="image-20210217004018720" style="zoom:67%;"><h4 id="图结构" tabindex="-1">图结构 <a class="header-anchor" href="#图结构" aria-hidden="true">#</a></h4><h5 id="图简介" tabindex="-1">图简介 <a class="header-anchor" href="#图简介" aria-hidden="true">#</a></h5><p>图看起来就像下图这样：</p><p><img src="https:////upload-images.jianshu.io/upload_images/4064751-9ef7887aca675269.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/526/format/webp" alt="img"></p><p>在计算机科学中，一个图就是一些<em>顶点</em>的集合，这些顶点通过一系列<em>边</em>结对（连接）。顶点用圆圈表示，边就是这些圆圈之间的连线。顶点之间通过边连接。</p><p>**注意：**顶点有时也称为节点或者交点，边有时也称为链接。</p><p>一个图可以表示一个社交网络，每一个人就是一个顶点，互相认识的人之间通过边联系。</p><p><img src="https:////upload-images.jianshu.io/upload_images/4064751-98d670ae394f3695.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/651/format/webp" alt="img"></p><p>图有各种形状和大小。边可以有<em>权重（weight）</em>，即每一条边会被分配一个正数或者负数值。考虑一个代表航线的图。各个城市就是顶点，航线就是边。那么边的权重可以是飞行时间，或者机票价格。</p><p><img src="https:////upload-images.jianshu.io/upload_images/4064751-7d75da02d729e64c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/824/format/webp" alt="img"></p><p>有了这样一张假设的航线图。从旧金山到莫斯科最便宜的路线是到纽约转机。</p><p>边可以是<em>有方向的</em>。在上面提到的例子中，边是没有方向的。例如，如果 Ada 认识 Charles，那么 Charles 也就认识 Ada。相反，有方向的边意味着是单方面的关系。一条从顶点 X 到 顶点 Y 的边是将 X 联向 Y，不是将 Y 联向 X。</p><p>继续前面航班的例子，从旧金山到阿拉斯加的朱诺有向边意味着从旧金山到朱诺有航班，但是从朱诺到旧金山没有（我假设那样意味着你需要走回去）。</p><p><img src="https:////upload-images.jianshu.io/upload_images/4064751-c9ece5586fa955f8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/824/format/webp" alt="img"></p><p>下面的两种情况也是属于图：</p><p><img src="https:////upload-images.jianshu.io/upload_images/4064751-0f7469ff0be704de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/485/format/webp" alt="img"></p><p>左边的是树，右边的是链表。他们都可以被当成是树，只不过是一种更简单的形式。他们都有顶点（节点）和边（连接）。</p><p>第一种图包含<em>圈（cycles）</em>，即你可以从一个顶点出发，沿着一条路劲最终会回到最初的顶点。树是不包含圈的图。</p><p>另一种常见的图类型是单向图或者 DAG：</p><p><img src="https:////upload-images.jianshu.io/upload_images/4064751-af16c3d5a506e610.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/634/format/webp" alt="img"></p><p>就像树一样，这个图没有任何圈（无论你从哪一个节点出发，你都无法回到最初的节点），但是这个图有有向边（通过一个箭头表示，这里的箭头不表示继承关系）。</p><h5 id="为什么要使用图" tabindex="-1">为什么要使用图？ <a class="header-anchor" href="#为什么要使用图" aria-hidden="true">#</a></h5><p>也许你耸耸肩然后心里想着，有什么大不了的。好吧，事实证明图是一种有用的数据结构。</p><p>如果你有一个编程问题可以通过顶点和边表示出来，那么你就可以将你的问题用图画出来，然后使用著名的图算法（比如广度优先搜索 或者 深度优先搜索）来找到解决方案。</p><p>例如，假设你有一系列任务需要完成，但是有的任务必须等待其他任务完成后才可以开始。你可以通过非循环有向图来建立模型：</p><p><img src="https:////upload-images.jianshu.io/upload_images/4064751-afa3948a9e805a67.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/457/format/webp" alt="img"></p><p>每一个顶点代表一个任务。两个任务之间的边表示目的任务必须等到源任务完成后才可以开始。比如，在任务B和任务D都完成之前，任务C不可以开始。在任务A完成之前，任务A和D都不能开始。</p><p>现在这个问题就通过图描述清楚了，你可以使用深度优先搜索算法来执行执行拓扑排序。这样就可以将所有的任务排入最优的执行顺序，保证等待任务完成的时间最小化。（这里可能的顺序之一是：A, B, D, E, C, F, G, H, I, J, K）</p><p>不管是什么时候遇到困难的编程问题，问一问自己：“如何用图来表述这个问题？”。图都是用于表示数据之间的关系。 诀窍在于如何定义“关系”。</p><p>程序员常用的另一个图就是状态机，这里的边描述了状态之间切换的条件。下面这个状态机描述了一个猫的状态：</p><p><img src="https:////upload-images.jianshu.io/upload_images/4064751-8f5334960c871d0b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/500/format/webp" alt="img"></p><p>图真的很棒。Facebook 就从他们的社交图中赚取了巨额财富。如果计划学习任何数据结构，则应该选择图，以及大量的标准图算法。</p><h5 id="顶点的表示" tabindex="-1">顶点的表示 <a class="header-anchor" href="#顶点的表示" aria-hidden="true">#</a></h5><p><strong>图的一些概念</strong></p><ul><li><strong>顶点的度</strong> - 指与该顶点相关联的边的条数。</li><li><strong>路径</strong> - 从一个顶点到另一个顶点的路径，存在0个或多个。 <ul><li>简单路径：简单路径要求不包含重复的顶点</li><li>回路：第一个顶点和最后一个顶点相同的路径称为回路</li></ul></li><li><strong>权</strong> - 路径上附属携带了数据信息。</li><li><strong>连通图</strong>指任意两个顶点之间存在关系边；</li><li><strong>无向图</strong>：图的边是没有方向的</li><li><strong>有向图</strong>：图的边是由方向的</li><li><strong>带权图</strong>：带权图的边有一定的权重</li></ul><p>理论上，图就是一堆顶点和边对象而已，但是怎么在代码中来描述呢？</p><p>有两种主要的方法：邻接矩阵和邻接列表。</p><p>**邻接矩阵：**在邻接矩阵实现中，由行和列都表示顶点，由两个顶点所决定的矩阵对应元素表示这里两个顶点是否相连、如果相连这个值表示的是相连边的权重。例如，如果从顶点A到顶点B有一条权重为 5.6 的边，那么矩阵中第A行第B列的位置的元素值应该是5.6：</p><p>往这个图中添加顶点的成本非常昂贵，因为新的矩阵结果必须重新按照新的行/列创建，然后将已有的数据复制到新的矩阵中。</p><p>在 <em>稀疏</em>图的情况下，每一个顶点都只会和少数几个顶点相连，这种情况下相邻列表是最佳选择。如果这个图比较<em>密集</em>，每一个顶点都和大多数其他顶点相连，那么相邻矩阵更合适。</p><p><strong>邻接列表</strong>：在邻接列表实现中，每一个顶点会存储一个从它这里开始的边的列表。比如，如果顶点A 有一条边到B、C和D，那么A的列表中会有3条边</p><p>所以使用哪一个呢？<code>大多数时候，选择邻接列表是正确的</code>。下面是两种实现方法更详细的比较。</p><p>假设 <em>V</em> 表示图中顶点的个数，<em>E</em> 表示边的个数。</p><table><thead><tr><th>操作</th><th>邻接列表</th><th>邻接矩阵</th></tr></thead><tbody><tr><td>存储空间</td><td>O(V + E)</td><td>O(V^2)</td></tr><tr><td>添加顶点</td><td>O(1)</td><td>O(V^2)</td></tr><tr><td>添加边</td><td>O(1)</td><td>O(1)</td></tr><tr><td>检查相邻性</td><td>O(V)</td><td>O(1)</td></tr></tbody></table><p>“检查相邻性” 是指对于给定的顶点，尝试确定它是否是另一个顶点的邻居。在邻接列表中检查相邻性的时间复杂度是<strong>O(V)</strong>，因为最坏的情况是一个顶点与<em>每一个</em>顶点都相连。</p><p>在 <em>稀疏</em>图的情况下，每一个顶点都只会和少数几个顶点相连，这种情况下相邻列表是最佳选择。如果这个图比较<em>密集</em>，每一个顶点都和大多数其他顶点相连，那么相邻矩阵更合适。</p><h5 id="图的实现" tabindex="-1">图的实现 <a class="header-anchor" href="#图的实现" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182951-1656862441972135.png" alt="image-20210217214656033" style="zoom:67%;"><p>我们希望从图中某一顶点出发访遍图中其余顶点，且是每一个顶点仅被访问一次，这个过程就叫做图的遍历</p>`,307),o=[e];function t(c,i,r,C,A,y){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
