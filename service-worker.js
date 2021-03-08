/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0f7acdf259f8e50e77b37a068f241639"
  },
  {
    "url": "assets/css/0.styles.0001043b.css",
    "revision": "17a16e368587f7b73dd1c2324198661b"
  },
  {
    "url": "assets/img/1.a1cadbdc.jpg",
    "revision": "a1cadbdcc9a919642d52ac7230f06a91"
  },
  {
    "url": "assets/img/11.37053b5e.jpg",
    "revision": "37053b5e8d2db3111aa2ee0477ce46b2"
  },
  {
    "url": "assets/img/12.ab61c141.png",
    "revision": "ab61c1413fccfea8b9ce93bad4db7d84"
  },
  {
    "url": "assets/img/13.2f6a0fc6.jpg",
    "revision": "2f6a0fc67bf638d0ad2911c57eb56e4f"
  },
  {
    "url": "assets/img/14.b946013b.jpg",
    "revision": "b946013bc9a7d33dc68f39928516611d"
  },
  {
    "url": "assets/img/1598250450341.1ac026c2.jpg",
    "revision": "1ac026c2d8273011a5c0d2a8b59758d4"
  },
  {
    "url": "assets/img/2.7ff8554b.jpg",
    "revision": "7ff8554b402bd72b1662036bac0f7592"
  },
  {
    "url": "assets/img/3.1ed4628e.jpg",
    "revision": "1ed4628ea97c23824624a99925768456"
  },
  {
    "url": "assets/img/4.5c16b183.jpg",
    "revision": "5c16b183877af3b2e17e4bee73888227"
  },
  {
    "url": "assets/img/5.4dd1245a.jpg",
    "revision": "4dd1245a89d239e50dfca0834aba6c01"
  },
  {
    "url": "assets/img/6.ea1427cf.jpg",
    "revision": "ea1427cf76c0bb1c4f41d3fc49572e23"
  },
  {
    "url": "assets/img/7.bd410c07.jpg",
    "revision": "bd410c07afc13bfd9de2ae49b4abc28e"
  },
  {
    "url": "assets/img/8.ede87bab.jpg",
    "revision": "ede87bab8d5d3ffbf73788265ef07559"
  },
  {
    "url": "assets/img/9.d573837e.jpg",
    "revision": "d573837eca88e8f2f6659b7e5c67ce74"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.97c5590d.js",
    "revision": "4317e06b230f8aade15665be30a3d175"
  },
  {
    "url": "assets/js/11.f57a3b53.js",
    "revision": "da1879b536cd1af4bac0fa8393302f06"
  },
  {
    "url": "assets/js/12.f08c9a25.js",
    "revision": "8d6781dd9ad9db2b1bfbee1ec9f8efb0"
  },
  {
    "url": "assets/js/13.2875fc01.js",
    "revision": "2fe5983d0aa381b506dfa054bccd9e1b"
  },
  {
    "url": "assets/js/14.989eb0e2.js",
    "revision": "add61f4a911c377c4e2971e829a7fc18"
  },
  {
    "url": "assets/js/15.01bb6213.js",
    "revision": "d11c1f97a1b3c16d9e74a2314575fac8"
  },
  {
    "url": "assets/js/16.c9a55325.js",
    "revision": "86921531de0b9bdedb7a76a0b31088e4"
  },
  {
    "url": "assets/js/17.8cbaf86e.js",
    "revision": "fd07a2afe2da44b2d6b8e12cbe792e95"
  },
  {
    "url": "assets/js/18.670c052a.js",
    "revision": "b7025ef0e5dd2d23e1abf242f934a10e"
  },
  {
    "url": "assets/js/19.741a5c18.js",
    "revision": "9a3fb5703c3fd48afa6c39540ce884e7"
  },
  {
    "url": "assets/js/2.915c986d.js",
    "revision": "8aff0ea2dc2102b7e363f7d0c7a56623"
  },
  {
    "url": "assets/js/20.989ba9dd.js",
    "revision": "4677c66eeb9751617f59b5a85b14a293"
  },
  {
    "url": "assets/js/21.207d296a.js",
    "revision": "4f71dfd30069e438bcde4e078c312395"
  },
  {
    "url": "assets/js/22.05cb2df3.js",
    "revision": "d3c983176da92a9fb93aee6c1b5201ff"
  },
  {
    "url": "assets/js/23.46c8fde9.js",
    "revision": "15b8ca5cafdb3e7115099fd003514e7c"
  },
  {
    "url": "assets/js/24.421ad437.js",
    "revision": "f613e62e6cf1552555b86faef791d026"
  },
  {
    "url": "assets/js/25.e53e02b0.js",
    "revision": "647276a015704ab312e42d48ceeda5e2"
  },
  {
    "url": "assets/js/26.db5d3d0e.js",
    "revision": "424f7cb0378b49839c40032dfc5cb073"
  },
  {
    "url": "assets/js/27.39a7cf86.js",
    "revision": "3f47c9db14a5e4962a5dbff0685f8507"
  },
  {
    "url": "assets/js/28.53d86d7b.js",
    "revision": "dd93de58bc65864eef9aab01d718be7d"
  },
  {
    "url": "assets/js/29.a95502b1.js",
    "revision": "5e45fe4c38e4d3f2664fec051b7f9a3a"
  },
  {
    "url": "assets/js/3.8a3308cd.js",
    "revision": "d74b8347644b8a7c87a7a3e6024be2f0"
  },
  {
    "url": "assets/js/30.b442c6e4.js",
    "revision": "9f1e9d82ad1cf5ed9c79c7130a865cec"
  },
  {
    "url": "assets/js/31.1eec4d31.js",
    "revision": "830101d68088217838950bfdeedeafc4"
  },
  {
    "url": "assets/js/32.593c6f74.js",
    "revision": "8f03fdc6d0dff75abbdfa7c65042964c"
  },
  {
    "url": "assets/js/33.5ed5f22c.js",
    "revision": "69489c0b98cf03ad05121cc73425bd3c"
  },
  {
    "url": "assets/js/34.e2b15c54.js",
    "revision": "a367f9f7c027d7c03aec30de5fa94677"
  },
  {
    "url": "assets/js/35.c8cd79ba.js",
    "revision": "ce25b994dc660ef1ac37050af1348dc6"
  },
  {
    "url": "assets/js/36.21ffc7a8.js",
    "revision": "6db2058b624b2398150d4fd0ea1ddf29"
  },
  {
    "url": "assets/js/37.a8fbef26.js",
    "revision": "8857d3d08cf8d97c97c9f4d6d36ada0e"
  },
  {
    "url": "assets/js/38.b4f5f7c9.js",
    "revision": "bebbc2d98f9f5bcea09aff53fea54e7a"
  },
  {
    "url": "assets/js/39.eaed029d.js",
    "revision": "b7ce019eddc47ed90fc318589d53c29e"
  },
  {
    "url": "assets/js/4.6b921ba0.js",
    "revision": "439f06f2b1ec3775876ee62515751359"
  },
  {
    "url": "assets/js/40.5b059575.js",
    "revision": "ff0b43208b76e16bc5e94b6a37483dc3"
  },
  {
    "url": "assets/js/41.b07ebf4e.js",
    "revision": "21b987794ef5c9245d4d5ecc08851aba"
  },
  {
    "url": "assets/js/42.77077f52.js",
    "revision": "49db6cc74c6c821b0bc852f03e401d17"
  },
  {
    "url": "assets/js/43.191c1b14.js",
    "revision": "d6c0adeaf427049fcf3f861cfaed87a0"
  },
  {
    "url": "assets/js/44.cc377ab7.js",
    "revision": "3ee5fe965ec0e07c641deb4e4267d867"
  },
  {
    "url": "assets/js/45.cdce27b0.js",
    "revision": "e7a4925d46cc6ab60ec4747a5e9d348f"
  },
  {
    "url": "assets/js/46.92c9e29b.js",
    "revision": "c4d1f5ebc3878376335842724c34295b"
  },
  {
    "url": "assets/js/47.667cc415.js",
    "revision": "6e67f9ccbaeadfcd421f3c1ff841076c"
  },
  {
    "url": "assets/js/48.63728fd3.js",
    "revision": "069c19547e4cedb83cfe993302357b91"
  },
  {
    "url": "assets/js/49.31587175.js",
    "revision": "9635c623b9e3f368c0d7c92e10f8886f"
  },
  {
    "url": "assets/js/5.daa76a2a.js",
    "revision": "93520f0bc4530f2c389db6c027509ff5"
  },
  {
    "url": "assets/js/50.2ba1153f.js",
    "revision": "01adcd0ff9843fe9cd164b30cce49aa0"
  },
  {
    "url": "assets/js/51.1fa52def.js",
    "revision": "10538f8617d53c553ff9c51b551936c9"
  },
  {
    "url": "assets/js/52.8e35aa7f.js",
    "revision": "4f0eea9fcefda2d6eb371b4f0ba44919"
  },
  {
    "url": "assets/js/53.5c6daacb.js",
    "revision": "8a78d530e12d1389f665dc5b30c1dea7"
  },
  {
    "url": "assets/js/54.22f91ae4.js",
    "revision": "230659b3ba6e99a7ef4fa38de7b23113"
  },
  {
    "url": "assets/js/55.41297eed.js",
    "revision": "6c4bd6cb5fff7c620e5a00e409e0cfd6"
  },
  {
    "url": "assets/js/56.ddd44ec3.js",
    "revision": "60e5b7840763b9697033b49a28616747"
  },
  {
    "url": "assets/js/57.63d2233d.js",
    "revision": "4c98540d2b9096d52153c90af930cc28"
  },
  {
    "url": "assets/js/58.622ee03f.js",
    "revision": "6f8b166e48842d7507838816cc1af9fc"
  },
  {
    "url": "assets/js/59.80b206e3.js",
    "revision": "2936539fa3ef8d701b0dca13e82215d6"
  },
  {
    "url": "assets/js/6.129eb124.js",
    "revision": "416fea602b9bbfa5c22a8515f74fe6ec"
  },
  {
    "url": "assets/js/60.d302fdfa.js",
    "revision": "5da27af3e5ce6ab51e80aab611bf3f4d"
  },
  {
    "url": "assets/js/61.29101914.js",
    "revision": "60abab879e21a405d60070eb015b54d9"
  },
  {
    "url": "assets/js/62.bce17619.js",
    "revision": "67b0305e3c91e48942188b1b32d43745"
  },
  {
    "url": "assets/js/63.19c1de70.js",
    "revision": "02448d7d2416828da33c770b71963a2b"
  },
  {
    "url": "assets/js/64.7703b384.js",
    "revision": "9c384d602fadf9c101ef880b08527518"
  },
  {
    "url": "assets/js/65.e27c14b8.js",
    "revision": "ebb7a23f546ef18bb00d5e1ad95546ae"
  },
  {
    "url": "assets/js/66.5e368369.js",
    "revision": "45f031457f2f8c70610eb034b19c85b4"
  },
  {
    "url": "assets/js/67.efe15841.js",
    "revision": "3c59e0f1651d13d6978ad9ffa6cb9614"
  },
  {
    "url": "assets/js/68.498ca567.js",
    "revision": "26c1dab4f855097132bccdbb8b86d6d1"
  },
  {
    "url": "assets/js/69.34e8c591.js",
    "revision": "351279372b538f12a1ab132e4929ea22"
  },
  {
    "url": "assets/js/7.286986c8.js",
    "revision": "1e9d3496e4bbf89660e11089f18505a7"
  },
  {
    "url": "assets/js/70.5bf3717e.js",
    "revision": "dcc06514aa388fc6fcd2e54ade9c47b1"
  },
  {
    "url": "assets/js/71.457cba84.js",
    "revision": "a6f10b5ead6dd029c218f0984bfc4e49"
  },
  {
    "url": "assets/js/72.286ef29b.js",
    "revision": "93dc1ab9e3e430428354e54df22cd3d2"
  },
  {
    "url": "assets/js/73.51e7695f.js",
    "revision": "137e01ce495b205bc1d256a0eebab2ef"
  },
  {
    "url": "assets/js/74.c54d511e.js",
    "revision": "a105cfc308b1fa922306f79ca13022f6"
  },
  {
    "url": "assets/js/75.8e2f57bc.js",
    "revision": "d82c4e2d798ff156b9773262e654809d"
  },
  {
    "url": "assets/js/76.2ac816ad.js",
    "revision": "c8dbbb0f5e93a83a7fca09c9abad87c5"
  },
  {
    "url": "assets/js/77.0ae9c5f3.js",
    "revision": "4b8867e4be565bbe36f6a0cdbda8642e"
  },
  {
    "url": "assets/js/8.c961719e.js",
    "revision": "ddc3908388844cd4a68e486be822308a"
  },
  {
    "url": "assets/js/9.2bcc0f4e.js",
    "revision": "9ac981c0c1425b158ff593ba4bfab5f2"
  },
  {
    "url": "assets/js/app.dd2d7f56.js",
    "revision": "89cf758dd3999732ed4124cb2c6d45fb"
  },
  {
    "url": "CSS/index.html",
    "revision": "77295577b0a9b30a81fe8601fa0f626a"
  },
  {
    "url": "CSS/动画.html",
    "revision": "245b71b2d1cae25c3c9d342d79214907"
  },
  {
    "url": "Git/hook工具.html",
    "revision": "8baffee4e94dbb0e60c8688194d80182"
  },
  {
    "url": "Git/index.html",
    "revision": "9b7241ef14fd8cdc01b5d05b8d12cda1"
  },
  {
    "url": "Git/合并多次提交.html",
    "revision": "ce1eb06c9d6d79f9889b3550ba2ef845"
  },
  {
    "url": "Git/命令清单.html",
    "revision": "3a60e0446517c219e0e7913daf30c2ff"
  },
  {
    "url": "Git/回滚提交记录.html",
    "revision": "405cbca116d2636477654a1c7f71bc8f"
  },
  {
    "url": "Git/备忘录.html",
    "revision": "71f678225484b8dd73e51c4b8033ea72"
  },
  {
    "url": "Git/提交信息模板.html",
    "revision": "6f293fc3c0690434802be112ba00b3b2"
  },
  {
    "url": "Git/语义化版本.html",
    "revision": "2dbd3ea3f35ebc642b989543d5636dbf"
  },
  {
    "url": "home/index.html",
    "revision": "880fce10aad6917d542679ab86c71b2c"
  },
  {
    "url": "HTML/index.html",
    "revision": "f7c526a9978c5f8801d4b441192f024e"
  },
  {
    "url": "HTML/常用meta.html",
    "revision": "7404d103bc764905d9ece9e730b7cdea"
  },
  {
    "url": "HTTP/DNS域名解析中A、AAAA、CNAME、MX、NS、TXT、SRV、SOA、PTR各项记录的作用.html",
    "revision": "5f42735f64a11a6b0c3b7233933db758"
  },
  {
    "url": "HTTP/HTTP消息头.html",
    "revision": "d30dc7b572d9160c110b7d444974d12c"
  },
  {
    "url": "HTTP/index.html",
    "revision": "a3d6f153bd429ca2e72d0da2f962edf2"
  },
  {
    "url": "HTTP/响应状态码.html",
    "revision": "381913ea37d4e09c17b739f7e59edb4c"
  },
  {
    "url": "index.html",
    "revision": "d59a8992115831b9ea9fba9974de89aa"
  },
  {
    "url": "JavaScript/Babel.html",
    "revision": "d0fa63017b460a721e145b458525d52f"
  },
  {
    "url": "JavaScript/base64.html",
    "revision": "07041c4bfa8ad108031a6bc04e712701"
  },
  {
    "url": "JavaScript/CSRF 攻击.html",
    "revision": "31d15c3b22da9720f363675394d93418"
  },
  {
    "url": "JavaScript/ESLint.html",
    "revision": "4d590f9bcf42937a40a64c14f8b1cc9f"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "b24e305795958b83a63407bfde1c7fa4"
  },
  {
    "url": "JavaScript/JS 原型继承和类式继承.html",
    "revision": "795ca71881c1812a1c261c6b4fd209a4"
  },
  {
    "url": "JavaScript/XSS 攻击.html",
    "revision": "459c99f8bf35dcb2d505fd289d43b8f9"
  },
  {
    "url": "JavaScript/模块.html",
    "revision": "68b5e4e96aa3838be23a265501c01e73"
  },
  {
    "url": "JavaScript/点击劫持.html",
    "revision": "54dd5e4374214966693efbc6434c6793"
  },
  {
    "url": "JavaScript/跨域不带cookie问题.html",
    "revision": "8a289b00db01cc8f676df7c2669a7eac"
  },
  {
    "url": "Linux/index.html",
    "revision": "5792be982912e2a3f665652222a69740"
  },
  {
    "url": "Linux/OpenSSL.html",
    "revision": "54992533a40676f2ce5e554a86a8e409"
  },
  {
    "url": "Linux/PATH.html",
    "revision": "35bac8d8ade17b39bac04ac3c63efbb4"
  },
  {
    "url": "Linux/ssh-keygen.html",
    "revision": "736debc46e5ce12449b0c38c4dce2eae"
  },
  {
    "url": "Linux/vi的一些语法.html",
    "revision": "d62a7e7f4c423d25b98feb5a8d568b26"
  },
  {
    "url": "Linux/命令行- 和 --的区别.html",
    "revision": "373fd0ebc05254eb636261cb0cc17891"
  },
  {
    "url": "Linux/编码类型.html",
    "revision": "089fcf43297632a88ef02d9cfd68e563"
  },
  {
    "url": "MACOS/「安全与隐私」中系统不显示「任何来源」.html",
    "revision": "e858a82692c00e660844b2e08393357e"
  },
  {
    "url": "MACOS/brew 安装.html",
    "revision": "7d85f9f206115437eb057f80ae4f0efe"
  },
  {
    "url": "MACOS/index.html",
    "revision": "534013153c413c05c2e1fb3292de70de"
  },
  {
    "url": "MACOS/Mac .DS_Store文件的处理.html",
    "revision": "17e5c7d5c155a3b8ac83fc92fb742e80"
  },
  {
    "url": "MACOS/终端工具.html",
    "revision": "ed1497381147fd0264f5b4501f5130fe"
  },
  {
    "url": "MACOS/终端配置代理.html",
    "revision": "a209aa3dc8bf2f9724ba8c262248890f"
  },
  {
    "url": "MACOS/软件.html",
    "revision": "88e65a8f0c02811c83909b29846cfd93"
  },
  {
    "url": "Node.js/index.html",
    "revision": "564519577d8c6e649497462fc86cbb35"
  },
  {
    "url": "Node.js/nodemon.html",
    "revision": "479609eaea75683dada33f2601bbb026"
  },
  {
    "url": "Node.js/passport.html",
    "revision": "d93844da881599b7a270c8f15b189f1e"
  },
  {
    "url": "Node.js/PM2.html",
    "revision": "4705ed950bb11ef49bd7fbad4eee4097"
  },
  {
    "url": "Node.js/session.html",
    "revision": "60b6674698eb6a8215dafbf1a7f6c67d"
  },
  {
    "url": "Node.js/修改node_modules依赖库的文件.html",
    "revision": "02844b2a1bf6e04e10003887b849adae"
  },
  {
    "url": "Node.js/包管理.html",
    "revision": "8e5451f1815c0a6968c43792aaeeefb2"
  },
  {
    "url": "Node.js/安装和版本管理.html",
    "revision": "f69875842f96ccf3a0f44bc5ce529b1f"
  },
  {
    "url": "Other/ab压力测试.html",
    "revision": "ea91b5af695b65a6196b930965f60339"
  },
  {
    "url": "Other/charles抓包工具.html",
    "revision": "4a43d99d90ca343b165295f406353d4e"
  },
  {
    "url": "Other/Chrome 插件集.html",
    "revision": "b9103f6f2f8bb6b8556d4377db076c9f"
  },
  {
    "url": "Other/index.html",
    "revision": "36a04e914e1242cfca1ea6f3ca84d33b"
  },
  {
    "url": "Other/menu/index.html",
    "revision": "94f89f01aaf9d86c8ea7267d11606499"
  },
  {
    "url": "Other/opencc.html",
    "revision": "d84e1e96ddd3f9271c3bccf95bb66d0b"
  },
  {
    "url": "Other/Vs Code.html",
    "revision": "d875308af117d3229e52bc69d5684839"
  },
  {
    "url": "Other/vsc调试.html",
    "revision": "4b9b12b7e5d5445625176df7b7292cce"
  },
  {
    "url": "React/index.html",
    "revision": "fde9ede2fd7b4b42f3d72bd9a6de4528"
  },
  {
    "url": "TypeScript/index.html",
    "revision": "9629936b0a528627621eae0a74e06236"
  },
  {
    "url": "TypeScript/nest.js-DI.html",
    "revision": "0a9d1ee7a51992d574d2751dfb229f76"
  },
  {
    "url": "TypeScript/nest.js笔记.html",
    "revision": "05369eb6ffd05e08259378ba3bcaa73c"
  },
  {
    "url": "TypeScript/杂项笔记.html",
    "revision": "b8f1f0a32fe0be7b8d3223c6de00a0fd"
  },
  {
    "url": "数据库/index.html",
    "revision": "493e4ec2f293e280062e6cfa89e21bf9"
  },
  {
    "url": "数据库/mysql存储引擎.html",
    "revision": "bb13c1ca11045d92795ddb25ae7c5095"
  },
  {
    "url": "数据库/mysql语句.html",
    "revision": "4daf976b80b0979fd05d8628fbf613a6"
  },
  {
    "url": "数据库/redis命令.html",
    "revision": "cec15b53019802d92742bd38e9ff0471"
  },
  {
    "url": "数据库/索引的设计和使用.html",
    "revision": "0c66f65c90bc60ecf9e5e46f754d70ab"
  },
  {
    "url": "数据库/缓存的使用.html",
    "revision": "7d815782b9bfe104e085f00f64d16662"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
