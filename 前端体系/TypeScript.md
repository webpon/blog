- [简介](#简介)
- [环境配置](#环境配置)
- [基本使用](#基本使用)
- [变量](#变量)
- [运算符](#运算符)
- [原始数据类型](#原始数据类型)
    - [布尔值](#布尔值)
    - [数值](#数值)
    - [字符串](#字符串)
    - [空值§](#空值)
    - [Null 和 Undefined§](#null-和-undefined)
- [数组](#数组)
- [枚举类型（enum）](#枚举类型enum)
- [任意类型（any）](#任意类型any)
- [undefined和null](#undefined和null)
- [函数](#函数)
  - [一、函数的定义](#一函数的定义)
  - [二、定义函数返回值](#二定义函数返回值)
  - [三、函数参数](#三函数参数)
- [对象](#对象)
  - [接口](#接口)
- [类](#类)
  - [介绍](#介绍)
  - [继承](#继承)
  - [公共，私有与受保护的修饰符](#公共私有与受保护的修饰符)
    - [默认为 `public`](#默认为-public)
    - [理解 `private`](#理解-private)
    - [理解 `protected`](#理解-protected)
  - [readonly修饰符](#readonly修饰符)
  - [参数属性](#参数属性)
  - [存取器](#存取器)
  - [静态属性](#静态属性)
  - [抽象类](#抽象类)
  - [高级技巧](#高级技巧)
    - [构造函数](#构造函数)
    - [把类当做接口使用](#把类当做接口使用)
  - [接口](#接口-1)
    - [1.接口的概念](#1接口的概念)
    - [2.可选属性和只读属性](#2可选属性和只读属性)
    - [3.任意属性](#3任意属性)
    - [4.函数类型](#4函数类型)
    - [5.可索引属性](#5可索引属性)
    - [6.类接口](#6类接口)
    - [7.泛型接口](#7泛型接口)
    - [8.接口继承接口](#8接口继承接口)
    - [9.接口继承类](#9接口继承类)
    - [10.类实现（implements）接口](#10类实现implements接口)
  - [泛型](#泛型)
    - [一、泛型类](#一泛型类)
    - [二、泛型函数](#二泛型函数)
  - [在浏览器中运行TS](#在浏览器中运行ts)
  - [项目配置](#项目配置)
    - [概述](#概述)
    - [使用tsconfig.json](#使用tsconfigjson)
    - [示例](#示例)
    - [细节](#细节)
    - [`@types`，`typeRoots`和`types`](#typestyperoots和types)
    - [使用`extends`继承配置](#使用extends继承配置)
    - [`compileOnSave`](#compileonsave)
    - [模式](#模式)
  - [学习资源](#学习资源)
#### 简介

> TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。
>
> TypeScript = Type + JavaScript (为JS添加了类型系统)
>
> TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。
>
> TypeScript是微软开发的开源编程语言，设计目标是开发大型应用。
>
> 可以在任何浏览器、任何计算机、任何操作系统上运行。

**TypeScript 代码：有明确的类型，即 ：number (数值类型)**

```
	let age: number = 18
```

JavaScript 代码：无明确的类型

```
	let age = 18
```

#### 环境配置

nodejs

```
	npm i -g typescript
```

typescript：就是用来解析TS的工具包。提供了TSC命令，是实现了TS->JS的转化。

```
	tsc -v  //查看typescript版本，可以检查是否安装成功
```

![image-20201121131021457](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220309.png)

#### 基本使用

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220313.png" alt="image-20201121131601229" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220318.png" alt="image-20201121132208220" style="zoom:67%;" />

#### 变量

> **基本使用**

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220324.png" alt="image-20201121133100575" style="zoom:67%;" />

```
	//第一步：声明变量并指定类型
	let age: number
	//第二步: 给变量赋值
	age = 18
	console.log(age)   //18
	//变量是可以变化的
	age = 19
	console.log(age)   //19
```

> **简化形式**

```
	//简化方式： 声明变量的同时就赋值
	let age: number = 18
	console.log(age)  //18
```

> 变量的命名规则

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220327.png" alt="image-20201121134601478" style="zoom:67%;" />

#### 运算符

加号的其他作用：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220331.png" alt="image-20201121155956941" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220334.png" alt="image-20201121160041060" style="zoom:67%;" />

`注意：以上的只是针对TS语法，JS并不完全一样，JS中减法可以有除number类型的其他数据，并且都会转化成number类型`

#### 原始数据类型

JavaScript 的类型分为两种：原始数据类型（[Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、`null`、`undefined` 以及 ES6 中的新类型 [`Symbol`](http://es6.ruanyifeng.com/#docs/symbol) 和 ES10 中的新类型 [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

本节主要介绍**前五种**原始数据类型在 TypeScript 中的应用。

###### 布尔值

布尔值是最基础的数据类型，在 TypeScript 中，使用 `boolean` 定义布尔值类型：

```ts
let isDone: boolean = false;

// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过
```

注意，使用构造函数 `Boolean` 创造的对象**不是**布尔值：

```ts
let createdByNewBoolean: boolean = new Boolean(1);

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
```

事实上 `new Boolean()` 返回的是一个 `Boolean` 对象：

```ts
let createdByNewBoolean: Boolean = new Boolean(1);
```

直接调用 `Boolean` 也可以返回一个 `boolean` 类型：

```ts
let createdByBoolean: boolean = Boolean(1);
```

在 TypeScript 中，`boolean` 是 JavaScript 中的基本类型，而 `Boolean` 是 JavaScript 中的构造函数。其他基本类型（除了 `null` 和 `undefined`）一样，不再赘述。

###### 数值

使用 `number` 定义数值类型：

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

编译结果：

```js
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
```

其中 `0b1010` 和 `0o744` 是 [ES6 中的二进制和八进制表示法](http://es6.ruanyifeng.com/#docs/number#二进制和八进制表示法)，它们会被编译为十进制数字。

###### 字符串

使用 `string` 定义字符串类型：

```ts
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```

编译结果：

```js
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".
I'll be " + (myAge + 1) + " years old next month.";
```

其中 ``` 用来定义 [ES6 中的模板字符串](http://es6.ruanyifeng.com/#docs/string#模板字符串)，`${expr}` 用来在模板字符串中嵌入表达式。

###### 空值[§](http://ts.xcatliu.com/basics/primitive-data-types.html#空值)

JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数：

```ts
function alertName(): void {
    alert('My name is Tom');
}
```

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`（只在 --strictNullChecks 未指定时）：

```ts
let unusable: void = undefined;
```

###### Null 和 Undefined[§](http://ts.xcatliu.com/basics/primitive-data-types.html#null-和-undefined)

在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：

```ts
let u: undefined = undefined;
let n: null = null;
```

与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量：

```ts
// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u: undefined;
let num: number = u;
```

而 `void` 类型的变量不能赋值给 `number` 类型的变量：

```ts
let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.
```

#### 数组

> ​		TS中定义数组方式

1. 第一种定义数组的方式

   ```
   let arr:number[] = [1, 2, 34, 5435]
   let arr2:string[] = ['php', 'js', 'golang']
   ```

2. 第二种定义数组的方式

   ```
   let arr:Array<number> = [11, 22, 33]
   let ar2:Array<string> = ['php', 'js', 'golang']
   ```


3. 元组类型（tuple）属于数组的一种

```
	let arr:[string, number, boolean] = ["ts", 3.14, "golang"]
```

​		`注意：元组类型数据类型和顺序必须一一对应`

4. 配合any使用

```
	let arr:any[] = ['1', '哈哈', 2, true]
```

#### 枚举类型（enum）

> ​		随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
>
> 例如：性别、月份、星期、颜色、单位名、学历、职业等，都不是数值数据。
>
> 在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方式不直观，易读性差。
>
> 如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
>
> 也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表达它的每一个值，
>
> 这种方法称为枚举方法，用这种方法定义的类型称为枚举类型。
>
> ​		定义方式：
>
> ​		enum 枚举名 {
>
> ​			标识符[=整型常数],
>
> ​			标识符[=整型常数]，
>
> ​			...
>
> ​			标识符[=整型常数]
>
> ​		}

```
	enum Flag {
		success = 1, 
		error = -1
	}
	var f:Flag= Flag.success
	console.log(f)
	enum Color {
		red = 1,
		blue = 2,
		orange = 3
	}
	var c:Color = Color.orange
```

#### 任意类型（any）

```
	//任意类型的用处
	var oBox:any = document.getElementById('box')
	box.style.color = 'red'
```

#### undefined和null

```
	var num:number;
	console.log(num)   //  报错
	
	var num2:undefined;
	console.log(num2)  //输出：undefined   //正确
    
    var num3:number | undefined;
    num3 = 123;
    console.log(num3)
    // _____________________________________________
    var num4:null;
    num = null;
    var num:number | null | undefined;
    num = 1234;
    console.log(num);
```

never类型

> ​		never类型：是其他类型（包括null 和 undefined）的子类型，代表从不会出现的值
>
> 这意味着声明never的变量只能被never类型所赋值

```
	var a:never;
	// a = 123: //错误的写法
	// 正确的写法
	a = (() => {
		throw new Error('错误');
	})
```

#### 函数

##### 一、函数的定义

 **1.es5定义函数的方法**

```
 //函数声明法
     function run(){
       return 'run';
     }
        
 //匿名函数
    var run2=function(){
    	return 'run2';
    }

```

**2.ts中定义函数**

接下来我们同样写一个计算两个数之和的方法：

```
function total(one: number, two: number) {
  return one + two;
}
const total = getTotal(1, 2);
```

这时我们并没有定义total的返回值类型，虽然TypeScript可以自己推断出返回值是number类型。 但是如果这时候我们的代码不小心写错了，比如：

```
function total(one: number, two: number) {
  return one + two + "i love you";
}

const total = total(1, 2);
```

这时候total的值就不是number类型了，但是不会报错。为了保证我们的结果也是number类型，有的时候你可以这样写：

```
const count: number = total(1, 2);
```

这样写虽然可以让编辑器报错，但是代码不够严谨，没有解决根本原因，这是total()函数的错误。所以合适的做法是给函数的返回值加上类型注解。

在ts中需要指定函数的返回值类型。

```
function total(one: number, two: number): number {
  return one + two;
}

const total = total(1, 2);

```

这样代码就比较严谨了。

##### 二、定义函数返回值

**1.ts中定义函数返回值**

```
 //函数声明法
        function run():string{
             return 'run';
         }
      //错误写法
     function run():string{
           return 123;
      }
//匿名函数
     var fun2=function():number{
        return 123;
     }
   alert(fun2()); /*调用方法*/
```

**2.函数无返回值**

 类型为：void

```
 function run():void{
        console.log('run'); //只打印出‘run’,没有返回值
     }
   run();
```

**3.never返回类型**

never返回类型前面已经介绍过了。 如果一个函数是永远也执行不完的，就可以定义返回值为never，那什么样的函数是永远也执行不完的那?比如执行的时候，抛出了异常，这时候就无法执行完了。

```
function errF(): never {
  throw new Error();
  console.log("this is error");
}
```

还有一种是一直循环，也是我们常说的死循环，这样也运行不完，比如下面的代码：

```
function forever(): never {
  while (true) {}
  console.log("Hello,honey");
}
```

##### 三、函数参数

- 可选参数
- 默认参数
- 剩余参数

**1.ts中方法传参**

方法传参刚才已经提到了，在传参的时候指定参数的类型：

```
function getInfo(name:string,age:number):string{
	return `${name} --- ${age}`;
}
alert(getInfo('zhangsan',20));
```

**2.参数为对象（解构）时**

比如我们写一个对象参数:

```
function add({ num1, num2 }) {
  return num1 + num2;
}

const total = add({ num1: 1, num2: 2 });
```

![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210323205532182.png)

这时直接报错了，意思是total有可能会是任何类型，那我们要如何给这样的参数加类型注解？

```
function add({ num1: number, num2: number }) {
  return num1 + num2;
}
const total = add({ num1: 1, num2: 2 });
```

你在编辑器中会看到这种写法是完全错误的。那正确的写法应该是这样的。

```
function add({ num1, num2}:{num1:number,num2:number}):number {
    return num1 + num2;
  }
  const total = add({ num1: 1, num2: 2 });
  console.log(total); //3
```

解构一个函数的参数是 对象 的方式是:在后面跟着一个对象类型注解.

如果参数只有一个属性时,应该这样写：

```
function getcount({ one }: { one: number }): number {
  return one;
}

const num = getcount({ one: 1 });
```

**3.可选参数**

es5里面方法的实参和行参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数

```
function getWorker(name:string,age?:number):string{
	if(age){
		return `我的名字是：${name} --- 我的年龄是：${age}`;
	}else{
		return `我的名字是：${name} --- 我的年龄是保密`;
	}
}
console.log(getWorker('孙玉鑫')); //我的名字是：孙玉鑫 --- 我的年龄是保密
console.log(getWorker('潘小小',19)); //我的名字是：潘小小 --- 我的年龄是：19
```

`注意:可选参数必须配置到参数的最后面`

```
//错误的写法
function getWorker(name?:string,age:number):string{
    if(age){
        return `我的名字是：${name} --- 我的年龄是：${age}`;
    }else{
        return `我的名字是：${name} --- 我的年龄是保密`;
    }
}
console.log(getWorker('谭成铭')); 
```

![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210323205711376.png)

**4.默认参数**

es5里面没法设置默认参数，es6和ts中都可以设置默认参数

```
function getCodeFarmer(name:string,age:number=22):string{
    if(age==22){
        return `我的名字是：${name} ---我的年龄是默认值：${age}，我是一个码农`;
       }else{
           return `我的名字是：${name} ---我的年龄是：${age}，我是一个码农`;
       }
}

console.log( getCodeFarmer('代高飞'));//我的名字是：代高飞 ---我的年龄是默认值：22，我是一个码农
console.log( getCodeFarmer('高威',15)); //我的名字是：高威 ---我的年龄是：15，我是一个码农
```

**5.剩余参数**

刚才我们讨论的默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在JavaScript里，你可以使用 arguments来访问所有传入的参数。在TypeScript里，你可以把所有参数收集到一个变量里。剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。三点运算符 接受新参传过来的值。

比如写一个多个数相加的函数

```
function sum(a:number,b:number,c:number,d:number):number{
             return a+b+c+d;
     }
 console.log(sum(1,2,3,4)) 
```

如果还有很多我们不确定的数相加，可以这样写：

```
function sum(...result:number[]):number{
                var sum=0;
                for(var i=0;i<result.length;i++){
                    sum+=result[i];  
                }
                return sum;
            }
 console.log(sum(1,2,3,4,5,6)) ;
```

普通参数可以和剩余参数同时传递：

```
 function sum(a:number,b:number,...result:number[]):number{
                var sum=a+b;
                for(var i=0;i<result.length;i++){
                    sum+=result[i];  
                }
                return sum;
            }
  console.log(sum(1,2,3,4,5,6)) ;
```

6.ts函数重载

typescript中的重载：通过为同一个函数提供多个函数类型定义来实现多种功能的目的。

在JS中依据不同参数类型或参数个数执行一些不同函数体的实现很常见，在TypeScript中，会有需要用到这种声明的地方。

关于函数重载，必须要把精确的定义放在前面，最后函数实现时，需要使用 |操作符或者?操作符，把所有可能的输入类型全部包含进去，以具体实现。

ts为了兼容es5 以及 es6 重载的写法和java中有区别。

```
//es5中出现同名方法，下面的会替换上面的方法 
     function getName(name){
            return name;
       }

     function getName(name,work){
          return name+work;
      }
```

在ts中我们写一个add函数，它可以接收string类型的参数进行拼接，也可以接收number类型的参数进行相加。

```
/函数重载
// 声明
function some (arg1: string, arg2: string): string
function some (arg1: number, arg2: number): number

// 具体实现
function some (arg1: string | number, arg2: string | number) {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return  `拼接两个字符串：${arg1} + ${arg2}`
  } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg1 + arg2
  }
}

console.log(some("皮皮虾","跟我走")); //拼接两个字符串：皮皮虾 + 跟我走
console.log(some(12,12)); //24
console.log(some("你好"，25)) //错误
```

```
function getUser(name:string):string; 
function getUser(name:string,age:number):string;
function getUser(name:any,age?:any):any{
    if(age){
        return '我叫：'+name+'我的年龄是'+age;
    }else{

        return '我叫：'+name;
    }
}
  console.log(getUser('曹西西'));  /*正确*/

  console.log(getUser(123));  //错误

  console.log(getUser('韩尚尚',20)); //正确
```

TypeScript 中的函数重载也只是多个函数的声明，具体的逻辑还需要自己去写，它并不会真的将你的多个重名 function 的函数体进行合并。

```
interface Uodefarmer {
    name: string;
    age: number;
    work:string;  
  }
  interface ProductManager {
    name: string;
    age: number;
    work:string;
    rest:string; 
  }
  declare function doSomething(params: Uodefarmer | ProductManager, flag?: boolean): string;
```

在这个 doSomething函数里，我们的目的是当传入参数 params是 Uodefarmer（码农）时，不传 flag，当传入 params是 ProductManager（产品经理时） 时，传入 flag。

TypeScript 并不知道这些，当你传入 params为 Uodefarmer时，flag 同样允许你传入：

```
const user={
       name:"王冲冲",
       age:10,
       work:"码农"
 }
// 没有报错，但是不符合我们的设想
 doSomething(user,true)
```

使用函数重载能帮助我们实现：

```
interface Ucodefarmer {
    name: string;
    age: number;
    work:string;  
  }
  interface ProductManager {
    name: string;
    age: number;
    work:string;
    rest:string; 
  }
 declare  function doSomething(params: Ucodefarmer): string;
 declare  function doSomething(params: ProductManager, flag: boolean): string;
  
 const user={
       name:"王冲冲",
       age:10,
       work:"码农"
 }
 const user2={
    name:"张三",
    age:10,
    work:"码农",
    rest:"ahhah"
}
 doSomething(user，true) //error
 doSomething(user2,true) //正确
```

函数重载的意义在于能够让你知道传入不同的参数得到不同的结果，如果传入的参数不同，但是得到的结果（类型）却相同，那么这里就不要使用函数重载（没有意义）。如果函数的返回值类型相同，那么就不需要使用函数重载

```
function func (a: number): number
function func (a: number, b: number): number

// 像这样的是参数个数的区别，我们可以使用可选参数来代替函数重载的定义

function func (a: number, b?: number): number

// 注意第二个参数在类型前边多了一个`?`

// 或是一些参数类型的区别导致的
function func (a: number): number
function func (a: string): number

// 这时我们应该使用联合类型来代替函数重载
function func (a: number | string): number
```

#### 对象

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220354.png" alt="image-20201122124356699" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220359.png" alt="image-20201122124415777" style="zoom:67%;" />

##### 接口

> 为对象的类型注解命名，并为你的代码建立契约来约束对象的结构

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220403.png" alt="image-20201122124305185" style="zoom:67%;" />

#### 类

##### 介绍

传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。

下面看一个使用类的例子：

```ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

如果你使用过C#或Java，你会对这种语法非常熟悉。 我们声明一个 `Greeter`类。这个类有3个成员：一个叫做 `greeting`的属性，一个构造函数和一个 `greet`方法。

你会注意到，我们在引用任何一个类成员的时候都用了 `this`。 它表示我们访问的是类的成员。

最后一行，我们使用 `new`构造了 `Greeter`类的一个实例。 它会调用之前定义的构造函数，创建一个 `Greeter`类型的新对象，并执行构造函数初始化它。

##### 继承

在TypeScript里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

看下面的例子：

```ts
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

这个例子展示了最基本的继承：类从基类中继承了属性和方法。 这里， `Dog`是一个 *派生类*，它派生自 `Animal` *基类*，通过 `extends`关键字。 派生类通常被称作 *子类*，基类通常被称作 *超类*。

因为 `Dog`继承了 `Animal`的功能，因此我们可以创建一个 `Dog`的实例，它能够 `bark()`和 `move()`。

下面我们来看个更加复杂的例子。

```ts
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

这个例子展示了一些上面没有提到的特性。 这一次，我们使用 `extends`关键字创建了 `Animal`的两个子类： `Horse`和 `Snake`。

与前一个例子的不同点是，派生类包含了一个构造函数，它 *必须*调用 `super()`，它会执行基类的构造函数。 而且，在构造函数里访问 `this`的属性之前，我们 *一定*要调用 `super()`。 这个是TypeScript强制执行的一条重要规则。

这个例子演示了如何在子类里可以重写父类的方法。 `Snake`类和 `Horse`类都创建了 `move`方法，它们重写了从 `Animal`继承来的 `move`方法，使得 `move`方法根据不同的类而具有不同的功能。 注意，即使 `tom`被声明为 `Animal`类型，但因为它的值是 `Horse`，调用 `tom.move(34)`时，它会调用 `Horse`里重写的方法：

```text
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

##### 公共，私有与受保护的修饰符

###### 默认为 `public`

在上面的例子里，我们可以自由的访问程序里定义的成员。 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 `public`来做修饰；例如，C#要求必须明确地使用 `public`指定成员是可见的。 在TypeScript里，成员都默认为 `public`。

你也可以明确的将一个成员标记成 `public`。 我们可以用下面的方式来重写上面的 `Animal`类：

```ts
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

###### 理解 `private`

当成员被标记成 `private`时，它就不能在声明它的类的外部访问。比如：

```ts
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // 错误: 'name' 是私有的.
```

TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

然而，当我们比较带有 `private`或 `protected`成员的类型的时候，情况就不同了。 如果其中一个类型里包含一个 `private`成员，那么只有当另外一个类型中也存在这样一个 `private`成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 `protected`成员也使用这个规则。

下面来看一个例子，更好地说明了这一点：

```ts
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.
```

这个例子中有 `Animal`和 `Rhino`两个类， `Rhino`是 `Animal`类的子类。 还有一个 `Employee`类，其类型看上去与 `Animal`是相同的。 我们创建了几个这些类的实例，并相互赋值来看看会发生什么。 因为 `Animal`和 `Rhino`共享了来自 `Animal`里的私有成员定义 `private name: string`，因此它们是兼容的。 然而 `Employee`却不是这样。当把 `Employee`赋值给 `Animal`的时候，得到一个错误，说它们的类型不兼容。 尽管 `Employee`里也有一个私有成员 `name`，但它明显不是 `Animal`里面定义的那个。

###### 理解 `protected`

`protected`修饰符与 `private`修饰符的行为很相似，但有一点不同， `protected`成员在派生类中仍然可以访问。例如：

```ts
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
```

注意，我们不能在 `Person`类外使用 `name`，但是我们仍然可以通过 `Employee`类的实例方法访问，因为 `Employee`是由 `Person`派生而来的。

构造函数也可以被标记成 `protected`。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，

```ts
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
```

##### readonly修饰符

你可以使用 `readonly`关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

##### 参数属性

在上面的例子中，我们必须在`Octopus`类里定义一个只读成员 `name`和一个参数为 `theName`的构造函数，并且立刻将 `theName`的值赋给 `name`，这种情况经常会遇到。 *参数属性*可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前 `Octopus`类的修改版，使用了参数属性：

```ts
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}
```

注意看我们是如何舍弃了 `theName`，仅在构造函数里使用 `readonly name: string`参数来创建和初始化 `name`成员。 我们把声明和赋值合并至一处。

参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 `private`限定一个参数属性会声明并初始化一个私有成员；对于 `public`和 `protected`来说也是一样。

##### 存取器

TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

下面来看如何把一个简单的类改写成使用 `get`和 `set`。 首先，我们从一个没有使用存取器的例子开始。

```ts
class Employee {
    fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
```

我们可以随意的设置 `fullName`，这是非常方便的，但是这也可能会带来麻烦。

下面这个版本里，我们先检查用户密码是否正确，然后再允许其修改员工信息。 我们把对 `fullName`的直接访问改成了可以检查密码的 `set`方法。 我们也加了一个 `get`方法，让上面的例子仍然可以工作。

```ts
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
```

我们可以修改一下密码，来验证一下存取器是否是工作的。当密码不对时，会提示我们没有权限去修改员工。

对于存取器有下面几点需要注意的：

首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 其次，只带有 `get`不带有 `set`的存取器自动被推断为 `readonly`。 这在从代码生成 `.d.ts`文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。

##### 静态属性

到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，我们使用 `static`定义 `origin`，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在 `origin`前面加上类名。 如同在实例属性上使用 `this.`前缀来访问属性一样，这里我们使用 `Grid.`来访问静态属性。

```ts
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
```

##### 抽象类

> 抽象类的理解请访问：https://www.php.cn/java/base/463956.html

抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 `abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```ts
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
```

抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 `abstract`关键字并且可以包含访问修饰符。

```ts
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```

##### 高级技巧

###### 构造函数

当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 *实例*的类型。

```ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
```

这里，我们写了 `let greeter: Greeter`，意思是 `Greeter`类的实例的类型是 `Greeter`。 这对于用过其它面向对象语言的程序员来讲已经是老习惯了。

我们也创建了一个叫做 *构造函数*的值。 这个函数会在我们使用 `new`创建类实例的时候被调用。 下面我们来看看，上面的代码被编译成JavaScript后是什么样子的：

```ts
let Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();

let greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
```

上面的代码里， `let Greeter`将被赋值为构造函数。 当我们调用 `new`并执行了这个函数后，便会得到一个类的实例。 这个构造函数也包含了类的所有静态属性。 换个角度说，我们可以认为类具有 *实例部分*与 *静态部分*这两个部分。

让我们稍微改写一下这个例子，看看它们之间的区别：

```ts
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
```

这个例子里， `greeter1`与之前看到的一样。 我们实例化 `Greeter`类，并使用这个对象。 与我们之前看到的一样。

再之后，我们直接使用类。 我们创建了一个叫做 `greeterMaker`的变量。 这个变量保存了这个类或者说保存了类构造函数。 然后我们使用 `typeof Greeter`，意思是取Greeter类的类型，而不是实例的类型。 或者更确切的说，"告诉我 `Greeter`标识符的类型"，也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数。 之后，就和前面一样，我们在 `greeterMaker`上使用 `new`，创建 `Greeter`的实例。

###### 把类当做接口使用

如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。

```ts
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```

##### 接口

###### 1.接口的概念

- 是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）
- 在TypeScript中，我们使用接口（Interfaces）来定义对象的类型。除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述
  - TypeScript`的核心原则之一是对值所具有的结构进行类型检查， 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

因为interface这个概念在js中并没有，所以interface编译后并不会呈现到js中，只会进行静态的类型检查。

```css
interface Animal {
   color: string;
   height: number;
}
```

赋值的时候，变量的形状必须和接口的形状保持一致

```csharp
const labelVal: Animal = {
   color:'灰色';
   height: 56
};
```

###### 2.可选属性和只读属性

有时我们希望不要完全匹配一个形状，那么可以用可选属性

```tsx
interface Person {
  name: string;
  age: number;
  car?: string;
}
let Lucy: Person = {
  name: 'Lucy Lucy',
  age: 18,
  // car: '宝马'
  // house: '别野'
};
```

可选属性的含义是该属性可以不存在 例如我们的car属性.但仍然不允许添加未定义的属性 例如上面的house属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 `readonly`来指定只读属性
 使用场景：`const`作为变量使用和`readonly`作为属性使用

```csharp
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
```

p1.x = 5; 这样就会报错， 说不能分配一个X值，因为它是只读属性
 关于这里的 let和const的写法 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly

###### 3.任意属性

一个接口可能需要它除了具有我们需要的属性以为，还可以包含任意的其他属性，这时就要用到任意属性
 只要使用了任意属性，就要保证确定属性和可选属性的类型都必须是它的类型的子集

```tsx
interface Person {
  name: string;
  age?: number;
  // 这种方式也叫 字符串索引签名
  // [propName: string]: any;
  [propName: string]: number | string;
}
let tom: Person = {
  name: 'Tommy',
  // age: 20,
  addr: '北京'
};
console.log(tom);
```

上例中 任意属性的值允许的是string， 但可选属性age的值确实number， number不是string类型的子属性，所以编译报错。应该将上例的任意属性 变换为 [propName: string]: any; 或者是 number|string，这样的话addr也都不会报错。

###### 4.函数类型

- 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
- 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的(通俗的讲就是函数调用和函数接口定义的参数位置和都必须一一对应)

之前我们在学习函数的时候给大家提过一点，函数也是一种数据类型，我们也可以通过接口的形式定义一个函数类型
 函数表达式的方式定义add，add在此时是通过类型推断的方式被动的被定义为函数类型



```tsx
let add = function(x: number, y: number): number {
  return x + y;
};
add(1, 2);
```

接下来通过手动的方式将add1定义为函数类型：

```tsx
let add1: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
};
add1(1, 2);
```

上面代码的最大缺点是不方便进行复用
 现在使用函数类型接口进行更优雅和更易复用的定义：

```tsx
interface MyTypeFn {
  (x: number, y: number): number;
}
let add2:MyTypeFn; 
add2= function(x: number, y: number): number {
  return x + y;
};
add2(1, 2);
```

###### 5.可索引属性

- 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如`a[10]`或`ageMap["daniel"]`
- 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型

下面接口里的代码表示索引是数字， 通过索引访问对象里面的值返回数字类型

```tsx
interface MyIndex {
  [index: number]: number;
}
let arr1: MyIndex;
arr1 = {
  0: 1,
  1: 2
};
let arr2: MyIndex;
arr2 = [2, 3];
```

arr1和arr2都是正常的，这代表MyIndex接口类型，定义的数据有两种方式实现，一个是对象一个是数组
 下面接口里的索引是字符串， 通过索引访问对象里面的值返回字符串类型

```csharp
interface MyIndex1 {
  [index: string]: string;
}
let arr2: MyIndex1;
arr2 = {
  '0': 'red',
  '1': 'blue'
};
```

TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是要注意：
 数字索引的返回值必须是字符串索引返回值类型的子类型或者相同；因为`obj[100]`等同于`obj['100']`（obj[100]会被自动转换为obj['100']）

```csharp
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
let c1 = new Dog();
let c2 = new Animal();
// 错误：使用数值型的字符串索引的返回值Animal不是 使用字符串索引y的返回值Dog  的派生类类， 而是基类
interface NotOkay {
   // [Index: number]: Animal;  //number索引的返回值  一定要是 string索引返回值得 派生类或者相同类
   [Index: number]: Dog; 
   [Index: string]: Animal; // 这里写Dog也可以， 相同或者基类都是可以的，另外把这里的Index改为x其他字符都是可以的，这里的Index只是起到一个标识的作用
}
let a1: NotOkay = {
  2: c1,
  age: c2
};
```

###### 6.类接口

类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类

```tsx
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};
```

###### 7.泛型接口

使用泛型接口， 可复用的支持任意传入参数
 和我们之前学过的函数类型接口有点相似

```tsx
let fn3 = function(x: string, y: string): string[] {
     return [x, y];
};
```

上面的fn3函数的类型我们没有定义，是利用的 类型推论自动获取的，现在使用接口来定义一个符合我们这个函数需要的形状。并且声明一个带类型的函数fn3

```csharp
interface MyFn {
     (x: string, y:string): string[]
}
let fn3:MyFn;
```

这个类型再修改一下，增加接口的复用性，将参数string换成动态的，由使用者决定；那么我们就需要使用泛型



```csharp
interface MyFn {
     <T>(x: T, y: T):T[]
}
let fn3:MyFn;
```

到这里我们的这个函数接口形状就已经完成，还可以将泛型参数提升到我们的接口名称上

```tsx
interface MyFn<T> {
     (x: T, y:T): T[]
}
let fn3:MyFn;
```

到这里我们的函数类型就可以传入任意类型的值，这个接口形状可复用性就更高了

###### 8.接口继承接口

和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里

```tsx
interface Animal {
  color: string;
}
interface Dog extends Animal {
  bodyLength: number;
}
let mydog: Dog = <Dog>{};
mydog.color = 'blue';
mydog.bodyLength = 10;
```

一个接口可以继承多个接口，创建出多个接口的合成接口

```tsx
interface Animal {
  color: string;
}
interface Dog {
  bodyLength: number;
}
// angular里面大量的使用类继承自多个内置类
interface GreyDog extends Animal, Dog {
  only: string;
}
let mydog: GreyDog = <GreyDog>{};
mydog.color = 'blue';
mydog.bodyLength = 10;
mydog.only = '我的阿黄';
```

###### 9.接口继承类

当接口继承了一个类类型时，它会继承类的成员但不包括其实现；就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样

```tsx
class Animal {
   name: string;
   // move: (x: string, y: number) => string;
   move() {
       console.log(123);
   }
}
interface Dog extends Animal {
  eat(): void;
}
let d1: Dog = {
  name: '阿黄',
  move() {
    console.log(456);
   },
   // move(x: string, y: number) {
   //   console.log(123);
   //   return x;
   // },
   eat() {
     console.log(123);
   }
 };
```

###### 10.类实现（implements）接口

TypeScript能够用它来明确的强制一个类去符合某种契约
 实现（implements）
 是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性; 这个implements在angular里面也有大量的使用

```dart
interface Alarm {
   // 定义一个公用的方法，具体的实现在实现的类里面去实现
   warning():void;
}
class Door implements Alarm {
   warning() {
     console.log('门报警器');
   }
}
class Car implements Alarm {
   warning() {
     console.log('车报警器');
   }
}
class Baoma extends Car implements Alarm {
   warning() {
     console.log('宝马车报警器');
   }
}
```

这个案例里面 车和门都有报警功能，所以将这个公共的功能抽离出来封装为一个接口
 需要这个功能的类比如Car  Door  Baoma  等去实现这个接口 implements即可
 要注意的是在接口里面是方法的签名，在类里面进行方法体的实现

```csharp
let d1 = new Door();
let c1 = new Car();
let b1 = new Baoma();
d1.warning();
b1.warning();
```

这个打印只有两个属性； warning这个方法是绑定在构造函数Baoma的原型对象prototype上面的，可以在浏览器里面查看

```cpp
console.log(b1);
```

##### 泛型

> 泛型可以理解为宽泛的类型，通常用于类和函数

###### 一、泛型类

泛型可以用于类和构造器，例如：

```tsx
class Person<T>{
    private _value: T;
    constructor(val: T) {
        this._value = val;
    }
}
let p = new Person<number>(12)
```

如上，`<T>`表示传递一个`T`类型，在`new`的时候才把具体类型传入。其中T是变量可改，但通常比较常见就是写`T`
 之前说`TypeScript`类型的时有说到数组，其实数组本质就是一个泛型类

```tsx
let a = new Array<number>();
```

###### 二、泛型函数

泛型可以用于普通函数，例如：

```rust
function fn<T>(arg: T): T {
    return arg;
}
fn<number>(12);
```

其实不管是用于类还是用于函数，核心思想都是：把类型当一种特殊的参数传入进去

需要注意的是泛型也可以“继承”，但表示的是限制范围
 例如

```jsx
class Person<T extends Date>{
    private _value: T;
    constructor(val: T) {
        this._value = val;
    }
}
let p1 = new Person(new Date())

class MyDate extends Date{}
let p2 = new Person(new MyDate())
```

泛型可以同时指定多个

```
function fn<T,K>(a: T, b: K): T {
	console.log(b)
	return a;
}
```



##### 在浏览器中运行TS

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220406.png" alt="image-20201122140542944" style="zoom:67%;" />

或者生成使用tsc --init生成tsconfig.json文件，然后vscode运行：终端 -> 运行任务 ->typescript就可以自动监视生成js了

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220411.png" alt="image-20201122141620490" style="zoom:67%;" />

##### 项目配置

###### 概述

如果一个目录下存在一个`tsconfig.json`文件，那么它意味着这个目录是TypeScript项目的根目录。 `tsconfig.json`文件中指定了用来编译这个项目的根文件和编译选项。 一个项目可以通过以下方式之一来编译：

###### 使用tsconfig.json

- 不带任何输入文件的情况下调用`tsc`，编译器会从当前目录开始去查找`tsconfig.json`文件，逐级向上搜索父目录。
- 不带任何输入文件的情况下调用`tsc`，且使用命令行参数`--project`（或`-p`）指定一个包含`tsconfig.json`文件的目录。

当命令行上指定了输入文件时，`tsconfig.json`文件会被忽略。

###### 示例

`tsconfig.json`示例文件:

- 使用`"files"`属性

  ```json
  {
      "compilerOptions": {
          "module": "commonjs",
          "noImplicitAny": true,
          "removeComments": true,
          "preserveConstEnums": true,
          "sourceMap": true
      },
      "files": [
          "core.ts",
          "sys.ts",
          "types.ts",
          "scanner.ts",
          "parser.ts",
          "utilities.ts",
          "binder.ts",
          "checker.ts",
          "emitter.ts",
          "program.ts",
          "commandLineParser.ts",
          "tsc.ts",
          "diagnosticInformationMap.generated.ts"
      ]
  }
  ```

- 使用`"include"`和`"exclude"`属性

  ```json
  {
      "compilerOptions": {
          "module": "system",
          "noImplicitAny": true,
          "removeComments": true,
          "preserveConstEnums": true,
          "outFile": "../../built/local/tsc.js",
          "sourceMap": true
      },
      "include": [
          "src/**/*"
      ],
      "exclude": [
          "node_modules",
          "**/*.spec.ts"
      ]
  }
  ```

###### 细节

`"compilerOptions"`可以被忽略，这时编译器会使用默认值。在这里查看完整的[编译器选项](https://www.tslang.cn/docs/handbook/compiler-options.html)列表。

`"files"`指定一个包含相对或绝对文件路径的列表。 `"include"`和`"exclude"`属性指定一个文件glob匹配模式列表。 支持的glob通配符有：

- `*` 匹配0或多个字符（不包括目录分隔符）
- `?` 匹配一个任意字符（不包括目录分隔符）
- `**/` 递归匹配任意子目录

如果一个glob模式里的某部分只包含`*`或`.*`，那么仅有支持的文件扩展名类型被包含在内（比如默认`.ts`，`.tsx`，和`.d.ts`， 如果 `allowJs`设置能`true`还包含`.js`和`.jsx`）。

如果`"files"`和`"include"`都没有被指定，编译器默认包含当前目录和子目录下所有的TypeScript文件（`.ts`, `.d.ts` 和 `.tsx`），排除在`"exclude"`里指定的文件。JS文件（`.js`和`.jsx`）也被包含进来如果`allowJs`被设置成`true`。 如果指定了 `"files"`或`"include"`，编译器会将它们结合一并包含进来。 使用 `"outDir"`指定的目录下的文件永远会被编译器排除，除非你明确地使用`"files"`将其包含进来（这时就算用`exclude`指定也没用）。

使用`"include"`引入的文件可以使用`"exclude"`属性过滤。 然而，通过 `"files"`属性明确指定的文件却总是会被包含在内，不管`"exclude"`如何设置。 如果没有特殊指定， `"exclude"`默认情况下会排除`node_modules`，`bower_components`，`jspm_packages`和`<outDir>`目录。

任何被`"files"`或`"include"`指定的文件所引用的文件也会被包含进来。 `A.ts`引用了`B.ts`，因此`B.ts`不能被排除，除非引用它的`A.ts`在`"exclude"`列表中。

需要注意编译器不会去引入那些可能做为输出的文件；比如，假设我们包含了`index.ts`，那么`index.d.ts`和`index.js`会被排除在外。 通常来讲，不推荐只有扩展名的不同来区分同目录下的文件。

`tsconfig.json`文件可以是个空文件，那么所有默认的文件（如上面所述）都会以默认配置选项编译。

在命令行上指定的编译选项会覆盖在`tsconfig.json`文件里的相应选项。

###### `@types`，`typeRoots`和`types`

默认所有*可见的*"`@types`"包会在编译过程中被包含进来。 `node_modules/@types`文件夹下以及它们子文件夹下的所有包都是*可见的*； 也就是说， `./node_modules/@types/`，`../node_modules/@types/`和`../../node_modules/@types/`等等。

如果指定了`typeRoots`，*只有*`typeRoots`下面的包才会被包含进来。 比如：

```json
{
   "compilerOptions": {
       "typeRoots" : ["./typings"]
   }
}
```

这个配置文件会包含*所有*`./typings`下面的包，而不包含`./node_modules/@types`里面的包。

如果指定了`types`，只有被列出来的包才会被包含进来。 比如：

```json
{
   "compilerOptions": {
        "types" : ["node", "lodash", "express"]
   }
}
```

这个`tsconfig.json`文件将*仅会*包含 `./node_modules/@types/node`，`./node_modules/@types/lodash`和`./node_modules/@types/express`。/@types/。 `node_modules/@types/*`里面的其它包不会被引入进来。

指定`"types": []`来禁用自动引入`@types`包。

注意，自动引入只在你使用了全局的声明（相反于模块）时是重要的。 如果你使用 `import "foo"`语句，TypeScript仍然会查找`node_modules`和`node_modules/@types`文件夹来获取`foo`包。

###### 使用`extends`继承配置

`tsconfig.json`文件可以利用`extends`属性从另一个配置文件里继承配置。

`extends`是`tsconfig.json`文件里的顶级属性（与`compilerOptions`，`files`，`include`，和`exclude`一样）。 `extends`的值是一个字符串，包含指向另一个要继承文件的路径。

在原文件里的配置先被加载，然后被来至继承文件里的配置重写。 如果发现循环引用，则会报错。

来至所继承配置文件的`files`，`include`和`exclude`*覆盖*源配置文件的属性。

配置文件里的相对路径在解析时相对于它所在的文件。

比如：

`configs/base.json`：

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

`tsconfig.json`：

```json
{
  "extends": "./configs/base",
  "files": [
    "main.ts",
    "supplemental.ts"
  ]
}
```

`tsconfig.nostrictnull.json`：

```json
{
  "extends": "./tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

###### `compileOnSave`

在最顶层设置`compileOnSave`标记，可以让IDE在保存文件的时候根据`tsconfig.json`重新生成文件。

```json
{
    "compileOnSave": true,
    "compilerOptions": {
        "noImplicitAny" : true
    }
}
```

要想支持这个特性需要Visual Studio 2015， TypeScript1.8.4以上并且安装[atom-typescript](https://github.com/TypeStrong/atom-typescript#compile-on-save)插件。

###### 模式

到这里查看模式: http://json.schemastore.org/tsconfig.

##### 学习资源

博客：http://ts.xcatliu.com/basics/primitive-data-types.html