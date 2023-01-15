> 用来开启静态资源服务器

安装

```
	npm i serve -g
```

使用：

```
	// 启动服务器，把当前目录下的所有资源作为静态资源暴露出去, -s代表如果没有找到资源将默认取目录下的index.html
	serve -s        
	// 启动服务器，把指定目录下的build目录上的所有资源暴露出去
	serve -s build
	// 指定端口
	serve -p 8888
	// 更多功能
	serve --help
```

![image-20221107164755963](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221107164755963.png)