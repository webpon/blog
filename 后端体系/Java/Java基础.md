- [Java简介](#java简介)
  - [三大体系](#三大体系)
  - [Java语言的特点](#java语言的特点)
  - [Java组成](#java组成)
- [常用的DOS命令](#常用的dos命令)
- [环境搭建](#环境搭建)
  - [安装JDK](#安装jdk)
  - [环境变量的配置](#环境变量的配置)
- [idea使用](#idea使用)
- [基本使用](#基本使用)
- [基本语法](#基本语法)
  - [变量、常量](#变量常量)
  - [数据类型](#数据类型)
  - [类型转换](#类型转换)
    - [自动类型转换](#自动类型转换)
    - [强制类型转换](#强制类型转换)
  - [转义符](#转义符)
  - [运算符](#运算符)
  - [关键字](#关键字)
  - [运算符](#运算符-1)
    - [算术运算符](#算术运算符)
    - [关系运算符](#关系运算符)
    - [位运算符](#位运算符)
    - [逻辑运算符](#逻辑运算符)
    - [赋值运算符](#赋值运算符)
    - [条件运算符（?:）](#条件运算符)
    - [instanceof 运算符](#instanceof-运算符)
    - [Java运算符优先级](#java运算符优先级)
  - [循环结构](#循环结构)
  - [switch case 语句](#switch-case-语句)
#### Java简介

> Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的高级程序设计语言。
>
> Java 可运行于多个平台，如 Windows, Mac OS 及其他多种 UNIX 版本的系统。
>
> 本教程通过简单的实例将让大家更好的了解 Java 编程语言。
>
> Java基础是学习JavaEE、大数据、Andriod开发的基石！

##### 三大体系

Java分为三个体系，分别为Java SE（J2SE，Java2 Platform Standard Edition，标准版），

JavaEE（J2EE，Java 2 Platform, Enterprise Edition，企业版），

Java ME（J2ME，Java 2 Platform Micro Edition，微型版）。

JavaSE

它允许开发和部署在桌面、服务器、嵌入式环境和实时环境中使用的 Java 应用程序。Java SE 包含了支持 Java Web 服务开发的类，并为 Java Platform，Enterprise Edition（Java EE）提供基础。

**JavaEE**

JavaEE是在JavaSE的基础上构建的，用来开发B/S架构软件，也就是开发企业级应用，所以称为企业版
	  帮助开发和部署可移植、健壮、可伸缩且安全的服务器端 Java 应用程序。Java EE 是在 Java SE 的基础上构建的，它提供 Web 服务、组件模型、管理和通信 API，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和 Web 2.0 应用程序。

**JavaME**

Java ME为在移动设备和嵌入式设备（比如手机、PDA、电视机顶盒和打印机）上运行的应用程序提供一个健壮且灵活的环境。Java ME包括灵活的用户界面、健壮的安全模式、许多内置的网络协议以及对于动态下载的连网和离线应用程序的丰富支持。基于Java ME规范的应用程序只需要编写     	  一次，就可以用于许多设备，而且可以利用每个设备的本级功能。

再总结一下，JavaSE是Java的基础，主要针对桌面程序开发；JavaEE是针对企业级应用开发；而JavaME是主要针对嵌入式设备软件开发

##### Java语言的特点

​		**特点一：面向对象**

​				`两个基本概念`：类、对象

​				`三大特性`：封装、继承、多态

​		**特点二：健壮性**

​				吸收了C/C++语言的优点，但去掉了其影响程序健壮性的部分（如指针、内存的申请与释放等），提供了一个相对安全的内存管理

​				和访问机制

​		**特点三：跨平台性**

​				`跨平台性`：通过Java语言编写的应用程序在不同的系统平台上都可以运行。“Write once , Run Anywhere"

​				原理：只要在需要运行java应用程序的操作系统上，先安装一个Java虚拟机（JVM Java Virtual Machine)即可。由JVM

​						  来负责Java程序在该系统中的运行。

##### Java组成

●Java编程语言，即语法。

●Java文件格式，即各种文件夹、文件的后缀。

●Java虚拟机(JVM——Java Virtal Machine)，即处理*.class文件的解释器。

​		<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220832.png" alt="image-20201229222307781" style="zoom:80%;" />

●Java应用程序接口(Java API)。

#### 常用的DOS命令

1、dir: 列出当前目录下的文件以及文件夹

2、md: 创建目录

3、rd: 删除目录

4、cd: 进入指定目录

5、cd ..：退回到上一级目录

6、cd \：退回到根目录

7、del：删除文件

8、exit：退出dos命令行

9、cls：清空dos页面内容

10、切换盘符输入盘符名加：就行，例：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220837.png" alt="image-20201229212811291" style="zoom: 80%;" />

`注：windows不区分大小写`

#### 环境搭建

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220840.png" alt="image-20201229222809508" style="zoom:80%;" />

![image-20201229222838773](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220843.png)

##### 安装JDK

1、双击安装包 

​	![image-20201229223143747](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505221934.png) 

2、直接全按下一步，也可以更换安装路径

​	<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505221926.png" alt="image-20201229223340203" style="zoom:80%;" />

3、这时候可能会弹出一个jre安装弹窗，可以直接关掉，建议安装，也是直接全部下一步就行了

​	<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220849.png" alt="image-20201229223536841" style="zoom:80%;" />

4、安装完成

​	<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220852.png" alt="image-20201229223612020" style="zoom:80%;" />

5、打开安装目录

​    <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220855.png" alt="image-20201229224055374" style="zoom:80%;" />

**我们运行java程序的流程是：**

创建一个.java后缀文件

![image-20201229224350615](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220859.png)

编写代码并保存：

```
     class HelloWorld{
           public static void main(String[] args){
               System.out.printf("Hello World");
           }
     }
```

利用`javac.exe`程序把.java文件编译成.class文件

![image-20201229224620808](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220901.png)

这时候在.java文件目录下就会生成一个.class文件了

我们再用`java.exe`程序运行.class文件

![image-20201229224800391](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220904.png)

但是上面使用`javac.exe`和`java.exe`是不能直接使用的，我们`需要配置环境变量`

##### 环境变量的配置

最简单配置方式：

​	<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220908.png" alt="image-20201229225221362" style="zoom:67%;" />

把javaJDK的文件目录下的bin目录路径复制到Path环境变量下就行了

第二中配置方式（推荐）：

​		第一步：先建立一个变量

​					<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220911.png" alt="image-20201229225415655" style="zoom:67%;" />

​		第二部：在Path变量引用上面的变量

​					<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220914.png" alt="image-20201229225455326" style="zoom:67%;" />

​		最后，测试：

​					<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220917.png" alt="image-20201229225538874" style="zoom:80%;" />

​		完美成功

#### idea使用

> 安装与激活教程https://www.ajihuo.com/soft/4329.html

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625025815874.png" alt="image-20220625025815874" style="zoom:50%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625030518094.png" alt="image-20220625030518094" style="zoom: 50%;" />

#### 基本使用

1. **java程序编写-编译-运行的过程**

  <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220920.png" alt="image-20201229233248830" style="zoom:67%;" />

  编写：我们将编写的java代码保存在以".java"结尾的源文件中

```
 class HelloWorld{
           public static void main(String[] args){
               System.out.printf("Hello World");
           }
     }
```

  编译：使用javac.exe命令编译我们的java源文件。格式：javac 源文件名.java

  ![image-20201229224620808](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220924.png)

  运行：使用java.exe命令解释运行我们的字节码文件。 格式：java 类名

  <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227220927.png" alt="image-20201229233248830" style="zoom:80%;" />

2. **在一个java源文件中可以声明多个class。但是，只能最多有一个类声明为public的。**
   **而且要求声明为public的类的类名必须与源文件名相同.**

3. **程序的入口是main()方法。格式是固定的**。
4. **输出语句：**
   System.out.println():先输出数据，然后换行
   System.out.print():只输出数据
5. **每一行执行语句都以";"结束。**
6. **编译的过程：编译以后，会生成一个或多个字节码文件。字节码文件的文件名与java源文件中的类名相同。**

#### 基本语法

##### 变量、常量

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625105554554.png" alt="image-20220625105554554" style="zoom:67%;" />

**标识符**

> 标识符就是由一些字符、符号组合起来的名称，用于给类，方法，变量等起名字的规矩。

标识符的要求：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625114851373.png" alt="image-20220625114851373" style="zoom:50%;" />

```
    变量名：全部大写字母组成
    
    包名：小写组成  域名倒置   com.baidu  com.wenyue
    
    常量：final 数据类型 常量名 = 值； 值不可以改变。
    
    变量：可以改变
    
    数据类型  变量名 = 值；
```

示例：

```
    final double PI;
    PI = 3.14;
    //PI = 3.23;  //常量只能赋值一次
    int $c = 100;
    System.out.println("$c="+$c);
    //进制：
    int  a = 010;
    System.out.println(a);
    int b = 0xa1;
    System.out.println(b);
```

```
    // 1、变量需要先声明再使用
    int a = 23;
    System.out.println(a);
    // 2、变量声明后，不能存储其他类型的数据
    // 错误 a = 1.5;
    // 3、变量的有效范围是从定义开始到“}”截至，且在同一个范围内部不能定义2个同名的变量
    {
    int b = 25;
    System.out.println(b);
    // int b = 100;  // 报错
    }
    // int a = 234; // 报错
    a = 200; // 这里不是定义，在赋值
    // 4、变量定义的时候可以没有初始值，但是使用的时候必须给初始值；
    int c;
    // System.out.println(c);  // 错误
```

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625113236666.png" alt="image-20220625113236666" style="zoom:50%;" />

##### 数据类型

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625113528115.png" alt="image-20220625113528115" style="zoom:50%;" />

```
    基本数据类型：
        整型：byte（1字节 -128~127 Byte） short（2字节 -32768~32767 Short） int（4字节 -2147483648~2147483647  Integer） long（8字节  0L   Long）
        浮点型：float（4字节 Float 0.0f） double（8字节  Double）
        字符型：char（2字节  Character）
        布尔型：boolean  （true   false   Boolen）
    引用数据类型:
        类  class
        数组  array
        接口 interface

     byte b1 = 10;
    //byte b2 = 200;  越界
    // 浮点型（小数）
    // float单精度 占4个字节
    // 注意：随便写一个小数字面量默认是double类型，如果希望随便写一个小数字面量是float类型的需要在其后面加上F或者f
    float score = 98.5F;
```

关键字

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625114556237.png" alt="image-20220625114556237" style="zoom:50%;" />



##### 类型转换

> 类型范围小的变量，可以直接赋值给类型范围大的变量

```
数据类型转换：
		自动类型转换：小--->大
			byte,short,char-->int-->long-->float-->double
			char可按照ASCII进行转换：a--》 97   A--》 65  0--》 48  
		强制类型转换：大--> 小
			（目标类型）变量
```

###### 自动类型转换

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220626093750498.png" alt="image-20220626093750498" style="zoom:50%;" />

示例：

```
// 自动类型转换
float f = 4.5f;
short s = 45;
double d = 10.5;
double sum = b+a+f+s+d;//结果自动提升为double类型
// 如果相加数大于自身类型会自动转换成int
byte i = 100;
byte j = 110;
// byte k = i + j;   //报错
int k = i + j;
System.out.println(k);

byte a = 20;
int b = a;  // 发生了自动转换
System.out.println(a);
System.out.println(b);

int age = 23;
double db = age; // 自动转换类型
System.out.println(db);     // 输出23.0

char ch = 'a';   // 00000000 01100001
int code = ch;   // 00000000 00000000 00000000 01100001
System.out.println(code);   // 输出97
```

注意事项：

- 表达式的最终结果类型由表达式中的最高类型决定。
- 在表达式中，byte、short、char 是直接转换成int类型参与运算的。

###### 强制类型转换

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220626095617597.png" alt="image-20220626095617597" style="zoom: 50%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220626095839111.png" alt="image-20220626095839111" style="zoom:50%;" />

##### 转义符

```
  转义：有格式的输出。通过\改变后面跟随的字符的含义
	\t:制表位
	\n：换行
	\\：斜杠
	\"：双引号
	\r\n:回车换行
```

##### 运算符

- 逻辑运算符: &&(逻辑与) ||（逻辑或） !（逻辑非） & | ^ 异或

  ```
    a&&b（短路）:如果a为false，则结果为false。b将不被判断
    a&b:如果a为false，结果为false。b会进行判断。a与b都会执行。
    a||b（短路）:如果a为true，则结果为true。b将不被判断
    a|b:如果a为true，结果为true。b会进行判断。a与b都会执行。
    a^b:相同为false，不同为true。
  ```

- 条件运算符： **三目运算符 ？ ：**

> ```
> 条件表达式?语句1：语句2； //当表达式为true，结果为语句1，否则为语句2
> ```

- 字符串连接符 +

- 位运算符： &(按位与) |（按位或） ^（按位异或） ~（按位取反） >>（右移） <<（左移） >>>（无符号右移）

- 进制转换：

  ```
    十进制---》二进制 : 除2取余  10--》1010
    二进制 --》十进制  ：位权 * 符号^(n-1)
    (1010)二---->（0*2^0+1*2^1+0*2^2+1*2^3） =10
    八进制---》二进制 
    1)通过十进制转换
    2) 773 八--> 111 111 011  二
  ```

示例：

```
    int a = 4, b =3;
    int c = a++ + ++b + ++a; // c = 4 + 4 + 6
    int d = --b + ++a/2 - b++%2; // d = 3 + 7/2 – 3%2 
    System.out.println("a=" + a + ",b=" + b + ",c=" + c + ",d=" + d);  //a=7; b=4; c=10; d=5
```

位运算示例：

```
    System.out.println(5&3); //1
    System.out.println(5|3); //7
    System.out.println(5^3);  //6
            5 : 0000 0101
            3 : 0000 0011

            0101
          & 0011
            0001   //1

            0101
          | 0011
            0111   //7

            0101
          ^ 0011
            0110   //6
    System.out.println(~5);
    /*
       ~5 = -6
       0000 0101
       1111 1010  (取反)-->  -1 1111 1001  -->取反 0000 0110
       每一位数取反，0即为1,1即为0.
       如果出现负数，就按照负数的方式进行转换
       如果正数取反，+1 ，得到真实的数

       正数：原码 --》3  11
       负数:  -3
      原码： 0000 0011
      反码:  1111 1100
      +1 1111 1101
    */
    //二进制输出使用：Integer.toBinaryString()
    System.out.println(Integer.toBinaryString(10));
       System.out.println(Integer.toBinaryString(-5));
    /*
       -5：
       5的原码：  0000 0101
       5的补码：  1111 1010
     +1:  1111 1011
    负数的二进制 就是正数的补码+1

    9二进制：0000 0000 0000 0000 0000 0000 0000 1001
    -9二进制：
    9 原码：0000 0000 0000 0000 0000 0000 0000 1001
    9 反码：1111 1111 1111 1111 1111 1111 1111 0110
      +11111 1111 1111 1111 1111 1111 1111 0111

    */
```

相关工具：

```
    System.out.println(Integer.toBinaryString(-9));
    Integer.toBinaryString(a) :二进制
    Integer.toHexString(a):十六进制
    Integer.toOctalString(a):八进制
    Integer.MAX_VALUE :int类型的最大值
    Integer.MIN_VALUE:int类型最小值

    十六进制转十进制
    Integer.valueOf(a+"",16)
    八进制转十进制
    Integer.valueOf(a+"",8)
    二进制转十进制
    Integer.valueOf(a+"",2)
```

位操作举例：

```
    System.out.println(6>>2);//6*1/4=1
    System.out.println(6<<2);//6*4=24
    System.out.println("-6>>2="+(-6>>2));//-6*1/4=-2
    System.out.println("-13>>2="+(-13>>2));//-14*1/4=-4
    System.out.println("-12>>2="+(-12>>2));//-12*1/4=-3
    System.out.println("-6/4="+(-6/4));//-6*1/4=-1
    System.out.println("-1/4="+(-1/4));//-1*1/4=0
    System.out.println("-6>>>2="+(-6>>>2));//21073741822
```

**最有效的方式计算2\*8 = 2 \* 2^3**

```
    System.out.println(2<<3);
```

进行两个数互换

```
    int a = 5 , b = 10;
    //第一种方法
    int c = a;
    a = b ;
    b = c;
    // 第二种方法
    a = a+b;  //可能溢出
    b = a - b;
    a = a - b;
    //第三种方法（优先使用）
    a = a ^ b ;
    b = a^ b;//a ^ b ^ b
    a = a ^ b;  //a ^ b ^ a
    System.out.println("a="+a+",b="+b);
```

------

有三个数，获得最大值

```
	int  x = 10 , y = 20 , c = 5;
	int t = x > y ? x : y;
	int max = t > c ? t : c;
	System.out.println("max="+max);
	*/
```

------

将一个十进制转换为十六进制（位运算符）

```
	//思路：
	/*
		1 转换成二进制，取第四位，判断是不是大于10，如果大于10，则转换成a~f
		2 右移四位，再重复第一步，直到值为0时，中断
	*/
	int num  = 30;   //0001 1110
	int n = num & 15;//0000 1110   低四位
	num = num >> 4 ;//取下一个四位数
	char c = (char)(n - 10 + 'a');
	System.out.println("0x"+num+c);
```

------

判断闰年

```
	int year = input.nextInt();
	if(year %4 ==0 && year %100!=0 || year % 400==0){
		System.out.println("闰年");
	}
	else{
		System.out.println("平年");
	}
```

------

产生随机数

```
    double Math.random()--->0-1
    //Math.random()*(大数-小数+1)+小数 //(小数，大数)范围的数
```

------

九九乘法表

```
    int i = 1;
        while(i<=9){
            int j = 1;
            do{
                System.out.print(j+"*"+i+"="+i*j+"\t");
                j++;
            }while(j<=i);
            System.out.println();
            i++;
        }
```

------

菱形

```
	/*
			*
		   ***
		  *****
		 *******
		  *****
		   ***
		    *
	
	*/
	for(int i = 1;i<=4;i++){ //行
		//空格
		for(int j=1;j<=4-i;j++){
			System.out.print(" ");
		}
		//变量作用域：从声明的位置开始，到它所在的结构结束为止
		//星号
		for(int j=1;j<= 2*i-1;j++){
			System.out.print("*");
		}
			//换行
		System.out.println();
	}
	for(int i = 1 ; i<=3 ;i++){
		//空格
		for(int j=1;j<=i;j++){
			System.out.print(" ");
		}
		//星号
		for(int j=1;j<=7-2*i;j++){
			System.out.print("*");
		}
		//换行
		System.out.println();
	}
```

------

空心菱形

```
 /*
	   *
	  * *
	 *   *
	*     *
	 *   *
	  * *
	   *
 */
   for(int i = 1;i<=4;i++){ //行
		//空格
		for(int j=1;j<=4-i;j++){
			System.out.print(" ");
		}
		//变量作用域：从声明的位置开始，到它所在的结构结束为止
		//星号
		for(int j=1;j<= 2*i-1;j++){
			if(j==1 || j==2*i-1)
				System.out.print("*");
			else
				System.out.print(" ");
		}
			//换行
		System.out.println();
	}
	for(int i = 1 ; i<=3 ;i++){
		//空格
		for(int j=1;j<=i;j++){
			System.out.print(" ");
		}
		//星号
		for(int j=1;j<=7-2*i;j++){
			if(j==1 || j==7-2*i)
				System.out.print("*");
			else
				System.out.print(" ");
		}
		//换行
		System.out.println();
	}
```

------

\####switch 结构 switch(表达式){ //byte short int char 枚举（jdk1.5 enum） String（jdk1.7） case 常量1： 语句1； break； case 常量2： 语句2； break； ... default： 语句n; break; }

注意：

```
1 break可有可无
2 case后面的常量值一定不能相同。
3 表达式类型
4 case后的语句可以省略
switch(表达式){
	case  常量1：
	case 常量2：
	case 常量3：
		语句1；
		break；

}
```

------

- for、while、do-while何时采用？

> 已知循环次数：首选for 循环次数未知：首选while、do-while 如果循环结束后，循环的变量不需要继续使用，可以for

- if和switch何时采用？

> 区间判断：if 等值判断：switch



##### 关键字

> 定义：被Java语言赋予了特殊含义，用做专门用途的字符串（单词）
>
> 特点：关键字中所有字母都位=为小写

#####  运算符

> 对字面量或变量进行操作的符号

计算机的最基本用途之一就是执行数学运算，作为一门计算机语言，Java也提供了一套丰富的运算符来操纵变量。我们可以把运算符分成以下几组：

- 算术运算符
- 关系运算符
- 位运算符
- 逻辑运算符
- 赋值运算符
- 其他运算符

###### 算术运算符

算术运算符用在数学表达式中，它们的作用和在数学中的作用一样。下表列出了所有的算术运算符。

表格中的实例假设整数变量A的值为10，变量B的值为20：

| 操作符 | 描述                              | 例子                               |
| :----- | :-------------------------------- | :--------------------------------- |
| +      | 加法 - 相加运算符两侧的值         | A + B 等于 30                      |
| -      | 减法 - 左操作数减去右操作数       | A – B 等于 -10                     |
| *      | 乘法 - 相乘操作符两侧的值         | A * B等于200                       |
| /      | 除法 - 左操作数除以右操作数       | B / A等于2                         |
| ％     | 取余 - 左操作数除以右操作数的余数 | B%A等于0                           |
| ++     | 自增: 操作数的值增加1             | B++ 或 ++B 等于 21（区别详见下文） |
| --     | 自减: 操作数的值减少1             | B-- 或 --B 等于 19（区别详见下文） |

实例：

```
// 目标：掌握基本的算术运算符的使用：+ - * / %
int a = 10;
int b = 3;
System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println(a / b);         // 3.3333   ===> 3
System.out.println(a * 1.0 / b);   // 3.3333
System.out.println(3 / 2);         // 1
System.out.println(3 * 1.0 / 2);   // 1.5
System.out.println(3 / 2 * 1.0);   // 1.0
```

**自增自减运算符**

> **1、自增（++）自减（--）运算符**是一种特殊的算术运算符，在算术运算符中需要两个操作数来进行运算，而自增自减运算符是一个操作数。

**实例**

```
public class selfAddMinus{
    public static void main(String[] args){
        int a = 3;//定义一个变量；
        int b = ++a;//自增运算
        int c = 3;
        int d = --c;//自减运算
        System.out.println("进行自增运算后的值等于"+b);
        System.out.println("进行自减运算后的值等于"+d);
    }
}
```

运行结果为：

```
进行自增运算后的值等于4
进行自减运算后的值等于2
```

解析：

- int b = ++a; 拆分运算过程为: a=a+1=4; b=a=4, 最后结果为b=4,a=4
- int d = --c; 拆分运算过程为: c=c-1=2; d=c=2, 最后结果为d=2,c=2

**2、前缀自增自减法(++a,--a):** 先进行自增或者自减运算，再进行表达式运算。



**3、后缀自增自减法(a++,a--):** 先进行表达式运算，再进行自增或者自减运算 实例：

**实例**

```
public class selfAddMinus{
    public static void main(String[] args){
        int a = 5;//定义一个变量；
        int b = 5;
        int x = 2*++a;
        int y = 2*b++;
        System.out.println("自增运算符前缀运算后a="+a+",x="+x);
        System.out.println("自增运算符后缀运算后b="+b+",y="+y);
    }
}
```

运行结果为：

```
自增运算符前缀运算后a=6，x=12
自增运算符后缀运算后b=6，y=10
```

**"+"连接符**

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220626110314817.png" alt="image-20220626110314817" style="zoom:50%;" />

```
int a = 5;
System.out.println("abc" + 'a');   // abca
System.out.println("abc" + a);     // abc5
System.out.println(5 + a);         // 10
System.out.println("abc" + 5 + 'a');  // 15abc15
System.out.println(a + 'a');       // 102
System.out.println(a + "" + 'a');  // 5a
System.out.println(a  + 'a' + "abc");  // 102abc
System.out.println("abc" + a + 'a');   // abc5a
System.out.println("abc" + (a + 'a')); // abc102
```



###### 关系运算符

下表为Java支持的关系运算符

表格中的实例整数变量A的值为10，变量B的值为20：

| 运算符 | 描述                                                         | 例子             |
| :----- | :----------------------------------------------------------- | :--------------- |
| ==     | 检查如果两个操作数的值是否相等，如果相等则条件为真。         | （A == B）为假。 |
| !=     | 检查如果两个操作数的值是否相等，如果值不相等则条件为真。     | (A != B) 为真。  |
| >      | 检查左操作数的值是否大于右操作数的值，如果是那么条件为真。   | （A> B）为假。   |
| <      | 检查左操作数的值是否小于右操作数的值，如果是那么条件为真。   | （A <B）为真。   |
| >=     | 检查左操作数的值是否大于或等于右操作数的值，如果是那么条件为真。 | （A> = B）为假。 |
| <=     | 检查左操作数的值是否小于或等于右操作数的值，如果是那么条件为真。 | （A <= B）为真。 |

**实例**：

```
public class Test {
 
  public static void main(String[] args) {
     int a = 10;
     int b = 20;
     System.out.println("a == b = " + (a == b) );
     System.out.println("a != b = " + (a != b) );
     System.out.println("a > b = " + (a > b) );
     System.out.println("a < b = " + (a < b) );
     System.out.println("b >= a = " + (b >= a) );
     System.out.println("b <= a = " + (b <= a) );
  }
}
```

以上实例编译运行结果如下：

```
a == b = false
a != b = true
a > b = false
a < b = true
b >= a = true
b <= a = false
```

###### 位运算符

Java定义了位运算符，应用于整数类型(int)，长整型(long)，短整型(short)，字符型(char)，和字节型(byte)等类型。

位运算符作用在所有的位上，并且按位运算。假设a = 60，b = 13;它们的二进制格式表示将如下：

```
A = 0011 1100
B = 0000 1101
-----------------
A&B = 0000 1100
A | B = 0011 1101
A ^ B = 0011 0001
~A= 1100 0011
```

下表列出了位运算符的基本运算，假设整数变量 A 的值为 60 和变量 B 的值为 13：

| 操作符 | 描述                                                         | 例子                           |
| :----- | :----------------------------------------------------------- | :----------------------------- |
| ＆     | 如果相对应位都是1，则结果为1，否则为0                        | （A＆B），得到12，即0000 1100  |
| \|     | 如果相对应位都是 0，则结果为 0，否则为 1                     | （A \| B）得到61，即 0011 1101 |
| ^      | 如果相对应位值相同，则结果为0，否则为1                       | （A ^ B）得到49，即 0011 0001  |
| 〜     | 按位取反运算符翻转操作数的每一位，即0变成1，1变成0。         | （〜A）得到-61，即1100 0011    |
| <<     | 按位左移运算符。左操作数按位左移右操作数指定的位数。         | A << 2得到240，即 1111 0000    |
| >>     | 按位右移运算符。左操作数按位右移右操作数指定的位数。         | A >> 2得到15即 0000 1111       |
| >>>    | 按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充。 | A>>>2得到15即0000 1111         |

**实例**

```
public class Test {
  public static void main(String[] args) {
     int a = 60; /* 60 = 0011 1100 */ 
     int b = 13; /* 13 = 0000 1101 */
     int c = 0;
     c = a & b;       /* 12 = 0000 1100 */
     System.out.println("a & b = " + c );
 
     c = a | b;       /* 61 = 0011 1101 */
     System.out.println("a | b = " + c );
 
     c = a ^ b;       /* 49 = 0011 0001 */
     System.out.println("a ^ b = " + c );
 
     c = ~a;          /*-61 = 1100 0011 */
     System.out.println("~a = " + c );
 
     c = a << 2;     /* 240 = 1111 0000 */
     System.out.println("a << 2 = " + c );
 
     c = a >> 2;     /* 15 = 0000 1111 */
     System.out.println("a >> 2  = " + c );
  
     c = a >>> 2;     /* 15 = 0000 1111 */
     System.out.println("a >>> 2 = " + c );
  }
} 
```

以上实例编译运行结果如下：

```
a & b = 12
a | b = 61
a ^ b = 49
~a = -61
a << 2 = 240
a >> 2  = 15
a >>> 2 = 15
```

###### 逻辑运算符

下表列出了逻辑运算符的基本运算，假设布尔变量A为真，变量B为假

| 操作符 | 描述                                                         | 例子                |
| :----- | :----------------------------------------------------------- | :------------------ |
| &&     | 称为逻辑与运算符。当且仅当两个操作数都为真，条件才为真。     | （A && B）为假。    |
| \| \|  | 称为逻辑或操作符。如果任何两个操作数任何一个为真，条件为真。 | （A \| \| B）为真。 |
| ！     | 称为逻辑非运算符。用来反转操作数的逻辑状态。如果条件为true，则逻辑非运算符将得到false。 | ！（A && B）为真。  |

**实例**

```
public class Test {
  public static void main(String[] args) {
     boolean a = true;
     boolean b = false;
     System.out.println("a && b = " + (a&&b));
     System.out.println("a || b = " + (a||b) );
     System.out.println("!(a && b) = " + !(a && b));
  }
}
```

以上实例编译运行结果如下：

```
a && b = false
a || b = true
!(a && b) = true
```

**短路逻辑运算符**

> 当使用与逻辑运算符时，在两个操作数都为true时，结果才为true，但是当得到第一个操作为false时，其结果就必定是false，这时候就不会再判断第二个操作了。

**实例**

```
public class LuoJi{
    public static void main(String[] args){
        int a = 5;//定义一个变量；
        boolean b = (a<4)&&(a++<10);
        System.out.println("使用短路逻辑运算符的结果为"+b);
        System.out.println("a的结果为"+a);
    }
}
```

运行结果为：

```
使用短路逻辑运算符的结果为false
a的结果为5
```

**解析：** *该程序使用到了短路逻辑运算符(&&)，首先判断 a<4 的结果为 false，则 b 的结果必定是 false，所以不再执行第二个操作 a++<10 的判断，所以 a 的值为 5。*

###### 赋值运算符

下面是Java语言支持的赋值运算符：

| 操作符  | 描述                                                         | 例子                                     |
| :------ | :----------------------------------------------------------- | :--------------------------------------- |
| =       | 简单的赋值运算符，将右操作数的值赋给左侧操作数               | C = A + B将把A + B得到的值赋给C          |
| + =     | 加和赋值操作符，它把左操作数和右操作数相加赋值给左操作数     | C + = A等价于C = C + A                   |
| - =     | 减和赋值操作符，它把左操作数和右操作数相减赋值给左操作数     | C - = A等价于C = C - A                   |
| * =     | 乘和赋值操作符，它把左操作数和右操作数相乘赋值给左操作数     | C * = A等价于C = C * A                   |
| / =     | 除和赋值操作符，它把左操作数和右操作数相除赋值给左操作数     | C / = A，C 与 A 同类型时等价于 C = C / A |
| （％）= | 取模和赋值操作符，它把左操作数和右操作数取模后赋值给左操作数 | C％= A等价于C = C％A                     |
| << =    | 左移位赋值运算符                                             | C << = 2等价于C = C << 2                 |
| >> =    | 右移位赋值运算符                                             | C >> = 2等价于C = C >> 2                 |
| ＆=     | 按位与赋值运算符                                             | C＆= 2等价于C = C＆2                     |
| ^ =     | 按位异或赋值操作符                                           | C ^ = 2等价于C = C ^ 2                   |
| \| =    | 按位或赋值操作符                                             | C \| = 2等价于C = C \| 2                 |

**实例**

```
public class Test {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int c = 0;
        c = a + b;
        System.out.println("c = a + b = " + c );
        c += a ;
        System.out.println("c += a  = " + c );
        c -= a ;
        System.out.println("c -= a = " + c );
        c *= a ;
        System.out.println("c *= a = " + c );
        a = 10;
        c = 15;
        c /= a ;
        System.out.println("c /= a = " + c );
        a = 10;
        c = 15;
        c %= a ;
        System.out.println("c %= a  = " + c );
        c <<= 2 ;
        System.out.println("c <<= 2 = " + c );
        c >>= 2 ;
        System.out.println("c >>= 2 = " + c );
        c >>= 2 ;
        System.out.println("c >>= 2 = " + c );
        c &= a ;
        System.out.println("c &= a  = " + c );
        c ^= a ;
        System.out.println("c ^= a   = " + c );
        c |= a ;
        System.out.println("c |= a   = " + c );
    }
}
```

以上实例编译运行结果如下：

```
c = a + b = 30
c += a  = 40
c -= a = 30
c *= a = 300
c /= a = 1
c %= a  = 5
c <<= 2 = 20
c >>= 2 = 5
c >>= 2 = 1
c &= a  = 0
c ^= a   = 10
c |= a   = 10
```

`注意：扩展的赋值运算符隐含了强制类型转换`

###### 条件运算符（?:）

> 条件运算符也被称为三元运算符。该运算符有3个操作数，并且需要判断布尔表达式的值。该运算符的主要是决定哪个值应该赋值给变量。

```
variable x = (expression) ? value if true : value if false
```

**实例**：

```
public class Test {
   public static void main(String[] args){
      int a , b;
      a = 10;
      // 如果 a 等于 1 成立，则设置 b 为 20，否则为 30
      b = (a == 1) ? 20 : 30;
      System.out.println( "Value of b is : " +  b );
 
      // 如果 a 等于 10 成立，则设置 b 为 20，否则为 30
      b = (a == 10) ? 20 : 30;
      System.out.println( "Value of b is : " + b );
   }
}
```

以上实例编译运行结果如下：

```
Value of b is : 30
Value of b is : 20
```

###### instanceof 运算符

该运算符用于操作对象实例，检查该对象是否是一个特定类型（类类型或接口类型）。

instanceof运算符使用格式如下：

```
( Object reference variable ) instanceof  (class/interface type)
```

如果运算符左侧变量所指的对象，是操作符右侧类或接口(class/interface)的一个对象，那么结果为真。

下面是一个例子：

```
String name = "James";
boolean result = name instanceof String; // 由于 name 是 String 类型，所以返回真
```

如果被比较的对象兼容于右侧类型，该运算符仍然返回 true。

```
class Vehicle {}
 
public class Car extends Vehicle {
   public static void main(String[] args){
      Vehicle a = new Car();
      boolean result =  a instanceof Car;
      System.out.println( result);
   }
}
```

以上实例编译运行结果如下：

```
true
```

###### Java运算符优先级

当多个运算符出现在一个表达式中，谁先谁后呢？这就涉及到运算符的优先级别的问题。在一个多运算符的表达式中，运算符优先级不同会导致最后得出的结果差别甚大。

例如，（1+3）＋（3+2）*2，这个表达式如果按加号最优先计算，答案就是 18，如果按照乘号最优先，答案则是 14。

再如，x = 7 + 3 * 2;这里x得到13，而不是20，因为乘法运算符比加法运算符有较高的优先级，所以先计算3 * 2得到6，然后再加7。

下表中具有最高优先级的运算符在的表的最上面，最低优先级的在表的底部。

| 类别     | 操作符                                     | 关联性   |
| :------- | :----------------------------------------- | :------- |
| 后缀     | () [] . (点操作符)                         | 左到右   |
| 一元     | expr++ expr--                              | 从左到右 |
| 一元     | ++expr --expr + - ～ ！                    | 从右到左 |
| 乘性     | * /％                                      | 左到右   |
| 加性     | + -                                        | 左到右   |
| 移位     | >> >>>  <<                                 | 左到右   |
| 关系     | > >= < <=                                  | 左到右   |
| 相等     | == !=                                      | 左到右   |
| 按位与   | ＆                                         | 左到右   |
| 按位异或 | ^                                          | 左到右   |
| 按位或   | \|                                         | 左到右   |
| 逻辑与   | &&                                         | 左到右   |
| 逻辑或   | \| \|                                      | 左到右   |
| 条件     | ？：                                       | 从右到左 |
| 赋值     | = + = - = * = / =％= >> = << =＆= ^ = \| = | 从右到左 |
| 逗号     | ，                                         | 左到右   |

##### 循环结构

顺序循环结构的程序语句只能被执行一次。

如果想要同样的操作执行多次，就需要使用循环结构。

Java中有三种主要的循环结构：

- **while** 循环
- **do…while** 循环
- **for** 循环

在 Java5 中引入了一种主要用于数组的增强型 for 循环。

**while 循环**

while是最基本的循环，它的结构为：

```
while( 布尔表达式 ){  
	//循环内容
}
```

只要布尔表达式为 true，循环就会一直执行下去。

**实例：**

```
public class Test {
   public static void main(String[] args) {
      int x = 10;
      while( x < 20 ) {
         System.out.print("value of x : " + x );
         x++;
         System.out.print("\n");
      }
   }
}
```

以上实例编译运行结果如下：

```
value of x : 10
value of x : 11
value of x : 12
value of x : 13
value of x : 14
value of x : 15
value of x : 16
value of x : 17
value of x : 18
value of x : 19
```

------

**do…while 循环**

对于 while 语句而言，如果不满足条件，则不能进入循环。但有时候我们需要即使不满足条件，也至少执行一次。

do…while 循环和 while 循环相似，不同的是，do…while 循环至少会执行一次。

```
do {
       //代码语句
}while(布尔表达式);
```

**实例：**

```
public class Test {
   public static void main(String[] args){
      int x = 10;
 	  int y = 10;	
      do{
         System.out.print("value of x : " + x );
         x++;
         System.out.print("\n");
      }while( x < 10 );
      
      do{
         System.out.print("value of y : " + y );
         y++;
         System.out.print("\n");
         }while( y < 11 );
       }
   }
}
```

以上实例编译运行结果如下：

```
value of x : 10
value of y : 10
```

------

**for循环**

虽然所有循环结构都可以用 while 或者 do...while表示，但 Java 提供了另一种语句 —— for 循环，使一些循环结构变得更加简单。

for循环执行的次数是在执行前就确定的。语法格式如下：

```
for(初始化; 布尔表达式; 更新) {
    //代码语句
}
```

关于 for 循环有以下几点说明：

- 最先执行初始化步骤。可以声明一种类型，但可初始化一个或多个循环控制变量，也可以是空语句。
- 然后，检测布尔表达式的值。如果为 true，循环体被执行。如果为false，循环终止，开始执行循环体后面的语句。
- 执行一次循环后，更新循环控制变量。
- 再次检测布尔表达式。循环执行上面的过程。

**实例：**

```
public class Test {
   public static void main(String[] args) {
 
      for(int x = 10; x < 20; x = x+1) {
         System.out.print("value of x : " + x );
         System.out.print("\n");
      }
   }
}
```

以上实例编译运行结果如下：

```
value of x : 10
value of x : 11
value of x : 12
value of x : 13
value of x : 14
value of x : 15
value of x : 16
value of x : 17
value of x : 18
value of x : 19
```

**Java 增强 for 循环**

Java5 引入了一种主要用于数组的增强型 for 循环。

Java 增强 for 循环语法格式如下:

```
for(声明语句 : 表达式)
{
   //代码句子
}
```

**声明语句：**声明新的局部变量，该变量的类型必须和数组元素的类型匹配。其作用域限定在循环语句块，其值与此时数组元素的值相等。

**表达式：**表达式是要访问的数组名，或者是返回值为数组的方法。

**实例：**

```
public class Test {
   public static void main(String[] args){
      int [] numbers = {10, 20, 30, 40, 50};
 
      for(int x : numbers ){
         System.out.print( x );
         System.out.print(",");
      }
      System.out.print("\n");
      String [] names ={"James", "Larry", "Tom", "Lacy"};
      for( String name : names ) {
         System.out.print( name );
         System.out.print(",");
      }
   }
}
```

以上实例编译运行结果如下：

```
10,20,30,40,50,
James,Larry,Tom,Lacy,
```

**break 关键字**

> break 主要用在循环语句或者 switch 语句中，用来跳出整个语句块。

break 跳出最里层的循环，并且继续执行该循环下面的语句。

**语法**

break 的用法很简单，就是循环结构中的一条语句：

```
break;
```

**实例：**

```
public class Test {
   public static void main(String[] args) {
      int [] numbers = {10, 20, 30, 40, 50};
 
      for(int x : numbers ) {
         // x 等于 30 时跳出循环
         if( x == 30 ) {
            break;
         }
         System.out.print( x );
         System.out.print("\n");
      }
   }
}
```

以上实例编译运行结果如下：

```
10
20
```

------

**continue 关键字**

continue 适用于任何循环控制结构中。作用是让程序立刻跳转到下一次循环的迭代。

在 for 循环中，continue 语句使程序立即跳转到更新语句。

在 while 或者 do…while 循环中，程序立即跳转到布尔表达式的判断语句。

**语法**

continue 就是循环体中一条简单的语句：

```
continue;
```

**实例：**

```
public class Test {
   public static void main(String[] args) {
      int [] numbers = {10, 20, 30, 40, 50};
 
      for(int x : numbers ) {
         if( x == 30 ) {
        continue;
         }
         System.out.print( x );
         System.out.print("\n");
      }
   }
}
```

以上实例编译运行结果如下：

```
10
20
40
50
```

##### switch case 语句

switch case 语句判断一个变量与一系列值中某个值是否相等，每个值称为一个分支。

**语法**

switch case 语句语法格式如下：

```
switch(expression){
    case value :
       //语句
       break; //可选
    case value :
       //语句
       break; //可选
    //你可以有任意数量的case语句
    default : //可选
       //语句
}
```

switch case 语句有如下规则：

- switch 语句中的变量类型可以是： byte、short、int 或者 char。从 Java SE 7 开始，switch 支持字符串 String 类型了，同时 case 标签必须为字符串常量或字面量。
- switch 语句可以拥有多个 case 语句。每个 case 后面跟一个要比较的值和冒号。
- `case 语句中的值的数据类型必须与变量的数据类型相同，而且只能是常量或者字面常量`。
- 当变量的值与 case 语句的值相等时，那么 case 语句之后的语句开始执行，直到 break 语句出现才会跳出 switch 语句。
- 当遇到 break 语句时，switch 语句终止。程序跳转到 switch 语句后面的语句执行。case 语句不必须要包含 break 语句。如果没有 break 语句出现，程序会继续执行下一条 case 语句，直到出现 break 语句。
- switch 语句可以包含一个 default 分支，该分支一般是 switch 语句的最后一个分支（可以在任何位置，但建议在最后一个）。default 在没有 case 语句的值和变量值相等的时候执行。default 分支不需要 break 语句。

**switch case 执行时，一定会先进行匹配，匹配成功返回当前 case 的值，再根据是否有 break，判断是否继续输出，或是跳出判断。**

**实例：**

```
public class Test {
   public static void main(String args[]){
      //char grade = args[0].charAt(0);
      char grade = 'C';
 
      switch(grade)
      {
         case 'A' :
            System.out.println("优秀"); 
            break;
         case 'B' :
         case 'C' :
            System.out.println("良好");
            break;
         case 'D' :
            System.out.println("及格");
            break;
         case 'F' :
            System.out.println("你需要再努力努力");
            break;
         default :
            System.out.println("未知等级");
      }
      System.out.println("你的等级是 " + grade);
   }
}
```

以上代码编译运行结果如下：

```
良好
你的等级是 C
```

如果 case 语句块中没有 break 语句时，JVM 并不会顺序输出每一个 case 对应的返回值，而是继续匹配，匹配不成功则返回默认 case。

```
public class Test {
   public static void main(String args[]){
      int i = 5;
      switch(i){
         case 0:
            System.out.println("0");
         case 1:
            System.out.println("1");
         case 2:
            System.out.println("2");
         default:
            System.out.println("default");
      }
   }
}
```

以上代码编译运行结果如下：

```
default
```

如果 case 语句块中没有 break 语句时，匹配成功后，从当前 case 开始，后续所有 case 的值都会输出。

```
public class Test {
   public static void main(String args[]){
      int i = 1;
      switch(i){
         case 0:
            System.out.println("0");
         case 1:
            System.out.println("1");
         case 2:
            System.out.println("2");
         default:
            System.out.println("default");
      }
   }
}
```

以上代码编译运行结果如下：

```
default
```

如果当前匹配成功的 case 语句块没有 break 语句，则从当前 case 开始，后续所有 case 的值都会输出，如果后续的 case 语句块有 break 语句则会跳出判断。

```
public class Test {
   public static void main(String args[]){
      int i = 1;
      switch(i){
         case 0:
            System.out.println("0");
         case 1:
            System.out.println("1");
         case 2:
            System.out.println("2");
         case 3:
            System.out.println("3"); break;
         default:
            System.out.println("default");
      }
   }
}
```

以上代码编译运行结果如下：

```
1
2
3
```

