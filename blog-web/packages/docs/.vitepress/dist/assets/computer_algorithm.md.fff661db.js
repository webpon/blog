import{_ as s,c as n,o as a,a as l}from"./app.fc4ecf40.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"算法的基本特性","slug":"算法的基本特性","link":"#算法的基本特性","children":[]},{"level":3,"title":"算法设计的要求","slug":"算法设计的要求","link":"#算法设计的要求","children":[]},{"level":3,"title":"算法的度量","slug":"算法的度量","link":"#算法的度量","children":[]},{"level":3,"title":"排序算法","slug":"排序算法","link":"#排序算法","children":[]},{"level":3,"title":"查找算法","slug":"查找算法","link":"#查找算法","children":[]}],"relativePath":"computer/algorithm.md"}'),p={name:"computer/algorithm.md"},o=l(`<h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h3><blockquote><p>Algorithm这个单词本意就是解决问题的办法/步骤逻辑</p><p>算法是解决特定问题求解步骤的描述，在计算机中表现为指令的有限序列，并且每条指令表示一个或多个操作。</p></blockquote><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227183014-1656862441972140.png" alt="image-20210115122327003"></p><h3 id="算法的基本特性" tabindex="-1">算法的基本特性 <a class="header-anchor" href="#算法的基本特性" aria-hidden="true">#</a></h3><blockquote><p>算法具有五个基本特性：输入、输出、有穷性、确定性和可行性</p></blockquote><h3 id="算法设计的要求" tabindex="-1">算法设计的要求 <a class="header-anchor" href="#算法设计的要求" aria-hidden="true">#</a></h3><blockquote><p>算法设计的要求：正确性、可读性、健壮性、时间效率高和储存量低</p></blockquote><p>正确性：算法的正确性是指算法至少应该具有输入、输出和加工处理无歧义性、能正确反映问题的需求、能够得到问题的正确答案。</p><p>可读性：算法设计的另一目的是为了便于阅读、理解和交流。</p><p>健壮性：当输入数据不合法是，算法也能够做出相关的处理，而不是产生异常或莫名其妙的结果。</p><p>时间效率：时间效率指的是算法的执行时间，对于同一个问题，如果有多个算法能够解决，执行效率短的算法效率高，执行时间长的效率低。</p><p>储存量低：储存量需求指的是算法在执行过程中需要的最大储存空间，主要指算法程序运行时所占的内存或外部硬盘储存空间。</p><h3 id="算法的度量" tabindex="-1">算法的度量 <a class="header-anchor" href="#算法的度量" aria-hidden="true">#</a></h3><blockquote><p>算法的度量方法：事后统计方法（不科学、不准确）、事前分析估算方法</p><p>事前分析估算方法<code>主要利用算法的时间复杂度和算法的空间复杂度的对比</code></p></blockquote><h4 id="算法时间复杂度" tabindex="-1">算法时间复杂度 <a class="header-anchor" href="#算法时间复杂度" aria-hidden="true">#</a></h4><blockquote><p>在进行算法分析时，语句总的执行次数T(n)是关于问题规模n的函数，进而分析T(n)随n的变化情况并确定T(n)的数量级。</p><p>算法的时间复杂度，也就是算法的时间度量，记住：T(n) = O(f(n))。它表示随问题规模n的增大，算法执行时间的增长率和f(n)的增长率相同，</p><p>称作算法的渐进时间复杂度，简称为时间复杂度。其中f(n)是问题规模n的某个函数。</p></blockquote><p>这样用大写O( )来体现算法时间复杂度的记法，我们称之为大O记法。</p><p>一般情况下，随着n的增大，T(n)增长最慢的算法为最优算法。</p><p><strong>推导大O阶方法</strong></p><p>​ 1、用常数1取代运行时间中的所有加法常数。</p><p>​ 2、在修改后的运行次数函数中，只保留最高阶项。</p><p>​ 3、如果最高阶项存在且不是1，则去除与这个项目相乘的常数。得到的结果就是大O阶。</p><p><strong>推导示例</strong></p><p><strong>1、常数阶</strong></p><p>首先顺序结构的时间复杂度。下面这个算法，是利用高斯定理计算1，2，……n个数的和。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> int sum = 0, n = 100; /*执行一次*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> sum = (1 + n) * n / 2; /*执行一次*/</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> printf(&quot;%d&quot;,sum); /*执行一次*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这个算法的运行次数函数是f (n) =3。 根据我们推导大0阶的方法，第一步就是把常数项3 改为1。在保留最高阶项时发现，它根本没有最高阶项，所以这个算法的时间复杂度为<strong>0(1)</strong>。 另外，我们试想一下，如果这个算法当中的语句 sum = (1+n)*n/2; 有10 句，则与示例给出的代码就是3次和12次的差异。<code>这种与问题的大小无关（n的多少），执行时间恒定的算法，我们称之为具有O(1)的时间复杂度，又叫常数阶。</code>对于分支结构而言，无论是真，还是假，执行的次数都是恒定的，不会随着n 的变大而发生变化，所以单纯的分支结构(不包含在循环结构中)，其时间复杂度也是0(1)。</p><p><strong>2、线性阶</strong></p><p>线性阶的循环结构会复杂很多。要确定某个算法的阶次，我们常常需要确定某个特定语句或某个语句集运行的次数。因此，我们要分析算法的复杂度，关键就是要分析循环结构的运行情况。</p><p>下面这段代码，它的循环的时间复杂度为<strong>O(n)</strong>， 因为循环体中的代码须要执行n次。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> int i; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> for(i = 0; i &lt; n; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> /*时间复杂度为O(1)的程序步骤序列*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>3、对数阶</strong></p><p>如下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> int count = 1; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> while (count &lt; n){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> count = count * 2;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  /*时间复杂度为O(1)的程序步骤序列*/</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>由于每次count乘以2之后，就距离n更近了一分。 也就是说，有多少个2相乘后大于n，则会退出循环。 由2^x=n 得到x=logn。 所以这个循环的时间复杂度为<strong>O(logn)</strong>。</p><p><strong>4、平方阶</strong></p><p>下面例子是一个循环嵌套，它的内循环刚才我们已经分析过，时间复杂度为O(n)。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  int i, j; </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  for(i = 0; i &lt; n; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  　　for(j = 0; j &lt; n; j++){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  /*时间复杂度为O(1)的程序步骤序列*/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  　　}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>而对于外层的循环，不过是内部这个时间复杂度为O(n)的语句，再循环n次。 所以这段代码的时间复杂度为O(n^2)。</p><p>如果外循环的循环次数改为了m，时间复杂度就变为O(mXn)。</p><p>所以我们可以总结得出，循环的时间复杂度等于循环体的复杂度乘以该循环运行的次数。 那么下面这个循环嵌套，它的时间复杂度是多少呢?</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  int i, j; </span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">  for(i = 0; i &lt; n; i++){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  　　for(j = i; j &lt; n; j++){ /*注意j = i而不是0*/</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">  　　/*时间复杂度为O(1)的程序步骤序列*/</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">  　　}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>由于当i=0时，内循环执行了n次，当i = 1时，执行了n-1次，……当i=n-1时，执行了1次。所以总的执行次数为:</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20170327144317062.png" alt="img"></p><p>用我们推导大O阶的方法，第一条，没有加法常数不予考虑；第二条，只保留最高阶项，因此保留时(n^2)/2; 第三条，去除这个项相乘的常数，也就是去除1/2，最终这段代码的时间复杂度为O(n2)。</p><p>从这个例子，我们也可以得到一个经验，其实理解大0推导不算难，难的是<strong>对数列的一些相关运算，这更多的是考察你的数学知识和能力。</strong></p><p><code>注：判读一个算法的效率时，函数中的常数和其他次要项常常可以忽略，而更应该关注主项（最高阶项）的阶数</code></p><p><strong>常见的时间复杂度</strong></p><p>常见的时问复杂度如表所示。 <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20170327162904721.png" alt="img"> 常用的时间复杂度所耗费的时间从小到大依次是： <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20170327162956884.png" alt="img"> 我们前面已经谈到了。O(1)常数阶、O(logn)对数阶、O(n)线性阶、 O(n^2)平方阶等，像O(n^3)，过大的n都会使得结果变得不现实。同样指数阶O(2^n)和阶乘阶O(n!)等除非是很小的n值，否则哪怕n 只是100，都是噩梦般的运行时间。所以这种<a href="https://www.baidu.com/s?wd=%E4%B8%8D%E5%88%87%E5%AE%9E%E9%99%85&amp;tn=24004469_oem_dg&amp;rsv_dl=gh_pl_sl_csd" target="_blank" rel="noreferrer">不切实际</a>的算法时间复杂度，一般我们都不去讨论。</p><p><strong>最坏情况与平均情况</strong></p><p>我们查找一个有n 个随机数字数组中的某个数字，最好的情况是第一个数字就是，那么算法的时间复杂度为O(1)，但也有可能这个数字就在最后一个位置上待着，那么算法的时间复杂度就是O(n)，这是最坏的一种情况了。 <code>最坏情况运行时间是一种保证，那就是运行时间将不会再坏了。 在应用中，这是一种最重要的需求， 通常， 除非特别指定， 我们提到的运行时间都是最坏情况的运行时间。</code> 而平均运行时间也就是从概率的角度看， 这个数字在每一个位置的可能性是相同的，所以平均的查找时间为n/2次后发现这个目标元素。<code>平均运行时间是所有情况中最有意义的，因为它是期望的运行时间。</code>也就是说，我们运行一段程序代码时，是希望看到平均运行时间的。可现实中，平均运行时间很难通过分析得到，一般都是通过运行一定数量的实验数据后估算出来的。<code>一般在没有特殊说明的情况下，都是指最坏时间复杂度。</code></p><h4 id="算法空间复杂度" tabindex="-1">算法空间复杂度 <a class="header-anchor" href="#算法空间复杂度" aria-hidden="true">#</a></h4><p>我们在写代码时，完全可以用空间来换取时间，比如说，要判断某某年是不是<a href="https://www.baidu.com/s?wd=%E9%97%B0%E5%B9%B4&amp;tn=24004469_oem_dg&amp;rsv_dl=gh_pl_sl_csd" target="_blank" rel="noreferrer">闰年</a>，你可能会花一点心思写了一个算法，而且由于是一个算法，也就意味着，每次给一个年份，都是要通过计算得到是否是闰年的结果。 还有另一个办法就是，事先建立一个有2050个元素的数组(年数略比现实多一点)，然后把所有的年份按下标的数字对应，如果是闰年，此数组项的值就是1，如果不是值为0。这样，所谓的判断某一年是否是闰年，就变成了查找这个数组的某一项的值是多少的问题。此时，我们的运算是最小化了，但是硬盘上或者内存中需要存储这2050个0和1。这是通过一笔空间上的开销来换取计算时间的小技巧。到底哪一个好，其实要看你用在什么地方。 <strong>算法的空间复杂度通过计算算法所需的存储空间实现，算法空间复杂度的计算公式记作:S(n)= O(f(n))，其中，n为问题的规模，f(n)为语句关于n所占存储空间的函数。</strong> 一般情况下，一个程序在机器上执行时，除了需要存储程序本身的指令、常数、变量和输入数据外，还需要存储对数据操作的存储单元，若输入数据所占空间只取决于问题本身，和算法无关，这样只需要分析该算法在实现时所需的辅助单元即可。<code>若算法执行时所需的辅助空间相对于输入数据量而言是个常数，则称此算法为原地工作，空间复杂度为0(1)。</code> 通常， 我们都使用&quot;时间复杂度&quot;来指运行时间的需求，使用&quot;空间复杂度&quot;指空间需求。当不用限定词地使用&quot;复杂度&#39;时，通常都是指时间复杂度。</p><p><strong>一些计算的规则</strong></p><p>1、加法规则</p><p>T(n,m) = T1(n) + T2(m) = O(max{f(n), g(m)})</p><p>2、乘法规则</p><p>T(n,m) = T1(n) * T2(m) = O(max{f(n)*g(m)})</p><p>3、一个经验</p><p>复杂度与时间效率的关系： c(常数) &lt; logn &lt; n &lt; n*logn &lt; n^2 &lt; n^3 &lt; 2^n &lt; 3^n &lt; n! l------------------------------l--------------------------l--------------l 较好 一般 较差</p><p><strong>常用算法的时间复杂度和空间复杂度</strong></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20170327164357916.png" alt="img"></p><h3 id="排序算法" tabindex="-1">排序算法 <a class="header-anchor" href="#排序算法" aria-hidden="true">#</a></h3><h4 id="简介-1" tabindex="-1">简介 <a class="header-anchor" href="#简介-1" aria-hidden="true">#</a></h4><p>0、排序算法说明</p><ul><li><p>0.1 排序的定义 对一序列对象根据某个关键字进行排序。</p></li><li><p>0.2 术语说明</p><ul><li><strong>稳定</strong> ：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；</li><li><strong>不稳定</strong> ：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；不稳定排序记忆口诀：<strong>快</strong>（快排）<strong>些</strong>（希尔）<strong>选</strong>（选择）<strong>一堆</strong>（堆排）</li><li><strong>内排序</strong> ：所有排序操作都在内存中完成；</li><li><strong>外排序</strong> ：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；</li><li><strong>时间复杂度</strong> ： 一个算法执行所耗费的时间。</li><li><strong>空间复杂度</strong> ：运行完一个程序所需内存的大小。</li></ul></li><li><p>0.3 算法总结</p></li><li><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png.png" alt="image" style="zoom:67%;"></li><li><p>图片名词解释：</p><ul><li>n: 数据规模</li><li>k: “桶”的个数</li><li>In-place: 占用常数内存，不占用额外内存</li><li>Out-place: 占用额外内存</li></ul></li><li><p>0.5 算法分类</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png-16555279849789.png" alt="image"></p></li><li><p>0.6 比较和非比较的区别</p><p>常见的<strong>快速排序、归并排序、堆排序、冒泡排序</strong> 等属于<strong>比较排序</strong> 。在排序的最终结果里，元素之间的次序依赖于它们之间的比较。每个数都必须和其他数进行比较，才能确定自己的位置 。</p><p>在冒泡排序之类的排序中，问题规模为n，又因为需要比较n次，所以平均时间复杂度为O(n²)。在归并排序、快速排序之类的排序中，问题规模通过分治法消减为logN次，所以时间复杂度平均O(nlogn)。</p><p>比较排序的优势是，适用于各种规模的数据，也不在乎数据的分布，都能进行排序。可以说，比较排序适用于一切需要排序的情况。</p><p><strong>计数排序、基数排序、桶排序</strong>则属于<strong>非比较排序</strong> 。非比较排序是通过确定每个元素之前，应该有多少个元素来排序。针对数组arr，计算arr[i]之前有多少个元素，则唯一确定了arr[i]在排序后数组中的位置 。</p><p>非比较排序只要确定每个元素之前的已有的元素个数即可，所有一次遍历即可解决。算法时间复杂度O(n)。</p><p>非比较排序时间复杂度底，但由于非比较排序需要占用空间来确定唯一位置。所以对数据规模和数据分布有一定的要求。</p></li></ul><h4 id="冒泡排序-bubble-sort" tabindex="-1">冒泡排序（Bubble Sort） <a class="header-anchor" href="#冒泡排序-bubble-sort" aria-hidden="true">#</a></h4><p><strong>冒泡排序</strong> 是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。</p><p>1.3 代码实现</p><ul><li><p>1.1 算法描述</p><ul><li>步骤1: 比较相邻的元素。如果第一个比第二个大，就交换它们两个；</li><li>步骤2: 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；</li><li>步骤3: 针对所有的元素重复以上的步骤，除了最后一个；</li><li>步骤4: 重复步骤1~3，直到排序完成。</li></ul></li><li><p>1.2 动图演示</p></li><li><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMjMyMzg0NDktMjE0NjE2OTE5Ny5naWY.gif" alt="image"></p></li><li><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function bubbleSort(array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = array.length - 1; i &gt;= 0 ; i--){</span></span>
<span class="line"><span style="color:#A6ACCD;">  //反向循环，因此次数越来越少</span></span>
<span class="line"><span style="color:#A6ACCD;">   //根据j的次数，比较到j位置,因为每次最后面的数都是最大的，所以不需要再交换了</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let j = 0; j &lt; i; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(array[j] &gt; array[j+1]){</span></span>
<span class="line"><span style="color:#A6ACCD;">        let temp = array[j]</span></span>
<span class="line"><span style="color:#A6ACCD;">        array[j] = array[j+1]</span></span>
<span class="line"><span style="color:#A6ACCD;">        array[j+1] = temp</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = [2,5,1,10,0,100,12,1]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr);</span></span>
<span class="line"><span style="color:#A6ACCD;">bubbleSort(arr)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>1.4 算法分析</p><ul><li>最佳情况：T(n) = O(n)</li><li>最差情况：T(n) = O(n^2)</li><li>平均情况：T(n) = O(n^2)</li></ul></blockquote></li></ul><h4 id="选择排序-selection-sort" tabindex="-1">选择排序（Selection Sort） <a class="header-anchor" href="#选择排序-selection-sort" aria-hidden="true">#</a></h4><p><strong>选择排序</strong> 是表现最稳定的排序算法之一 ，<strong>因为无论什么数据进去都是O(n^2)的时间复杂度</strong> ，所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。理论上讲，选择排序可能也是平时排序一般人想到的最多的排序方法了吧。</p><p><strong>选择排序(Selection-sort)</strong> 是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。</p><p>2.3 代码实现</p><ul><li><p>2.1 算法描述</p><p>n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：</p><ul><li>步骤1：初始状态：无序区为R[1…n]，有序区为空；</li><li>步骤2：第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1…i-1]和R(i…n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1…i]和R[i+1…n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；</li><li>步骤3：n-1趟结束，数组有序化了。</li><li><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227183028-1656862441972141.png" alt="image-20210218131631217" style="zoom:67%;"></li></ul></li><li><p>2.2 动图演示</p></li><li><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMjQ3MTk1OTAtMTQzMzIxOTgyNC5naWY.gif" alt="image"></p></li><li><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//根本思想就是使用标记找到最小的数，放到数组前面</span></span>
<span class="line"><span style="color:#A6ACCD;">function selectionSort (array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //1、获取数组的长度</span></span>
<span class="line"><span style="color:#A6ACCD;">  var length = array.length</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let j = 0; j &lt; length; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var min = j</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = min + 1; i &lt; length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (array[min] &gt; array[i]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        min = i</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    let temp = array[min]</span></span>
<span class="line"><span style="color:#A6ACCD;">    array[min] = array[j]</span></span>
<span class="line"><span style="color:#A6ACCD;">    array[j] = temp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = [2, 5, 1, 10, 0, 100, 12, 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr);</span></span>
<span class="line"><span style="color:#A6ACCD;">selectionSort(arr)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><ul><li>2.4 算法分析</li><li>最佳情况：T(n) = O(n^2)</li><li>最差情况：T(n) = O(n^2)</li><li>平均情况：T(n) = O(n^2)</li></ul></blockquote></li></ul><h4 id="插入排序-insertion-sort" tabindex="-1">插入排序（Insertion Sort） <a class="header-anchor" href="#插入排序-insertion-sort" aria-hidden="true">#</a></h4><p><strong>插入排序（Insertion-Sort）</strong> 的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。</p><ul><li><p>3.1 算法描述</p><p>一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：</p><p>1.默认从 i = 1 开始判断，这样 preIndex 自然是内部循环的游标；</p><p>2.current 保存 arr[i]，通过循环来确定 current 的最终位置；</p><p>3.每个内循环开始的时候，arr[i] === current === arr[preIndex + 1]，所以在内循环首次时 arr[preIndex + 1] = arr[preIndex] 的时候不必担心 arr[i] 的值 丢失；</p><p>4.总体思路是，需要排位的元素先额外缓存起来，然后套用内循环，使得需要调整的元素赋值给它后面的一个位置上，形成依次挪位，最后因为内循环在判断条 件不生效的时候停止意味着找到了需要排位的元素的正确位置，然后赋值上去，完成排序。</p></li><li><p>3.2 动图演示</p></li><li><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMjU2NDUyNzctMTE1MTEwMDAwMC5naWY.gif" alt="image"></p></li><li><p>3.3 代码实现</p></li><li><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function insertSort (array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">let len = arr.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let preIndex, current;</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 1; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    preIndex = i - 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    current = arr[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (preIndex &gt;= 0 &amp;&amp; current &lt; arr[preIndex]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      arr[preIndex + 1] = arr[preIndex];</span></span>
<span class="line"><span style="color:#A6ACCD;">      preIndex--;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr[preIndex + 1] = current;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return arr;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = [2, 5, 1, 10, 0, 100, 12, 1, 111, 6, 1, 76, 23, 18, 0]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr);</span></span>
<span class="line"><span style="color:#A6ACCD;">insertSort(arr)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>3.4 算法分析</p></li><li><p>最佳情况：T(n) = O(n)</p></li><li><p>最坏情况：T(n) = O(n2)</p></li><li><p>平均情况：T(n) = O(n2)</p></li></ul><h4 id="希尔排序-shell-sort" tabindex="-1">希尔排序（Shell Sort） <a class="header-anchor" href="#希尔排序-shell-sort" aria-hidden="true">#</a></h4><p><strong>希尔排序是希尔（Donald Shell）</strong> 于1959年提出的一种排序算法。希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序，同时该算法是冲破O(n2）的第一批算法之一。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。</p><p>希尔排序是把记录按下表的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。</p><ul><li><p>4.1 算法描述</p><p>我们来看下希尔排序的基本步骤，在此我们选择增量gap=length/2，缩小增量继续以gap = gap/2的方式，这种增量选择我们可以用一个序列来表示，{n/2,(n/2)/2…1}，称为增量序列。希尔排序的增量序列的选择与证明是个数学难题，我们选择的这个增量序列是比较常用的，也是希尔建议的增量，称为希尔增量，但其实这个增量序列不是最优的。此处我们做示例使用希尔增量。</p><p>先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：</p><ul><li>步骤1：选择一个增量序列t1，t2，…，tk，其中ti&gt;tj，tk=1；</li><li>步骤2：按增量序列个数k，对序列进行k 趟排序；</li><li>步骤3：每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。</li></ul></li><li><p>4.2 过程演示</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png-165552798497910.png" alt="image" style="zoom:67%;"></li><li><p>4.3 代码实现</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function shellSort (arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let len = arr.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // gap 即为增量</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let gap = Math.floor(len / 2); gap &gt; 0; gap = Math.floor(gap / 2)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = gap; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let j = i;</span></span>
<span class="line"><span style="color:#A6ACCD;">      let current = arr[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">      while (j - gap &gt;= 0 &amp;&amp; current &lt; arr[j - gap]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        arr[j] = arr[j - gap];</span></span>
<span class="line"><span style="color:#A6ACCD;">        j = j - gap;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      arr[j] = current;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37];</span></span>
<span class="line"><span style="color:#A6ACCD;">shellSort(arr)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>4.4 算法分析</p></li><li><p>最佳情况：T(n) = O(nlog2 n)</p></li><li><p>最坏情况：T(n) = O(nlog2 n)</p></li><li><p>平均情况：T(n) =O(nlog2n)</p></li></ul><h4 id="快速排序-quick-sort" tabindex="-1">快速排序（Quick Sort） <a class="header-anchor" href="#快速排序-quick-sort" aria-hidden="true">#</a></h4><p><strong>快速排序</strong> 的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。</p><ul><li><p>6.1 算法描述</p><p>快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：</p><ul><li>步骤1：从数列中挑出一个元素，称为 “基准”（<strong>pivot</strong> ）；</li><li>步骤2：重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；</li><li>步骤3：递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。</li></ul></li><li><p>6.2 动图演示</p></li><li><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzA5MzYzNzEtMTQxMzUyMzQxMi5naWY.gif" alt="image"></p></li><li><p>6.3 代码实现</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function quickSort(arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //当array中小于等于一项，则不用处理</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (arr.length &lt;= 1) return arr</span></span>
<span class="line"><span style="color:#A6ACCD;">  const flag = Math.ceil((arr.length - 1) / 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const middle = arr.splice(flag, 1)[0]</span></span>
<span class="line"><span style="color:#A6ACCD;">  const left = [], right = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let index = 0; index &lt; arr.length; index++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const value = arr[index]</span></span>
<span class="line"><span style="color:#A6ACCD;">    value &gt; middle ? right.push(value) : left.push(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return [...quickSort(left), middle, ...quickSort(right)]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = [3, 9, 5, 4, 10];</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(quickSort(arr));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>6.4 算法分析</p><p>最佳情况：T(n) = O(nlogn)</p><p>最差情况：T(n) = O(n2)</p><p>平均情况：T(n) = O(nlogn)</p></blockquote></li></ul><h4 id="归并排序-merge-sort" tabindex="-1">归并排序（Merge Sort） <a class="header-anchor" href="#归并排序-merge-sort" aria-hidden="true">#</a></h4><p>和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是O(n log n）的时间复杂度。代价是需要额外的内存空间。</p><p><strong>归并排序</strong> 是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。归并排序是一种稳定的排序方法。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。</p><ul><li><p>5.1 算法描述</p><ul><li>步骤1：把长度为n的输入序列分成两个长度为n/2的子序列；</li><li>步骤2：对这两个子序列分别采用归并排序；</li><li>步骤3：将两个排序好的子序列合并成一个最终的排序序列。</li></ul></li><li><p>5.2 动图演示</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzA1NTcwNDMtMzczNzUwMTAuZ2lm.gif" alt="image"></p></li><li><p>5.3 代码实现</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    public static int[] MergeSort(int[] array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (array.length &lt; 2) return array;</span></span>
<span class="line"><span style="color:#A6ACCD;">        int mid = array.length / 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        int[] left = Arrays.copyOfRange(array, 0, mid);</span></span>
<span class="line"><span style="color:#A6ACCD;">        int[] right = Arrays.copyOfRange(array, mid, array.length);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return merge(MergeSort(left), MergeSort(right));</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 归并排序——将两段排序好的数组结合成一个排序数组</span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param left</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param right</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @return</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static int[] merge(int[] left, int[] right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        int[] result = new int[left.length + right.length];</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int index = 0, i = 0, j = 0; index &lt; result.length; index++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (i &gt;= left.length)</span></span>
<span class="line"><span style="color:#A6ACCD;">                result[index] = right[j++];</span></span>
<span class="line"><span style="color:#A6ACCD;">            else if (j &gt;= right.length)</span></span>
<span class="line"><span style="color:#A6ACCD;">                result[index] = left[i++];</span></span>
<span class="line"><span style="color:#A6ACCD;">            else if (left[i] &gt; right[j])</span></span>
<span class="line"><span style="color:#A6ACCD;">                result[index] = right[j++];</span></span>
<span class="line"><span style="color:#A6ACCD;">            else</span></span>
<span class="line"><span style="color:#A6ACCD;">                result[index] = left[i++];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>5.4 算法分析</p><ul><li>最佳情况：T(n) = O(n)</li><li>最差情况：T(n) = O(nlogn)</li><li>平均情况：T(n) = O(nlogn)</li></ul><blockquote><h2 id="_7、堆排序-heap-sort" tabindex="-1">7、堆排序（Heap Sort） <a class="header-anchor" href="#_7、堆排序-heap-sort" aria-hidden="true">#</a></h2><p><strong>堆排序（Heapsort）</strong> 是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。</p><ul><li><p>7.1 算法描述</p><ul><li>步骤1：将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；</li><li>步骤2：将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]&lt;=R[n]；</li><li>步骤3：由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。</li></ul></li><li><p>7.2 动图演示</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzEzMDg2OTktMzU2MTM0MjM3LmdpZg.gif" alt="image"></p></li><li><p>7.3 代码实现</p><p>注意：这里用到了完全二叉树的部分性质：详情见数据结构二叉树知识点</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//声明全局变量，用于记录数组array的长度；</span></span>
<span class="line"><span style="color:#A6ACCD;">    static int len;</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 堆排序算法</span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param array</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @return</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static int[] HeapSort(int[] array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        len = array.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (len &lt; 1) return array;</span></span>
<span class="line"><span style="color:#A6ACCD;">        //1.构建一个最大堆</span></span>
<span class="line"><span style="color:#A6ACCD;">        buildMaxHeap(array);</span></span>
<span class="line"><span style="color:#A6ACCD;">        //2.循环将堆首位（最大值）与末位交换，然后在重新调整最大堆</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (len &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            swap(array, 0, len - 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            len--;</span></span>
<span class="line"><span style="color:#A6ACCD;">            adjustHeap(array, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return array;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * 建立最大堆</span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param array</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static void buildMaxHeap(int[] array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //从最后一个非叶子节点开始向上构造最大堆</span></span>
<span class="line"><span style="color:#A6ACCD;">        //for循环这样写会更好一点：i的左子树和右子树分别2i+1和2(i+1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = (len/2- 1); i &gt;= 0; i--) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            adjustHeap(array, i);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * 调整使之成为最大堆</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param array</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param i</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public static void adjustHeap(int[] array, int i) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int maxIndex = i;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //如果有左子树，且左子树大于父节点，则将最大指针指向左子树</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (i * 2 &lt; len &amp;&amp; array[i * 2] &gt; array[maxIndex])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            maxIndex = i * 2 + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //如果有右子树，且右子树大于父节点，则将最大指针指向右子树</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (i * 2 + 1 &lt; len &amp;&amp; array[i * 2 + 1] &gt; array[maxIndex])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            maxIndex = i * 2 + 2; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        //如果父节点不是最大值，则将父节点与最大值交换，并且递归调整与父节点交换的位置。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (maxIndex != i) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            swap(array, maxIndex, i);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            adjustHeap(array, maxIndex);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>7.4 算法分析</p><ul><li>最佳情况：T(n) = O(nlogn)</li><li>最差情况：T(n) = O(nlogn)</li><li>平均情况：T(n) = O(nlogn)</li></ul></blockquote><blockquote><h2 id="_8、计数排序-counting-sort" tabindex="-1">8、计数排序（Counting Sort） <a class="header-anchor" href="#_8、计数排序-counting-sort" aria-hidden="true">#</a></h2><p><strong>计数排序</strong> 的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。</p><p><strong>计数排序(Counting sort)</strong> 是一种稳定的排序算法。计数排序使用一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。</p><ul><li><p>8.1 算法描述</p><ul><li>步骤1：找出待排序的数组中最大和最小的元素；</li><li>步骤2：统计数组中每个值为i的元素出现的次数，存入数组C的第i项；</li><li>步骤3：对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；</li><li>步骤4：反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。</li></ul></li><li><p>8.2 动图演示</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzE3NDA4NDAtNjk2ODE4MS5naWY.gif" alt="image"></p></li><li><p>8.3 代码实现</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * 计数排序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param array</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * @return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public static int[] CountingSort(int[] array) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (array.length == 0) return array;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int bias, min = array[0], max = array[0];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = 1; i &lt; array.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (array[i] &gt; max)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                max = array[i];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (array[i] &lt; min)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                min = array[i];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        bias = 0 - min;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int[] bucket = new int[max - min + 1];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Arrays.fill(bucket, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = 0; i &lt; array.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            bucket[array[i] + bias]++;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int index = 0, i = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        while (index &lt; array.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (bucket[i] != 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                array[index] = i - bias;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                bucket[i]--;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                index++;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            } else</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                i++;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return array;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>8.4 算法分析</p><p>当输入的元素是n 个0到k之间的整数时，它的运行时间是 O(n + k)。计数排序不是比较排序，排序的速度快于任何比较排序算法。由于用来计数的数组C的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上1），这使得计数排序对于数据范围很大的数组，需要大量时间和内存。</p><ul><li>最佳情况：T(n) = O(n+k)</li><li>最差情况：T(n) = O(n+k)</li><li>平均情况：T(n) = O(n+k)</li></ul></blockquote><blockquote><h2 id="_9、桶排序-bucket-sort" tabindex="-1">9、桶排序（Bucket Sort） <a class="header-anchor" href="#_9、桶排序-bucket-sort" aria-hidden="true">#</a></h2><p><strong>桶排序</strong> 是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。</p><p><strong>桶排序 (Bucket sort)的工作的原理：</strong> 假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排</p><ul><li><p>9.1 算法描述</p><ul><li><p>步骤1：人为设置一个BucketSize，作为每个桶所能放置多少个不同数值（例如当BucketSize==5时，该桶可以存放｛1,2,3,4,5｝这几种数字，但是容量不限，即可以存放100个3）；</p></li><li><p>步骤2：遍历输入数据，并且把数据一个一个放到对应的桶里去；</p></li><li><p>步骤3：对每个不是空的桶进行排序，可以使用其它排序方法，也可以递归使用桶排序；</p></li><li><p>步骤4：从不是空的桶里把排好序的数据拼接起来。</p><p>注意，如果递归使用桶排序为各个桶排序，则当桶数量为1时要手动减小BucketSize增加下一循环桶的数量，否则会陷入死循环，导致内存溢出。</p></li></ul></li><li><p>9.2 图片演示</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png-165552798497911.png" alt="image"></p></li><li><p>9.3 代码实现</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> /**</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * 桶排序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     *</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param array</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param bucketSize</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * @return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public static ArrayList&lt;Integer&gt; BucketSort(ArrayList&lt;Integer&gt; array, int bucketSize) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (array == null || array.size() &lt; 2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            return array;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int max = array.get(0), min = array.get(0);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 找到最大值最小值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = 0; i &lt; array.size(); i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (array.get(i) &gt; max)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                max = array.get(i);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (array.get(i) &lt; min)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                min = array.get(i);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int bucketCount = (max - min) / bucketSize + 1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ArrayList&lt;ArrayList&lt;Integer&gt;&gt; bucketArr = new ArrayList&lt;&gt;(bucketCount);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ArrayList&lt;Integer&gt; resultArr = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = 0; i &lt; bucketCount; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            bucketArr.add(new ArrayList&lt;Integer&gt;());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = 0; i &lt; array.size(); i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            bucketArr.get((array.get(i) - min) / bucketSize).add(array.get(i));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = 0; i &lt; bucketCount; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (bucketSize == 1) { // 如果带排序数组中有重复数字时</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                for (int j = 0; j &lt; bucketArr.get(i).size(); j++)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    resultArr.add(bucketArr.get(i).get(j));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                if (bucketCount == 1)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    bucketSize--;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                ArrayList&lt;Integer&gt; temp = BucketSort(bucketArr.get(i), bucketSize);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                for (int j = 0; j &lt; temp.size(); j++)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    resultArr.add(temp.get(j));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return resultArr;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>9.4 算法分析</p><p>桶排序最好情况下使用线性时间O(n)，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，因为其它部分的时间复杂度都为O(n)。很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大。</p><ul><li>最佳情况：T(n) = O(n+k)</li><li>最差情况：T(n) = O(n+k)</li><li>平均情况：T(n) = O(n2)</li></ul></blockquote><h4 id="基数排序-radix-sort" tabindex="-1">基数排序（Radix Sort） <a class="header-anchor" href="#基数排序-radix-sort" aria-hidden="true">#</a></h4><p><strong>基数排序</strong>也是非比较的排序算法，对每一位进行排序，从最低位开始排序，复杂度为O(kn),为数组长度，k为数组中的数的最大的位数；</p><p><strong>基数排序</strong>是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。</p><ul><li><p>10.1 算法描述</p><ul><li>步骤1：取得数组中的最大数，并取得位数；</li><li>步骤2：arr为原始数组，从最低位开始取每个位组成radix数组；</li><li>步骤3：对radix进行计数排序（利用计数排序适用于小范围数的特点）；</li></ul></li><li><p>10.2 动图演示</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzI0NTM2NjgtMTM5NzY2MjUyNy5naWY.gif" alt="image"></p></li><li><p>10.3 代码实现</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> /**</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * 基数排序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * @param array</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     * @return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public static int[] RadixSort(int[] array) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (array == null || array.length &lt; 2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            return array;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1.先算出最大数的位数；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int max = array[0];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = 1; i &lt; array.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            max = Math.max(max, array[i]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int maxDigit = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        while (max != 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            max /= 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            maxDigit++;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int mod = 10, div = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ArrayList&lt;ArrayList&lt;Integer&gt;&gt; bucketList = new ArrayList&lt;ArrayList&lt;Integer&gt;&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = 0; i &lt; 10; i++)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            bucketList.add(new ArrayList&lt;Integer&gt;());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        for (int i = 0; i &lt; maxDigit; i++, mod *= 10, div *= 10) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            for (int j = 0; j &lt; array.length; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                int num = (array[j] % mod) / div;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                bucketList.get(num).add(array[j]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            int index = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            for (int j = 0; j &lt; bucketList.size(); j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                for (int k = 0; k &lt; bucketList.get(j).size(); k++)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                    array[index++] = bucketList.get(j).get(k);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                bucketList.get(j).clear();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return array;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>10.4 算法分析</p><ul><li>最佳情况：T(n) = O(n * k)</li><li>最差情况：T(n) = O(n * k)</li><li>平均情况：T(n) = O(n * k)</li></ul></li><li><p>10.5 基数排序有两种方法：</p><ul><li>MSD 从高位开始进行排序</li><li>LSD 从低位开始进行排序</li></ul></li><li><p><strong>基数排序</strong> vs <strong>计数排序</strong> vs <strong>桶排序</strong></p><p>这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：</p><ul><li><strong>基数排序：</strong> 根据键值的每位数字来分配桶</li><li><strong>计数排序：</strong> 每个桶只存储单一键值</li><li><strong>桶排序：</strong> 每个桶存储一定范围的数值</li></ul></li></ul><h3 id="查找算法" tabindex="-1">查找算法 <a class="header-anchor" href="#查找算法" aria-hidden="true">#</a></h3><h4 id="二分查找" tabindex="-1">二分查找 <a class="header-anchor" href="#二分查找" aria-hidden="true">#</a></h4><blockquote><p>首先，假设表中元素是按升序排列，将表中间位置记录的<a href="https://baike.baidu.com/item/%E5%85%B3%E9%94%AE%E5%AD%97?fromModule=lemma_inlink" target="_blank" rel="noreferrer">关键字</a>与查找关键字比较，如果两者相等，则查找成功；否则利用中间位置<a href="https://baike.baidu.com/item/%E8%AE%B0%E5%BD%95/1837758?fromModule=lemma_inlink" target="_blank" rel="noreferrer">记录</a>将表分成前、后两个子表，如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。重复以上过程，直到找到满足条件的<a href="https://baike.baidu.com/item/%E8%AE%B0%E5%BD%95/1837758?fromModule=lemma_inlink" target="_blank" rel="noreferrer">记录</a>，使查找成功，或直到子表不存在为止，此时查找不成功。</p><p>时间复杂度： O(log2n)</p></blockquote><p>非递归</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BinarySearch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">midValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">midValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">midValue</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//使用二分查找必须是已经排好序的数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">77</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">266</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">888</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1999</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2222</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4982</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">BinarySearch</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">77</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//4</span></span>
<span class="line"></span></code></pre></div><p>递归实现：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BSearch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">end</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">midValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">midValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">BSearch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">BSearch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//使用二分查找必须是已经排好序的数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">77</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">266</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">888</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1999</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2222</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4982</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">BSearch</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">77</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//4</span></span>
<span class="line"></span></code></pre></div>`,108),e=[o];function c(t,r,i,C,A,y){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{g as __pageData,u as default};
