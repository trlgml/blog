> PATH变量的作用是设定执行命令的搜索路径。例如ls这个命令当你输入后，内核会查看你PATH变量设置的路径，如果搜索到就会自动执行，如果搜索不到就会报错。

- 在PATH这个变量当中累加 `/home/root/sbin` 目录

```
PATH = $PATH:/home/root/sbin
export PATH

下面两种格式也可以
PATH = $"PATH":/home/root/sbin
PATH = ${PATH}:/home/root/sbin
```

- 查看系统当前所有环境变量


`env`


- 查看所有PATH

`
echo $PATH 
`