- 跨域请求一般不会带上cookie，为额能让跨域带上cookie，前端需要设置
```
xhr.withCredentials = true
```
- 后端需要设置
```
Access-Control-Allow-Credentials: true
```
