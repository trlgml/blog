### ssh-keygen -t [rsa|dsa]

> cat id_dsa.pub >> ~/.ssh/authorized_keys

> scp id_rsa.pub user@ip:~/.ssh/authorized_keys

> ssh-add ~/.ssh/id_dsa

> ssh-agent

### 常用参数
```
-t: 密钥类型, 可以选择 dsa | ecdsa | ed25519 | rsa;

-f: 密钥目录位置, 默认为当前用户home路径下的.ssh隐藏目录, 也就是~/.ssh/, 同时默认密钥文件名以id_rsa开头. 如果是root用户, 则在/root/.ssh/id_rsa, 若为其他用户, 则在/home/username/.ssh/id_rsa;

-C: 指定此密钥的备注信息, 需要配置多个免密登录时, 建议携带;

-N: 指定此密钥对的密码, 如果指定此参数, 则命令执行过程中就不会出现交互确认密码的信息了.
```

### 使用ssh-keygen命令生成ssh 密钥

`ssh-keygen -t rsa -f id_rsa -C "我的SSH密钥" `


### A的公钥发送给B

- ssh-copy-id
```
(A)
ssh-copy-id -i ~/.ssh/id_rsa.pub -p 22 root@172.16.22.132
```
```
(A)
可进行免密登录
ssh root@172.16.22.132
```
- scp
```
(A)
scp id_rsa.pub root@172.16.22.132:/root/.ssh 
```
```
(B)
进入目标服务器
cat id_rsa.pub >> authorized_keys
```
```
(A)
可进行免密登录
ssh root@172.16.22.132
```

注：172.16.22.132为目标服务器（B）ip
### 清除记录信息 
ssh-keygen -R 118.89.238.139

### 权限报错
```
chmod 600 /root/.ssh/id_rsa
```