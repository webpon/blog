> fs-extra是fs的一个扩展，提供了非常多的便利API，并且继承了fs所有方法和为fs方法添加了promise的支持。
>
> 它应该是 fs 的替代品。

##### 安装

```undefined
npm install fs-extra -S
```

##### 用法

应该总是fs-extra代替fs使用，所有fs方法都附在fs-extra，fs如果未传递回调，则所有方法都将返回promise
 不再需要这个

```jsx
const fs = require('fs');
```

你现在可以这样做

```jsx
const fs = require('fs-extra');
```

如果你希望明确表示你在使用fs-extra，可以将fs标识符改为fse

```jsx
const fse = require('fs-extra')
```

你可以保留两者使用，但它是多余的，因为 fs-extra 继承了fs

```jsx
const fs = require('fs');
const fse = require('fs-extra')
```

Sync vs Async vs Async/Await

大多数方法默认为异步，如果未传递回调，则所有异步方法将返回一个promise。
 一个典型的例子：

```tsx
const fs = require('fs-extra')
 
// 异步方法，返回promise
fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))
 
// 异步方法，回调函数
fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
  if (err) return console.error(err)
  console.log('success!')
})
 
// 同步方法，注意必须使用try catch包裹着才能捕获错误
try {
  fs.copySync('/tmp/myfile', '/tmp/mynewfile')
  console.log('success!')
} catch (err) {
  console.error(err)
}
 
// Async/Await:
async function copyFiles () {
  try {
    await fs.copy('/tmp/myfile', '/tmp/mynewfile')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}
 
copyFiles()
```

##### API Methods

下面的所有方法都是fs-extra扩展方法

###### async

- [copy](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2Fcopy.md)
- [emptyDir](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FemptyDir.md)
- [ensureFile](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureFile.md)
- [ensureDir](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureDir.md)
- [ensureLink](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureLink.md)
- [ensureSymlink](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureSymlink.md)
- [mkdirp](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureDir.md)
- [mkdirs](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureDir.md)
- [move](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2Fmove.md)
- [outputFile](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FoutputFile.md)
- [outputJson](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FoutputJson.md)
- [pathExists](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FpathExists.md)
- [readJson](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FreadJson.md)
- [remove](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2Fremove.md)
- [writeJson](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FwriteJson.md)

###### sync

- [copySync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2Fcopy-sync.md)
- [emptyDirSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FemptyDir-sync.md)
- [ensureFileSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureFile-sync.md)
- [ensureDirSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureDir-sync.md)
- [ensureLinkSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureLink-sync.md)
- [ensureSymlinkSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureSymlink-sync.md)
- [mkdirpSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureDir-sync.md)
- [mkdirsSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FensureDir-sync.md)
- [moveSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2Fmove-sync.md)
- [outputFileSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FoutputFile-sync.md)
- [outputJsonSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FoutputJson-sync.md)
- [pathExistsSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FpathExists-sync.md)
- [readJsonSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FreadJson-sync.md)
- [removeSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2Fremove-sync.md)
- [writeJsonSync](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fjprichardson%2Fnode-fs-extra%2Fblob%2FHEAD%2Fdocs%2FwriteJson-sync.md)

### 组件（插件）