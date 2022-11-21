/*
自定义Promise函数模块：IIFE
 */

(function (window) {
    /*
    Promise构造函数
    executor:执行器函数
     */
    function Promise(executor) {
        var self = this

        self.status = 'pending' // 给promise对象指定status属性，初始值为pending
        self.data = undefined // 给promise对象指定一个存储结果的data
        self.callbacks = []  // 每个元素的结构：{onResolved(){}，onRejected(){}}

        function resolve(value) {
            // 如果当前状态不是pending，则不执行
            if (self.status !== 'pending') {
                return
            }
            // 将状态改为resolved
            self.status = 'resolved'
            // 保存value的值
            self.data = value

            // 如果有待执行的callback函数，立即异步执行回调函数onResolved
            if (self.callbacks.length > 0) {
                setTimeout(() => {
                    self.callbacks.forEach(callbackObj => {
                        callbackObj.onResolved(value)
                    })
                })
            }
        }
        function reject(value) {
            // 如果当前状态不是pending，则不执行
            if (self.status !== 'pending') {
                return
            }
            // 将状态改为resolved
            self.status = 'rejected'
            // 保存value的值
            self.data = value

            // 如果有待执行的callback函数，立即异步执行回调函数onResolved
            if (self.callbacks.length > 0) {
                setTimeout(() => {
                    self.callbacks.forEach(callbackObj => {
                        callbackObj.onRejected(value)
                    })
                })
            }
        }

        try {
            // 立即同步执行executor
            executor(resolve, reject)
        } catch (e) { // 如果执行器抛出异常，promise对象变为rejected状态
            reject(e)
        }

    }

    /*
    Promise原型对象的then
    指定一个成功/失败的回调函数
    返回一个新的promise对象
     */
    Promise.prototype.then = function (onResolved, onRejected) {
        onResolved = typeof onResolved === 'function' ? onResolved : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        var self = this

        return new Promise((resolve, reject) => {

            /*
            调用指定回调函数的处理，根据执行结果。改变return的promise状态
             */
            function handle(callback) {
                try {
                    const result = callback(self.data)

                    if (result instanceof Promise) {
                        // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
                        result.then(
                            value => { resolve(value) },
                            reason => { reject(reason) }
                        )
                    } else {
                        // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
                        resolve(result)
                    }
                } catch (e) {
                    //  3.如果执行onResolved的时候抛出错误，则返回的promise的状态为rejected
                    reject(e)
                }
            }
            if (self.status === 'pending') {
                // promise当前状态还是pending状态，将回调函数保存起来
                self.callbacks.push({
                    onResolved() {
                        handle(onResolved)
                    },
                    onRejected() {
                        handle(onRejected)
                    }
                })
            } else if (self.status === 'resolved') {
                setTimeout(() => {
                    handle(onResolved)
                })
            } else { // 当status === 'rejected'
                setTimeout(() => {
                    handle(onRejected)
                })
            }
        })

    }

    /*
    Promise原型对象的.catch
    指定一个失败的回调函数
    返回一个新的promise对象
     */
    Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected)
    }

    /*
    Promise函数对象的resovle方法
    返回一个指定结果的promise对象
     */
    Promise.resolve = function (value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                // 如果value 是promise
                value.then(
                    value => { resolve(value) },
                    reason => { reject(reason) }
                )
            } else {
                // 如果value不是promise
                resolve(value)
            }

        })
    }

    /*
    Promise函数对象的reject方法
    返回一个指定reason的失败状态的promise对象
    */
    Promise.reject = function (reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    /*
    Promise函数对象的all方法
    返回一个promise对象，只有当所有promise都成功时返回的promise状态才成功
    */
    Promise.all = function (promises) {
        const values = new Array(promises.length)
        var resolvedCount = 0 //计状态为resolved的promise的数量
        return new Promise((resolve, reject) => {
            // 遍历promises，获取每个promise的结果
            promises.forEach((p, index) => {
                p.then(
                    value => {
                        // p状态为resolved，将值保存起来
                        values[index] = value
                        resolvedCount++;
                        // 如果全部p都为resolved状态，return的promise状态为resolved
                        if (resolvedCount === promises.length) {
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
    /*
    该 Promise.allSettled() 方法返回一个在所有给定的 promise 都已经fulfilled或rejected后的promise，
    并带有一个对象数组，每个对象表示对应的 promise 结果。
    */
    Promise.allSettled = function (promises) {
        const values = new Array(promises.length)
        var resolvedCount = 0 //计状态为resolved的promise的数量
        return new Promise((resolve, reject) => {
            // 遍历promises，获取每个promise的结果
            promises.forEach((p, index) => {
                p.then(
                    value => {
                        // p状态为resolved，将值保存起来
                        values[index] = {
                            status: 'fulfilled',
                            value
                        }
                        resolvedCount++;
                        if (resolvedCount === promises.length) {
                            resolve(values)
                        }
                    },
                    reason => {
                        values[index] = {
                            status: 'rejected',
                            reason
                        }
                        resolvedCount++;
                        if (resolvedCount === promises.length) {
                            resolve(values)
                        }
                    }

                )
            })
        })
    }
    /*
    Promise函数对象的race方法
    返回一个promise对象，状态由第一个完成的promise决定
    */
    Promise.race = function (value) {

    }

    // 向外暴露Promise
    window.Promise = Promise
})(global)

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
    then((results) => results.forEach((result) => console.log(result)));
