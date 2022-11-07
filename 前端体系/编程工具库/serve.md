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

<img src="%E4%B8%AA%E4%BA%BA%E7%B3%BB%E7%BB%9F.assets/image-20220618130944081.png" alt="image-20220618130944081" style="zoom:67%;" />