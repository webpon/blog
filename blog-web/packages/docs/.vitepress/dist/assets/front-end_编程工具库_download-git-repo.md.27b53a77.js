import{_ as a,c as n,o as s,a as e}from"./app.cf50a950.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/编程工具库/download-git-repo.md"}'),o={name:"front-end/编程工具库/download-git-repo.md"},p=e(`<ul><li><a href="#%E7%AE%80%E4%BB%8B">简介</a></li><li><a href="#%E5%AE%89%E8%A3%85">安装</a></li><li><a href="#%E4%BD%BF%E7%94%A8">使用</a></li></ul><h5 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h5><blockquote><p>从节点下载并提取git存储库（GitHub、GitLab、Bitbucket），Vue-cli的模板下载也是利用了这个库</p><p>npm地址：<a href="https://www.npmjs.com/package/download-git-repo" target="_blank" rel="noreferrer">https://www.npmjs.com/package/download-git-repo</a></p></blockquote><h5 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">	npm install download-git-repo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h5><p><strong>API</strong></p><p><em>download(repository, destination, options, callback)</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const download = require(&#39;download-git-repo&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 1、下载地址；2、下载存放目录；3、options配置，可选，下面将介绍；4、回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">       download(&#39;github:webpon/mall&#39;, &#39;./dir&#39;, async function (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         if(err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           console.log(&#39;下载失败&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">           console.log(&#39;下载成功&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>下载一个 git repository 到 destination 文件夹，配置参数 options, 和 callback回调.</p><p><em>repository</em></p><p><strong>一、可以采用下面简写方式</strong></p><p>GitHub - github:owner/name 或者 owner/name GitLab - gitlab:owner/name Bitbucket - bitbucket:owner/name</p><p>1、默认是 master 分支, 但你可以指定分枝和tag ，如 owner/name#my-branch.</p><p>2、你还可以指定自定义来源，如 gitlab:custom.com:owner/name. 自定义来源默认为 https 或 git@ , 你也可以自己之定义协议.</p><p><strong>二、Direct - direct:url方式</strong></p><p>这种方式会跳过上面简写的方式，直接传递 url.</p><p>1、如果使用 direct，并且没有 clone配置项, 你必须传入完整的zip文件地址, 包括分枝（如果需要的话）.</p><p>2、如果使用 direct 并带有 clone配置项, 你必须传入完整的 git repo url , 你可以通过 direct:url#my-branch指定分枝.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const download = require(&#39;download-git-repo&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	  // 使用这个方式需要加上options, {clone: true}</span></span>
<span class="line"><span style="color:#A6ACCD;">       download(&#39;direct:https://github.com/webpon/mall.git&#39;, &#39;./dir&#39;, { clone: true }, async function (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         if (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">           console.log(&#39;下载失败&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">           console.log(&#39;下载成功&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><em>destination</em></p><p>下载仓库的文件路径</p><p><em>options</em>（可选）配置对象:</p><p>clone - boolean 默认 false - 如果设置成 true，会使用 git clone http 下载. 这种方式可能会比较慢, 他不支持私人的 repositories. 其他配置项 (proxy, headers, filter, 等.) 会传递下去，并覆盖默认值 http下载特有配置项: <a href="https://github.com/kevva/download#options" target="_blank" rel="noreferrer">https://github.com/kevva/download#options</a> clone 特有配置项: <a href="https://github.com/jaz303/git-clone#clonerepo-targetpath-options-cb" target="_blank" rel="noreferrer">https://github.com/jaz303/git-clone#clonerepo-targetpath-options-cb</a><em>callback</em></p><p>回调函数，会传入err. 更多使用方式请访问：<a href="https://www.npmjs.com/package/download-git-repo" target="_blank" rel="noreferrer">https://www.npmjs.com/package/download-git-repo</a></p>`,25),t=[p];function l(r,c,i,d,g,h){return s(),n("div",null,t)}const m=a(o,[["render",l]]);export{C as __pageData,m as default};
