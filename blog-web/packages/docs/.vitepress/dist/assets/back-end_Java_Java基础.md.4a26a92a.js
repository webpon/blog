import{_ as s,c as n,o as a,a as l}from"./app.4c415d62.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"back-end/Java/Java基础.md"}'),p={name:"back-end/Java/Java基础.md"},t=l(`<h4 id="java简介" tabindex="-1">Java简介 <a class="header-anchor" href="#java简介" aria-hidden="true">#</a></h4><blockquote><p>Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的高级程序设计语言。</p><p>Java 可运行于多个平台，如 Windows, Mac OS 及其他多种 UNIX 版本的系统。</p><p>本教程通过简单的实例将让大家更好的了解 Java 编程语言。</p><p>Java基础是学习JavaEE、大数据、Andriod开发的基石！</p></blockquote><h5 id="三大体系" tabindex="-1">三大体系 <a class="header-anchor" href="#三大体系" aria-hidden="true">#</a></h5><p>Java分为三个体系，分别为Java SE（J2SE，Java2 Platform Standard Edition，标准版），</p><p>JavaEE（J2EE，Java 2 Platform, Enterprise Edition，企业版），</p><p>Java ME（J2ME，Java 2 Platform Micro Edition，微型版）。</p><p>JavaSE</p><p>它允许开发和部署在桌面、服务器、嵌入式环境和实时环境中使用的 Java 应用程序。Java SE 包含了支持 Java Web 服务开发的类，并为 Java Platform，Enterprise Edition（Java EE）提供基础。</p><p><strong>JavaEE</strong></p><p>JavaEE是在JavaSE的基础上构建的，用来开发B/S架构软件，也就是开发企业级应用，所以称为企业版 帮助开发和部署可移植、健壮、可伸缩且安全的服务器端 Java 应用程序。Java EE 是在 Java SE 的基础上构建的，它提供 Web 服务、组件模型、管理和通信 API，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和 Web 2.0 应用程序。</p><p><strong>JavaME</strong></p><p>Java ME为在移动设备和嵌入式设备（比如手机、PDA、电视机顶盒和打印机）上运行的应用程序提供一个健壮且灵活的环境。Java ME包括灵活的用户界面、健壮的安全模式、许多内置的网络协议以及对于动态下载的连网和离线应用程序的丰富支持。基于Java ME规范的应用程序只需要编写 一次，就可以用于许多设备，而且可以利用每个设备的本级功能。</p><p>再总结一下，JavaSE是Java的基础，主要针对桌面程序开发；JavaEE是针对企业级应用开发；而JavaME是主要针对嵌入式设备软件开发</p><h5 id="java语言的特点" tabindex="-1">Java语言的特点 <a class="header-anchor" href="#java语言的特点" aria-hidden="true">#</a></h5><p>​ <strong>特点一：面向对象</strong></p><p>​ <code>两个基本概念</code>：类、对象</p><p>​ <code>三大特性</code>：封装、继承、多态</p><p>​ <strong>特点二：健壮性</strong></p><p>​ 吸收了C/C++语言的优点，但去掉了其影响程序健壮性的部分（如指针、内存的申请与释放等），提供了一个相对安全的内存管理</p><p>​ 和访问机制</p><p>​ <strong>特点三：跨平台性</strong></p><p>​ <code>跨平台性</code>：通过Java语言编写的应用程序在不同的系统平台上都可以运行。“Write once , Run Anywhere&quot;</p><p>​ 原理：只要在需要运行java应用程序的操作系统上，先安装一个Java虚拟机（JVM Java Virtual Machine)即可。由JVM</p><p>​ 来负责Java程序在该系统中的运行。</p><h5 id="java组成" tabindex="-1">Java组成 <a class="header-anchor" href="#java组成" aria-hidden="true">#</a></h5><p>●Java编程语言，即语法。</p><p>●Java文件格式，即各种文件夹、文件的后缀。</p><p>●Java虚拟机(JVM——Java Virtal Machine)，即处理*.class文件的解释器。</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220832.png" alt="image-20201229222307781" style="zoom:80%;"></p><p>●Java应用程序接口(Java API)。</p><h4 id="常用的dos命令" tabindex="-1">常用的DOS命令 <a class="header-anchor" href="#常用的dos命令" aria-hidden="true">#</a></h4><p>1、dir: 列出当前目录下的文件以及文件夹</p><p>2、md: 创建目录</p><p>3、rd: 删除目录</p><p>4、cd: 进入指定目录</p><p>5、cd ..：退回到上一级目录</p><p>6、cd \\：退回到根目录</p><p>7、del：删除文件</p><p>8、exit：退出dos命令行</p><p>9、cls：清空dos页面内容</p><p>10、切换盘符输入盘符名加：就行，例：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220837.png" alt="image-20201229212811291" style="zoom:80%;"><p><code>注：windows不区分大小写</code></p><h4 id="环境搭建" tabindex="-1">环境搭建 <a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a></h4><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220840.png" alt="image-20201229222809508" style="zoom:80%;"><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220843.png" alt="image-20201229222838773"></p><h5 id="安装jdk" tabindex="-1">安装JDK <a class="header-anchor" href="#安装jdk" aria-hidden="true">#</a></h5><p>1、双击安装包</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505221934.png" alt="image-20201229223143747"></p><p>2、直接全按下一步，也可以更换安装路径</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505221926.png" alt="image-20201229223340203" style="zoom:80%;"></p><p>3、这时候可能会弹出一个jre安装弹窗，可以直接关掉，建议安装，也是直接全部下一步就行了</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220849.png" alt="image-20201229223536841" style="zoom:80%;"></p><p>4、安装完成</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220852.png" alt="image-20201229223612020" style="zoom:80%;"></p><p>5、打开安装目录</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220855.png" alt="image-20201229224055374" style="zoom:80%;"></p><p><strong>我们运行java程序的流程是：</strong></p><p>创建一个.java后缀文件</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220859.png" alt="image-20201229224350615"></p><p>编写代码并保存：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     class HelloWorld{</span></span>
<span class="line"><span style="color:#A6ACCD;">           public static void main(String[] args){</span></span>
<span class="line"><span style="color:#A6ACCD;">               System.out.printf(&quot;Hello World&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>利用<code>javac.exe</code>程序把.java文件编译成.class文件</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220901.png" alt="image-20201229224620808"></p><p>这时候在.java文件目录下就会生成一个.class文件了</p><p>我们再用<code>java.exe</code>程序运行.class文件</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220904.png" alt="image-20201229224800391"></p><p>但是上面使用<code>javac.exe</code>和<code>java.exe</code>是不能直接使用的，我们<code>需要配置环境变量</code></p><h5 id="环境变量的配置" tabindex="-1">环境变量的配置 <a class="header-anchor" href="#环境变量的配置" aria-hidden="true">#</a></h5><p>最简单配置方式：</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220908.png" alt="image-20201229225221362" style="zoom:67%;"></p><p>把javaJDK的文件目录下的bin目录路径复制到Path环境变量下就行了</p><p>第二中配置方式（推荐）：</p><p>​ 第一步：先建立一个变量</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220911.png" alt="image-20201229225415655" style="zoom:67%;"></p><p>​ 第二部：在Path变量引用上面的变量</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220914.png" alt="image-20201229225455326" style="zoom:67%;"></p><p>​ 最后，测试：</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220917.png" alt="image-20201229225538874" style="zoom:80%;"></p><p>​ 完美成功</p><h4 id="idea使用" tabindex="-1">idea使用 <a class="header-anchor" href="#idea使用" aria-hidden="true">#</a></h4><blockquote><p>安装与激活教程<a href="https://www.ajihuo.com/soft/4329.html" target="_blank" rel="noreferrer">https://www.ajihuo.com/soft/4329.html</a></p></blockquote><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625025815874.png" alt="image-20220625025815874" style="zoom:50%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625030518094.png" alt="image-20220625030518094" style="zoom:50%;"><h4 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true">#</a></h4><ol><li><strong>java程序编写-编译-运行的过程</strong></li></ol><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220920.png" alt="image-20201229233248830" style="zoom:67%;"><p>编写：我们将编写的java代码保存在以&quot;.java&quot;结尾的源文件中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> class HelloWorld{</span></span>
<span class="line"><span style="color:#A6ACCD;">           public static void main(String[] args){</span></span>
<span class="line"><span style="color:#A6ACCD;">               System.out.printf(&quot;Hello World&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>编译：使用javac.exe命令编译我们的java源文件。格式：javac 源文件名.java</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220924.png" alt="image-20201229224620808"></p><p>运行：使用java.exe命令解释运行我们的字节码文件。 格式：java 类名</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220927.png" alt="image-20201229233248830" style="zoom:80%;"><ol start="2"><li><p><strong>在一个java源文件中可以声明多个class。但是，只能最多有一个类声明为public的。</strong><strong>而且要求声明为public的类的类名必须与源文件名相同.</strong></p></li><li><p><strong>程序的入口是main()方法。格式是固定的</strong>。</p></li><li><p><strong>输出语句：</strong> System.out.println():先输出数据，然后换行 System.out.print():只输出数据</p></li><li><p><strong>每一行执行语句都以&quot;;&quot;结束。</strong></p></li><li><p><strong>编译的过程：编译以后，会生成一个或多个字节码文件。字节码文件的文件名与java源文件中的类名相同。</strong></p></li></ol><h4 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-hidden="true">#</a></h4><h5 id="变量、常量" tabindex="-1">变量、常量 <a class="header-anchor" href="#变量、常量" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625105554554.png" alt="image-20220625105554554" style="zoom:67%;"><p><strong>标识符</strong></p><blockquote><p>标识符就是由一些字符、符号组合起来的名称，用于给类，方法，变量等起名字的规矩。</p></blockquote><p>标识符的要求：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625114851373.png" alt="image-20220625114851373" style="zoom:50%;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    变量名：全部大写字母组成</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    包名：小写组成  域名倒置   com.baidu  com.wenyue</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    常量：final 数据类型 常量名 = 值； 值不可以改变。</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    变量：可以改变</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    数据类型  变量名 = 值；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    final double PI;</span></span>
<span class="line"><span style="color:#A6ACCD;">    PI = 3.14;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //PI = 3.23;  //常量只能赋值一次</span></span>
<span class="line"><span style="color:#A6ACCD;">    int $c = 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(&quot;$c=&quot;+$c);</span></span>
<span class="line"><span style="color:#A6ACCD;">    //进制：</span></span>
<span class="line"><span style="color:#A6ACCD;">    int  a = 010;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">    int b = 0xa1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(b);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    // 1、变量需要先声明再使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    int a = 23;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2、变量声明后，不能存储其他类型的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 错误 a = 1.5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 3、变量的有效范围是从定义开始到“}”截至，且在同一个范围内部不能定义2个同名的变量</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int b = 25;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(b);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // int b = 100;  // 报错</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // int a = 234; // 报错</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = 200; // 这里不是定义，在赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 4、变量定义的时候可以没有初始值，但是使用的时候必须给初始值；</span></span>
<span class="line"><span style="color:#A6ACCD;">    int c;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // System.out.println(c);  // 错误</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625113236666.png" alt="image-20220625113236666" style="zoom:50%;"><h5 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-hidden="true">#</a></h5><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625113528115.png" alt="image-20220625113528115" style="zoom:50%;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    基本数据类型：</span></span>
<span class="line"><span style="color:#A6ACCD;">        整型：byte（1字节 -128~127 Byte） short（2字节 -32768~32767 Short） int（4字节 -2147483648~2147483647  Integer） long（8字节  0L   Long）</span></span>
<span class="line"><span style="color:#A6ACCD;">        浮点型：float（4字节 Float 0.0f） double（8字节  Double）</span></span>
<span class="line"><span style="color:#A6ACCD;">        字符型：char（2字节  Character）</span></span>
<span class="line"><span style="color:#A6ACCD;">        布尔型：boolean  （true   false   Boolen）</span></span>
<span class="line"><span style="color:#A6ACCD;">    引用数据类型:</span></span>
<span class="line"><span style="color:#A6ACCD;">        类  class</span></span>
<span class="line"><span style="color:#A6ACCD;">        数组  array</span></span>
<span class="line"><span style="color:#A6ACCD;">        接口 interface</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     byte b1 = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //byte b2 = 200;  越界</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 浮点型（小数）</span></span>
<span class="line"><span style="color:#A6ACCD;">    // float单精度 占4个字节</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 注意：随便写一个小数字面量默认是double类型，如果希望随便写一个小数字面量是float类型的需要在其后面加上F或者f</span></span>
<span class="line"><span style="color:#A6ACCD;">    float score = 98.5F;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>关键字</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625114556237.png" alt="image-20220625114556237" style="zoom:50%;"><h5 id="类型转换" tabindex="-1">类型转换 <a class="header-anchor" href="#类型转换" aria-hidden="true">#</a></h5><blockquote><p>类型范围小的变量，可以直接赋值给类型范围大的变量</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">数据类型转换：</span></span>
<span class="line"><span style="color:#A6ACCD;">		自动类型转换：小---&gt;大</span></span>
<span class="line"><span style="color:#A6ACCD;">			byte,short,char--&gt;int--&gt;long--&gt;float--&gt;double</span></span>
<span class="line"><span style="color:#A6ACCD;">			char可按照ASCII进行转换：a--》 97   A--》 65  0--》 48  </span></span>
<span class="line"><span style="color:#A6ACCD;">		强制类型转换：大--&gt; 小</span></span>
<span class="line"><span style="color:#A6ACCD;">			（目标类型）变量</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="自动类型转换" tabindex="-1">自动类型转换 <a class="header-anchor" href="#自动类型转换" aria-hidden="true">#</a></h6><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220626093750498.png" alt="image-20220626093750498" style="zoom:50%;"><p>示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 自动类型转换</span></span>
<span class="line"><span style="color:#A6ACCD;">float f = 4.5f;</span></span>
<span class="line"><span style="color:#A6ACCD;">short s = 45;</span></span>
<span class="line"><span style="color:#A6ACCD;">double d = 10.5;</span></span>
<span class="line"><span style="color:#A6ACCD;">double sum = b+a+f+s+d;//结果自动提升为double类型</span></span>
<span class="line"><span style="color:#A6ACCD;">// 如果相加数大于自身类型会自动转换成int</span></span>
<span class="line"><span style="color:#A6ACCD;">byte i = 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">byte j = 110;</span></span>
<span class="line"><span style="color:#A6ACCD;">// byte k = i + j;   //报错</span></span>
<span class="line"><span style="color:#A6ACCD;">int k = i + j;</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(k);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">byte a = 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">int b = a;  // 发生了自动转换</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(b);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int age = 23;</span></span>
<span class="line"><span style="color:#A6ACCD;">double db = age; // 自动转换类型</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(db);     // 输出23.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">char ch = &#39;a&#39;;   // 00000000 01100001</span></span>
<span class="line"><span style="color:#A6ACCD;">int code = ch;   // 00000000 00000000 00000000 01100001</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(code);   // 输出97</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>注意事项：</p><ul><li>表达式的最终结果类型由表达式中的最高类型决定。</li><li>在表达式中，byte、short、char 是直接转换成int类型参与运算的。</li></ul><h6 id="强制类型转换" tabindex="-1">强制类型转换 <a class="header-anchor" href="#强制类型转换" aria-hidden="true">#</a></h6><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220626095617597.png" alt="image-20220626095617597" style="zoom:50%;"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220626095839111.png" alt="image-20220626095839111" style="zoom:50%;"><h5 id="转义符" tabindex="-1">转义符 <a class="header-anchor" href="#转义符" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  转义：有格式的输出。通过\\改变后面跟随的字符的含义</span></span>
<span class="line"><span style="color:#A6ACCD;">	\\t:制表位</span></span>
<span class="line"><span style="color:#A6ACCD;">	\\n：换行</span></span>
<span class="line"><span style="color:#A6ACCD;">	\\\\：斜杠</span></span>
<span class="line"><span style="color:#A6ACCD;">	\\&quot;：双引号</span></span>
<span class="line"><span style="color:#A6ACCD;">	\\r\\n:回车换行</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-hidden="true">#</a></h5><ul><li><p>逻辑运算符: &amp;&amp;(逻辑与) ||（逻辑或） !（逻辑非） &amp; | ^ 异或</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  a&amp;&amp;b（短路）:如果a为false，则结果为false。b将不被判断</span></span>
<span class="line"><span style="color:#A6ACCD;">  a&amp;b:如果a为false，结果为false。b会进行判断。a与b都会执行。</span></span>
<span class="line"><span style="color:#A6ACCD;">  a||b（短路）:如果a为true，则结果为true。b将不被判断</span></span>
<span class="line"><span style="color:#A6ACCD;">  a|b:如果a为true，结果为true。b会进行判断。a与b都会执行。</span></span>
<span class="line"><span style="color:#A6ACCD;">  a^b:相同为false，不同为true。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>条件运算符： <strong>三目运算符 ？ ：</strong></p></li></ul><blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">条件表达式?语句1：语句2； //当表达式为true，结果为语句1，否则为语句2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></blockquote><ul><li><p>字符串连接符 +</p></li><li><p>位运算符： &amp;(按位与) |（按位或） ^（按位异或） ~（按位取反） &gt;&gt;（右移） &lt;&lt;（左移） &gt;&gt;&gt;（无符号右移）</p></li><li><p>进制转换：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  十进制---》二进制 : 除2取余  10--》1010</span></span>
<span class="line"><span style="color:#A6ACCD;">  二进制 --》十进制  ：位权 * 符号^(n-1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  (1010)二----&gt;（0*2^0+1*2^1+0*2^2+1*2^3） =10</span></span>
<span class="line"><span style="color:#A6ACCD;">  八进制---》二进制 </span></span>
<span class="line"><span style="color:#A6ACCD;">  1)通过十进制转换</span></span>
<span class="line"><span style="color:#A6ACCD;">  2) 773 八--&gt; 111 111 011  二</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><p>示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    int a = 4, b =3;</span></span>
<span class="line"><span style="color:#A6ACCD;">    int c = a++ + ++b + ++a; // c = 4 + 4 + 6</span></span>
<span class="line"><span style="color:#A6ACCD;">    int d = --b + ++a/2 - b++%2; // d = 3 + 7/2 – 3%2 </span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(&quot;a=&quot; + a + &quot;,b=&quot; + b + &quot;,c=&quot; + c + &quot;,d=&quot; + d);  //a=7; b=4; c=10; d=5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>位运算示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    System.out.println(5&amp;3); //1</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(5|3); //7</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(5^3);  //6</span></span>
<span class="line"><span style="color:#A6ACCD;">            5 : 0000 0101</span></span>
<span class="line"><span style="color:#A6ACCD;">            3 : 0000 0011</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            0101</span></span>
<span class="line"><span style="color:#A6ACCD;">          &amp; 0011</span></span>
<span class="line"><span style="color:#A6ACCD;">            0001   //1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            0101</span></span>
<span class="line"><span style="color:#A6ACCD;">          | 0011</span></span>
<span class="line"><span style="color:#A6ACCD;">            0111   //7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            0101</span></span>
<span class="line"><span style="color:#A6ACCD;">          ^ 0011</span></span>
<span class="line"><span style="color:#A6ACCD;">            0110   //6</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(~5);</span></span>
<span class="line"><span style="color:#A6ACCD;">    /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       ~5 = -6</span></span>
<span class="line"><span style="color:#A6ACCD;">       0000 0101</span></span>
<span class="line"><span style="color:#A6ACCD;">       1111 1010  (取反)--&gt;  -1 1111 1001  --&gt;取反 0000 0110</span></span>
<span class="line"><span style="color:#A6ACCD;">       每一位数取反，0即为1,1即为0.</span></span>
<span class="line"><span style="color:#A6ACCD;">       如果出现负数，就按照负数的方式进行转换</span></span>
<span class="line"><span style="color:#A6ACCD;">       如果正数取反，+1 ，得到真实的数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       正数：原码 --》3  11</span></span>
<span class="line"><span style="color:#A6ACCD;">       负数:  -3</span></span>
<span class="line"><span style="color:#A6ACCD;">      原码： 0000 0011</span></span>
<span class="line"><span style="color:#A6ACCD;">      反码:  1111 1100</span></span>
<span class="line"><span style="color:#A6ACCD;">      +1 1111 1101</span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    //二进制输出使用：Integer.toBinaryString()</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(Integer.toBinaryString(10));</span></span>
<span class="line"><span style="color:#A6ACCD;">       System.out.println(Integer.toBinaryString(-5));</span></span>
<span class="line"><span style="color:#A6ACCD;">    /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       -5：</span></span>
<span class="line"><span style="color:#A6ACCD;">       5的原码：  0000 0101</span></span>
<span class="line"><span style="color:#A6ACCD;">       5的补码：  1111 1010</span></span>
<span class="line"><span style="color:#A6ACCD;">     +1:  1111 1011</span></span>
<span class="line"><span style="color:#A6ACCD;">    负数的二进制 就是正数的补码+1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    9二进制：0000 0000 0000 0000 0000 0000 0000 1001</span></span>
<span class="line"><span style="color:#A6ACCD;">    -9二进制：</span></span>
<span class="line"><span style="color:#A6ACCD;">    9 原码：0000 0000 0000 0000 0000 0000 0000 1001</span></span>
<span class="line"><span style="color:#A6ACCD;">    9 反码：1111 1111 1111 1111 1111 1111 1111 0110</span></span>
<span class="line"><span style="color:#A6ACCD;">      +11111 1111 1111 1111 1111 1111 1111 0111</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>相关工具：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    System.out.println(Integer.toBinaryString(-9));</span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer.toBinaryString(a) :二进制</span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer.toHexString(a):十六进制</span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer.toOctalString(a):八进制</span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer.MAX_VALUE :int类型的最大值</span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer.MIN_VALUE:int类型最小值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    十六进制转十进制</span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer.valueOf(a+&quot;&quot;,16)</span></span>
<span class="line"><span style="color:#A6ACCD;">    八进制转十进制</span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer.valueOf(a+&quot;&quot;,8)</span></span>
<span class="line"><span style="color:#A6ACCD;">    二进制转十进制</span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer.valueOf(a+&quot;&quot;,2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>位操作举例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    System.out.println(6&gt;&gt;2);//6*1/4=1</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(6&lt;&lt;2);//6*4=24</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(&quot;-6&gt;&gt;2=&quot;+(-6&gt;&gt;2));//-6*1/4=-2</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(&quot;-13&gt;&gt;2=&quot;+(-13&gt;&gt;2));//-14*1/4=-4</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(&quot;-12&gt;&gt;2=&quot;+(-12&gt;&gt;2));//-12*1/4=-3</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(&quot;-6/4=&quot;+(-6/4));//-6*1/4=-1</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(&quot;-1/4=&quot;+(-1/4));//-1*1/4=0</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(&quot;-6&gt;&gt;&gt;2=&quot;+(-6&gt;&gt;&gt;2));//21073741822</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>最有效的方式计算2*8 = 2 * 2^3</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    System.out.println(2&lt;&lt;3);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>进行两个数互换</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    int a = 5 , b = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //第一种方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    int c = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = b ;</span></span>
<span class="line"><span style="color:#A6ACCD;">    b = c;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 第二种方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = a+b;  //可能溢出</span></span>
<span class="line"><span style="color:#A6ACCD;">    b = a - b;</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = a - b;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //第三种方法（优先使用）</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = a ^ b ;</span></span>
<span class="line"><span style="color:#A6ACCD;">    b = a^ b;//a ^ b ^ b</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = a ^ b;  //a ^ b ^ a</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.out.println(&quot;a=&quot;+a+&quot;,b=&quot;+b);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p>有三个数，获得最大值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	int  x = 10 , y = 20 , c = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">	int t = x &gt; y ? x : y;</span></span>
<span class="line"><span style="color:#A6ACCD;">	int max = t &gt; c ? t : c;</span></span>
<span class="line"><span style="color:#A6ACCD;">	System.out.println(&quot;max=&quot;+max);</span></span>
<span class="line"><span style="color:#A6ACCD;">	*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p>将一个十进制转换为十六进制（位运算符）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	//思路：</span></span>
<span class="line"><span style="color:#A6ACCD;">	/*</span></span>
<span class="line"><span style="color:#A6ACCD;">		1 转换成二进制，取第四位，判断是不是大于10，如果大于10，则转换成a~f</span></span>
<span class="line"><span style="color:#A6ACCD;">		2 右移四位，再重复第一步，直到值为0时，中断</span></span>
<span class="line"><span style="color:#A6ACCD;">	*/</span></span>
<span class="line"><span style="color:#A6ACCD;">	int num  = 30;   //0001 1110</span></span>
<span class="line"><span style="color:#A6ACCD;">	int n = num &amp; 15;//0000 1110   低四位</span></span>
<span class="line"><span style="color:#A6ACCD;">	num = num &gt;&gt; 4 ;//取下一个四位数</span></span>
<span class="line"><span style="color:#A6ACCD;">	char c = (char)(n - 10 + &#39;a&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	System.out.println(&quot;0x&quot;+num+c);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p>判断闰年</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	int year = input.nextInt();</span></span>
<span class="line"><span style="color:#A6ACCD;">	if(year %4 ==0 &amp;&amp; year %100!=0 || year % 400==0){</span></span>
<span class="line"><span style="color:#A6ACCD;">		System.out.println(&quot;闰年&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	else{</span></span>
<span class="line"><span style="color:#A6ACCD;">		System.out.println(&quot;平年&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p>产生随机数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    double Math.random()---&gt;0-1</span></span>
<span class="line"><span style="color:#A6ACCD;">    //Math.random()*(大数-小数+1)+小数 //(小数，大数)范围的数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p>九九乘法表</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    int i = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        while(i&lt;=9){</span></span>
<span class="line"><span style="color:#A6ACCD;">            int j = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            do{</span></span>
<span class="line"><span style="color:#A6ACCD;">                System.out.print(j+&quot;*&quot;+i+&quot;=&quot;+i*j+&quot;\\t&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                j++;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }while(j&lt;=i);</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println();</span></span>
<span class="line"><span style="color:#A6ACCD;">            i++;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p>菱形</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	/*</span></span>
<span class="line"><span style="color:#A6ACCD;">			*</span></span>
<span class="line"><span style="color:#A6ACCD;">		   ***</span></span>
<span class="line"><span style="color:#A6ACCD;">		  *****</span></span>
<span class="line"><span style="color:#A6ACCD;">		 *******</span></span>
<span class="line"><span style="color:#A6ACCD;">		  *****</span></span>
<span class="line"><span style="color:#A6ACCD;">		   ***</span></span>
<span class="line"><span style="color:#A6ACCD;">		    *</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	*/</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(int i = 1;i&lt;=4;i++){ //行</span></span>
<span class="line"><span style="color:#A6ACCD;">		//空格</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(int j=1;j&lt;=4-i;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			System.out.print(&quot; &quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		//变量作用域：从声明的位置开始，到它所在的结构结束为止</span></span>
<span class="line"><span style="color:#A6ACCD;">		//星号</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(int j=1;j&lt;= 2*i-1;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			System.out.print(&quot;*&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">			//换行</span></span>
<span class="line"><span style="color:#A6ACCD;">		System.out.println();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(int i = 1 ; i&lt;=3 ;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">		//空格</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(int j=1;j&lt;=i;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			System.out.print(&quot; &quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		//星号</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(int j=1;j&lt;=7-2*i;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			System.out.print(&quot;*&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		//换行</span></span>
<span class="line"><span style="color:#A6ACCD;">		System.out.println();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p>空心菱形</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> /*</span></span>
<span class="line"><span style="color:#A6ACCD;">	   *</span></span>
<span class="line"><span style="color:#A6ACCD;">	  * *</span></span>
<span class="line"><span style="color:#A6ACCD;">	 *   *</span></span>
<span class="line"><span style="color:#A6ACCD;">	*     *</span></span>
<span class="line"><span style="color:#A6ACCD;">	 *   *</span></span>
<span class="line"><span style="color:#A6ACCD;">	  * *</span></span>
<span class="line"><span style="color:#A6ACCD;">	   *</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">   for(int i = 1;i&lt;=4;i++){ //行</span></span>
<span class="line"><span style="color:#A6ACCD;">		//空格</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(int j=1;j&lt;=4-i;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			System.out.print(&quot; &quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		//变量作用域：从声明的位置开始，到它所在的结构结束为止</span></span>
<span class="line"><span style="color:#A6ACCD;">		//星号</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(int j=1;j&lt;= 2*i-1;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			if(j==1 || j==2*i-1)</span></span>
<span class="line"><span style="color:#A6ACCD;">				System.out.print(&quot;*&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			else</span></span>
<span class="line"><span style="color:#A6ACCD;">				System.out.print(&quot; &quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">			//换行</span></span>
<span class="line"><span style="color:#A6ACCD;">		System.out.println();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(int i = 1 ; i&lt;=3 ;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">		//空格</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(int j=1;j&lt;=i;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			System.out.print(&quot; &quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		//星号</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(int j=1;j&lt;=7-2*i;j++){</span></span>
<span class="line"><span style="color:#A6ACCD;">			if(j==1 || j==7-2*i)</span></span>
<span class="line"><span style="color:#A6ACCD;">				System.out.print(&quot;*&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			else</span></span>
<span class="line"><span style="color:#A6ACCD;">				System.out.print(&quot; &quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		//换行</span></span>
<span class="line"><span style="color:#A6ACCD;">		System.out.println();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p>####switch 结构 switch(表达式){ //byte short int char 枚举（jdk1.5 enum） String（jdk1.7） case 常量1： 语句1； break； case 常量2： 语句2； break； ... default： 语句n; break; }</p><p>注意：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1 break可有可无</span></span>
<span class="line"><span style="color:#A6ACCD;">2 case后面的常量值一定不能相同。</span></span>
<span class="line"><span style="color:#A6ACCD;">3 表达式类型</span></span>
<span class="line"><span style="color:#A6ACCD;">4 case后的语句可以省略</span></span>
<span class="line"><span style="color:#A6ACCD;">switch(表达式){</span></span>
<span class="line"><span style="color:#A6ACCD;">	case  常量1：</span></span>
<span class="line"><span style="color:#A6ACCD;">	case 常量2：</span></span>
<span class="line"><span style="color:#A6ACCD;">	case 常量3：</span></span>
<span class="line"><span style="color:#A6ACCD;">		语句1；</span></span>
<span class="line"><span style="color:#A6ACCD;">		break；</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><ul><li>for、while、do-while何时采用？</li></ul><blockquote><p>已知循环次数：首选for 循环次数未知：首选while、do-while 如果循环结束后，循环的变量不需要继续使用，可以for</p></blockquote><ul><li>if和switch何时采用？</li></ul><blockquote><p>区间判断：if 等值判断：switch</p></blockquote><h5 id="关键字" tabindex="-1">关键字 <a class="header-anchor" href="#关键字" aria-hidden="true">#</a></h5><blockquote><p>定义：被Java语言赋予了特殊含义，用做专门用途的字符串（单词）</p><p>特点：关键字中所有字母都位=为小写</p></blockquote><h5 id="运算符-1" tabindex="-1">运算符 <a class="header-anchor" href="#运算符-1" aria-hidden="true">#</a></h5><blockquote><p>对字面量或变量进行操作的符号</p></blockquote><p>计算机的最基本用途之一就是执行数学运算，作为一门计算机语言，Java也提供了一套丰富的运算符来操纵变量。我们可以把运算符分成以下几组：</p><ul><li>算术运算符</li><li>关系运算符</li><li>位运算符</li><li>逻辑运算符</li><li>赋值运算符</li><li>其他运算符</li></ul><h6 id="算术运算符" tabindex="-1">算术运算符 <a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a></h6><p>算术运算符用在数学表达式中，它们的作用和在数学中的作用一样。下表列出了所有的算术运算符。</p><p>表格中的实例假设整数变量A的值为10，变量B的值为20：</p><table><thead><tr><th style="text-align:left;">操作符</th><th style="text-align:left;">描述</th><th style="text-align:left;">例子</th></tr></thead><tbody><tr><td style="text-align:left;">+</td><td style="text-align:left;">加法 - 相加运算符两侧的值</td><td style="text-align:left;">A + B 等于 30</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">减法 - 左操作数减去右操作数</td><td style="text-align:left;">A – B 等于 -10</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">乘法 - 相乘操作符两侧的值</td><td style="text-align:left;">A * B等于200</td></tr><tr><td style="text-align:left;">/</td><td style="text-align:left;">除法 - 左操作数除以右操作数</td><td style="text-align:left;">B / A等于2</td></tr><tr><td style="text-align:left;">％</td><td style="text-align:left;">取余 - 左操作数除以右操作数的余数</td><td style="text-align:left;">B%A等于0</td></tr><tr><td style="text-align:left;">++</td><td style="text-align:left;">自增: 操作数的值增加1</td><td style="text-align:left;">B++ 或 ++B 等于 21（区别详见下文）</td></tr><tr><td style="text-align:left;">--</td><td style="text-align:left;">自减: 操作数的值减少1</td><td style="text-align:left;">B-- 或 --B 等于 19（区别详见下文）</td></tr></tbody></table><p>实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 目标：掌握基本的算术运算符的使用：+ - * / %</span></span>
<span class="line"><span style="color:#A6ACCD;">int a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">int b = 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(a + b);</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(a - b);</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(a * b);</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(a / b);         // 3.3333   ===&gt; 3</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(a * 1.0 / b);   // 3.3333</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(3 / 2);         // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(3 * 1.0 / 2);   // 1.5</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(3 / 2 * 1.0);   // 1.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>自增自减运算符</strong></p><blockquote><p><strong>1、自增（++）自减（--）运算符</strong>是一种特殊的算术运算符，在算术运算符中需要两个操作数来进行运算，而自增自减运算符是一个操作数。</p></blockquote><p><strong>实例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class selfAddMinus{</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static void main(String[] args){</span></span>
<span class="line"><span style="color:#A6ACCD;">        int a = 3;//定义一个变量；</span></span>
<span class="line"><span style="color:#A6ACCD;">        int b = ++a;//自增运算</span></span>
<span class="line"><span style="color:#A6ACCD;">        int c = 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">        int d = --c;//自减运算</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;进行自增运算后的值等于&quot;+b);</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;进行自减运算后的值等于&quot;+d);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>运行结果为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">进行自增运算后的值等于4</span></span>
<span class="line"><span style="color:#A6ACCD;">进行自减运算后的值等于2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>解析：</p><ul><li>int b = ++a; 拆分运算过程为: a=a+1=4; b=a=4, 最后结果为b=4,a=4</li><li>int d = --c; 拆分运算过程为: c=c-1=2; d=c=2, 最后结果为d=2,c=2</li></ul><p><strong>2、前缀自增自减法(++a,--a):</strong> 先进行自增或者自减运算，再进行表达式运算。</p><p><strong>3、后缀自增自减法(a++,a--):</strong> 先进行表达式运算，再进行自增或者自减运算 实例：</p><p><strong>实例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class selfAddMinus{</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static void main(String[] args){</span></span>
<span class="line"><span style="color:#A6ACCD;">        int a = 5;//定义一个变量；</span></span>
<span class="line"><span style="color:#A6ACCD;">        int b = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">        int x = 2*++a;</span></span>
<span class="line"><span style="color:#A6ACCD;">        int y = 2*b++;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;自增运算符前缀运算后a=&quot;+a+&quot;,x=&quot;+x);</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;自增运算符后缀运算后b=&quot;+b+&quot;,y=&quot;+y);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>运行结果为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">自增运算符前缀运算后a=6，x=12</span></span>
<span class="line"><span style="color:#A6ACCD;">自增运算符后缀运算后b=6，y=10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>&quot;+&quot;连接符</strong></p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220626110314817.png" alt="image-20220626110314817" style="zoom:50%;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">int a = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(&quot;abc&quot; + &#39;a&#39;);   // abca</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(&quot;abc&quot; + a);     // abc5</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(5 + a);         // 10</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(&quot;abc&quot; + 5 + &#39;a&#39;);  // 15abc15</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(a + &#39;a&#39;);       // 102</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(a + &quot;&quot; + &#39;a&#39;);  // 5a</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(a  + &#39;a&#39; + &quot;abc&quot;);  // 102abc</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(&quot;abc&quot; + a + &#39;a&#39;);   // abc5a</span></span>
<span class="line"><span style="color:#A6ACCD;">System.out.println(&quot;abc&quot; + (a + &#39;a&#39;)); // abc102</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="关系运算符" tabindex="-1">关系运算符 <a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a></h6><p>下表为Java支持的关系运算符</p><p>表格中的实例整数变量A的值为10，变量B的值为20：</p><table><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">描述</th><th style="text-align:left;">例子</th></tr></thead><tbody><tr><td style="text-align:left;">==</td><td style="text-align:left;">检查如果两个操作数的值是否相等，如果相等则条件为真。</td><td style="text-align:left;">（A == B）为假。</td></tr><tr><td style="text-align:left;">!=</td><td style="text-align:left;">检查如果两个操作数的值是否相等，如果值不相等则条件为真。</td><td style="text-align:left;">(A != B) 为真。</td></tr><tr><td style="text-align:left;">&gt;</td><td style="text-align:left;">检查左操作数的值是否大于右操作数的值，如果是那么条件为真。</td><td style="text-align:left;">（A&gt; B）为假。</td></tr><tr><td style="text-align:left;">&lt;</td><td style="text-align:left;">检查左操作数的值是否小于右操作数的值，如果是那么条件为真。</td><td style="text-align:left;">（A &lt;B）为真。</td></tr><tr><td style="text-align:left;">&gt;=</td><td style="text-align:left;">检查左操作数的值是否大于或等于右操作数的值，如果是那么条件为真。</td><td style="text-align:left;">（A&gt; = B）为假。</td></tr><tr><td style="text-align:left;">&lt;=</td><td style="text-align:left;">检查左操作数的值是否小于或等于右操作数的值，如果是那么条件为真。</td><td style="text-align:left;">（A &lt;= B）为真。</td></tr></tbody></table><p><strong>实例</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     int a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">     int b = 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a == b = &quot; + (a == b) );</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a != b = &quot; + (a != b) );</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a &gt; b = &quot; + (a &gt; b) );</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a &lt; b = &quot; + (a &lt; b) );</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;b &gt;= a = &quot; + (b &gt;= a) );</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;b &lt;= a = &quot; + (b &lt;= a) );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">a == b = false</span></span>
<span class="line"><span style="color:#A6ACCD;">a != b = true</span></span>
<span class="line"><span style="color:#A6ACCD;">a &gt; b = false</span></span>
<span class="line"><span style="color:#A6ACCD;">a &lt; b = true</span></span>
<span class="line"><span style="color:#A6ACCD;">b &gt;= a = true</span></span>
<span class="line"><span style="color:#A6ACCD;">b &lt;= a = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="位运算符" tabindex="-1">位运算符 <a class="header-anchor" href="#位运算符" aria-hidden="true">#</a></h6><p>Java定义了位运算符，应用于整数类型(int)，长整型(long)，短整型(short)，字符型(char)，和字节型(byte)等类型。</p><p>位运算符作用在所有的位上，并且按位运算。假设a = 60，b = 13;它们的二进制格式表示将如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">A = 0011 1100</span></span>
<span class="line"><span style="color:#A6ACCD;">B = 0000 1101</span></span>
<span class="line"><span style="color:#A6ACCD;">-----------------</span></span>
<span class="line"><span style="color:#A6ACCD;">A&amp;B = 0000 1100</span></span>
<span class="line"><span style="color:#A6ACCD;">A | B = 0011 1101</span></span>
<span class="line"><span style="color:#A6ACCD;">A ^ B = 0011 0001</span></span>
<span class="line"><span style="color:#A6ACCD;">~A= 1100 0011</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>下表列出了位运算符的基本运算，假设整数变量 A 的值为 60 和变量 B 的值为 13：</p><table><thead><tr><th style="text-align:left;">操作符</th><th style="text-align:left;">描述</th><th style="text-align:left;">例子</th></tr></thead><tbody><tr><td style="text-align:left;">＆</td><td style="text-align:left;">如果相对应位都是1，则结果为1，否则为0</td><td style="text-align:left;">（A＆B），得到12，即0000 1100</td></tr><tr><td style="text-align:left;">|</td><td style="text-align:left;">如果相对应位都是 0，则结果为 0，否则为 1</td><td style="text-align:left;">（A | B）得到61，即 0011 1101</td></tr><tr><td style="text-align:left;">^</td><td style="text-align:left;">如果相对应位值相同，则结果为0，否则为1</td><td style="text-align:left;">（A ^ B）得到49，即 0011 0001</td></tr><tr><td style="text-align:left;">〜</td><td style="text-align:left;">按位取反运算符翻转操作数的每一位，即0变成1，1变成0。</td><td style="text-align:left;">（〜A）得到-61，即1100 0011</td></tr><tr><td style="text-align:left;">&lt;&lt;</td><td style="text-align:left;">按位左移运算符。左操作数按位左移右操作数指定的位数。</td><td style="text-align:left;">A &lt;&lt; 2得到240，即 1111 0000</td></tr><tr><td style="text-align:left;">&gt;&gt;</td><td style="text-align:left;">按位右移运算符。左操作数按位右移右操作数指定的位数。</td><td style="text-align:left;">A &gt;&gt; 2得到15即 0000 1111</td></tr><tr><td style="text-align:left;">&gt;&gt;&gt;</td><td style="text-align:left;">按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充。</td><td style="text-align:left;">A&gt;&gt;&gt;2得到15即0000 1111</td></tr></tbody></table><p><strong>实例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     int a = 60; /* 60 = 0011 1100 */ </span></span>
<span class="line"><span style="color:#A6ACCD;">     int b = 13; /* 13 = 0000 1101 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     int c = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">     c = a &amp; b;       /* 12 = 0000 1100 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a &amp; b = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     c = a | b;       /* 61 = 0011 1101 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a | b = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     c = a ^ b;       /* 49 = 0011 0001 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a ^ b = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     c = ~a;          /*-61 = 1100 0011 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;~a = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     c = a &lt;&lt; 2;     /* 240 = 1111 0000 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a &lt;&lt; 2 = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     c = a &gt;&gt; 2;     /* 15 = 0000 1111 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a &gt;&gt; 2  = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">     c = a &gt;&gt;&gt; 2;     /* 15 = 0000 1111 */</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a &gt;&gt;&gt; 2 = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">a &amp; b = 12</span></span>
<span class="line"><span style="color:#A6ACCD;">a | b = 61</span></span>
<span class="line"><span style="color:#A6ACCD;">a ^ b = 49</span></span>
<span class="line"><span style="color:#A6ACCD;">~a = -61</span></span>
<span class="line"><span style="color:#A6ACCD;">a &lt;&lt; 2 = 240</span></span>
<span class="line"><span style="color:#A6ACCD;">a &gt;&gt; 2  = 15</span></span>
<span class="line"><span style="color:#A6ACCD;">a &gt;&gt;&gt; 2 = 15</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a></h6><p>下表列出了逻辑运算符的基本运算，假设布尔变量A为真，变量B为假</p><table><thead><tr><th style="text-align:left;">操作符</th><th style="text-align:left;">描述</th><th style="text-align:left;">例子</th></tr></thead><tbody><tr><td style="text-align:left;">&amp;&amp;</td><td style="text-align:left;">称为逻辑与运算符。当且仅当两个操作数都为真，条件才为真。</td><td style="text-align:left;">（A &amp;&amp; B）为假。</td></tr><tr><td style="text-align:left;">| |</td><td style="text-align:left;">称为逻辑或操作符。如果任何两个操作数任何一个为真，条件为真。</td><td style="text-align:left;">（A | | B）为真。</td></tr><tr><td style="text-align:left;">！</td><td style="text-align:left;">称为逻辑非运算符。用来反转操作数的逻辑状态。如果条件为true，则逻辑非运算符将得到false。</td><td style="text-align:left;">！（A &amp;&amp; B）为真。</td></tr></tbody></table><p><strong>实例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">  public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     boolean a = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">     boolean b = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a &amp;&amp; b = &quot; + (a&amp;&amp;b));</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;a || b = &quot; + (a||b) );</span></span>
<span class="line"><span style="color:#A6ACCD;">     System.out.println(&quot;!(a &amp;&amp; b) = &quot; + !(a &amp;&amp; b));</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">a &amp;&amp; b = false</span></span>
<span class="line"><span style="color:#A6ACCD;">a || b = true</span></span>
<span class="line"><span style="color:#A6ACCD;">!(a &amp;&amp; b) = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>短路逻辑运算符</strong></p><blockquote><p>当使用与逻辑运算符时，在两个操作数都为true时，结果才为true，但是当得到第一个操作为false时，其结果就必定是false，这时候就不会再判断第二个操作了。</p></blockquote><p><strong>实例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class LuoJi{</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static void main(String[] args){</span></span>
<span class="line"><span style="color:#A6ACCD;">        int a = 5;//定义一个变量；</span></span>
<span class="line"><span style="color:#A6ACCD;">        boolean b = (a&lt;4)&amp;&amp;(a++&lt;10);</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;使用短路逻辑运算符的结果为&quot;+b);</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;a的结果为&quot;+a);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>运行结果为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">使用短路逻辑运算符的结果为false</span></span>
<span class="line"><span style="color:#A6ACCD;">a的结果为5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>解析：</strong> <em>该程序使用到了短路逻辑运算符(&amp;&amp;)，首先判断 a&lt;4 的结果为 false，则 b 的结果必定是 false，所以不再执行第二个操作 a++&lt;10 的判断，所以 a 的值为 5。</em></p><h6 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a></h6><p>下面是Java语言支持的赋值运算符：</p><table><thead><tr><th style="text-align:left;">操作符</th><th style="text-align:left;">描述</th><th style="text-align:left;">例子</th></tr></thead><tbody><tr><td style="text-align:left;">=</td><td style="text-align:left;">简单的赋值运算符，将右操作数的值赋给左侧操作数</td><td style="text-align:left;">C = A + B将把A + B得到的值赋给C</td></tr><tr><td style="text-align:left;">+ =</td><td style="text-align:left;">加和赋值操作符，它把左操作数和右操作数相加赋值给左操作数</td><td style="text-align:left;">C + = A等价于C = C + A</td></tr><tr><td style="text-align:left;">- =</td><td style="text-align:left;">减和赋值操作符，它把左操作数和右操作数相减赋值给左操作数</td><td style="text-align:left;">C - = A等价于C = C - A</td></tr><tr><td style="text-align:left;">* =</td><td style="text-align:left;">乘和赋值操作符，它把左操作数和右操作数相乘赋值给左操作数</td><td style="text-align:left;">C * = A等价于C = C * A</td></tr><tr><td style="text-align:left;">/ =</td><td style="text-align:left;">除和赋值操作符，它把左操作数和右操作数相除赋值给左操作数</td><td style="text-align:left;">C / = A，C 与 A 同类型时等价于 C = C / A</td></tr><tr><td style="text-align:left;">（％）=</td><td style="text-align:left;">取模和赋值操作符，它把左操作数和右操作数取模后赋值给左操作数</td><td style="text-align:left;">C％= A等价于C = C％A</td></tr><tr><td style="text-align:left;">&lt;&lt; =</td><td style="text-align:left;">左移位赋值运算符</td><td style="text-align:left;">C &lt;&lt; = 2等价于C = C &lt;&lt; 2</td></tr><tr><td style="text-align:left;">&gt;&gt; =</td><td style="text-align:left;">右移位赋值运算符</td><td style="text-align:left;">C &gt;&gt; = 2等价于C = C &gt;&gt; 2</td></tr><tr><td style="text-align:left;">＆=</td><td style="text-align:left;">按位与赋值运算符</td><td style="text-align:left;">C＆= 2等价于C = C＆2</td></tr><tr><td style="text-align:left;">^ =</td><td style="text-align:left;">按位异或赋值操作符</td><td style="text-align:left;">C ^ = 2等价于C = C ^ 2</td></tr><tr><td style="text-align:left;">| =</td><td style="text-align:left;">按位或赋值操作符</td><td style="text-align:left;">C | = 2等价于C = C | 2</td></tr></tbody></table><p><strong>实例</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        int a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">        int b = 20;</span></span>
<span class="line"><span style="color:#A6ACCD;">        int c = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        c = a + b;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c = a + b = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        c += a ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c += a  = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        c -= a ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c -= a = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        c *= a ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c *= a = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">        c = 15;</span></span>
<span class="line"><span style="color:#A6ACCD;">        c /= a ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c /= a = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">        c = 15;</span></span>
<span class="line"><span style="color:#A6ACCD;">        c %= a ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c %= a  = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        c &lt;&lt;= 2 ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c &lt;&lt;= 2 = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        c &gt;&gt;= 2 ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c &gt;&gt;= 2 = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        c &gt;&gt;= 2 ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c &gt;&gt;= 2 = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        c &amp;= a ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c &amp;= a  = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        c ^= a ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c ^= a   = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">        c |= a ;</span></span>
<span class="line"><span style="color:#A6ACCD;">        System.out.println(&quot;c |= a   = &quot; + c );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">c = a + b = 30</span></span>
<span class="line"><span style="color:#A6ACCD;">c += a  = 40</span></span>
<span class="line"><span style="color:#A6ACCD;">c -= a = 30</span></span>
<span class="line"><span style="color:#A6ACCD;">c *= a = 300</span></span>
<span class="line"><span style="color:#A6ACCD;">c /= a = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">c %= a  = 5</span></span>
<span class="line"><span style="color:#A6ACCD;">c &lt;&lt;= 2 = 20</span></span>
<span class="line"><span style="color:#A6ACCD;">c &gt;&gt;= 2 = 5</span></span>
<span class="line"><span style="color:#A6ACCD;">c &gt;&gt;= 2 = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">c &amp;= a  = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">c ^= a   = 10</span></span>
<span class="line"><span style="color:#A6ACCD;">c |= a   = 10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>注意：扩展的赋值运算符隐含了强制类型转换</code></p><h6 id="条件运算符" tabindex="-1">条件运算符（?:） <a class="header-anchor" href="#条件运算符" aria-hidden="true">#</a></h6><blockquote><p>条件运算符也被称为三元运算符。该运算符有3个操作数，并且需要判断布尔表达式的值。该运算符的主要是决定哪个值应该赋值给变量。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">variable x = (expression) ? value if true : value if false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>实例</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String[] args){</span></span>
<span class="line"><span style="color:#A6ACCD;">      int a , b;</span></span>
<span class="line"><span style="color:#A6ACCD;">      a = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 如果 a 等于 1 成立，则设置 b 为 20，否则为 30</span></span>
<span class="line"><span style="color:#A6ACCD;">      b = (a == 1) ? 20 : 30;</span></span>
<span class="line"><span style="color:#A6ACCD;">      System.out.println( &quot;Value of b is : &quot; +  b );</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      // 如果 a 等于 10 成立，则设置 b 为 20，否则为 30</span></span>
<span class="line"><span style="color:#A6ACCD;">      b = (a == 10) ? 20 : 30;</span></span>
<span class="line"><span style="color:#A6ACCD;">      System.out.println( &quot;Value of b is : &quot; + b );</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Value of b is : 30</span></span>
<span class="line"><span style="color:#A6ACCD;">Value of b is : 20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="instanceof-运算符" tabindex="-1">instanceof 运算符 <a class="header-anchor" href="#instanceof-运算符" aria-hidden="true">#</a></h6><p>该运算符用于操作对象实例，检查该对象是否是一个特定类型（类类型或接口类型）。</p><p>instanceof运算符使用格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">( Object reference variable ) instanceof  (class/interface type)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果运算符左侧变量所指的对象，是操作符右侧类或接口(class/interface)的一个对象，那么结果为真。</p><p>下面是一个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">String name = &quot;James&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">boolean result = name instanceof String; // 由于 name 是 String 类型，所以返回真</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果被比较的对象兼容于右侧类型，该运算符仍然返回 true。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Vehicle {}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">public class Car extends Vehicle {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String[] args){</span></span>
<span class="line"><span style="color:#A6ACCD;">      Vehicle a = new Car();</span></span>
<span class="line"><span style="color:#A6ACCD;">      boolean result =  a instanceof Car;</span></span>
<span class="line"><span style="color:#A6ACCD;">      System.out.println( result);</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="java运算符优先级" tabindex="-1">Java运算符优先级 <a class="header-anchor" href="#java运算符优先级" aria-hidden="true">#</a></h6><p>当多个运算符出现在一个表达式中，谁先谁后呢？这就涉及到运算符的优先级别的问题。在一个多运算符的表达式中，运算符优先级不同会导致最后得出的结果差别甚大。</p><p>例如，（1+3）＋（3+2）*2，这个表达式如果按加号最优先计算，答案就是 18，如果按照乘号最优先，答案则是 14。</p><p>再如，x = 7 + 3 * 2;这里x得到13，而不是20，因为乘法运算符比加法运算符有较高的优先级，所以先计算3 * 2得到6，然后再加7。</p><p>下表中具有最高优先级的运算符在的表的最上面，最低优先级的在表的底部。</p><table><thead><tr><th style="text-align:left;">类别</th><th style="text-align:left;">操作符</th><th style="text-align:left;">关联性</th></tr></thead><tbody><tr><td style="text-align:left;">后缀</td><td style="text-align:left;">() [] . (点操作符)</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">一元</td><td style="text-align:left;">expr++ expr--</td><td style="text-align:left;">从左到右</td></tr><tr><td style="text-align:left;">一元</td><td style="text-align:left;">++expr --expr + - ～ ！</td><td style="text-align:left;">从右到左</td></tr><tr><td style="text-align:left;">乘性</td><td style="text-align:left;">* /％</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">加性</td><td style="text-align:left;">+ -</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">移位</td><td style="text-align:left;">&gt;&gt; &gt;&gt;&gt; &lt;&lt;</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">关系</td><td style="text-align:left;">&gt; &gt;= &lt; &lt;=</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">相等</td><td style="text-align:left;">== !=</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">按位与</td><td style="text-align:left;">＆</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">按位异或</td><td style="text-align:left;">^</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">按位或</td><td style="text-align:left;">|</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">逻辑与</td><td style="text-align:left;">&amp;&amp;</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">逻辑或</td><td style="text-align:left;">| |</td><td style="text-align:left;">左到右</td></tr><tr><td style="text-align:left;">条件</td><td style="text-align:left;">？：</td><td style="text-align:left;">从右到左</td></tr><tr><td style="text-align:left;">赋值</td><td style="text-align:left;">= + = - = * = / =％= &gt;&gt; = &lt;&lt; =＆= ^ = | =</td><td style="text-align:left;">从右到左</td></tr><tr><td style="text-align:left;">逗号</td><td style="text-align:left;">，</td><td style="text-align:left;">左到右</td></tr></tbody></table><h5 id="循环结构" tabindex="-1">循环结构 <a class="header-anchor" href="#循环结构" aria-hidden="true">#</a></h5><p>顺序循环结构的程序语句只能被执行一次。</p><p>如果想要同样的操作执行多次，就需要使用循环结构。</p><p>Java中有三种主要的循环结构：</p><ul><li><strong>while</strong> 循环</li><li><strong>do…while</strong> 循环</li><li><strong>for</strong> 循环</li></ul><p>在 Java5 中引入了一种主要用于数组的增强型 for 循环。</p><p><strong>while 循环</strong></p><p>while是最基本的循环，它的结构为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">while( 布尔表达式 ){  </span></span>
<span class="line"><span style="color:#A6ACCD;">	//循环内容</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>只要布尔表达式为 true，循环就会一直执行下去。</p><p><strong>实例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      int x = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">      while( x &lt; 20 ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;value of x : &quot; + x );</span></span>
<span class="line"><span style="color:#A6ACCD;">         x++;</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">value of x : 10</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 11</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 12</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 13</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 14</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 15</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 16</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 17</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 18</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 19</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p><strong>do…while 循环</strong></p><p>对于 while 语句而言，如果不满足条件，则不能进入循环。但有时候我们需要即使不满足条件，也至少执行一次。</p><p>do…while 循环和 while 循环相似，不同的是，do…while 循环至少会执行一次。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">do {</span></span>
<span class="line"><span style="color:#A6ACCD;">       //代码语句</span></span>
<span class="line"><span style="color:#A6ACCD;">}while(布尔表达式);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>实例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String[] args){</span></span>
<span class="line"><span style="color:#A6ACCD;">      int x = 10;</span></span>
<span class="line"><span style="color:#A6ACCD;"> 	  int y = 10;	</span></span>
<span class="line"><span style="color:#A6ACCD;">      do{</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;value of x : &quot; + x );</span></span>
<span class="line"><span style="color:#A6ACCD;">         x++;</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }while( x &lt; 10 );</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">      do{</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;value of y : &quot; + y );</span></span>
<span class="line"><span style="color:#A6ACCD;">         y++;</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         }while( y &lt; 11 );</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">value of x : 10</span></span>
<span class="line"><span style="color:#A6ACCD;">value of y : 10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p><strong>for循环</strong></p><p>虽然所有循环结构都可以用 while 或者 do...while表示，但 Java 提供了另一种语句 —— for 循环，使一些循环结构变得更加简单。</p><p>for循环执行的次数是在执行前就确定的。语法格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for(初始化; 布尔表达式; 更新) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //代码语句</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>关于 for 循环有以下几点说明：</p><ul><li>最先执行初始化步骤。可以声明一种类型，但可初始化一个或多个循环控制变量，也可以是空语句。</li><li>然后，检测布尔表达式的值。如果为 true，循环体被执行。如果为false，循环终止，开始执行循环体后面的语句。</li><li>执行一次循环后，更新循环控制变量。</li><li>再次检测布尔表达式。循环执行上面的过程。</li></ul><p><strong>实例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      for(int x = 10; x &lt; 20; x = x+1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;value of x : &quot; + x );</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">value of x : 10</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 11</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 12</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 13</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 14</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 15</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 16</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 17</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 18</span></span>
<span class="line"><span style="color:#A6ACCD;">value of x : 19</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Java 增强 for 循环</strong></p><p>Java5 引入了一种主要用于数组的增强型 for 循环。</p><p>Java 增强 for 循环语法格式如下:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for(声明语句 : 表达式)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   //代码句子</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>**声明语句：**声明新的局部变量，该变量的类型必须和数组元素的类型匹配。其作用域限定在循环语句块，其值与此时数组元素的值相等。</p><p>**表达式：**表达式是要访问的数组名，或者是返回值为数组的方法。</p><p><strong>实例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String[] args){</span></span>
<span class="line"><span style="color:#A6ACCD;">      int [] numbers = {10, 20, 30, 40, 50};</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      for(int x : numbers ){</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print( x );</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;,&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      System.out.print(&quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      String [] names ={&quot;James&quot;, &quot;Larry&quot;, &quot;Tom&quot;, &quot;Lacy&quot;};</span></span>
<span class="line"><span style="color:#A6ACCD;">      for( String name : names ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print( name );</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;,&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">10,20,30,40,50,</span></span>
<span class="line"><span style="color:#A6ACCD;">James,Larry,Tom,Lacy,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>break 关键字</strong></p><blockquote><p>break 主要用在循环语句或者 switch 语句中，用来跳出整个语句块。</p></blockquote><p>break 跳出最里层的循环，并且继续执行该循环下面的语句。</p><p><strong>语法</strong></p><p>break 的用法很简单，就是循环结构中的一条语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">break;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>实例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      int [] numbers = {10, 20, 30, 40, 50};</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      for(int x : numbers ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // x 等于 30 时跳出循环</span></span>
<span class="line"><span style="color:#A6ACCD;">         if( x == 30 ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            break;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print( x );</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><p><strong>continue 关键字</strong></p><p>continue 适用于任何循环控制结构中。作用是让程序立刻跳转到下一次循环的迭代。</p><p>在 for 循环中，continue 语句使程序立即跳转到更新语句。</p><p>在 while 或者 do…while 循环中，程序立即跳转到布尔表达式的判断语句。</p><p><strong>语法</strong></p><p>continue 就是循环体中一条简单的语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">continue;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>实例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      int [] numbers = {10, 20, 30, 40, 50};</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      for(int x : numbers ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         if( x == 30 ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        continue;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print( x );</span></span>
<span class="line"><span style="color:#A6ACCD;">         System.out.print(&quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上实例编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">20</span></span>
<span class="line"><span style="color:#A6ACCD;">40</span></span>
<span class="line"><span style="color:#A6ACCD;">50</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="switch-case-语句" tabindex="-1">switch case 语句 <a class="header-anchor" href="#switch-case-语句" aria-hidden="true">#</a></h5><p>switch case 语句判断一个变量与一系列值中某个值是否相等，每个值称为一个分支。</p><p><strong>语法</strong></p><p>switch case 语句语法格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">switch(expression){</span></span>
<span class="line"><span style="color:#A6ACCD;">    case value :</span></span>
<span class="line"><span style="color:#A6ACCD;">       //语句</span></span>
<span class="line"><span style="color:#A6ACCD;">       break; //可选</span></span>
<span class="line"><span style="color:#A6ACCD;">    case value :</span></span>
<span class="line"><span style="color:#A6ACCD;">       //语句</span></span>
<span class="line"><span style="color:#A6ACCD;">       break; //可选</span></span>
<span class="line"><span style="color:#A6ACCD;">    //你可以有任意数量的case语句</span></span>
<span class="line"><span style="color:#A6ACCD;">    default : //可选</span></span>
<span class="line"><span style="color:#A6ACCD;">       //语句</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>switch case 语句有如下规则：</p><ul><li>switch 语句中的变量类型可以是： byte、short、int 或者 char。从 Java SE 7 开始，switch 支持字符串 String 类型了，同时 case 标签必须为字符串常量或字面量。</li><li>switch 语句可以拥有多个 case 语句。每个 case 后面跟一个要比较的值和冒号。</li><li><code>case 语句中的值的数据类型必须与变量的数据类型相同，而且只能是常量或者字面常量</code>。</li><li>当变量的值与 case 语句的值相等时，那么 case 语句之后的语句开始执行，直到 break 语句出现才会跳出 switch 语句。</li><li>当遇到 break 语句时，switch 语句终止。程序跳转到 switch 语句后面的语句执行。case 语句不必须要包含 break 语句。如果没有 break 语句出现，程序会继续执行下一条 case 语句，直到出现 break 语句。</li><li>switch 语句可以包含一个 default 分支，该分支一般是 switch 语句的最后一个分支（可以在任何位置，但建议在最后一个）。default 在没有 case 语句的值和变量值相等的时候执行。default 分支不需要 break 语句。</li></ul><p><strong>switch case 执行时，一定会先进行匹配，匹配成功返回当前 case 的值，再根据是否有 break，判断是否继续输出，或是跳出判断。</strong></p><p><strong>实例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String args[]){</span></span>
<span class="line"><span style="color:#A6ACCD;">      //char grade = args[0].charAt(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">      char grade = &#39;C&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      switch(grade)</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">         case &#39;A&#39; :</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;优秀&quot;); </span></span>
<span class="line"><span style="color:#A6ACCD;">            break;</span></span>
<span class="line"><span style="color:#A6ACCD;">         case &#39;B&#39; :</span></span>
<span class="line"><span style="color:#A6ACCD;">         case &#39;C&#39; :</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;良好&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            break;</span></span>
<span class="line"><span style="color:#A6ACCD;">         case &#39;D&#39; :</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;及格&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            break;</span></span>
<span class="line"><span style="color:#A6ACCD;">         case &#39;F&#39; :</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;你需要再努力努力&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            break;</span></span>
<span class="line"><span style="color:#A6ACCD;">         default :</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;未知等级&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      System.out.println(&quot;你的等级是 &quot; + grade);</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上代码编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">良好</span></span>
<span class="line"><span style="color:#A6ACCD;">你的等级是 C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果 case 语句块中没有 break 语句时，JVM 并不会顺序输出每一个 case 对应的返回值，而是继续匹配，匹配不成功则返回默认 case。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String args[]){</span></span>
<span class="line"><span style="color:#A6ACCD;">      int i = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">      switch(i){</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 0:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;0&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 2:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;2&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         default:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;default&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上代码编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">default</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果 case 语句块中没有 break 语句时，匹配成功后，从当前 case 开始，后续所有 case 的值都会输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String args[]){</span></span>
<span class="line"><span style="color:#A6ACCD;">      int i = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">      switch(i){</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 0:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;0&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 2:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;2&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         default:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;default&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上代码编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">default</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果当前匹配成功的 case 语句块没有 break 语句，则从当前 case 开始，后续所有 case 的值都会输出，如果后续的 case 语句块有 break 语句则会跳出判断。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public class Test {</span></span>
<span class="line"><span style="color:#A6ACCD;">   public static void main(String args[]){</span></span>
<span class="line"><span style="color:#A6ACCD;">      int i = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">      switch(i){</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 0:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;0&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 1:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 2:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;2&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         case 3:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;3&quot;); break;</span></span>
<span class="line"><span style="color:#A6ACCD;">         default:</span></span>
<span class="line"><span style="color:#A6ACCD;">            System.out.println(&quot;default&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上代码编译运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,354),e=[t];function o(c,i,r,C,A,y){return a(),n("div",null,e)}const u=s(p,[["render",o]]);export{g as __pageData,u as default};
