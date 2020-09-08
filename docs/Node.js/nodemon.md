[nodemon官网](https://www.npmjs.com/package/nodemon)
- 安装
```
npm install -g nodemon
```
- 启动
```
nodemon app.js
```
- debug启动
```
nodemon --debug app.js
```
- `nodemon.json`官网列子
```
{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/**/node_modules"
  ],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": [
    "test/fixtures/",
    "test/samples/"
  ],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json"
}
```
1. restartable:默认是rs，可以改成`指定字符串`。当用`nodemon`启动应用后可以直接键入`指定字符串或（rs）`重启服务。
2. ignore:忽略文件，路径相对于`nodemon.json`所在位置。
3. verbose:默认false，true 表示输出详细启动与重启信息。
4. execMap:运行文件的后缀名对应的运行命令，上述中`"js": "node --harmony"`表示`nodemon app.js`相当于`node  --harmony app.js`。
5. events:`nodemon`运行到某些状态时触发事件
    - start - 子进程（即监控的应用）启动
    - restart - 子进程重启
    - crash - 子进程崩溃，不会触发 exit
    - exit - 子进程完全退出，不是非正常的崩溃
    - config:update - nodemon 的 config 文件改变
6. watch:监控的文件或文件夹路径。
7. env:设置环境变量。
8. ext:制定监控文件的后缀名。

- 默认配置
```
// default options for config.options
module.exports = {
    restartable: 'rs',
    colours: true,
    execMap: {
        py: 'python',
        rb: 'ruby',
        // more can be added here such as ls: lsc - but please ensure it's cross
        // compatible with linux, mac and windows, or make the default.js
        // dynamically append the `.cmd` for node based utilities
    },
    ignoreRoot: ['.git', 'node_modules', 'bower_components', '.sass-cache'],
    watch: ['*.*'],
    stdin: true,
    runOnChangeOnly: false,
    verbose: false,
    // 'stdout' refers to the default behaviour of a required nodemon's child,
    // but also includes stderr. If this is false, data is still dispatched via
    // nodemon.on('stdout/stderr')
    stdout: true,
};
```
