> 打开像 url，文件，可执行文件之类的东西。 https://www.npmjs.com/package/open

##### 安装

```
npm install open
```

##### 使用

调用open模块默认浏览器打开指定url

```
const open = reuqire("open");
open("http://localhost:8080");
```

指定浏览器打开指定的url

```
let open = reuqire("open");
open("指定的url", "chrome");      // 可选chrome、edge、firefox
```

使用：

```
3.使用setTimeout()函数还可以实现简单的定时提醒功能

let open = require("open");
function notify(){
    open("指定的url", "chrome");    
    setTimeout(notify, 10000);

}
notify();   
```

当然，该库也可以打开其他app, 也有其他功能，详情请访问：https://www.npmjs.com/package/open