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
    Promise函数对象的race方法
    返回一个promise对象，状态由第一个完成的promise决定
    */
    Promise.race = function (value) { }
    // 向外暴露Promise
    window.Promise = Promise
})()
