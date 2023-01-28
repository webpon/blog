##### 简介

> JavaScript 是一门 `跨平台、面向对象的脚本语言`，它能使网页可交互（例如拥有复杂的动画，可点击的按钮，通俗的菜单等）。另外还有高级的服务端Javascript版本，例如Node.js，它可以让你在网页上添加更多功能，不仅仅是下载文件（例如在多台电脑之间的协同合作）。在宿主环境（例如 web 浏览器）中， JavaScript 能够通过其所连接的环境提供的编程接口进行控制。
>
> JavaScript 和 Java 有一些共性但是在另一些方面有着根本性区别。JavaScript语言类似 Java 但是并 `没有 Java 的静态类型和强类型检查特性`。JavaScript 遵循了 Java 的表达式语法，命名规范以及基础流程控制，这也是 JavaScript 比 LiveScript 更出名的原因。
>
> 与 Java 通过声明的方式构建类的编译时系统不同，JavaScript 采用基于少量的数据类型如数字、布尔、字符串值的运行时系统。`JavaScript 是一种基于原型而不是基于类的基于对象(object-based)语言`；也就是说，独立对象的继承是可以改变的。 JavaScript 支持匿名函数。 函数也可以作为对象的属性被当做宽松的类型方式执行。
>
> 与 Java 相比，Javascript 是一门形式自由的语言。你不必声明所有的变量，类和方法。你不必关心方法是否是公有、私有或者受保护的，也不需要实现接口。无需显式指定变量、参数、方法返回值的数据类型。
>
> Java 是基于类的编程语言，设计的初衷就是为了确保快速执行和类型安全。类型安全，举个例子，你不能将一个 Java 整数变量转化为一个对象引用，或者由Java字节码访问专有存储器。Java基于类的模型，意味着程序包含专有的类及其方法。Java的类继承和强类型要求紧耦合的对象层级结构。这些要求使得Java编程比JavaScript要复杂的多。
>
> 相比之下，JavaScript 传承了 HyperTalk 和 dBASE 语句精简、动态类型等精髓，这些脚本语言为更多开发者提供了一种语法简单、内置功能强大以及用最小需求创建对象的编程工具。

`注：`强类型：偏向于不容忍隐式类型转换。譬如说haskell的int就不能变成double

```
弱类型：偏向于容忍隐式类型转换。譬如说C语言的int可以变成double
```

```
静态类型：编译的时候就知道每一个变量的类型，因为类型错误而不能做的事情是语法错误。
```

```
动态类型：编译的时候不知道每一个变量的类型，因为类型错误而不能做的事情是运行时错误。譬如说你不能对一个数字a写a[10]当数组用。
```

##### JavaScript是单线程

JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript不能有多个线程呢？这样能提高效率啊。

JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，`假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？`

`所以，为了避免复杂性（虽然也能够通过上锁来进行处理，但也会带来额外的开销），从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变`。

`为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。`

##### 事件循环与任务队列

Javascript是单线程的，单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

如果排队是因为计算量大，CPU忙不过来，倒也算了，但是很多时候CPU是闲着的，因为IO设备（输入输出设备）很慢（比如Ajax操作从网络读取数据），不得不等着结果出来，再往下执行。

JavaScript语言的设计者意识到，这时主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后面的任务。等到IO设备返回了结果，再回过头，把挂起的任务继续执行下去。

主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210405145425.png" alt="image-20210405145424247"  />

Javascript `所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）`。`同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务会分配一个任务队列，任务队列中的任务分为微任务和宏任务。当同步任务全部执行完毕，就会到任务队列中寻找微任务，如果微任务没有了，就会执行宏任务。`

宏任务有以下几个：

![image-20210405145954321](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210405145954.png)

微任务有以下几个：

![image-20210405150044783](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210405150045.png)

经典面试题：

请写出下面代码的输出结果：

```
setTimeout(() => {
      console.log(1);
    }, 0);
    new Promise(resolve=>{
      console.log(2);
      resolve()
      console.log(3);
    }).then(res=>{
      console.log(4);
    })
    console.log(5);
```

输出结果：2 3 5 4 1

##### 事件和回调函数

"任务队列"是一个事件的队列（也可以理解成消息的队列），IO设备完成一项任务，就在"任务队列"中添加一个事件，表示相关的异步任务可以进入"执行栈"了。主线程读取"任务队列"，就是读取里面有哪些事件。

"任务队列"中的事件，除了IO设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入"任务队列"，等待主线程读取。

`所谓"回调函数"（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。`

`"任务队列"是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，"任务队列"上第一位的事件就自动进入主线程。但是，由于存在后文提到的"定时器"功能，主线程首先要检查一下执行时间，某些事件只有到了规定的时间，才能返回主线程。`

#### 基本语法

##### JS中的基本类型和引用类型

###### 基本数据类型

> Undefined、Null、Boolean、Number、String、Symbol

（1）基本类型的访问是按值访问的，就是说你可以操作保存在变量中的实际的值

（2）我们不能给基本类型添加属性和方法

（3）**基本类型的变量是存放在栈区的（栈区指内存里的栈内存），**栈区包括了 **变量的标识符**和**变量的值。**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-bd008aa41a32aa00e12dfbcae6fadf7e_720w-165358786755228.jpg)

**基本类型值传递**

在函数接收基本类型值时，会在该函数内部栈中创建一个一模一样的变量,且两个参数互不影响，为了验证这一正确性，如下

```
function fun(a) {
        a = 666
        console.log(a) //666
    }
    var num = 555
    fun(num)
    console.log(num)  //555
```

###### 引用数据类型

> Object、Array、RegExp、Date、Function

（1）引用类型的值是按引用访问的。

（2）引用类型可以拥有属性和方法，并且是可以动态改变的。

（3）**引用类型的存储需要内存的栈区和堆区（堆区是指内存里的堆内存）共同完成，栈区内存保存 变量标识符 和 指向堆内存中该对象的指针**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-e74aa0ddeb46d7ca059920b720739621_720w-165358786755230.jpg)

栈区和堆区相当于数据库和硬盘的关系，假设我们储存一部视频，那么我们是把视频存进硬盘，视频路径存进数据库，由于栈适合进行运算并且有大小限制，而堆内存几乎没有限制，所以进有了

这样的储存模式

**`引用类型值传递`**

`当引用类型作为参数传递时，传递到函数内部的不是该参数的值，而是该参数在内存中的引用地址，这和引用类型的定义完全吻合。`

`所以当引用类型作为参数传递被改变时，另一个值也会发生了改变`。如下

```
function fun1(obj) {
        obj.name = '王二'
        obj.age = 20
        console.log(obj) //{name:'王二',age:20}
    }
    var o = {
        name: '张三',
        age: 18
    }
    fun1(o)
    console.log(o) //{name:'王二',age:20}
```

由于函数也是引用类型，所以利用这个特性我们可以形成回调函数：

```
function afun(are, callback) { //目标函数
        are++
        callback(are)
    }
    var d = 2
    afun(d, function(res) {
        console.log(res) //3
    })
```

##### 类型转换

> JavaScript 是一种动态类型的语言，在执行运算操作的过程中，有时需要转换操作数的类型。在 JavaScript 中，数据类型的转换有：隐式类型转换和强制类型转换（也叫显式类型转换）两种方式。

###### 隐式类型转换

> 隐式类型转换会自动根据运算符进行类型转换。隐式类型转换的情况主要有以下几种。

1) 如果表达式中同时存在字符串类型和数字类型的操作数，而运算符使用加号 `+`，此时 JavaScript 会自动将数字转换成字符串。

```
如果没有字符串类型，只是数字类型与其他类型，那么其他类型会转换为数字类型进行运算，例如：
```

```
alert("姑娘今年" + 18);   //结果：姑娘今年18
     alert("15"+5);   //结果：155
     console.log(true + 1) //2
     console.log(undefined + 1)  //NaN
     console.log(null + 1)     //1
     true + true //=>2 布尔值转换为数字后做加法
	2 + null //=>2 null转换为0后做加法
	2 + undefined //=>NaN undefined转换为NaN做加法
```

```
如果
```

`+ -`只有一边有操作数时，字符串会自动转换成数字。如果变量不能转换，它仍然会是一个数字，但值为 NaN (不是一个数字):例如：

```
let str = '1'
     console.log(typeof str); //String
     console.log(+str);       // 1
     console.log(typeof +str);//Number
     console.log(-str);       //-1
     console.log(typeof -str);//Number
     console.log(-'a')        //NaN
     console.log(typeof -'a') //Number
```

2) 如果表达式运算符为 `-、*、/、%`中的任意一个，此时 JavaScript 会自动将字符串转换成数字，对无法转换为数字的则转换为 NaN。例如：

```
alert("30"/5);   //除运算，结果为：6
     alert("15"-5);   //减运算，结果为：10
     alert("20"*"a"); //乘运算，结果为：NaN
     alert("20"%"3"); //取模运算，结果为：2
```

3) 运算符为 `++`或 `--`时，JavaScript 会自动将字符串转换成数字，对无法转换为数字的则转换为 NaN。例如：

```
var num1 = "6";
     var num2 = "6";
     var num3 = "a";
     alert(++num1);  //将字符串转换为数字再进行++运算，结果为：7
     alert(--num2);  //将字符串转换为数字再进行--运算，结果为：5
     alert(++num3);  //字符串无法转换为数字，结果为：NaN
```

4) 运算符为 `>`或 `<`时，当两个操作数一个为字符串，一个为数字时，JavaScript 会自动将字符串转换成数字。例如：

```
alert('10'>9);  //将字符串转换为数字，按值进行比较，结果为：true
     alert('10'<9);  //将字符串转换为数字，按值进行比较，结果为：false
```

```
如果两个操作数均为字符串时，JavaScript会根据字符串的字符集序号来进行比较的，例如：
```

```
console.log('10'>'9'); //false
	 console.log('b'>'a');  //true
```

5) `!`运算符将其操作数转换为布尔值并取反。例如：

```
alert(！0);    //对0取反，结果为：true
     alert(！100); //对非0数字取反，结果为：false
     alert(!"ok"); //对非空字符串取反，结果为：false
     alert(!"");  //对空字符串取反，结果为：true
```

6) `==`运算符用于检测两个操作数是否相等，这里的比较很宽松因为允许了类型转换，检测室会通过如下逻辑：

```
1、如果一个值是
```

`null`另一个是 `undefined`，则相等

```
2、如果一个是数字一个是字符串，字符串转为数字再比较
```

```
3、如果是
```

`true`则转换成1，`false`转换成0

```
4、如果一个值是对象另一个是数字或字符串，对象则转换成原始值（参考上文逻辑，注意日期类的例外情况）
```

```
console.log(null == undefined)   //true
     console.log(1 == '1')    //true
     console.log(true == '1') //true
     console.log(null == 0) //false
     console.log(undefined == 0) //false
```

7) 当你尝试alert输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法,下面方法是使用alert(）输出才会调用toString()方法：

```
document.getElementById("demo").innerHTML = myVar;
     myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"
     myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"
     myVar = new Date()      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"
```

数字和布尔值也经常相互转换：

```
console.log(typeof [1].toString());  //String
     console.log(typeof true.toString()); //String
     let a = 123
     console.log(typeof a.toString());    //String
```

![image-20210304212100584](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210304212101.png)

###### 强制类型转换

> 从上面的介绍我们可以看到，JavaScript 可以自动根据运算的需要进行类型的转换。强制类型转换主要针对功能的需要或为了使代码变得清晰易读，人为地进行类型的转换。在 JavaScript 中，强制类型转换主要是通过调用全局函数 Number()、parseInt() 和 parseFloat() 来实现。

**1) 使用Number()函数将参数转换为一个数字**

使用格式如下：

```
Number(value)
```

**Number() 对参数 value 进行整体转换，当参数值中任何地方包含了无法转换为数字的符号时，转换失败，此时将返回 NaN，否则返回转换后的数字。**

Number() 对参数进行数字转换时，遵循以下一些规则：

- 如果参数中只包含数字时，将转换为十进制数字，忽略前导 0 以及前导空格；如果数字前面为 `-`，`-`会保留在转换结果中；如果数字前面为 `+`，转换后将删掉 `+`号；
- 如果参数中包含有效浮点数字，将转换为对应的浮点数字，忽略前导 0 以及前导空格；如果数字前面为 `-`，`-`会保留在转换结果中；如果数字前面为 `+`，转换后将删掉 `+`号；
- 如果参数中包含有效的十六进制数字，将转换为对应大小的十进制数字；
- 如果参数为空字符串，将转换为 0；
- 如果参数为布尔值，则将 true 转换为 1，将 false 转换为 0；
- 如果参数为 null，将转换为 0；
- `如果参数为 undefined，将转换为 NaN；`
- `如果参数为 Date 对象，将转换为从 1970 年 1 月 1 日到执行转换时的毫秒数；`
- `如果参数为函数、包含两个元素以上的数组对象以及除 Date 对象以外的其他对象，将转换为 NaN；`
- 如果在参数前面包含了除空格、`+`和 `-`以外的其他特殊符号或非数字字符，或在参数中间包含了包括空格、`+`和 `-`的特殊符号或非数字字符，将转换为 NaN。

  **转换示例：**

  ```
  alert(Number("0010"));  //去掉两个前导0，结果为：10
  alert(Number("+010"));  //去掉前导0和+，结果为：10
  alert(Number("-10"));  //转换后保留“-”号，结果为：-10
  alert(Number(''));      //空字符串的转换结果为：0
  alert(Number(true));   //布尔值true的转换结果为：1
  alert(Number(null));   //null值的转换结果为：0
  var d = new Date();      //创建一个Date对象
  alert(Number(d));     //转换Date对象，结果为1970.1.1至执行转换时的毫秒数：1511351635179
  alert(Number("100px"));   //参数中包含了不能转换为数字的字符px，结果为：NaN
  alert(Number("100 01"));  //参数中包含了空格，导致整个参数不能转换，结果为：NaN
  alert(Number("100-123")); //参数中包含了“-”，导致整个参数不能转换，结果为：NaN
  var a;                   //声明变量
  alert(Number(a));     //变量a没有赋值，因而a的值为undefined,转换undefined的结果为：NaN
  var fn = function (){alert(1);}; //创建一个函数对象
  alert(Number(fn));     //转换函数，结果为:NaN
  alert(Number(window)); //转换window对象，结果为:NaN
  ```

  从上述示例中，我们也可以看到，`Number() 是从整体上进行转换的，任何一个地方含有非法字符，都将导致转换无法成功`。接下来将介绍的两个函数与 Number() 不同的是，转换是从左到右逐位进行转换，任何一位无法转换时立即停止转换，同时返回已成功转换的值。

**2) 使用parseInt()函数将参数转换为一个整数**

使用格式如下：

```
parseInt(stringNum,[radix])
```

stringNum 参数为需要转换为整数的字符串；radix 参数为 2～36 之间的数字，表示 stringNum 参数的进制数，取值为 10 时可省略。

parseInt() 的作用是将以 radix 为基数的 stringNum 字符串参数解析成十进制数。若 stringNum 字符串不是以合法的字符开头，则返回 NaN；`解析过程中如果遇到不合法的字符，将马上停止解析，并返回已经解析的值`。

parseInt() 在解析字符串为整数时，遵循以下规则：

- 解析字符串时，会忽略字符串前后的空格；如果字符串前面为 `-`，`-`会保留在转换结果中；如果数字前面为 `+`，转换后将删掉 `+`号；
- 如果字符串前面为除空格、`+`和 `-`以外的特殊符号或除 a～f（或 A～F）之外的非数字字符（`并且第二个参数需要标注为什么进制，否则一样返回NAN`)，，字符串将不会被解析，返回结果为 NaN；
- 在字符串中包含了空格、`+`、`-`和小数点“。”`等特殊符号或非数字的字符时，解析将在遇到这些字符时停止，并返回已解析的结果`；
- `如果字符串是空字符串，返回结果为 NaN。`

  **转换示例：**

  ```
  alert(parseInt("1101",2));  //以2为基数的1101字符串解析后的结果为：13
  alert(parseInt("a37f",16)); //以16为基数的a37f字符串解析后的结果为：41855
  alert(parseInt("123"));     //以10为基数的123字符串解析后的结果为：123
  alert(parseInt("  123"));   //字符串前面的空格会被忽略，结果为：123
  alert(parseInt("12 3"));    //字符串中包含了空格，解析到空格时停止，结果为12
  alert(parseInt("12.345")); //字符串中包含了小数点，解析到小数点时停止，结果为12
  alert(parseInt("xy123"));  //字符串前面包含了非数字字符“x”，无法解析，返回结果为：NaN
  alert(parseInt("123xy4")); //字符串中包含了非数字字符“xy”，解析到“x”时停止，结果为：123
  ```

  从上述示例我们可以看到，`parseInt() 解析浮点数时，小数部分数据会被截掉`，此时需要使用下面将介绍的 parseFloat()，而不能使用 parseInt()。

**3) 使用parseFloat()函数将参数转换为一个浮点数**

使用格式如下：

```
parseFloat(stringNum)
```

stringNum 参数为需要解析为浮点型的字符串。

parseFloat() 的作用是将首位为数字的字符串转解析成浮点型数。若 stringNum 字符串不是以合法的字符开头，则返回 NaN；解析过程中如果遇到不合法的字符，将马上停止解析，并返回已经解析的值。

parseFloat() 在解析字符串为整数时，遵循以下规则：

- 解析字符串时，会忽略字符串前后的空格；如果字符串前面为 `-`，`-`会保留在转换结果中；如果数字前面为 `+`，转换后将删掉 `+`号；如果字符串前面为小数点 `.`转换结果会在小数点前面添加 0；
- 如果字符串前面为除空格、`+`、`-`和 `。`以外的特殊符号，字符串将不会被解析，返回结果为 NaN；
- 在字符串中包含了空格、`+`和 `-`等特殊符号或非数字的字符时，解析将在遇到这些字符时停止，并返回已解析的结果；
- 在字符串中包含两个以上为小数点时，`解析到第二个小数点时将停止解析，并返回已解析的结果；`
- `如果字符串是空字符串，返回结果为 NaN。`

  转换示例：

  ```
  alert(parseFloat("312.456"));//结果为：312.456
  alert(parseFloat("-3.12"));//字符串前面的“-”将保留，结果为：-3.12
  alert(parseFloat("+3.12"));//字符串前面的“-”将保留，结果为：3.12
  alert(parseFloat(".12"));//在小数点前面添加0，结果为：0.12
  alert(parseFloat("  3.12"));//截掉字符串前面的空格，结果为：3.12
  alert(parseFloat("312.4A56"));//字符串中包含非数字字符A，解析到A时停止，结果为：312.4
  alert(parseFloat("31 2.4A56"));//字符串中包含空格，解析到空格时停止，结果为：31
  alert(parseFloat("31.2.5"));//字符串中包含两个小数点，解析到第二个小数点时停止，结果为：31.2
  alert(parseFloat("a312.456"));//字符串前面为非数字字符a，解析无法进行，结果为：NaN
  ```

**4）Number对象的toFixed()方法把数字转换为字符串，结果的小数点后有指定位数的数字：**

```
toFixed() 方法可把 Number 四舍五入为指定小数位数的数字字符串。
```

```
var num = 5.56789;
     var n=num.toFixed(2);
     console.log(n)  //5.57
     console.log(typeof n)  //String
```

```

```

`注：toFixed()方法会按四舍五入处理最后一位数`

**5）使用String()把任何类型的数字、字母、变量、表达式转换为字符串**

```
转换示例：
```

```
var test1 = new Boolean(1);
     var test2 = new Boolean(0);
     var test3 = new Boolean(true);
     var test4 = new Boolean(false);
     var test5 = new Date();
     var test6 = new String("999 888");
     var test7 = 12345;
     document.write(String(test1)+ "<br>");  //true
     document.write(String(test2)+ "<br>");	//false
     document.write(String(test3)+ "<br>");	//true
     document.write(String(test4)+ "<br>");	//false
     document.write(String(test5)+ "<br>");	//Wed Dec 30 2020 16:16:20 GMT+0800 (中国标准时间)
     document.write(String(test6)+ "<br>");	//999 888
     document.write(String(test7)+ "<br>");	//12345
```

##### 字符串

> String 对象用于处理文本（字符串）。
>
> String 对象创建方法： **new String()**。

**语法**

```
var txt = new String("string");
     或者更简单方式：
     var txt = "string";
```

**你可以使用索引位置来访问字符串中的每个字符：**

**你也可以在字符串添加转义字符来使用引号：**

```
var x = 'It\'s alright';//It's alright
     var y = "He is called \"Johnny\"";//He is called "Johnny"
```

**特殊字符**

在 JavaScript 中，字符串写在单引号或双引号中。

因为这样，以下实例 JavaScript 无法解析：

"We are the so-called "Vikings" from the north."

字符串 "We are the so-called " 被截断。

如何解决以上的问题呢？可以使用反斜杠 (\) 来转义 "Vikings" 字符串中的双引号，如下:

"We are the so-called \"Vikings\" from the north."

反斜杠是一个**转义字符**。 转义字符将特殊字符转换为字符串字符：

转义字符 (\) 可以用于转义撇号，换行，引号，等其他特殊字符。

下表中列举了在字符串中可以使用转义字符转义的特殊字符：

| 代码 | 输出        |
| :--- | :---------- |
| \'   | 单引号      |
| \"   | 双引号      |
| \\   | 反斜杠      |
| \n   | 换行        |
| \r   | 回车        |
| \t   | tab(制表符) |
| \b   | 退格符      |
| \f   | 换页符      |

**String 对象属性**

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210305155252.png" alt="image-20201108094540133" style="zoom:80%;" />

String常用的对象方法

1. **charAt()**	返回在指定位置的字符

   返回字符串中的第三个字符:

   ```
   var str = "HELLO WORLD";
   var n = str.charAt(2)
   ```

   *n*输出结果:

   L
2. **concat()**   返回两个或更多字符串，并返回新的字符串

   连接两个字符串:

   ```
   var str1 = "Hello ";
   var str2 = "world!";
   var n = str1.concat(str2);
   ```

   *n* 输出结果:

   Hello world!

   更多用法请前往：https://www.runoob.com/jsref/jsref-concat-string.html
3. **repeat()**   复制字符串指定次数，并将它们连接在一起返回。
4. 复制字符串 "Runoob" 两次:

   ```
   var str = "Runoob"; 
   str.repeat(2);
   ```

   *n* 输出结果:

   RunoobRunoob
5. includes()  查找字符串中是否包含指定的子字符串。

   查找字符串是否包含 "Runoob":

   ```
   var str = "Hello world, welcome to the Runoob。";
   
    var n = str.includes("world");
   ```

   *n* 输出结果:

   true

   includes() 方法用于判断字符串是否包含指定的子字符串。

   如果找到匹配的字符串则返回 true，否则返回 false。

   **注意：** `includes() 方法区分大小写。`

   更多用法请前往：https://www.runoob.com/jsref/jsref-string-includes.html
6. **spilt()**       把字符串分割为字符串数组

   ```
   var str="How are you doing today?";
   var n=str.split(" ");
   console.log(n)//["How", "are", "you", "doing", "today?"]
   ```

   更多用法请前往：https://www.runoob.com/jsref/jsref-split.html
7. **substr()**    从起始索引号提取字符串中指定数目的字符。

   抽取指定数目的字符：

   ```
   var str="Hello world!";
   var n=str.substr(2,3)
   ```

   *n* 输出结果:

   llo

   **语法**

   *string*.substr(*start*,*length*)

   **参数值**

   | 参数       | 描述                                                                                                                                                                   |
   | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | *start*  | 必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。 |
   | *length* | 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。                                                                   |
8. **trim()**       去除字符串两边的空白

   去除字符串的头尾空格:

   var str = "       Runoob        "; alert(str.trim());

   输出结果:

   Runoob
9. **toString()**  返回一个字符串。

   返回一个 String 对象的值:

   var str = "Runoob";

   var res = str.toString();

   *res* 输出结果:

   Runoob

10.**slice()** 提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串

```
语法：str.slice(beginIndex[, endIndex])
```

```
beginIndex:从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做
```

`strLength + beginIndex` 看待，这里的 `strLength` 是字符串的长度（例如， 如果 `beginIndex` 是 -3 						则看作是：`strLength - 3`）

```
endIndex:可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，
```

`slice()` 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字						符串的长度(例如，如果 endIndex 是 -3，则是, strLength- 3)。

```
返回值：返回一个从原字符串中提取出来的新字符串
```

```
const str = 'The quick brown fox jumps over the lazy dog.';

     console.log(str.slice(31));
     // expected output: "the lazy dog."

     console.log(str.slice(4, 19));
     // expected output: "quick brown fox"

     console.log(str.slice(-4));
     // expected output: "dog."

     console.log(str.slice(-9, -5));
     // expected output: "lazy"
```

##### 数组

###### 数组的基本使用

**为什么使用数组?**

- 假如有这样一个需求：保存自己多个朋友的名字。可以这么做：

  ```javascript
  // 保存班级中所有学生的名字
  var name1 = "Tom"
  var name2 = "Lily"
  var name3 = "Lucy"
  var name4 = "Lilei"
  var name5 = "Coderwhy"
  ```
- 这不是一个好的解决方案

  - 因为假如班级有100个学生, 那么我们就需要有100个变量.
  - 100个变量的是非常不方便管理的, 而且当我们需要找到某一个学生时, 从100个变量中去搜索也是一个问题.
- 很明显, 这种情况下, 我们通常会使用数组来解决:

  ```javascript
  // 使用数组来保存学生名字
  var names = ["Tom", "Lily", "Lucy", "Lilei", "Coderwhy"]
  ```

**创建和初始化数组**

- 用JavaScript声明、创建和初始化数组很简单，就像下面这样：

  ```javascript
  // 创建和初始化数组
  var daysOfWeek = new Array()
  var daysOfWeek = new Array(7)
  var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday')
  ```
- 代码解析:

  - 使用 `new`关键字，就能简单地声明并初始化一个数组
  - 用这种方式，还可以创建一个指定长度的数组.
  - 另外，也可以直接将数组元素作为参数传递给它的构造器
  - 用 `new`创建数组并不是最好的方式。如果你想在JavaScript中创建一个数组，只用中括号（`[]`）的形式就行了
- 使用中括号（`[]`）创建数组

  ```javascript
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'];
  ```

**数组长度和遍历数组**

- 如果我们希望获取数组的长度, 有一个length属性

  ```javascript
  // 获取数组的长度
  alert(daysOfWeek.length)
  ```
- 也可以通过下标值来遍历数组:

  ```javascript
  // 普通for方式遍历数组
  for (var i = 0; i < daysOfWeek.length; i++) {
      alert(daysOfWeek[i])
  }
  
  // 通过foreach遍历数组
  daysOfWeek.forEach(function (value) {
      alert(value)
  })
  ```

###### 数组的常见操作

> 数组中常见的操作有: 添加元素、删除元素、修改元素、获取元素.

**添加元素**

- JavaScript中, 进行我们上述的操作都比较简单: 因为语言本身都已经封装好了这些特性.
- 假如我们有一个数组: numbers, 初始化0~9

  ```javascript
  // 初始化一个数组
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```
- 添加一个元素到数组的最后位置:

  ```javascript
  // 添加一个元素到数组的最后位置
  // 方式一:
  numbers[numbers.length] = 10
  
  // 方式二:
  numbers.push(11)
  numbers.push(12, 13)
  alert(numbers)
  ```
- 在数组首位插入一个元素:

  ```javascript
  // 在数组首位插入一个元素
  for (var i = numbers.length; i > 0; i--) {
      numbers[i] = numbers[i-1]
  }
  numbers[0] = -1
  alert(numbers) // -1,0,1,2,3,4,5,6,7,8,9,10,11,12,13
  ```
- 上面代码实现的原理是怎样的呢?

  <img src="https:////upload-images.jianshu.io/upload_images/1102036-8fb6621c6dca7e05?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp" alt="img" style="zoom:80%;" />
- 考虑上面代码实现的性能怎么呢?

  - 性能并不算非常高
  - 这也是数组和链表(后面我们会学习到)相对比的一个劣势: 在中间位置插入元素的效率比链表低.
- 当然, 我们在数组首位插入数据可以直接使用unshift方法，unshift也是基于上面的原理实现的

  ```javascript
  // 通过unshift在首位插入数据
  numbers.unshift(-2)
  numbers.unshift(-4, -3)
  alert(numbers) // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13
  ```

**删除元素**

- 如果希望删除数组最后的元素, 可以使用pop()方法

  ```javascript
  // 删除最后的元素
  numbers.pop()
  alert(numbers) // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12
  ```
- 如果我们希望移除的首位元素, 自己实现代码:

  ```javascript
  // 删除首位的元素
  let numbers = [1, 2, 3]
       let arr = []
      for (var i = 1; i < numbers.length; i++) {
        arr[i - 1] = numbers[i]
        console.log(numbers[i]);
  
      }
      console.log(arr); //[2,3]
  ```
- 当然, 我们可以直接使用shift方法来实现:

  ```javascript
  numbers.shift()
  alert(numbers)
  ```

**任意位置**

- 任意位置?

  - 前面我们学习的主要是在数组的开头和结尾处添加和删除数据.
  - 那如果我们希望在数组的中间位置进行一些操作应该怎么办呢?
- 一方面, 我们可以自己封装这样的函数, 但JS已经给我们提供了一个splice方法
- 通过splice删除数据

  参数：

  ```
  
  ```

  *start*

  ```
  指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于
  ```

  `array.length-n`）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

  ```
  
  ```

  *deleteCount* 可选

  ```
  整数，表示要移除的数组元素的个数。
  ```

  ```
  如果
  ```

  `deleteCount` 大于 `start` 之后的元素的总数，则从 `start` 后面的元素都将被删除（含第 `start` 位）。

  ```
  如果
  ```

  `deleteCount` 被省略了，或者它的值大于等于 `array.length - start`(也就是说，如果它大于或者等于 `start`之后的所有元素的数量)，那么 `start`之后数组的所有元素都会被删除。

  ```
  如果
  ```

  `deleteCount` 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。

  ```
  
  ```

  *item1, item2, ...* 可选

  ```
  要添加进数组的元素,从
  ```

  `start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。

  返回值：

  **`splice()`** 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

  如果是删除元素，由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

  ```javascript
  // 删除指定位置的几个元素
   let numbers = [1,2,3,4]
   let a = numbers.splice(1,2,1)
   console.log(numbers); //[1,1,4]
   console.log(a);       //[2,3]
  ```
- 代码解析:

  - 上面的代码会删除索引为1, 2位置的元素.
  - 第一个参数表示索引起始的位置为1(其实是第2个元素, 因为索引从1开始的), 删除2个元素.
- 如果我们希望使用splice来插入数据呢?

  ```javascript
  // 插入指定位置元素
  numbers.splice(5, 0, 3, 2, 1)
  alert(numbers) // -4,-3,-2,-1,0,3,2,1,4,5,6,7,8,9,10,11,12,13
  ```
- 代码解析:

  - 上面的代码会从索引为5的位置开始插入数据. 其他数据依次向后位移.
  - 第一个参数依然是索引值为5(第六个位置)
  - 第二个参数为0时表示不是删除数据, 而是插入数据.
  - 后面紧跟的是在这个位置要插入的数据, 可以是其他类型, 比如"a", "b", "c".
- 如果我们希望使用splice来修改数据呢?

  ```javascript
  // 修改指定位置的元素
  numbers.splice(5, 3, "a", "b", "c")
  alert(numbers) // -4,-3,-2,-1,0,a,b,c,4,5,6,7,8,9,10,11,12,13
  ```
- 代码解析:

  - 上面的代码会从索引5的位置开始修改数据, 修改多少个呢? 第二个参数来决定的.
  - 第一个参数依然是索引的位置为5(第六个位置)
  - 第二个参数是要将数组中多少个元素给替换掉, 我们这里是3个(也可以使用3个元素来替换2个, 可以自己尝试一下)
  - 后面跟着的就是要替换的元素.

###### 数组的其他操作

> 上面学习的是对数组的一些基本操作.
>
> JavaScript中添加了很多方便操作数据的方法, 我们一些来简单回顾一下.

**常见方法**

- 我们先对常见的方法简单来看一下| 方法名          | 方法描述                                                                                             |
  | --------------- | ---------------------------------------------------------------------------------------------------- |
  | `concat`      | 连接2个或更多数组，并返回结果                                                                        |
  | `every`       | 对数组中的每一项运行给定函数，如果该函数对每一项都返回 `true`，则返回 `true`, 否则返回 `false` |
  | `filter`      | 对数组中的每一项运行给定函数，返回该函数会返回 `true`的项组成的数组                                |
  | `forEach`     | 对数组中的每一项运行给定函数。这个方法没有返回值                                                     |
  | `join`        | 将所有的数组元素连接成一个字符串                                                                     |
  | `indexOf`     | 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1                                           |
  | `lastIndexOf` | 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值                                             |
  | `map`         | 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组                                       |
  | `reverse`     | 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在的第一个       |
  | `slice`       | 传入索引值，将数组里对应索引范围内的元素作为新数组返回                                               |
  | `some`        | 对数组中的每一项运行给定函数，如果任一项返回 `true`，则结果为 `true`, 并且迭代结束               |
  | `sort`        | 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数                                           |
  | `toString`    | 将数组作为字符串返回                                                                                 |
  | `valueOf`     | 和 `toString`类似，将数组作为字符串返回                                                            |

**改变原数组方法：**

**1.pop():**

```
删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不 改变数组，并返回 undefined 值。arrayObject.pop()
```

2.push()

```
可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组,arrayObject.push(newelement1,newelement2,….,newelementX)
```

**3.reverse()**

```
将数组中元素颠倒过来,该方法会改变原来的数组，而不会创建新的数组。arrayObject.reverse()
```

**4.shift()**

```
数组的第一个元素从其中删除，并返回第一个元素的值,如果数组是空的，那么 shift() 方法将不进行任何操作.
```

**5.sort()**

```
对数组的引用。请注意，数组在原数组上进行排序，不生成副本。arrayObject.sort(sortby)  不传参数将不会按照数值大小排序，按照字符编码的顺序进行排序；
```

**6.splice()**

```
方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组
		arrayObject.splice(index,howmany,item1,……,itemX)
```

**7.unshift()**

```
方法可向数组的开头添加一个或更多元素，并返回新的长度。arrayObject.unshift(newelement1,newelement2,….,newelementX)返回arrayObject 的新长度
```

**不改变原数组方法：**
1.concat()

```
用于连接两个或多个数组，仅会返回被连接数组的一个副本，arrayObject.concat(arrayX,arrayX,……,arrayX)
2.join()
```

```
返回一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来,arrayObject.join(separator)
3.slice()
```

```
如果数组是空的arrayObject.slice(start,end)
4.JSON.parse(JSON.stringify(arry))
```

```
这种⽅式会重新复制⼀个数组。也是实现深拷贝的⼀种⽅式。5.toString():arrayObject 的字符串表示。返回值与没有参数的 join() 方法返回的字符串相同
```

6.indexOf、lastindexOf，

```
不会改变原数组，返回查找原数组的索引
```

7.filter()

```
方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。array.filter(function(currentValue,index,arr), thisValue)
```

8.array.reduce()

```
接收 2 个参数：一个是函数参数，用于执行每个数组元素的函数。另一个是初始值。回调函数还接收 4 个参数：accumulator：初始值, 或者计算结束后的返回值。current：当前元素。index：当前元素的索引。arr：当前元素所属的数组对象。
```

**数组合并**

- 数组的合并非常简单, 使用concat即可

  ```javascript
  // 数组的合并
  var nums1 = [1, 2, 3]
  var nums2 = [100, 200, 300]
  var newNums = nums1.concat(nums2)
  console.log(newNums) // 1,2,3,100,200,300
  ```

**迭代方法**

- 为了方便操作数组, JS提供了很多迭代器方法, 我们来回顾一下
- **every()方法**

  MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every

  - `callback`

    用来测试每个元素的函数，它可以接收三个参数：`element`用于测试的当前值。`index`可选用于测试的当前值的索引。`array`可选调用 `every` 的当前数组。
  - `thisArg`

    执行 `callback` 时使用的 `this` 值。

  [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every#返回值)

  如果回调函数的每一次返回都为 boolean值，返回 `**true**` ，否则返回 `**false**`。

  - every()方法是将数组中每一个元素传入到一个函数中, 该函数返回true/false.
  - 如果函数中每一个元素都返回true, 那么结果为true, 有一个为false, 那么结果为false
- every()练习:

  - 判断一组元素中是否都包含某一个字符

  ```javascript
  const isBelowThreshold = (currentValue) => currentValue < 40;
  const array1 = [1, 30, 39, 29, 10, 13];
  console.log(array1.every(isBelowThreshold));   //true
  ```
- **some()方法**

  MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some

  - some()方法是将数组中每一个元素传入到一个函数中, 该函数返回true/false
  - 但是和every不同的是, 一旦有一次函数返回了true, 那么迭代就会结束. 并且结果为true
- some()练习

  ```javascript
  const isBelowThreshold = (currentValue) => currentValue < 30;
  const array1 = [1, 30, 39, 29, 10, 13];
  console.log(array1.some(isBelowThreshold));   //true
  ```
- **forEach()方法**

  - forEach()方法仅仅是一种快速迭代数组的方式而已.
  - 该方法不需要返回值
- forEach的使用

  ```javascript
  // 定义数组
  var names = ["abc", "cb", "mba", "dna"]
  // forEach的使用
  names.forEach(function (t) {
      console.log(t)
  })
  ```
- **filter()方法**

  [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#语法)

  ```
  var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
  ```

  [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#参数)

  - `callback`

    用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它接受以下三个参数：

    `element`数组中当前正在处理的元素。`index`可选正在处理的元素在数组中的索引。`array`可选调用了 `filter` 的数组本身。
  - `thisArg`可选

    执行 `callback` 时，用于 `this` 的值。

  [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#返回值)

  一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

  filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

  **注意：** filter() 不会对空数组进行检测。

  **注意：** filter() 不会改变原始数组。

  实例：

  ```
  var args = [32, 33, 16, 40];
  let a = args.filter(item => {
  return item >= 18
  })  
  console.log(a);    //[32,33,40]
  console.log(args); //[32, 33, 16, 40]
  ```
- **sort（）方法**

  MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  sort()方法在适当的位置对数组进行排序，并且返回数组。

  实例：

  ```
  var arr=[1,3,10,4,2,5];
        function compare(value1,value2) {
              console.log(value1,value2,arr);
              if(value1<value2){return -1;}
              else if(value1>value2){return 1;}
              else {return 0}
          }
          arr.sort(compare);
          alert(arr);   //1,2,3,4,5,10
  ```

  我们定义的数组是这样的 arr=[1,3,10,4,2,5]
  第一行：传入的是value1=1，value2=3，比较大小返回-1，数组的位置不变。
  第二行：传入的是value1=3，value2=10，比较大小返回-1，数组的位置不变。
  第三行：传入的是value1=10，value2=4，比较大小返回1，两项交换位置，现在的数组是arr=[1,3,4,10,2,5]
  第四行：现在不是继续往后面比较，由于返回值为1（这是升序，1的时候往前面比较），则在第三行操作交换位置后，这传入的参数是value1=3，value2=4，比较大小，返回-1，位置不变，数组还是arr=[1,3,4,10,2,5]
  第五行：这才继续向后比较，传入value1=10，value2=2，比较大小，返回1，交换位置，数组为arr=[1,3,4,2,10,5]
  第六行：前面的返回值又是1，则又比较前面的，value1=4，value2=2，比较大小，返回1，数组变为arr=[1,3,2,4,10,5]
  第七行：第六行结果返回值是1，所以这个地方也不能往后面比较，value1=3，value2=2；比较大小，返回1，数组为arr=[1,2,3,4,10,5]
  第八行：同理，value1=1，value2=2，比较大小返回-1，数组不变。
  第九行：继续往后面比较，value1=10，value2=5，比较大小，返回1，改变位置，数组是arr=[1,2,3,4,5,10]
  最后一行：前面返回值是1，则向前比较，value1=4，value2=5，比较大小，返回-1，数组不变，（因为前面4前面的数是排好序的，只要5>4，就会比前面都大，则前面不用比较。）

  如果想升序排行的话，可以使用：

  ```
  var arr=[1,3,10,4,2,5];
          arr.sort((a,b)=>{
          	return a-b
          });
  ```

  降序则：

  ```
  var arr=[1,3,10,4,2,5];
          arr.sort((a,b)=>{
          	return b-a
          });
  ```

  `而且这个函数是直接改变原数组的排列，而不是返回一个新数组`
- **map()方法**

  MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map

  map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

  map() 方法按照原始数组元素顺序依次处理元素。

  `**注意：** map() 不会对空数组进行检测。`

  `**注意：** map() 不会改变原始数组。`

  使用实例：

  ```
  var numbers = [4, 9, 16, 25];
  var result=numbers.map(Math.sqrt);//2,3,4,5
  ```

  ```
  语法：array.map(function(currentValue,index,arr))
  ```

  使用实例：

  ```
  var arr=[1,2,3]
  var result =arr.map((item)=>{
  	return item*2
  })
  console.log(result)//2，4，6
  ```

  map的作用是用来筛选和处理数组的
- **reduce方法**

MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

我们单独拿出reduce方法, 因为这个方法相对来说难理解一点

首先, 我们来看这个方法需要的参数:

```javascript
arr.reduce(callback[, initialValue])
```

参数

- callback（一个在数组中每一项上调用的函数，接受四个函数：）
  - previousValue（上一次调用回调函数时的返回值，或者初始值）
  - currentValue（当前正在处理的数组元素）
  - currentIndex（当前正在处理的数组元素下标）
  - array（调用reduce()方法的数组）
- initialValue（可选的初始值。作为第一次调用回调函数时传给previousValue的值）

有些晦涩难懂, 我们直接看例子

- 求一个数字中数字的累加和

使用for实现:

```javascript
// 1.定义数组
var numbers = [1, 2, 3, 4]

// 2.for实现累加
var total = 0
for (var i = 0; i < numbers.length; i++) {
    total += numbers[i]
    return total
}
alert(total) // 10
```

使用forEach简化for循环

- 相对于for循环, forEach更符合我们的思维(遍历数组中的元素)

```javascript
// 3.使用forEach
var total = 0
numbers.forEach(function (t) {
    total += t
})
alert(total)
```

使用reduce方法实现

```javascript
// 4.使用reduce方法
var total = numbers.reduce(function (pre, cur) {
    return pre + cur
})
alert(total)
```

代码解析:

- pre中每次传入的参数是不固定的, 而是上次执行函数时的结果保存在了pre中
- 第一次执行时, pre为0, cur为1
- 第二次执行时, pre为1 (0+1, 上次函数执行的结果), cur为2
- 第三次执行时, pre为3 (1+2, 上次函数执行的结果), cur为3
- 第四次执行时, pre为6 (3+3, 上次函数执行的结果), cur为4
- 当cur为4时, 数组中的元素遍历完了, 就直接将第四次的结果, 作为reduce函数的返回值进行返回.

似乎和forEach比较没有太大的优势呢?

- 通过这个代码你会发现, 你不需要在调用函数前先定义一个变量, 只需要一个变量来接收方法最终的参数即可.
- 但是这就是优势吗? 不是, 优势在于reduce方法有返回值, 而forEach没有.
- 这算什么优势? 如果reduce方法有返回值, 那么reduce方法本身就可以作为参数直接传递给另外一个需要reduce返回值的作为参数的函数. 而forEach中你只能先将每次函数的结果保存在一个变量, 最后再将变量传入到参数中.
- 没错, 这就是最近非常流行的函数式编程. 也是为了几乎每个可以使用函数式编程的语言都有reduce这个方法的原因.
- 关于函数式编程, 不再本次课程的讨论之中, 只是看到了这个函数, 给大家延伸了一下而已.(后面有机会和大家分享函数式编程)

initialValue还需要讲吗?

- 其实就是第一次执行reduce中的函数时, pre的值.
- 因为默认pre第一次执行时为0.

###### **JS数组遍历**

> 基本就是for,forin,foreach,forof,map等等一些方法

**第一种:普通for循环**

代码如下:

```
for(j = 0; j < arr.length; j++) {
}
```

简要说明: 最简单的一种，也是使用频率最高的一种，虽然性能不弱，但仍有优化空间

**第二种:优化版for循环**

代码如下:****

```
for(j = 0,len=arr.length; j < len; j++) {
}
```

简要说明: 使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显。

**这种方法基本上是所有循环遍历方法中性能最高的一种**

**第三种:foreach循环**(没有返回值，可以直接更改item参数，这样同时也会修改数组元素的，是属于副本，而不是复制)

代码如下:

```
arr.forEach(function(e){  
});
```

简要说明: 数组自带的foreach循环，使用频率较高，实际上性能比普通for循环弱

**第四种:forin循环**

代码如下:

```
Array.prototype.foo = function(){
	console.log('foo')
}
for(let index in arr) {
	console.log(index, arr[index]) //
}
```

![image-20210815024151801](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210815024152.png)

简要说明: 这个循环很多人爱用，但实际上，经分析测试，在众多的循环遍历方式中

`它的效率是最低的`,并且该循环还会把自定义挂载在原型上的属性遍历出来

**第五种:map遍历**(返回新的数组)

代码如下:

```
arr.map(function(n){  
});
```

简要说明: 这种方式也是用的比较广泛的，虽然用起来比较优雅，但实际效率还比不上foreach

**第六种:forof遍历(需要ES6支持)**

代码如下:

```
for(let value of arr) {  
});
```

简要说明: 这种方式是es6里面用到的，性能要好于forin，但仍然比不上普通for循环

##### 对象

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-165686244183580.webp" alt="img" style="zoom: 67%;" />

1. 内建对象

   - 由ES标准中定义的对象，在任何的ES的实现中都可以实现
   - 比如：Math String Number Boolean Function Object....
2. 宿主对象

   - 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
   - 比如 BOM DOM

     例：console.log()——BOM、document.write()——DOM
3. 自定义对象

   - 由开发人员自己创建的对象

###### 基本使用

**创建对象**

```
使用new 关键字调用构造函数constructor，构造函数是专门用来创建对象的函数，使用typeof检查一个对象时，会返回object
```

**方式一：**

```
var obj = new Object()
	//在对象中保存的值称为属性
	//向对象添加属性
		//语法: 对象.属性名 = 属性值；
	obj.name = "孙悟空"
	console.log(obj) //{name: '孙悟空'}
	//删除对象的属性
		//语法： delete 对象.属性名
	delete obj.name
	console.log(obj) //{}
```

如果要使用特殊的属性名，不能采用.的方式来操作

```
需要使用另一种方式：
```

```

```

`语法：对象["属性名"] = 属性值`

obj["123"] = 'hello'

使用[ ]这种方式去操作属性，更加的灵活，

```
在[ ]中可以直接传递一个变量，这样变量值是多少就会读取多少
```

```

```

`语法：对象[变量] = 属性值`
**方式二**（推荐使用）

> ```
> 使用对象字面量，可以在创建对象时，直接指定对象中的属性
> ```

```
var obj = {
			name: "猪八戒",
			age: 28,
			weight: '200kg',
			sonObj: {
				name: 'son'
			}
		}
```

**我们的实例对象是使用运算符new 类名构建出来的，现在我们自己实现new运算符的功能**

```
function father(name) {
      this.name = name;
      this.sayname = function () {
        console.log(this.name)
      }
    }
    function myNew(ctx, ...args) { // ...args为ES6展开符,也可以使用arguments
      //先用Object创建一个空的对象
      let obj = new Object();
      console.log(obj);    //{}
      //新对象会被执行prototype连接
      obj.__proto__ = ctx.prototype;
      console.log(obj);    //father{}
      //新对象和函数调用的this绑定起来
      let res = ctx.call(obj, ...args);
      //判断函数返回值如果是null或者undefined则返回obj,否则就放回res,如果构造函数返回的是一个对象，那么实例就是它
      return res instanceof Object ? res : obj;
    }

    var son = myNew(father, 'kimi')
    var son2 = new father('kimi2')
    console.log(son);      //father {name: "kimi", sayname: ƒ}
    console.log(son2);     //father {name: "kimi2", sayname: ƒ}
```

###### 对象遍历

1.for … in 循环遍历对象自身的和继承的可枚举属性(循环遍历对象自身的和继承的可枚举属性(不含Symbol属性).).

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1543474-20190819160618071-1699607505-165358786755333.png)

2、使用Object.keys()遍历 (返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性).).

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1543474-20190819160801372-293238672-165358786755335.png)

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1543474-20190819161346978-1979945848-165358786755337.png" alt="img" style="zoom: 67%;" />

ES6允许对象的属性直接写变量，这时候属性名是变量名，属性值是变量值。

```
const age = 12;
     const name = "Amy";
     const person = {age, name};
     person   //{age: 12, name: "Amy"}
     //等同于
     const person = {age: age, name: name}
```

方法名也可以简写

```
const person = {
       sayHi(){
         console.log("Hi");
       }
     }
     person.sayHi();  //"Hi"
     //等同于
     const person = {
       sayHi:function(){
         console.log("Hi");
       }
     }
     person.sayHi();//"Hi"
```

ES6允许用表达式作为属性名(只可以在对象中这样用），`但是一定要将表达式放在方括号内`。

```
const obj = {
      ["he"+"llo"](){
        return "Hi";
       }
     }
     obj.hello();  //"Hi"
```

`注意点：属性的简洁表示法和属性名表达式不能同时使用，否则会报错。`

```
const hello = "Hello";
     const obj = {
      [hello]
     };
     obj  //SyntaxError: Unexpected token }

     const hello = "Hello";
     const obj = {
      [hello+"2"]:"world"
     };
     obj  //{Hello2: "world"}
```

###### Date对象

> Date 对象用于处理日期与时间。
>
> 创建 Date 对象： **new Date()**
>
> 以下四种方法同样可以创建 Date 对象：

```
var d = new Date();
     var d = new Date(milliseconds);
     var d = new Date(dateString);
     var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
```

没什么技术性的问题，详情请前往https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date

###### 对象访问属性

> 对象中有get和set方法，在读取和设定值的时候触发。vue中的数据绑定就是通过这个来实现的

**1. 直接在对象内使用**

- **get用法**

```jsx
var user = {
         info: {
             name: "张三"
         },
         get name(){
             return this.info.name;
         }
     }
    console.log(user.info.name) // '张三'
    console.log(user.name) // '张三'
```

*作用：*
(1). 在对象内属性嵌套层级过多时，可以直接在对象下读取到对应属性，简化调用；
(2). 在get时可以任意设置属性名，可以不暴露组件内部属性名。

注：也就是user.name相当于调用get name（）的方法，然后拿到其返回值

- **set用法**

```jsx
//vue就是利用这样来监听数据的该变的
	var user = {
      _name: '李三',
      get name() {
        return this._name
      },
      set name(val) {
        console.log('我改名了');
        this._name = val;
      }
    }
    console.log(user.name) // '张三'
    user.name = '李四'; // '我改名了'
    console.log(user.name) // '李四'
```

*作用：*
(1). 在对象内属性嵌套层级过多时，可以直接在对象下设置到对应属性，简化层级；
(2). set方法内的逻辑在赋值时会自动执行，可以监听属性值的改变

注：也就是user.name = '李四'相当于调用set name（val）的方法，然后重新赋值，'李四当作参数赋值给val'

```
还有一点，get和set不能访问自己的属性，比如set name()其中不能访问自身属性name,自身属性name不设置，会自动生成，如果有设置，也一样
```

```
var user = {
      // _name: '21',
      // get name() {
      //   return this._name
      // },
      name:'张三',
      set name(val) {
        console.log('我改名了');
        this.name = val;
      }
    }
    console.log(user.name) // undefined
```

**使用闭包改造**

```
var test2 = (function () {
      var _a = undefined
      var test = {
        get a(){
          console.log('getter');
          return _a
        },
        set a(newVal){
          console.log('setter');
          _a = newVal
        }
      }
      return test
    })()
    console.log(test2);
    test2.a = '3232'
```

结果：

![image-20210305041306216](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210305041306.png)

![image-20210305041318033](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210305041318.png)

2. 使用Object.defineProperty() 操作对象属性

   > 由于上面实现的监听器只能在定义对象时定义好，不能动态添加，所以我们需要使用Object.defineProperty()来动态添加
   >
   > ```
   > 这是用来定义对象属性的，里面有三个参数
   > 	object.defineProperty(object,属性,描述符)
   > 	描述符分两种一个是数据描述符一个是存取描述符
   > ```
   >

   ```
   数据描述符{
   value："",
   configurable:false不能删除与重新定义，
   writeable：true允许修改属性
   enumerable：true允许变量循环
   }
   存取描述符
   get：function（）{
   return a
   }，
   set：function（b）{
   a=b
   }
   ```

```jsx
var user = {}
     var _name = '张三'
     Object.defineProperty(user, ’name‘, {
         get(){
             return _name
         },
         set(val){
             console.log('我改名了');
             _name = val
         }
     })
     console.log(user.name) // '张三'
     user.name = '王二'; // '我改名了'
     console.log(user.name) // '王二'
```

*作用：*
set方法可以监听对应属性值的改变，vue的数据动态绑定就是通过这个方法实现的，监听到vue实例中的data属性发生改变时，在set方法中触发模版重新渲染逻辑。

**vue响应式简单实现：**

```
//如何实现数据与视图绑定
    // 1、需要知道哪个数据改变了。一般我们可以使用数据访问对象的方法。在vue中我们使用的是es5的对象访问属性get/set
    // 2、修改视图
    var model = {
      a: 1,
      b: 2
    }
    // vm
    for (var key in model) {
      ; (function (key) {
        var value = model[key]
        Object.defineProperty(model, key, {
          get: function () {
            console.log('setter');
            return value
          },
          set: function (newVal) {
            value = newVal
            console.log('getter');
            render()
          }
        })
      })(key)
    }
    //view
    let render = (function render() {
      console.log('render执行了');
      document.body.innerHTML = '<div><h3>想显示一些文案</h3><p>a的值: ' + model.a + ',b的值：' + model.b + '</p></div>'
      return render
    })()
    console.log(model);
    setTimeout(() => {
      model.b = 3
    }, 2000);
```

**3. 使用Object.defineProperties()**

```jsx
var user = {
         name: '张三'
     }
     Object.defineProperties(user, {
         nameGet: {
             value: function() {
                 console.log('读取');
                 return this.name;
             }
         },
         nameSet: {
             value: function(name) {
                 console.log('设置');
                 this.name = name;
             }
         }
     })
     console.log(user.nameGet) // '读取'  '张三'
     user.nameSet = '王二'; // '设置'
     console.log(user.nameSet) // '王二'
```

*作用：*
和方法1直接在对象中设置效果和原理相似

###### Object.is()

> `Object.is()` 方法判断两个值是否为[同一个值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)。

语法:

```
Object.is(value1, value2);
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is#参数)

- `value1`

  被比较的第一个值。
- `value2`

  被比较的第二个值。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is#返回值)

一个 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 类型标示两个参数是否是同一个值。

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is#描述)

`Object.is()` 方法判断两个值是否为[同一个值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)。如果满足以下条件则两个值相等:

- 都是 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- 都是 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)
- 都是 `true` 或 `false`
- 都是相同长度的字符串且相同字符按相同顺序排列
- 都是相同对象（意味着每个对象有同一个引用）
- 都是数字且
  - 都是 `+0`
  - 都是 `-0`
  - 都是 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)
  - 或都是非零而且非 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 且为同一个值

与[`==` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) 运算*不同。* `==` 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 `"" == false` 判断为 `true`), 而 `Object.is`不会强制转换两边的值。

与[`===` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) 运算也不相同。 `===` 运算符 (也包括 `==` 运算符) 将数字 `-0` 和 `+0` 视为相等 ，而将[`Number.NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) 与[`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)视为不相等.

###### Object.assign()对象去重合并

> Object.assign(target, source_1, ···)
>
> 用于将源对象的所有可枚举属性复制到目标对象中。
>
> 在vue中可以实现响应式

**基本用法**

```
let target = {a: 1};
     let object2 = {b: 2};
     let object3 = {c: 3};
     Object.assign(target,object2,object3);  
     // 第一个参数是目标对象，后面的参数是源对象
     target;  // {a: 1, b: 2, c: 3}
```

- 如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。
- 如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回。

  ```
  Object.assign(3);         // Number {3}
  typeof Object.assign(3);  // "object"
  ```

使用案例：

Object.assign({},oldobj,newobj)

注意。这里的Object是真的Object,不能改变，后面的是真实的对象名称

```
oldobj{
		name:'zs'
		sex:''
	}
	newobj{
		age:18
		sex:"female"
	}
```

那么Object.assign({},oldobj,newobj)的结果就是

```
{
		name:'zs',
		sex:'female',
		age:18
	}
```

如果oldobj有的属性而newobj没有，那以oldobj为准，如果newobj有的属性，不管oldobj有没有都会以newobj为准

###### hasOwnProperty

`hasOwnProperty()` 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

```
const object1 = {};
     object1.property1 = 42;

     console.log(object1.hasOwnProperty('property1'));
     // expected output: true

     console.log(object1.hasOwnProperty('toString'));
     // expected output: false

     console.log(object1.hasOwnProperty('hasOwnProperty'));
     // expected output: false
```

**参数**

- prop

  要检测的属性的 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 字符串形式表示的名称，或者 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。

**返回值**

用来判断某个对象是否含有指定的属性的布尔值 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)。

**描述**

所有继承了 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 的对象都会继承到 `hasOwnProperty` 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 [`in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。

**备注**

即使属性的值是 `null` 或 `undefined`，只要属性存在，`hasOwnProperty` 依旧会返回 `true`。

```
o = new Object();
     o.propOne = null;
     o.hasOwnProperty('propOne'); // 返回 true
     o.propTwo = undefined;
     o.hasOwnProperty('propTwo'); // 返回 true
```

###### in

> 如果指定的属性在指定的对象或其原型链中，则**`in` 运算符**返回 `true`。

语法

```
prop in object
```

参数

- `prop`

  一个字符串类型或者 symbol 类型的属性名或者数组索引（非symbol类型将会强制转为字符串）。
- `objectName`

  检查它（或其原型链）是否包含具有指定名称的属性的对象。

描述

下面的例子演示了一些 `in` 运算符的用法。

```
// 数组
     var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
     0 in trees        // 返回true
     3 in trees        // 返回true
     6 in trees        // 返回false
     "bay" in trees    // 返回false (必须使用索引号,而不是数组元素的值)

     "length" in trees // 返回true (length是一个数组属性)

     Symbol.iterator in trees // 返回true (数组可迭代，只在ES2015+上有效)


     // 内置对象
     "PI" in Math          // 返回true

     // 自定义对象
     var mycar = {make: "Honda", model: "Accord", year: 1998};
     "make" in mycar  // 返回true
     "model" in mycar // 返回true
```

`in`右操作数必须是一个对象值。例如，你可以指定使用 `String`构造函数创建的字符串，但不能指定字符串文字。

```
var color1 = new String("green");
     "length" in color1 // 返回true
     var color2 = "coral";
     "length" in color2 // 报错(color2不是对象)
```

对被删除或值为 undefined 的属性使用 `in`

如果你使用 `delete` 运算符删除了一个属性，则 `in` 运算符对所删除属性返回 `false`。

```
var mycar = {make: "Honda", model: "Accord", year: 1998};
     delete mycar.make;
     "make" in mycar;  // 返回false

     var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
     delete trees[3];
     3 in trees; // 返回false
```

如果你只是将一个属性的值赋值为[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，而没有删除它，则 `in` 运算仍然会返回 `true`。

```
var mycar = {make: "Honda", model: "Accord", year: 1998};
     mycar.make = undefined;
     "make" in mycar;  // 返回true
     var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
     trees[3] = undefined;
     3 in trees; // 返回true
```

继承属性

如果一个属性是从原型链上继承来的，`in` 运算符也会返回 `true`。

```
"toString" in {}; // 返回true
```

###### 判断对象类型

**方法一：采用typeof**

```
var fn = function(n){
          console.log(n);
       }
       var str = 'string';
       var arr = [1,2,3];
       var obj = {
           a:123,
           b:456
       };
       var num = 1;
       var b = true;
       var n = null;       var u = undefined;
       //方法一使用typeof方法。
       console.log(typeof str);//string
       console.log(typeof arr);//object
       console.log(typeof obj);//object
       console.log(typeof num);//number
       console.log(typeof b);//boolean
       console.log(typeof n);//null是一个空的对象
       console.log(typeof u);//undefined
       console.log(typeof fn);//function
```

通过上面的检测我们发现typeof检测的Array和Object的返回类型都是Object，因此用typeof是无法检测出来数组和对象的，采用方法二和方法三则可以检测出来

**方法二：采用instanceof**

在JS中，判断一个变量的类型，常常会用到 `typeof`运算符，但当用来判断引用类型变量时，无论是什么类型的变量，它都会返回 `Object`。为此，引入了 `instanceof`。

`instanceof`相比与 `typeof`来说，`instanceof`方法要求开发者明确的确认对象为某特定类型。即 `instanceof`用于判断引用类型属于哪个构造函数的方法。

```js
var arr = []
     arr instanceof Array // true
     typeof arr // object, typeof 是无法判断是否为数组的
```

另外，更重要 的一点是 instanceof 可以在继承关系中用来判断一个实例是否属于它的父类型。

```js
// 判断 f 是否是 Foo 类的实例 , 并且是否是其父类型的实例
     function Aoo(){} 
     function Foo(){} 
     Foo.prototype = new Aoo();//JavaScript 原型继承

     var f = new Foo(); 
     console.log(f instanceof Foo)//true 
     console.log(f instanceof Aoo)//true
```

`f instanceof Foo` 的判断逻辑是：

- f 的 `__proto__`一层一层往上，是否对应到 `Foo.prototype`
- 再往上，看是否对应着 `Aoo.prototype`
- 再试着判断 `f instanceof Object`

即 `instanceof`可以用于判断多层继承关系。

下面看一组复杂例子

```js
console.log(Object instanceof Object) //true 
     console.log(Function instanceof Function) //true 
     console.log(Number instanceof Number) //false 
     console.log(String instanceof String) //false 
     console.log(Array instanceof Array) // false

     console.log(Function instanceof Object) //true 

     console.log(Foo instanceof Function) //true 
     console.log(Foo instanceof Foo) //false
```

在这组数据中，Object、Function instanceof 自己为true， 其他的instanceof自己都为false，这就要从instanceof的内部实现机制以及JS原型继承机制讲起。

**1. instanceof的内部实现机制**

instanceof的内部实现机制是通过判断对象的原型链上是否能找到对象的 `prototype`

```js
// instanceof 的内部实现 
function instance_of(L, R) {//L 表示左表达式，R 表示右表达式，即L为变量，R为类型
 // 取 R 的显示原型
 var prototype = R.prototype
 // 取 L 的隐式原型
 L = L.__proto__
 // 判断对象（L）的类型是否严格等于类型（R）的显式原型
 while (true) { 
   if (L === null) 
     return false
   if (prototype === L)// 这里重点：当 prototype 严格等于 L 时，返回 true 
     return true
   L = L.__proto__
 } 
}
```

instanceof不能区分基本类型string和boolean,除非是字符串对象和布尔对象。如下所示。

```
var c='abc';
c instanceof String; //false
var d=new String();
d instanceof String  //true
```

**方法三：使用constructor**

```
var o={};
o.constructor==Object  //true
var arr=[];
arr.constructor==Array  //true
arr.constructor==Object //false
```

可以看出constructor可以区分Array和Object。

```
var n=true;
n.constructor==Boolean  //true
var num=1;
num.constructor==Number  //true
var str='hello world';
str.constructor==String     //true
var num=new Number();
num.constructor==Number   //true
```

不过要注意，constructor属性是可以被修改的，会导致检测出的结果不正确

```
function Person(){
  
}
function Student(){
  
}
Student.prototype = new Person();
var John = new Student();
console.log(John.constructor==Student); // false
console.log(John.constructor==Person); // true
```

除了undefined和null，其他类型的变量均能使用constructor判断出类型.

**方法四：Object.prototype.toString.call()  ---------最好用**

```
Object.prototype.toString.call(123)
//"[object Number]"

Object.prototype.toString.call('str')
//"[object String]"

Object.prototype.toString.call(true)
//"[object Boolean]"

Object.prototype.toString.call({})
//"[object Object]"

Object.prototype.toString.call([])
//"[object Array]"
Object.prototype.toString.call(null)
//"[object Null]"
```

封装一个判断数组和对象的方法

```
function typeObj(obj){
      var type=Object.prototype.toString.call(obj);
      if(type=='[object Array]'){
        return 'Array';
      }else if(type=='[object  Object]'){
        return 'Object';
      }else{
        return "obj is not object or array"
      }
}
```

Object.prototype.toString方法的在被调用的时候，会执行如下的操作步骤：

1. 获取对象的类名（对象类型）。

```
[[Class]]是一个内部属性,所有的对象(原生对象和宿主对象)都拥有该属性.在规范中,[[Class]]是这么定义的:
            内部属性,[[Class]] 一个字符串值,表明了该对象的类型。
```

2. 然后将[object 获取的对象类型的名]组合为字符串
3. 返回字符串 “[object Array]” 。

这个[[Class]]是内部属性，我们不能直接通过对象.[[Class]]获取，但是我们能通过Object.prototype.toString获取

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-16547073250563.webp" alt="img" style="zoom:50%;" />

所以结果显示这个方法还是比较靠谱的，（`但是无法区分自定义对象类型，自定义类型可以采用instanceof区分`），所以这个方法判断基本类型的变量和内置变量是非常靠谱的；

**为啥不直接用toString()方法呢**

![img](https:////upload-images.jianshu.io/upload_images/2418549-dbc86fa86bf3c6c9.png?imageMogr2/auto-orient/strip|imageView2/2/w/646/format/webp)

`toString`方法的用法：`toString`方法返回反映这个对象的字符串;
对照 `toString`的用法，我们看到图中的变量 `d`的返回和其他的变量有所区别，它返回的并不是 `"{"a":1,"b":1,"c":1}"`而是 `"[object Object]"`，这就是我们为什么要用 `Object.prototype.toString.call(obj)`来监测变量类型而不直接用 `toString`的原因了；

在js中所有的对象类型（Array，Date，Function等）都是Object的实例，Object有一个toString方法也被这些实例继承下来，但是这些实例都无一例外的重写了toString方法，根据原型链的知识，直接调用toString，调用的只是重写过后的toString方法，所以就会输出一些字符串了，所以也就不会像Object那样返回带有类型的字符串了，所以我们需要指定使用Object的toString来输出
如果我们删除了一个实例的toString方法会怎么样呢？

![img](https:////upload-images.jianshu.io/upload_images/2418549-a733283e018b63e0.png?imageMogr2/auto-orient/strip|imageView2/2/w/416/format/webp)

哈哈 是不是和调用Object.prototype.toString.call(obj)一样了，这是因为删掉数组的toString方法后，数组只能去父级寻找toString方法，所以调用的自然就是Object的toString方法了

###### enumerable

当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的枚举属性中。
**默认为 `false`**。

###### Object.defineProperty()

基本使用（添加属性）：

```
import moment from 'moment';
Object.defineProperty(Vue.prototype, '$moment', { value: moment });
```

相当于：

```
import moment from 'moment';
Vue.prototype.$moment= moment
```

defineProperty可以在vue中实现对象属性响应式，也就是增加原来没有定义的属性也能实现响应式

###### 对象的方法扩展（ES8)

keys、values、entries

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210305155212.png" alt="image-20201108113724277" style="zoom:80%;" />

输出结果：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215643.png" alt="image-20201108113747705" style="zoom:80%;" />

##### 函数

> 函数也是一个对象，函数中可以封装一些功能（代码），在需要的时候可以执行这些（代码）

###### 创建函数对象

**方式一：**(很少使用)

> ```
> 可以将要封装的代码以字符串的形式传递给构造函数
> ```

```
var fun = new Function("console.log('hello World')")
```

**方式二：**（推荐使用）

> 使用函数声明来创建一个函数

```
function fun(){
			console.log('hello world')
		}
```

```
使用函数声明来创建函数（其他方式不会）会在所有的代码执行之前就被创建，
```

`函数声明提前会在变量提升之后,变量提升会快于函数提升`

**方式三：**

> 使用函数表达式 来创建一个函数

```
var fun = function(){
			console.log('hello world')
		}
```

**立即执行函数**

> 函数定义完，立即被调用，立即执行函数往往只调用一次

```
(function (){
			console.log('hello world')
		})()
		(function (a,b){
			console.log(a+b)
		})(1, 2)
```

###### 函数参数

函数的实参可以是任意的类型

```
function sum(a,b){
		return a+b
	}
	//相当于
	function sum(a,b){
		var a = a ,b = b //代码块会自动定义变量
		return a+b
	}
```

调用函数时，解析器不会检查实参的类型，

```
所以要注意，是否有可能会接收到非法的参数，如果有可能则需要对参数进行类型的检查
```

调用函数时，解析器也不会检查实参的数量

```

```

`多余实参不会被赋值`

`如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined`

```
function sum(a,b){
		console.log(a) //10
		console.log(b) //undefined
		//return只能返回一个值，如果返回多个，则只取最后一个返回
		return a,b
	}
	console.log(sum(10)) //undefined
```

参数默认值

```
function foo(x, y = 10){
	console.log(x, y)  //5 10
}
foo(5)
function foo2(x, y = x) {
	console.log(y)      //2
}
foo2(2)
let x = 1
function foo3(y = x) {
	let x = 2
	console.log(y)       //1
}
foo3()
//这里的y只会去全局或者函数参数取，不会拿函数内部的
function name(x = y) {   //报错，y is not defined
  var y = 10
  console.log(x);
}
name()
```

解构赋值

```
function foo({x, y = 5}){
	console.log(x, y)   //1 5
}
foo({x:1})

//注意，对象解构赋值按字段来匹配，不是按顺序的
function foo2 ({ x, y = 5 }) {
  console.log(x, y)   //2 1
}
foo2({ y: 1, x: 2 })
```

函数length属性

```
function test(a, b, c) {}
console.log(test.length);   //3
```

函数的name属性

```
function foo() {}
console.log(foo.name)            // foo
console.log(foo.bind({}).name)   // bound foo
```

###### arguments参数

1、函数的参数arguments 对象

-- arguments 表示函数的实际参数（与形参无关）

```
// js中 函数的参数：形参、实参
    function test(a, b, c, d) {
      // 函数名.length 等价于 arguments.callee.length，因为arguments.callee代表函数本身， 程序开发中建议使用后者
      console.log(test.length); // 4 ,函数形式参数的数量
      console.log(a);   //10
      console.log(b);   //20
      console.log(c);   //undefined
      console.log(d);   //undefined
      // 函数的实际参数，内部就是用一个数组去接收函数的实际参数
      // arguments 对象 可以访问函数的实际参数
      // arguments 对象 只能在函数的内部访问和使用
      console.log(arguments.length); // 获取 函数 的实参 的数量 test(10,20) 输出为：2
      console.log(arguments[0]); // 获取第一个 实参 的值 test(10,20) 输出为：10
      console.log(arguments[1]); // 获取第二个 实参 的值 test(10,20) 输出为：20
    }
    test(10, 20);
```

2、callee函数（回调函数属性）

-- arguments 对象的秘密属性，callee属性

--这个属性比较奇怪，它能返回arguments对象所属的函数的引用，这相当于在自己的内部调用自己

-- arguments 对象用得最多的还是做递归操作

```
function fun(){
       console.log(arguments.callee === fun);  //true
     }
     fun('tom',[1,2,3],{name:'Janny'});
```

```
function fact(num){
      if(num <= 1){
       return 1;
      }else{
       return num * arguments.callee(num-1);
      }
     }
     console.log(fact(5)); // 120
```

箭头函数中没有arguments，我们可以用剩余参数...rest实现

```
// js中 函数的参数：形参、实参
    let  test = (...rest) => {
      console.log(...rest); //10,20
      console.log(arguments); // 报错，arguments未被定义
    }
    test(10, 20);
```

###### 函数返回值

`return 只能返回一个值，如果有多个，则只取最后一个返回`

```
function sum(a,b){
		//return只能返回一个值，如果返回多个，则只取最后一个返回
		return a,b
	}
	console.log(sum(10)) //undefined
```

虽然return 只能返回一个值，但是我们可以返回对象或者数组等数据类型来间接返回多个值

```
function sum(a,b){
		return {a,b}
	}
	console.log(sum(10).a,sum(10).b}) //10,undefined
```

`注：函数都是有返回值的`

```

```

`1、如果有return则返回return后面的值`

```

```

`2、如果没有return则返回undefined`

###### break、continue、return的区别

break:  结束当前的循环体(如：for、while)

continue:跳出循环，继续执行下一次循环（如：for、while）

return: 不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前的函数体内的代码

###### 箭头函数

()=>{}
箭头函数又称匿名函数，不能作为构造函数,不能使用new

```javascript
let f = () =>{
          console.log('123')
     }
     let fc = new f();  //这一行报错 f is not a constructor
```

箭头函数会捕获父类的上下文来作为自己的this值
普通函数的this指向调用它的那个对象

```javascript
var a = 20;
     var obj = {
          a:10,
          b:()=>{
               console.log(this.a);
          },
          c:function(){
               console.log(this.a);
          }
     }
     obj.b(); // 20
     obj.c(); // 10
```

箭头函数没有原型

```javascript
var a = ()=>{
          return 1;
     }
     function b(){
          return 2;
     }
     console.log(a.prototype) // undefined
     console.log(b.prototype) // {constructor:f}
```

箭头函数的this永远指向调用者的父类的上下文,任何方法都改变不了指向,比如 `call()` , `apply()` , `bind()`

普通函数的this指向调用它的那个对象

```
call()` `apply()` `bind()` 的用法和区别
call,apply,bind 它们在功能上没有区别的,都是改变this的指向,它们的区别主要是用于方法是实行形式和参数传递上的不同。call和apply方法都是在调用之后立即执行的,而bind调用之后是返回原函数`call()` `apply()`,需要再调用一次才行`bind(m)()
```

###### 函数的重载

> 重载，简单说，就是函数或者方法有相同的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法。

js函数重载的简单实现

```
function overLoading() {
　　// 根据arguments.length，对不同的值进行不同的操作
　　switch(arguments.length) {
　　　　case 0:
　　　　　　/*操作1的代码写在这里*/
　　　　　　break;
　　　　case 1:
　　　　　　/*操作2的代码写在这里*/
　　　　　　break;
　　　　case 2:
　　　　　　/*操作3的代码写在这里*/
 　　　　　　
　　//后面还有很多的case......
}

}
```

###### 函数的柯里化

> 维基百科上说道：柯里化，英语：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

看这个解释有一点抽象，我们就拿被做了无数次示例的add函数，来做一个简单的实现。

```
// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}
add(1, 2)           // 3
curryingAdd(1)(2)   // 3
```

实际上就是把add函数的x，y两个参数变成了先用一个函数接收x然后返回一个函数去处理y参数。现在思路应该就比较清晰了，就是只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

详情请访问：https://www.jianshu.com/p/2975c25e4d71

##### 类

> 在JavaScript中，`类本质上还是构造函数`

###### 构造函数

> `构造函数就是一个普通的函数`，创建方式和普通函数没有区别,不同的是构造函数习惯上首字母大写

**构造函数和普通函数的区别就是调用方式的不同**

```

```

**普通函数是直接调用，而构造函数需要使用new关键字来调用**(`当然构造函数和普通函数均能直接调用和使用new 关键字来调用`)

```
function test(name) {
      this.name = name
      console.log('我是函数test');
    }
    //构造函数的方式调用
    let test1 = new test('刘德华')
    // 普通函数的方式直接调用
    let test2 = test('张学友')
    console.log(test1);
    console.log(test2);
```

执行结果：

![image-20210815151127354](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210815151128.png)

```
function Test(name) {
      this.name = name
      console.log('我是函数Test');
    }
    //构造函数的方式调用
    let Test1 = new Test('刘德华')
    // 普通函数的方式直接调用
    Test()
    console.log(Test1);
```

执行结果：

![image-20201226152354911](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210305155203.png)

由上面代码执行结果可以看出，`构造函数就是普通函数，普通函数也是构造函数，只是调用方式不一样而已，一般情况构造函数习惯上首字母大写，`

`但是这并不是必须条件`

构造函数的执行流程：

```
1、立刻创建一个新的对象
```

```
2、将新建的对象设置为函数中的this
```

```
3、逐行执行函数中的代码
```

```
4、将新建的对象作为返回值返回
```

使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类

1、使用构造函数

```
<script>
         function Phone(brand,price) {
           this.brand=brand;
           this.price=price;
           //创建公用方法
           Phone.prototype.call=function(){
             console.log('打电话');
           }
         }
         // 实例化对象
         let Huawei=new Phone('华为',2999);
         Huawei.call();
         console.log(Huawei);
      </script>
```

输出：

![image-20201108083319654](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210305155159.png)

**默认情况下，没有return的函数的返回值为undefined（即没有定义返回值），如果定义了return，则返回指定对象。**
**但是构造函数比较特殊，new构造函数在没有return的情况下默认返回新创建的对象。**在有return的情况下，需要分为两个情况考虑：

如果返回值为基本数据类型（string，number，boolean，undefined，null），那么返回值为新建对象实例，即this。

```
var a = function S(){
　　this.x=3;
　　return 1;
}
var b = new a();
console.log(a); //{x:3}
```

如果返回值为一个非基本数据类型的对象，函数的返回值为指定的对象，this值所引用的对象被丢弃。

```
var a = function S(){
　　this.x=3;
　　return a;
}
var b = new a();
console.log(b); //S(){this.x=3;return a }
```

直观的例子：

```
var a = function User( name, age){
　　this.name = name;
　　this.age = age;

　　// return; // 返回 this
　　// return null; // 返回 this
　　// return this; // 返回 this
　　// return true; // 返回 this
　　// return 'string'; // 返回 this
　　// return 1; // 返回 this
　　// 以上都返回{name:"哈哈",age:18}
　　// return []; // 返回 新建的 []
　　// return function(){}; // 返回 新建的 function，抛弃 this
　　// return new Boolean(false); // 返回 新建的 boolean，抛弃 this
　　// return new String('hello world'); // 返回 新建的 string，抛弃 this
　　// return new Number(32); // 返回新的 number，抛弃 this
}
var b=new a("哈哈",18)
console.log(b);
```

###### ES6Class

使用ES6中提供的class完成上面的功能

```
class Phone {
      //构造方法，名字不能修改
      constructor(brand, price) {
        this.brand = brand;
        this.price = price;
      }
      //方法必须使用该语法，放在原型上
      call() {
        console.log('我可以打电话');
      }
      //这样方法在每个实例对象上
      call2 = function () {
        console.log('我可以打电话2');
      }
      //类中可以直接写赋值语句，如下代码的含义是:给类的实例对象都添加一个属性，名为phoneName,值为'Phone类',如果是大家共有的那么就可以这样写
      phoneName = 'Phone类'
      //如下代码的含义是:给类添加一个属性，名为phoneName,值为'static'
      static phoneName = 'static'
    }
    let k30 = new Phone('xiaomi', 2999);
    k30.call()                    //我可以打电话
    console.log(k30);	         //Phone { phoneName: 'Phone类', brand: 'xiaomi', price: 2999 }
    console.log(k30.phoneName)    //Phone类
    console.log(Phone.phoneName); //static
```

constructor相当于构造函数，一旦new这个类，就会执行该构造函数，方法的话相当于构造函数的 Phone.prototype.call=function(){
console.log('我可以打电话');
}

输出结果：
<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210328145409.png" alt="image-20201108084128374" style="zoom: 80%;" />

在 [Es6](https://so.csdn.net/so/search?q=Es6&spm=1001.2101.3001.7020) 中，在 Class 内部可以使用 get 和 set 关键字， 对某个属性设置存值函数和取值函数， 拦截该属性的存取行为。

```
class HelloWorld {
	constructor() {
		this.name_ = ''
	}
	get name() {
		return 'get name: '+this.name_;
	}
	set name(value) {
		console.log('set name: ' + value);
      this.name_ = value;
	}
}
let hw = new HelloWorld();
 
//'set name:'
hw.name = 'jasper';
 
// 'get name'
console.log(hw.name)
```

实例对象和构造函数和类的方法和属性是不相通的，实例对象和它们的原型是相通的

**利用构造函数实现继承**

1、组合继承模式

```
function Phone(brand,price) {
      this.brand=brand;
      this.price=price;
      Phone.prototype.call=function(){
      	console.log('打电话');
    	}
    }
    // 智能手机
    function SmartPhone(brand,price,color,size) {
    	//调用父类
      Phone.call(this,brand,price);
      this.color=color;
      this.size=size;
    }
    //设置子级构造函数的原型
    SmartPhone.prototype=new Phone();//这样就能形成原型链，进而实现继承
    //增强对象，弥补因重写原型而失去的默认的constructor 属性
    SmartPhone.prototype.constructor = SmartPhone
    //声明子类的方法
    SmartPhone.prototype.photo=function () {
      console.log('拍照功能');
    }
    const iPhone=new SmartPhone('iphone12',7777,'red','5.5')
    iPhone.photo()	 //拍照功能
    iPhone.call();   //打电话
    console.log(iPhone);
```

输出：

![image-20201108091316987](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210328145417.png)

继承实现原理

![image-20210105224942582](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210305155154.png)

2、寄生式继承

```

```

*//组合继承的缺点：需要两次调用Phone的构造函数，从而导致brand和price属性冗余，在Phone中存在一份，在Phone.prototype中又存在一份，只不过是sub把super里的属性覆盖了*

![image-20210815152921103](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210815152922.png)

```
//采用寄生式继承模式可以解决上述问题
     function inheritPrototype(subClass, superClass){
		function F(){}
		F.prototype = superClass.prototype
		subClass.prototype = new F()
		//上面的b.constructor指向的是构造函数，但是如果构造函数原型被重写，b.constructor !== fun了，原因是指针指向的其实是原型对象。所以：实例化对象的				//constructor对象不是任何时候都指向构造函数本身，除非构造函数的原型一直不变，如果构造函数原型重写，全等关系就破灭了。
		subClass.prototype.constructor = subClass;  //增强对象，弥补因重写原型而失去的默认的constructor 属性
	}
	inheritPrototype(smartPhone,Phone)
```

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210305155150.png" alt="image-20210205235210961" style="zoom: 67%;" />

利用class extends实现类的继承

```
`	 	class Phone{
        //构造方法
        constructor(brand,price){
          this.price=price;
          this.brand=brand;
        }
        //父类的成员属性
        call(){
          console.log('打电话功能');
        }
      }
      class SmartPhone extends Phone{
        //构造方法, 如果子类没有写constructor，那么默认会用父类的constructor进行实例化
        constructor(brand,price,color,size){
        	//这里的作用是给相当于给父类的this设置为新new的实例对象，不然就为undefined，因为我们子类实例调用父类的方法，父类这时是没有this的
        	//super相当于调用父元素的构造函数，super必须放在构造器的第一行
          super(brand,price);//相当于Phone.call(this,brand,price)
          this.color=color;
          this.size=size;
        }
        //重写从父类继承过来的方法,这样就不会去读取父类的call方法了
        //call(){
        // console.log('智能手机打电话功能');
        //}
        photo(){
          console.log('拍照功能');
        }
      }
      let iPhone=new SmartPhone('iphone12',7777,'黑色','6.1')
      iPhone.call()
      iPhone.photo();
      console.log(iPhone);
```

![image-20201108092226309](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210328145429.png)

`注意：`

```
1、在ES6类中没有变量提升，所以必须先定义类，才能通过类实例化对象
```

```
2、类里面的共有的属性和方法一定要加this使用
```

```
class Star {
    constructor(uname,age){
      this.uname = uname
      this.age = age
      sing() //报错
    }
    sing(){
      console.log(uname); //报错
    }
  }
  let ldh = new Star ('刘德华')
  ldh.sing()
```

结果：

```

```

![image-20201226173919574](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210328145436.png)

![image-20201226174006080](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210328145440.png)

`在class类中this都指向新创建的实例对象，如果不加this去调用方法和属性，那么就会去全局作用域找，找不到就会报错`

正确的写法是：

```
class Star {
    constructor(uname,age){
      this.uname = uname
      this.age = age
      this.sing()
    }
    sing(){
      console.log(this.uname); //刘德华
    }
  }
  let ldh = new Star ('刘德华')
  ldh.sing()
```

结果：

```

```

![image-20201226174313157](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210328145458.png)

##### call、apply、bind

> call()、apply()、bind()是用来改变this的指向的。

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1535346409-8618-20170316165541854-1574871496-165358786755339.png)

```
obj.objAge;  // 17
     obj.myFun()  // 小张年龄 undefined
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1535346409-8327-20170316170324541-406227186-165358786755341.png)

```
shows()  // 盲僧
```

比较一下这两者 this 的差别，第一个打印里面的 this 指向 obj，第二个全局声明的 shows() 函数 this 是 window ；

由于this只能存在于window对象和方法中，第一this并没有方法包裹，所以作用域是指向全局window,所以这时this指向window

**1，call()、apply()、bind() 都是用来重定义 this 这个对象的！**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1535346409-8172-20170316172537651-1643313633-165358786755343.png)

```
obj.myFun.call(db)；　　　　// 德玛年龄 99
     obj.myFun.apply(db);　　　 // 德玛年龄 99
     obj.myFun.bind(db)();　　　// 德玛年龄 99
```

以上除了 bind 方法后面多了个 () 外 ，结果返回都一致！

由此得出结论，bind 返回的是一个新的函数，你必须调用它才会被执行。

**2，对比call 、bind 、 apply 传参情况下**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1535346409-7922-20170316173631526-1279562612-165358786755346.png)

```
obj.myFun.call(db,'成都','上海')；　　　　 // 德玛 年龄 99  来自 成都去往上海
obj.myFun.apply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海  
obj.myFun.bind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
obj.myFun.bind(db,['成都','上海'])();　　 // 德玛 年龄 99  来自 成都, 上海去往 undefined
```

微妙的差距！

从上面四个结果不难看出:

call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：

call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 **obj.myFun.call(db,'成都', ... ,'string' )**。

apply 的所有参数都必须放在一个数组里面传进去 **obj.myFun.apply(db,['成都', ..., 'string' ])**。

bind 除了返回是函数以外，它 的参数和 call 一样。

当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！

##### 逻辑运算符（与或非）

**1、非！**

> ```
> 所谓非，就是取反，非真即假，非假即真。
> ```

```
非运算符不仅仅只能用于布尔值，其他数据类型也是可以的，如下:
```

```
1.如果操作数是一个对象，返回false
```

```
2.如果操作数是一个空字符串，返回true
```

```
3.如果操作数是一个非空字符串，返回false
```

```
4.如果操作数是数值0，返回true
```

```
5.如果操作数是任意非0数值(包括Infinity), 返回false
```

```
6.如果操作数是null,返回true
```

```
7.如果操作数是NaN,返回true
```

```
8.如果操作数是undefined, 返回true
```

**2、与&&**

> ```
> 作用于两到多个值，并且只有所有的操作数都是真值时，才为true。
> ```

```
JavaScript里面的与存在短路现象，具体说明如下:
```

```
1.第一个操作数为真:会进入第二个操作数的判断，且无论第二个操作数真假，都会返回第二个操作数。
```

```
2.第一个操作数为假:不会进入第二个操作数的判断，直接返回第一个操作数。
```

```
console.log(3 && 5);//5
     console.log("Hello" && 20);//20
     console.log("Hello" && false);//false
     console.log("" && "shoe");//""
     console.log("Hello" && '');//''
```

**3、或||**

> 同样是作用于两到多个值，但是只要有一个操作数为真，就返回真。

JavaScript里面的或同样存在短路现象，具体说明如下:

1.如果第一个操作数为真，则不会进入第二个数的判断。所以无论第二个操作数真假，都直接返回第一个操作数

2.如果第一个操作数为假，则会进入第二个数的判断。但是无论第二个操作数真假，都直接返回第二个操作数

实例：

```
console.log(false || true);//true
     console.log("Hello" || "");//Hello
     console.log("Hello" || "str");//Hello
     console.log(NaN || "");//""
     console.log(0 || "Hello World");//Hello World
     console.log('' || 'str');//str
     console.log('' || false);//false
```

经典题：

```
let a = false;
     let b = a || c;因为a是false，所以会判断第二个数。
     console.log(b); //ReferenceError: c is not defined
     let a = false;
     let b = a && c;// 因为a是false，所以不会判断第二个数。
     console.log(b);//false
```

##### 作用域

###### 变量声明提前

使用var关键字声明的变量，会在所有的代码执行之前被声明

var a=1相当于在代码最上方提前声明a；也就是var a;后面再赋值

但是如果声明变量时 `不使用var关键字，则变量不会被声明提前`

```
console.log(a); //undefined
     var a = 10
```

```
console.log(a); //报错，let和const声明的变量都不会声明提前
    let a = 10
```

```
console.log(a);//报错
    const a = 10
```

```
console.log(a);//报错
    a = 10
```

###### 函数声明提前

**function fun(){}与var fun2=function(){}的区别**

函数声明提前

　　-使用函数声明形式创建的函数function 函数名（）{}

```
console.log(a); //a(){}
    function a() {}
```

它会在所有的代码执行之前就被创建，`函数声明提前会在变量提升之后,变量提升会快于函数提升`

```
console.log(a); //a(){}
    function a() {}
    var a = 10
    //上面代码在js中是这样解析的
    //var a;
    //function a(){}
    //console.log(a) //a(){}
    //a = 10
```

-使用函数表达式创建的函数不会声明提前（但是会变量提升，不会报错），所以不能在声明前调用

　　　　如果提前使用的话相当于undefined

```
console.log(a); //undefined,不会函数提升
    var a = function () {}
```

##### 严格模式

**一、概述**

除了正常运行模式，ECMAscript 5添加了第二种运行模式：["严格模式"](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode)（strict mode）。顾名思义，这种模式使得Javascript在更严格的条件下运行。

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgbg2013011401.jpg)

设立"严格模式"的目的，主要有以下几个：

> 　　     - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
>
> 　　       - 消除代码运行的一些不安全之处，保证代码运行的安全；
>
> 　　            - 提高编译器效率，增加运行速度；
>
> 　　              - 为未来新版本的Javascript做好铺垫。

"严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经[支持](http://kangax.github.com/es5-compat-table)它，许多大项目已经开始全面拥抱它。

另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。

本文将对"严格模式"做详细介绍。

**二、进入标志**

进入"严格模式"的标志，是下面这行语句：

> 　　　　　　　　"use strict";

老版本的浏览器会把它当作一行普通字符串，加以忽略。

**三、如何调用**

"严格模式"有两种调用方法，适用于不同的场合。

**3.1 针对整个脚本文件**

将"use strict"放在脚本文件的第一行，则整个脚本都将以"严格模式"运行。如果这行语句不在第一行，则无效，整个脚本以"正常模式"运行。如果不同模式的代码文件合并成一个文件，这一点需要特别注意。

(严格地说，只要前面不是产生实际运行结果的语句，"use strict"可以不在第一行，比如直接跟在一个空的分号后面。)

```js
<script>　　　　
　"use strict";　　　
　console.log("这是严格模式。");　　　　
</script>
<script>
console.log("这是正常模式。");　
</script>
```

**3.3 脚本文件的变通写法**

因为第一种调用方法不利于文件合并，所以更好的做法是，借用第二种方法，将整个脚本文件放在一个立即执行的匿名函数之中。

> 　　　　　　　　(function (){
>
> 　　　　　　　　　　"use strict";
>
> 　　　　　　　　　　// some code here
>
> 　　　　　　　　 })();

**四、语法和行为改变**

严格模式对Javascript的语法和行为，都做了一些改变。
**4.1 全局变量显式声明**

在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。

> "use strict";
>
> 　　v = 1; // 报错，v未声明
>
> 　　for(i = 0; i < 2; i++) { // 报错，i未声明
> 　　}

因此，严格模式下，变量都必须先用var命令声明，然后再使用。

**4.2 静态绑定**

Javascript语言的一个特点，就是允许"动态绑定"，即某些属性和方法到底属于哪一个对象，不是在编译时确定的，而是在运行时（runtime）确定的。

严格模式对动态绑定做了一些限制。某些情况下，只允许静态绑定。也就是说，属性和方法到底归属哪个对象，在编译阶段就确定。这样做有利于编译效率的提高，也使得代码更容易阅读，更少出现意外。

具体来说，涉及以下几个方面。

**（1）禁止使用with语句**

因为with语句无法在编译时就确定，属性到底归属哪个对象。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　var v = 1;
>
> 　　　　　　　　with (o){ // 语法错误
> 　　　　　　　　　　v = 2;
> 　　　　　　　　}

**（2）创设eval作用域**

正常模式下，Javascript语言有两种变量作用域（scope）：全局作用域和函数作用域。严格模式创设了第三种作用域：eval作用域。

正常模式下，eval语句的作用域，取决于它处于全局作用域，还是处于函数作用域。严格模式下，eval语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于eval内部。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　var x = 2;
>
> 　　　　　　　　console.info(eval("var x = 5; x")); // 5
>
> 　　　　　　　　console.info(x); // 2

**4.3 增强的安全措施**

**（1）禁止this关键字指向全局对象**

> 　　　　　　　　function f(){
> 　　　　　　　　　　return !this;
> 　　　　　　　　}
> 　　　　　　　　// 返回false，因为"this"指向全局对象，"!this"就是false
>
> 　　　　　　　　function f(){
> 　　　　　　　　　　"use strict";
> 　　　　　　　　　　return !this;
> 　　　　　　　　}
> 　　　　　　　　// 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。

因此，使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。

> 　　　　　　　　function f(){
>
> 　　　　　　　　　　"use strict";
>
> 　　　　　　　　　　this.a = 1;
>
> 　　　　　　　　};
>
> 　　　　　　　　f();// 报错，this未定义
> **（2）禁止在函数内部遍历调用栈**

> 　　　　　　　　function f1(){
>
> 　　　　　　　　　　"use strict";
>
> 　　　　　　　　　　f1.caller; // 报错
>
> 　　　　　　　　　　f1.arguments; // 报错
>
> 　　　　　　　　}
>
> 　　　　　　　　f1();

**4.4 禁止删除变量**

严格模式下无法删除变量。只有configurable设置为true的对象属性，才能被删除。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　var x;
>
> 　　　　　　　　delete x; // 语法错误
>
> 　　　　　　　　var o = Object.create(null, {'x': {
> 　　　　　　　　　　　　value: 1,
> 　　　　　　　　　　　　configurable: true
> 　　　　　　　　}});
>
> 　　　　　　　　delete o.x; // 删除成功

**4.5 显式报错**

正常模式下，对一个对象的只读属性进行赋值，不会报错，只会默默地失败。严格模式下，将报错。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　var o = {};
>
> 　　　　　　　　Object.defineProperty(o, "v", { value: 1, writable: false });
>
> 　　　　　　　　o.v = 2; // 报错

严格模式下，对一个使用getter方法读取的属性进行赋值，会报错。　

```
"use strict";
　　  var o = {
　　　  get v() { return 1; }
　　　};
o.v = 2; // 报错
```

严格模式下，对禁止扩展的对象添加新属性，会报错。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　var o = {};
>
> 　　　　　　　　Object.preventExtensions(o);
>
> 　　　　　　　　o.v = 1; // 报错

严格模式下，删除一个不可删除的属性，会报错。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　delete Object.prototype; // 报错

**4.6 重名错误**

严格模式新增了一些语法错误。

**（1）对象不能有重名的属性**

正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　var o = {
> 　　　　　　　　　　p: 1,
> 　　　　　　　　　　p: 2
> 　　　　　　　　}; // 语法错误



**（2）函数不能有重名的参数**

正常模式下，如果函数有多个重名的参数，可以用arguments[i]读取。严格模式下，这属于语法错误。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　function f(a, a, b) { // 语法错误
>
> 　　　　　　　　　　return ;
>
> 　　　　　　　　}

**4.7 禁止八进制表示法**

正常模式下，整数的第一位如果是0，表示这是八进制数，比如0100等于十进制的64。严格模式禁止这种表示法，整数第一位为0，将报错。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　var n = 0100; // 语法错误

**4.8 arguments对象的限制**

arguments是函数的参数对象，严格模式对它的使用做了限制。

**（1）不允许对arguments赋值**

> 　　　　　　　　"use strict";
>
> 　　　　　　　　arguments++; // 语法错误
>
> 　　　　　　　　var obj = { set p(arguments) { } }; // 语法错误
>
> 　　　　　　　　try { } catch (arguments) { } // 语法错误
>
> 　　　　　　　　function arguments() { } // 语法错误
>
> 　　　　　　　　var f = new Function("arguments", "'use strict'; return 17;"); // 语法错误

**（2）arguments不再追踪参数的变化**

> 　　　　　　　　function f(a) {
>
> 　　　　　　　　　　a = 2;
>
> 　　　　　　　　　　return [a, arguments[0]];
>
> 　　　　　　　　}
>
> 　　　　　　　　f(1); // 正常模式为[2,2]
>
> 　　　　　　　　function f(a) {
>
> 　　　　　　　　　　"use strict";
>
> 　　　　　　　　　　a = 2;
>
> 　　　　　　　　　　return [a, arguments[0]];
>
> 　　　　　　　　}
>
> 　　　　　　　　f(1); // 严格模式为[2,1]

**（3）禁止使用arguments.callee**

这意味着，你无法在匿名函数内部调用自身了。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　var f = function() { return arguments.callee; };
>
> 　　　　　　　　f(); // 报错

**4.9 函数必须声明在顶层**

将来Javascript的新版本会引入"块级作用域"。为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。也就是说，不允许在非函数的代码块内声明函数。

> 　　　　　　　　"use strict";
>
> 　　　　　　　　if (true) {
>
> 　　　　　　　　　　function f() { } // 语法错误
>
> 　　　　　　　　}
>
> 　　　　　　　　for (var i = 0; i < 5; i++) {
>
> 　　　　　　　　　　function f2() { } // 语法错误
>
> 　　　　　　　　}

**4.10 保留字**

为了向将来Javascript的新版本过渡，严格模式新增了一些保留字：implements, interface, let, package, private, protected, public, static, yield。

使用这些词作为变量名将会报错。

> 　　　　　　　　function package(protected) { // 语法错误
>
> 　　　　　　　　　　"use strict";
>
> 　　　　　　　　　　var implements; // 语法错误
>
> 　　　　　　　　}

此外，ECMAscript第五版本身还规定了另一些保留字（class, enum, export, extends, import, super），以及各大浏览器自行增加的const保留字，也是不能作为变量名的。

##### this

> this是一个对象的别名，它指向一个对象，对象没有作用域，作用域与函数对应，this和对象对应

###### 普通函数的this指向

在普通函数中，谁调用它，this就指向它

**1.函数调用模式**

当一个函数并非一个对象的属性时，那么它就是被当做函数来调用的。在此种模式下，this被绑定为全局对象，在浏览器环境下就是window对象

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter.png)

**2.方法调用模式**

当函数被保存为一个对象的属性时，它就可称为这个对象的方法。当一个方法被调用时，this被绑定到这个对象上。如果调用表达式包含一个提取属性的动作（. 或 []），那么它被称为方法调用

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-16535878675031.png)

这里的this指向的对象是o，因为调用这个sayName()函数是通过o.sayName()执行的。

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-16535878675032.png)

因为是o.b调用的这个函数，所以指向b这个对象

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-16535878675033.png)

同理，因为是o.b调用的这个函数，所以指向b这个对象

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-16535878675034.png)

t是全局变量，在全局环境下执行，this指向window

**3.构造函数调用模式**

如果在一个函数前面加上new关键字来调用，那么就会创建一个连接到该函数的prototype成员的新对象，同时，this会被绑定到这个新对象上。这种情况下，这个函数就可以成为此对象的构造函数。

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-16535878675035.png)

在构造函数，new出一个对象时，this指向这个构造函数，new关键字会改变this的指向

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-16535878675036.png)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-16535878675037.png)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-16535878675038.png)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-16535878675039.png)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-165358786750410.png)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-165358786750411.png)

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-165358786750412.png)

**4.apply和call调用模式**

JS中，函数也是对象，所有函数对象都有两个方法：apply和call，这两个方法可以让我们构建一个参数数组传递给调用函数，也允许我们改变this的值

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1535346409-8172-20170316172537651-1643313633-165358786755343.png)

```
     obj.myFun.call(db)；　　　　// 德玛年龄 99
     obj.myFun.apply(db);　　　 // 德玛年龄 99
     obj.myFun.bind(db)();　　　// 德玛年龄 99
```

以上除了 bind 方法后面多了个 () 外 ，结果返回都一致！

在全局范围内，this指向全局对象（浏览器下指window对象）

对象函数调用时，this指向当前对象

全局函数调用时，应该是指向调用全局函数的对象。

使用new关键字实例化对象时，this指向新创建的对象

当用apply和call上下文调用的时候指向传入的第一个参数

**练习题**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-165358786750414.png)

在执行person1.sayName()时，是方法调用模式，this代表person1这个对象

在执行person2.sayName()时，是方法调用，但是sayName，并没有执行，而是将sayName()这个函数赋值给fun这个变量，fun是函数调用模式，this指向window，故输出全局的name

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-165358786750415.png)

执行console.log(b.n)时，b对象有自己的属性n值

执行console.log(c.n)时，c对象没有自己的属性n值，会向上查找，找的A对象中的属性n值

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgCenter-165358786750416.png)

vargetColor=test.getColor相当于把方法函数赋值给全局变量，

故getColor()中的this指向window

test.getColor()是方法调用

注：`原型对象里面的方法的this指向实例`

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220612170847646.png" alt="image-20220612170847646" style="zoom:67%;" />

###### 箭头函数的this指向

`箭头函数中没有this,所以它会往上一层去找，如果都没有找到，this就指向window对象，如果找到，那么就找到的this作为自己的this`,`并且call、apply、bind都不能改变它的this指向，因为箭头函数根本没有this`

注意：作用域是对于函数来说的

**箭头函数中的this引用的是距离最近的作用域中的this,从this的所在处向外层层寻找,直到有this的定义.**

例：

```
	let obj = {
      name: 'mike',
      fun : function () {
        console.log(this); 
        return ()=>{
          console.log(this); 
        }
      }
    }
    obj.fun()()  // {name: 'mike', fun: f}
    obj.fun.call({})()  // {}
```

```
 var name = 'window'
    let obj = {
      name: 'mike',
      fun : ()=>{
        console.log(this.name); //window
      }
    }
    obj.fun()
```

`如果箭头函数定义在构造函数或者类中，由于箭头函数没有this,那么就会往上找，找到构造函数的this,而构造函数的this为新new的实例，所以箭头函数的`

`this指向实例对象`

```
	function Demo(a) {
           this.a = a
           let arrow = ()=>{
             console.log(this);   //Demo {a: "test"}实例
           }
           let fun = function () {
             console.log(this);  //window对象
           }
           arrow()
           fun()
         }
    new Demo('test')
```

注：箭头函数没有this,箭头函数的this会去它的上级作用域`(注意,刚开始普通函数是没有this的,只有调用的时候才有this,除非使用bind绑定this)`寻找this作为它的this,如果想要该变箭头函数的this,只能通过改变它上级作用域的this,而不能通过call、apply等直接改变箭头函数的指向

###### 回调函数的this指向

首先先说下正常的 this 指向问题

什么是 this：自动引用正在调用当前方法的.前的对象。

this指向的三种情况

1. obj.fun()   fun 中的 this->obj ，自动指向.前的对象

2. new Fun()  Fun 中的 this->正在创建的新对象，new 改变了函数内部的 this 指向，导致 this 指向实例化 new 的对象

3. fun() 和匿名函数自调  this 默认->window，函数内部的 this，this 默认是指向 window 的

再说回调函数中的 this 指向问题，我们先来看一个例子

```
<script>
    var Bob={
        sname:"鲍勃",
        friends:["Jack","Rose","Tom","Jerry"],
        intr(){
          this.friends.forEach(function(ele){
               console.log(this.name+"认识"+ele);
          });
        }
    }
    Bob.intr();
</script>
```

看结果：

undefined认识Jack
		undefined认识Rose
	   undefined认识Tom
	    undefined认识Jerry

forEach中的回调函数中的this默认是指向window的，因为本质上是在函数内callback,并没有 . 前的对象调用，当然我们必须要看这个函数是如何处理这个回调函数的，如果在函数内部再把这个回调函数赋值给新对象的

属性，然后再调用，那么就不是window了，在严格模式下（vue默认开启严格模式）， this为undefined

如何解决：

使用箭头函数

```
     <script>
         var Bob={
             sname:"鲍勃",
             friends:["Jack","Rose","Tom","Jerry"],
             intr(){
               this.friends.forEach(ele=>{
                    console.log(this.sname+"认识"+ele); 
               });
             }
         }
         Bob.intr();
     </script>
```

结果是：

鲍勃认识Jack
	  鲍勃认识Rose
	  鲍勃认识Tom
	  鲍勃认识Jerry

可以看出箭头函数内的this自动指向了回调函数外层的 this 。

箭头函数中的 this:

　　函数体内的 this 对象，就是定义时所在的作用域的this，而不是使用时所在的对象。

　　this 指向的固定化，并不是因为箭头函数内部有绑定 this 的机制，实际原因是箭头函数根本没有自己的 this，导致内部的 this 就是外层代码块的 this。正是因为它没有 this，所以也就不能用作构造函数。

普通函数也可使用bind永久绑定this

```
var Bob={
        sname:"鲍勃",
        friends:["Jack","Rose","Tom","Jerry"],
        intr(){
          this.friends.forEach(function(friend){
               console.log(this.sname+"认识"+friend);
          }.bind(this));
        }
    }
    Bob.intr();
```

##### 闭包

> 闭包并不是js自带的内容，闭包的产生是为了解决外层作用域无法获取内层作用域变量等作用域问题

那么闭包到底是什么呢？

我们首先知道闭包有3个特性：

①函数嵌套函数

②函数内部可以引用函数外部的参数和变量

③参数和变量不会被垃圾回收机制回收

**闭包本质就是一个函数里面再定义一个函数，内层函数引用外层函数定义的变量，这样就可以解决许多问题。**

**问题一（外部作用域无法访问内部作用域的问题）**

​		内层函数使用return函数返回

​		<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215648.png" alt="image-20201221114726294" style="zoom:67%;" />

​		在这段代码中，a()中的返回值是一个匿名函数，这个函数在a()作用域内部，所以它可以获取a()作用域下变量name的值，将这个值作为返回值赋给全局作用域下的变量b,实现了在全局变量下获取到局部变量中的变量的值

​		这样就可以访问其他函数定义的变量了，当然我们一定会有这样一个疑问：为什么不直接return 有name,而是使用一个匿名函数包裹返回？

​		直接return的确是可以的，但是获取到的变量与那个函数的变量就无关了，如果使用闭包获取到

​		的函数，那么仍然是使用返回函数的作用域，这样就可以延长函数作用域的作用周期

再来看一个闭包的经典例子

 <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img551750-20181212101629347-1385426172-165358786755465.jpg" alt="img" style="zoom: 80%;" />

一般情况下，在函数fn执行完后，就应该连同它里面的变量一同被销毁，但是在这个例子中，匿名函数作为fn的返回值被赋值给了fn1，这时候相当于fn1=function(){var n = 0 ... }，并且匿名函数内部引用着fn里的变量num，所以变量num无法被销毁，而变量n是每次被调用时新创建的，所以每次fn1执行完后它就把属于自己的变量连同自己一起销毁，于是乎最后就剩下孤零零的num，于是这里就产生了内存消耗的问题



**问题二、（异步函数问题）**

写一个for循环，让它按顺序打印出当前循环次数

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215653.png" alt="image-20201221124224881" style="zoom:80%;" />

按照预期它应该依次输出1 2 3 4 5，而结果它输出了五次5，这是为什么呢？原来由于js是单线程的， 所以在执行for循环的时候定时器setTimeout被安排到任务队列中排队等待执行，而在等待过程中for循环就已经在执行，等到setTimeout可以执行的时候，for循环已经结束，i的值（函数内部没有该变量，所以只能到外部变量寻找，而这是的外部变量i已经变为5了）也已经变成5，所以打印出来五个5，那么我们为了实现预期结果应该怎么改这段代码呢？（ps:如果把for循环里面的var变成let，也能实现预期结果）

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215658.png" alt="image-20201221125001618" style="zoom:80%;" />

在这段代码中，相当于同时启动5个定时器，i*100是为5个定时器分别设置了不同的时间，同时启动，但是执行时间不同，每个定时器间隔都是100毫秒，实现了每隔100毫秒就执行一次打印的效果。由于

每个for循环生成了5个独立的函数作用域，然后再把每次循环的变量通过参数传进来，而且每个函数的都有独立的作用域，所以函数内部会优先引用函数作用域的变量

**经典题目：闭包作为参数传递**

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215702.png" alt="image-20201221133117212" style="zoom: 80%;" />

在这段代码中，函数fn1作为参数传入立即执行函数中，在执行到fn2(30)的时候，30作为参数传入fn1中，这时候if(x>num)中的num取的并不是立即执行函数中的num，而是取`创建函数的作用域中的num这里函数创建的作用域是全局作用域下`，所以`num取的是全局作用域中的值15`，即30>15，打印30

 原因：虽然看起来fn1是在立即执行函数的作用域里面，但实际上并不是，这里只是调用，fn1仍然处于全局内，所以num还是会去全局中很早，而不会在立即执行函数中找

最后总结一下闭包的好处与坏处

**好处**

①保护函数内的变量安全 ，实现封装，防止变量流入其他环境发生命名冲突

②在内存中维持一个变量，可以做缓存（但使用多了同时也是一项缺点，消耗内存）

③匿名自执行函数可以减少内存消耗

**坏处**

①其中一点上面已经有体现了，就是被引用的私有变量不能被销毁，增大了内存消耗，造成内存泄漏，解决方法是可以在使用完变量后手动为它赋值为null；

②其次由于闭包涉及跨域访问，所以 	我们可以通过把跨作用域变量存储在局部变量中，然后直接访问局部变量，来减轻对执行速度的影响

**使用在单例模式上**

```
	//使用闭包进行改造
    var createSingle = (function () {
      var _unique = null
      return function () {
        if (_unique === null) {
          _unique = {a: 1}
        }
        return _unique
      }
    })()

    var a = createSingle()
    var b = createSingle()
    console.log(a === b);  //true
```



##### 原型链

###### （一）原型 Prototype

**⑴我们所创建的每一个函数，解析器都会向函数中添加一个属性Prototype**

```
	这个属性对应着一个对象，这个对象就是我们所谓的原型对象
```

**⑵如果函数作为普通函数调用prototype没有任何作用**

```
	当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性指向该构造函数的原型对象，我们可以通过_ _proto_ _来访问
```

**⑶示例：**

```
     function MyClass(){
     }
     var mc = new MyClass();
     var mc2 = new MyClass();
     console.log(mc2.__proto__ == MyClass.prototype);
```

返回结果为：true；

**⑷原型对象就相当于一个公共的区域，所有同一类的实例都可以访问到这个原型对象**

  我们可以将对象中共有的内容，统一设置到原型对象中。

**⑸当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，**

  如果没有则会去原型对象中寻找，如果找到则直接使用（！important）

**⑹具体图形演示：**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200912145335868-1772910806-165358786755467.png)

 **示例1：**

```
     function MyClass(){}//向MyClass的原型中中添加a属性
     MyClass.prototype.a = 123; 
     var mc = new MyClass(); 
     var mc2 = new MyClass(); 
     //向mc中添加a属性  
     mc.a = "我是mc中的a"; 
     console.log(mc.a);
     console.log(mc2.a);
     结果输出：
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200912150836365-1277022884-165358786755469.png) 

**示例2：**

```
     function MyClass(){}//向MyClass的原型中中添加a属性
     MyClass.prototype.a = 123; 
     //向MyClass的原型中中添加一个方法
     MyClass.prototype.sayHello = function(){
          alert("hello");
     };
     var mc = new MyClass(); 
     var mc2 = new MyClass(); 
     //向mc中添加a属性  
     mc.a = "我是mc中的a"; 
     mc.sayHello();
```

 结果显示为：hello

**⑺以后我们创建构造函数时，可以将这些对象共有属性和方法，统一添加到构造函数的原型对象中， **

   这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了

 

###### （二）显示原型与隐式原型

```
     function MyClass(){}
     //向MyClass的原型中添加一个name属性
     MyClass.prototype.name = "我是原型中的名字";
     var mc = new MyClass();
     console.log(mc.name);结果返回：我是原型中的名字
```

**⑴使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true**

```
     console.log("name" in mc);

      结果会返回:true
```

**⑵可以使用对象的hasOwnPrototype( )来检查对象自身是否含有该属性**

```
     使用该方法只有当对象自身含有属性时，才会返回true

      console.log(mc.hasOwnPrototype("age"));

     结果返回：true

     console.log(mc.hasOwnPrototype("hasOwnProperty"));

      结果返回：false
```

**⑶原型对象也是对象，所以它也有原型**

   当我们使用一个对象的属性或方法时，会先在自身中寻找

   自身中如果有，则直接使用

   如果没有则去原型对象中寻找，如果原型对象中有，则使用

   如果没有则去原型的原型中寻找，直到找到Object对象的原型

   Object对象的原型是没有原型的。

   如果在Object中依然没有找到，则返回undefined

**(3）显式原型与隐式原型**

　　1）每个函数function都有一个prototype,即显式原型（属性）

　　2}每个实例对象都有一个proto，可称为隐式原型（属性）

　　3）对象的隐式原型的值为其对应构造函数的显示原型的值

　　4）总结：

　　　　函数的prototype属性：在定义函数之前自动添加的，默认值是一个空Object对象

　　　　实例对象的proto属性：创建对象时自动添加的，默认值为构造函数的prototype属性值

　　程序员能直接操作显式原型，但不能直接操作隐式原型（ES6之前）

###### （三）原型链

　　**1）访问一个对象的属性时，**

　　　　先在自身属性查找，找到返回

　　　　如果没有，再沿着proto这条链上查找，找到返回

　　　　如果最终没找到，返回undefinded**

​		`实例.constructor === 构造函数`

**<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200915130429181-177209062-165358786755471.png" alt="img" style="zoom: 67%;" />**

 

 

函数/原型/实体对象的关系（图解）**

　　　　**<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/2029744-20200915125627899-1269807046-165358786755475.png" alt="img" style="zoom:67%;" />**

 ![image-20201226214554980](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210306004858.png)

##### 深浅拷贝

**1.深拷贝与浅拷贝的区别**

> 如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝，自食其力。

**2.栈堆、基本数据类型、引用数据类型**
栈堆：存放数据的地方
基本数据类型：number,string,boolean,null,undefined.
引用数据类型(Object类)有常规名值对的无序对象{a:1}，数组[1,2,3]，以及函数等。

**3.浅拷贝**

```js
     let a= [0,1,2,3,4],b=a;
     console.log(a===b);     // true
     a[0] = 1
     console.log(a,b)        // [1, 1, 2, 3, 4][1, 1, 2, 3, 4] 
```

**3.深拷贝**（典型方法）

```js
     function deepClone(obj){
       let objClone = Array.isArray(obj)?[]:{};
       if(obj && typeof obj==="object"){
         for(key in obj){
              //判断ojb子元素是否为对象，如果是，递归复制
               if(obj[key]&&typeof obj[key] ==="object"){
                   objClone[key] = deepClone(obj[key]);
               }else{
                   //如果不是，简单复制
                   objClone[key] = obj[key];
               }
            }
       }
       return objClone;
     } 

     let a=[1,2,3,4],b=deepClone(a);
     a[0]=2;
     console.log(a,b);
```

![这里写图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png-165358786750417.png)
**4.引用类型和基本类型栈内存储**

**4.1基本类型**

![这里写图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/format,png-165358786750418.png)

**4.2引用类型**

![这里写图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/format,png-165358786750519.png)

**5.JS中拷贝Array的slice和concat方法**

5.1.slice拷贝

```js
var a = [1,2,3];
var b = a.slice(); //slice
console.log(b === a);
a[0] = 4;
console.log(a);
console.log(b);
```

![这里写图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png-165358786750520.png)
5.2.concat拷贝

```js
var a = [1,2,3];
var b = a.concat();  //concat
console.log(b === a);
a[0] = 4;
console.log(a);
console.log(b);	
```

![这里写图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/format,png-165358786750521.png)
看到结果，如果你觉得，这两个方法是深拷贝，那就恭喜你跳进了坑里！
来看看有意思的例子吧

```js
var a = [[1,2,3],4,5];
var b = a.slice();
console.log(a === b);
a[0][0] = 6;
console.log(a);
console.log(b);
123456
```

![这里写图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/format,png-165358786750522.png)
可以看到`slice和contact对于第一层是深拷贝，但对于多层的时候，是复制的引用，所以是浅拷贝`,也叫`首层浅拷贝`

首层浅拷贝有:concat(),slice(),Object.assign()

**用扩展运算符拷贝数组：**
直接粘贴代码：

```javascript
    let arr = [1, 2, 3, 4, 5, 6];
    let arr1 = [...arr];
    arr1.push(7);
    console.log(arr); //[1, 2, 3, 4, 5, 6]
    console.log(arr1); //[1, 2, 3, 4, 5, 6, 7]
```

当**数组是一维数组时，扩展运算符可以进行完全深拷贝**，改变拷贝后数组的值并不会影响拷贝源的值。
**但是，当数组为多维时：**

```javascript
    let arr = [1, 2, 3, 4, 5, 6, [1, 2, 3]];
    let arr1 = [...arr];
    arr1.push(7);
    arr1[arr1.length - 2][0] = 100;
    console.log(arr); //[1, 2, 3, 4, 5, 6,[100, 2, 3]]
    console.log(arr1); //[1, 2, 3, 4, 5, 6, [100, 2, 3],7]
```

由上可见，我们不难发现当改变拷贝后数组中第二层数组的值时，arr1arr1.length - 2 = 100;拷贝前数组第二层数组的值也跟着改变了。

对象同理：
**当对象只有一层时：**

```javascript
    let obj = {
        name: "Wawa",
        age: 13,
        gender: "female"
    };
    let obj1 = {...obj};
    obj1.height = 165;
    console.log(obj);//{name: "Wawa", age: 13, gender: "female"}
    console.log(obj1);//{name: "Wawa", age: 13, gender: "female", height: 165}
```

可以用扩展运算符进行完全[深拷贝](https://so.csdn.net/so/search?q=深拷贝)。

**但当对象有多层时：**

```ruby
    let obj = {
        name: "Wawa",
        age: 13,
        gender: "female",
        hobby: {
            a: 'Chinese',
            b: 'Math',
            c: 'English'
        }
    };
    let obj1 = {...obj};
    obj1.hobby.a = "PE";
    console.log(obj); //{name: "Wawa", age: 13, gender: "female",hobby:{a: "PE", b: "Math", c: "English"}}
    console.log(obj1); //{name: "Wawa", age: 13, gender: "female", ,hobby:{a: "PE", b: "Math", c: "English"},height: 165}
```

扩展运算符并不能打散第二层对象的值，且无法对其进行深拷贝，拷贝前和拷贝后第二层对象的引用地址仍然是同一个，一方改变，另一方也改变。

结论：**用扩展运算符对数组或者对象进行拷贝时，只能扩展和深拷贝第一层的值**，对于第二层极其以后的值，扩展运算符将不能对其进行打散扩展，也不能对其进行深拷贝，即**拷贝后和拷贝前第二层中的对象或者数组仍然引用的是同一个地址，其中一方改变，另一方也跟着改变**。

**6.JSON 对象的 parse 和 stringify都是深拷贝**（这个方法推荐使用，简单方便)

```js
var obj = {name:'cancan',age:23,company : { name : '阿里', address : '杭州'} };
var obj_json = JSON.parse(JSON.stringify(obj));
console.log(obj === obj_json);
obj.company.name = "cancan82";
obj.name = "haha";
console.log(obj);
console.log(obj_json);
```

![这里写图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png-165358786750523.png)

`但是,这种方法只能适用于一些简单的情况.比如下面这样的一个对象就不应用:`

```
const originObj = {
 name:'axuebin',
 sayHello:function(){
 console.log('Hello World');
 }
}
console.log(originObj); // {name: "axuebin", sayHello: ƒ}
const cloneObj = JSON.parse(JSON.stringify(originObj));
console.log(cloneObj); // {name: "axuebin"}
```

发现在` cloneObj `中，有属性丢失了。。。那是为什么呢？

在 MDN 上找到了原因：

> If undefined, a function, or a symbol is encountered during conversion it is either omitted (when it is found in an object) or censored to null (when it is found in an array). JSON.stringify can also just return undefined when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).

`undefined`、`function`、`symbol `会在转换过程中被忽略。。。

明白了吧，就是说如果对象中含有一个函数时（很常见），就不能用这个方法进行深拷贝。

并且对undefined、函数进行这样的处理会报错

**递归的方法**

递归的思想就很简单了，就是对每一层的数据都实现一次 创建对象->对象赋值 的操作，简单粗暴上代码：

```
   function deepClone(source) {
   	//实例.constructor === 构造函数
      const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
      for (let keys in source) { // 遍历目标
        if (source.hasOwnProperty(keys)) {
          if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
            targetObj[keys] = source[keys].constructor === Array ? [] : {};
            targetObj[keys] = deepClone(source[keys]);
          } else { // 如果不是，就直接赋值
            targetObj[keys] = source[keys];
          }
        }
      }
      return targetObj;
    }
```

##### 对象处理



##### JSON

由于浏览器和服务器要经常传递数据，然后浏览器和服务器端所使用的语言不一定相同，

```
	var obj={"name":"孙悟空","age":18,"gender":"男"}//js对象
```

JS中的对象只有JS自己认识，其他语言不认识，所以对象不能以对象的方式直接传输

但是任何语言都能识别字符串，所以可以把JS对象转换成特殊字符串，然后在根据不同语言进行处理还原

```
	var obj='{"name":"孙悟空","age":18,"gender":"男"}'//js对象	
```

JSON分类：

​	1、对象{ }

​	2、数组[ ]

JSON中允许的值：

​	1、字符串

​	2、数值

​	3、布尔值

​	4、null

​	5、对象

​	6、数组

`其他的类型时不允许的，比如function`

![image-20220614002058940](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220614002058940.png)

**JSON.parse()【从一个字符串中解析出json对象】**

例子：

//定义一个字符串

var data='{"name":"goatling"}'

//解析对象

JSON.parse(data)

结果是：

{name:"goatling"}

**JSON.stringify()【从一个对象中解析出字符串】**

var data={name:'goatling'}

JSON.stringify(data)

结果是：

'{"name":"goatling"}'

#### WebAPIs

##### 事件处理

###### 注册事件（绑定事件）

###### 删除事件（解绑事件）

###### DOM事件流

  ​	事件流描述的是从页面接受事件的顺序

  ​	事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流

​		1、JS代码只能执行捕获或者冒泡其中一个阶段。

​		2、onclick和`attachEvent( )（IE专属）`只能得到冒泡阶段

​		3、`如果addEventListener第三个参数是true，那么则处于捕获阶段 document -> html ->body ->father ->son`

​			 `如果addEventListener第三个参数是false(不写这个参数默认就是false),那么处于冒泡阶段 son ->father -body ->html ->document`

​		**事件冒泡**（事件默认触发冒泡）

​		IE的事件流叫做事件冒泡(event bubbling)，即事件开始时由最具体的元素(文档中嵌套层次最深的那个节点)接收，然后逐级向上传播到较为不具体的节点(文档)

​		怎么用理解呢？直接上代码：

```
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Document</title>
         <style>
           #box {
             width: 100px;
             height: 100px;
             background-color: red;
             margin: 0 auto;
           }
         </style>
       </head>
       <body>
         <div id="box"></div>
         <script>
         	//给box绑定事件
           document.getElementById('box').addEventListener('click', function () {
             alert('我是box盒子触发的')
           },false)
           //给Body绑定事件
           document.body.addEventListener('click', function () {
             alert('我是body触发的')
           },false)
         </script>
       </body>
     </html>

```

​	效果图：

​		![](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140811.png)

​	点击box,依次触发下面结果：

​		![image-20201012232917460](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140814.png)

​	![image-20201012232941969](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210505215730.png)

​	从上面例子可以看出：

​			当我点击了一下box盒子，实际上可以说是点击了body也行，因为整个页面都是body，所以你点哪里都可以说是点击了body,

​			那么问题来了，这两种说法都对，所以既会触发box盒子绑定的事件也会触发body绑定的事件。

​			但是，这两个事件触发的先后顺序可以规定好，box盒子，也就是子元素绑定的事件先执行，body，也就是父元素绑定的事件后执行

​	**事件捕获**

​		当我把上面addEventListener的第三个参数设置为true,那么就会处于捕获阶段

```
      <script>
           //给box绑定事件
           document.getElementById('box').addEventListener('click', function () {
           alert('我是box盒子触发的')
           },true)
           //给Body绑定事件
           document.body.addEventListener('click', function () {
           alert('我是body触发的')
           },true)
      </script>
```

​		点击box,依次触发下面结果：

![image-20201012232941969](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140825.png)

​		![image-20201012232917460](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140830.png)

​	

​		这次事件触发的顺序和冒泡的相反，父元素先触发，子元素再触发

​		`注意：点击box盒子外的区域不会触发捕获和冒泡，因为，你只点击了body，这个就很明确，只会触发body绑定的事件`

###### 事件对象（event)

什么是事件对象？

• 就是当你触发了一个事件以后，对该事件的一些描述信息

• 例如：

   ° 你触发一个点击事件的时候，你点在哪个位置了，坐标是多少

   ° 你触发一个键盘事件的时候，你按的是哪个按钮

• 系统给我们自动创建一个对应的对象来描述这些信息，我们就把这个对象叫做 事件对象

• ``事件对象系统会自动传给我们的事件函数，在每一个事件处理函数的参数位置，默认第一个就是事件对象``

```
      var box = document.querySelector('.box')
         console.log(box)
         box.onclick = function (event){
             //event.X轴坐标点信息 根据页面来显示的
             console.log(event.x)
        }
```

- 这个事件对象我们可以自己命名 比如event、evt、e......
- 事件对象也有兼容性问题 ie678通过 window.event获取  兼容性的写法 event=event || window.event;

```
      box.addEventListener('click',function(event){
      		//当在正常浏览器中，event存在，那么就直接返回event,在ie678中，event=undefined,那么就会返回window.event
                event=event||window.event;
              })
```

**事件对象的常见属性和方法**

![image-20201013070952026](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140835.png)

1.e.target与this

- e.target 返回的是触发事件的对象（元素）
- this返回的是绑定事件的对象（元素）
- e.target点击了哪个元素，就返回哪个元素；this哪个元素绑定了该事件就返回谁

```
    <div class="box"></div>
    <script>
      var box = document.querySelector('.box')
      box.addEventListener('click', function (e) {
        e = e || window.event
        console.log(event.target)
        console.log(this)
      })
    </script>
```

![image-20201013071729731](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140840.png)

2、返回事件类型（type）

```
     <div class="box"></div>
     <script>
         var box = document.querySelector('.box')
         box.addEventListener('click', function (e) {
             e = e || window.e
             console.log(e.type)
         })
     </script>
```

​	![image-20201013072253545](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140845.png)

3、阻止默认行为（事件），让链接不跳转或者提交按钮不提交

```
      <a href="http://www.baidu.com">百度一下</a>
         <script>
           var a = document.querySelector('a')
           a.addEventListener('click', function (e) {
             e = e || window.e
             e.preventDefault()
           })
         </script>
```

这样链接就不会跳转了

**鼠标事件对象**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/1877004-20200110211558558-1637153900-165358786755585.png)

```
       <script>
             // 鼠标事件对象 MouseEvent
             document.addEventListener('click', function(e) {
                 // 1. client 鼠标在可视区的x和y坐标
                 console.log(e.clientX);
                 console.log(e.clientY);
                 console.log('---------------------');
                 // 2. page 鼠标在页面文档的x和y坐标
                 console.log(e.pageX);
                 console.log(e.pageY);
                 console.log('---------------------');
                 // 3. screen 鼠标在电脑屏幕的x和y坐标
                 console.log(e.screenX);
                 console.log(e.screenY);
             })
         </script>
```

###### 阻止事件冒泡

事件方法默认只会触发冒泡，并不会触发捕获，所以并不需要阻止捕获，只需要阻止冒泡

事件冒泡：开始由最具体的元素接收，然后逐级向上传播到DOM最顶层节点。

阻止事件冒泡的的两种方式

**标准写法：利用事件对象里面的stopPropagation()方法**

> 在子元素的事件方法中加上e.stopPropagation();

非标准写法：IE6-8利用事件对象cancelBubble属性

> 在子元素的事件方法中加上e.cancelBubble=true;

阻止事件冒泡的兼容性解决方案

```
 	<a href="http://www.baidu.com">百度一下</a>
    <script>
      var a = document.querySelector('a')
      a.addEventListener('click', function (e) {
        if (e && e.stopPropagation) {
          e.stopPropagation()
        } else {
          window.event.cancelBubble = true
        }
      })
    </script>
```

###### 事件委托（代理，委派）

事件委托也称为事件代理，在jQuery里面称为事件委派

事件委托的原理：

​		`不是每个节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点`

​		案例：给ul注册事件，然后利用事件对象的target来找到当前点击的li,因为点击li,事件会冒泡到ul上，

​					ul由注册事件，就会触发事件监听器

​		**注意：e.target指的是触发事件的最上层元素

```
       <ul>
           <li>我是第一个li</li>
           <li>我是第二个li</li>
           <li>我是第三个li</li>
         </ul>
         <script>
           var ul = document.querySelector('ul')
           ul.addEventListener('click', function (e) {
             e = e || window.event
             //e.target指的是触发事件的最上层元素
             e.target.style.backgroundColor = 'pink'
           })
         </script>
```

![image-20201013085116175](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140858.png)

事件委托的作用

​		我们只操作绑定了一个事件，提高了程序的性能，而且如果后来动态添加的元素也不用重新绑定事件了

###### 常用的鼠标事件

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/2106211-20200921233132391-803944683-165358786755587.png)

1、禁止鼠标右击菜单

​		contextmenu主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单

```
      document.addEventListener('contextmenu', function (e) {
             e.preventDefault()
           })
```

2、禁止选中文字

​	selectstart

```
      document.addEventListener('selectstart', function (e) {
             e.preventDefault()
           })
```

3、mousemove只要我们鼠标移动1px 就会触发这个事件

###### 常用的键盘事件

1.keyup 按键弹出的时候触发

　document.onkeyup = function(){

　　　console.log(' 我弹起了 ');

　}

2.keydown 按键按下的时候触发 能识别功能键 比如 Ctrl shift 左右箭头

　document.addEventListener('keydown',function(){

　　　console.log('我按下了down');

　})

3.keypress 按键按下的时候触发 不能识别功能键 比如 Ctrl shift  左右箭头

　document.addEventListener('keypress',function(){

　　　console.log('我按下了keypress');

　})

4.三个事件的执行顺序：keydown - - keypress - - keyup

5.键盘事件对象 keyCode 返回该键的 ASCII 值

6.keydown 和 keyup 不区分 字母大小写 keypress 区分字母大小写

　document.addEventListener('keydown',function(e){

　　　if( e.keyCode === 65 ){

　　　　　alert("按下了 a 键");

　　　}else{

　　　　　alert('没有按下 a 键 ');

　　　}

　})

`注意：keydown和keypress在文本框里面的特点：他们两个事件触发的时候，文字还没有落入文本框`

​		 `keyup事件触发的时候，文字已经落入文本框里面了`

##### DOM浏览器对象模型

###### BOM概述

1. 什么是BOM

   BOM(Browser Object Model)即浏览器对象模型，它提供了独立与内容而与浏览器窗口进行交互的对象，其核心对象是window.

   BOM由一系列相关的对象构成，并且每个对象都提供了很多方法和属性。

   BOM缺乏标准，javascript语法的标准化组织是ECMA,DOM的标准化组织是W3C，BOM最初是Netscape浏览器的一部分

   <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNjYyMjYx,size_16,color_FFFFFF,t_70.png" alt="BOM 对象示意图" style="zoom:80%;" />

   window对象是浏览器的顶级对象，它具有双重角色。

   1、它是JS访问浏览器窗口的一个接口

   2、它是一个全局对象。定义在全局作用域中的变量、函数都会变成window对象的属性和方法。

   ​	 在调用的时候省略window,前面学习的对话框都属于window对象方法，如alert()、prompt().

   ​	let str = prompt("请输入：")

   ​	console.log(str)   //输入的内容

   <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140910.png" alt="image-20201228184222822" style="zoom:67%;" />

   ![image-20201228184236747](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140914.png)

   `注意：window下的一个特殊属性window.name,这个属性为空，所以尽量不要定义name这个变量`

   

###### window对象的常见事件

1、窗口加载事件

```
     window.onload = function() { }
     或者
     window.addEventListener("load", function(){})	
```

​	window.onload是窗口（页面）加载事件，当文档内容完全加载完会触发该事件（包括图像、脚本文件、css文件等），就调用的处理函数。

​	**注意：**

​	1.有了window.onload就可以把js代码写在页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。

​	2.window.onload**传统注册事件方式**只能写一次，如果有多个，以最后一个window.onload为准。

​	3.如果使用addEventListener则没有限制。

​	**DOMContentLoaded事件**

```
	document.addEventListener('DOMContentLoaded', function(){})
```

​	DOMContentLoaded事件触发时，仅当DOM加载完毕，不包括样式表、图片、flash等等。IE9以上才支持。

​	如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现，必然会影响用户的体验，
​		  此时用DOMContentLoaded事件比较合适。

2、调整窗口大小事件

```
     window.onresize = function() { }
     window.addEventListener("resize", function(){});
```

​	window.onresize是调整窗口大小加载事件，当触发时就调用的处理函数。

​	**注意：**

​	1.只要窗口大小发生像素变化，就会触发这个事件。

​	2.`我们经常利用这个事件完成响应式布局`。window.innerWidth当前屏幕的宽度。

###### window对象常见的方法

1、open(),新建一个浏览器窗口

​	**语法：**

window.open([URL], [窗口名称], [参数字符串])

**参数说明:**

URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。

窗口名称：可选参数，被打开窗口的名称。

  1.该名称由字母、数字和下划线字符组成。
  	  2."_top"、"_blank"、"_self"具有特殊意义的名称。
  		  _blank：在新窗口显示目标网页
           _self：在当前窗口显示目标网页
           _top：框架网页中在上部窗口中显示目标网页
  	   3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
  	   4.name 不能包含有空格。

参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。	

###### 定时器

**两种定时器**

window对象给我们提供了两个非常好用的方法-定时器

- setTimeout()
- setInterval()

**setTimeout()定时器**

```
	window.setTimeout(调用的函数，[延迟的毫秒数])；
```

setTimeout()方法用于设置一个定时器，该定时器在定时器到期后执行调用函数

语法规范：window.setTimeout(调用函数，延迟时间)；

1、这个window在调用的时候可以省略

2、这个延时时间单位是毫秒 但是可以省略，如果省略默认的是0

3、这个调用函数可以直接写函数，也可以引用函数，写函数名

4、页面中有很多的定时器，我们经常给定时器加标识符（名字）

例：

```
	var timer1=setTimeout(function(){
		console.log('时间到了')
	},2000)
	function callback(){
	console.log('爆炸了')
	}
	var timer2=setTimeout(callback,3000)//引用函数，直接写函数名
```

###### this

this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this的最终指向的是那个调用它的对象

1、全局作用域或者普通函数中this指向全局对象window(注意定时器里面的this指向window)

```
	console.log(this)//window
	function fn(){
		console.log(this)
	}
	window.fn()//window
	setTimeout(function(){
		console.log(this)
	},1000)//window
```

2、方法调用者谁调用this指向谁

3、构造函数中this指向构造函数的实例

###### JS执行机制

JS是单线程

javascript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为javascript这门脚本语言诞生的使命所致——javascript是为处理页面中用户的交互，以及操作DOM而诞生的。比如我们对某个DOM元素进行添加和删除操作，不能同时进行。应该先进行添加，之后再删除。 

###### location对象

###### navigator对象history对象

###### 储存对象

Web 存储 API 提供了Cookie, sessionStorage （会话存储） 和 localStorage（本地存储）两个存储对象来对网页的数据进行添加、删除、修改、查询操作。

- Cookie大小4kb
- localStorage    保存整个网站的数据，保存的数据没有过期时间，直到手动去除。   大小5MB（指的是每个域名5M）
- sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。  大小5MB（指的是每个域名5M）

1、不同浏览器无法共享localStorage和sessionStorage的值。

2、相同浏览器下，并且是同源窗口（协议、域名、端口一致），不同页面可以共享localStorage，Cookies值，通过跳转的页面可以共享sessionStorage值。

3、关于sessionStorage，通常说sessionStorage关闭页面即消失，但是通过跳转的页面可以共享sessionStorage值，跳转有多种方式：

```
     (1)  <a href="同源页面" target="_self">跳转</a>    //原窗口
     (2) <a href="同源页面" target="_blank">跳转</a>  //新开窗口
     (3) window.location.href = '同源页面'      //原窗口
     (4) window.location.replace('同源页面')   //原窗口
     (5) window.open('同源页面')       //新开窗口
     (6) this.$router.push({path: '同源页面'})   //通过路由跳转共享值8
```

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210306140801.png" alt="image-20201111104922186" style="zoom:80%;" />

> sessionStorage使用实例：

```
     // 存储
     sessionStorage.setItem("lastname", "Smith");
     // 检索
     document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
```

> 语法

```
	window.sessionStorage
```

保存数据语法：

```
	sessionStorage.setItem("key", "value");
```

读取数据语法：

```
	var lastname = sessionStorage.getItem("key");
```

删除指定键的数据语法：

```
	sessionStorage.removeItem("key");
```

删除所有数据：

```
	sessionStorage.clear();
```

> localStorage使用实例：

```
     // 存储
     localStorage.setItem("lastname", "Smith");
     // 检索
     document.getElementById("result").innerHTML = localStorage.getItem("lastname");
```

> 语法

```
window.localStorage
```

保存数据语法：

```
localStorage.setItem("key", "value");
```

```
 sessionStorage.key = 'value'   //用这个也行
```

读取数据语法：

```
var lastname = localStorage.getItem("key");
```

```
var lastname = localStorage.key   //用这个也行
console.log(localStorage)     //输出整个localStrage对象
```

删除数据语法：

```
localStorage.removeItem("key");
```

`需要注意的是：sessionStorge和localStorge只能储存字符串，储存对象或者数组都需要先使用JSON.stringify()处理，取出使用JSON.parse()再转换为对象或者说组`

**localstorage可以实现多页面交互**

示例：

index1.html:

```
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
     </head>
     <body>
       <input type="text" id="input">
       <script>
         document.getElementById('input').onblur = function () {
           localStorage.setItem('demo',this.value)
         }
       </script>
     </body>
     </html>
```

index2.html

```
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
     </head>

     <body>
       <input type="text" id="val">
       <script>
         //只要localsrorage数据发生变化了，就会触发storage这个事件
        window.addEventListener('storage',function (e) {
          console.log(e);
          document.getElementById('val').value = e.newValue
        })
       </script>
     </body>
     </html>
```

###### console

1. cosnole.time()

   > console.time() 方法是作为计算器的起始方法。
   >
   > 该方法一般用于测试程序执行的时长。
   >
   > [console.timeEnd()](https://www.runoob.com/jsref/met-console-timeend.html) 方法为计算器的结束方法，并将执行时长显示在控制台。
   >
   > 如果一个页面有多个地方需要使用到计算器，可以添加标签参数来设置。

   ![image-20210801103621636](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img/20210801103621.png)

   使用实例：

   ```
   console.time();
   for (i = 0; i < 100000; i++) {
     // 代码部分
   }
   console.timeEnd();
   ```

   