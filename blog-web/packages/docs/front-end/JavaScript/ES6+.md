#### ES6

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210815005507.png" alt="ES6小尺寸"  />

##### 新的声明方式

**var与let、const的区别**

> - 不属于顶层对象window
> - 不允许重复声明
> - 不存在变量提升
> - 暂时性死区
> - 块级作用域

**1、使用var声明的变量，其作用域为全局或者该语句所在的函数内，且存在变量提升现象。**

　　下面使用node.js演示，也可以插入到html文件中使用以下代码

```
var a = 10;
function test() {
    console.log("function获取的全局变量a" + a);
}
test();
console.log("外部获取的全局变量" + a);
```

输出结果：

　　![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200517000029984-741262760-165358786755591.png)

 上述代码证明了var定义的全局变量可以在任何地方使用。

```
for(var  i=0;i<10;i++){
}
console.log(i);
```

输出结果：

　　![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200910171121109-628898075-165358786755593.png)

 在for,while,switch等语句的括号中定义变量，也属于全局变量

for(var a=1){}

相当于

for(var a=1){

　　var a=1;

}

在这些语句的括号中定义变量相当于隐性在代码块内定义了该该变量

```
function test() {
    console.log("function获取的b" + b);
    var b = 20;
}
test();
console.log("外部获取的全局变量" + a);
var a = 10;
```

输出结果：

　　![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200517000520415-2126887234.png)

上述代码证明了var定义的变量会进行变量提升，也就是提前声明变量再赋值

console.log(a);

var a=10;

相当于：

var a;

consloe.log(a);

a=10;

```
function test() {
    console.log("function获取的b" + b);
    var b = 20;
}
test();
console.log(b);
```

输出结果：

　　![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200517000847567-1009211237-165358786755696.png)

 报错，证明，在函数定义的var变量在函数外无效，只能在函数内访问，也就是函数作用域

但是要注意的一点是：

　　for,while,switch等等语句var关键字定义的任何变量都属于全局变量，在任何地方都有效，不属于函数作用域

**2、let 、const不属于顶层对象window**

```
var a = 1;
b = 2;
console.log(window.a);   //1
console.log(window.b);   //2
let c = 1;
const d = 1;
console.log(window.a);   //undefined
console.log(window.b);   //undefined
```

**3、使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升。**

```
let a = 10
function test() {
  let b = 20;
  console.log("function获取的b" + b);
  console.log("let定义的全局函数“+a);
}
test();
console.log(b);
```

输出结果：

　　![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200910165954294-1278487661-165358786755698.png)

```
for(let i=0;i<10;i++){
}
console.log(i);
```

输出结果：

　　报错：Uncaught ReferenceError: i is not defined

除了在函数和代码块定义的let变量都属于全局变量，在任何地方都可以访问，但是，在函数和代码块（包括for语句，while,swith,if等等语句的代码块中，也就是{}包裹的代码中），定义的let变量只在代码块内有效，这个代码块其他任何地方都无法获取到，和以上var不一样，var只有函数作用域，记住函数作用域不等同于代码块作用域，代码块包括for,if,while等语句。

同时let定义的变量不支持变量提升。

```
console.log(a);
let a = 10
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200517002047452-850993838-1653587867556100.png)

 

 直接报错，而不是undefined

**4、使用let、const关键字声明的变量具有暂时性死区特性**

```
 let num=10;
    if(true){
        console.log(num);//报错
        let num=11;
    }
```

暂时性死区的意思是，只要块内有定义该变量，那么该块内就会和块内定义的变量绑定，不会再读取外面定义相同变量的值，

但是在块内语句执行后声明，就算，外面有该变量也不会读取，而是报错

**5、使用const声明的是常量，在后面出现的代码中不能再修改该常量的值，而且是块级作用域，作用范围和let一样**

　　![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2029744-20200517002204887-478739156.png)

##### 解构赋值

> 解构赋值是对赋值运算符的扩展。
>
> 他是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。
>
> 在代码书写上简洁且易读，语义更加清晰明了；也方便了复杂对象中数据字段获取。
>
> 可分为以下几种类型：
>
> - 数组解构
> - 对象解构
> - 字符串解构

###### 数组解构

基本用法

```
     let [a, b, c] = [1, 2, 3];
     // a = 1
     // b = 2
     // c = 3
```

可嵌套

```
     let [a, [[b], c]] = [1, [[2], 3]];
     // a = 1
     // b = 2
     // c = 3
```

可忽略

```
     let [a, , b] = [1, 2, 3];
     // a = 1
     // b = 3
```

不完全解构（a=1属于解构默认值，如果没有匹配到对用的值就使用默认值）

```
	let [a = 1, b] = []; // a = 1, b = undefined
```

###### **对象解构**

基本用法

```
     let { foo, bar } = { foo: 'aaa', bar: 'bbb' }; // foo = 'aaa' // bar = 'bbb'  
     //起别名
     let { baz : foo } = { baz : 'ddd' }; // foo = 'ddd'
     //在对象解构中是根据key来匹配的，顺序不影响解构
     let {age, name} = {name: 'webpon', age'20'}
     console.log(age, name) // 20, webpon
```

可嵌套可忽略

```
     let obj = {p: ['hello', {y: 'world'}] };
     let {p: [x, { y }] } = obj;
     // x = 'hello'
     // y = 'world'
     let obj = {p: ['hello', {y: 'world'}] };
     let {p: [x, {  }] } = obj;
     // x = 'hello'
```

不完全解构

```
     let obj = {p: [{y: 'world'}] };
     let {p: [{ y }, x ] } = obj;
     // x = undefined
     // y = 'world'
```

剩余运算符

```
     let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
     // a = 10
     // b = 20
     // rest = {c: 30, d: 40}
```

解构默认值

```
     let {a = 10, b = 5} = {a: 3};
     // a = 3; b = 5;
     let {a: aa = 10, b: bb = 5} = {a: 3};
     // aa = 3; bb = 5;
```

###### 字符串解构

在数组的解构中，*解构的目标若为可遍历对象，皆可进行解构赋值*。可遍历对象即实现 Iterator 接口的数据。

```
     let [a, b, c, d, e] = 'hello';
     // a = 'h'
     // b = 'e'
     // c = 'l'
     // d = 'l'
     // e = 'o'
```

**解构默认值**

```
	let [a = 2] = [undefined]; // a = 2
```

当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果。

```
     let [a = 3, b = a] = [];     // a = 3, b = 3
     let [a = 3, b = a] = [1];    // a = 1, b = 1
     let [a = 3, b = a] = [1, 2]; // a = 1, b = 2
```

- a 与 b 匹配结果为 undefined ，触发默认值：**a = 3; b = a =3**
- a 正常解构赋值，匹配结果：a = 1，b 匹配结果 undefined ，触发默认值：**b = a =1**
- a 与 b 正常解构赋值，匹配结果：**a = 1，b = 2**

只要是可遍历对象即可使用数组解构

```
     let [a,b] = new Set([1,2])
     console.log(a,b);   //1 2
```

##### 数组遍历（ES6)

> - find()：返回数组中满足提供的测试函数的第一个元素的值。否则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。
> - findIndex()：返回数组中满足提供的测试函数的第一个元素的**索引**。若没有找到对应元素则返回-1。
> - for of
> - values()：返回一个新的 **`Array Iterator`** 对象，该对象包含数组每个索引的值
> - keys()：返回一个包含数组中每个索引键的`**Array Iterator**`对象。
> - entries()：返回一个新的**Array Iterator**对象，该对象包含数组中每个索引的键/值对。

具体用法请访问：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

##### 数组的扩展（ES6)

> - 类数组 / 伪数组
> - Array.from()：从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
> - Array.of()：创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
> - copyWithin()：浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
> - fill()：用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
> - includes():  用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回

##### 剩余参数

![image-20201022182220697](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215753.png)

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215756.png" alt="image-20201022182452793" style="zoom:80%;" />

##### 拓展运算符（重要）

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215800.png" alt="image-20201022182748232" style="zoom:80%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215803.png" alt="image-20201022183003525" style="zoom:80%;" />

![image-20201022183141205](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215808.png)

array.push方法可以一次性插入多个以逗号分割的参数

![image-20201022183302460](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505215845.png)

拓展运算符也可以合并对象

基本用法：

```
     let age = {age: 15};
     let name = {name: "Amy"};
     let person = {...age, ...name};
     person;  //{age: 15, name: "Amy"}
```

**注意点**

`自定义的属性和拓展运算符对象里面属性的相同的时候：自定义的属性在拓展运算符后面，则拓展运算符对象内部同名的属性将被覆盖掉。`

```
     let person = {name: "Amy", age: 15};
     let someone = { ...person, name: "Mike", age: 17};
     someone;  //{name: "Mike", age: 17}
```

##### 模板字符串

1、模板字符串中可以`解析变量`。

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505221453.png" alt="image-20201022162955617" style="zoom:80%;" />

在${}中可以使用变量，可以解析变量

2、模板字符串中可以`换行`

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505221457.png" alt="image-20201022163123225" style="zoom:80%;" />

3、在模板字符串中可以`调用函数`

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220011.png" alt="image-20201022163255951" style="zoom:80%;" />

调用函数的位置的值是函数的返回值

##### String的扩展方法

###### **实例方法：startWith()和endsWidth()**

- startsWidth():表示参数字符串是否在原字符串的头部，返回布尔值

- endsWidth():表示参数字符串是否在原字符串的尾部，返回布尔值

  ![image-20201022163956969](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220014.png)

![image-20201022164120613](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220019.png)

输出结果：

![image-20201022164140769](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220022.png)

**实例方法：repeat()**

repeat方法表示将原字符串重复n次，返回一个新字符串

![image-20201022164351724](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220027.png)

###### String.prototype.trim()

> **`trim()`** 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#语法)

```
str.trim()
```

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#返回值)

一个代表调用字符串两端去掉空白的新字符串。

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#描述)

`trim()` 方法返回一个从两头去掉空白字符的字符串，并不影响原字符串本身。

[例子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#例子)

[使用 `trim()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#使用_trim)

下面的例子中将显示小写的字符串 'foo':

```
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// 另一个 .trim() 例子，只从一边删除

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

##### Symbol

> **symbol** 是一种基本数据类型 （[primitive data type](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)）。`Symbol()`函数会返回**symbol**类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："`new Symbol()`"。
>
> 每个从`Symbol()`返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。

使用场景一(唯一的键值):

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210815165837.png" alt="image-20210815165836179" style="zoom: 67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210815165851.png" alt="image-20210815165850056" style="zoom:80%;" />

使用场景二(隐藏实例属性):

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210815170208.png" alt="image-20210815170207232" style="zoom: 67%;" />

![image-20210815170319942](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210815170320.png)

使用场景三(常用):

```
const shapeType = {
	a: Symbol(),
	b: Symbol()
}
function get(shape) {
	let area = 0
	switch(shape) {
		case shapeType.a:
			area = 1
			break;
		case shapeType.b:
			area = 2
			break;	
		default: 
			area = 3
	}
	return area
}
get(shape.a)
```

详情请访问:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol

##### Set集合

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220031.png" alt="image-20201107225916736" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220034.png" alt="image-20201107230324495" style="zoom:67%;" />

Set本身是一个构造函数，用来生成Set数据结构，可以使用for...of进行遍历

![image-20201022164650960](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220039.png)

Set函数可以接受一个数组作为参数，用来初始化。

![image-20201022164718108](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220043.png)

![image-20201022164800109](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220051.png)

输出结果：

![image-20201022164822446](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220058.png)

**数组去重**
```js
  <script>
      var a = [1, 2, 3, 2, 1, 232, 11, 1]
      var s1 = new Set(a)
      console.log(s1)
      a = [...s1]
      console.log(a)
    </script>
```

输出结果：

![image-20201022180626354](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220105.png)

...s1这个括号运算符可以把数组,set数据结构通过分隔符，分割，详情请浏览`ES6->Array的扩展方法`

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220110.png" alt="image-20201022181447419" style="zoom:80%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220118.png" alt="image-20201022181854465" style="zoom:80%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220123.png" alt="image-20201107231146591" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220128.png" alt="image-20201107231429686" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220130.png" alt="image-20201107231429686" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220133.png" alt="image-20201107231528895" style="zoom:67%;" />

##### Map字典 

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220136.png" alt="image-20201107231752402" style="zoom:67%;" />

**Map 和 Object 的区别**

- 一个 Object 的键只能是字符串或者 Symbol，但一个 Map 的键可以是任意值。

- Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。

- Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。

- Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

  当Map 中的 key

  **key 是字符串**

  ```
  var myMap = new Map();
  var keyString = "a string"; 
  myMap.set(keyString, "和键'a string'关联的值");
  myMap.get(keyString);    // "和键'a string'关联的值"
  myMap.get("a string");   // "和键'a string'关联的值"
                           // 因为 keyString === 'a string'
  ```

  **当key 是对象**

  ```
  var myMap = new Map();
  var keyObj = {}, 
  myMap.set(keyObj, "和键 keyObj 关联的值");
  myMap.get(keyObj); // "和键 keyObj 关联的值"
  myMap.get({}); // undefined, 因为 keyObj !== {}
  ```

  当**key 是函数**

  ```
  var myMap = new Map();
  var keyFunc = function () {}, // 函数
  myMap.set(keyFunc, "和键 keyFunc 关联的值");
  myMap.get(keyFunc); // "和键 keyFunc 关联的值"
  myMap.get(function() {}) // undefined, 因为 keyFunc !== function () {}
  ```

  当**key 是 NaN**

  ```
  var myMap = new Map();
  myMap.set(NaN, "not a number");
  myMap.get(NaN); // "not a number"
  var otherNaN = Number("foo");
  myMap.get(otherNaN); // "not a number"
  ```

  虽然 NaN 和任何值甚至和自己都不相等(NaN !== NaN 返回true)，NaN作为Map的键来说是没有区别的。

##### Proxy(代理)

> **Proxy** 也就是代理，可以帮助我们完成很多事情，例如对数据的处理，对构造函数的处理，对数据的验证，说白了，就是在我们访问对象前添加了一层拦截，可以过滤很多操作，而这些过滤，由你来定义。

**语法：**

```
	  let p = new Proxy(target, handler);
```

1. [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get#参数)

   以下是传递给get方法的参数，`this上下文绑定在`handler对象上.

   - `target`

     目标对象。

   - `property`

     被获取的属性名。

   - `receiver`

     Proxy或者继承Proxy的对象

   [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get#返回值)

   get方法可以返回任何值。

   [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get#描述)

   **`handler.get`** 方法用于拦截对象的读取属性操作。

   [拦截](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get#拦截)

   该方法会拦截目标对象的以下操作:

   - 访问属性: `proxy[foo]和` `proxy.bar`
   - 访问原型链上的属性: `Object.create(proxy)[foo]`
   - [`Reflect.get()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)

   [约束](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get#约束)

   如果违背了以下的约束，proxy会抛出 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError):

   - 如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
   - 如果要访问的目标属性没有配置访问方法，即get方法是undefined的，则返回值必须为undefined。

###### handler.get()

下面是使用示例，一个简单的代理

```
       const obj = {
          name: 'admin'
        }
        const proxy = new Proxy(obj,
          {
            get(target, key) {
              console.log('获取了getter属性');
              return target[key] + ' proxy处理了';
            }
          }
        )
        proxy.age = 18
        obj.test = '测试'
        console.log(obj);
        console.log(obj.name);
        console.log(proxy);
        console.log(proxy.name);
```

输出结果：

![image-20210815210813394](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210815210814.png)

可以看出obj被Proxy代理后，两个实例的内容是一致的，修改任意一个都会影响另一个，由此可知，两个实例的值引用的是一个地址, 但是修改target参数并不会改变实例的值，代理后并不会改变原有实例的值和方法

并且，我们在访问Proxy代理实例会触发get钩子，target是obj实例，key是访问的字段，get钩子返回值是就是访问的值

再来看一个基本用法：

```
  let test = {
    name: "小红"
  };
  test = new Proxy(test, {
    get(target, key) {
      console.log('获取了getter属性');
      return target[key];
    }
  });
  console.log(test.name);
```

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwebp-165358786750724.webp)

###### handler.set()

> `handler.set()` 方法是设置属性值操作的捕获器。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set#语法)

```
const p = new Proxy(target, {
  set: function(target, property, value, receiver) {
  }
});
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set#参数)

以下是传递给 `set()` 方法的参数。`this` 绑定在 handler 对象上。

- `target`

  目标对象。

- `property`

  将被设置的属性名或 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。

- `value`

  新属性值。

- `receiver`

  最初被调用的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）。**比如：**假设有一段代码执行 `obj.name = "jen"`， `obj` 不是一个 proxy，且自身不含 `name` 属性，但是它的原型链上有一个 proxy，那么，那个 proxy 的 `set()` 处理器会被调用，而此时，`obj` 会作为 receiver 参数传进来。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set#返回值)

`set()` 方法应当返回一个布尔值。

- 返回 `true` 代表属性设置成功。
- 在严格模式下，如果 `set()` 方法返回 `false`，那么会抛出一个 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 异常。

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set#描述)

`handler.set()` 方法用于拦截设置属性值的操作。

[拦截](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set#拦截)

该方法会拦截目标对象的以下操作:

- 指定属性值：`proxy[foo] = bar` 和 `proxy.foo = bar`
- 指定继承者的属性值：`Object.create(proxy)[foo] = bar`
- [`Reflect.set()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)

[约束](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set#约束)

如果违背以下的约束条件，proxy 会抛出一个 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 异常：

- 若目标属性是一个不可写及不可配置的数据属性，则不能改变它的值。
- 如果目标属性没有配置存储方法，即 `[[Set]]` 属性的是 `undefined`，则不能设置它的值。
- 在严格模式下，如果 `set()` 方法返回 `false`，那么也会抛出一个 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 异常。



上方的案例，我们首先创建了一个**test**对象，里面有**name**属性，然后我们使用`Proxy`将其包装起来，再返回给**test**，此时的**test**已经成为了一个`Proxy`实例，我们对其的操作，都会被`Proxy`拦截。
 `Proxy`有两个参数，第一个是`target`,也就是我们传入的**test对象,另一个则是`handler`，也就是我们传入的第二个参数，一个匿名对象。在`handler`中定义了一个名叫`get`的函数，当我们获取 **test的属性时，则会触发此函数。
 咱们再来试试使用`set`来拦截一些操作，并将`get`返回值

```
  let xiaohong = {
    name: "小红",
    age: 15
  };
  xiaohong = new Proxy(xiaohong, {
    get(target, key) {
      let result = target[key];
      //如果是获取 年龄 属性，则添加 岁字
      if (key === "age") result += "岁";
      return result;
    },
    set(target, key, value) {
      if (key === "age" && typeof value !== "number") {
        throw Error("age字段必须为Number类型");
      }
      return Reflect.set(target, key, value);
    }
  });
  console.log(`我叫${xiaohong.name}  我今年${xiaohong.age}了`);
  xiaohong.age = "aa";
```

![img](https:////upload-images.jianshu.io/upload_images/18597164-175a2ba2468ae476.png?imageMogr2/auto-orient/strip|imageView2/2/w/770/format/webp)

上方案例中定义了 **xiaohong** 对象，其中有 **age** 和 **name** 两个字段,我们在`Proxy`中的 **get** 拦截函数中添加了一个判断，如果是取 **age** 属性的值，则在后面添加 **岁**。在 **set** 拦截函数中判断了如果是更改 **age** 属性时，类型不是 `Number`则抛出错误。最后,正确的输出了我们想要的结果!
 关于`return Reflect.set(target, key, value);` 这句代码，可以用其他方式替换，例如 :

```js
  let xiaohong = {
    name: "小红",
    age: 15
  };
  xiaohong = new Proxy(xiaohong, {
    get(target, key) {
      let result = target[key];
      //如果是获取 年龄 属性，则添加 岁字
      if (key === "age") result += "岁";
      return result;
    },
    set(target, key, value) {
      if (key === "age" && typeof value !== "number") {
        throw Error("age字段必须为Number类型");
      }
      target[key] = value;
      // return Reflect.set(target, key, value);
    }
  });
  console.log(`我叫${xiaohong.name}  我今年${xiaohong.age}了`);
  xiaohong.age = 12;
```

![img](https:////upload-images.jianshu.io/upload_images/18597164-8513dac84c1f9191.png?imageMogr2/auto-orient/strip|imageView2/2/w/631/format/webp)

```
let arr = []
arr = new Proxy(arr, {
	set(target, prop, val) {
		if(typeof val === val) {
			target[prop] = val
			return true
		} else {
			return false
		}
	}
})
arr.push(5)
arr.push(6)
console.log(arr[0, arr[1]], arr.length)   //5 6 2
```


 此时会抛出一个错误，因为`set`函数必须返回一个`boolean`值，只有返回值为`true`时才表示修改成功，我们没有手动`return`，函数会自动返回`undefined`,`undefined != true`,所以报错是正常的，只需要手动在最后添加一句 `return true`即可！
 但是，既然JS为我们提供了 `Reflect` ，那我们肯定是使用它啦，毕竟它和`Proxy`本来就是一起玩的,`Proxy`有的函数它都有！具体的参考 [官方链接](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FReflect)
 这只是最基础的应用，其他的大家可以自行摸索，都是一样的用法！

###### handler.has()

> **`handler.has()`** 方法是针对 [`in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 操作符的代理方法。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#语法)

```
var p = new Proxy(target, {
  ownKeys: function(target) {
  }
});
```

Copy to Clipboard

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#参数)

下面的参数被传递给`ownKeys。this`被绑定在`handler上。`

- `target`

  目标对象.

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#返回值)

`ownKeys` 方法必须返回一个可枚举对象.

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#描述)

`**handler.ownKeys()**` 方法用于拦截 [`Reflect.ownKeys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys).

[拦截](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#拦截)

该拦截器可以拦截以下操作::

- [`Object.getOwnPropertyNames()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [`Object.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Reflect.ownKeys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)

[约束](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#约束)

如果违反了下面的约束，proxy将抛出错误 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError):

- `ownKeys` 的结果必须是一个数组.
- 数组的元素类型要么是一个 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) ，要么是一个 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
- 结果列表必须包含目标对象的所有不可配置（non-configurable ）、自有（own）属性的key.
- 如果目标对象不可扩展，那么结果列表必须包含目标对象的所有自有（own）属性的key，不能有其它值.

**基础使用：**

```
const monster1 = {
  _age: 111,
  [Symbol('secret')]: 'I am scared!',
  eyeCount: 4
};

const handler1 = {
  ownKeys(target) {
    return Reflect.ownKeys(target);
  }
};

const proxy1 = new Proxy(monster1, handler1);

for (const key of Object.keys(proxy1)) {
  console.log(key);
  // expected output: "_age"
  // expected output: "eyeCount"
}
```

###### handler.OwnKeys

> **`handler.ownKeys()`** 方法用于拦截 Reflect.ownKeys()，Object.keys(),Object.getOwnPropertyNames(),Object.getOwnPropertySymbols()

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#语法)

```
var p = new Proxy(target, {
  ownKeys: function(target) {
  }
});
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#参数)

下面的参数被传递给`ownKeys。this`被绑定在`handler上。`

- `target`

  目标对象.

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#返回值)

`ownKeys` 方法必须返回一个可枚举对象.

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#描述)

`**handler.ownKeys()**` 方法用于拦截 [`Reflect.ownKeys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys).

[拦截](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#拦截)

该拦截器可以拦截以下操作::

- [`Object.getOwnPropertyNames()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [`Object.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Reflect.ownKeys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)

[约束](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys#约束)

如果违反了下面的约束，proxy将抛出错误 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError):

- `ownKeys` 的结果必须是一个数组.
- 数组的元素类型要么是一个 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) ，要么是一个 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
- 结果列表必须包含目标对象的所有不可配置（non-configurable ）、自有（own）属性的key.
- 如果目标对象不可扩展，那么结果列表必须包含目标对象的所有自有（own）属性的key，不能有其它值.

###### handler.deleteProperty

> **`handler.deleteProperty()`** 方法用于拦截对对象属性的 [`delete`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 操作。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty#语法)

```
var p = new Proxy(target, {
  deleteProperty: function(target, property) {
  }
});
```

Copy to Clipboard

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty#参数)

`deleteProperty` 方法将会接受以下参数。 `this` 被绑定在 handler上。

- `target`

  目标对象。

- `property`

  待删除的属性名。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty#返回值)

`deleteProperty` 必须返回一个 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 类型的值，表示了该属性是否被成功删除。

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty#描述)

`**handler.deleteProperty()**` 方法可以拦截 [`delete`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 操作。

[拦截](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty#拦截)

该方法会拦截以下操作:

- 删除属性: `delete proxy[foo]` 和 `delete proxy.foo`
- [`Reflect.deleteProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty)

[不变量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty#不变量)

如果违背了以下不变量，proxy 将会抛出一个 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError):

- 如果目标对象的属性是不可配置的，那么该属性不能被删除。

基本用法：

```
 const monster1 = {
      _age: 111,
      eyeCount: 4
    };

    const handler1 = {
      //获取键值拦截钩子
      ownKeys(target) {
        for (let i in target) {
          //隐藏私有属性
          if (i[0] === '_') {
            delete target[i]
          }
        }
        return Object.keys(target)
      },
      //删除拦截钩子
      deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
          throw new Error('不可删除')
        } else {
          delete target[prop]
          return true
        }
      }
    };
    const proxy1 = new Proxy(monster1, handler1);
    console.log(Object.keys(proxy1));   //["eyeCount"]
    delete proxy1._age   //不可以删除
```

##### Reflect(反射)

> **Reflect** 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与[proxy handlers (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)的方法相同。`Reflect`不是一个函数对象，因此它是不可构造的。
>
> 它的作用主要有以下几点：
>
> - 将Object属于语言内部的方法放到Reflect上
>
> - 修改某些Object方法的返回结果，让其变得更合理
>
> - 让Object操作变成函数行为
>
>   ```
>   console.log('assign' in Object)  //true
>   console.log(Reflect.has(Object,'assign'))  //true
>   ```
>
> - Reflect象的方法与Proxy对象的方法一一对应（也就是说，能够相对应地返回Proxy handler想要的返回值）

##### Iterator(迭代器)

> 遍历`Array`可以采用下标循环，遍历`Map`和`Set`就无法使用下标。为了统一集合类型，ES6标准引入了新的`iterable`类型
>
> - 是一种接口机制，为各种不同的数据解构提供统一访问的机制
> - 主要供for... of使用
> - 一句话：让不支持遍历的数据解构“可遍历”

**1、可迭代对象有**

- 1.`Array`
- 2.`String`
- 3.`Map`
- 4.`Set`
- 5.`arguments`
- 6.`NodeList`

2、判断一个数据是否具有可迭代能力,只有当数据具有`Symbol.iterator`属性的时候才可以使用`for...of`进行迭代

```
     console.log(Array.prototype.hasOwnProperty(Symbol.iterator)); //true
     console.log(Set.prototype.hasOwnProperty(Symbol.iterator));   /	/true
```

​	或者直接输出

```
	console.log([]);
```

![image-20210817012314030](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210817012314.png)

​	对象原型上有iterator，可迭代

3、在浏览器控制台打印信息(举例一个数组的)

4、从上图看出`Array.prototype[Symbol.iterator]`是一个函数,使用`typeof`判断数据类型(如果不可迭代的返回是`undefined`)

```
     console.log(typeof [][Symbol.iterator]);		 //function
     console.log(typeof {}[Symbol.iterator]);           //undefined
     console.log(typeof new Set()[Symbol.iterator]);    //function
     console.log(typeof ''[Symbol.iterator]);		 //function
```

**手动模拟一个迭代器**
		1、迭代器的方法

```
     const createIterator = items => {
       const keys = Object.keys(items);
       const len = keys.length;
       let pointer = 0; // 当前的指针位置
       return {
         next() {
           const done = pointer >= len;
           const value = !done ? items[keys[pointer++]] : undefined; // 如果当前指针位置小于总长度
           return {
             value,
             done
           }
         }
       }
     }
```

2、测试数组

```
     const iterator1 = createIterator([1,2,3,4]);
     console.log(iterator1.next());
     console.log(iterator1.next());
     console.log(iterator1.next());
     console.log(iterator1.next());
     console.log(iterator1.next());
```

3、测试对象

```
     const iterator2 = createIterator({a: 'a', b: 'b', c: 'c'})
     console.log(iterator2.next());
     console.log(iterator2.next());
     console.log(iterator2.next());
     console.log(iterator2.next());
     console.log(iterator2.next());
```

**既然数组等具有可迭代的能力,但是我们直接使用数组.next()会报错的(用python中的说法,可迭代不代表是一个迭代器,只有迭代器才具有next()方法)**
	  	1、错误信息

​	2、通过上面方式判断已经具有可迭代能力的数据,如果要使用next函数,必须先将可迭代对象转成换迭代器。

​	3、可迭代对象不一定是迭代器,但是迭代器一定是可迭代对象

**将不可迭代的数据转换可迭代数据**
      	1、尝试在对象使用for..of

​	2、直接修改对象原型属性

​	注意一般我们开发中不会直接串改原型,我们直接挂载对象的方法上也行的

```
     Object.prototype[Symbol.iterator] = function() {
       const self = this;
       const keys = Object.keys(self);
       const len = keys.length;
       let pointer = 0;
       return {
         next() {
           const done = pointer >= len;
           const value = !done ? self[keys[pointer++]]: undefined;
           return {
             done,
             value
           }
         }
       }
     }
     let obj = {name: '哈哈', gender: '男'};
     let objItem = obj[Symbol.iterator]();
     console.log('===', objItem.next());
     for (const item of obj) {
       console.log(item)
     }
```

你可能会有疑问，`for ... of`循环和`for ... in`循环有何区别？

`for ... in`循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个`Array`数组实际上也是一个对象，它的每个元素的索引被视为一个属性。

当我们手动给`Array`对象添加了额外的属性后，`for ... in`循环将带来意想不到的意外效果：

```
     var a = ['A', 'B', 'C'];
     a.name = 'Hello';
     for (var x in a) {
         console.log(x); // '0', '1', '2', 'name'
     }
```

`for ... in`循环将把`name`包括在内，但`Array`的`length`属性却不包括在内。

`for ... of`循环则完全修复了这些问题，它只循环集合本身的元素：

```
     var a = ['A', 'B', 'C'];
     a.name = 'Hello';
     for (var x of a) {
         console.log(x); // 'A', 'B', 'C'
     }
```

这就是为什么要引入新的`for ... of`循环。

然而，更好的方式是直接使用`iterable`内置的`forEach`方法，它接收一个函数，每次迭代就自动回调该函数。以`Array`为例：

```
	var a = ['A', 'B', 'C'];
	a.forEach(function (element, index, array) { 
          // element: 指向当前元素的值 // index: 指向当前索引 // array: 指向Array对象本身 
          console.log(element + ', index = ' + index); 
	});
```

*注意*，`forEach()`方法是ES5.1标准引入的，你需要测试浏览器是否支持。

`Set`与`Array`类似，但`Set`没有索引，因此回调函数的前两个参数都是元素本身：

```
     var s = new Set(['A', 'B', 'C']);
     s.forEach(function (element, sameElement, set) {
         console.log(element);
     });
```

Map的回调函数参数依次为`value`、`key`和`map`本身：

```
     var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
     m.forEach(function (value, key, map) {
         console.log(value);
     });
```

如果对某些参数不感兴趣，由于JavaScript的函数调用不要求参数必须一致，因此可以忽略它们。例如，只需要获得`Array`的`element`：

```
     var a = ['A', 'B', 'C'];
     a.forEach(function (element) {
         console.log(element);
     });
```

##### Fetch API

###### 简介

> 在es6之前我们使用XMLHttpRequest实现异步请求，而在es6又新增了一种HTTP请求方式---fetch与XMLHttpRequest一样同样能实现异步请求，相比较fetch更胜一筹，下面我们来看一下他们的区别。

**Fetch与XMLHttpRequest的区别**

1.传统XMLHttpRequest

```js
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                console.log('请求成功')
                console.log(xhr.responseText);
                //{"name":"test","sex":"nan"}
            }else{
                console.log('请求失败')
            }
        }
    }
    xhr.open('get','test.json');
    xhr.send();
```

2.fetch请求

```js
fetch('test.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
//{name: "test", sex: "nan"}
    })
```

可以看到使用fetch简单几行代码就实现一个请求并且fetch会自动解析数据

`fetch()`是 XMLHttpRequest 的升级版，用于在 JavaScript 脚本里面发出 HTTP 请求。

浏览器原生提供这个对象。本文详细介绍它的用法。

![img](https://www.wangbase.com/blogimg/asset/202012/bg2020122613.jpg)

###### 一、基本用法

`fetch()`的功能与 XMLHttpRequest 基本相同，但有三个主要的差异。

（1）`fetch()`使用 Promise，不使用回调函数，因此大大简化了写法，写起来更简洁。

（2）`fetch()`采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象），更合理一些；相比之下，XMLHttpRequest 的 API 设计并不是很好，输入、输出、状态都在同一个接口管理，容易写出非常混乱的代码。

（3）`fetch()`通过数据流（Stream 对象）处理数据，可以分块读取，有利于提高网站性能表现，减少内存占用，对于请求大文件或者网速慢的场景相当有用。XMLHTTPRequest 对象不支持数据流，所有的数据必须放在缓存里，不支持分块读取，必须等待全部拿到后，再一次性吐出来。

在用法上，`fetch()`接受一个 URL 字符串作为参数，默认向该网址发出 GET 请求，返回一个 Promise 对象。它的基本用法如下。

```js
fetch(url)
  .then(...)
  .catch(...)
```

下面是一个例子，从服务器获取 JSON 数据。

```js
fetch('https://api.github.com/users/ruanyf')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err)); 
```

上面示例中，`fetch()`接收到的`response`是一个 [Stream 对象](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)，`response.json()`是一个异步操作，取出所有内容，并将其转为 JSON 对象。

Promise 可以使用 await 语法改写，使得语义更清晰。

```js
async function getJSON() {
  let url = 'https://api.github.com/users/ruanyf';
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Request Failed', error);
  }
}
```

上面示例中，`await`语句必须放在`try...catch`里面，这样才能捕捉异步操作中可能发生的错误。

后文都采用`await`的写法，不使用`.then()`的写法。

###### 二、Response 对象：处理 HTTP 回应

- **2.1 Response 对象的同步属性**

`fetch()`请求成功以后，得到的是一个 [Response 对象](https://developer.mozilla.org/en-US/docs/Web/API/Response)。它对应服务器的 HTTP 回应。

```js
const response = await fetch(url);
```

前面说过，Response 包含的数据通过 Stream 接口异步读取，但是它还包含一些同步属性，对应 HTTP 回应的标头信息（Headers），可以立即读取。

```js
async function fetchText() {
  let response = await fetch('/readme.txt');
  console.log(response.status); 
  console.log(response.statusText);
}
```

上面示例中，`response.status`和`response.statusText`就是 Response 的同步属性，可以立即读取。

标头信息属性有下面这些。

**Response.ok**

`Response.ok`属性返回一个布尔值，表示请求是否成功，`true`对应 HTTP 请求的状态码 200 到 299，`false`对应其他的状态码。

**Response.status**

`Response.status`属性返回一个数字，表示 HTTP 回应的状态码（例如200，表示成功请求）。

**Response.statusText**

`Response.statusText`属性返回一个字符串，表示 HTTP 回应的状态信息（例如请求成功以后，服务器返回"OK"）。

**Response.url**

`Response.url`属性返回请求的 URL。如果 URL 存在跳转，该属性返回的是最终 URL。

**Response.type**

`Response.type`属性返回请求的类型。可能的值如下：

- `basic`：普通请求，即同源请求。
- `cors`：跨域请求。
- `error`：网络错误，主要用于 Service Worker。
- `opaque`：如果`fetch()`请求的`type`属性设为`no-cors`，就会返回这个值，详见请求部分。表示发出的是简单的跨域请求，类似`<form>`表单的那种跨域请求。
- `opaqueredirect`：如果`fetch()`请求的`redirect`属性设为`manual`，就会返回这个值，详见请求部分。

**Response.redirected**

`Response.redirected`属性返回一个布尔值，表示请求是否发生过跳转。

- **2.2 判断请求是否成功**

`fetch()`发出请求以后，有一个很重要的注意点：只有网络错误，或者无法连接时，`fetch()`才会报错，其他情况都不会报错，而是认为请求成功。

这就是说，即使服务器返回的状态码是 4xx 或 5xx，`fetch()`也不会报错（即 Promise 不会变为 `rejected`状态）。

只有通过`Response.status`属性，得到 HTTP 回应的真实状态码，才能判断请求是否成功。请看下面的例子。

```js
async function fetchText() {
  let response = await fetch('/readme.txt');
  if (response.status >= 200 && response.status < 300) {
    return await response.text();
  } else {
    throw new Error(response.statusText);
  }
}
```

上面示例中，`response.status`属性只有等于 2xx （200~299），才能认定请求成功。这里不用考虑网址跳转（状态码为 3xx），因为`fetch()`会将跳转的状态码自动转为 200。

另一种方法是判断`response.ok`是否为`true`。

```js
if (response.ok) {
  // 请求成功
} else {
  // 请求失败
}
```

- **2.3 Response.headers 属性**

Response 对象还有一个`Response.headers`属性，指向一个 [Headers 对象](https://developer.mozilla.org/en-US/docs/Web/API/Headers)，对应 HTTP 回应的所有标头。

Headers 对象可以使用`for...of`循环进行遍历。

```js
const response = await fetch(url);

for (let [key, value] of response.headers) { 
  console.log(`${key} : ${value}`);  
}

// 或者
for (let [key, value] of response.headers.entries()) { 
  console.log(`${key} : ${value}`);  
}
```

Headers 对象提供了以下方法，用来操作标头。

- `Headers.get()`：根据指定的键名，返回键值。
- `Headers.has()`： 返回一个布尔值，表示是否包含某个标头。
- `Headers.set()`：将指定的键名设置为新的键值，如果该键名不存在则会添加。
- `Headers.append()`：添加标头。
- `Headers.delete()`：删除标头。
- `Headers.keys()`：返回一个遍历器，可以依次遍历所有键名。
- `Headers.values()`：返回一个遍历器，可以依次遍历所有键值。
- `Headers.entries()`：返回一个遍历器，可以依次遍历所有键值对（`[key, value]`）。
- `Headers.forEach()`：依次遍历标头，每个标头都会执行一次参数函数。

上面的有些方法可以修改标头，那是因为继承自 Headers 接口。对于 HTTP 回应来说，修改标头意义不大，况且很多标头是只读的，浏览器不允许修改。

这些方法中，最常用的是`response.headers.get()`，用于读取某个标头的值。

```js
let response =  await  fetch(url);  
response.headers.get('Content-Type')
// application/json; charset=utf-8
```

`Headers.keys()`和`Headers.values()`方法用来分别遍历标头的键名和键值。

```js
// 键名
for(let key of myHeaders.keys()) {
  console.log(key);
}

// 键值
for(let value of myHeaders.values()) {
  console.log(value);
}
```

`Headers.forEach()`方法也可以遍历所有的键值和键名。

```js
let response = await fetch(url);
response.headers.forEach(
  (value, key) => console.log(key, ':', value)
);
```

- **2.4 读取内容的方法**

`Response`对象根据服务器返回的不同类型的数据，提供了不同的读取方法。

- `response.text()`：得到文本字符串。
- `response.json()`：得到 JSON 对象。
- `response.blob()`：得到二进制 Blob 对象。
- `response.formData()`：得到 FormData 表单对象。
- `response.arrayBuffer()`：得到二进制 ArrayBuffer 对象。

上面5个读取方法都是异步的，返回的都是 Promise 对象。必须等到异步操作结束，才能得到服务器返回的完整数据。

**response.text()**

`response.text()`可以用于获取文本数据，比如 HTML 文件。

```js
const response = await fetch('/users.html');
const body = await response.text();
document.body.innerHTML = body
```

**response.json()**

`response.json()`主要用于获取服务器返回的 JSON 数据，前面已经举过例子了。

**response.formData()**

`response.formData()`主要用在 Service Worker 里面，拦截用户提交的表单，修改某些数据以后，再提交给服务器。

**response.blob()**

`response.blob()`用于获取二进制文件。

```js
const response = await fetch('flower.jpg');
const myBlob = await response.blob();
const objectURL = URL.createObjectURL(myBlob);

const myImage = document.querySelector('img');
myImage.src = objectURL;
```

上面示例读取图片文件`flower.jpg`，显示在网页上。

**response.arrayBuffer()**

`response.arrayBuffer()`主要用于获取流媒体文件。

```js
const audioCtx = new window.AudioContext();
const source = audioCtx.createBufferSource();

const response = await fetch('song.ogg');
const buffer = await response.arrayBuffer();

const decodeData = await audioCtx.decodeAudioData(buffer);
source.buffer = buffer;
source.connect(audioCtx.destination);
source.loop = true;
```

上面示例是`response.arrayBuffer()`获取音频文件`song.ogg`，然后在线播放的例子。

- **2.5 Response.clone()**

Stream 对象只能读取一次，读取完就没了。这意味着，前一节的五个读取方法，只能使用一个，否则会报错。

> ```js
> let text =  await response.text();
> let json =  await response.json();  // 报错
> ```

上面示例先使用了`response.text()`，就把 Stream 读完了。后面再调用`response.json()`，就没有内容可读了，所以报错。

Response 对象提供`Response.clone()`方法，创建`Response`对象的副本，实现多次读取。

```js
const response1 = await fetch('flowers.jpg');
const response2 = response1.clone();

const myBlob1 = await response1.blob();
const myBlob2 = await response2.blob();

image1.src = URL.createObjectURL(myBlob1);
image2.src = URL.createObjectURL(myBlob2);
```

上面示例中，`response.clone()`复制了一份 Response 对象，然后将同一张图片读取了两次。

Response 对象还有一个`Response.redirect()`方法，用于将 Response 结果重定向到指定的 URL。该方法一般只用在 Service Worker 里面，这里就不介绍了。

- **2.6 Response.body 属性**

`Response.body`属性是 Response 对象暴露出的底层接口，返回一个 ReadableStream 对象，供用户操作。

它可以用来分块读取内容，应用之一就是显示下载的进度。

```js
const response = await fetch('flower.jpg');
const reader = response.body.getReader();

while(true) {
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`)
}
```

上面示例中，`response.body.getReader()`方法返回一个遍历器。这个遍历器的`read()`方法每次返回一个对象，表示本次读取的内容块。

这个对象的`done`属性是一个布尔值，用来判断有没有读完；`value`属性是一个 arrayBuffer 数组，表示内容块的内容，而`value.length`属性是当前块的大小。

###### 三、`fetch()`的第二个参数：定制 HTTP 请求

`fetch()`的第一个参数是 URL，还可以接受第二个参数，作为配置对象，定制发出的 HTTP 请求。

```js
fetch(url, optionObj)
```

上面命令的`optionObj`就是第二个参数。

HTTP 请求的方法、标头、数据体都在这个对象里面设置。下面是一些示例。

**（1）POST 请求**

```js
const response = await fetch(url, {
  method: 'POST',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  body: 'foo=bar&lorem=ipsum',
});

const json = await response.json();
```

上面示例中，配置对象用到了三个属性。

- `method`：HTTP 请求的方法，`POST`、`DELETE`、`PUT`都在这个属性设置。
- `headers`：一个对象，用来定制 HTTP 请求的标头。
- `body`：POST 请求的数据体。

注意，有些标头不能通过`headers`属性设置，比如`Content-Length`、`Cookie`、`Host`等等。它们是由浏览器自动生成，无法修改。

**（2）提交 JSON 数据**

```js
const user =  { name:  'John', surname:  'Smith'  };
const response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json;charset=utf-8'
  }, 
  body: JSON.stringify(user) 
});
```

上面示例中，标头`Content-Type`要设成`'application/json;charset=utf-8'`。因为默认发送的是纯文本，`Content-Type`的默认值是`'text/plain;charset=UTF-8'`。

**（3）提交表单**

```js
const form = document.querySelector('form');

const response = await fetch('/users', {
  method: 'POST',
  body: new FormData(form)
})
```

**（4）文件上传**

如果表单里面有文件选择器，可以用前一个例子的写法，上传的文件包含在整个表单里面，一起提交。

另一种方法是用脚本添加文件，构造出一个表单，进行上传，请看下面的例子。

```js
const input = document.querySelector('input[type="file"]');

const data = new FormData();
data.append('file', input.files[0]);
data.append('user', 'foo');

fetch('/avatars', {
  method: 'POST',
  body: data
});
```

上传二进制文件时，不用修改标头的`Content-Type`，浏览器会自动设置。

**（5）直接上传二进制数据**

`fetch()`也可以直接上传二进制数据，将 Blob 或 arrayBuffer 数据放在`body`属性里面。

```js
let blob = await new Promise(resolve =>   
  canvasElem.toBlob(resolve,  'image/png')
);

let response = await fetch('/article/fetch/post/image', {
  method:  'POST',
  body: blob
});
```

###### 四、`fetch()`配置对象的完整 API

`fetch()`第二个参数的完整 API 如下。

```js
const response = fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined,
  referrer: "about:client",
  referrerPolicy: "no-referrer-when-downgrade",
  mode: "cors", 
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  signal: undefined
});
```

`fetch()`请求的底层用的是 [Request() 对象](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)的接口，参数完全一样，因此上面的 API 也是`Request()`的 API。

这些属性里面，`headers`、`body`、`method`前面已经给过示例了，下面是其他属性的介绍。

**cache**

`cache`属性指定如何处理缓存。可能的取值如下：

- `default`：默认值，先在缓存里面寻找匹配的请求。
- `no-store`：直接请求远程服务器，并且不更新缓存。
- `reload`：直接请求远程服务器，并且更新缓存。
- `no-cache`：将服务器资源跟本地缓存进行比较，有新的版本才使用服务器资源，否则使用缓存。
- `force-cache`：缓存优先，只有不存在缓存的情况下，才请求远程服务器。
- `only-if-cached`：只检查缓存，如果缓存里面不存在，将返回504错误。

**mode**

`mode`属性指定请求的模式。可能的取值如下：

- `cors`：默认值，允许跨域请求。
- `same-origin`：只允许同源请求。
- `no-cors`：请求方法只限于 GET、POST 和 HEAD，并且只能使用有限的几个简单标头，不能添加跨域的复杂标头，相当于提交表单所能发出的请求。

**credentials**

`credentials`属性指定是否发送 Cookie。可能的取值如下：

- `same-origin`：默认值，同源请求时发送 Cookie，跨域请求时不发送。
- `include`：不管同源请求，还是跨域请求，一律发送 Cookie。
- `omit`：一律不发送。

跨域请求发送 Cookie，需要将`credentials`属性设为`include`。

```js
fetch('http://another.com', {
  credentials: "include"
});
```

**signal**

`signal`属性指定一个 AbortSignal 实例，用于取消`fetch()`请求，详见下一节。

**keepalive**

`keepalive`属性用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据。

一个典型的场景就是，用户离开网页时，脚本向服务器提交一些用户行为的统计信息。这时，如果不用`keepalive`属性，数据可能无法发送，因为浏览器已经把页面卸载了。

```js
window.onunload = function() {
  fetch('/analytics', {
    method: 'POST',
    body: "statistics",
    keepalive: true
  });
};
```

**redirect**

`redirect`属性指定 HTTP 跳转的处理方法。可能的取值如下：

- `follow`：默认值，`fetch()`跟随 HTTP 跳转。
- `error`：如果发生跳转，`fetch()`就报错。
- `manual`：`fetch()`不跟随 HTTP 跳转，但是`response.url`属性会指向新的 URL，`response.redirected`属性会变为`true`，由开发者自己决定后续如何处理跳转。

**integrity**

`integrity`属性指定一个哈希值，用于检查 HTTP 回应传回的数据是否等于这个预先设定的哈希值。

比如，下载文件时，检查文件的 SHA-256 哈希值是否相符，确保没有被篡改。

```js
fetch('http://site.com/file', {
  integrity: 'sha256-abcdef'
});
```

**referrer**

`referrer`属性用于设定`fetch()`请求的`referer`标头。

这个属性可以为任意字符串，也可以设为空字符串（即不发送`referer`标头）。

```js
fetch('/page', {
  referrer: ''
});
```

**referrerPolicy**

`referrerPolicy`属性用于设定`Referer`标头的规则。可能的取值如下：

- `no-referrer-when-downgrade`：默认值，总是发送`Referer`标头，除非从 HTTPS 页面请求 HTTP 资源时不发送。
- `no-referrer`：不发送`Referer`标头。
- `origin`：`Referer`标头只包含域名，不包含完整的路径。
- `origin-when-cross-origin`：同源请求`Referer`标头包含完整的路径，跨域请求只包含域名。
- `same-origin`：跨域请求不发送`Referer`，同源请求发送。
- `strict-origin`：`Referer`标头只包含域名，HTTPS 页面请求 HTTP 资源时不发送`Referer`标头。
- `strict-origin-when-cross-origin`：同源请求时`Referer`标头包含完整路径，跨域请求时只包含域名，HTTPS 页面请求 HTTP 资源时不发送该标头。
- `unsafe-url`：不管什么情况，总是发送`Referer`标头。

###### 五、取消`fetch()`请求

`fetch()`请求发送以后，如果中途想要取消，需要使用`AbortController`对象。

```js
let controller = new AbortController();
let signal = controller.signal;

fetch(url, {
  signal: controller.signal
});

signal.addEventListener('abort',
  () => console.log('abort!')
);

controller.abort(); // 取消

console.log(signal.aborted); // true
```

上面示例中，首先新建 AbortController 实例，然后发送`fetch()`请求，配置对象的`signal`属性必须指定接收 AbortController 实例发送的信号`controller.signal`。

`controller.abort()`方法用于发出取消信号。这时会触发`abort`事件，这个事件可以监听，也可以通过`controller.signal.aborted`属性判断取消信号是否已经发出。

下面是一个1秒后自动取消请求的例子。

```js
let controller = new AbortController();
setTimeout(() => controller.abort(), 1000);

try {
  let response = await fetch('/long-operation', {
    signal: controller.signal
  });
} catch(err) {
  if (err.name == 'AbortError') {
    console.log('Aborted!');
  } else {
    throw err;
  }
}
```

###### 六、参考链接

- [Network requests: Fetch](https://javascript.info/fetch)
- [node-fetch](https://github.com/node-fetch/node-fetch)
- [Introduction to fetch()](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Javascript Fetch API: The XMLHttpRequest evolution](https://developerhowto.com/2019/09/14/javascript-fetch-api/)



#### ES7

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210830015913.png" alt="ES7小尺寸"  />

##### 数组扩展

###### Array.prototype.includes

> `includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#语法)

```
arr.includes(valueToFind[, fromIndex])
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#参数)

- `valueToFind`

  需要查找的元素值。**Note:** 使用 `includes()`比较字符串和字符时是区分大小写。

- `fromIndex` 可选

  从`fromIndex` 索引处开始查找 `valueToFind`。如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜 （即使从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）。默认为 0。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#返回值)

返回一个布尔值 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) ，如果在数组中找到了（如果传入了 `fromIndex` ，表示在 `fromIndex` 指定的索引范围中找到了）则返回 `true` 。

**基本使用：**

```
     const array1 = [1, 2, 3];

     console.log(array1.includes(2));
     // expected output: true

     const pets = ['cat', 'dog', 'bat'];

     console.log(pets.includes('cat'));
     // expected output: true
	//从索引为1开始查找
     console.log(pets.includes('at',1));
     // expected output: false
     //从索引为array.length + fromIndex= 1开始往后查找
     console.log(pets.includes('at',-2));
     // expected output: false
```

**Array.prototype.includes vs Array.prototype.indexOf()**

```
const arr = ['es6',['es7','es8'],es9,NaN] 
//返回值不一样
console.log(arr.includes(['es7','es8']))   //fasle
console.log(arr.indexOf(['es7','es8']))    //-1
//includes可以判断NAN，indexOf则认为不相等
console.log(arr.includes(NAN))   //true
console.log(arr.indexOf(NaN))    //-1
```

##### 数值扩展

###### 幂运算符：**

> 等同于Math.pow()

基本使用：

```
console.log(Math.pow(2,3))  //8
console.log(2 ** 3)         //8
console.log(Math.pow(2,4))  //16
console.log(2 ** 4)         //16
```

#### ES8

##### async/await

##### 对象扩展

###### Object.values

> `Object.values()`方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values#语法)

```
Object.values(obj)
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values#参数)

- `obj`

  被返回可枚举属性值的对象。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values#返回值)

一个包含对象自身的所有可枚举属性值的数组。

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values#描述)

`Object.values()`返回一个数组，其元素是在对象上找到的可枚举属性值。属性的顺序与通过手动循环对象的属性值所给出的顺序相同。

基本使用：

```
     var obj = { foo: 'bar', baz: 42 };
     console.log(Object.values(obj)); // ['bar', 42]

     var obj = { 0: 'a', 1: 'b', 2: 'c' };
     console.log(Object.values(obj)); // ['a', 'b', 'c']

     var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
     console.log(Object.values(an_obj)); // ['b', 'c', 'a']

     var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
     my_obj.foo = 'bar';
     console.log(Object.values(my_obj)); // ['bar']

     console.log(Object.values('foo')); // ['f', 'o', 'o']
```

###### Object.entries

> `Object.entries()`方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 [`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#语法)

```
Object.entries(obj)
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#参数)

- `obj`

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#返回值)

​	可以返回其可枚举属性的键值对的对象。

基本使用；

```
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
```

输出结果：

![image-20210822223023028](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210822223023.png)

###### 对象属性描述符

**描述符类型**

> 　　　　　　　　　　　　　　　　对象属性描述符的类型分为两种：数据属性和访问器属性

**数据属性**

　　数据属性(data property)包含一个数据值的位置，在这个位置可以读取和写入值。数据属性有4个特性

【1】[Configurable(可配置性)](https://www.cnblogs.com/xiaohuochai/p/5743821.html#configurable)

　　可配置性决定是否可以使用delete删除属性，以及是否可以修改属性描述符的特性，默认值为true

【2】[Enumerable(可枚举性)](https://www.cnblogs.com/xiaohuochai/p/5743821.html#enumerable)

　　可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过for-in循环返回该属性，默认值为true

【3】[Writable(可写性)](https://www.cnblogs.com/xiaohuochai/p/5743821.html#writable)

　　可写性决定是否可以修改属性的值，默认值为true

【4】Value(属性值)

　　属性值包含这个属性的数据值，读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。默认值为undefined

 

**访问器属性**

　　对象属性是名字、值和一组属性描述符构成的。而属性值可以用一个或两个方法替代，这两个方法就是getter和setter。而这种属性类型叫访问器属性(accessor property)

【1】[Configurable(可配置性)](https://www.cnblogs.com/xiaohuochai/p/5743821.html#configurable)

　　可配置性决定是否可以使用delete删除属性，以及是否可以修改属性描述符的特性，默认值为true

【2】[Enumerable(可枚举性)](https://www.cnblogs.com/xiaohuochai/p/5743821.html#enumerable)

　　可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过for-in循环返回该属性，默认值为true

【3】[getter](https://www.cnblogs.com/xiaohuochai/p/5743821.html#get)

　　在读取属性时调用的函数。默认值为undefined

【4】[setter](https://www.cnblogs.com/xiaohuochai/p/5743821.html#get)

　　在写入属性时调用的函数。默认值为undefined

　　和数据属性不同，访问器属性不具有可写性(Writable)。如果属性同时具有getter和setter方法，那么它是一个读/写属性。如果它只有getter方法，那么它是一个只读属性。如果它只有setter方法，那么它是一个只写属性。读取只写属性总是返回undefined

 

**描述符方法**

　　前面介绍了属性描述符，要想设置它们，就需要用到描述符方法。描述符方法总共有以下5个：

【1】Object.getOwnPropertyDescriptor()

　　Object.getOwnPropertyDescriptor(o,name)方法用于查询一个属性的描述符，并以对象的形式返回

　　查询obj.a属性时，可配置性、可枚举性、可写性都是默认的true，而value是a的属性值1

　　查询obj.b属性时，因为obj.b属性不存在，该方法返回undefined

```
     var obj = {a:1};
     //Object {value: 1, writable: true, enumerable: true, configurable: true}
     console.log(Object.getOwnPropertyDescriptor(obj,'a'));
     //undefined
     console.log(Object.getOwnPropertyDescriptor(obj,'b'));
```

【2】Object.getOwnPropertyDescriptors()

​		`**Object.getOwnPropertyDescriptors()**` 方法用来获取一个对象的所有自身属性的描述符。

```
     var num = new String('12');
     console.log(Object.getOwnPropertyDescriptors(num));
```

输出：

![image-20210822234534606](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210822234534.png)

【3】Object.defineProperty()

　　Object.defineProperty(o,name,desc)方法用于创建或配置对象的一个属性的描述符，返回配置后的对象

　　使用该方法创建或配置对象属性的描述符时，如果不针对该属性进行描述符的配置，则该项描述符默认为false

```
     var obj = {};
     //{a:1}
     console.log(Object.defineProperty(obj,'a',{
             value:1,
             writable: true
         }));

     //由于没有配置enumerable和configurable，所以它们的值为false
     //{value: 1, writable: true, enumerable: false, configurable: false}
     console.log(Object.getOwnPropertyDescriptor(obj,'a'));
```

【4】Object.defineProperties()

　　Object.defineProperty(o,descriptors)方法用于创建或配置对象的多个属性的描述符，返回配置后的对象

```
     var obj = {
         a:1
     };
     //{a: 1, b: 2}
     console.log(Object.defineProperties(obj,{
             a:{writable:false},
             b:{value:2}
         }));

     //{value: 1, writable: false, enumerable: true, configurable: true}
     console.log(Object.getOwnPropertyDescriptor(obj,'a'));
     //{value: 2, writable: false, enumerable: false, configurable: false}
     console.log(Object.getOwnPropertyDescriptor(obj,'b'));
```

【5】Object.create()

　　Object.create(proto,descriptors)方法使用指定的原型和属性来创建一个对象

```
     var o = Object.create(Object.prototype,{
         a:{writable: false,value:1,enumerable:true}
     });
     //{value: 1, writable: false, enumerable: true, configurable: true}
     console.log(Object.getOwnPropertyDescriptor(obj,'a'));
```

**描述符详述**

　　前面分别介绍了数据属性和访问器属性的描述符，但没有详细说明其含义及使用，接下来逐一进行说明 

**可写性(writable)**

　　可写性决定是否可以修改属性的值，默认值为true

```
     var o = {a:1};
     o.a = 2;
     console.log(o.a);//2
```

　　设置writable:false后，赋值语句会静默失效

```
     var o = {a:1};
     Object.defineProperty(o,'a',{
         writable:false
     });
     console.log(o.a);//1
     //由于设置了writable为false，所以o.a=2这个语句会静默失效
     o.a = 2;
     console.log(o.a);//1
     Object.defineProperty(o,'a',{
         writable:true
     });
     //由于writable设置为true，所以o.a可以被修改为2
     o.a = 2;
     console.log(o.a);//2
```

　　在严格模式下通过赋值语句为writable为false的属性赋值，会提示类型错误TypeError

```
     'use strict';
     var o = {a:1};
     Object.defineProperty(o,'a',{
         writable:false
     });
     //Uncaught TypeError: Cannot assign to read only property 'a' of object '#<Object>'
     o.a = 2;
```

　　[注意]设置writable:false后，通过Object.defineProperty()方法改变属性value的值不会受影响，因为这也意味着在重置writable的属性值为false

```
     var o = {a:1};
     Object.defineProperty(o,'a',{
         writable:false
     });
     console.log(o.a);//1
     Object.defineProperty(o,'a',{
         value:2
     });
     console.log(o.a);//2
```

**可配置性(Configurable)**

　　可配置性决定是否可以使用delete删除属性，以及是否可以修改属性描述符的特性，默认值为true

　　【1】设置Configurable:false后，无法使用delete删除属性

```
     var o = {a:1};
     Object.defineProperty(o,'a',{
         configurable:false
     });
     delete o.a;//false
     console.log(o.a);//1
```

　　在严格模式下删除为configurable为false的属性，会提示类型错误TypeError

```
     'use strict';
     var o = {a:1};
     Object.defineProperty(o,'a',{
         configurable:false
     });
     //Uncaught TypeError: Cannot delete property 'a' of #<Object>
     delete o.a;
```

　　[注意]使用var命令声明变量时，变量的configurable为false

```
     var a = 1;
     //{value: 1, writable: true, enumerable: true, configurable: false}
     Object.getOwnPropertyDescriptor(this,'a');
```

　　【2】一般地，设置Configurable:false后，将无法再使用defineProperty()方法来修改属性描述符

```
     var o = {a:1};
     Object.defineProperty(o,'a',{
         configurable:false
     });
     //Uncaught TypeError: Cannot redefine property: a
     Object.defineProperty(o,'a',{
         configurable:true
     });
```

　　有一个例外，设置Configurable:false后，只允许writable的状态从true变为false

```
     var o = {a:1};
     Object.defineProperty(o,'a',{
         configurable:false,
         writable:true
     });
     o.a = 2;
     console.log(o.a);//2
     Object.defineProperty(o,'a',{
         writable:false
     });
     //由于writable:false生效，对象a的o属性无法修改值，所以o.a=3的赋值语句静默失败
     o.a = 3;
     console.log(o.a);//2
```

**可枚举性(Enumerable)**

　　可枚举性决定属性是否出现在对象的属性枚举中，具体来说，for-in循环、Object.keys方法、JSON.stringify方法是否会取到该属性

　　用户定义的普通属性默认是可枚举的，而原生继承的属性默认是不可枚举的

```
     //由于原生继承的属性默认不可枚举，所以只取得自定义的属性a:1
     var o = {a:1};
     for(var i in o){
         console.log(o[i]);//1
     }
```

```
     //由于enumerable被设置为false，在for-in循环中a属性无法被枚举出来
     var o = {a:1};
     Object.defineProperty(o,'a',{enumerable:false});
     for(var i in o){
         console.log(o[i]);//undefined
     }
```

propertyIsEnumerable()

　　propertyIsEnumerable()方法用于判断对象的属性是否可枚举

```
     var o = {a:1};
     console.log(o.propertyIsEnumerable('a'));//true
     Object.defineProperty(o,'a',{enumerable:false});
     console.log(o.propertyIsEnumerable('a'));//false
```

**get和set**

　　get是一个隐藏函数，在获取属性值时调用。set也是一个隐藏函数，在设置属性值时调用，它们的默认值都是undefined。Object.definedProperty()中的get和set对应于对象字面量中get和set方法

　　[注意]getter和setter取代了数据属性中的value和writable属性

　　【1】给只设置get方法，没有设置set方法的对象赋值会静默失败，在严格模式下会报错

```
     var o = {
         get a(){
             return 2;
         }
     }    
     console.log(o.a);//2
     //由于没有设置set方法，所以o.a=3的赋值语句会静默失败
     o.a = 3;
     console.log(o.a);//2
```

　　在严格模式下，给没有设置set方法的访问器属性赋值会报错

```
     'use strict';
     var o = {
         get a(){
             return 2;
         }
     }    
     console.log(o.a);//2
     //由于没有设置set方法，所以o.a=3的赋值语句会报错
     //Uncaught TypeError: Cannot set property a of #<Object> which has only a getter
     o.a = 3;
```

```
     'use strict';
     Object.defineProperty(o,'a',{
         get: function(){
             return 2;
         }
     })
     console.log(o.a);//2
     //由于没有设置set方法，所以o.a=3的赋值语句会报错
     //Uncaught TypeError: Cannot set property a of #<Object> which has only a getter
     o.a = 3;
```

　　【2】只设置set方法，而不设置get方法，则对象属性值为undefined

```
     var o = {
         set a(val){
             return 2;
         }
     }    
     o.a = 1;
     console.log(o.a);//undefined
```

```
     Object.defineProperty(o,'a',{
         set: function(){
             return 2;
         }
     })
     o.a = 1;
     console.log(o.a);//undefined
```

　　【3】一般地，set和get方法是成对出现的

```
     var o ={
         get a(){
             return this._a;
         },
         set a(val){
             this._a = val*2;
         }
     }
     o.a = 1;
     console.log(o.a);//2
```

```
     Object.defineProperty(o,'a',{
         get: function(){
             return this._a;
         },
         set :function(val){
             this._a = val*2;
         }
     })
     o.a = 1;
     console.log(o.a);//2
```

对象状态

　　属性描述符只能用来控制对象中一个属性的状态。而如果要控制对象的状态，就要用到下面的6种方法 

**Object.preventExtensions()(禁止扩展)**

　　Object.preventExtensions()方法使一个对象无法再添加新的属性，并返回当前对象

**Object.isExtensible()(测试扩展)**

　　Object.isExtensible()方法用来检测该对象是否可以扩展

```
     var o = {a:1};
     console.log(Object.isExtensible(o));//true
     o.b = 2;
     console.log(o);//{a: 1, b: 2}
     console.log(Object.preventExtensions(o));//{a: 1, b: 2}
     //由于对象o禁止扩展，所以该赋值语句静默失败
     o.c = 3;
     console.log(Object.isExtensible(o));//false
     console.log(o);//{a: 1, b: 2}
```

　　在严格模式下，给禁止扩展的对象添加属性会报TypeError错误

```
     'use strict';
     var o = {a:1};
     console.log(Object.preventExtensions(o));//{a:1}
     //Uncaught TypeError: Can't add property c, object is not extensible
     o.c = 3;
```

　　Object.preventExtensions()方法并不改变对象中属性的描述符状态

```
     var o = {a:1};
     //{value: 1, writable: true, enumerable: true, configurable: true}
     console.log(Object.getOwnPropertyDescriptor(o,'a'));
     Object.preventExtensions(o);
     //{value: 1, writable: true, enumerable: true, configurable: true}
     console.log(Object.getOwnPropertyDescriptor(o,'a'));
```

**Object.seal()(对象封印)**

　　对象封印又叫对象密封，使一个对象不可扩展并且所有属性不可配置，并返回当前对象

**Object.isSealed()(测试封印)**

　　Object.isSealed()方法用来检测该方法是否被封印

```
     var o = {a:1,b:2};
     console.log(Object.isSealed(o));//false
     console.log(Object.seal(o));//{a:1,b:2}
     console.log(Object.isSealed(o));//true
     console.log(delete o.b);//false
     o.c = 3;
     console.log(o);//{a:1,b:2}
```

　　在严格模式下，删除旧属性或添加新属性都会报错

```
     'use strict';
     var o = {a:1,b:2};
     console.log(Object.seal(o));//{a:1,b:2}
     //Uncaught TypeError: Cannot delete property 'b' of #<Object>
     delete o.b;
```

　　这个方法实际上会在现有对象上调用Object.preventExtensions()方法，并把所有现有属性的configurable描述符置为false

```
     var o = {a:1,b:2};
     //{value: 1, writable: true, enumerable: true, configurable: true}
     console.log(Object.getOwnPropertyDescriptor(o,'a'));
     console.log(Object.seal(o));//{a:1,b:2}
     //{value: 1, writable: true, enumerable: true, configurable: false}
     console.log(Object.getOwnPropertyDescriptor(o,'a'));
```

**Object.freeze()(对象冻结)**

　　Object.freeze()方法使一个对象不可扩展，不可配置，也不可改写，变成一个仅可以枚举的只读常量，并返回当前对象

**Object.isFrozen()(检测冻结)**

　　Object.isFrozen()方法用来检测一个对象是否被冻结

```
     var o = {a:1,b:2};
     console.log(Object.isFrozen(o));//false
     console.log(Object.freeze(o));//{a:1,b:2}
     console.log(Object.isFrozen(o));//true
     o.a = 3;
     console.log(o);//{a:1,b:2}
```

　　在严格模式下，删除旧属性、添加新属性、更改现有属性都会报错

```
     'use strict';
     var o = {a:1,b:2};
     console.log(Object.freeze(o));//{a:1,b:2}
     //Uncaught TypeError: Cannot assign to read only property 'a' of object '#<Object>'
     o.a = 3;
```

　　这个方法实际上会在现有对象上调用Object.seal()方法，并把所有现有属性的writable描述符置为false

```
     var o = {a:1};
     //{value: 1, writable: true, enumerable: true, configurable: true}
     console.log(Object.getOwnPropertyDescriptor(o,'a'));
     console.log(Object.freeze(o));//{a:1}
     //{value: 1, writable: false, enumerable: true, configurable: false}
     console.log(Object.getOwnPropertyDescriptor(o,'a'));
```

##### 字符串扩展

###### String.prototype.padStart()

> **`padStart()`** 方法用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#语法)

```
str.padStart(targetLength [, padString])
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#参数)

- `targetLength`

  当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。

- `padString` 可选

  填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的默认值为 " "（U+0020）。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#返回值)

在原字符串开头填充指定的填充字符串直到目标长度所形成的新字符串。

**基本使用：**

```
     'abc'.padStart(10);         // "       abc"
     'abc'.padStart(10, "foo");  // "foofoofabc"
     'abc'.padStart(6,"123465"); // "123abc"
     'abc'.padStart(8, "0");     // "00000abc"
     'abc'.padStart(1);          // "abc"
```

**应用：**

```
	// yyyy-mm-dd  2020-04-01
      const now = new Date()
      const year = now.getFullYear()
      console.log((now.getMonth() + 1));
      const month = new String(now.getMonth() + 1).padStart(2, '0')   //0-11
      const day = new String(now.getDate()).padStart(2, '0')
      console.log(year + '-' + month + '-' + day)		
```

###### String.prototype.padEnd()

> **`padEnd()`** 方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd#语法)

```
str.padEnd(targetLength [, padString])
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd#参数)

- `targetLength`

  当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。

- `padString` 可选

  填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的缺省值为 " "（U+0020）。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd#返回值)

在原字符串末尾填充指定的填充字符串直到目标长度所形成的新字符串。

**基本使用：**

```
     'abc'.padEnd(10);          // "abc       "
     'abc'.padEnd(10, "foo");   // "abcfoofoof"
     'abc'.padEnd(6, "123456"); // "abc123"
     'abc'.padEnd(1);           // "abc"
```

**应用：**

```
	const tel = '13138745417'
	const newTel = tel.slice(-4).padStart(tel.length, '*')
	console.log(newTel)       // *******5417
```

###### 字符串伪逗号

> 允许函数参数列表使用伪逗号，也就是我们一个对象中最后的属性其实是不能加逗号了的，但是这个新特性就允许加多一个逗号，平时开发注意即可

#### ES9

##### 异步迭代

> 之前我们学的迭代器都是同步的，那么假设有异步的需要迭代呢？

###### Symbol.asyncIterator 

> 当我们给对象新设置这么一个属性，这个就是异步迭代器

###### for-await-of

> 如果我们使用for...of遍历的话，那么会去使用同步的迭代器，
>
> 使用for-await-of遍历就会使用上面的异步迭代器Symbol.asyncIterator ，并且会等待每个返回的Promise状态变为resolved才继续迭代下一个，具体使用如下

```
function getPromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value: time,
                done: false
            })
        }, time)
    })
}
const arr = [getPromise(1000), getPromise(2000), getPromise(3000)]
arr[Symbol.asyncIterator] = function () {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < arr.length ? arr[nextIndex++] :
                Promise.resolve({
                    value: undefined,
                    done: true
                })
        }
    }
}
async function test() {
    for await (let item of arr) {
        console.log(item)
    }
}
test()
```

##### 正则表达式扩展

###### dotAll

```
const reg1 = /./
const reg2 = /./s              //开启dotAll模式
console.log(reg1.test('\n'))   //false
console.log(reg2.test('\n'))   //true
```

##### 对象扩展

###### Rest参数

> 用来合并数组是属于深拷贝，如果解析参数的话只能放置后边

```
const {name, age, ...rest1} = {name: 'web', age: 18, sex: '男',height: 1.7}
console.log(rest1)    // {sex: '男', height: 1.7}
const [a,b,...rest2] = [1,2,3,4]
console.log(rest2)    // [3,4]

const arr = [...[1,2],...[3,4]]
console.log(arr)      // [ 1, 2, 3, 4 ]
const obj = {...{name: 'web',age: 18}, ...{sex: '男'}}
console.log(obj)      // { name: 'web', age: 18, sex: '男' }
```

##### Promise扩展

###### Promise.prototype.finally()

> `finally()` 方法返回一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在`Promise`是否成功完成后都需要执行的代码提供了一种方式。
>
> 这避免了同样的语句需要在[`then()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)和[`catch()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)中各写一次的情况。

由于无法知道`promise`的最终状态，所以`finally`的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况

#### ES10

##### 对象扩展

###### Object.fromEntries()

>  `Object.fromEntries()` 方法把键值对列表转换为一个对象。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#语法)

```
Object.fromEntries(iterable);
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#参数)

- `iterable`

  类似 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 、 [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 或者其它实现了[可迭代协议](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)的可迭代对象。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#返回值)

一个由该迭代对象条目提供对应属性的新对象。

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#描述)

`Object.fromEntries()` 方法接收一个键值对的列表参数，并返回一个带有这些键值对的新对象。这个迭代参数应该是一个能够实现`@@iterator`方法的的对象，返回一个迭代器对象。它生成一个具有两个元素的类数组的对象，第一个元素是将用作属性键的值，第二个元素是与该属性键关联的值。

`Object.fromEntries()` 执行与 [`Object.entries`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) 互逆的操作。

基本使用：

```
     const obj = {
       name: 'imooc',
       course: 'es'
     }
     const entries = Object.entries(obj)
     console.log(entries);                          //[['name', 'imooc'], ['course', 'es']]

     const fromEntries = Object.fromEntries(entries)
     console.log(fromEntries);                      //{ name: 'imooc', course: 'es' }

     const map = new Map()
     map.set('name', 'imooc')
     map.set('course', 'es')
     console.log(map);                              //Map(2) { 'name' => 'imooc', 'course' => 'es' }
     const mapFromEntries = Object.fromEntries(map)
     console.log(mapFromEntries);                   //{ name: 'imooc', course: 'es' }

     //应用一
     const course = {
       math: 80,
       english: 85,
       chinese: 90
     }
     const res = Object.entries(course).filter(([key, val]) => val > 80)   
     console.log(res);                              //[ [ 'english', 85 ], [ 'chinese', 90 ] ]
     console.log(Object.fromEntries(res));          //{ english: 85, chinese: 90 }
```

##### 字符串扩展

###### String.prototype.trimRight()

> `trimEnd() `方法从一个字符串的末端移除空白字符。trimRight() 是这个方法的别名。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd#syntax)

```
str.trimEnd();
str.trimRight();
```

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd#返回值)

一个新字符串，表示从调用字串的末（右）端除去空白。

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd#description)

`trimEnd()` / `trimRight()`方法移除原字符串右端的连续空白符并返回，`trimEnd()` / `trimRight()`方法并不会直接修改原字符串本身。

[别名](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd#别名)

为了与 [`String.prototype.padEnd`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) 等函数保持一致，标准方法名称为`trimEnd`。 但是，出于Web兼容性原因，`trimRight`仍然是`trimEnd`的别名。 在某些引擎中，这意味着：

```
String.prototype.trimRight.name === "trimEnd";
```

Copy to Clipboard

[示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd#examples)

[使用`trimEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd#使用trimend)

下面的例子输出了小写的字符串"  foo":

```
var str = "   foo  ";
alert(str.length); // 8

str = str.trimRight();  // 或写成str = str.trimEnd();
console.log(str.length); // 6
console.log(str);       // '   foo'
```

###### String.prototype.trimStart()

> **`trimStart()`** 方法从字符串的开头删除空格。`trimLeft()` 是此方法的别名。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart#语法)

```
str.trimStart();
str.trimLeft();
```

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart#返回值)

一个新字符串，表示从其开头（左端）除去空格的调用字符串。

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart#描述)

`trimStart()` / `trimLeft()` 方法移除原字符串左端的连续空白符并返回一个新字符串，并不会直接修改原字符串本身。

[别名](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart#别名)

为了与 [`String.prototype.padStart`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) 等函数保持一致，标准方法名称为`trimStart`。 但是，出于 Web 兼容性原因，`trimLeft` 仍然是 `trimStart` 的别名。在某些引擎中，这意味着：

```
String.prototype.trimLeft.name === "trimStart";
```

Copy to Clipboard

[示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart#示例)

[使用 `trimStart()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart#使用_trimstart)

下面的例子输出了小写的字符串 `"foo "`：

```
var str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart()    // 等同于 str = str.trimLeft();
console.log(str.length); // 5
console.log(str);        // "foo  "
```

###### Array.prototype.flat()

> `flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#语法)

```
var newArray = arr.flat([depth])
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#参数)

- `depth` 可选

  指定要提取嵌套数组的结构深度，默认值为 1。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#返回值)

一个包含将数组与子数组中所有元素的新数组。

[示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#示例)

[扁平化嵌套数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#扁平化嵌套数组)

```
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

[扁平化与数组空项](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#扁平化与数组空项)

`flat()` 方法会移除数组中的空项:

```
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

[替代方案](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#替代方案)

[使用 `reduce` 与 `concat`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#使用_reduce_与_concat)

```
var arr = [1, 2, [3, 4]];

// 展开一层数组
arr.flat();
// 等效于
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// 使用扩展运算符 ...
const flattened = arr => [].concat(...arr);
```

###### Array.prototype.flatMap()

> `flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 连着深度值为1的 [flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#参数)

- `callback`

  可以生成一个新数组中的元素的函数，可以传入三个参数：`currentValue`当前正在数组中处理的元素`index`可选可选的。数组中正在处理的当前元素的索引。`array`可选可选的。被调用的 `map` 数组

- `thisArg`可选

  可选的。执行 `callback` 函数时 使用的`this` 值。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#返回值)

 一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 `depth` 值为1。

[描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#描述)

有关回调函数的详细描述，请参见 [`Array.prototype.map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 。 `flatMap` 方法与 `map` 方法和深度depth为1的 `flat` 几乎相同.

[示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#示例)

[`map()` 与 `flatMap()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#map_与_flatmap)

```
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

虽然上面的代码使用 map 和 flatMap 好像都可以，但这只能展示如何使用 flatMap。

所以，为了更好的展示 flatMap 的作用，下面我们将包含几句话的数组拆分成单个词组成的新数组。

```
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

注意，输出列表长度可以不同于输入列表长度。

##### 修订Function.prototype.toString()

> 返回源代码中的实际文本片段，旧的标准不会返回函数的注释和空格这些，但是ES10标准会原封不动的返回

##### 可选的Catch Binding

> 可省略catch绑定的参数

这是传统的写法，但代码实际运行过程中，我们有时候并不需要把错误输出出来，那么我们就可以不给catch传参数了

![image-20210829003349014](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210829003349.png)

简洁的新写法：

![](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210829003638.png)

#### ES11

##### 字符串扩展

###### String.prototype.matchAll()

> **`matchAll()`** 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll#语法)

```
str.matchAll(regexp)
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll#参数)

- `regexp`

  正则表达式对象。如果所传参数不是一个正则表达式对象，则会隐式地使用 `new RegExp(obj)` 将其转换为一个 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/RegExp) 。

  `RegExp`必须是设置了全局模式`g`的形式，否则会抛出异常`TypeError`。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll#返回值)

一个迭代器（不可重用，结果耗尽需要再次调用方法，获取一个新的迭代器）。

[例子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll#例子)

[Regexp.exec() 和 matchAll()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll#regexp.exec_和_matchall)

在 `matchAll` 出现之前，通过在循环中调用 `regexp.exec()` 来获取所有匹配项信息（regexp 需使用 `/g` 标志）：

```
const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`);
  // expected output: "Found football start=6 end=14."
  // expected output: "Found foosball start=16 end=24."
}
```

如果使用 `matchAll` ，就可以不必使用 while 循环加 exec 方式（且正则表达式需使用 `/g` 标志）。使用 `matchAll` 会得到一个迭代器的返回值，配合 `for...of`, [array spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), 或者 [`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 可以更方便实现功能：

```
const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}
// expected output: "Found football start=6 end=14."
// expected output: "Found foosball start=16 end=24."

// matches iterator is exhausted after the for..of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), m => m[0]);
// Array [ "football", "foosball" ]
```

如果没有 `/g` 标志，`matchAll` 会抛出异常。

```
const regexp = RegExp('[a-c]','');
const str = 'abc';
Array.from(str.matchAll(regexp), m => m[0]);
// TypeError: String.prototype.matchAll called with a non-global RegExp argument
```

`matchAll` 内部做了一个 regexp 的复制，所以不像 [regexp.exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), `lastIndex` 在字符串扫描时不会改变。

```
const regexp = RegExp('[a-c]','g');
regexp.lastIndex = 1;
const str = 'abc';
Array.from(str.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]
```

[捕获组的更佳途径](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll#捕获组的更佳途径)

`matchAll` 的另外一个亮点是更好地获取捕获组。因为当使用 `match()` 和 `/g` 标志方式获取匹配信息时，捕获组会被忽略：

```
var regexp = /t(e)(st(\d?))/g;
var str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']
```

使用 `matchAll` 可以通过如下方式获取分组捕获:

```
let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

##### Dynamic import()动态导入

> 按需import提案几年前就已提出，如今终于能进入ES正式规范。这里个人理解成“按需”更为贴切。现代前端打包资源越来越大，打包成几M的JS资源已成常态，
>
> 而往往前端应用初始化时根本不需要全量加载逻辑资源，为了首屏渲染速度更快，很多时候都是按需加载，比如懒加载图片等。而这些按需执行逻辑资源都体现在某一个事件回调中去加载。

```
// 点击按钮才去加载ajax模块
const oBtn = document.querySelector('#btn')
oBtn.addEventListener('click', () => {
    import('./ajax').then(mod => {
        mod.get('static/a.json', res => {
            console.log(res)
        })
    })
})
```

当然，`webpack`目前已很好的支持了该特性。

Vue 中组件按需加载：

```
const routes = [
  {
    path: '/',
    name: 'User',
    component: User
  }, {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/Upload.vue')
  }
]
```

当我们build打包项目后，会把不同路由的页面分成一个个JS文件，按需请求加载

![image-20210830011340066](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210830011340.png)

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210830005506.png" alt="image-20210830005505572" style="zoom:67%;" />



##### BigInt

> `BigInt`数据类型的目的是比`Number`数据类型支持的范围更大的整数值。在对大整数执行数学运算时，以任意精度表示整数的能力尤为重要。使用`BigInt`，整数溢出将不再是问题。
>
> 此外，可以安全地使用更加准确时间戳，大整数ID等，而无需使用变通方法。 `BigInt`目前是第3阶段提案， 一旦添加到规范中，它就是JS 第二个数字数据类型，也将是 JS 第8种基本数据类型：
>
> - Boolean
> - Null
> - Undefined
> - Number
> - BigInt
> - String
> - Symbol
> - Object
>
> 在节中，咱们将详细介绍`BigInt`，看看它如何解决使用`Number`类型的限制。

**问题**

对于学过其他语言的程序员来说，JS中缺少显式整数类型常常令人困惑。许多编程语言支持多种数字类型，如浮点型、双精度型、整数型和双精度型，但JS却不是这样。在JS中，按照[IEEE 754-2008](https://link.segmentfault.com/?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIEEE_754-2008_revision)标准的定义，所有数字都以[双精度64位浮点](https://link.segmentfault.com/?url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDouble_precision_floating-point_format)格式表示。

在此标准下，无法精确表示的非常大的整数将自动四舍五入。确切地说，JS 中的`Number`类型只能安全地表示`-9007199254740991 (-(2^53-1))` 和`9007199254740991(2^53-1)`之间的整数，任何超出此范围的整数值都可能失去精度。

```js
console.log(9999999999999999);    // → 10000000000000000
```

该整数大于JS Number 类型所能表示的最大整数，因此，它被四舍五入的。意外四舍五入会损害程序的可靠性和安全性。这是另一个例子：

```js
// 注意最后一位的数字
9007199254740992 === 9007199254740993;    // → true
```

JS 提供`Number.MAX_SAFE_INTEGER`常量来表示 最大安全整数，`Number.MIN_SAFE_INTEGER`常量表示最小安全整数：

```js
const minInt = Number.MIN_SAFE_INTEGER;

console.log(minInt);         // → -9007199254740991

console.log(minInt - 5);     // → -9007199254740996

// notice how this outputs the same value as above
console.log(minInt - 4);     // → -9007199254740996
```

**解决方案**

为了解决这些限制，一些JS开发人员使用字符串类型表示大整数。 例如，[Twitter API](https://link.segmentfault.com/?url=https%3A%2F%2Fdeveloper.twitter.com%2Fen%2Fdocs%2Fbasics%2Ftwitter-ids) 在使用 JSON 进行响应时会向对象添加字符串版本的 ID。 此外，还开发了许多库，例如 [bignumber.js](https://link.segmentfault.com/?url=https%3A%2F%2Fgithub.com%2FMikeMcl%2Fbignumber.js%2F)，以便更容易地处理大整数。

使用BigInt，应用程序不再需要变通方法或库来安全地表示`Number.MAX_SAFE_INTEGER`和`Number.Min_SAFE_INTEGER`之外的整数。 现在可以在标准JS中执行对大整数的算术运算，而不会有精度损失的风险。

要创建`BigInt`，只需在整数的末尾追加n即可。比较:

```js
console.log(9007199254740995n);    // → 9007199254740995n
console.log(9007199254740995);     // → 9007199254740996
```

或者，可以调用`BigInt()`构造函数

```js
BigInt("9007199254740995");    // → 9007199254740995n
```

`BigInt`文字也可以用二进制、八进制或十六进制表示

```js
// binary
console.log(0b100000000000000000000000000000000000000000000000000011n);
// → 9007199254740995n

// hex
console.log(0x20000000000003n);
// → 9007199254740995n

// octal
console.log(0o400000000000000003n);
// → 9007199254740995n

// note that legacy octal syntax is not supported
console.log(0400000000000000003n);
// → SyntaxError
```

请记住，不能使用严格相等运算符将`BigInt`与常规数字进行比较，因为它们的类型不同：

```js
console.log(10n === 10);    // → false

console.log(typeof 10n);    // → bigint
console.log(typeof 10);     // → number
```

相反，可以使用等号运算符，它在处理操作数之前执行隐式类型转换

```js
console.log(10n == 10);    // → true
```

除一元加号(`+`)运算符外，所有算术运算符都可用于`BigInt`

```js
10n + 20n;    // → 30n
10n - 20n;    // → -10n
+10n;         // → TypeError: Cannot convert a BigInt value to a number
-10n;         // → -10n
10n * 20n;    // → 200n
20n / 10n;    // → 2n
23n % 10n;    // → 3n
10n ** 3n;    // → 1000n

const x = 10n;
++x;          // → 11n
--x;          // → 9n
```

不支持一元加号（`+`）运算符的原因是某些程序可能依赖于`+`始终生成`Number`的不变量，或者抛出异常。 更改`+`的行为也会破坏`asm.js`代码。

当然，与`BigInt`操作数一起使用时，算术运算符应该返回`BigInt`值。因此，除法(`/`)运算符的结果会自动向下舍入到最接近的整数。例如:

```js
25 / 10;      // → 2.5
25n / 10n;    // → 2n
```

**隐式类型转换**

因为隐式类型转换可能丢失信息，所以不允许在`bigint`和 `Number` 之间进行混合操作。当混合使用大整数和浮点数时，结果值可能无法由`BigInt`或`Number`精确表示。思考下面的例子：

```js
(9007199254740992n + 1n) + 0.5
```

这个表达式的结果超出了`BigInt`和`Number`的范围。小数部分的`Number`不能精确地转换为`BigInt`。大于`2^53`的`BigInt`不能准确地转换为数字。

由于这个限制，不可能对混合使用`Number`和`BigInt`操作数执行算术操作。还不能将`BigInt`传递给Web api和内置的 JS 函数，这些函数需要一个 `Number` 类型的数字。尝试这样做会报`TypeError`错误

```js
10 + 10n;    // → TypeError
Math.max(2n, 4n, 6n);    // → TypeError
```

**请注意**，关系运算符不遵循此规则，如下例所示：

```js
10n > 5;    // → true
```

如果希望使用`BigInt`和`Number`执行算术计算，首先需要确定应该在哪个类型中执行该操作。为此，只需通过调用`Number()`或`BigInt()`来转换操作数：

```js
BigInt(10) + 10n;    // → 20n
// or
10 + Number(10n);    // → 20
```

当 `Boolean` 类型与`BigInt` 类型相遇时，`BigInt`的处理方式与`Number`类似，换句话说，只要不是`0n`，`BigInt`就被视为`truthy`的值：

```js
if (5n) {
    // 这里代码块将被执行
}

if (0n) {
    // 这里代码块不会执行
}
```

排序`BigInts`和`Numbers`数组时，不会发生隐式类型转换：

```js
const arr = [3n, 4, 2, 1n, 0, -1n];

arr.sort();    // → [-1n, 0, 1n, 2, 3n, 4]
```

位操作符如`|、&、<<、>>`和`^`对`Bigint`的操作方式与`Number`类似。下面是一些例子

```js
90 | 115;      // → 123
90n | 115n;    // → 123n
90n | 115;     // → TypeError
```

**BigInt构造函数**

与其他基本类型一样，可以使用构造函数创建`BigInt`。传递给`BigInt()`的参数将自动转换为`BigInt`:

```js
BigInt("10");    // → 10n
BigInt(10);      // → 10n
BigInt(true);    // → 1n
```

无法转换的数据类型和值会引发异常:

```js
BigInt(10.2);     // → RangeError
BigInt(null);     // → TypeError
BigInt("abc");    // → SyntaxError
```

可以直接对使用构造函数创建的`BigInt`执行算术操作

```js
BigInt(10) * 10n;    // → 100n
```

使用严格相等运算符的操作数时，使用构造函数创建的`Bigint`与常规`Bigint`的处理方式类似

```js
BigInt(true) === 1n;    // → true
```

**库函数**

在撰写本文时，`Chrome +67` 和`Opera +54`完全支持`BigInt`数据类型。不幸的是，`Edge`和`Safari`还没有实现它。`Firefox`默认不支持BigInt，但是可以在`about:config`中将`javascript.options.bigint` 设置为`true`来开启它，最新支持的情况可在“[Can I use](https://link.segmentfault.com/?url=https%3A%2F%2Fcaniuse.com%2F%23search%3Dbigint)”上查看。

不幸的是，转换`BigInt`是一个极其复杂的过程，这会导致严重的运行时性能损失。直接polyfill `BigInt`也是不可能的，因为该提议改变了几个现有操作符的行为。目前，更好的选择是使用[JSBI](https://link.segmentfault.com/?url=https%3A%2F%2Fgithub.com%2FGoogleChromeLabs%2Fjsbi)库，它是`BigInt`提案的纯JS实现。

这个库提供了一个与原生`BigInt`行为完全相同的API。下面是如何使用JSBI：

```js
import JSBI from './jsbi.mjs';

const b1 = JSBI.BigInt(Number.MAX_SAFE_INTEGER);
const b2 = JSBI.BigInt('10');

const result = JSBI.add(b1, b2);

console.log(String(result));    // → '9007199254741001'
```

使用`JSBI`的一个优点是，一旦浏览器支持，就不需要重写代码。 相反，可以使用`babel`插件自动将JSBI代码编译为原生 `BigInt`代码。

**总结**

`BigInt`是一种新的数据类型，用于当整数值大于`Number`数据类型支持的范围时。这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。

重要的是要记住，不能使用`Number`和`BigInt`操作数的混合执行算术运算，需要通过显式转换其中的一种类型。 此外，出于兼容性原因，不允许在`BigInt`上使用一元加号（`+`）运算符。

##### Promise.allSettled()

> 该`Promise.allSettled() `方法返回一个在所有给定的promise都已经`fulfilled`或`rejected`后的promise，并带有一个对象数组，每个对象表示对应的promise结果。
>
> 当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个`promise`的结果时，通常使用它。
>
> `这个方法解决了多个请求其中如果有失败的也可以单独处理，因为返回参数是每个对应的Promise，而不会报错触发catch,`
>
> `如果是all()方法请求中有一个失败则直接触发catch，不会触发then`
>
> 相比之下，`Promise.all()` 更适合彼此相互依赖或者在其中任何一个`reject`时立即结束。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled#句法)

```
Promise.allSettled(iterable);
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled#参数)

- `iterable`

  一个[可迭代的](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)对象，例如[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)，其中每个成员都是`Promise`。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled#返回值)

一旦所指定的 promises 集合中每一个 promise 已经完成，无论是成功的达成或被拒绝，**未决议的** [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)将被**异步**完成。那时，所返回的 promise 的处理器将传入一个数组作为输入，该数组包含原始 promises 集中每个 promise 的结果。

对于每个结果对象，都有一个 `status` 字符串。如果它的值为 `fulfilled`，则结果对象上存在一个 `value` 。如果值为 `rejected`，则存在一个 `reason` 。value（或 reason ）反映了每个 promise 决议（或拒绝）的值。

**基本使用：**

```
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"
```

##### globalThis

> `提供了一个标准的方式去获取不同环境下的全局对象`
>
> JavaScript 语言越来越被广泛地用于各种环境中。除了 Web 浏览器（这是 JavaScript 的最常见的宿主环境类型）之外，你还可以在服务器，智能手机甚至机器人硬件中运行 JavaScript 程序。
>
> 每个环境都有其自己的对象模型，并提供了不同的语法来访问全局对象。例如，在Web浏览器中，可以通过 `window`，`self` 或 `frames` 访问全局对象。但是在 Node.js 中，这些属性不存在，而你必须使用 `global`。在 Web Worker 中，只有 `self` 可用。
>
> 这些引用全局对象的不同方式使编写能够在多个环境中工作的可移植 JavaScript 代码变得非常困难。幸运的是，有一个[正在开发中的提案](https://link.zhihu.com/?target=https%3A//github.com/tc39/proposal-global)打算通过引入一个名为 `globalThis` 的标准属性来解决这个问题，该属性将在所有环境中可用。
>
> 在本节中，我们将首先研究流行的 JavaScript 环境中的全局对象，然后看看 `globalThis` 是如何提供一种统一的机制来访问它。

**window**

`window` 属性用于在浏览器环境中引用当前文档的全局对象。在代码的顶层，使用 `var` 关键字声明的变量将成为 `window` 的属性，并且可能够在代码中的任何位置访问：

```js
var a = [10, 20];

console.log(window.a);          // → [10, 20]
console.log(a === window.a);    // → true
```

通常在使用 `window` 的属性时，由于隐含引用的缘故不必直接引用 `window`。但是当有一个与全局变量同名的局部变量时，使用 `window` 是唯一的选择：

```js
var a = 10;

(function() {
  var a = 20;   
  console.log(a);           // → 20
  console.log(window.a);    // → 10
})();
```

如你所见，无论代码在什么作用域内运行，`window` 对于引用全局对象都非常有用。注意，``window`实际上引用了 `window.window`。因此，`window.window === window`。

除了标准的 JavaScript 属性和方法之外，`window` 对象还包含其他一些属性和方法，这些属性和方法使我们能够控制 Web 浏览器窗口以及文档本身。

**self**

Web Workers API没有 `window` 对象，因为它没有浏览上下文。相反，它提供了 `WorkerGlobalScope` 接口，其中包含通常由 `WorkerGlobalScope` 承载的数据。

为了访问 Web Workers 中的全局对象，我们需要使用 `self`，它是 `Window` 对象的 `window` 属性的同义词。与 `window` 类似，`self` 是对全局对象的引用，可用于显式引用：

```js
// a web worker
console.log(self);    // => DedicatedWorkerGlobalScope {...}

var a = 10;

console.log(self.a);          // → 10
console.log(a === self.a);    // → true
```

在浏览器环境中，此代码将记录 `Window` 而不是 `DedicatedWorkerGlobalScope`。由于 `self` 的值会根据使用环境的不同而变化，所以有时最好使用 `Window`。 `self` 在 web worker 上下文中引用 `WorkerGlobalScope.self`，而在浏览器上下文中引用 `window.self`。

重要的是不要将 `self` 属性与声明局部变量（用于维护对上下文的引用）的常见 JavaScript 模式混淆。例如：

```js
const obj = {
  myProperty: 10,
  myMethod: function(){
    console.log(this === obj);    // => true

    // store the value of this in a variable for use in nested functions
    const self = this;

    const helperFunction = (function() {
      console.log(self === obj);  // => true (self refers to the outer this value)
      console.log(this === obj);  // => false (this refers to the global object. In strict mode, it has a value of undefined)
    })();
  }
};

// invoke myMethod on the object obj.
obj.myMethod();
```

**global**

在 Node.js 中，你可以使用 `global` 关键字访问全局对象：

```js
// node environment
console.log(global);    // => Object [global] {...}
```

`window`、 `self` 或 `frames` 在 Node 环境中不起作用。请记住，Node.js 中的顶级作用域不是全局作用域。在浏览器中，`var abc = 123` 将创建一个全局变量。但是在 Node.js 中变量是模块本身的局部变量。

**this**

在浏览器中，可以在程序的顶层使用 `this` 关键字来引用全局对象：

```js
this.foo = 123;
console.log(this.foo === window.foo);    // => true
```

`this` 在非严格模式下在函数或箭头函数内也引用全局对象。但是在严格模式下运行的函数就不是这种情况了，其中 `this` 的值为 `undefined`：

```js
(function() {
  console.log(this);    // => Window {...}
})();

(() => {
  console.log(this);    // => Window {...}
})();

(function() {
  "use strict";
  console.log(this);    // => undefined
})();
```

在 Node 模块中，顶层的 `this` 不引用全局对象。相反，它与 `module.exports` 具有相同的值。在函数内部（Node 环境），`this` 的值取决于函数的调用方式。在 JavaScript 模块中，顶层的 `this` 是 `undefined`。

**介绍 `globalThis`**

`globalThis` 旨在通过定义标准的全局属性来整合越来越分散的访问全局对象的方式。 `globalThis` 提案目前处于第 4 阶段，这意味着它已准备好纳入 ES2020 标准。所有流行的浏览器，包括 Chrome 71 +，Firefox 65+和Safari 12.1+，都已支持该功能。你也可以在 Node.js 12+ 中使用它。

```js
// browser environment
console.log(globalThis);    // => Window {...}

// node.js environment
console.log(globalThis);    // => Object [global] {...}

// web worker environment
console.log(globalThis);    // => DedicatedWorkerGlobalScope {...}
```

通过使用 `globalThis`，你的代码能够在窗口和非窗口上下文中工作，而无需编写其他检查或测试代码。在大多数环境中， `globalThis` 直接引用该环境的全局对象。但是在浏览器中，内部需要使用代理来考虑 iframe 和跨窗口安全性。实际上，它并不会改变你编写代码的方式。

通常，当你不确定要在哪种环境中使用代码时，或者当你想使代码在不同环境中可执行时，可以用 `globalThis` 属性。不过你必须用 polyfill 在不支持该功能的旧版浏览器上实现该功能。

另一方面，如果需要你确定要在什么环境中使用代码，请使用前面列举引用环境全局对象的现有方法之一，避免为 `globalThis` 添加 polyfill 的麻烦。

**创建一个 `globalThis` polyfill**

在引入 `globalThis` 之前，一种常用的跨环境访问全局对象的方法是使用以下模式：

```js
function getGlobalObject() {
  return Function('return this')();
}

if (typeof getGlobalObject().Promise.allSettled !== 'function') {
  // the Promise.allSettled() method is not available in this environment
}
```

这段代码的问题在于，在强制执行[内容安全策略（CSP）](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)的网站中不能用 `Function` 构造函数和 `eval`。由于CSP的缘故，Chrome 的扩展程序系统也不允许此类代码运行。

引用全局对象的另一种模式如下：

```js
function getGlobalObject() {
  if (typeof globalThis !== 'undefined') { return globalThis; }
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('cannot find the global object');
};

if (typeof getGlobalObject().Promise.allSettled !== 'function') {
  // the Promise.allSettled() method is not available in this environment
}
```

这种模式通常在 web 上使用。但也有[几个缺陷](https://link.zhihu.com/?target=https%3A//mathiasbynens.be/notes/globalthis%23naive-polyfill)，使其在某些情况下不可靠。幸运的是 Chrome DevTools 团队的Mathias Bynens [提出了一种创意模式](https://link.zhihu.com/?target=https%3A//mathiasbynens.be/notes/globalthis%23robust-polyfill)，它没有这些缺点：

```js
(function() {
  if (typeof globalThis === 'object') return;
  Object.defineProperty(Object.prototype, '__magic__', {
    get: function() {
      return this;
    },
    configurable: true // This makes it possible to `delete` the getter later.
  });
  __magic__.globalThis = __magic__; // lolwat
  delete Object.prototype.__magic__;
}());

// Your code can use `globalThis` now.
console.log(globalThis);
```

与其他方法相比，polyfill 是更可靠的解决方案，但仍然不够完美。正如 Mathias 提到的那样，修改`Object`、 `Object.defineProperty` 或 `Object.prototype.__defineGetter__` 可能会破坏 polyfill。

**总结**

能够用在多种环境中的可移植 JavaScript 代码很难编写。每个主机环境都有一个略有不同的对象模型。因此，要访问全局对象，你需要在不同的 JavaScript 环境中使用不同的语法。

通过引入 `globalThis` 属性，访问全局对象将变得更加简单，并且不再需要去检测代码所运行的环境。

乍一看 `globalThis` 似乎很容易实现。但是实际上，正确地进行操作是非常复杂的。现有的解决方法都不完美，如果不小心就可能会引入错误。

##### 可选链 ?.

> 可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。

上述是官方描述，举个例子对象嵌套了好多层，需要获得对象深层的值得时候，这就意味着你需要写很长的属性访问，如下：

```
const person = {
    details: {
        name: {
            newName: "aa",
            oldName: "aa",
        }
        age: "18",
    },
    jobs: [
        "H5",
        "Java"
    ]
} 
const personNewName = person.details.name.newName;
```

上面的代码如果我的person.details.name等任何一层数据有问题或者不存在的时候，js就会报错，我们一般会这么改进:

```
 const personNewName =  person && person.details && person.details.name person.details.name.newName|| '';
```

可以看到为了访问某个人的 newName，代码变得非常不优雅，会有多个&&代码量也很大。可选链 就是为了解决这个问题而诞生的。

**用法**
有了可选链操作符（?.），在访问 person.details.name.newName 之前，不再需要明确地校验 person.details.name 的状态，再并用短路计算获取最终结果：

```
const personFirstName = person?.details?.name?.firstName;
```

其实就是在属性访问符 . 的前面加了个问号。我们看上面语句中第一个 ?. ，从 JS 层面，它表示如果 person 的值为 null 或者 undefined，就不会报错而返回 undefined，否则才继续访问后面的 details 属性。而如果后面的属性访问链中有任何一个属性为 null 或者 undefined，那么最终的值就为 undefined。
这等价于以下表达式，但实际上没有创建临时变量：

```
let temp = person.details;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.name);
let temp1 = person.details.name;
let nestedProp = ((temp1 === null || temp1 === undefined) ? undefined : temp1.firstName);
```

**可选链与函数调用**

函数调用时如果被调用的方法不存在，使用可选链可以使表达式自动返回undefined而不是抛出一个异常。

```
let result = someInterface.customMethod?.();
```

注意: 如果存在一个属性名且不是函数, 使用 ?. 仍然会产生一个 TypeError 异常 (x.y is not a function).
注意: 如果 someInterface 自身是 null 或者 undefined ，异常 TypeError 仍会被抛出 someInterface is null 如果你希望允许 someInterface 也为 null 或者 undefined ，那么你需要像这样写 someInterface?.customMethod?.()

**可选链和表达式**
当使用方括号与属性名的形式来访问属性时，你也可以使用可选链操作符：

```
let nestedProp = obj?.['prop' + 'Name'];
```

**可选链不能用于赋值**

```
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

**可选链访问数组元素**

```
let arrayItem = arr?.[42];
```

##### Nullish coalescing Opearator空值合并运算符 ??

> [空值合并操作符（??）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)英文名称为“**nullish coalescing operator**”，是一个逻辑操作符，**当左侧的操作数为 `null` 或者 `undefined` 时**，返回其右侧操作数，否则返回左侧操作数。

与逻辑或操作符（||）不同，逻辑或操作符会在左侧操作数为[虚值](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)时返回右侧操作数。也就是说，如果使用 || 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为[虚值](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)（例如，`'' 或 0`）时。


**在 JavaScript 中只有 8 个 falsy 值（虚值）。**

> falsy 值 (虚值) 是在 Boolean 上下文中认定为 false 的值。

1. `false`
2. `0`
3. `-0`
4. `0n`
5. `NaN`
6. `null`
7. `undefined`
8. `空字符串: 双引号 "", 单引号 '', 或 模板字面量 `` `