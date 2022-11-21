
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWdrci5jbi1iai51ZmlsZW9zLmNvbS9hNWFkZTQ5MS1kZGUzLTQ4Y2UtYjkxZi0yNzZjOWU2ODllZWIucG5n?x-oss-process=image/format,png)




## 整体流程的介绍
[toc]


>文章会配合例子来讲解为什么要这么实现，尽我所能讲得粗俗易懂。
## 1. 定义整体结构
1. 先写出构造函数，将Promise向外暴露

```js
/*
自定义Promise函数模块：IIFE
 */

(function (window) {
    /*
    Promise构造函数
    executor:执行器函数
     */
    function Promise(executor) {

    }

    // 向外暴露Promise
    window.Promise = Promise
})()

```

2. 添加Promise原型对象上的方法

```js
 /*
    Promise原型对象的then
    指定一个成功/失败的回调函数
    返回一个新的promise对象
     */
    Promise.prototype.then = function(onResolved,onRejected){

    }

    /*
    Promise原型对象的.catch
    指定一个失败的回调函数
    返回一个新的promise对象
     */
    Promise.prototype.catch = function(onRejected){

    }
```

3. 添加Promise函数对象上的方法

```js
/*
    Promise函数对象的resovle方法
    返回一个指定结果的promise对象
     */
    Promise.resolve = function(value){

    }

    /*
    Promise函数对象的reject方法
    返回一个指定reason的失败状态的promise对象
    */
    Promise.reject = function(value){

    }

    /*
    Promise函数对象的all方法
    返回一个promise对象，只有当所有promise都成功时返回的promise状态才成功
    */
    Promise.all = function(0value){

    }

    /*
    Promise函数对象的race方法
    返回一个promise对象，状态由第一个完成的promise决定
    */
    Promise.race = function(value){

    }
```
通过上面的注释可以知道。不管是**Promise原型对象上的方法**还是**Promise函数对象上的方法** ，它们的执行结果都将**返回一个Promise对象**

## 2. 实现Promise构造函数
我们看看我们是怎么使用Promise的


```js
const promiseA = new Promise( (resolve,reject) => {
    resolve(777);
});
```

1. 我们传入了一个函数，而且这个函数被立即执行，不仅如此，这个函数还会立即执行resolve和reject。说明构造函数里有resolve和reject方法。因此我们可以初步实现：

```js
    /*
    Promise构造函数
    executor:执行器函数
     */
    function Promise(executor) {

        function resovle() {

        }
        function reject() {

        }

        // 立即同步执行executor
        executor(resovle,reject)
    }

```

2. 每个promise都有一个状态可能为pending或resolved，rejected。而且初始状态都为pending。因此需要添加个status来表示当前promise的状态.。并且每个promise有自己的data。
```js
function Promise(executor) {

        var self = self
        新增代码
        self.status = 'pending' // 给promise对象指定status属性，初始值为pending
    
        self.data = undefined // 给promise对象指定一个存储结果的data

        function resovle() {

        }
        function reject() {

        }

        // 立即同步执行executor
        executor(resovle,reject)
    }
```

此外，当我们这样使用Promise的时候，


```js
// 例1
var promise = new Promise((resovle,reject)=>{
    
})

promise.then(resolve=>{},reject=>{})
```

这时执行到then，因为我们传入的立即执行函数没有执行resolve或者reject，所以promise的状态还是pending，这时要把then里面的回调函数保存起来，所以需要个callbacks数组


```js
function Promise(executor) {

        var self = self

        self.status = 'pending' // 给promise对象指定status属性，初始值为pending
        self.data = undefined // 给promise对象指定一个存储结果的data
        新增代码
        self.callbacks = []  // 每个元素的结构：{onResolved(){}，onRejected(){}}


        function resovle() {

        }
        function reject() {

        }

        // 立即同步执行executor
        executor(resovle,reject)
    }
```
那 then函数是怎么把传入的回调收集起来的。其实很简单，就是判断当前promise是否为pending状态，是的话，就把回调push到callbacks中。
```js
Promise.prototype.then = function(onResolved,onRejected){

        var self = this
        
        if(self.status === 'pending'){
            // promise当前状态还是pending状态，将回调函数保存起来
            self.callbacks.push({
                onResolved(){onResolved(self.data)},
                onRejected(){onRejected(self.data)}
            })
        }else if(self.status === 'resolved'){
        }else{
        }

    }
```
3. 在上面的例子1的基础上，当我们执行resovle（value）时，如例2

```js
// 例2
var promise = new Promise((resolve,reject)=>{
    setTimeout(function () {
        resolve(1)
    })
})

promise.then(
    value=>{console.log(value)},
    err=>{console.log(err)}
    )

```
此时代码执行情况是怎么样的呢？
1. 先执行new Promise里的代码，然后发现个定时器，js线程将定时器交给定时器线程处理，2. 然后继续执行下面的代码，发现是then，而且当前的promise还是pending的状态。就把then里的回调函数放到callbacks中。
3. 5秒后定时器线程将定时器里的回调函数（也就是宏任务）放到消息队列中，js线程在消息队列里发现了这个宏任务，就把它拿来执行。
4. 执行这个宏任务，就执行了resolve(1)，此时promise的callbacks里的回调被执行。并将当前promise状态改为resolved。然后这个1也会被保存到当前promise对象中

那怎么实现resolve呢？依旧上面的描述，就知道resovle的功能是**执行callbacks里的函数**，并**保存data**，**并将当前promise状态改为resolved**。所以我们可以这么实现

```js
function resolve(value) {
    // 将状态改为resolved
    self.status = 'resolved'
    // 保存value的值
    self.data = value

    // 如果有待执行的callback函数，立即异步执行回调函数onResolved
    if (self.callbacks.length>0){
        self.callbacks.forEach(callbackObj=>{
            callbackObj.onResolved(value)
        })
    }
}
```
4. 我们还知道，promise的状态只能改变一次，因此当执行resolve的时候要判断是不是promise是不是pending的状态，否则是不能执行的

```js
function resolve(value) {
    // 如果当前状态不是pending，则不执行
    if(this.status !== 'pending'){
        return 
    }
    // 将状态改为resolved
    this.status = 'resolved'
    // 保存value的值
    this.data = value

    // 如果有待执行的callback函数，立即异步执行回调函数onResolved
    if (this.callbacks.length>0){
        setTimeout(()=>{
            this.callbacks.forEach(callbackObj=>{ A
                callbackObj.onResolved(value)
            })
        })
    }
}
```
5. 异曲同工之妙的是reject方法也是这个道理，因此这里无需赘述


```js
function reject(value) {
    // 如果当前状态不是pending，则不执行
    if(self.status !== 'pending'){
        return
    }
    // 将状态改为rejected
    self.status = 'rejected'
    // 保存value的值
    self.data = value

    // 如果有待执行的callback函数，立即异步执行回调函数onResolved
    if (self.callbacks.length>0){
      self.callbacks.forEach(callbackObj=>{
          callbackObj.onRejected(value)
      })
    }
}
```
6. 我们又知道，当在执行executor的时候，如果执行异常的话，这个promise的状态会直接执行reject方法。例如

```js
// 例 3
var promise = new Promise((resolve,reject)=>{

    error；执行到这里出错了

    setTimeout(function () {
        resolve(1)
    })
})
```
要实现这个功能，我们可以在executor外让try catch来捕获


```js
try{
    // 立即同步执行executor
    executor(resolve,reject)
}catch (e) { // 如果执行器抛出异常，promise对象变为rejected状态
    reject(e)
}
```


好了，现在测试下
```js
 // 例4
 let promise = new Promise((resolve,reject)=>{
        
        setTimeout(function () {
            resolve(1)
            //reject(1)
        },100)
    })

    promise.then(
        value=>{
            console.log("onResolved:",value);
        },
        reason=>{
            console.log("onRejected:",reason);
        }
    )

```
发现成功。
成功输出`onResolved:1`
## 3. 实现then方法
我们在上面简单的实现了当前promise为pending状态的情况，如：
```js
Promise.prototype.then = function(onResolved,onRejected){

    var self = this

    if(self.status === 'pending'){
        // promise当前状态还是pending状态，将回调函数保存起来
        self.callbacks.push({
            onResolved(){onResolved(self.data)},
            onRejected(){onRejected(self.data)}
        })
    }else if(self.status === 'resolved'){
    }else{
    }

}
```
那其他情况呢？

执行到then时，promise可能会是pending状态，此时就要把then里的回调函数保存起来，也可能会是resolved或者rejected状态，此时就不用把回调保存起来，直接执行onResolved或onRejected方法。注意是**异步执行**。而且是做为微任务的，这里我们简单的用setTimeout来实现就好了。

```js
Promise.prototype.then = function(onResolved,onRejected){

  var self = this

  if(self.status === 'pending'){
      // promise当前状态还是pending状态，将回调函数保存起来
      self.callbacks.push({
          onResolved(){onResolved(self.data)},
          onRejected(){onRejected(self.data)}
      })
  }else if(self.status === 'resolved'){
      setTimeout(()=>{
          onResolved(self.data)
      })
  }else{
      setTimeout(()=>{
          onResolved(self.data)
      })
  }

}

```

而且我们知道，执行完then是要返回一个新的promise的，而新的promise的状态则由当前then的执行结果来确定。


```js
 Promise.prototype.then = function(onResolved,onRejected){

    var self = this

    return new Promise((resolve,reject)=>{
        if(self.status === 'pending'){
            // promise当前状态还是pending状态，将回调函数保存起来
            self.callbacks.push({
                onResolved(){onResolved(self.data)},
                onRejected(){onRejected(self.data)}
            })
        }else if(self.status === 'resolved'){
            setTimeout(()=>{
                onResolved(self.data)
            })
        }else{
            setTimeout(()=>{
                onResolved(self.data)
            })
        }
    })

}
```
当 当前的promise状态为resolved的时候，则执行then的时候，会执行第二个判断语句

则当前执行第二个判断语句的时候会出现三种情况
1. 如果then里的回调函数返回的不是promise，return的新promise的状态是则是resolved，value就是返回的值。例如：

```js
// 例5
let promise = new Promise((resolve,reject)=>{
    resolve(1)
})

promise.then(
    value=>{
        return value //返回的不是promise，是value
    }
)
```
因此，我们可以这样实现


```js
Promise.prototype.then = function(onResolved,onRejected){

    var self = this

    return new Promise((resolve,reject)=>{
        if(self.status === 'pending'){
            // promise当前状态还是pending状态，将回调函数保存起来
            self.callbacks.push({
                onResolved(){onResolved(self.data)},
                onRejected(){onRejected(self.data)}
            })
        }else if(self.status === 'resolved'){
            修改代码
            setTimeout(()=>{
                const result = onResolved(self.data)
                if (result instanceof Promise){

                } else {
                // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
                    resolve(result)
                }
            })
        }else{
            setTimeout(()=>{
                onResolved(self.data)
            })
        }
    })

}
```
简单解释下：

执行onResolved(self.data)，其实就是执行例子中的下面这个回调函数

```js
value=>{
        return value //返回的不是promise，是value
    }
```
那么这个回调函数返回了value。就把value传入resolve函数，resolve函数将当前新的promise的状态改为resolved，同时将value保存到当前新的promise的data中。


2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果，如代码所示，我们返回一个新的promise。如果这个promise执行了resolve，返回的新的promise的状态则是resolved的。否则为rejected
   
```js
// 例6
let promise = new Promise((resolve,reject)=>{
    resolve(1)
})

promise.then(
    value=>{
        return new Promise((resolve,reject)=>{
            resolve(2)
            //或者
            //reject(error)
        })
    }
)
```
因此我们可以这样实现

```js
Promise.prototype.then = function(onResolved,onRejected){

    var self = this

    return new Promise((resolve,reject)=>{
        if(self.status === 'pending'){
            // promise当前状态还是pending状态，将回调函数保存起来
            self.callbacks.push({
                onResolved(){onResolved(self.data)},
                onRejected(){onRejected(self.data)}
            })
        }else if(self.status === 'resolved'){
            setTimeout(()=>{
                const result = onResolved(self.data)
                if (result instanceof Promise){
                    // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
                    result.then(
                        value => {resolve(value)},
                        reason => {reject(reason)}
                    )
                } else {
                    // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
                    resolve(result)
                }
            })
        }else{
            setTimeout(()=>{
                onResolved(self.data)
            })
        }
    })

}

```
在这里说明一下：

```
result.then(
    value => {resolve(value)},
    reason => {reject(reason)}
)
```
由于我们在例6中执行了then里的
```js
value=>{
        return new Promise((resolve,reject)=>{
            resolve(2)
            //或者
            //reject(error)
        })
    }
```
则返回一个promise对象，这个promise对象可能为resolved状态（执行 resolve(2)）也可能为rejected状态（执行reject(error)）。

将会导致`value => {resolve(value)},`这个回调函数的执行或者
`    reason => {reject(reason)}`的执行。

因此会把即将返回的新的promise的data设置为value或者，reason。会把状态设置为resolved或者rejected。

3. 如果执行这段代码的时候抛出错误，则返回的promise的状态为rejected，我们可以用try catch来实现

```js
setTimeout(()=>{
    try{
        const result = onResolved(self.data)
        if (result instanceof Promise){
            // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
            result.then(
                value => {resolve(value)},
                reason => {reject(reason)}
            )
        } else {
            // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
            resolve(result)
        }
    }catch (e) {
      //  3.如果执行onResolved的时候抛出错误，则返回的promise的状态为rejected
        reject(e)
    }
})
```
异曲同工之妙的是当status === 'rejected'，道理一样

```js
 setTimeout(()=>{
      try{
          const result = onRejected(self.data)
          if (result instanceof Promise){
              // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
              result.then(
                  value => {resolve(value)},
                  reason => {reject(reason)}
              )
          } else {
              // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
              resolve(result)
          }
      }catch (e) {
          //  3.如果执行onResolved的时候抛出错误，则返回的promise的状态为rejected
          reject(e)
      }
  })
```

到这里，我们发现当执行resolve的时候，`onResolved(self.data)`和`onRejected(self.data)`执行时也会跟上面一样的结果，可以说执行回调函数都要做以上判断，因此我们要将

```
 self.callbacks.push({
    onResolved(){onResolved(self.data)},
    onRejected(){onRejected(self.data)}
})
```
改成

```js
if(self.status === 'pending'){
// promise当前状态还是pending状态，将回调函数保存起来
self.callbacks.push({
    onResolved(){
        try{
            const result = onResolved(self.data)
            if (result instanceof Promise){
                // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
                result.then(
                    value => {resolve(value)},
                    reason => {reject(reason)}
                )
            } else {
                // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
                resolve(result)
            }
        }catch (e) {
            //  3.如果执行onResolved的时候抛出错误，则返回的promise的状态为rejected
            reject(e)
        }
    },
```
到此，我们发现，相同的代码太多了，因此有必要封装一下

```
 function handle(callback) {
    try{
        const result = callback(self.data)
        if (result instanceof Promise){
            // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
            result.then(
                value => {resolve(value)},
                reason => {reject(reason)}
            )
        } else {
            // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
            resolve(result)
        }
    }catch (e) {
        //  3.如果执行onResolved的时候抛出错误，则返回的promise的状态为rejected
        reject(e)
    }
}
```

这样以来就清爽了很多

```js
   Promise.prototype.then = function(onResolved,onRejected){

        var self = this

        return new Promise((resolve,reject)=>{
           /*
            调用指定回调函数的处理，根据执行结果。改变return的promise状态
             */
            function handle(callback) {
                try{
                    const result = callback(self.data)
                    if (result instanceof Promise){
                        // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
                        result.then(
                            value => {resolve(value)},
                            reason => {reject(reason)}
                        )
                    } else {
                        // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
                        resolve(result)
                    }
                }catch (e) {
                    //  3.如果执行onResolved的时候抛出错误，则返回的promise的状态为rejected
                    reject(e)
                }
            }
            if(self.status === 'pending'){
                // promise当前状态还是pending状态，将回调函数保存起来
                self.callbacks.push({
                    onResolved(){
                        handle(onResolved)
                    },
                    onRejected(){
                        handle(onRejected)
                    }
                })
            }else if(self.status === 'resolved'){
                setTimeout(()=>{
                    handle(onResolved)
                })
            }else{ // 当status === 'rejected'
                setTimeout(()=>{
                    handle(onRejected)
                })
            }
        })

    }

```
另外，我们还知道，promise会发生值传透，例如

```js

let promsie = new Promise((resolve,reject)=>{
    resolve(1)
})
promsie
  .then(2)
  .then(3)
  .then(value =>console.log(value))
```
运行结果： 1

解释：.then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。值传透可以理解为，当传入then的不是函数的时候，这个then是无效的。而实际原理上其实是当then中传入的不算函数，则这个then返回的promise的data，将会保存上一个的promise.data。这就是发生值穿透的原因。而且每一个无效的then所返回的promise的状态都为**resolved**。

因此，要实现直传透这个特性，我们可以这样实现

 添加这两句来判断要不要发生值传透
```js
onResolved = typeof onResolved === 'function'? onResolved: value => value
onRejected = typeof onRejected === 'function'? onRejected: reason => {throw reason}
```
实际上就是改写，如果传入的不是函数，那就忽略那个传入值，自己再写一个函数。这个函数的执行结果将返回上一个promise的data
```js
Promise.prototype.then = function(onResolved,onRejected){
    onResolved = typeof onResolved === 'function'? onResolved: value => value
    onRejected = typeof onRejected === 'function'? onRejected: reason => {throw reason}
    var self = this

    return new Promise((resolve,reject)=>{

        /*
        调用指定回调函数的处理，根据执行结果。改变return的promise状态
         */
        function handle(callback) {
            try{
                const result = callback(self.data)
                if (result instanceof Promise){
                    // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
                    result.then(
                        value => {resolve(value)},
                        reason => {reject(reason)}
                    )
                } else {
                    // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
                    resolve(result)
                }
            }catch (e) {
                //  3.如果执行onResolved的时候抛出错误，则返回的promise的状态为rejected
                reject(e)
            }
        }
        if(self.status === 'pending'){
            // promise当前状态还是pending状态，将回调函数保存起来
            self.callbacks.push({
                onResolved(){
                    handle(onResolved)
                },
                onRejected(){
                    handle(onRejected)
                }
            })
        }else if(self.status === 'resolved'){
            setTimeout(()=>{
                handle(onResolved)
            })
        }else{ // 当status === 'rejected'
            setTimeout(()=>{
                handle(onRejected)
            })
        }
    })

}

```
## 3.实现catch方法
catch方法的作用跟then里的第二歌回调函数一样，因此我们可以这样来实现


```js
Promise.prototype.catch = function(onRejected){
    return this.then(undefined,onRejected)
}
```
我的天啊，居然这么简单

## 4. 实现Promise.resolve

我们都知道，Promise.resolve方法可以传三种值
1. 不是promise
2. 成功状态的promise
3. 失败状态的promise

```js

    Promise.resolve(1)
    Promise.resolve(Promise.resolve(1))
    Promise.resolve(Promise.reject(1))
```

实际上跟实现上面的then时有点像

```js
Promise.resolve = function(value){
  return new Promise((resolve,reject)=>{
      if (value instanceof Promise){
          // 如果value 是promise
          value.then(
              value => {resolve(value)},
              reason => {reject(reason)}
          )
      } else{
          // 如果value不是promise
          resolve(value)
      }

  }

}
```
## 5.实现Promise.reject
实现这个比较简单，返回一个状态为rejected的promise就好了

```js
/*
Promise函数对象的reject方法
返回一个指定reason的失败状态的promise对象
*/
Promise.reject = function(reason){
    return new Promise((resolve,reject)=>{
        reject(reason)
    })
}

```
## 6.实现Promise.all
我们知道，这个方法会返回一个promise

```js
    /*
    Promise函数对象的all方法
    返回一个promise对象，只有当所有promise都成功时返回的promise状态才成功
    */
    Promise.all = function(promises){
        return new Promise((resolve,reject)=>{
           
        })
    }
  
```

而这个promise的状态由遍历每个promise产生的结果决定

```js
    /*
    Promise函数对象的all方法
    返回一个promise对象，只有当所有promise都成功时返回的promise状态才成功
    */
    Promise.all = function(promises){
        return new Promise((resolve,reject)=>{
            // 遍历promises，获取每个promise的结果
            promises.forEach((p,index)=>{
                
            })
        })
    }
```
有两种结果：
1. 遍历到有一个promise是reject状态，则直接返回的promise状态为rejected
   
```js
 Promise.all = function(promises){
        return new Promise((resolve,reject)=>{
            // 遍历promises，获取每个promise的结果
            promises.forEach((p,index)=>{
                p.then(
                    value => {
    
                    },
                    reason => { //只要有一个失败，return的promise状态就为reject
                        reject(reason)
                    }
                )
            })
        })
    }
```
2. 遍历所有的promise的状态都为resolved,则返回的promise状态为resolved，并且还要每个promise产生的值传递下去

```js
   Promise.all = function(promises){
      const values = new Array(promises.length)
      var resolvedCount = 0 //计状态为resolved的promise的数量
      return new Promise((resolve,reject)=>{
          // 遍历promises，获取每个promise的结果
          promises.forEach((p,index)=>{
              p.then(
                  value => {
                      // p状态为resolved，将值保存起来
                      values[index] = value
                      resolvedCount++;
                      // 如果全部p都为resolved状态，return的promise状态为resolved
                      if(resolvedCount === promises.length){
                          resolve(values)
                      }
                  },
                  reason => { //只要有一个失败，return的promise状态就为reject
                      reject(reason)
                  }
              )
          })
      })
  }
```

好像可以了，当其实这里还有一个问题，就是all传进去的数组不一定都是promise对象，可能是这样的
```
all([p,2,3,p])
```
因此需要把不是promise的数字包装成promise

```js
    Promise.all = function(promises){
        const values = new Array(promises.length)
        var resolvedCount = 0 //计状态为resolved的promise的数量
        return new Promise((resolve,reject)=>{
            // 遍历promises，获取每个promise的结果
            promises.forEach((p,index)=>{
                Promise.resolve(p).then(
                    value => {
                        // p状态为resolved，将值保存起来
                        values[index] = value
                        resolvedCount++;
                        // 如果全部p都为resolved状态，return的promise状态为resolved
                        if(resolvedCount === promises.length){
                            resolve(values)
                        }
                    },
                    reason => { //只要有一个失败，return的promise状态就为reject
                        reject(reason)
                    }
                )
            })
        })
    }
```


## 7.实现Promise.race
这个方法的实现要比all简单很多

```js
  /*
    Promise函数对象的race方法
    返回一个promise对象，状态由第一个完成的promise决定
    */
    Promise.race = function(promises){
        return new Promise((resolve,reject)=>{
            // 遍历promises，获取每个promise的结果
            promises.forEach((p,index)=>{
                Promise.resolve(p).then(
                    value => {
                        // 只要有一个成功，返回的promise的状态九尾resolved
                        resolve(value)

                    },
                    reason => { //只要有一个失败，return的promise状态就为reject
                        reject(reason)
                    }
                )
            })
        })
    }

```


去做一下题，看看是不是真的掌握了呢？
[【建议星星】要就来45道Promise面试题一次爽到底(1.1w字用心整理)](https://mp.weixin.qq.com/s?__biz=MzU5NDM5MDg1Mw==&mid=2247484225&idx=1&sn=b1d26191a41b9a3961f6798d1218fd79&chksm=fe00b96bc977307d2eab27dbd25bf6d27194d7fcdd9d9515822639b0206ad6ca1f946a0de7a9&token=1408690735&lang=zh_CN#rd)

之前可能会出现有些题不会做，而当你阅读完这篇文章后，再去做，发现易如反掌。
