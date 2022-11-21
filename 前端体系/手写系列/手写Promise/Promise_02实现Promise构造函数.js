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
            if(self.status !== 'pending'){
                return
            }
            // 将状态改为resolved
            self.status = 'resolved'
            // 保存value的值
            self.data = value

            // 如果有待执行的callback函数，立即异步执行回调函数onResolved
            if (self.callbacks.length>0){
                setTimeout(()=>{
                    self.callbacks.forEach(callbackObj=>{
                        callbackObj.onResolved(value)
                    })
                })
            }
        }
        function reject(value) {
            // 如果当前状态不是pending，则不执行
            if(self.status !== 'pending'){
                return
            }
            // 将状态改为resolved
            self.status = 'rejected'
            // 保存value的值
            self.data = value

            // 如果有待执行的callback函数，立即异步执行回调函数onResolved
            if (self.callbacks.length>0){
                setTimeout(()=>{
                    self.callbacks.forEach(callbackObj=>{
                        callbackObj.onRejected(value)
                    })
                })
            }
        }

        try{
            // 立即同步执行executor
            executor(resolve,reject)
        }catch (e) { // 如果执行器抛出异常，promise对象变为rejected状态
            reject(e)
        }

    }

    /*
    Promise原型对象的then
    指定一个成功/失败的回调函数
    返回一个新的promise对象
     */
    Promise.prototype.then = function(onResolved,onRejected){
        // 假设当前状态还是pending状态，将回调函数保存起来
        var self = this
        self.callbacks.push({
            onResolved,
            onRejected
        })
    }

    /*
    Promise原型对象的.catch
    指定一个失败的回调函数
    返回一个新的promise对象
     */
    Promise.prototype.catch = function(onRejected){

    }

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
    Promise.all = function(value){

    }

    /*
    Promise函数对象的race方法
    返回一个promise对象，状态由第一个完成的promise决定
    */
    Promise.race = function(value){

    }

    // 向外暴露Promise
    window.Promise = Promise
})(window)
