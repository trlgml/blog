### Data Url
>data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7

### 格式

1. 第一部分是 data: 协议头，它标识这个内容为一个 data URI 资源。
2. 第二部分是 MIME 类型，表示这串内容的展现方式，比如：text/plain，则以文本类型展示，image/jpeg，以 jpeg 图片形式展示，同样，客户端也会以这个 MIME 类型来解析数据。
3.第三部分是编码设置，默认编码是 charset=US-ASCII, 即数据部分的每个字符都会自动编码为 %xx，关于编码的测试，可以在浏览器地址框输入分别输入下面两串内容，查看效果：
```
// output: ä½ å¥½ -> 使用默认的编码展示，故乱码
data:text/html,你好  
// output: 你好 -> 使用 UTF-8 展示
data:text/html;charset=UTF-8,你好 
// output: 浣犲ソ -> 使用 gbk 展示（浏览器默认编码 UTF-8，故乱码）
data:text/html;charset=gbk,你好 
// output: 你好 -> UTF-8 编码，内容先使用 base64 解码，然后展示
data:text/html;charset=UTF-8;base64,5L2g5aW9
```
4. 第四部分是 base64 编码设定，这是一个可选项，base64 编码中仅包含 0-9,a-z,A-Z,+,/,=，其中 = 是用来编码补白的。
最后一部分为这个 Data URI 承载的内容，它可以是纯文本编写的内容，也可以是经过 base64编码 的内容。

>很多时候我们使用 data URI 来呈现一些较长的内容，如一串二进制数据编码、图片等，采用 base64 编码可以让内容变得更加简短。而对图片来说，在 gzip 压缩之后，base64 图片实际上比原图 gzip 压缩要大，体积增加大约为三分之一，所以使用的时候需要权衡。