/*
自定义Promise函数模块：IIFE
 */

(function (window) {
    /*
    Promise构造函数
    executor:执行器函数
     */
    function Promise(executor) {
        // 立即同步执行executor
        executor(resovle, reject)
    }
    /*
    Promise原型对象的then
    指定一个成功/失败的回调函数
    返回一个新的promise对象
     */
    Promise.prototype.then = function (onResolved, onRejected) { }
    /*
    Promise原型对象的.catch
    指定一个失败的回调函数
    返回一个新的promise对象
     */
    Promise.prototype.catch = function (onRejected) { }
    /*
    Promise函数对象的resovle方法
    返回一个指定结果的promise对象
     */
    Promise.resolve = function (value) { }
    /*
    Promise函数对象的reject方法
    返回一个指定reason的失败状态的promise对象
    */
    Promise.reject = function (value) { }
    /*
    Promise函数对象的all方法
    返回一个promise对象，只有当所有promise都成功时返回的promise状态才成功
    */
    Promise.all = function (value) { }
    /* 
        该 Promise.allSettled() 方法返回一个在所有给定的 promise 都已经fulfilled或rejected后的 promise，
        并带有一个对象数组，每个对象表示对应的 promise 结果。
        当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。
        相比之下，Promise.all() 更适合彼此相互依赖或者在其中任何一个reject时立即结束。
    */
    Promise.allSettled = function (value) { }
    /*
    Promise函数对象的race方法
    返回一个promise对象，状态由第一个完成的promise决定
    */
    Promise.race = function (value) { }
    // 向外暴露Promise
    window.Promise = Promise
})()
