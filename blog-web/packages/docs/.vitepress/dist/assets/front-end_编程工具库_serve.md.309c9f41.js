import{_ as s,c as a,o as n,a as e}from"./app.3f566b2e.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/编程工具库/serve.md"}'),p={name:"front-end/编程工具库/serve.md"},l=e(`<blockquote><p>用来开启静态资源服务器</p></blockquote><p>安装</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">	npm i serve -g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">	// 启动服务器，把当前目录下的所有资源作为静态资源暴露出去, -s代表如果没有找到资源将默认取目录下的index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">	serve -s        </span></span>
<span class="line"><span style="color:#A6ACCD;">	// 启动服务器，把指定目录下的build目录上的所有资源暴露出去</span></span>
<span class="line"><span style="color:#A6ACCD;">	serve -s build</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 指定端口</span></span>
<span class="line"><span style="color:#A6ACCD;">	serve -p 8888</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 更多功能</span></span>
<span class="line"><span style="color:#A6ACCD;">	serve --help</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221107164755963.png" alt="image-20221107164755963"></p>`,6),t=[l];function o(c,i,r,C,d,_){return n(),a("div",null,t)}const m=s(p,[["render",o]]);export{g as __pageData,m as default};
