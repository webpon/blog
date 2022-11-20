## 一、核心原理

### 1.什么是前端路由？

在 Web 前端单页应用 SPA(Single Page Application)中，路由描述的是 URL 与 UI 之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）。

### 2.如何实现前端路由？

要实现前端路由，需要解决两个核心：

1. 如何改变 URL 却不引起页面刷新？
2. 如何检测 URL 变化了？

下面分别使用 hash 和 history 两种实现方式回答上面的两个核心问题。

##### hash 实现

hash 是 URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，**改变 URL 中的 hash 部分不会引起页面刷新**

通过 hashchange 事件监听 URL 的变化，改变 URL 的方式只有这几种：

1. 通过浏览器前进后退改变 URL
2. 通过`<a>`标签改变 URL
3. 通过window.location改变URL

##### history 实现

history 提供了 pushState 和 replaceState 两个方法，**这两个方法改变 URL 的 path 部分不会引起页面刷新**

history 提供类似 hashchange 事件的 popstate 事件，但 popstate 事件有些不同：

1. 通过浏览器前进后退改变 URL 时会触发 popstate 事件
2. 通过pushState/replaceState或`<a>`标签改变 URL 不会触发 popstate 事件。
3. 好在我们可以拦截 pushState/replaceState的调用和`<a>`标签的点击事件来检测 URL 变化
4. 通过js 调用history的back，go，forward方法课触发该事件

所以监听 URL 变化可以实现，只是没有 hashchange 那么方便。

> 需要了解更多实现原理请点下面
>
> 1. [vue-router实现原理及两种模式分析](https://juejin.cn/post/6844904062698127367#heading-3)
>
> 该库实现还是比较简陋的，需要了解更多请访问：[vue-router源码分析-整体流程](https://github.com/DDFE/DDFE-blog/issues/9)

## 二、使用

![image-20221121002049704](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221121002049704.png)

![image-20221121002112342](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221121002112342.png)
