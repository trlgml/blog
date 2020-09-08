```
type：调试器类型。这里是 node(内置的调试器)，如果装了 Go 和 PHP 的扩展后对应的 type 分别为 go 和 php
request：请求的类型，目前只支持 launch 和 attach。launch 就是以 debug 模式启动调试，attach 就是附加到已经启动的进程开启 debug 模式并调试，跟上一篇提到的用 node -e "process._debugProcess(PID)" 作用一样
name：下拉菜单显示的名字。
program：可执行文件或者调试器要运行的文件 (launch)
args：要传递给调试程序的参数 (launch)
env：环境变量 (launch)
cwd：当前执行目录 (launch)
address：ip 地址 (launch & attach)
port：端口号 (launch & attach)
skipFiles：想要忽略的文件，数组类型 (launch & attach)
processId：进程 PID (attach)
```
```
${workspaceRoot}：当前打开工程的路径
${file}：当前打开文件的路径
${fileBasename}：当前打开文件的名字，包含后缀名
${fileDirname}：当前打开文件所在的文件夹的路径
${fileExtname}：当前打开文件的后缀名
${cwd}：当前执行目录
```
```
{
  "type": "node",
  "request": "launch",
  "name": "启动程序",
  "skipFiles": [
    "<node_internals>/**"
  ],
  "program": "${workspaceFolder}/example/index.js"
}
```
- type，代表着调试器的类型。它决定了 VS Code 会使用哪个调试插件来调试代码。

- request，代表着该如何启动调试器。如果我们的代码已经运行起来了，则可以将它的值设为 attach，那么我们则是使用调试器来调试这个已有的代码进程；而如果它的值是 launch，则意味着我们会使用调试器直接启动代码并且调试。

-  name，就是这个配置的名字了。

- program，就是告诉 Node.js 调试器，我们想要调试哪个文件。这个值支持预定义参数，比如在上面的例子里，我们使用了${file}，也就是当前编辑器里打开的文件。

```
{
  "name": "调试 Node.js 程序 - args",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "node",
  "args": [
    "${workspaceFolder}/src/index.js"
  ]
}
```
- runtimeExecutable，使用什么命令启动
- args，启动时的参数
```
{
  "name": "调试 TS Node 程序 - args",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "node",
  "runtimeArgs": [
    "-r",
    "ts-node/register"
  ],
  "args": [
    "${workspaceFolder}/src/index.ts"
  ]
}
```
> 在这里你看到了一个新参数 runtimeArgs，需要注意的是 runtimeArgs 是为 runtimeExecutable 环境提供的配置，而 args 是为程序提供的配置。这个 JSON 的意思是：通过 node 来启动 /src/index.ts，在启动时为 node 注入一个 ts-node/register 模块，以便可以执行 ts 类型的文件。实际执行代码为：`node --inspect-brk=DEBUG_PORT -r ts-node/register ./src/index.ts
`
```
{
  "name": "调试 TS Node 程序 - preTask",
  "type": "node",
  "request": "launch",
  "program": "${workspaceFolder}/out/index.js",
  "preLaunchTask": "tsc_build"
}
```
> 这里多了一个新的配置参数 preLaunchTask，顾名思义，在 launch 调试之前先执行一个任务，这里就涉及到 .vscode/tasks.json 文件的配置了，我们在 tasks.json 中配置一个 label 为 tsc_build 的任务
```
{
  "label": "tsc_build",
  "type": "typescript",
  "tsconfig": "tsconfig.json"
}
```
> 在启动调试之前，会启动一个 typescript 的编译操作，将文件编译到 out 目录下（具体可查看 tsconfig.json 的编译配置），然后通过 node 来启动编译后的文件

```
{
  "name": "Attach to node",
  "type": "node",
  "request": "attach",
  "processId": "${command:PickProcess}"
}
```
> ${command:PickProcess} 作为 processId 的值，因为 VSCode 会遍历所有的 Node PID 列出来让你选择
```
{
  "name": "调试网页的 JS 文件",
  "request": "launch",
  "type": "chrome",
  "file": "${workspaceFolder}/index.html"
}
```
> 注意，这里的 type 是 chrome，默认会启动一个 Chrome 浏览器（新用户）加载 file 字段对应的文件地址（通过 file:// 协议加载），文件中用到的 JS 都可以断点调试。当然你也可以起一个 Web Server 来调试 http:// 协议的文件，这里就需要设置 webRoot 和 url 参数了


```
{
  "name": "Launch via NPM",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "npm",
  "runtimeArgs": [
    "run-script", "dev"    //这里的dev就对应package.json中的scripts中的dev
  ],
    "port": 9229    //这个端口是调试的端口，不是项目启动的端口
}
```
```
{
  "type": "node",
  "request": "launch",
  "name": "nodemon",
  "runtimeExecutable": "nodemon",
  "args": ["${workspaceRoot}/bin/www"],
  "restart": true,
  "protocol": "inspector",    //相当于--inspect了
  "sourceMaps": true,
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen",
  "runtimeArgs": [    //对应nodemon --inspect之后除了启动文件之外的其他配置
    "--exec",
    "babel-node",
    "--presets",
    "env"
  ]
}
```
```
{
    "type": "node",
    "request": "launch",
    "name": "debug-app",
    "runtimeExecutable": "nodemon",  要使用的运行时。一个绝对路径或路径上可用的运行时名称。如果省略，则假定为“节点”。
    "program": "${workspaceRoot}/app.js",
    "restart": true,
    "console": "integratedTerminal",
    "skipFiles": [
        "${workspaceRoot}/node_modules/**/*.js",
        "<node_internals>/**/*.js"
    ]
}
```
```
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "nodemon",
      "runtimeExecutable": "nodemon",
      "program": "${workspaceRoot}/dwnews-site/bin/www",
      "restart": true,
      "protocol": "inspector",
      "sourceMaps": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "cwd": "${workspaceRoot}/dwnews-site/",
      "skipFiles": [
        "${workspaceRoot}/dwnews-site/node_modules/**/*.js",
        "<node_internals>/**/*.js"
      ]
    }
  ]
}
```