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
    "revision": "bda13bc123f6bc98edce379cab4b7658"
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
    "url": "assets/js/10.7c892b78.js",
    "revision": "24d0a0478c386cfb0b38ef157c9d07a7"
  },
  {
    "url": "assets/js/11.4050b6a1.js",
    "revision": "c7ef4ead4fc4dbf80baca16a8a16221f"
  },
  {
    "url": "assets/js/12.d932d7fa.js",
    "revision": "7960378611c7092063b8d53ae904aab0"
  },
  {
    "url": "assets/js/13.6a354c03.js",
    "revision": "c9bd899eff1167ab4f673db8d376a54a"
  },
  {
    "url": "assets/js/14.b60e18b3.js",
    "revision": "a85cbb4b8a1a1f5bd3f9677c78576774"
  },
  {
    "url": "assets/js/15.1e118ed7.js",
    "revision": "e2934f560e8417674df3025477c02a3c"
  },
  {
    "url": "assets/js/16.62e15c3d.js",
    "revision": "ca724e71a054e8e4d88526fb7d4dae24"
  },
  {
    "url": "assets/js/17.be2c6d89.js",
    "revision": "712124e18733c3f24b6c2a8d7ab120aa"
  },
  {
    "url": "assets/js/18.6d7b77fb.js",
    "revision": "a262470d6080ba1933f0464e2fda5c76"
  },
  {
    "url": "assets/js/19.f43c8835.js",
    "revision": "61c3644d4845149e8a30a0e986e33551"
  },
  {
    "url": "assets/js/2.6733267b.js",
    "revision": "b81739e8171780830531f20ae897605d"
  },
  {
    "url": "assets/js/20.8c50b9a6.js",
    "revision": "c4d4555edb15cfa790e04348b4b58aa0"
  },
  {
    "url": "assets/js/21.73509dec.js",
    "revision": "9196d222ff0a89503189470148575714"
  },
  {
    "url": "assets/js/22.5170b91e.js",
    "revision": "892834c151721b52228ea01b1c0d216b"
  },
  {
    "url": "assets/js/23.e16298c5.js",
    "revision": "d33ba0e5c9a31a38322ab4fdfb38e13b"
  },
  {
    "url": "assets/js/24.42d76825.js",
    "revision": "f7e37eca34c8e8a1b2f626da0f59c352"
  },
  {
    "url": "assets/js/25.99df4ab1.js",
    "revision": "81c6914f8b2f7f9aa6cd5ab836b8d6f0"
  },
  {
    "url": "assets/js/26.278ff6de.js",
    "revision": "9fe57027cad49695f0993b3e04df12bc"
  },
  {
    "url": "assets/js/27.2dd242fc.js",
    "revision": "0ef630e68ac6a7d06b8efe5040231859"
  },
  {
    "url": "assets/js/28.2115c18b.js",
    "revision": "3101bcfb95bab15cdcc42921828e07c8"
  },
  {
    "url": "assets/js/29.2edf585d.js",
    "revision": "646b18005cc126075f652f67cf03b529"
  },
  {
    "url": "assets/js/3.463af80e.js",
    "revision": "75f67560f78c8a2729b1558d42d861fc"
  },
  {
    "url": "assets/js/30.4e0f38af.js",
    "revision": "662004667e3c84754678b6663fceccbb"
  },
  {
    "url": "assets/js/31.4dfc5ff7.js",
    "revision": "433e1885d4170a5b29dbec4073757e5d"
  },
  {
    "url": "assets/js/32.b4334ebb.js",
    "revision": "671977f3f7b7f4d84868bc0d687d6366"
  },
  {
    "url": "assets/js/33.e992c7a7.js",
    "revision": "d510e4222ffcc28d88b37463b580f3d9"
  },
  {
    "url": "assets/js/34.4e470472.js",
    "revision": "7a2096d3204f08d0aad748270d0a11b8"
  },
  {
    "url": "assets/js/35.f01e51ee.js",
    "revision": "e0b1680ed1a034c4f3f9edd01b98a60b"
  },
  {
    "url": "assets/js/36.e2c1154d.js",
    "revision": "d6a635903c07a33316ae091a6952f327"
  },
  {
    "url": "assets/js/37.0bbd58a5.js",
    "revision": "4c23ad74684d8984931c408464836aa7"
  },
  {
    "url": "assets/js/38.620d78f6.js",
    "revision": "ff2031f0d3f41da6a30202616fd223ed"
  },
  {
    "url": "assets/js/39.ccf9e95c.js",
    "revision": "d9d3bcf20c5a68d23983aaa9f9d869a3"
  },
  {
    "url": "assets/js/4.b78b8ea1.js",
    "revision": "61c81c49df4cd4d76a9341b837e6d8b1"
  },
  {
    "url": "assets/js/40.afe8c89c.js",
    "revision": "a728e28b911cfd1bffc1ae6aa2af9566"
  },
  {
    "url": "assets/js/41.0d7acfa1.js",
    "revision": "afa30c00d6cae6e45f1ef3d08a977520"
  },
  {
    "url": "assets/js/42.e7b25c08.js",
    "revision": "770c8cdc8ef559bd86f5059e8f271806"
  },
  {
    "url": "assets/js/43.a2cd3413.js",
    "revision": "3d3511a918caa0cde925d63f42eed1bf"
  },
  {
    "url": "assets/js/44.aad2ceeb.js",
    "revision": "ec89dafdc69a06bd2fa46c22a8741366"
  },
  {
    "url": "assets/js/45.c88c5b89.js",
    "revision": "7c0aafadf86ba6b40e50b9f4d8744571"
  },
  {
    "url": "assets/js/46.f569a554.js",
    "revision": "a88b9029f330fadbc9f363fef649e3a5"
  },
  {
    "url": "assets/js/47.0102911f.js",
    "revision": "b67b70dd15237474b018b9d7181dbaf6"
  },
  {
    "url": "assets/js/48.d9548ec6.js",
    "revision": "8cc2407b5f6ef9cc9c1c32fed4c275b9"
  },
  {
    "url": "assets/js/49.c47c9e64.js",
    "revision": "87f6f601be5f28a3536cc223b1878109"
  },
  {
    "url": "assets/js/5.2b886634.js",
    "revision": "78dc441906382ab6f4d5be5c9520255d"
  },
  {
    "url": "assets/js/50.3c43e510.js",
    "revision": "e8fd66ff91c46a8d2be2f5c2b61e78a3"
  },
  {
    "url": "assets/js/51.03af823d.js",
    "revision": "b3f9f6636cadb5c8140ea5b31f181a4d"
  },
  {
    "url": "assets/js/52.5d26d6af.js",
    "revision": "7d8c9e12096a1bc42ec550c39cd1ee56"
  },
  {
    "url": "assets/js/53.06f9b1ca.js",
    "revision": "8e64b3191236d44fa4dec7bf5e47632c"
  },
  {
    "url": "assets/js/54.f963fbc5.js",
    "revision": "bf10309f11ebf5538ad44a3e2475c026"
  },
  {
    "url": "assets/js/55.aa0c1bf1.js",
    "revision": "9257c1dfee575c5d22b8292166ad3576"
  },
  {
    "url": "assets/js/56.13c09152.js",
    "revision": "5856a3b4df13226256f24b5c504a9a45"
  },
  {
    "url": "assets/js/57.8175a300.js",
    "revision": "a230c31ac4d17d0ba23bc6c74c187c78"
  },
  {
    "url": "assets/js/58.b3f82d96.js",
    "revision": "db7c0e2204b85050e50b8c78405ccf11"
  },
  {
    "url": "assets/js/59.a3a6cbc6.js",
    "revision": "b1b97ad042fe8379161f0ac652ac02b6"
  },
  {
    "url": "assets/js/6.c1d27367.js",
    "revision": "c27ded1ce5731945b90242b6d5e3efe0"
  },
  {
    "url": "assets/js/60.7ed172c2.js",
    "revision": "553c5e95237106b37c01b4ca6239a618"
  },
  {
    "url": "assets/js/61.8892711f.js",
    "revision": "aa5142c16e8e2dd4b2b62d91ad3d0cdf"
  },
  {
    "url": "assets/js/62.c6f5eb4f.js",
    "revision": "267e0ad1b324c3bd6d4d838a04bedb5f"
  },
  {
    "url": "assets/js/63.48a1c260.js",
    "revision": "1b75f6d243ab7b8cd11754ca3cf0fd4d"
  },
  {
    "url": "assets/js/64.bd77bde0.js",
    "revision": "1062add1ad10318b427fe983f17fa0af"
  },
  {
    "url": "assets/js/65.ebc7a8bf.js",
    "revision": "f6313b322794cc73c34bd167e4998145"
  },
  {
    "url": "assets/js/66.1236455d.js",
    "revision": "0d03fb67fdc9be8cc7f77adb767fa3ba"
  },
  {
    "url": "assets/js/67.ef87680b.js",
    "revision": "dfad332a219b67e404a707b0caae3d57"
  },
  {
    "url": "assets/js/68.b4e6ed10.js",
    "revision": "fc8305add9594c4bee11da2c0235cabb"
  },
  {
    "url": "assets/js/69.8cc2d10b.js",
    "revision": "bf61f3194889991236681a6769f7a69e"
  },
  {
    "url": "assets/js/7.60218d8f.js",
    "revision": "ce31f7e7cb79fd909403d3f3be39d217"
  },
  {
    "url": "assets/js/70.b4ce36c7.js",
    "revision": "5ca516ac2e3b91c1cc63eb0e094216c2"
  },
  {
    "url": "assets/js/71.4af87358.js",
    "revision": "40cacb8c6031f699428873a1d404f6b8"
  },
  {
    "url": "assets/js/72.48b6e094.js",
    "revision": "3ea3b939bee9490e63fe099ad6ef51f4"
  },
  {
    "url": "assets/js/73.47c7c39e.js",
    "revision": "3b46da1dff6c4783f510dcd734aecb54"
  },
  {
    "url": "assets/js/74.7236642f.js",
    "revision": "ed32b7987dc16cfb4ac1390bd9b540c5"
  },
  {
    "url": "assets/js/75.0ed117e3.js",
    "revision": "e5a5816e63bd587b7f90ad2f0454ac85"
  },
  {
    "url": "assets/js/76.824c78b4.js",
    "revision": "0e57a98b75112e1d6eccfdedef853a36"
  },
  {
    "url": "assets/js/77.4e11edf0.js",
    "revision": "79552c0305a0bd1727aa79525f9f64c1"
  },
  {
    "url": "assets/js/78.74dacc6a.js",
    "revision": "1ba932e6286a31fd5184fb419d0c352a"
  },
  {
    "url": "assets/js/8.e6ac3661.js",
    "revision": "64baa7cb5cf5a2eb02ac5ea8d1ef015e"
  },
  {
    "url": "assets/js/9.083dc67f.js",
    "revision": "42511361a494d43c740d2b0b4737cff9"
  },
  {
    "url": "assets/js/app.a22eeb60.js",
    "revision": "1839969dd6b0870a8e3ce2a66f1dd03f"
  },
  {
    "url": "CSS/index.html",
    "revision": "52addc28e69d68a95b2779fbd232fda3"
  },
  {
    "url": "CSS/动画.html",
    "revision": "9a058c441b1f457727d04632355c551d"
  },
  {
    "url": "Git/hook工具.html",
    "revision": "acafb6860a848a2e9d9cb028c860a52b"
  },
  {
    "url": "Git/index.html",
    "revision": "13134d63eb47e6843a43b45180dafe74"
  },
  {
    "url": "Git/合并多次提交.html",
    "revision": "41b25a98d3fcf9e2afece06cde7811ef"
  },
  {
    "url": "Git/命令清单.html",
    "revision": "b7acb23a33ad2a74ab309951bd89df9f"
  },
  {
    "url": "Git/回滚提交记录.html",
    "revision": "4a2f983e4f2f92a9f4c0050acd7b220c"
  },
  {
    "url": "Git/备忘录.html",
    "revision": "8d3c59cda1bfe44f454efd7650c5c977"
  },
  {
    "url": "Git/提交信息模板.html",
    "revision": "c3d6cd3d2ac5a520fe26a26051b0c2e3"
  },
  {
    "url": "Git/语义化版本.html",
    "revision": "d9acfb4ceab731427b09b82a57c9e7f7"
  },
  {
    "url": "home/index.html",
    "revision": "81c54a4a86cd4753418d1c26fb6b1b93"
  },
  {
    "url": "HTML/index.html",
    "revision": "091bec0aecfd137cebddbb49badd2e10"
  },
  {
    "url": "HTML/常用meta.html",
    "revision": "90d6b2fe6c52fd771355807d7b848535"
  },
  {
    "url": "HTTP/DNS域名解析中A、AAAA、CNAME、MX、NS、TXT、SRV、SOA、PTR各项记录的作用.html",
    "revision": "084e9e736305a6cabe456b93af0cf847"
  },
  {
    "url": "HTTP/HTTP消息头.html",
    "revision": "a32298ab8e63cc05493f6757d3efad5f"
  },
  {
    "url": "HTTP/index.html",
    "revision": "ff2ccc6afc738289af523a5aa0537dbf"
  },
  {
    "url": "HTTP/响应状态码.html",
    "revision": "14ca24f24854c2e774f56d367d39c133"
  },
  {
    "url": "index.html",
    "revision": "868db682fc824dfb0844c26622ba2dd4"
  },
  {
    "url": "JavaScript/Babel.html",
    "revision": "c400339b3a0308b9f738d1d178053ac0"
  },
  {
    "url": "JavaScript/base64.html",
    "revision": "e6e66ba0b17d1ab7c8d2f405d1e33080"
  },
  {
    "url": "JavaScript/CSRF 攻击.html",
    "revision": "44e28a7ab99c0cf5fc7b00a6518f25a1"
  },
  {
    "url": "JavaScript/ESLint.html",
    "revision": "f5a4835d1301fa32ccdd1a5ba02d309c"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "bdab0672dd32a17b6c3f38d10ffe4bf2"
  },
  {
    "url": "JavaScript/JS 原型继承和类式继承.html",
    "revision": "57f5087c462daa84e742485e90918bb9"
  },
  {
    "url": "JavaScript/XSS 攻击.html",
    "revision": "3696c092d9162cd4fbe147c2f40b67e6"
  },
  {
    "url": "JavaScript/模块.html",
    "revision": "2f0d1e3ea059baa436c028e1a2e1cae4"
  },
  {
    "url": "JavaScript/点击劫持.html",
    "revision": "160912f2b44cedc6e0f33db145b4e6bb"
  },
  {
    "url": "JavaScript/跨域不带cookie问题.html",
    "revision": "179749308b9150d5ff0dfcd1bf70c9b5"
  },
  {
    "url": "Linux/index.html",
    "revision": "49e1e48f9ce1e00d179f78315c8dd04d"
  },
  {
    "url": "Linux/OpenSSL.html",
    "revision": "0bf434d37c9fdc484b6a9f1bd0d358b2"
  },
  {
    "url": "Linux/PATH.html",
    "revision": "1b0a0018244f9d4102cd9fd309f44530"
  },
  {
    "url": "Linux/ssh-keygen.html",
    "revision": "effb311dc02d206af400e11d959a03f1"
  },
  {
    "url": "Linux/vi的一些语法.html",
    "revision": "ee144dd097352e6e8130c67de7f545dd"
  },
  {
    "url": "Linux/命令行- 和 --的区别.html",
    "revision": "f95f4b98415690f5f704a1c67fd35bec"
  },
  {
    "url": "Linux/编码类型.html",
    "revision": "fa288c403388faca9ce33cec8b6ad121"
  },
  {
    "url": "MACOS/「安全与隐私」中系统不显示「任何来源」.html",
    "revision": "c954c132f7b5cf07ca0a98745cc990e0"
  },
  {
    "url": "MACOS/brew 安装.html",
    "revision": "6b1ff4bc7b3907b72b9ec36e12be6426"
  },
  {
    "url": "MACOS/index.html",
    "revision": "4d4a171ef330c1b9de6699f9d43b9f1f"
  },
  {
    "url": "MACOS/Mac .DS_Store文件的处理.html",
    "revision": "96670b0c3c3ebab9ff0dcda82a6426f6"
  },
  {
    "url": "MACOS/终端工具.html",
    "revision": "9596dd8af19ffddf5b126a10fcf2d39d"
  },
  {
    "url": "MACOS/终端配置代理.html",
    "revision": "9af47b8823d137de94060fbf22d66daa"
  },
  {
    "url": "MACOS/软件.html",
    "revision": "2784702aef42f85d6a0adb3d0c6ae502"
  },
  {
    "url": "Node.js/index.html",
    "revision": "7441cde062495a144937c536cea163c0"
  },
  {
    "url": "Node.js/nodemon.html",
    "revision": "4908d0ba4d3dbb0c1bc0c18d70027a74"
  },
  {
    "url": "Node.js/passport.html",
    "revision": "6b852f121157f41edce9047eb143fe48"
  },
  {
    "url": "Node.js/PM2.html",
    "revision": "7a6254cf2c98e8cffd4915312427c66c"
  },
  {
    "url": "Node.js/session.html",
    "revision": "055347751323ff36dcdaf10aff3f61c5"
  },
  {
    "url": "Node.js/修改node_modules依赖库的文件.html",
    "revision": "63d57a51aefe320de8061614b4e5ed76"
  },
  {
    "url": "Node.js/包管理.html",
    "revision": "5b9392114e47850bfc86a6f7eac4c262"
  },
  {
    "url": "Node.js/安装和版本管理.html",
    "revision": "84ca25708ff45286087d4764e7d5917c"
  },
  {
    "url": "Node.js/常用库汇总.html",
    "revision": "cc82147920b3833f15bbbcbb15f44af0"
  },
  {
    "url": "Other/ab压力测试.html",
    "revision": "cf600b7e87e43ce88de94e71728a3dbd"
  },
  {
    "url": "Other/charles抓包工具.html",
    "revision": "aee67ca7db88282984a82cc6ee950795"
  },
  {
    "url": "Other/Chrome 插件集.html",
    "revision": "7bcda480b6ddee0a1a8dba6c54d2e9c7"
  },
  {
    "url": "Other/index.html",
    "revision": "881eb144eaa9be2fc364c4879386033b"
  },
  {
    "url": "Other/menu/index.html",
    "revision": "7f6e53db3bdecd55046295d77d133ed3"
  },
  {
    "url": "Other/opencc.html",
    "revision": "1934d2df2a095b929977929cbf2aadbb"
  },
  {
    "url": "Other/Vs Code.html",
    "revision": "c7cf578c3141552365d384ef826d32ba"
  },
  {
    "url": "Other/vsc调试.html",
    "revision": "8beb0f728ccbe18b5327f0eb8b476207"
  },
  {
    "url": "React/index.html",
    "revision": "95f0cb8cd4d9f653a5572a69c64451e4"
  },
  {
    "url": "TypeScript/index.html",
    "revision": "6c411177338c5c622882494204c029c0"
  },
  {
    "url": "TypeScript/nest.js-DI.html",
    "revision": "19ae1f39e8b50a856a36597661bbbbbe"
  },
  {
    "url": "TypeScript/nest.js笔记.html",
    "revision": "c260425c15a31e97c549d516bb1d4bd2"
  },
  {
    "url": "TypeScript/杂项笔记.html",
    "revision": "49a6920e26bdc18af5beed7c92f891a4"
  },
  {
    "url": "数据库/index.html",
    "revision": "056151a5163a576f3d09d181fee6ed42"
  },
  {
    "url": "数据库/mysql存储引擎.html",
    "revision": "024954ccd1a8da91ada2d1e305dcb2e1"
  },
  {
    "url": "数据库/mysql语句.html",
    "revision": "cf5022d37fb4444c46862edf1d808d14"
  },
  {
    "url": "数据库/redis命令.html",
    "revision": "06c9fafe821dbcc79d35b138873d2545"
  },
  {
    "url": "数据库/索引的设计和使用.html",
    "revision": "0c1107d89c57d2c6a5e9a1c6a2bb4d95"
  },
  {
    "url": "数据库/缓存的使用.html",
    "revision": "cfe733b5fd801a0e0af8a95c82d1b03b"
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
