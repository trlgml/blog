## 原理
> 通过在网站中的输入框写入 script 脚本或引入 script 文件，如果网站未过滤输入内容，将会解析该脚本。

> 如果脚本的功能是获取网站的 cookie，cookie 中又保留一些敏感信息，则后果有可能很严重。
## 类型
- 反射型攻击：脚本当作 url 的参数进行注入执行
- 存储型攻击：脚本被存储到 DB 后，读取时被解析执行
## 注入点
4.1 HTML 节点

```
<div>${content}</div>
content 的内容为 <script>alert(1)</script>，脚本攻击后，会变成：
<div><script>alert(1)</script></div>
页面将会执行 alert(1)。
```
4.2 HTML 属性

```
<img src="${imgSrc}" />
imgSrc 的内容为 2” onerror=”alert(2)，脚本攻击后，会变成：
<img src="2" onerror="alert(2)" />
页面将会执行 alert(2)。
```
4.3 Javascript 代码

```
<script>
    var mydata = "${data}";
</script>
data 的内容为 hello”;alert(3);”，脚本攻击后，会变成：
<script>
    var mydata = "hello";alert(3);"";
</script>
页面将会执行 alert(3)。
```
4.4 富文本
```
富文本需要保留 HTML 文本，HTML 文本中就有 XSS 攻击的风险。
```
## 防御
浏览器自带一些防御能力，但只能防御 XSS 反射类型攻击，且只能防御上文描述的前二个注入点。

防御手段原理也很简单，就是将可能会执行脚本的标签或属性进行转义和过滤。

5.1 HTML 节点的防御

将 < 和 > 转义成 &lt； 和 &gt；。

5.2 HTML 属性的防御

将 “ 转义成 &quto；。

5.3 Javascript 代码的防御

将 “ 转义成 \“ 。

5.3 富文本的防御

使用白名单保留部分标签和属性。