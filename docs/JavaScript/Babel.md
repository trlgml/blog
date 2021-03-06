> Babel 只是转译新标准引入的语法,新标准引入的全局变量、部分原生对象新增的原型链上的方法,Babel 是不会转译的，需要引入 polyfill 来解决

- 解析（Parsing）：将代码字符串解析成抽象语法树。
- 转换（Transformation）：对抽象语法树进行转换操作。
- 生成（Code Generation）: 根据变换后的抽象语法树再生成代码字符串。


## Plugins&Presets

- Plugin 会运行在 Preset 之前。
- Plugin 会从第一个开始顺序执行。
- Preset 的顺序则刚好相反(从最后一个逆序执行)。
```
{
  "presets": [
    [
      "env",
      {
        "targets": { // 配支持的环境
          "browsers": [ // 浏览器
            "last 2 versions",
            "safari >= 7"
          ],
          "node": "current"
        },
        "modules": true,  //设置ES6 模块转译的模块格式 默认是 commonjs
        "debug": true, // debug，编译的时候 console
        "useBuiltIns": false, // 是否开启自动支持 polyfill
        "include": [], // 总是启用哪些 plugins
        "exclude": []  // 强制不启用哪些 plugins，用来防止某些插件被启用
      }
    ]
  ]
}
```


- `babel-core`Babel 的编译器，核心 API 都在这里面，比如常见的 transform、parse。
- `babel-cli`提供命令行运行 babel
- `babel-runtime`引用了 core-js(core-js 是用于 JavaScript 的组合式标准化库，它包含 es5 （e.g: object.freeze）, es6的 promise，symbols, collections, iterators, typed arrays， es7+提案等等的 polyfills 实现.) 和 regenerator(它是来自于 facebook 的一个库。主要就是实现了 generator/yeild， async/await。)
- `babel-polyfill`同样是引用了 core-js 和 regenerator，垫片支持是一样的。不同于 babel-runtime 的是，babel-polyfill 是一次性引入你的项目中的。
- `babel-plugin-transform-runtime`transform-runtime 是为了方便使用 babel-runtime 的，它会分析我们的 ast 中，是否有引用 babel-rumtime 中的垫片（通过映射关系），如果有，就会在当前模块顶部插入我们需要的垫片。
- 



## 备注
- babel-polyfill 是当前环境注入这些 es6+ 标准的垫片，好处是引用一次，不再担心兼容，而且它就是全局下的包，代码的任何地方都可以使用。缺点也很明显，它可能会污染原生的一些方法而把原生的方法重写。如果当前项目已经有一个 polyfill 的包了，那你只能保留其一。而且一次性引入这么一个包，会大大增加体积。如果你只是用几个特性，就没必要了，如果你是开发较大的应用，而且会频繁使用新特性并考虑兼容，那就直接引入吧。
- transform-runtime 是利用 plugin 自动识别并替换代码中的新特性，你不需要再引入，只需要装好 babel-runtime 和 配好 plugin 就可以了。好处是按需替换，检测到你需要哪个，就引入哪个 polyfill，如果只用了一部分，打包完的文件体积对比 babel-polyfill 会小很多。而且 transform-runtime 不会污染原生的对象，方法，也不会对其他 polyfill 产生影响。所以 transform-runtime 的方式更适合开发工具包，库，一方面是体积够小，另一方面是用户（开发者）不会因为引用了我们的工具，包而污染了全局的原生方法，产生副作用，还是应该留给用户自己去选择。缺点是随着应用的增大，相同的 polyfill 每个模块都要做重复的工作（检测，替换），虽然 polyfill 只是引用，编译效率不够高效。


```
{
  "presets": [
    [
      "@babel/preset-env",
      // {
      //   // "modules": false
      //   "useBuiltIns": "usage",
      //   "corejs": 3
      // }
    ]
  ],
  "comments": false,
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ],
  "minified": true
  // "ignore": [
  //   "./src/a.js"
  // ]
}
```