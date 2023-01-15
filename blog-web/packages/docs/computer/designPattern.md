## 设计模式

> Design Pattern

什么是设计模式？

> 假设有一个空房间，我们要日复一日地往里 面放一些东西。最简单的办法当然是把这些东西 直接扔进去，但是时间久了，就会发现很难从这 个房子里找到自己想要的东西，要调整某几样东西的位置也不容易。所以在房间里做一些柜子也许是个更好的选择，虽然柜子会增加我们的成 本，但它可以在维护阶段为我们带来好处。使用这些柜子存放东西的规则，或许就是一种模式

学习设计模式，有助于写出可复用和可维护性高的程序

设计模式的原则是“找出 程序中变化的地方，并将变化封装起来”，它的关键是意图，而不是结构。

不过要注意，使用不当的话，可能会事倍功半。

### 设计原则

**单一职责原则（SRP）**

一个对象或方法只做一件事情。如果一个方法承担了过多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。

应该把对象或方法划分成较小的粒度

**最少知识原则（LKP）**

一个软件实体应当 尽可能少地与其他实体发生相互作用 

应当尽量减少对象之间的交互。如果两个对象之间不必彼此直接通信，那么这两个对象就不要发生直接的 相互联系，可以转交给第三方进行处理

**开放-封闭原则（OCP）**

软件实体（类、模块、函数）等应该是可以 扩展的，但是不可修改

当需要改变一个程序的功能或者给这个程序增加新功能的时候，可以使用增加代码的方式，尽量避免改动程序的源代码，防止影响原系统的稳定

### 工厂模式

> 工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型（抽象工厂）。
>
> 这个模式十分有用，尤其是创建对象的流程赋值的时候，比如依赖于很多设置文件等。并且，你会经常在程序里看到工厂方法，用于让子类定义需要创建的对象类型。
>
> 工厂模式根据抽象程度的不同可以分为：1.简单工厂 2.工厂方法 3.抽象工厂

#### 1.简单工厂

```
let  factory = function (role) {
function superman() {
    this.name ='超级管理员',
    this.role = ['修改密码', '发布消息', '查看主页']
}

function commonMan() {
    this.name = '普通游客',
    this.role = ['查看主页']
}

switch(role) {
    case 'superman':
    return new superman();
    break;
    case 'man':
    return new commonMan();
    break;
    default:
    throw new Error('参数错误')
}
}
let superman = factory('superman');
let man = factory('man');
```

在上述代码中,factory就是一个简单的工厂,该工厂中有二个构造函数分别对应不同的权限。我们只需要传递相应的参数就可以获取一个实例对象了。

简单工厂的优点: 你只需要传递一个合法的参数,就可以获取到你想要的对象,而无需知道创建的具体的细节。但是在函数内包含了所有对象的构造函数和判断逻辑的代码, 每次如果需要添加一个对象,那么我们需要新增一个构造函数,当我们需要维护的对象不是上面这2个,而是20个或者更多,那么这个函数将会成为超级函数,使得我们难以维护。所以简单工厂模式只适用于在创建时对象数量少,以及逻辑简单的情况。

#### 2.工厂方法

工厂方法模式本意是将实际创造的对象推迟到子类中,这样核心类就变成了抽象类。但是在js中很难像那些传统面向对象语言那样去实现抽象类,所以在js中我们只需要参考他的思想即可。

我们可以把工厂函数看成是一个工厂类。在简单模式我们,我们添加一个新的对象需要修改二处地方,在加入工厂方法模式以后,我们只需要修改一处即可。工厂方法的工厂类,他只做实例化这一件事情。我们只需要修改他的原型类即可。我们采用安全模式创建工厂对象。

```
    function Person(name) {
      this.name = name
    }
    Person.prototype.getName = function () {
      console.log(this.name);
    }
    function Car(model) {
      this.model = model
    }
    Car.prototype.getModel = function () {
      console.log(this.model);
    }
    function create(type, param) {
      if (this instanceof create) {
        return new this[type](param)
      } else {
        return new create(type, param)
      }
    }
    create.prototype = {
      person: Person,
      car: Car
    }
    var person1 = new create('person', 'zhang san')
    var car1 = create('car', 'Benz')
    console.log(person1);
    console.log(car1);
    person1.getName()
    car1.getModel()
```

在上述代码中要是忘记加new了, 那么我们就获取不到Person，Car等构造函数了,使用安全模式可以很好的解决这个问题。

**什么时候使用工厂模式**

工厂模式在应用于以下情况时尤其有用：

当我们创建的对象或组件涉及到了很高的复杂度。当我们需要根据所处的环境生成不同的对象实例时。当我们处理含有相同属性的对象或组件时。当创建的对象是其他对象的实例，而且要求它们有一致的API接口时。有利于解耦。

### 建造者模式

> 建造者模式可以将一个复杂的对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。也就是说如果我们用了建造者模式，那么用户就需要指定需要建造的类型就可以得到它们，而具体建造的过程和细节就不需要知道了。建造者模式实际就是一个指挥者，一个建造者，一个使用指挥者调用具体建造者工作得出结果的客户。
>
> 建造者模式主要用于“分步骤构建一个复杂的对象”，在这其中“分步骤”是一个稳定的算法，而复杂对象的各个部分则经常变化。

**建造者模式的作用和注意事项**

模式作用：

1.分步创建一个复杂的对象

2.解耦封装过程和具体创建组件

3.无需关心组件如何组装

注意事项：

1.一定要一个稳定的算法进行支持

2.加工工艺是暴露的

**普通代码**

```
	   // 应聘者信息
         var data = [
           {
             name: 'zhang san',
             age: 23,
             work: 'engineer'
           },
           {
             name: 'li si',
             age: 26,
             work: 'teacher'
           },
           {
             name: 'wang wu',
             age: 13,
             work: 'xxx'
           }
         ]
         //生成应聘者实例的类
         function Candidate(param) {
           var _candidate = {}
           _candidate.name = param.name
           _candidate.age = param.age
           _candidate.firstName = _candidate.name.split(' ')[0]
           _candidate.secondName = _candidate.name.split(' ')[1]
           _candidate.work = {}
         	function switchFun(work) {
             switch (work) {
               case 'engineer':
                 _candidate.work.name = '工程师';
                 _candidate.work.description = '热爱编程';
                 break;
               case 'teacher':
                 _candidate.work.name = '教师';
                 _candidate.work.description = '乐于分享';
                 break;
               default:
                 _candidate.work.name = work
                 _candidate.work.description = '无';
             }
           }
           switchFun(param.work)
           //更改工作的方法
           _candidate.work.changeWork = function (work) {
             this.name = work;
             switchFun(work)
           }
           //更改工作描述的方法
           _candidate.work.changeDes = function (des) {
             this.description = des
           }
           return _candidate
         }
         var candidateArr = []
         // 遍历生成应聘者实例
         for (var i = 0; i < data.length; i++) {
           candidateArr[i] = Candidate(data[i])
         }
         console.log(candidateArr[0]);
         // 更改工作名称
         candidateArr[0].work.changeWork('xxx');
         console.log(candidateArr[0]);
```

**使用建造者模式改造**

```
        // 应聘者信息
         var data = [
           {
             name: 'zhang san',
             age: 23,
             work: 'engineer'
           },
           {
             name: 'li si',
             age: 26,
             work: 'teacher'
           },
           {
             name: 'wang wu',
             age: 13,
             work: 'xxx'
           }
         ]
         //生成应聘者实例的类
         function Candidate(param) {
           var _candidate = new Person(param)
           _candidate.name = new CreateName(param.name)
           _candidate.work = new CreateWork(param.work)
           return _candidate
         }

         function Person(param) {
           this.age = param.age
         }

         function CreateName(name) {
           this.wholeName = name;
           this.firstName = name.split(' ')[0]
           this.secondName = name.split(' ')[1]
         }
         function CreateWork(work) {
           switch (work) {
             case 'engineer':
               this.name = '工程师';
               this.description = '热爱编程';
               break;
             case 'teacher':
               this.name = '教师';
               this.description = '乐于分享';
               break;
             default:
               this.name = work
               this.description = '无';
           }
           //更改工作的方法
           CreateWork.prototype.changeWork = function (work) {
             CreateWork.call(this, work)
           }
           //更改工作描述的方法
           CreateWork.prototype.changeDes = function (des) {
             this.description = des
           }
         }
         var candidateArr = []
         // 遍历生成应聘者实例
         for (var i = 0; i < data.length; i++) {
           candidateArr[i] = Candidate(data[i])
         }
         console.log(candidateArr[0]);
         // 更改工作名称
         candidateArr[0].work.changeWork('xxx');
         console.log(candidateArr[0]);
```

对比可以发现，普通代码把所有实现逻辑都放在一个类中，让这个类看起来非常臃肿阅读性差，而建造者模式会分步骤，一步步简化每个类里面的代码量，从而提高阅读性

### 单例模式

> 单例就是保证一个类只有一个实例，实现方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。

问题：

```
    function NotSingle() {
      this.a = 123
    }
    var a1 = new NotSingle()
    var a2 = new NotSingle()
    console.log(a1 === a2);   //false
```

同一个类创造的实例不相等，如果就想他们想相等呢？

可以采用单例模式来进行改造

```
   var _unique = null;
    function createSingle() {
      var obj = {
        a: 1
      }
      if (_unique === null) {
        _unique = obj
      }
      return _unique
    }
    var a = createSingle()
    var b = createSingle()
    console.log(a === b);  //true
```

上面这种方法虽然可以实现单例模式，但是由于实例对象定义在全局中，不安全，下面使用闭包来进行改造

```
 //使用闭包进行改造
    var createSingle = (function () {
      var _unique = null
      function single() {
        return {
          a: 1
        }
      }
      return function () {
        if (_unique === null) {
          _unique = single()
        }
        return _unique
      }
    })()
    var a = createSingle()
    var b = createSingle()
    console.log(a === b);  //true
```

### 装饰者模式

> 装饰者模式，希望在不改变原对象的基础上，通过对其拓展功能和属性来实现更复杂的逻辑。

有一个案例：4s店在卖一种车，价格为10万元，如果用户需要在此基础上加装一些配置则需要加钱。比如加热座椅配置需要2万元，电动后视镜需要0.8万元等等

**普通写法：**

```
  function Car() {
      this.price = 10
    }
    Car.prototype = {
      addHeatSeat: function () {
        this.hasHeatSeat = true
        this.price += 2
      },
      addAutoMirror: function () {
        this.hasAutoMirror = true
        this.price += 0.8
      }
    }
    var car1 = new Car()
    console.log(car1.price);  //10
    car1.addHeatSeat()
    car1.addAutoMirror()
    console.log(car1.price);  //12.8
```

**装饰者模式：**

```
	function Car() {
      this.price = 10
    }

    function carWithHeatSeat(carExample) {
      carExample.hasHeatSeat = true
      carExample.price += 2
    }
    function carWithHeatMirror(carExample) {
      carExample.hasAutoMirror = true
      carExample.price += 0.8
    }

    var car2 = new Car();
    console.log(car2.price); //10
    carWithHeatSeat(car2)
    carWithHeatMirror(car2)
    console.log(car2.price); //12.8
```

两种模式对比，装饰者模式是独立与构造函数之外的函数，这样就能减少对构造函数的介入

### 组合模式

> 组合模式作用于将多个部分通过组合变成一个整体。

比如我们在工作中经常会制作一些表单，比如登录，注册，或者一些信息填写等等，这些表单其实都是类似的，如果你今天制作一个注册的表单，明天做个调查问卷的表单，是不是会觉得很妈蛋，有点重复劳动的感觉？

组合模式可以解决这个问题

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    //寄生式组合继承
    function inheritPrototype(subClass, superClass) {
      function F() { }
      F.prototype = superClass.prototype;
      subClass.prototype = new F()
      subClass.prototype.constructor = subClass
    }
    //组合继承
    // function inheritPrototype(subClass, superClass) {
    //   subClass.prototype = new superClass()
    // }
    //基类
    function Container() {
      aa
      this.children = []
      this.element = null
    }
    Container.prototype = {
      init: function () {
        throw new Error('请重写init方法')
      },
      add: function (child) {
        this.children.push(child)
        this.element.appendChild(child.element)
        return this
      }
    }
    //基于容器基类创建表单容器
    function CreateForm(id, method, action, parent) {
      Container.call(this)
      this.id = id || 'get';
      this.method = method || 'get'
      this.action = action || ''
      this.parent = parent
      this.init()
    }
    inheritPrototype(CreateForm, Container)
    CreateForm.prototype.init = function () {
      this.element = document.createElement('form')
      this.element.id = this.id
      this.element.method = this.method
      this.element.action = this.action
    }
    CreateForm.prototype.show = function () {
      this.parent.appendChild(this.element)
    }
    //行容器组件
    function CreateLine(className) {
      Container.call(this)
      this.className = className === undefined ? 'form-line' : 'form-line' + className
      this.init()
    }
    inheritPrototype(CreateLine, Container)
    CreateLine.prototype.init = function () {
      this.element = document.createElement('div')
      this.element.className = this.className
    }
    //label
    function CreateLabel(text, forName) {
      this.text = text || ''
      this.forName = forName || ''
      this.init()
    }
    CreateLabel.prototype.init = function () {
      this.element = document.createElement('label')
      this.element.setAttribute('for', this.forName)
      this.element.innerHTML = this.text
    }
    //input
    function CreateInput(type, id, name, defaultValue) {
      this.type = type || ''
      this.id = id || ''
      this.name = name || ''
      this.defaultValue = defaultValue || ''
      this.init()
    }
    CreateInput.prototype.init = function () {
      this.element = document.createElement('input')
      this.element.type = this.type
      this.element.id = this.id
      this.element.name = this.name
      this.element.value = this.defaultValue
    }
    
    var form = new CreateForm('owner-form', 'GET', 'https://www.baidu.com/s', document.body)
    console.log(new CreateLine());
    var userLine = new CreateLine()
      .add(new CreateLabel('用户名', 'user'))
      .add(new CreateInput('text', 'user', 'wd'))

    var pwdLine = new CreateLine()
      .add(new CreateLabel('密码', 'pwd'))
      .add(new CreateInput('password', 'pwd', 'pwd'))

    var submitLine = new CreateLine()
      .add(new CreateInput('submit', '', '', '登录'))
    form.add(userLine).add(pwdLine).add(submitLine).show()
  </script>
</body>
</html>
```

使用ES6 class来改造

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    //基类
    class Container {
      constructor() {
        this.children = [],
          this.element = null
      }
      init() {
        throw new Error('请重写init方法')
      }
      add(child) {
        this.children.push(child)
        this.element.appendChild(child.element)
        return this
      }
    }
    //基于容器基类创建表单容器
    class CreateForm extends Container {
      constructor(id, method, action, parent) {
        super()
        this.id = id || 'get';
        this.method = method || 'get'
        this.action = action || ''
        this.parent = parent
        this.init()
      }
      init() {
        this.element = document.createElement('form')
        this.element.id = this.id
        this.element.method = this.method
        this.element.action = this.action
      }
      show() {
        this.parent.appendChild(this.element)
      }
    }
    //行容器组件
    class CreateLine extends Container {
      constructor(className) {
        super()
        this.className = className === undefined ? 'form-line' : 'form-line' + className
        this.init()
      }
      init() {
        this.element = document.createElement('div')
        this.element.className = this.className
      }
    }
    //label类
    class CreateLabel {
      constructor(text, forName) {
        this.text = text || ''
        this.forName = forName || ''
        this.init()
      }
      init() {
        this.element = document.createElement('label')
        this.element.setAttribute('for', this.forName)
        this.element.innerHTML = this.text
      }
    }
    //input类
    class CreateInput {
      constructor(type, id, name, defaultValue) {
        this.type = type || ''
        this.id = id || ''
        this.name = name || ''
        this.defaultValue = defaultValue || ''
        this.init()
      }
      init() {
        this.element = document.createElement('input')
        this.element.type = this.type
        this.element.id = this.id
        this.element.name = this.name
        this.element.value = this.defaultValue
      }
    }

    var form = new CreateForm('owner-form', 'GET', 'https://www.baidu.com/s', document.body)
    console.log(new CreateLine());
    var userLine = new CreateLine()
      .add(new CreateLabel('用户名', 'user'))
      .add(new CreateInput('text', 'user', 'wd'))

    var pwdLine = new CreateLine()
      .add(new CreateLabel('密码', 'pwd'))
      .add(new CreateInput('password', 'pwd', 'pwd'))
    var submitLine = new CreateLine()
      .add(new CreateInput('submit', '', '', '登录'))
    form.add(userLine).add(pwdLine).add(submitLine).show()
  </script>
</body>
</html>
```

### 观察者模式

> 观察者模式又叫发布订阅模式或者消息模式。
>
> 是设计模式中非常著名也是非常重要的一种模式，这种模式一般会定义一个主体和众多的个体，这里主体可以想象为一个消息中心，里面有各种
>
> 各样的消息，众多的个体可以订阅不同的消息，当未来消息中心发布某条消息的时候，订阅过他的个体就会得到通知

核心：

​	取代对象之间硬编码的通知机制，一个对象不用再显式地调用另外一个对象的某个接口。

​	与传统的发布-订阅模式实现方式（将订阅者自身当成引用传入发布者）不同，在JS中通常使用注册回调函数的形式来订阅

实现：

```
    //订阅发布中心
    var msgCenter = (function () {
      var _msg = {};  //储存消息
      // var _msg = {
      //   'carInfo' : [fn1,fn2...],
      //   'newsInfo': [fn1,fn2...],
      //    ......
      // }
      return {
        //用于订阅一个消息
        subscribe: function (type, fn) {
          if (_msg[type]) {
            _msg[type].push(fn)
          } else {
            _msg[type] = [fn]
          }
        },
        //用于发布消息
        release: function (type, args) {
          if (!_msg[type]) {
            return
          }
          var event = {
            type: type,
            args: args || {}
          }
          for (let index = 0; index < _msg[type].length; index++) {
            _msg[type][index](event)
          }
        },
        //用于取消订阅消息
        cancel: function (type, fn) {
          if (!_msg[type]) {
            return
          }
          for (let index = 0; index < _msg[type].length; index++) {
            if (_msg[type][index] === fn) {
              _msg[type].splice(index, 1)
              break
            }
          }
        }
      }
    })()
    //订阅者类
    function Person() {
      this.alreadysubscribe = {}
      Person.prototype.subscribe = function (type, fn) {
        //防止重复订阅
        if (this.alreadysubscribe[type]) {
          console.log('你已经订阅过这个消息了，请不要重复订阅！');
        } else {
          msgCenter.subscribe(type, fn)
          //这句话是为了保存每个实例的订阅回调方法，通过对比，可以防止重复订阅
          this.alreadysubscribe[type] = fn
        }
      }
      Person.prototype.cancel = function (type) {
        msgCenter.cancel(type, this.alreadysubscribe[type])
        delete this.alreadysubscribe[type]
      }
    }
    var person1 = new Person()
    var person2 = new Person()
    var person3 = new Person()
    //订阅
    person1.subscribe('carInfo', function (e) {
      console.log('person1得到了关于' + e.type + '的消息，消息内容是：' + e.args.info);
    })
    person1.subscribe('newsInfo', function (e) {
      console.log('person1得到了关于' + e.type + '的消息，消息内容是：' + e.args.info);
    })
    person2.subscribe('carInfo', function (e) {
      console.log('person2得到了关于' + e.type + '的消息，消息内容是：' + e.args.info);
    })
    person3.subscribe('newsInfo', function (e) {
      console.log('person3得到了关于' + e.type + '的消息，消息内容是：' + e.args.info);
    })
    person3.subscribe('carInfo', function (e) {
      console.log('person3得到了关于' + e.type + '的消息，消息内容是：' + e.args.info);
    })
    //发布消息
    msgCenter.release('carInfo', { info: '新款汽车上市！' })
    msgCenter.release('newsInfo', { info: '某国家领导人访华' })
    //测试检测重复订阅功能
    person3.subscribe('carInfo', function (e) {
      console.log('person3得到了关于' + e.type + '的消息，消息内容是：' + e.args.info);
    })
    //测试取消订阅功能
    person3.cancel('carInfo')
    msgCenter.release('carInfo',{info:'再发一条消息'})
```

上面代码实现的核心是把每个实例的函数传递给msgCenter函数中的_msg数组保存好，并且通过type属性来进行区分，如果有消息发布，就全部执行一遍该数组的所有方法

### 策略模式

> strategy，
>
> 在现实生活中常常遇到实现某种目标存在多种策略可供选择的情况，例如，出行旅游可以乘坐飞机、乘坐火车、骑自行车或自己开私家车等，超市促销可以釆用打折、送商品、送积分等方法。
>
> 在软件开发中也常常遇到类似的情况，当实现某一个功能存在多种算法或者策略，我们可以根据环境或者条件的不同选择不同的算法或者策略来完成该功能，如数据排序策略有冒泡排序、选择排序、插入排序、二叉树排序等。
>
> 如果使用多重条件转移语句实现（即硬编码），不但使条件语句变得很复杂，而且增加、删除或更换算法要修改原代码，不易维护，违背开闭原则。如果采用策略模式就能很好解决该问题。

通俗解析:

> 假设一段文字需要进行检测是否为数字，是否为空，是否是邮箱等等，一般来说我们会使用if_else来进行判断，如果既要检测是否为数字又是否为电话号码，那么就需要两个if_else，且灵活性和复用性并不强，而策略模式是把一大堆需要用到的检测方法或者算法或者功能封装到一个对象中，并且为对象配置validate方法，用以调用对象中的方法，随便用，一个或者多个，复用，都没问题

例子：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input type="text">
  <script>
    //策略模式
    var formStrategy = (function () {
      var strategy = {
        notEmpty: function (value) {
          return value.length ? '' : '请填写内容'
        },
        isNumber: function (value) {
          var reg = /^[0-9]+(\.[0-9])?$/;
          return reg.test(value) ? '' : '请填写一个数字'
        },
        isPhone: function (value) {
          //010-12345678 0022-1234567
          var reg = /^\d{3}-\d{8}$|^\d{4}-\d{7}$/
          return reg.test(value) ? '' : '请输入一个正确的电话好吗'
        }
      }
      return {
        // 检测方法，type是输入要检测的类型，value是值
        validate: function (type, value) {
          //去除输入文字两边的空白符
          value = value.replace(/^\s*|\s*$/g, "")
          return strategy[type] ? strategy[type](value) : '没有这个检测方法，请手动添加'
        },
        //临时添加自定义检测算法
        addStrategy: function (type, fn) {
          if (strategy[type]) {
            return '这个方法已经存在'
          } else {
            strategy[type] = fn
          }
        }
      }
    })()
    //测试
    var oInput = document.querySelector('input')
    oInput.onchange = function () {
      var result;
      result = formStrategy.validate('notEmpty', this.value) || formStrategy.validate('isNumber', this.value) || '通过检测'
      console.log(result);
    }
  </script>
</body>

</html>
```

### 链模式

> 链模式是实现链式调用的主要方法，通过在自身方法中返回自身的方式，在一个对象连续多次调用自身方法可以简化写法
>
> 这种链式调用在开很多库和框架如jquery/zepto中频繁的被使用。

简单的链模式

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    var obj = {
      a: function () {
        console.log('aaa');
        return this
      },
      b: function () {
        console.log('bbb');
        return this
      }
    }

    obj.a().b().a().a()    ///aaa bbb aaa aaa
  </script>
</body>
</html>
```

### 委托模式

> 当多个对象需要处理同一请求时，可以将这些请求交由另一个对象统一处理

普通模式

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul class="ul1">
    <li>aaaa</li>
    <li>bbbb</li>
    <li>cccc</li>
    <li>dddd</li>
  </ul>
  <script>
     var aLis = document.getElementsByTagName('li')
     for (let index = 0; index < aLis.length; index++) {
       (function (i) {
        aLis[index].onclick = function () {
           console.log(index);
         }
       })(index)
     }
  </script>
</body>
</html>
```

这样会绑定多个事件，会影响性能

使用委托模式进行改进：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul class="ul1">
    <li>aaaa</li>
    <li>bbbb</li>
    <li>cccc</li>
    <li>dddd</li>
  </ul>
  <script>
    var oUl = document.querySelector('ul')
    oUl.onclick = function (e) {
      console.log(e);
      var e = e || window.event
      target = e.target || e.srcElement
      if(target.nodeName.toLowerCase() === 'li'){
        console.log(target.innerHTML);
      }
    }
    var oLi = document.createElement('li')
    oLi.innerHTMl = 'eeee'
    oUl.appendChild(oLi)
  </script>
</body>
</html>
```

### 数据访问对象模式

> 数据访问对象模式主要是用来抽象和封装一个对象来对数据源进行访问和存储，这样可以方便对数据的管理，以及避免数据间的重复，覆盖等问题

实例：

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script>
    // {
    //   key: expire|value
    // }
    function DataVisitor(splitSign) {
      this.splitSign = splitSign || '|'
    }
    DataVisitor.prototype = {
      status: {
        SUCCESS: 1,
        FAILURE: 0,
        OVERFLOWER: 2,
        TIMEOUT: 3
      },
      set: function (key, value, cbFn, expireTime) {
        var status = this.status.SUCCESS;
        expireTime = typeof expireTime === 'number' ? expireTime + new Date().getTime() : -1
        try {
          window.localStorage.setItem(key, expireTime + this.splitSign + value)
        } catch (e) {
          status = this.status.OVERFLOWER
        }
        cbFn && cbFn.call(this, status, key, value);
        return value
      },
      get: function (key, cbFn) {
        var status = this.status.SUCCESS
        var value = window.localStorage.getItem(key)
        if (value) {
          var index = value.indexOf(this.splitSign),
            time = value.slice(0, index)
          if (time > new Date().getTime() || time == -1) {
            value = value.slice(index + this.splitSign.length)
          } else {
            value = null;
            status = this.status.TIMEOUT;
            window.localStorage.removeItem(key)
          }
        } else {
          status = this.status.FAILURE
        }
        cbFn && cbFn.call(this, status, key, value)
      },
      remove: function (key, cbFn) {
        var status = this.status.FAILURE;
        value = window.localStorage.getItem(key);
        if (value) {
          value.slice(value.indexOf(this.splitSign) + this.splitSign.length)
          window.localStorage.removeItem(key);
          status = this.status.SUCCESS;
        }
        cbFn && cbFn.call(this, status)
      }
    }
    
    var test = new DataVisitor();
    test.set('aaa', '1273', function (status) {
      console.log(Boolean(status));
    }, 2000)
    test.get('aaa', function (status, key, value) {
      console.log(status, key, value);
    })
    setTimeout(() => {
      test.get('aaa', function (status, key, value) {
        console.log(status, key, value);
      }, 2000)
    }, 1000);
    setTimeout(() => {
      test.get('aaa', function (status, key, value) {
        console.log(status, key, value);
      }, 2000)
    }, 3000);
    // test.remove('aaa',function (status) {
    //    console.log(Boolean(status));
    // })
    // test.remove('aaab', function (status) {
    //     console.log(Boolean(status));
    //   })
  </script>
</body>

</html>
```

### 等待者模式

> 通过对多个异步进程的监听，对未来事件进行统一管理。

```
 //等待对象
    var Writer = function () {
      var dfd = [],//等待对象容器,When中传入的异步执行方法，实为事件对象数组
        doneArr = [],//成功回调方法容器，用于存放done中传入的成功回调方法
        failArr = [],//失败回调方法容器，用于存放fail中传入的失败回调方法
        slice = Array.prototype.slice,
        that = this;

      //监控对象类
      var Primise = function () {
        //监控成功状态
        this.resolved = false;
        //监控失败状态
        this.rejected = false;
      }

      //扩展对异步逻辑的监控方法，这两个方法都是因异步逻辑状态的改变而执行相应操作的
      Primise.prototype = {
        //解决成功
        resolve: function () {
          //设置当前监控对象解决成功，每一个事件都有自己独立的监控对象，
          //都有自己的独立成功状态与失败状态
          this.resolved = true;
          //如果没有监控对象则取消执行
          if (!dfd.length) return;
          //遍历所有注册了的监控对象
          for (var i = dfd.length - 1; i >= 0; i--) {
            //如果有任意一个监控对象没有被解决或者解决失败则返回
            if (dfd[i] && !dfd[i].resolved || dfd[i].rejected) {
              return;
            }
            //如果已经解决则清除已解决监控对象
            dfd.splice(i, 1);
          }
          //执行解决成功回调方法
          _exec(doneArr);
        },
        //解决失败
        reject: function () {
          //设置当前监控对象解决失败
          this.rejected = true;
          //如果没有监控对象则取消执行
          if (!dfd.length) return;
          //清除所有监控对象
          dfd.splice(0);
          //执行解决失败回调方法
          _exec(failArr);
        }
      }
      //创建监控对象
      that.Deferred = function () {
        return new Primise();
      }
      //监控异步方法 参数：监控对象，用于监测已经注册过的监控对象的异步逻辑
      that.When = function () {
        //设置监控对象
        dfd = slice.call(arguments);
        var i = dfd.length;
        for (--i; i >= 0; i--) {
          //如果不存在监控对象，或者监控对象已经解决，或者不是监控对象
          if (!dfd[i] || dfd[i].resolved || dfd[i].rejected || !dfd[i] instanceof Primise) {
            //清除当前监控对象
            dfd.splice(i, 1);
          }
        }
        return that;
      }
      //解决成功回调函数添加方法，用于向对应的回调容器中添加相应回调
      that.done = function () {
        doneArr = doneArr.concat(slice.call(arguments));
        return that;
      }
      //解决失败回调函数添加方法，用于向对应的回调容器中添加相应回调
      that.fail = function () {
        failArr = failArr.concat(slice.call(arguments));
        return that;
      }
      //回调执行方法
      function _exec(arr) {
        //遍历回调数组执行回调,注意，此处为了按先后顺序执行，不能用逆向循环
        for (var i = 0, len = arr.length; i < len; i++) {
          try {
            arr[i] && arr[i]();
          } catch (e) { }
        }
      }
    }
    //运用场景模拟：假设页面中有多个随机运动的彩蛋，每个彩蛋结束后都要展示一个欢迎页面
    var waiter = new Writer();

    //第1个彩蛋，5秒后停止
    var first = function () {
      //创建监听对象
      var dtd = waiter.Deferred();
      setTimeout(function () {
        console.log('first');
        //发布解决成功消息，执行解决成功回调，
        //当在执行成功回调时，同时会检查其他事件的最后状态，
        //如果其他事件都已经成功执行，则执行成功回调
        //如果有其他事件还未执行完毕，则只负责把自己的状态设置为成功，
        dtd.resolve();
      }, 500);
      //返回监听对象
      return dtd;
    }();

    //第2个彩蛋，10秒后停止
    var second = function () {
      //创建监听对象
      var dtd = waiter.Deferred();
      setTimeout(function () {
        console.log('second');
        //发布解决成功消息
        dtd.resolve();//
      }, 1000);
      //返回监听对象
      return dtd;
    }();

    //最后，我们用等待者对象监听两个彩蛋的工作状态，并执行相应的成功回调与失败回调
    waiter
      .When(first, second)//把异步方法加入when当中监听
      .done(function () {
        //把成功回调方法加入donearr中保存，在监听的事件中，
        //只要有一个事件的最终状态为失败，则整个结果为失败，成功队列中的方法不再执行
        //当且仅当所有的最终结果为成功，才算成功，才会执行done中方法
        console.log('success');
      }, function () {
        console.log('success again');
      })
      .fail(function () {
        //把失败回调方法加入failarr中保存，只要有一个事件的最终结果为失败，则执行失败回调方法
        console.log('fail');
      }, function () {//把失败回调方法加入failarr中保存
        console.log('fail again');
      })

     //first
     //second
     //success
     //success again
```

### MVC模式

> MVC即Model-View-Controller（模型-视图-控制器）是一种软件设计模式，最早出现在Smalltalk语言中，后被Sun公司推荐为Java EE平台的设计模式。

　MVC把应用程序分成了上面3个核心模块，这3个模块又可被称为业务层-视图层-控制层。顾名思义，它们三者在应用程序中的主要作用如下：

**业务层**：负责实现应用程序的业务逻辑，封装有各种对数据的处理方法。它不关心它会如何被视图层显示或被控制器调用，它只接受数据并处理，然后返回一个结果。

**视图层**：负责应用程序对用户的显示，它从用户那里获取输入数据并通过控制层传给业务层处理，然后再通过控制层获取业务层返回的结果并显示给用户。

**控制层**：负责控制应用程序的流程，它接收从视图层传过来的数据，然后选择业务层中的某个业务来处理，接收业务层返回的结果并选择视图层中的某个视图来显示结果。

![img](https://t11.baidu.com/it/u=3066061642,1532806395&fm=173&app=25&f=JPEG?w=504&h=300&s=A983CC1223DA6DC80A761159020050FA)

在MVC里，View是可以直接访问Model的，所以View里会包含Model信息以及一些业务逻辑。 MVC模型关注的是Model的不变，所以在MVC模型里，Model不依赖于View，但是 View是依赖于Model的。不仅如此，因为有一些业务逻辑在View里实现了，导致要更改View也是比较困难的，至少那些业务逻辑是无法重用的。

代码：

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script>
    //一个简单的mvc实例
    var MVC = {}

    MVC.model = (function () {
      var data = {
        sidebar: [{
          title: 'sidebar1',
          href: './a.html'
        }, {
          title: 'sidebar2',
          href: './b.html'
        }, {
          title: 'sidebar3',
          href: 'http://www.baidu.com'
        }]
      }

      return {
        getData: function (key) {
          return data[key]
        },
        setData: function (key, value) {
          data[key] = value
          MVC.view('createSidebar')
        }
      }
    })()

    MVC.view = (function () {
      var m = MVC.model
      var view = {
        createSidebar: function () {
          var data = m.getData('sidebar')
          var html = ''
          html += '<div id ="#sidebar">'
          for (let i = 0; i < data.length; i++) {
            html += '<div class="sidebar-item"><a href="' + data[i].href + '">' + data[i].title + '</a></div>'
          }
          html += '</div>'

          document.body.innerHTML += html
        }
      }
      return function (v) {
        view[v]()
      }
    })()

    MVC.ctrl = (function () {
      var m = MVC.model
      var v = MVC.view
      var c = {
        initSideBar: function () {
          v('createSidebar')
        },
        updateSiderBar: function () {
          m.setData('sidebar', [{ title: 'new sidebar', href: 'http://www.baidu.com' }])
        }
      }
      return c
    })()

    window.onload = function () {
      //从control修改model
      MVC.ctrl.initSideBar()
      setTimeout(() => {
        MVC.ctrl.updateSiderBar()
      }, 3000);
      setTimeout(() => {
        MVC.view('createSidebar')
      }, 6000);
      setTimeout(() => {
        MVC.view('createSidebar')
      }, 9000);
    }
  </script>
</body>

</html>
```

### MVVM模式

> MVVM模式在传统MVC模式下进行改造，实现其重在数据驱动视图的一种设计模式。

<img src="https://i.loli.net/2021/02/27/WZCXuRrNTIUvdHf.png" alt="image-20210219030956917" style="zoom:67%;" />

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script>
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
            return value
          },
          set: function (newVal) {
            value = newVal
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

    setTimeout(() => {
      model.b = 3
    }, 2000);
    setTimeout(() => {
      model.b = 11111
    }, 3000);

  </script>
</body>

</html>
```

**MVC与MVVM的区别**

在MVC里，View是可以直接访问Model的，所以View里会包含Model信息以及一些业务逻辑。 MVC模型关注的是Model的不变，所以在MVC模型里，Model不依赖于View，但是 View是依赖于Model的。不仅如此，因为有一些业务逻辑在View里实现了，导致要更改View也是比较困难的，至少那些业务逻辑是无法重用的。

MVVM在概念上是真正将页面与数据逻辑分离的模式，它把数据绑定工作放到一个JS里去实现，而这个JS文件的主要功能是完成数据的绑定，即把model绑定到UI的元素上。此外MVVM另一个重要特性双向绑定，它更方便你去同时维护页面上都依赖于某个字段的N个区域，而不用手动更新它们。