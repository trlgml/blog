## launch模式
> 从vs启动程序
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "node",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/index.js"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "yarn",
      "runtimeExecutable": "yarn",
      "restart": true,
      "protocol": "inspector",
      "sourceMaps": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "cwd": "${workspaceRoot}/",
      "skipFiles": [
        "${workspaceRoot}/node_modules/**/*.js",
        "<node_internals>/**/*.js"
      ],
      "runtimeArgs": [
        "run-script",
        "watch"
      ],
    }
  ]
}
```
## attach模式
> 从别的地方启动程序，vs链接到程序中
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Port",
      "port": 3000,
      "restart": true
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to ProcessId",
      "processId": "${command:PickProcess}",
      "restart": true
    }
  ]
}
```