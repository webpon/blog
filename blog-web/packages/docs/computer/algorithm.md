### 简介

> Algorithm这个单词本意就是解决问题的办法/步骤逻辑
>
> 算法是解决特定问题求解步骤的描述，在计算机中表现为指令的有限序列，并且每条指令表示一个或多个操作。

![image-20210115122327003](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227183014-1656862441972140.png)

### 算法的基本特性

> 算法具有五个基本特性：输入、输出、有穷性、确定性和可行性

### 算法设计的要求

> 算法设计的要求：正确性、可读性、健壮性、时间效率高和储存量低

正确性：算法的正确性是指算法至少应该具有输入、输出和加工处理无歧义性、能正确反映问题的需求、能够得到问题的正确答案。

可读性：算法设计的另一目的是为了便于阅读、理解和交流。

健壮性：当输入数据不合法是，算法也能够做出相关的处理，而不是产生异常或莫名其妙的结果。

时间效率：时间效率指的是算法的执行时间，对于同一个问题，如果有多个算法能够解决，执行效率短的算法效率高，执行时间长的效率低。

储存量低：储存量需求指的是算法在执行过程中需要的最大储存空间，主要指算法程序运行时所占的内存或外部硬盘储存空间。	

### 算法的度量

> 算法的度量方法：事后统计方法（不科学、不准确）、事前分析估算方法
>
> 事前分析估算方法`主要利用算法的时间复杂度和算法的空间复杂度的对比`

#### 算法时间复杂度

> 在进行算法分析时，语句总的执行次数T(n)是关于问题规模n的函数，进而分析T(n)随n的变化情况并确定T(n)的数量级。
>
> 算法的时间复杂度，也就是算法的时间度量，记住：T(n) = O(f(n))。它表示随问题规模n的增大，算法执行时间的增长率和f(n)的增长率相同，
>
> 称作算法的渐进时间复杂度，简称为时间复杂度。其中f(n)是问题规模n的某个函数。

这样用大写O( )来体现算法时间复杂度的记法，我们称之为大O记法。

一般情况下，随着n的增大，T(n)增长最慢的算法为最优算法。

**推导大O阶方法**

​	1、用常数1取代运行时间中的所有加法常数。

​	2、在修改后的运行次数函数中，只保留最高阶项。

​	3、如果最高阶项存在且不是1，则去除与这个项目相乘的常数。得到的结果就是大O阶。

**推导示例**

**1、常数阶**

   首先顺序结构的时间复杂度。下面这个算法，是利用高斯定理计算1，2，……n个数的和。

```
 int sum = 0, n = 100; /*执行一次*/

 sum = (1 + n) * n / 2; /*执行一次*/
 
 printf("%d",sum); /*执行一次*/
```

   这个算法的运行次数函数是f (n) =3。 根据我们推导大0阶的方法，第一步就是把常数项3 改为1。在保留最高阶项时发现，它根本没有最高阶项，所以这个算法的时间复杂度为**0(1)**。
   另外，我们试想一下，如果这个算法当中的语句 sum = (1+n)*n/2; 有10 句，则与示例给出的代码就是3次和12次的差异。`这种与问题的大小无关（n的多少），执行时间恒定的算法，我们称之为具有O(1)的时间复杂度，又叫常数阶。`对于分支结构而言，无论是真，还是假，执行的次数都是恒定的，不会随着n 的变大而发生变化，所以单纯的分支结构(不包含在循环结构中)，其时间复杂度也是0(1)。

**2、线性阶**

  线性阶的循环结构会复杂很多。要确定某个算法的阶次，我们常常需要确定某个特定语句或某个语句集运行的次数。因此，我们要分析算法的复杂度，关键就是要分析循环结构的运行情况。

  下面这段代码，它的循环的时间复杂度为**O(n)**， 因为循环体中的代码须要执行n次。

```
 int i; 
 
 for(i = 0; i < n; i++){
 
 /*时间复杂度为O(1)的程序步骤序列*/

 }
```

**3、对数阶**

  如下代码：

```
 int count = 1; 
 
 while (count < n){
 
 count = count * 2;
 
  /*时间复杂度为O(1)的程序步骤序列*/
 
 }
```

  由于每次count乘以2之后，就距离n更近了一分。 也就是说，有多少个2相乘后大于n，则会退出循环。 由2^x=n 得到x=logn。 所以这个循环的时间复杂度为**O(logn)**。

**4、平方阶**

  下面例子是一个循环嵌套，它的内循环刚才我们已经分析过，时间复杂度为O(n)。

```
  int i, j; 
  
  for(i = 0; i < n; i++){
  
  　　for(j = 0; j < n; j++){
 
  /*时间复杂度为O(1)的程序步骤序列*/
  
  　　}
 
 }
```

  而对于外层的循环，不过是内部这个时间复杂度为O(n)的语句，再循环n次。 所以这段代码的时间复杂度为O(n^2)。

  如果外循环的循环次数改为了m，时间复杂度就变为O(mXn)。

  所以我们可以总结得出，循环的时间复杂度等于循环体的复杂度乘以该循环运行的次数。
  那么下面这个循环嵌套，它的时间复杂度是多少呢?

```
  int i, j; 
   
  for(i = 0; i < n; i++){
 
  　　for(j = i; j < n; j++){ /*注意j = i而不是0*/
   
  　　/*时间复杂度为O(1)的程序步骤序列*/
   
  　　}
  
 }
```

  由于当i=0时，内循环执行了n次，当i = 1时，执行了n-1次，……当i=n-1时，执行了1次。所以总的执行次数为:

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20170327144317062.png)

  用我们推导大O阶的方法，第一条，没有加法常数不予考虑；第二条，只保留最高阶项，因此保留时(n^2)/2; 第三条，去除这个项相乘的常数，也就是去除1/2，最终这段代码的时间复杂度为O(n2)。

  从这个例子，我们也可以得到一个经验，其实理解大0推导不算难，难的是**对数列的一些相关运算，这更多的是考察你的数学知识和能力。**

`注：判读一个算法的效率时，函数中的常数和其他次要项常常可以忽略，而更应该关注主项（最高阶项）的阶数`

**常见的时间复杂度**

  常见的时问复杂度如表所示。
![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20170327162904721.png)
  常用的时间复杂度所耗费的时间从小到大依次是：
![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20170327162956884.png)
  我们前面已经谈到了。O(1)常数阶、O(logn)对数阶、O(n)线性阶、 O(n^2)平方阶等，像O(n^3)，过大的n都会使得结果变得不现实。同样指数阶O(2^n)和阶乘阶O(n!)等除非是很小的n值，否则哪怕n 只是100，都是噩梦般的运行时间。所以这种[不切实际](https://www.baidu.com/s?wd=不切实际&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)的算法时间复杂度，一般我们都不去讨论。

**最坏情况与平均情况**

  我们查找一个有n 个随机数字数组中的某个数字，最好的情况是第一个数字就是，那么算法的时间复杂度为O(1)，但也有可能这个数字就在最后一个位置上待着，那么算法的时间复杂度就是O(n)，这是最坏的一种情况了。
  `最坏情况运行时间是一种保证，那就是运行时间将不会再坏了。 在应用中，这是一种最重要的需求， 通常， 除非特别指定， 我们提到的运行时间都是最坏情况的运行时间。`
  而平均运行时间也就是从概率的角度看， 这个数字在每一个位置的可能性是相同的，所以平均的查找时间为n/2次后发现这个目标元素。`平均运行时间是所有情况中最有意义的，因为它是期望的运行时间。`也就是说，我们运行一段程序代码时，是希望看到平均运行时间的。可现实中，平均运行时间很难通过分析得到，一般都是通过运行一定数量的实验数据后估算出来的。`一般在没有特殊说明的情况下，都是指最坏时间复杂度。`

#### 算法空间复杂度

  我们在写代码时，完全可以用空间来换取时间，比如说，要判断某某年是不是[闰年](https://www.baidu.com/s?wd=闰年&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)，你可能会花一点心思写了一个算法，而且由于是一个算法，也就意味着，每次给一个年份，都是要通过计算得到是否是闰年的结果。 还有另一个办法就是，事先建立一个有2050个元素的数组(年数略比现实多一点)，然后把所有的年份按下标的数字对应，如果是闰年，此数组项的值就是1，如果不是值为0。这样，所谓的判断某一年是否是闰年，就变成了查找这个数组的某一项的值是多少的问题。此时，我们的运算是最小化了，但是硬盘上或者内存中需要存储这2050个0和1。这是通过一笔空间上的开销来换取计算时间的小技巧。到底哪一个好，其实要看你用在什么地方。
  **算法的空间复杂度通过计算算法所需的存储空间实现，算法空间复杂度的计算公式记作:S(n)= O(f(n))，其中，n为问题的规模，f(n)为语句关于n所占存储空间的函数。**
  一般情况下，一个程序在机器上执行时，除了需要存储程序本身的指令、常数、变量和输入数据外，还需要存储对数据操作的存储单元，若输入数据所占空间只取决于问题本身，和算法无关，这样只需要分析该算法在实现时所需的辅助单元即可。`若算法执行时所需的辅助空间相对于输入数据量而言是个常数，则称此算法为原地工作，空间复杂度为0(1)。`
   通常， 我们都使用"时间复杂度"来指运行时间的需求，使用"空间复杂度"指空间需求。当不用限定词地使用"复杂度'时，通常都是指时间复杂度。

**一些计算的规则**

1、加法规则

   T(n,m) = T1(n) + T2(m) = O(max{f(n), g(m)})

2、乘法规则

   T(n,m) = T1(n) * T2(m) = O(max{f(n)*g(m)})

3、一个经验

   复杂度与时间效率的关系：
  c(常数) < logn < n < n*logn < n^2 < n^3 < 2^n < 3^n < n!
  l------------------------------l--------------------------l--------------l
          较好             一般           较差

**常用算法的时间复杂度和空间复杂度**

![img](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20170327164357916.png)

### 排序算法

#### 简介

0、排序算法说明

- 0.1 排序的定义
  对一序列对象根据某个关键字进行排序。

- 0.2 术语说明

  - **稳定** ：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；
  - **不稳定** ：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；不稳定排序记忆口诀：**快**（快排）**些**（希尔）**选**（选择）**一堆**（堆排）
  - **内排序** ：所有排序操作都在内存中完成；
  - **外排序** ：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；
  - **时间复杂度** ： 一个算法执行所耗费的时间。
  - **空间复杂度** ：运行完一个程序所需内存的大小。

- 0.3 算法总结

- <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png.png" alt="image" style="zoom:67%;" />

- 图片名词解释：

  - n: 数据规模
  - k: “桶”的个数
  - In-place: 占用常数内存，不占用额外内存
  - Out-place: 占用额外内存

  

- 0.5 算法分类

  ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png-16555279849789.png)

- 0.6 比较和非比较的区别

  常见的**快速排序、归并排序、堆排序、冒泡排序** 等属于**比较排序** 。在排序的最终结果里，元素之间的次序依赖于它们之间的比较。每个数都必须和其他数进行比较，才能确定自己的位置 。

  在冒泡排序之类的排序中，问题规模为n，又因为需要比较n次，所以平均时间复杂度为O(n²)。在归并排序、快速排序之类的排序中，问题规模通过分治法消减为logN次，所以时间复杂度平均O(nlogn)。

  比较排序的优势是，适用于各种规模的数据，也不在乎数据的分布，都能进行排序。可以说，比较排序适用于一切需要排序的情况。

  **计数排序、基数排序、桶排序**则属于**非比较排序** 。非比较排序是通过确定每个元素之前，应该有多少个元素来排序。针对数组arr，计算arr[i]之前有多少个元素，则唯一确定了arr[i]在排序后数组中的位置 。

  非比较排序只要确定每个元素之前的已有的元素个数即可，所有一次遍历即可解决。算法时间复杂度O(n)。

  非比较排序时间复杂度底，但由于非比较排序需要占用空间来确定唯一位置。所以对数据规模和数据分布有一定的要求。

#### 冒泡排序（Bubble Sort）

  **冒泡排序** 是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

 1.3 代码实现

- 1.1 算法描述

  - 步骤1: 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
  - 步骤2: 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
  - 步骤3: 针对所有的元素重复以上的步骤，除了最后一个；
  - 步骤4: 重复步骤1~3，直到排序完成。

- 1.2 动图演示

- ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMjMyMzg0NDktMjE0NjE2OTE5Ny5naWY.gif)

- ```
  function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0 ; i--){
    //反向循环，因此次数越来越少
     //根据j的次数，比较到j位置,因为每次最后面的数都是最大的，所以不需要再交换了
      for (let j = 0; j < i; j++) {
        if(array[j] > array[j+1]){
          let temp = array[j]
          array[j] = array[j+1]
          array[j+1] = temp
        }
      }
    }
  }
  let arr = [2,5,1,10,0,100,12,1]
  console.log(arr);
  bubbleSort(arr)
  console.log(arr);
  ```

  > 1.4 算法分析
  >
  > - 最佳情况：T(n) = O(n)
  > - 最差情况：T(n) = O(n^2)
  > - 平均情况：T(n) = O(n^2)

#### 选择排序（Selection Sort）

  **选择排序** 是表现最稳定的排序算法之一 ，**因为无论什么数据进去都是O(n^2)的时间复杂度** ，所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。理论上讲，选择排序可能也是平时排序一般人想到的最多的排序方法了吧。

  **选择排序(Selection-sort)** 是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

2.3 代码实现 

- 2.1 算法描述

  n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：

  - 步骤1：初始状态：无序区为R[1…n]，有序区为空；
  - 步骤2：第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1…i-1]和R(i…n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1…i]和R[i+1…n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
  - 步骤3：n-1趟结束，数组有序化了。
  - <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210227183028-1656862441972141.png" alt="image-20210218131631217" style="zoom: 67%;" />

- 2.2 动图演示

- ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMjQ3MTk1OTAtMTQzMzIxOTgyNC5naWY.gif)

- ```
  //根本思想就是使用标记找到最小的数，放到数组前面
  function selectionSort (array) {
    //1、获取数组的长度
    var length = array.length
    for (let j = 0; j < length; j++) {
      var min = j
      for (let i = min + 1; i < length; i++) {
        if (array[min] > array[i]) {
          min = i
        }
      }
      let temp = array[min]
      array[min] = array[j]
      array[j] = temp
  
    }
  }
  let arr = [2, 5, 1, 10, 0, 100, 12, 1]
  console.log(arr);
  selectionSort(arr)
  console.log(arr)
  ```

  > - 2.4 算法分析
  > - 最佳情况：T(n) = O(n^2)
  > - 最差情况：T(n) = O(n^2)
  > - 平均情况：T(n) = O(n^2)

#### 插入排序（Insertion Sort）

  **插入排序（Insertion-Sort）** 的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。

 

- 3.1 算法描述

  一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：

  1.默认从 i = 1 开始判断，这样 preIndex 自然是内部循环的游标；

  2.current 保存 arr[i]，通过循环来确定 current 的最终位置；

  3.每个内循环开始的时候，arr[i] === current === arr[preIndex + 1]，所以在内循环首次时 arr[preIndex + 1] = arr[preIndex] 的时候不必担心 arr[i] 的值  	丢失；

  4.总体思路是，需要排位的元素先额外缓存起来，然后套用内循环，使得需要调整的元素赋值给它后面的一个位置上，形成依次挪位，最后因为内循环在判断条	件不生效的时候停止意味着找到了需要排位的元素的正确位置，然后赋值上去，完成排序。

- 3.2 动图演示

- ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMjU2NDUyNzctMTE1MTEwMDAwMC5naWY.gif)

- 3.3 代码实现

- ```
  function insertSort (array) {
  let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
      preIndex = i - 1;
      current = arr[i];
      while (preIndex >= 0 && current < arr[preIndex]) {
        arr[preIndex + 1] = arr[preIndex];
        preIndex--;
      }
      arr[preIndex + 1] = current;
    }
    return arr;
  }
  let arr = [2, 5, 1, 10, 0, 100, 12, 1, 111, 6, 1, 76, 23, 18, 0]
  console.log(arr);
  insertSort(arr)
  console.log(arr);
  ```

- 3.4 算法分析

- 最佳情况：T(n) = O(n)

- 最坏情况：T(n) = O(n2)

- 平均情况：T(n) = O(n2)

#### 希尔排序（Shell Sort）

  **希尔排序是希尔（Donald Shell）** 于1959年提出的一种排序算法。希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序，同时该算法是冲破O(n2）的第一批算法之一。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。

  希尔排序是把记录按下表的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。

- 4.1 算法描述

  我们来看下希尔排序的基本步骤，在此我们选择增量gap=length/2，缩小增量继续以gap = gap/2的方式，这种增量选择我们可以用一个序列来表示，{n/2,(n/2)/2…1}，称为增量序列。希尔排序的增量序列的选择与证明是个数学难题，我们选择的这个增量序列是比较常用的，也是希尔建议的增量，称为希尔增量，但其实这个增量序列不是最优的。此处我们做示例使用希尔增量。

  先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：

  - 步骤1：选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
  - 步骤2：按增量序列个数k，对序列进行k 趟排序；
  - 步骤3：每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

- 4.2 过程演示

  <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png-165552798497910.png" alt="image" style="zoom: 67%;" />

- 4.3 代码实现

  ```
  function shellSort (arr) {
    let len = arr.length;
    // gap 即为增量
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < len; i++) {
        let j = i;
        let current = arr[i];
        while (j - gap >= 0 && current < arr[j - gap]) {
          arr[j] = arr[j - gap];
          j = j - gap;
        }
        arr[j] = current;
      }
    }
  }
  
  var arr = [3, 5, 7, 1, 4, 56, 12, 78, 25, 0, 9, 8, 42, 37];
  shellSort(arr)
  console.log(arr);
  ```

  4.4 算法分析

- 最佳情况：T(n) = O(nlog2 n)

- 最坏情况：T(n) = O(nlog2 n)

- 平均情况：T(n) =O(nlog2n)

#### 快速排序（Quick Sort）

  **快速排序** 的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。

- 6.1 算法描述

  快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：

  - 步骤1：从数列中挑出一个元素，称为 “基准”（**pivot** ）；
  - 步骤2：重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
  - 步骤3：递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。

- 6.2 动图演示

- ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzA5MzYzNzEtMTQxMzUyMzQxMi5naWY.gif)

- 6.3 代码实现

  ```
  function quickSort(arr) {
    //当array中小于等于一项，则不用处理
    if (arr.length <= 1) return arr
    const flag = Math.ceil((arr.length - 1) / 2)
    const middle = arr.splice(flag, 1)[0]
    const left = [], right = []
    for (let index = 0; index < arr.length; index++) {
      const value = arr[index]
      value > middle ? right.push(value) : left.push(value)
    }
    return [...quickSort(left), middle, ...quickSort(right)]
  }
  let arr = [3, 9, 5, 4, 10];
  console.log(quickSort(arr));
  ```

  > 6.4 算法分析
  >
  > 最佳情况：T(n) = O(nlogn)
  >
  > 最差情况：T(n) = O(n2)
  >
  > 平均情况：T(n) = O(nlogn)

#### 归并排序（Merge Sort）

和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是O(n log n）的时间复杂度。代价是需要额外的内存空间。

**归并排序** 是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。归并排序是一种稳定的排序方法。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。

- 5.1 算法描述

  - 步骤1：把长度为n的输入序列分成两个长度为n/2的子序列；
  - 步骤2：对这两个子序列分别采用归并排序；
  - 步骤3：将两个排序好的子序列合并成一个最终的排序序列。

- 5.2 动图演示

  ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzA1NTcwNDMtMzczNzUwMTAuZ2lm.gif)

- 5.3 代码实现

```
    public static int[] MergeSort(int[] array) {
        if (array.length < 2) return array;
        int mid = array.length / 2;
        int[] left = Arrays.copyOfRange(array, 0, mid);
        int[] right = Arrays.copyOfRange(array, mid, array.length);
        return merge(MergeSort(left), MergeSort(right));
    }
    /**
     * 归并排序——将两段排序好的数组结合成一个排序数组
     *
     * @param left
     * @param right
     * @return
     */
    public static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        for (int index = 0, i = 0, j = 0; index < result.length; index++) {
            if (i >= left.length)
                result[index] = right[j++];
            else if (j >= right.length)
                result[index] = left[i++];
            else if (left[i] > right[j])
                result[index] = right[j++];
            else
                result[index] = left[i++];
        }
        return result;
    }
```

5.4 算法分析

- 最佳情况：T(n) = O(n)
- 最差情况：T(n) = O(nlogn)
- 平均情况：T(n) = O(nlogn)



> ## 7、堆排序（Heap Sort）
>
> **堆排序（Heapsort）** 是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。
>
> - 7.1 算法描述
>
>   - 步骤1：将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；
>   - 步骤2：将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]<=R[n]；
>   - 步骤3：由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
>
> - 7.2 动图演示
>
>   ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzEzMDg2OTktMzU2MTM0MjM3LmdpZg.gif)
>
> - 7.3 代码实现
>
>   注意：这里用到了完全二叉树的部分性质：详情见数据结构二叉树知识点
>
> ```
> //声明全局变量，用于记录数组array的长度；
>     static int len;
>     /**
>      * 堆排序算法
>      *
>      * @param array
>      * @return
>      */
>     public static int[] HeapSort(int[] array) {
>         len = array.length;
>         if (len < 1) return array;
>         //1.构建一个最大堆
>         buildMaxHeap(array);
>         //2.循环将堆首位（最大值）与末位交换，然后在重新调整最大堆
>         while (len > 0) {
>             swap(array, 0, len - 1);
>             len--;
>             adjustHeap(array, 0);
>         }
>         return array;
>     }
>     /**
>      * 建立最大堆
>      *
>      * @param array
>      */
>     public static void buildMaxHeap(int[] array) {
>         //从最后一个非叶子节点开始向上构造最大堆
>         //for循环这样写会更好一点：i的左子树和右子树分别2i+1和2(i+1)
>         for (int i = (len/2- 1); i >= 0; i--) {
> 
> 
> 
>             adjustHeap(array, i);
> 
> 
> 
>         }
> 
> 
> 
>     }
> 
> 
> 
>     /**
> 
> 
> 
>      * 调整使之成为最大堆
> 
> 
> 
>      *
> 
> 
> 
>      * @param array
> 
> 
> 
>      * @param i
> 
> 
> 
>      */
> 
> 
> 
>     public static void adjustHeap(int[] array, int i) {
> 
> 
> 
>         int maxIndex = i;
> 
> 
> 
>         //如果有左子树，且左子树大于父节点，则将最大指针指向左子树
> 
> 
> 
>         if (i * 2 < len && array[i * 2] > array[maxIndex])
> 
> 
> 
>             maxIndex = i * 2 + 1;
> 
> 
> 
>         //如果有右子树，且右子树大于父节点，则将最大指针指向右子树
> 
> 
> 
>         if (i * 2 + 1 < len && array[i * 2 + 1] > array[maxIndex])
> 
> 
> 
>             maxIndex = i * 2 + 2; 
> 
> 
> 
>         //如果父节点不是最大值，则将父节点与最大值交换，并且递归调整与父节点交换的位置。
> 
> 
> 
>         if (maxIndex != i) {
> 
> 
> 
>             swap(array, maxIndex, i);
> 
> 
> 
>             adjustHeap(array, maxIndex);
> 
> 
> 
>         }
> 
> 
> 
>     }
> ```
> 
> 7.4 算法分析
> 
> - 最佳情况：T(n) = O(nlogn)
> - 最差情况：T(n) = O(nlogn)
> - 平均情况：T(n) = O(nlogn)

> ## 8、计数排序（Counting Sort）
>
> **计数排序** 的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
>
> **计数排序(Counting sort)** 是一种稳定的排序算法。计数排序使用一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。
>
> - 8.1 算法描述
>
>   - 步骤1：找出待排序的数组中最大和最小的元素；
>   - 步骤2：统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
>   - 步骤3：对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
>   - 步骤4：反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
>
> - 8.2 动图演示
>
>   ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzE3NDA4NDAtNjk2ODE4MS5naWY.gif)
>
> - 8.3 代码实现
>
> ```
>     /**
> 
> 
> 
>      * 计数排序
> 
> 
> 
>      *
> 
> 
> 
>      * @param array
> 
> 
> 
>      * @return
> 
> 
> 
>      */
> 
> 
> 
>     public static int[] CountingSort(int[] array) {
> 
> 
> 
>         if (array.length == 0) return array;
> 
> 
> 
>         int bias, min = array[0], max = array[0];
> 
> 
> 
>         for (int i = 1; i < array.length; i++) {
> 
> 
> 
>             if (array[i] > max)
> 
> 
> 
>                 max = array[i];
> 
> 
> 
>             if (array[i] < min)
> 
> 
> 
>                 min = array[i];
> 
> 
> 
>         }
> 
> 
> 
>         bias = 0 - min;
> 
> 
> 
>         int[] bucket = new int[max - min + 1];
> 
> 
> 
>         Arrays.fill(bucket, 0);
> 
> 
> 
>         for (int i = 0; i < array.length; i++) {
> 
> 
> 
>             bucket[array[i] + bias]++;
> 
> 
> 
>         }
> 
> 
> 
>         int index = 0, i = 0;
> 
> 
> 
>         while (index < array.length) {
> 
> 
> 
>             if (bucket[i] != 0) {
> 
> 
> 
>                 array[index] = i - bias;
> 
> 
> 
>                 bucket[i]--;
> 
> 
> 
>                 index++;
> 
> 
> 
>             } else
> 
> 
> 
>                 i++;
> 
> 
> 
>         }
> 
> 
> 
>         return array;
> 
> 
> 
>     }
> ```
>
> 8.4 算法分析
>
>   当输入的元素是n 个0到k之间的整数时，它的运行时间是 O(n + k)。计数排序不是比较排序，排序的速度快于任何比较排序算法。由于用来计数的数组C的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上1），这使得计数排序对于数据范围很大的数组，需要大量时间和内存。
>
> - 最佳情况：T(n) = O(n+k)
> - 最差情况：T(n) = O(n+k)
> - 平均情况：T(n) = O(n+k)

> ## 9、桶排序（Bucket Sort）
>
> **桶排序** 是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
>
> **桶排序 (Bucket sort)的工作的原理：**
> 假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排
>
> - 9.1 算法描述
>
>   - 步骤1：人为设置一个BucketSize，作为每个桶所能放置多少个不同数值（例如当BucketSize==5时，该桶可以存放｛1,2,3,4,5｝这几种数字，但是容量不限，即可以存放100个3）；
>
>   - 步骤2：遍历输入数据，并且把数据一个一个放到对应的桶里去；
>
>   - 步骤3：对每个不是空的桶进行排序，可以使用其它排序方法，也可以递归使用桶排序；
>
>   - 步骤4：从不是空的桶里把排好序的数据拼接起来。 
>
>     注意，如果递归使用桶排序为各个桶排序，则当桶数量为1时要手动减小BucketSize增加下一循环桶的数量，否则会陷入死循环，导致内存溢出。
>
> - 9.2 图片演示
>
>   ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgformat,png-165552798497911.png)
>
> - 9.3 代码实现
>
> ```
>  /**
> 
> 
> 
>      * 桶排序
> 
> 
> 
>      *
> 
> 
> 
>      * @param array
> 
> 
> 
>      * @param bucketSize
> 
> 
> 
>      * @return
> 
> 
> 
>      */
> 
> 
> 
>     public static ArrayList<Integer> BucketSort(ArrayList<Integer> array, int bucketSize) {
> 
> 
> 
>         if (array == null || array.size() < 2)
> 
> 
> 
>             return array;
> 
> 
> 
>         int max = array.get(0), min = array.get(0);
> 
> 
> 
>         // 找到最大值最小值
> 
> 
> 
>         for (int i = 0; i < array.size(); i++) {
> 
> 
> 
>             if (array.get(i) > max)
> 
> 
> 
>                 max = array.get(i);
> 
> 
> 
>             if (array.get(i) < min)
> 
> 
> 
>                 min = array.get(i);
> 
> 
> 
>         }
> 
> 
> 
>         int bucketCount = (max - min) / bucketSize + 1;
> 
> 
> 
>         ArrayList<ArrayList<Integer>> bucketArr = new ArrayList<>(bucketCount);
> 
> 
> 
>         ArrayList<Integer> resultArr = new ArrayList<>();
> 
> 
> 
>         for (int i = 0; i < bucketCount; i++) {
> 
> 
> 
>             bucketArr.add(new ArrayList<Integer>());
> 
> 
> 
>         }
> 
> 
> 
>         for (int i = 0; i < array.size(); i++) {
> 
> 
> 
>             bucketArr.get((array.get(i) - min) / bucketSize).add(array.get(i));
> 
> 
> 
>         }
> 
> 
> 
>         for (int i = 0; i < bucketCount; i++) {
> 
> 
> 
>             if (bucketSize == 1) { // 如果带排序数组中有重复数字时
> 
> 
> 
>                 for (int j = 0; j < bucketArr.get(i).size(); j++)
> 
> 
> 
>                     resultArr.add(bucketArr.get(i).get(j));
> 
> 
> 
>             } else {
> 
> 
> 
>                 if (bucketCount == 1)
> 
> 
> 
>                     bucketSize--;
> 
> 
> 
>                 ArrayList<Integer> temp = BucketSort(bucketArr.get(i), bucketSize);
> 
> 
> 
>                 for (int j = 0; j < temp.size(); j++)
> 
> 
> 
>                     resultArr.add(temp.get(j));
> 
> 
> 
>             }
> 
> 
> 
>         }
> 
> 
> 
>         return resultArr;
> 
> 
> 
>     }
> ```
>
> 9.4 算法分析
>
>   桶排序最好情况下使用线性时间O(n)，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，因为其它部分的时间复杂度都为O(n)。很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大。
>
> - 最佳情况：T(n) = O(n+k)
> - 最差情况：T(n) = O(n+k)
> - 平均情况：T(n) = O(n2)

#### 基数排序（Radix Sort）

  **基数排序**也是非比较的排序算法，对每一位进行排序，从最低位开始排序，复杂度为O(kn),为数组长度，k为数组中的数的最大的位数；

  **基数排序**是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以是稳定的。

- 10.1 算法描述

  - 步骤1：取得数组中的最大数，并取得位数；
  - 步骤2：arr为原始数组，从最低位开始取每个位组成radix数组；
  - 步骤3：对radix进行计数排序（利用计数排序适用于小范围数的特点）；

- 10.2 动图演示

  ![image](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgaHR0cHM6Ly9pbWFnZXMyMDE3LmNuYmxvZ3MuY29tL2Jsb2cvODQ5NTg5LzIwMTcxMC84NDk1ODktMjAxNzEwMTUyMzI0NTM2NjgtMTM5NzY2MjUyNy5naWY.gif)

- 10.3 代码实现

```
 /**



     * 基数排序



     * @param array



     * @return



     */



    public static int[] RadixSort(int[] array) {



        if (array == null || array.length < 2)



            return array;



        // 1.先算出最大数的位数；



        int max = array[0];



        for (int i = 1; i < array.length; i++) {



            max = Math.max(max, array[i]);



        }



        int maxDigit = 0;



        while (max != 0) {



            max /= 10;



            maxDigit++;



        }



        int mod = 10, div = 1;



        ArrayList<ArrayList<Integer>> bucketList = new ArrayList<ArrayList<Integer>>();



        for (int i = 0; i < 10; i++)



            bucketList.add(new ArrayList<Integer>());



        for (int i = 0; i < maxDigit; i++, mod *= 10, div *= 10) {



            for (int j = 0; j < array.length; j++) {



                int num = (array[j] % mod) / div;



                bucketList.get(num).add(array[j]);



            }



            int index = 0;



            for (int j = 0; j < bucketList.size(); j++) {



                for (int k = 0; k < bucketList.get(j).size(); k++)



                    array[index++] = bucketList.get(j).get(k);



                bucketList.get(j).clear();



            }



        }



        return array;



    }
```

- 10.4 算法分析

  - 最佳情况：T(n) = O(n * k)
  - 最差情况：T(n) = O(n * k)
  - 平均情况：T(n) = O(n * k)

- 10.5 基数排序有两种方法：

  - MSD 从高位开始进行排序
  - LSD 从低位开始进行排序

- **基数排序** vs **计数排序** vs **桶排序**

  这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：

  - **基数排序：** 根据键值的每位数字来分配桶
  - **计数排序：** 每个桶只存储单一键值
  - **桶排序：** 每个桶存储一定范围的数值

### 查找算法

#### 二分查找

> 首先，假设表中元素是按升序排列，将表中间位置记录的[关键字](https://baike.baidu.com/item/关键字?fromModule=lemma_inlink)与查找关键字比较，如果两者相等，则查找成功；否则利用中间位置[记录](https://baike.baidu.com/item/记录/1837758?fromModule=lemma_inlink)将表分成前、后两个子表，如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。重复以上过程，直到找到满足条件的[记录](https://baike.baidu.com/item/记录/1837758?fromModule=lemma_inlink)，使查找成功，或直到子表不存在为止，此时查找不成功。
>
> 时间复杂度： O(log2n)

非递归

```js
function BinarySearch(arr, item) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor(left + right)
        const midValue = arr[mid]
        if (midValue === item) {
            return mid
        } else if (item < midValue) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
}
//使用二分查找必须是已经排好序的数组
let arr = [1, 4, 8, 20, 77, 266, 888, 1999, 2222, 4982]
console.log(BinarySearch(arr, 77));  //4
```

  递归实现：

```js
function BSearch(arr, item, start = 0, end = arr.length - 1) {
    if(start > end) return false 
    var mid = Math.floor((start + end) / 2)
    const midValue = arr[mid]
    if (item === arr[mid]) return mid
    return item > midValue ? BSearch(arr, item, mid + 1, end) : BSearch(arr, item, start, mid - 1)
}
//使用二分查找必须是已经排好序的数组
let arr = [1, 4, 8, 20, 77, 266, 888, 1999, 2222, 4982]
console.log(BSearch(arr, 77));  //4
```

