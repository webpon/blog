### 简介

> 数据结构是相互之间存在一种或多种特定关系的数据元素的集合

### 栈（stack)

> 栈是一种操作受限的线性表只允许从一端插入和删除数据。
>
> 栈有两种存储方式，即线性存储和链接存储（链表）。栈的一个最重要的特征就是栈的插入和删除只能在栈顶进行，所以每次删除的元素都是最后进栈的元素，故栈也被称为后进先出（LIFO）表。每个栈都有一个栈顶指针，它初始值为-1，且总是指向最后一个入栈的元素，栈有两种处理方式，即进栈（push）和出栈（pop），因为在进栈只需要移动一个变量存储空间，所以它的时间复杂度为O(1)，但是对于出栈分两种情况，栈未满时，时间复杂度也为O(1)，但是当栈满时，需要重新分配内存，并移动栈内所有数据，所以此时的时间复杂度为O(n)。以下举例栈结构的两种实现方式，线性存储和链接存储。

#### javascript栈的实现（线性存储）

```
    //封装栈类
    function Stack() {
      //栈中的属性
      this.items = []
      //栈的相关操作
      //  1、将元素压入栈
      Stack.prototype.push = function (element) {
        this.items.push(element)
      }
      // 2、从栈中取出元素
      Stack.prototype.pop = function () {
        return this.items.pop()
      }
      //3、查看栈顶元素
      Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
      }
      // 4、判断栈是否为空
      Stack.prototype.isEmpty = function () {
        return this.items.length == 0
      }
      // 5、获取栈中元素的个数
      Stack.prototype.size = function () {
        return this.items.length
      }
      // 6、toString方法
      Stack.prototype.toString = function () {
        let resultString = ""
        for (let i = 0; i < this.items.length; i++) {
          resultString += this.items[i] + ' '
        }
        return resultString
      }
    }
    //栈的使用
    var s = new Stack()
    s.push('2')
    s.push('3')
    s.push('4')
    console.log(s);  
    console.log(s.size()); //3
    console.log(s.peek()); //4
    console.log(s.isEmpty()); //false
```

#### 栈的应用

**1、把十进制数转为二进制数**

​		要把十进制转化成二进制，我们可以将十进制数字和2整除(向下取整)（二进制是满二进一），直到结果是0为止。

​		举个例子，把十进制的数字10转化成二进制的数字，过程大概是这样：

​		<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgXLHYj2UJDnf8g4I.png" alt="image-20210116173230197" style="zoom:80%;" />

代码实现（栈实现代码继续使用上面的代码）：

```
 // 函数：将十进制转成二进制   
      // 十进制  二进制
      // Decimal binary
    function dec2bin(decNumber) {
      // 1、定义栈对象
      let stack = new Stack()

      // 2、循环操作
      while(decNumber > 0){
        // 2.1、获取余数，并且放入到栈中
        stack.push(decNumber % 2)

        //2.2、获取整除后的结果，作为下一次运行的数字
        decNumber = Math.floor(decNumber / 2)
      }
      
      // 3、从栈中取出0和1
      let binaryString = ""
      while(!stack.isEmpty()){
        binaryString += stack.pop()
      }
      return binaryString
    }
    //测试十进制转二进制的函数
    console.log(dec2bin(5));  //101
    console.log(dec2bin(50)); //110010
```



### 队列(queue)

> 只允许在一端插入数据操作，在另一端进行删除数据操作的特殊线性表；
>
> 进行插入操作的一端称为队尾（入队列），进行删除操作的一端称为队头（出队列）；队列具有先进先出（FIFO）的特性。

#### js基础队列

##### 线性存储实现

ES5语法：

```
//封装队列类
    function Queue() {
      //队列中的属性
      this.items = []
      //栈的相关操作
      //  1、将元素加入到队列中
      Queue.prototype.add = function (element) {
        this.items.push(element)
      }
      // 2、从队列中删除前端元素
      Queue.prototype.delete = function () {
        return this.items.shift()
      }
      //3、查看队列前端元素
      Queue.prototype.front = function () {
        return this.items[0]
      }
      // 4、判断队列是否为空
      Queue.prototype.isEmpty = function () {
        return this.items.length == 0
      }
      // 5、获取队列中元素的个数
      Queue.prototype.size = function () {
        return this.items.length
      }
      // 6、toString方法
      Queue.prototype.toString = function () {
        let resultString = ""
        for (let i = 0; i < this.items.length; i++) {
          resultString += this.items[i] + ' '
        }
        return resultString
      }
    }
    //队列的使用
    let q = new Queue()
    q.add('22')
    q.add('33')
    q.add('44')
    q.delete()
    console.log(q);
    console.log(q.size());
    console.log(q.front());
    console.log(q.isEmpty());
```

ES6语法：

```
    //封装队列类
    class Queue {
        constructor() {
            //队列中的属性
            this.items = []
       }
      //栈的相关操作
      //  1、将元素加入到队列中
      add = function (element) {
        this.items.push(element)
      }
      // 2、从队列中删除前端元素
      delete = function () {
        return this.items.shift()
      }
      //3、查看队列前端元素
      front = function () {
        return this.items[0]
      }
      // 4、判断队列是否为空
      isEmpty = function () {
        return this.items.length == 0
      }
      // 5、获取队列中元素的个数
      size = function () {
        return this.items.length
      }
      // 6、toString方法
      toString = function () {
        let resultString = ""
        for (let i = 0; i < this.items.length; i++) {
          resultString += this.items[i] + ' '
        }
        return resultString
      }
    }
    //栈的使用
    var q = new Queue()
    q.add('22')
    q.add('33')
    q.add('44')
    q.delete()
    console.log(q);
    console.log(q.size());
    console.log(q.front());
    console.log(q.isEmpty());
```

#### 优先级队列

> 优先级队列是一种常见的数据结构，在《STL源码剖析》中给出的定义是：priorty_queue是以个带权值观念的queue，它允许加入新元素，移除旧元素，审视元素值等功能。
>
> 由于这是一个queue，所以只允许在底端加入元素，并从顶端取出元素。 
> 但是优先级队列中的元素并非依照被推入队列的顺序排列。而是自动依照元素的权值排列。权值最高者排在最前面。 
> 缺省的情况下维护的是一个大堆，即权值以从高到低排列。
>
> 因为优先级队列的内部是用堆来维护，所以很多时候我们要使用堆的情况下会选择用优先级队列来代替

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JlZF9yZWRfcmVk,size_16,color_FFFFFF,t_70.png)

优先级队列的实现：

​		实现优先级队列主要考虑两个方面：

​		1、封装元素和优先级放在一起（可以封装一个新的构造函数）

​		2、添加元素时，将新插入元素的优先级和队列中已经存在的元素优先级进行比较，优先级高的优先，同等优先级的按先后顺序

```
    //封装优先级队列
    function PriorityQueue() {
      //在PriorityQueue重新创建了一个类：可以理解为内部类
      function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
      }
      //封装属性
      this.items = []
      //实现插入方法
      PriorityQueue.prototype.add = function (element, priority) {
        //1、创建QueueElement实例
        let queueElement = new QueueElement(element, priority)

        // 2、判断队列是否为空
        if (this.items.length == 0) {
          this.items.push(queueElement)
        } else {
          let added = false
          for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority > this.items[i].priority) {
              this.items.splice(i, 0, queueElement)
              added = true
              break
            }
          }
          if (!added) {
            this.items.push(queueElement)
          }
        }

      }
      // 2、从队列中删除前端元素
      PriorityQueue.prototype.delete = function () {
        return this.items.shift()
      }
      //3、查看队列前端元素
      PriorityQueue.prototype.front = function () {
        return this.items[0]
      }
      // 4、判断队列是否为空
      PriorityQueue.prototype.isEmpty = function () {
        return this.items.length == 0
      }
      // 5、获取队列中元素的个数
      PriorityQueue.prototype.size = function () {
        return this.items.length
      }
      // 6、toString方法
      PriorityQueue.prototype.toString = function () {
        let resultString = ""
        for (let i = 0; i < this.items.length; i++) {
          resultString += "<——" + "[" + this.items[i].element + '，' + this.items[i].priority + "]"
        }
        return resultString
      }
    }
    let q = new PriorityQueue()
    q.add('三级(a)', 1)    
    q.add('一级(b)', 100)
    q.add('二级(c)', 10)
    q.add('三级(d)', 1)
    q.add('一级(e)', 100)
    q.add('二级(f)', 10)
    console.log(q.front())    // QueueElement {element: "一级(b)", priority: 100}element: "一级(b)"priority: 100__proto__: Object
    console.log(q.size())	//6
    console.log(q.toString()) //<——[一级(b)，100]<——[一级(e)，100]<——[二级(c)，10]<——[二级(f)，10]<——[三级(a)，1]<——[三级(d)，1]
    q.delete()				
    console.log(q.size()) 	//5
    console.log(q.toString()) //<——[一级(e)，100]<——[二级(c)，10]<——[二级(f)，10]<——[三级(a)，1]<——[三级(d)，1]
    q.add('二级(g)', 10)
    console.log(q.size())     //6
    console.log(q.toString()) //<——[一级(e)，100]<——[二级(c)，10]<——[二级(f)，10]<——[二级(g)，10]<——[三级(a)，1]<——[三级(d)，1]
```

#### 双端队列

> **双端队列** 是一种允许我们同时从前端和后端添加和删除元素的特殊队列，它是队列和栈的结合体。

```
class Deque {
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    // 等同于Array中的unshift方法
    addFront(ele) {
        if (this.isEmpty()) {
            this.items[this.count] = ele
        } else if (this.lowestCount > 0) {
            this.lowestCount -= 1
            this.items[this.lowestCount] = ele
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.items[0] = ele
        }
            this.count++
            return ele
        }
    // 等同于Array中的shift方法
    removeFront() {
        if (this.isEmpty()) {
            return
        }
        const delEle = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return delEle
    }
    addBack(ele) {
        this.items[this.count] = ele
        this.count++
    }
    removeBack() {
        if (this.isEmpty()) {
            return
        }

        const delEle = this.items[this.count - 1]
        delete this.items[this.count - 1]
        this.count--
        return delEle
    }
    peekFront() {
        if (this.isEmpty()) {
            return
        }
        return this.items[this.lowestCount]
    }
    peekBack() {
        if (this.isEmpty()) {
            return
        }
        return this.items[this.count - 1]
    }
    size() {
        return this.count - this.lowestCount
    }

    isEmpty() {
        return this.size() === 0
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}
```

#### 应用

##### 击鼓传花

> 击鼓传花游戏规则 就是 所有人围城一圈 从1开始报数 报到给定数字的出局 接着下个人重新从1报数 留下最后一个人胜利

```
 // 定义队列
  class Queue {
    items = [];
    constructor(params) {
      this.items = [...params];
    }
    // 往队列尾添加元素
    push(value) {
      this.items.push(value);
    }
    // 获取队列最底部元素
    delect() {
      return this.items.shift();
    }
    seeItem() {
      return this.items[0];
    }
    size() {
      return this.items.length;
    }
    toString(symbol = " ") {
      let result = "";
      for (let i = 0, len = this.items.length; i < len; i++) {
        result = this.items[i] + symbol;
      }
      return result;
    }
  }

  function hotPotato(nameList, num) {
    const queue = new Queue(nameList);
    while (queue.size() > 1) {
      for (let i = 0; i < num - 1; i++) {
        queue.push(queue.delect());
      }
      queue.delect();
    }
    nameList.indexOf(queue.items[0]);
    alert(
      `最终是${queue.items[0]}赢了，在原数组中的位置是${nameList.indexOf(
        queue.items[0]
      )}`吧 
    );
  }

  hotPotato吧 (["小名", "李磊", "小花", "小黑", "小绿", "小兰"], 3);
```

##### 字符串回文验证

> 回文是正反都能读回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam或racecar。

```text
function palindromeChecker(str) {
  if((str!==null && str.length== 0) || str === undefined || str === null){
    return false
  }
  const q = []
  const str1 = str
  const len = str1.length
  let flag = true
  for(let i = 0;i<len;i++) {
      q.push(str1[i])
   }
  while(q.length > 1 && flag) {
     const frontEl = q.shift()
     const backEl = q.pop()
     if(frontEl != backEl) { 
        flag = false
      }
   }
  return flag
}
```

![image-20220625230919595](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220625230919595.png)

### 链表结构

#### 单向链表简介

> 链表是一种物理[存储单元](https://baike.baidu.com/item/存储单元/8727749)上非连续、非顺序的[存储结构](https://baike.baidu.com/item/存储结构/350782)，[数据元素](https://baike.baidu.com/item/数据元素/715313)的逻辑顺序是通过链表中的引用或者[指针](https://baike.baidu.com/item/指针/2878304)链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储[数据元素](https://baike.baidu.com/item/数据元素)的数据域，另一个是存储下一个结点地址的[指针](https://baike.baidu.com/item/指针/2878304)域。 

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20180502195346635.png)

**相对于数组，链表有以下优势：**

​	1、内存空间不是必须连续的，可以充分，利用计算机的内存，实现灵活的内存动态管理

​	2、链表不必在创建时就确定大小，并且大小可以无限的延伸下去

​	3、链表在插入和删除数据时，时间复杂度可以达到O(1),相对数组效率高很多

注：插入操作复杂度：单链表 表头 O(1) 表尾O(n)
										循环链表 表头 O(1) 表尾O(n)
										双向链表 O(1)

**相对于数组，链表有以下缺点：**

​	1、链表访问任何一个位置的元素时，都需要从头开始访问。（无法跳过第一个元素访问任何一个元素)

​	2、无法通过下标直接访问元素，需要从头一个个访问，直到找到对应元素，时间复杂度为O(n),而线性表和顺序表相应的时间复杂度分别是O(logn)和O(1)。

#### js单链表的实现

```
//封装单向链表类
    function LinkedList() {
      //内部类：节点类
      function Node(data) {
        this.data = data
        this.next = null
      }
      //属性
      this.head = null
      this.length = 0
      //1、append追加方法
      LinkedList.prototype.append = function (data) {
        // 1、创建新的节点
        let newNode = new Node(data)
        //2、判断是否添加的是第一个节点
        if (this.length === 0) {   //2.1、是第一个节点
          this.head = newNode
        } else {                   //2.2、不是第一个节点
          //找到最后一个节点
          let current = this.head
          while (current.next) {
            current = current.next
          }
          //最后节点的next指向新的节点
          current.next = newNode
        }
        this.length++
      }
      // 3、insert插入方法
      LinkedList.prototype.insert = function (position, data) {
        // 1、对position进行越界判断
        if (position < 0 || position > this.length) {
          return false
        }
        //2、根据data创建newNode
        let newNode = new Node(data)
        // 3、判断插入的位置是否是第一个
        if (position === 0) {
          newNode.next = this.head
          this.head = newNode
        } else {
          let index = 0
           
          let previous = null
          while (index < position) {
            index++
            previous = current
            current = current.next
          }
          newNode.next = current
          previous.next = newNode
        }
        // 4、length ++
        this.length++
        return true
      }
      //2、toString将链表转成字符串形式
      LinkedList.prototype.toString = function () {
        let str = ''
        let current = this.head
        //while循环中的括号会进行隐性转换
        while (current) {
          str += current.data + " "
          current = current.next
        }
        return str
      }
      // 3、get方法 获取对应位置的元素
      LinkedList.prototype.get = function (position) {
        // 1、对position进行越界判断
        if (position < 0 || position >= this.length) {
          return false
        }
        // 2、获得对应的data
        let current = this.head
        let index = 0
        while (index < position) {
          index++
          current = current.next
        }
        return current.data
      }
      // 4、indexOf 返回元素在列表中的索引
      LinkedList.prototype.indexOf = function (data) {
        // 2、获得对应的data
        let current = this.head
        let index = 0
        while (current) {
          if (current.data === data) {
            flag = true
            return index
          }
          index++
          current = current.next
        }
        return -1
      }
      // 5、update方法 修改某个位置的元素
      LinkedList.prototype.update = function (position, newData) {
        // 1、对position进行越界判断
        if (position < 0 || position >= this.length) {
          return false
        }
        // 2、查找正确的节点
        let current = this.head
        let index = 0
        while (index < position) {
          index++
          current = current.next
        }
        // 3、将position位置的node的data修改成newData
        current.data = newData
        return true
      }
      // 6、removeAt 从列表的特定位置移除一项
      LinkedList.prototype.removeAt = function (position) {
        // 1、对position进行越界判断
        if (position < 0 || position >= this.length) {
          return false
        }
        // 2、判断是否删除的是第一个节点
        if (position === 0) {
          this.head = this.head.next
          this.head.next = null
        }
        else {
          let index = 0
          let current = this.head
          let previous = null
          while (index < position) {
            index++
            previous = current
            current = current.next
          }
          // 前一个节点的next指current的next即可
          previous.next = current.next
          current.next = null
          // 3、length - 1
          this.length--
          return true
        }
      }
      // 7、remove从列表中移除一项
      LinkedList.prototype.remove = function (data) {
        // 1、获取data在列表中的位置
        let position = this.indexOf(data)
        // 2、根据位置信息，删除节点
        return this.removeAt(position)
      }
      // 8、isEmpty 如果链表中不包含任何元素，返回true,如果链表长度大于0则返回false
      LinkedList.prototype.isEmpty = function () {
        return this.length === 0
      }
      //9、size 如果链表包含的元素个数
      LinkedList.prototype.size = function () {
        return this.length
      }
    }
    //實例化單鏈表
    let link = new LinkedList()
    link.append('10')
    link.append('11')
    console.log(link);
    link.insert(1, 'fuck')
    link.insert(3, 'you')
    console.log(link.toString());
    console.log(link.get(1));
    console.log(link.indexOf('fuck'));
    console.log(link.update(1, 'fuc'));
    link.removeAt(3)
    link.remove('11')
    console.log(link.toString());
    console.log(link.isEmpty());
    console.log(link.size());
  </script>
```

插入操作图示

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imghf1Lld9nB2AFZY5.png" alt="image-20210120214609061" style="zoom:80%;" />

#### 双向链表简介

> 双向链表也叫双链表，是链表的一种，它的每个数据[结点](https://baike.baidu.com/item/结点/9794643)中都有两个引用或[指针](https://baike.baidu.com/item/指针/2878304)，分别指向直接后继和直接前驱。所以，从双向链表中的任意一个结点开始，都可以很方便地访问它的前驱结点和后继结点。一般我们都构造双向[循环链表](https://baike.baidu.com/item/循环链表/3228465)。

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1146465-20170429154748350-758050755.png" alt="img" />

![image-20210121115202505](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgPZybI8rs74BgjUD.png)

特点： 

1、既可以从头遍历到尾，也可以从尾遍历到头

2、一个节点既有向前连接的引用，也有一个向后连接的引用

双向链表的缺点：

1、每次在插入或删除某个节点时，需要处理四个引用，而不是两个。也就是实现起来要困难一些

2、并且对比单向链表，占用内存空间更大一些

但是这些缺点和我们使用起来的方便程度相比是微不足道的

#### js双向链表的实现

```
    //封装双向链表
    function DoublyLinkedList() {
      //内部类：节点类
      function Node(data) {
        this.data = data
        this.prev = null
        this.next = null
      }
      //属性
      this.head = null
      this.tail = null
      this.length = 0
      // 常见的操作：方法
      // 1、append方法
      DoublyLinkedList.prototype.append = function (data) {
        // 1、根据data创建节点
        let newNode = new Node(data)
        // 2、判断添加的是否是第一个节点
        if (this.length == 0) {
          this.head = newNode
          this.tail = newNode
        } else {
          newNode.prev = this.tail
          this.tail.next = newNode
          this.tail = newNode
        }
        this.length++
      }
      // 2、insert 插入
      DoublyLinkedList.prototype.insert = function (position, data) {
        // 1、越界判断
        if (position < 0 || position > this.length) {
          return false
        }
        // 2、根据data创建新的节点
        let newNode = new Node(data)
        // 3、判断原来的列表是否为空
        if (this.length === 0) {
          this.head = newNode
          this.tail = newNode
        } else {
          if (position === 0) {   //2.1、判断position是否为0
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
          } else if (position === this.length) {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            newNode.next = null
          } else {
            let current = this.head
            let index = 0
            while (index < position) {
              index++
              current = current.next
            }
            //修改指针
            current.prev.next = newNode
            newNode.prev = current.prev
            newNode.next = current
            current.prev = newNode
          }
        }
        this.length++
        return true
      }
      // 3、get方法      
      DoublyLinkedList.prototype.get = function (position) {
        // 1、越界判断
        if (position < 0 || position >= this.length) {
          return false
        }
        // 2、获取元素
        let current = this.head
        let index = 0
        while (index < position) {
          index++
          current = current.next
        }
        return current.data
      }
      // 4、indexOf方法
      DoublyLinkedList.prototype.indexOf = function (data) {
        let current = this.head
        let index = 0
        while (current) {
          if (current.data === data) {
            return index
          } else {
            current = current.next
            index++
          }
        }
        return -1
      }
      // 5、update方法      
      DoublyLinkedList.prototype.update = function (position, data) {
        // 1、越界判断
        if (position < 0 || position >= this.length) {
          return false
        }
        // 2、获取元素
        let current = this.head
        let index = 0
        while (index < position) {
          index++
          current = current.next
        }
        current.data = data
        return true
      }
      // 6、removeAt 从列表的特定位置移除一项
      DoublyLinkedList.prototype.removeAt = function (position) {
        // 1、越界判断
        if (position < 0 || position >= this.length) {
          return false
        }
        // 2,判断是否只有一个节点
        let current = this.head
        if (this.length === 0) {
          this.head = null
          this.tail = null
        } else {
          if (position == 0) {   //判断是否删除的是第一个节点
            this.head.next.prev = null
            this.head = this.head.next
          } else if (position == this.length - 1) {  //最后节点
            current = this.tail
            this.tail.prev.next = null
            this.tail = this.tail.prev
          } else {
            let index = 0

            while (index < position) {
              current = current.next
              index++
            }
            current.prev.next = current.next
            current.next.prev = current.prev
          }
        }
        this.length--
        return current.data
      }
      // 7,remove方法
      DoublyLinkedList.prototype.remove = function (data) {
        // 1,根据data获取下标值
        let index = this.indexOf(data)
        // 2,根据index删除对应位置的节点
        return this.removeAt(index)
      }
      // 8,isEmpty方法
      DoublyLinkedList.prototype.isEmpty = function () {
        return this.length
      }
      // 9,size方法
      DoublyLinkedList.prototype.size = function () {
        return this.length
      }
      // 10,获取链表的第一个元素
      DoublyLinkedList.prototype.getHead = function () {
        return this.head.data
      }
      // 11,获取链表的最后一个元素
      DoublyLinkedList.prototype.getTail = function () {
        return this.tail.data
      }
      // toString方法
      DoublyLinkedList.prototype.toString = function () {
        return this.forwardString()
      }
      //  forwardString 返回正向遍历的节点字符串形式
      DoublyLinkedList.prototype.forwardString = function () {
        let str = ''
        let current = this.head
        while (current !== null) {
          str += current.data + " "
          current = current.next
        }
        return str
      }
      // backwardString 返回反向遍历的节点字符串形式
      DoublyLinkedList.prototype.backwardString = function () {
        let str = ''
        let current = this.tail
        while (current !== null) {
          str += current.data + " "
          current = current.prev
        }
        return str
      }
    }
    let link = new DoublyLinkedList()
    link.append(1)
    link.append(2)
    link.append(3)
    link.insert(2, 4)
    link.insert(3, 5)

    console.log(link.update(1, 'update'))
    console.log(link.removeAt(0));
    console.log(link.toString());
    console.log(link.backwardString());
    console.log(link.get(4));
    console.log(link.indexOf(4));
    console.log(link.size());
    console.log(link.getHead());
```

### 集合结构

#### 简介

同数学中所学的一样，集合(Set)是由一组无序但彼此之间又有一定关系性的成员构成，每个成员在集合中只能出现一次，不同于我们之前说的[字典](https://www.jb51.net/article/167971.htm)，[链表](https://www.jb51.net/article/167962.htm)之类的，它是一种包含了不同元素的数据结构(集合中的元素称为成员)，从其定义中我们可以看出它具有两个很重要的特征：首先，集合中的成员是无序的，其次，集合中的成员是不相同的，即集合中不存在相同的成员。

**集合的定义**

我们要实现一个集合，首先要对其一些定义做了解

- 不包含任何成员的集合称为**空集**，包含一切可能成员的集合称为**全集**。
- 如果两个集合里的成员都完全相同，则称两个集合相等。
- 如果一个集合所有成员都包含于另一个集合，则前一集合称为后一集合的一个**子集**。

**集合的操作**

通常来说，集合的基本操作有以下三种：

- 并集：将两个集合中的成员进行合并，得到一个新的集合
- 交集：将两个集合中共同存在的成员组成的一个新的集合
- 补集：属于一个集合而不属于另一个集合的成员组成的新的集合

注：集合通常是由一组无序的，不能重复的元素构成。

​		1、和数学中的集合名词比较相似，但是数组中的集合范围更大一些，也允许集合中的元素重复

​		2、在计算机中，集合通常表示的结构中元素是不允许重复的

集合是特殊的数组：

​		1、特殊之处在于里面的元素没有顺序，也不能重复

​		2、没有顺序意味着不能通过下标值进行访问，不能重复意味着相同的对象在集合中只会存在一份

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img5lgpkNYFSyzKrXh.png" alt="image-20210121175253633" style="zoom: 67%;" />

#### js集合实现

```
    function Set(value) {
      //属性
      this.items = {}
      //方法
      //add方法
      Set.prototype.add = function (value) {
          //判断当前集合中是否已经包含了该元素
          if (this.has(value)) {
            return false
          }
          //将元素添加到集合中
          this.items[value] = value
        return true
      }
      //has方法
      Set.prototype.has = function (value) {
        //hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
        return this.items.hasOwnProperty(value)
      }
      //remove方法
      Set.prototype.remove = function (value) {
        // 1,判断该集合中是否包含该元素
        if (!this.has(value)) {
          return false
        }
        // 2,将元素从属性中删除
        delete this.items[value]
        return true
      }
      //clear方法
      Set.prototype.clear = function () {
        this.items = {}
        return true
      }
      //size方法
      Set.prototype.size = function () {
        return Object.keys(this.items).length
      }
      //获取集合中所有的值
      Set.prototype.values = function () {
      	
        return Object.keys(this.items)
      }
      //集合间的操作
      //并集:对于给定的两个集合,返回一个包含两个集合中所有元素的新集合
      Set.prototype.union = function (otherSet){
        //this:集合对象A
        //otherSet:集合对象B
        // 1,创建新的集合
        let unionSet = new Set()
        // 2,将A集合中所有的元素添加到新集合中
        let values = this.values()
        for(var i = 0; i < values.length; i++){
          unionSet.add(values[i])
        }
        // 3,将B集合中所有的元素添加到新集合中
        values = otherSet.values()
        for (var i = 0; i < values.length; i++) {
          unionSet.add(values[i])
        }
        return unionSet
      }
      //交集:对于给定的两个集合,返回一个包含两个集合中共有元素的新集合
      Set.prototype.intersection = function (otherSet) {
        //this:集合对象A
        //otherSet:集合对象B
        // 1,创建新的集合
        let intersection = new Set()
        // 2,将A集合中所有的元素添加到新集合中
        let values = this.values()
        for (var i = 0; i < values.length; i++) {
          let item = values[i]
          if(otherSet.has(item)){
            intersection.add(item)
          }
        }
        return intersection
      }
      //差集:对于给定的两个集合,返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合
      Set.prototype.difference = function (otherSet) {
         //this:集合对象A
        //otherSet:集合对象B
        // 1,创建新的集合
        let differenceSet = new Set()
        // 2,将A集合中所有的元素添加到新集合中
        let values = this.values()
        for (var i = 0; i < values.length; i++) {
          let item = values[i]
          if (!otherSet.has(item)) {
            differenceSet.add(item)
          }
        }
        return differenceSet
      }
      //子集:验证一个给定集合是否是另一个集合的子集
      Set.prototype.subset = function (otherSet) {
        //this:集合对象A
        //otherSet:集合对象B
        let values = this.values()
        for (var i = 0; i < values.length; i++) {
          let item = values[i]
          if (!otherSet.has(item)) {
            return false
          }
        }
        return true
      }
      if (Array.isArray(value)) {
        let index = 0
        while (index < value.length) {
          this.add(value[index])
          index++
        }
      }
    }

    //测试Set类
    // 1,常见Set类对象
    let set = new Set(['a','b'])
    let setB = new Set(['a','c','d'])
    console.log(set.add(111));
    console.log(set.add(111));
    console.log(set.add(222));
    console.log(set.remove(111));
    console.log(set.size());
    console.log(set);
    console.log(set.union(setB));
    console.log(set.intersection(setB));
    console.log(set.difference(setB));
    console.log(setB.subset(new Set(['a','c','d'])));
```

### 字典结构

> 字典是以[键，值]的形式来存储元素。字典也称作映射、符号表或关联数组。
>
> 集合、字典、散列表都可以存储不重复的数据。字典和我们上面实现的集合很像。
>
> ES5包含了一个Map类的实现，即我们所说的字典。

代码实现：

```
    class Dictionary {
      constructor() {
        this.items = {}
      }
      // 向字典中添加新元素。如果key已经存在，那么已存在的value会被indeed值覆盖
      set(key, value) {
        this.items[key] = value;
      }
      //通过键值作为参数查找特定的数值并返回。
      get(key) {
        return this.items[key];
      }
      //通过使用键值作为参数来从字典中移除键值对应的数据值
      remove(key) {
        delete this.items[key];
      }
      //将字典所包含的所有键名以数组形式返回
      keys() {
        return Object.keys(this.items);
      }
      //将字典所包含的所有数值以数组形式返回
      values() {
        // es7 提供的 Object.values 方法
        // return Object.values(this.items);

        // 或者循环输出
        return Object.keys(this.items).reduce((previousValue, currentValue, currentIndex) => {
          previousValue.push(this.items[currentValue]);
          return previousValue;
        }, [])
      }
    }
    // 使用
    let dictionary = new Dictionary();
    dictionary.set('Gandalf', 'gandalf@email.com')
    dictionary.set('John', 'johnsnow@email.com')
    dictionary.set('Tyrion', 'tyrion@email.com')
    dictionary.remove('John')
    console.log(dictionary.get('John'));
    console.log(dictionary.get('Gandalf'));
    console.log(dictionary)
    console.log(dictionary.keys())
    console.log(dictionary.values())
    console.log(dictionary.items)
```

### 哈希表

> `哈希表`（Hash T able/Hash Map，也叫散列表），是根据键（Key）而直接访问在`内存存储位置`的`数据结构`。也就是说，它通过计算一个关于键值的函数，将所需查询的数据映射到表中一个位置来访问记录，这加快了查找速度。这个映射函数称做`哈希函数`，`存放记录`的`数组`称做`哈希表`。

**一.数组的缺点**

```
     1.数组进行插入操作时，效率比较低。
     2.数组基于索引去查找的操作效率非常高，基于内容去查找效率很低。
     3.数组进行删除操作，效率也不高。
```

**二.哈希表**

1.几乎所有的编程语言都有直接或间接的应用这种数据结构

2.哈希表是基于 数组 实现的，但相对于数组有很多优势。

```
     1.它可以提供非常快速的 插入-删除-查找 操作
     2.无论多少数据，插入和删除需要接近常量的时间。即O（1）的时间级
     3.哈希表的速度比树还要快，基本可以瞬间找到想要的元素。
     4.哈希表相对于树来说编码要容易
```

3.哈希表对于数组的一些不足

```
     1.哈希表中的数据是没有顺序的，所以不能以一种固定的方式来遍历其中的元素。
     2.通常情况下，哈希表中的key是不允许重复的，不能放置相同的key，用于保存不同的元素。
```

4.哈希表的实质

```
     1.哈希表不同于（数组和链表，甚至于树可以画出他的结构）。
     2.他的结构就是数组，但他神奇的地方在于它对下标值的一种变换，这种变换称为 哈希函数 ， 通过哈希函数可以获取到 HashCode。
```

5.哈希表的一些概念

```
     1.哈希化：将大数字转化为数组范围内下表的过程，我们称之为哈希化。（对大数字取余）
     2.哈希函数：通常我们会将单词转化成大数字，大数字在进行哈希化的代码实现放在一个函数中，这个韩式称为哈希函数。
     3.哈希表：最终的数据插入到的这个数组，对整个结构的封装，我们称之为是一个哈希表。
```

6.解决 哈希化后的下标值冲突 方案

------------------------1. 链地址法---------------------------

![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjQ5ODEwMg==,size_16,color_FFFFFF,t_70.png)
1）每个存储单元存放的不再是单个数据，而是一个链条。
2）链条的结构可以是，数组或者链表。
3）比如是链表，一旦哈希化的下标值发生重复。将重复的元素插入到链表的首端或者尾端即可。
4）查询的时候，先根据哈希化后的下标值找到相应的位置，再取出链表，依次查询寻找需要的数据
5）根据业务需要选择数组还是链表，需要插在链条的最前面，选择链表。
插在后端选择数组或者链表都可以。

------------------------2. 开放地址法---------------------------

![在这里插入图片描述](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjQ5ODEwMg==,size_16,color_FFFFFF,t_70-16555279849751.png)
1）开放地址法的主要工作方式是 寻找空白的的单元格来添加重复的数据
2）寻找位置的方法有三种 线性探测 ， 二次探测， 再哈希化。

-------------线性探测---------------

```
     1. 下标值重复时，采取index+1向后寻找空白位置插入数据。
     2. 查找数据时，先去用哈希化后的索引去取值比对，如果不符合，向下继续线性查找。
     3. 查找数据时，当哈希化后的索引值上的数据不符合，如果在线性查找时遇到数组项空白时，则停止查找，此数组中不存在目标数据。
     4. 删除某数组中存的数据时，不能把值设置为null，可以进行特殊处理（比如设置为-1) 。来防止下次线性查找失败。
```

！！！！线性探索的问题：线性探测会产生聚集，即数据聚在在一连串的存储单元当中。影响之后的插入查询 删除 操作的效率，影响哈希表的性能。

-------------二次探测---------------

```
     1. 二次探测， 对步长进行了优化，index + 1 平方 ， + 2 平方， +3 平方，这样就可以一次探测比较长的距离，避免聚集带来的影响。
     2. 可是还是会造成步长不一 的 一种聚集，还是会影响效率。
```

-------------再哈希化---------------

```
     1.把关键字用另一个哈希函数再做一次哈希化，用这个哈希化 的 结果 作为步长，对于指定的关键字，步长在探索中是不变的，不同的关键字使用不同的步长。
     2.需要和第一个哈希函数不同，不能输出为0.
     3. stepszies（步长） = constant（常数，小于数组容量） - （key % constant）
```

结论： -------链地址法，使哈希表性能下降较为稳定。------开发地址法，由于填充因子，步长等因素会使性能下降的急剧。

**哈希函数**

<img src="https://i.loli.net/2021/02/27/xiCFyMAd89n4qzN.png" alt="image-20210208150444904" style="zoom:67%;" /><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgkA7awjPhRQYx3tX.png" alt="image-20210208150738643" style="zoom: 80%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img3NHWPUmhrfbKXly.png" alt="image-20210208150754449" style="zoom: 80%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgReksFliDnWt5TPj.png" alt="image-20210208150944918" style="zoom:67%;" />

**散列函数的构造方法**

好的散列函数要求：（1）计算简单，至少散列函数的计算时间不应该超过其他查找技术与关键字比较的时间；（2）计算出的散列地址分布均匀，这样可以保证存储空间的有效利用，并减少为处理冲突而耗费的时间。

**1.** **直接定址法**

取关键字或关键字的某个线性函数值为散列地址。即H(key)=key或H(key) = a·key + b，其中a和b为常数（这种散列函数叫做自身函数）。

**2.** **数字分析法**

假设某公司的员工登记表以员工的手机号作为关键字。手机号一共11位。前3位是接入号，对应不同运营商的子品牌；中间4位表示归属地；最后4位是用户号。不同手机号前7位相同的可能性很大，所以可以选择后4位作为散列地址，或者对后4位反转（1234 -> 4321）、循环右移（1234 -> 4123）、循环左移等等之后作为散列地址。

数字分析法通常适合处理关键字位数比较大的情况，如果事先知道关键字的分布且关键字的若干位分布比较均匀，就可以考虑这个方法。

**3.** **平方取中法**

假设关键字是1234、平方之后是1522756、再抽取中间3位227，用作散列地址。平方取中法比较适合于不知道关键字的分布，而位数又不是很大的情况。

**4.** **折叠法**

将关键字从左到右分割成位数相等的几部分，最后一部分位数不够时可以短些，然后将这几部分叠加求和，并按散列表表长，取后几位作为散列地址。

比如关键字是9876543210，散列表表长是3位，将其分为四组，然后叠加求和：987 + 654 + 321 + 0 = 1962，取后3位962作为散列地址。

折叠法事先不需要知道关键字的分布，适合关键字位数较多的情况。

**5.** **除留余数法**

f(key) = key mod p (p≤m)，m为散列表长。这种方法不仅可以对关键字直接取模，也可在折叠、平方取中后再取模。根据经验，若散列表表长为m，通常p为小于或等于表长（最好接近m）的最小质数，可以更好的减小冲突。

此方法为最常用的构造散列函数方法。

**6.** **随机数法**

f(key) = random(key)，这里random是随机函数。当关键字的长度不等时，采用这个方法构造散列函数是比较合适的。

实际应用中，应该视不同的情况采用不同的散列函数。如果关键字是英文字符、中文字符、各种各样的符号，都可以转换为某种数字来处理，比如其unicode编码。下面这些因素可以作为选取散列函数的参考：（1）计算散列地址所需的时间；（2）关键字长度；（3）散列表大小；（4）关键字的分布情况；（5）查找记录的频率。

**哈希表的基本实现：**

```
class HashTable {
  constructor() {
    this.storage = []
    this.count = 0
    this.limit = 7
  }
  // 1、将字符串转成比较大的数字：hasCode
  // 2、将大的数字hashCode压缩到数组范围（大小）之内
  //! 哈希算法
  hashFunc (str, size) {
    //   //1、定义hashCode变量
    var hashCode = 0
    // cats -> Unicode编码
    //! 普通模式
    //   for(var i = 0; i < str.length; i++){
    //     let j = 1
    //     let flag = str.length -1 - i
    //     while(flag){
    //       console.log('flag:'+flag);
    //       j *= 37
    //       console.log(j);
    //       flag--
    //     }
    //     hashCode += str.charCodeAt(i) * j
    //   }
    //   console.log(hashCode);
    //! 2、使用霍纳算法，来计算hashCode的值
    // for (var i = 0; i < str.length; i++) {
    //   hashCode = 37 * hashCode + str.charCodeAt(i)
    // }
    //! 3、自创的随机算法
    // 通过split把字符串分割成单字符数组
    let numArray = str.split('').map(char => char.charCodeAt(0));
    //将所有数组元素连成字符串，不能直接相加
    numArray = numArray.join('')
    // 变成随机数值
    hashCode = Math.sin(numArray).toString().split('.')[1].slice(0, 10);
    // 3、取余操作
    var index = hashCode % size
    return index
  }
  //!添加元素
  put (key, value) {
    //1.根据key获取对应的index
    var index = this.hashFunc(key, this.limit)
    //2.根据index取得对应的bucket(bucket是key的hashCode对应下表位置，)
    var bucket = this.storage[index]
    //3.判断当前bucket是否为空
    if (bucket == null) {
      bucket = []
      this.storage[index] = bucket
    }
    //4.判断是否修改数据
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] == key) {
        tuple[1] = value
        return
      }
    }
    //5.当前bucket(链表)中没有该数据,就直接添加该数据
    bucket.push([key, value])
    this.count += 1
    //数组扩容
    if (this.count > this.limit * 0.75) {
      this.resize('expand')
    }
  }
  //!get获取元素
  get (key) {
    /**
    *1.根据key,获得index;
    * 2.根据index,获得bucket;
    * 3.判断bucket是否为null,为null就直接返回null
    * 4.bucket不为null，则遍历找到对应的key
    * 5.遍历完后，没有找到对应的key，就返回null
    **/
    var index = this.hashFunc(key, this.limit)
    var bucket = this.storage[index]
    if (bucket == null) {
      return null
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] == key) {
        return tuple[1]
      }
    }
    //在index对应的bucket（不为null）中没有找到对应的key
    return null

  }
  //!remove方法
  remove (key) {
    var index = this.hashFunc(key, this.limit)
    var bucket = this.storage[index]
    if (bucket == null) {
      return null
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] == key) {
        bucket.splice(i, 1)//删除当前位置的元素https://wangdoc.com/javascript/stdlib/array.html#splice
        this.count--
        return tuple[1]
        //缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          this.resize('narrow')
        }
      }
    }
    return null
  }
  //!判断哈希表是否为空
  isEmpty () {
    return this.count == 0
  }
  //!获取哈希表的长度
  size () {
    return this.count
  }
  //!哈希表的扩容
  resize (newLimit) {
      console.log(this);
      //! 1、获取哈希表新的数组大小限制
      getNewLimit.call(this)
      //! 2、重新初始化哈希表
      var oldStorage = init.call(this)
      //! 3、把值转移到新的哈希表上
      moveHash.call(this, oldStorage)
    // 获取哈希表新的limit
    function getNewLimit () {
      if (newLimit === 'expand') {
        var newSize = this.limit * 2
        var newPrime = getPrime(newSize)
      } else if (newLimit === 'narrow') {
        var newSize = Math.floor(this.limit / 2)
        var newPrime = getPrime(newSize)
      }
      this.limit = newPrime
      //*判断数字是否是质数
      function isPrime (num) {
        //1.获得num的平方根
        //特点：智能被1和自己整除，不能被2到num-1数字整除
        //*普通算法
        // for(var i = 2;i < num;i++){
        //   if (num % i == 0) {
        //     return false
        //   }
        // }
        //*优化算法
        var temp = Math.ceil(Math.sqrt(num))
        for (var i = 2; i <= temp; i++) {
          if (num % i === 0) {
            return false
          }
        }
        return true
      }
      //*获取质数的方法
      function getPrime (num) {
        while (!isPrime(num)) {
          num++
        }
        console.log(num);
        return num
      }
    }
    //*初始化哈希表
    function init () {
      console.log(this);
      var oldStorage = this.storage
      this.storage = []
      this.count = 0
      var bucket = []
      this.storage = []
      this.count = 0

      console.log(oldStorage);
      return oldStorage
    }
    //*转移哈希表
    function moveHash (oldStorage) {
      var bucket = []
      for (var i = 0; i < oldStorage.length; i++) {
        bucket = oldStorage[i]
        if (!bucket) {
          continue
        }
        for (var j = 0; j < bucket.length; j++) {
          var tuple = bucket[j]
          this.put(tuple[0], tuple[1])
        }
      }
    }
  }
  
}
var hash = new HashTable()

hash.put('abc', '123')
hash.put('abd', '456')
hash.put('cbd', '789')
hash.put('a34c', '123')
hash.put('a43bd', '456')
hash.put('c434bd', '789')
hash.put('ab434c', '123')
hash.put('a434bd', '456')
hash.put('c434bd', '789')
hash.put('ab2434c', '123')
hash.put('a434b3d', '456')
hash.put('c21314bd', '789')
hash.put('c212334bd', '789')
hash.put('c2123314bd', '789')
console.log(hash);
console.log(hash.get('ab2434c'));


```

**哈希表的扩容：**

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgeagT1pLnc4iJIMX.png" alt="image-20210213160949118" style="zoom:67%;" />

### 树（tree)

> 树结构是一种非线性存储结构，存储的是具有“一对多”关系的数据元素的集合 。
>
> 树是由结点或顶点和边组成的(可能是非线性的)且不存在着任何环的一种数据结构。没有结点的树称为空(null或empty)树。一棵非空的树包括一个根结点，还(很可能)有多个附加结点，所有结点构成一个多级分层结构。

#### 一、树结构简介

##### 1.1.简单了解树结构

**什么是树？**

真实的树：

![image-20200229205530929](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1.png)

**树的特点：**

- 树一般都有一个**根**，连接着根的是**树干**；
- 树干会发生分叉，形成许多**树枝**，树枝会继续分化成更小的**树枝**；
- 树枝的最后是**叶子**；

现实生活中很多结构都是树的抽象，模拟的树结构相当于旋转`180°`的树。

![image-20200229205630945](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img2.png)



**树结构对比于数组/链表/哈希表有哪些优势呢：**

**数组：**

- 优点：可以通过**下标值访问**，效率高；
- 缺点：查找数据时需要先对数据进行**排序**，生成**有序数组**，才能提高查找效率；并且在插入和删除元素时，需要大量的**位移操作**；

**链表：**

- 优点：数据的插入和删除操作效率都很高；
- 缺点：**查找**效率低，需要从头开始依次查找，直到找到目标数据为止；当需要在链表中间位置插入或删除数据时，插入或删除的效率都不高。

**哈希表：**

- 优点：哈希表的插入/查询/删除效率都非常高；
- 缺点：**空间利用率不高**，底层使用的数组中很多单元没有被利用；并且哈希表中的元素是**无序**的，不能按照固定顺序遍历哈希表中的元素；而且不能快速找出哈希表中**最大值或最小值**这些特殊值。

**树结构：**

优点：树结构综合了上述三种结构的优点，同时也弥补了它们存在的缺点（虽然效率不一定都比它们高），比如树结构中数据都是有序的，查找效率高；空间利用率高；并且可以快速获取最大值和最小值等。

总的来说：**每种数据结构都有自己特定的应用场景**

**树结构：**

- **树（Tree）**:由 n（n ≥ 0）个节点构成的**有限集合**。当 n = 0 时，称为**空树**。

对于任一棵非空树（n > 0），它具备以下性质：

- 数中有一个称为**根（Root）**的特殊节点，用 **r **表示；
- 其余节点可分为 m（m > 0）个互不相交的有限集合 T1，T2，...，Tm，其中每个集合本身又是一棵树，称为原来树的**子树（SubTree）**。

**树的常用术语：**

![image-20200229221126468](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img3.png)

- **节点的度（Degree）**：节点的**子树个数**，比如节点B的度为2；
- **树的度**：树的所有节点中**最大的度数**，如上图树的度为2；
- **叶节点（Leaf）**：**度为0的节点**（也称为叶子节点），如上图的H，I等；
- **父节点（Parent）**：度不为0的节点称为父节点，如上图节点B是节点D和E的父节点；
- **子节点（Child）**：若B是D的父节点，那么D就是B的子节点；
- **兄弟节点（Sibling）**：具有同一父节点的各节点彼此是兄弟节点，比如上图的B和C，D和E互为兄弟节点；
- **路径和路径长度**：路径指的是一个节点到另一节点的通道，路径所包含边的个数称为路径长度，比如A->H的路径长度为3；
- **节点的层次（Level）**：规定**根节点在1层**，其他任一节点的层数是其父节点的**层数加1**。如B和C节点的层次为2；
- **树的深度（Depth）**：树种所有节点中的**最大层次**是这棵树的深度，如上图树的深度为4；

##### 1.2.树结构的表示方式

- **最普通的表示方法**：

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img4.png" alt="image-20200229230417613" style="zoom:80%;" />

如图，树结构的组成方式类似于链表，都是由一个个节点连接构成。不过，根据每个父节点子节点数量的不同，每一个父节点需要的引用数量也不同。比如节点A需要3个引用，分别指向子节点B，C，D；B节点需要2个引用，分别指向子节点E和F；K节点由于没有子节点，所以不需要引用。

这种方法缺点在于我们无法确定某一结点的引用数。

- **儿子-兄弟表示法**：

![image-20200229232805477](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img5.png)



这种表示方法可以完整地记录每个节点的数据，比如：

```
//节点A
Node{
  //存储数据
  this.data = data
  //统一只记录左边的子节点
  this.leftChild = B
  //统一只记录右边的第一个兄弟节点
  this.rightSibling = null
}

//节点B
Node{
  this.data = data
  this.leftChild = E
  this.rightSibling = C
}

//节点F
Node{
  this.data = data
  this.leftChild = null
  this.rightSibling = null
}
```

这种表示法的优点在于每一个节点中引用的数量都是确定的。

- **儿子-兄弟表示法旋转**

以下为儿子-兄弟表示法组成的树结构：

![image-20200229234549049](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img6.png)



将其顺时针旋转45°之后：

![image-20200229235549522](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img7.png)



这样就成为了一棵**二叉树**，由此我们可以得出结论：**任何树都可以通过二叉树进行模拟**。但是这样父节点不是变了吗？其实，父节点的设置只是为了方便指向子节点，在代码实现中谁是父节点并没有关系，只要能正确找到对应节点即可。

#### 二、二叉树

##### 2.1.二叉树简介

**二叉树的概念**：如果树中的每一个节点最多只能由**两个子节点**，这样的树就称为**二叉树**；

二叉树十分重要，不仅仅是因为简单，更是因为几乎所有的树都可以表示成二叉树形式。

**二叉树的组成**：

- 二叉树可以为空，也就是没有节点；
- 若二叉树不为空，则它由根节点和称为其左子树TL和右子树TR的两个不相交的二叉树组成；

**二叉树的五种形态**：

![image-20200301001718079](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img8.png)



上图分别表示：空的二叉树、只有一个节点的二叉树、只有左子树TL的二叉树、只有右子树TR的二叉树和有左右两个子树的二叉树。

**二叉树的特性**：

- 一个二叉树的第 i 层的最大节点数为：2^(i-1)，i >= 1；
- 深度为k的二叉树的最大节点总数为：2^k - 1 ，k >= 1；
- 对任何非空二叉树，若 n0 表示叶子节点的个数，n2表示度为2的非叶子节点个数，那么两者满足关系：n0 = n2 + 1；如下图所示：H，E，I，J，G为叶子节点，总数为5；A，B，C，F为度为2的非叶子节点，总数为4；满足n0 = n2 + 1的规律。

![image-20200301092140211](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img9.png)

**完美二叉树**

完美二叉树（Perfect Binary Tree）也称为满二叉树（Full Binary Tree），在二叉树中，除了最下一层的叶子节点外，每层节点都有2个子节点，这就构成了完美二叉树。

![image-20200301093237681](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img10.png)

**完全二叉树**

完全二叉树（Complete Binary Tree）:

- 除了二叉树最后一层外，其他各层的节点数都达到了最大值；
- 并且，最后一层的叶子节点从左向右是连续存在，只缺失右侧若干叶子节点；
- 完美二叉树是特殊的完全二叉树；

![image-20200301093659373](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img11.png)



在上图中，由于H缺失了右子节点，所以它不是完全二叉树。

##### 2.3.二叉树的数据存储

常见的二叉树存储方式为**数组**和**链表**：

**使用数组：**

- **完全二叉树**：按从上到下，从左到右的方式存储数据。

![image-20200301094919588](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img12.png)



| 节点     | A     | B     | C     | D     | E     | F     | G     | H     |
| -------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **序号** | **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** |

使用数组存储时，取数据的时候也十分方便：左子节点的序号等于父节点序号 * 2，右子节点的序号等于父节点序号 * 2 + 1 。

- **非完全二叉树**：非完全二叉树需要转换成完全二叉树才能按照上面的方案存储，这样会浪费很大的存储空间。

![image-20200301100043636](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img13.png)



| 节点     | A     | B     | C     | ^     | ^     | F     | ^     | ^     | ^     | ^      | ^      | ^      | M      |
| -------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ------ | ------ | ------ | ------ |
| **序号** | **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9** | **10** | **11** | **12** | **13** |

**使用链表**

二叉树最常见的存储方式为**链表**：每一个节点封装成一个Node，Node中包含存储的数据、左节点的引用和右节点的引用。

![image-20200301100616105](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img14.png)

#### 三、二叉搜索树

##### 认识二叉搜索树

**二叉搜索树**（**BST**，Binary Search Tree），也称为**二叉排序树**和**二叉查找树**。

二叉搜索树是一棵二叉树，可以为空；

如果不为空，则满足以下**性质**：

- 条件1：非空左子树的**所有**键值**小于**其根节点的键值。比如三中节点6的所有非空左子树的键值都小于6；
- 条件2：非空右子树的**所有**键值**大于**其根节点的键值；比如三中节点6的所有非空右子树的键值都大于6；
- 条件3：左、右子树本身也都是二叉搜索树；

![image-20200301103139916](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img15.png)

如上图所示，树二和树三符合3个条件属于二叉树，树一不满足条件3所以不是二叉树。

**总结：**二叉搜索树的特点主要是**较小的值**总是保存在**左节点**上，相对**较大的值**总是保存在**右节点**上。这种特点使得二叉搜索树的查询效率非常高，这也就是二叉搜索树中"搜索"的来源。

##### 二叉搜索树应用举例

下面是一个二叉搜索树：

![image-20200301111718686](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img16.png)



若想在其中查找数据10，只需要查找4次，查找效率非常高。

- 第1次：将10与根节点9进行比较，由于10 > 9，所以10下一步与根节点9的右子节点13比较；
- 第2次：由于10 < 13，所以10下一步与父节点13的左子节点11比较；
- 第3次：由于10 < 11，所以10下一步与父节点11的左子节点10比较；
- 第4次：由于10 = 10，最终查找到数据10 。

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img17.png" alt="image-20200301111751041" style="zoom:80%;" />

同样是15个数据，在排序好的数组中查询数据10，需要查询10次：



![image-20200301115348138](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img18.png)



其实：如果是排序好的数组，可以通过二分查找：第一次找9，第二次找13，第三次找15...。我们发现如果把每次二分的数据拿出来以树的形式表示的话就是**二叉搜索树**。这就是数组二分法查找效率之所以高的原因。

##### 二叉搜索树的实现

   ![image-20210214212225358](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182900-1656862441972126.png)                                   

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182903-1656862441972127.png" alt="image-20210214222239631" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182909-1656862441971124.png" alt="image-20210214222327176" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182911-1656862441972125.png" alt="image-20210214231854466" style="zoom: 80%;" />

//前中后序遍历属于深度优先遍历

//而层序遍历则属于广度优先遍历

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182918-1656862441972130.png" alt="image-20210215002601824" style="zoom:67%;" />

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182920-1656862441972129.png" alt="image-20210215002223399" style="zoom:67%;" />
<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182924-1656862441972131.png" alt="image-20210215120744477" style="zoom:67%;" />

删除总结：

1、**删除的节点是叶子节点的话，就直接让其父节点的指向它的引用为null就行**

2、**删除的节点含有左子树或者右子树，用其子树来代替成为被删除节点的父节点的子树**

3、**删除左右都有孩子的节点，找到右边子树最小的节点作为父节点**

代码实现：

```
     //封装二叉搜索树
     function BinarySearchTree () {
          function Node (key) {
          this.key = key
          this.left = null
          this.right = null
          }

          // 属性
          this.root = null

          //方法
          // 插入数据： 对外给用户调用的方法
          BinarySearchTree.prototype.insert = function (key) {
          //1、根据key值创建节点
          var newNode = new Node(key)

          // 2、判断根节点是否有值
          if (this.root === null) {
          this.root = newNode
          } else {
          this.insertNode(this.root, newNode)
          }
          }

          BinarySearchTree.prototype.insertNode = function (node, newNode) {
          if (newNode.key < node.key) {
          //向左查找
          if (node.left === null) {
          node.left = newNode
          } else {
          this.insertNode(node.left, newNode)
          }
          } else {
          //向右查找
          if (node.right === null) {
          node.right = newNode
          } else {
          this.insertNode(node.right, newNode)
          }
          }
          }

          //树的遍历
          //! 1、先序遍历 --- 根->左->右
          BinarySearchTree.prototype.preOrderTraversal = function () {
          var str = ''
          function handler (key) {
          str += key + ' '
          }
          this.preOrderTraversalNode(this.root, handler)
          console.log(str);
          }
          BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
          if (node !== null) {
          // 1、处理经过的节点
          handler(node.key)
          // 2、处理经过节点的左子节点
          this.preOrderTraversalNode(node.left, handler)
          // 3、处理经过节点的右子节点
          this.preOrderTraversalNode(node.right, handler)
          }
          }
          //! 2、中序遍历 --- 左->根->右
          BinarySearchTree.prototype.midOrderTraversal = function () {
          var str = ''
          function handler (key) {
          str += key + ' '
          }
          this.midOrderTraversalNode(this.root, handler)
          console.log(str);
          }
          BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
          if (node !== null) {
          // 1、处理经过节点的左子节点
          this.midOrderTraversalNode(node.left, handler)
          // 2、处理经过的节点
          handler(node.key)
          // 3、处理经过节点的右子节点
          this.midOrderTraversalNode(node.right, handler)
          }
          }
          //! 3、后序遍历 --- 左->右->根
          BinarySearchTree.prototype.postOrderTraversal = function () {
          var str = ''
          function handler (key) {
          str += key + ' '
          }
          this.postOrderTraversalNode(this.root, handler)
          console.log(str);
          }
          BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
          if (node !== null) {
          // 1、处理经过节点的左子节点
          this.postOrderTraversalNode(node.left, handler)
          // 2、处理经过节点的右子节点
          this.postOrderTraversalNode(node.right, handler)
          // 3、处理经过的节点
          handler(node.key)
          }
          }
          //!获取最小值
          BinarySearchTree.prototype.min = function () {
          var node = this.root
          while (node.left !== null) {
          node = node.left
          }
          return node.key
          }
          //!获取最大值
          BinarySearchTree.prototype.max = function () {
          var node = this.root
          while (node.right !== null) {
          node = node.right
          }
          return node.key
          }
          //!搜索特定的值
          BinarySearchTree.prototype.search = function (key) {
          return this.searchNode(this.root, key)
          }
          BinarySearchTree.prototype.searchNode = function (node, key) {
          // 1、如果传入的node为null，那么就退出递归
          if (node === null) {
          return false
          }

          //2、判断node节点值和传入的key大小
          if (node.key > key) {
          return this.searchNode(node.left, key)
          } else if (node.key < key) {
          return this.searchNode(node.right, key)
          } else {
          return true
          }
          }
          //!删除节点
          BinarySearchTree.prototype.remove = function (key) {
          // 1、寻找要删除的节点
          // 1、1定义变量，保存一些信息
          var current = this.root
          var parent = this.root
          var isLeftChild = true
          //1、2 开始寻找删除的节点
          while (current.key !== key) {
          if (key < current.key) {
          isLeftChild = true
          parent = current
          current = current.left
          } else {
          isLeftChild = false
          parent = current
          current = current.right
          }

          //某种情况：已经找到了最后的节点，依然没有找到 == key
          if (current === null) {
          return false
          }
          }
          console.log(current);
          //2、根据对应的情况删除节点
          //2、1删除的节点是叶子节点（没有子节点）
          if (current.left === null && current.right == null) {
          if (current === this.root) {
          this.root = null
          } else if (isLeftChild) {
          parent.left = null
          } else {
          console.log('ok');

          parent.right = null
          }
          }
          // 2、2.删除的节点有一个子节点
          else if (current.right === null) {
          if (current === this.root) {
          this.root = current.left
          }
          else if (isLeftChild) {
          parent.left = current.left
          } else {
          parent.right = current.left
          }
          }
          else if (current.left === null) {
          if (current === this.root) {
          this.root = current.right
          }
          else if (isLeftChild) {
          parent.left = current.right
          } else {
          parent.right = current.right
          }
          }
          //2.3.删除的节点有两边子节点
          else {
          //1、获取后继节点
          var successor = this.getSuccssor(current)

          //2、判断是否根节点
          if (current === this.root) {
          this.root = successor
          } else if (isLeftChild) {
          parent.left = successor
          } else {
          parent.right = successor
          }

          //3、将删除节点的左子树  = current.left
          successor.left = current.left
          }
          }
          //找后继的方法
          BinarySearchTree.prototype.getSuccssor = function (delNode) {
          // 1、定义变量，保存找到的后推
          var successor = delNode
          var current = delNode.right
          var successorParent = delNode

          // 2、循环查找
          while (current !== null) {
          successorParent = successor
          successor = current
          current = current.left
          }

          // 3、判断寻找的后继节点是否直接就是delNode的right节点
          if (successor !== delNode.right) {
          successorParent.left = successor.right
          successor.right = delNode.right
          }
          return successor
          }
     }

     //测试代码
     var bst = new BinarySearchTree()
     bst.insert(11)
     bst.insert(1)
     bst.insert(14)
     bst.insert(6)
     bst.insert(131)
     bst.insert(171)
     bst.insert(8)
     bst.insert(9)
     bst.insert(2)
     console.log(bst);

     bst.preOrderTraversal()
     bst.midOrderTraversal()
     bst.postOrderTraversal()
     console.log(bst.min());
     console.log(bst.max());
     console.log(bst.search(111));

     //测试删除代码
     bst.remove(6)
     console.log(bst);
```

##### 二叉搜索树的缺陷


<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182932-1656862441972133.png" alt="image-20210217004018720" style="zoom: 67%;" />

#### 图结构

##### 图简介

图看起来就像下图这样：

![img](https:////upload-images.jianshu.io/upload_images/4064751-9ef7887aca675269.png?imageMogr2/auto-orient/strip|imageView2/2/w/526/format/webp)

在计算机科学中，一个图就是一些*顶点*的集合，这些顶点通过一系列*边*结对（连接）。顶点用圆圈表示，边就是这些圆圈之间的连线。顶点之间通过边连接。

**注意：**顶点有时也称为节点或者交点，边有时也称为链接。

一个图可以表示一个社交网络，每一个人就是一个顶点，互相认识的人之间通过边联系。

![img](https:////upload-images.jianshu.io/upload_images/4064751-98d670ae394f3695.png?imageMogr2/auto-orient/strip|imageView2/2/w/651/format/webp)

图有各种形状和大小。边可以有*权重（weight）*，即每一条边会被分配一个正数或者负数值。考虑一个代表航线的图。各个城市就是顶点，航线就是边。那么边的权重可以是飞行时间，或者机票价格。

![img](https:////upload-images.jianshu.io/upload_images/4064751-7d75da02d729e64c.png?imageMogr2/auto-orient/strip|imageView2/2/w/824/format/webp)

有了这样一张假设的航线图。从旧金山到莫斯科最便宜的路线是到纽约转机。

边可以是*有方向的*。在上面提到的例子中，边是没有方向的。例如，如果 Ada 认识 Charles，那么 Charles 也就认识 Ada。相反，有方向的边意味着是单方面的关系。一条从顶点 X 到 顶点 Y 的边是将 X 联向 Y，不是将 Y 联向 X。

继续前面航班的例子，从旧金山到阿拉斯加的朱诺有向边意味着从旧金山到朱诺有航班，但是从朱诺到旧金山没有（我假设那样意味着你需要走回去）。

![img](https:////upload-images.jianshu.io/upload_images/4064751-c9ece5586fa955f8.png?imageMogr2/auto-orient/strip|imageView2/2/w/824/format/webp)

下面的两种情况也是属于图：

![img](https:////upload-images.jianshu.io/upload_images/4064751-0f7469ff0be704de.png?imageMogr2/auto-orient/strip|imageView2/2/w/485/format/webp)

左边的是树，右边的是链表。他们都可以被当成是树，只不过是一种更简单的形式。他们都有顶点（节点）和边（连接）。

第一种图包含*圈（cycles）*，即你可以从一个顶点出发，沿着一条路劲最终会回到最初的顶点。树是不包含圈的图。

另一种常见的图类型是单向图或者 DAG：

![img](https:////upload-images.jianshu.io/upload_images/4064751-af16c3d5a506e610.png?imageMogr2/auto-orient/strip|imageView2/2/w/634/format/webp)

就像树一样，这个图没有任何圈（无论你从哪一个节点出发，你都无法回到最初的节点），但是这个图有有向边（通过一个箭头表示，这里的箭头不表示继承关系）。

##### 为什么要使用图？

也许你耸耸肩然后心里想着，有什么大不了的。好吧，事实证明图是一种有用的数据结构。

如果你有一个编程问题可以通过顶点和边表示出来，那么你就可以将你的问题用图画出来，然后使用著名的图算法（比如广度优先搜索 或者 深度优先搜索）来找到解决方案。

例如，假设你有一系列任务需要完成，但是有的任务必须等待其他任务完成后才可以开始。你可以通过非循环有向图来建立模型：

![img](https:////upload-images.jianshu.io/upload_images/4064751-afa3948a9e805a67.png?imageMogr2/auto-orient/strip|imageView2/2/w/457/format/webp)

每一个顶点代表一个任务。两个任务之间的边表示目的任务必须等到源任务完成后才可以开始。比如，在任务B和任务D都完成之前，任务C不可以开始。在任务A完成之前，任务A和D都不能开始。

现在这个问题就通过图描述清楚了，你可以使用深度优先搜索算法来执行执行拓扑排序。这样就可以将所有的任务排入最优的执行顺序，保证等待任务完成的时间最小化。（这里可能的顺序之一是：A, B, D, E, C, F, G, H, I, J, K）

不管是什么时候遇到困难的编程问题，问一问自己：“如何用图来表述这个问题？”。图都是用于表示数据之间的关系。 诀窍在于如何定义“关系”。

程序员常用的另一个图就是状态机，这里的边描述了状态之间切换的条件。下面这个状态机描述了一个猫的状态：

![img](https:////upload-images.jianshu.io/upload_images/4064751-8f5334960c871d0b.png?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp)

图真的很棒。Facebook 就从他们的社交图中赚取了巨额财富。如果计划学习任何数据结构，则应该选择图，以及大量的标准图算法。

##### 顶点的表示

**图的一些概念**

- **顶点的度** - 指与该顶点相关联的边的条数。
- **路径** - 从一个顶点到另一个顶点的路径，存在0个或多个。
  - 简单路径：简单路径要求不包含重复的顶点
  - 回路：第一个顶点和最后一个顶点相同的路径称为回路
- **权** - 路径上附属携带了数据信息。
- **连通图**指任意两个顶点之间存在关系边；
- **无向图**：图的边是没有方向的
- **有向图**：图的边是由方向的
- **带权图**：带权图的边有一定的权重

理论上，图就是一堆顶点和边对象而已，但是怎么在代码中来描述呢？

有两种主要的方法：邻接矩阵和邻接列表。

**邻接矩阵：**在邻接矩阵实现中，由行和列都表示顶点，由两个顶点所决定的矩阵对应元素表示这里两个顶点是否相连、如果相连这个值表示的是相连边的权重。例如，如果从顶点A到顶点B有一条权重为 5.6 的边，那么矩阵中第A行第B列的位置的元素值应该是5.6：


往这个图中添加顶点的成本非常昂贵，因为新的矩阵结果必须重新按照新的行/列创建，然后将已有的数据复制到新的矩阵中。

在 *稀疏*图的情况下，每一个顶点都只会和少数几个顶点相连，这种情况下相邻列表是最佳选择。如果这个图比较*密集*，每一个顶点都和大多数其他顶点相连，那么相邻矩阵更合适。

**邻接列表**：在邻接列表实现中，每一个顶点会存储一个从它这里开始的边的列表。比如，如果顶点A 有一条边到B、C和D，那么A的列表中会有3条边


所以使用哪一个呢？`大多数时候，选择邻接列表是正确的`。下面是两种实现方法更详细的比较。

假设 *V* 表示图中顶点的个数，*E* 表示边的个数。

| 操作       | 邻接列表 | 邻接矩阵 |
| ---------- | -------- | -------- |
| 存储空间   | O(V + E) | O(V^2)   |
| 添加顶点   | O(1)     | O(V^2)   |
| 添加边     | O(1)     | O(1)     |
| 检查相邻性 | O(V)     | O(1)     |

“检查相邻性” 是指对于给定的顶点，尝试确定它是否是另一个顶点的邻居。在邻接列表中检查相邻性的时间复杂度是**O(V)**，因为最坏的情况是一个顶点与*每一个*顶点都相连。

在 *稀疏*图的情况下，每一个顶点都只会和少数几个顶点相连，这种情况下相邻列表是最佳选择。如果这个图比较*密集*，每一个顶点都和大多数其他顶点相连，那么相邻矩阵更合适。

##### 图的实现

<img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227182951-1656862441972135.png" alt="image-20210217214656033" style="zoom:67%;" />

我们希望从图中某一顶点出发访遍图中其余顶点，且是每一个顶点仅被访问一次，这个过程就叫做图的遍历


