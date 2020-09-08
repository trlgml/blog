
- 参数
```
1. name - cookie的名字（原属性名为 key）。（默认：’connect.sid’）
2. store - session存储实例
3. secret - 用它来对session cookie签名，防止篡改
4. cookie - session cookie设置 （默认：{ path: ‘/‘, httpOnly: true,secure: false, maxAge: null }）
5. genid - 生成新session ID的函数 （默认使用uid2库）
6. rolling - 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
7. resave - 强制保存session即使它并没有变化 （默认： true）
8. proxy - 当设置了secure cookies（通过”x-forwarded-proto” header ）时信任反向代理。当设定为true时，
”x-forwarded-proto” header 将被使用。当设定为false时，所有headers将被忽略。当该属性没有被设定时，将使用Express的trust proxy。
9. saveUninitialized - 强制将未初始化的session存储。当新建了一个session且未设定属性或值时，它就处于
未初始化状态。在设定一个cookie前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的。（默认：true）
10. unset - 控制req.session是否取消（例如通过 delete，或者将它的值设置为null）。这可以使session保持存储
状态但忽略修改或删除的请求（默认：keep）
```
- 方法
```
1. Session.destroy():删除session，当检测到客户端关闭时调用。
2. Session.reload():当session有修改时，刷新session。
3. Session.regenerate()：将已有session初始化。
4. Session.save()：保存session。

```
