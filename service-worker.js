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
    "revision": "33bf34a548b75f5669fa7e40d52ad25d"
  },
  {
    "url": "assets/css/0.styles.519963dd.css",
    "revision": "3bed52d1204c65f937ad4197caa5d0c5"
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
    "url": "assets/js/10.e75745f4.js",
    "revision": "21924fd34c05fea382968fd71e2fec84"
  },
  {
    "url": "assets/js/11.856052f8.js",
    "revision": "3cd3701ed3af98856aa72d21aaa7b261"
  },
  {
    "url": "assets/js/12.3a959deb.js",
    "revision": "8478ec34c02cece0bd23f78010df90bd"
  },
  {
    "url": "assets/js/13.c07fb1c9.js",
    "revision": "c3405a4460020b81740d69e8253e0255"
  },
  {
    "url": "assets/js/14.2535179f.js",
    "revision": "788c220394386c8f116cc9be6e75e358"
  },
  {
    "url": "assets/js/15.ce267f42.js",
    "revision": "dff3b803fa4e9a1b48e0b59dc121c340"
  },
  {
    "url": "assets/js/16.84954e31.js",
    "revision": "efbd881e3a6e1b2d71d61e541822d20c"
  },
  {
    "url": "assets/js/17.0cf6ee12.js",
    "revision": "6a643547d1d6eb9e9c128bdd038b2486"
  },
  {
    "url": "assets/js/18.0ed3af16.js",
    "revision": "1b20fdd289324bb610dfa8ec6755baba"
  },
  {
    "url": "assets/js/19.0b2c1387.js",
    "revision": "f7301db9f744aa8e3db917012082c2e3"
  },
  {
    "url": "assets/js/2.3c1af153.js",
    "revision": "465f38f301a7c7607c9f41ae0682b152"
  },
  {
    "url": "assets/js/20.239e92dd.js",
    "revision": "8b0e8bec6fd0e1515d20d7125f9eada5"
  },
  {
    "url": "assets/js/21.35a05880.js",
    "revision": "f7fb3635f9e1050a1c50921d3e714009"
  },
  {
    "url": "assets/js/22.33faa963.js",
    "revision": "1f9245602a4f2c38056ed499e7a7df4f"
  },
  {
    "url": "assets/js/23.1454fb49.js",
    "revision": "8a1260cad9f577f77d563aa2b1a98299"
  },
  {
    "url": "assets/js/24.a2299c73.js",
    "revision": "9d56edec53f667a019250a9f62d506e9"
  },
  {
    "url": "assets/js/25.1f7cf6a3.js",
    "revision": "16ff448258fcc1e41d6ed9c70479aa4e"
  },
  {
    "url": "assets/js/26.630f7bcd.js",
    "revision": "0380d6bd6bdf4f569b607135934b19d4"
  },
  {
    "url": "assets/js/27.24d1a8b1.js",
    "revision": "238c89c28cae0be5c75b2f1dfa3226d0"
  },
  {
    "url": "assets/js/28.ba6d5d3c.js",
    "revision": "b21ef3b45904fb6e297997220eef10a0"
  },
  {
    "url": "assets/js/29.590bfc5f.js",
    "revision": "bcaa9c58cf96c8c202b1cce9c5d842b6"
  },
  {
    "url": "assets/js/3.233b80c7.js",
    "revision": "42ff5d6230935d5839bff17e6f4593d6"
  },
  {
    "url": "assets/js/30.8657a766.js",
    "revision": "bd8a482a952c999511f1d23f591c2909"
  },
  {
    "url": "assets/js/31.cd0e12d1.js",
    "revision": "5ad4833301cdb62f73d5ff873ee87bf3"
  },
  {
    "url": "assets/js/32.b7cc6fb9.js",
    "revision": "31aaf19602d8ec33075636c1c28fe639"
  },
  {
    "url": "assets/js/33.e24cc121.js",
    "revision": "f368b69cddf3e9f31a7b26f6b78897b5"
  },
  {
    "url": "assets/js/34.4500f764.js",
    "revision": "4e287a2c4bc05e3edf948191ea953f1f"
  },
  {
    "url": "assets/js/35.650c7f91.js",
    "revision": "735162b7ce24a2381a6613f52d4d8ef1"
  },
  {
    "url": "assets/js/36.99324000.js",
    "revision": "63bac65340084be78c3cd42f75d52e21"
  },
  {
    "url": "assets/js/37.bd057915.js",
    "revision": "36b4976b24039708b1ab9a48f717e625"
  },
  {
    "url": "assets/js/38.a042399a.js",
    "revision": "d42a9807c802098baaa21ece1e154275"
  },
  {
    "url": "assets/js/39.402af73e.js",
    "revision": "383acecabfeb9a26acc82d2f2821f400"
  },
  {
    "url": "assets/js/4.8fae549e.js",
    "revision": "a00f11c73b0e3f4eaba819eb0f1c668c"
  },
  {
    "url": "assets/js/40.0d6f40c8.js",
    "revision": "bbafa8c59d7d486daed7c873f6d3e29f"
  },
  {
    "url": "assets/js/41.5fd72f69.js",
    "revision": "e8672fea130416d68e1ce4af200face1"
  },
  {
    "url": "assets/js/42.422160aa.js",
    "revision": "2d4d0fe3bb6e6ec6303be0e6149517f9"
  },
  {
    "url": "assets/js/43.aa299b37.js",
    "revision": "2e346f9b47eff5bb8c31bb3602b4c53b"
  },
  {
    "url": "assets/js/44.a09f4e61.js",
    "revision": "f3406409ef22ad3bb48aa802c7d5648c"
  },
  {
    "url": "assets/js/45.8806fbe3.js",
    "revision": "4a4a551c0891bdef68db892ccab0b349"
  },
  {
    "url": "assets/js/46.d193d8ae.js",
    "revision": "523588b39dd5ff4700e9ec2dfd4d161f"
  },
  {
    "url": "assets/js/47.31d9e335.js",
    "revision": "34b192cf0299c69f281aa2d27a7e86b3"
  },
  {
    "url": "assets/js/48.83c515c5.js",
    "revision": "24638f285825f4d3ceed4177b31a0baa"
  },
  {
    "url": "assets/js/49.4bf8f7d0.js",
    "revision": "3f944775273fa5a61852394ab1c1fcdd"
  },
  {
    "url": "assets/js/5.9f430ff2.js",
    "revision": "536c56e3050e19af5626c3c5d72fc612"
  },
  {
    "url": "assets/js/50.82584203.js",
    "revision": "424d6bcc37b4ad57569cdbf5e34d01e6"
  },
  {
    "url": "assets/js/51.27e5b157.js",
    "revision": "62462f7fa121955455c68d09c53ea47b"
  },
  {
    "url": "assets/js/52.87266570.js",
    "revision": "a49fa544b8b4307f38e7e9ef7f67101c"
  },
  {
    "url": "assets/js/53.b4b6a74e.js",
    "revision": "a9a0ec6c91fad92ec608cfd1c1e3a943"
  },
  {
    "url": "assets/js/54.8d9a7493.js",
    "revision": "3130624ff027edebc3ceb87409a74303"
  },
  {
    "url": "assets/js/55.f6712c1d.js",
    "revision": "c1d2c9c8a16f6bd0f304c5001e224a67"
  },
  {
    "url": "assets/js/56.61720497.js",
    "revision": "33ec817b50197cfd27b5ef33b36a75e1"
  },
  {
    "url": "assets/js/57.64ad4ba6.js",
    "revision": "f516324e87292450cacc1b8a731ef48b"
  },
  {
    "url": "assets/js/58.2774c72a.js",
    "revision": "0da25c645a29f1e74c6d37f8e161e1be"
  },
  {
    "url": "assets/js/59.d6a90d7d.js",
    "revision": "2c28bda8479ae90da345263f320749e2"
  },
  {
    "url": "assets/js/6.8abf3ff4.js",
    "revision": "66a1d11c84f3210cf245ec04257892a2"
  },
  {
    "url": "assets/js/60.358b53d2.js",
    "revision": "62fb09d28ddc58fba97b2c2c8acb7162"
  },
  {
    "url": "assets/js/61.095b3cfb.js",
    "revision": "4a5950593ded5d4b36623ba212c70241"
  },
  {
    "url": "assets/js/62.c796903c.js",
    "revision": "1504d04bcfbd5060bee3953dc66672a4"
  },
  {
    "url": "assets/js/63.40ca0005.js",
    "revision": "d538133ac1451c14fbb03451324e0fe2"
  },
  {
    "url": "assets/js/64.c103dae7.js",
    "revision": "e762385b0b5177494718136ff11701b2"
  },
  {
    "url": "assets/js/65.4c66e436.js",
    "revision": "a4bb448bfc03328779fe694a882539f7"
  },
  {
    "url": "assets/js/66.a9d5d6b9.js",
    "revision": "d7900c29556dc6ec5e4926bc4cf3b801"
  },
  {
    "url": "assets/js/67.509824ed.js",
    "revision": "39f249d88d4c7c9c2ff9bb055acdd2ee"
  },
  {
    "url": "assets/js/68.0a9bbd8c.js",
    "revision": "933bc8f609663a8257382fe8c5b84ee7"
  },
  {
    "url": "assets/js/69.a40b0848.js",
    "revision": "0d4cfbf5e9dcc56af27b37388f71a1ef"
  },
  {
    "url": "assets/js/7.a8cf132e.js",
    "revision": "fb4048eb31ffd4fff4ef6d7f871bd8e6"
  },
  {
    "url": "assets/js/70.faee444a.js",
    "revision": "6b4ece4199011e3399c5f035d1438480"
  },
  {
    "url": "assets/js/71.7f05e1ce.js",
    "revision": "7f3a0e9364bd7e196cb8fe15e238a6ca"
  },
  {
    "url": "assets/js/72.9f406510.js",
    "revision": "1ef8693f8b0801f5975d5f90a225fc81"
  },
  {
    "url": "assets/js/73.b6041d6d.js",
    "revision": "8fa212fc15b3391a8fe402b3b1b3fc07"
  },
  {
    "url": "assets/js/74.4100c25b.js",
    "revision": "c6eb68554dc7630e431421cfdfae64fd"
  },
  {
    "url": "assets/js/8.26afa2ee.js",
    "revision": "7ac6c9a546af7a6f5ba0858da6b67643"
  },
  {
    "url": "assets/js/9.421524b4.js",
    "revision": "176b9960fd7f2df95f42c45986d167e0"
  },
  {
    "url": "assets/js/app.acabcb14.js",
    "revision": "db3fd4d59f1f486ffc91aba08ad2e693"
  },
  {
    "url": "CSS/index.html",
    "revision": "c8f4b11a21542c1becf0d08e0f0e7319"
  },
  {
    "url": "CSS/动画.html",
    "revision": "086c089b7ca5cd541d01f9fef4147956"
  },
  {
    "url": "Git/hook工具.html",
    "revision": "8dc6c132f9a2039c87d0147d64c10a7b"
  },
  {
    "url": "Git/index.html",
    "revision": "37076303411846d3438211ec5e1c00bc"
  },
  {
    "url": "Git/合并多次提交.html",
    "revision": "4346d4521d58a788839161f080422fff"
  },
  {
    "url": "Git/命令清单.html",
    "revision": "2e8b2485ce4005b86aaac5f9f0c9b486"
  },
  {
    "url": "Git/回滚提交记录.html",
    "revision": "3ab183e43bd430c0d5a7fa07a7299dfd"
  },
  {
    "url": "Git/备忘录.html",
    "revision": "944b94382ce1d464091d29a2f1014a1e"
  },
  {
    "url": "Git/提交信息模板.html",
    "revision": "b8e57992126779a41151c7ba2215b12e"
  },
  {
    "url": "Git/语义化版本.html",
    "revision": "f75bb30bfa6ebb6094fdd6e7fa6fe64b"
  },
  {
    "url": "home/index.html",
    "revision": "8c2dc391230957c644188aef4fd05453"
  },
  {
    "url": "HTML/index.html",
    "revision": "725ee6805a0a1975d0a171ab7e2f5768"
  },
  {
    "url": "HTML/常用meta.html",
    "revision": "4e03cf9836a1cb114968985d05241dad"
  },
  {
    "url": "HTTP/DNS域名解析中A、AAAA、CNAME、MX、NS、TXT、SRV、SOA、PTR各项记录的作用.html",
    "revision": "14e6caf52eb89243e7459622362d97ad"
  },
  {
    "url": "HTTP/HTTP消息头.html",
    "revision": "f9d3aa8ff8f7799447de9367c32fdf8b"
  },
  {
    "url": "HTTP/index.html",
    "revision": "8fbf70fdbb8d1eea1d450f3f1fced161"
  },
  {
    "url": "HTTP/响应状态码.html",
    "revision": "1f9ac6f78b7ea341592d94bfa3975b0a"
  },
  {
    "url": "index.html",
    "revision": "59bbcbb5703db2f8d253273058abd2b1"
  },
  {
    "url": "JavaScript/Babel.html",
    "revision": "24eb2ab221736e9eacad1d9949a9a003"
  },
  {
    "url": "JavaScript/base64.html",
    "revision": "ec17f614b802fd0567d6b70a74c7e8cc"
  },
  {
    "url": "JavaScript/CSRF 攻击.html",
    "revision": "348ddc85ff4a009dc4d5f4f00c08811f"
  },
  {
    "url": "JavaScript/ESLint.html",
    "revision": "cfa1c14f72c7580152759af807c87cdb"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "8ab140c2199d62dac3dad105de2efe18"
  },
  {
    "url": "JavaScript/JS 原型继承和类式继承.html",
    "revision": "02db06c9e1f39813fe16629db79787c9"
  },
  {
    "url": "JavaScript/XSS 攻击.html",
    "revision": "7dc92bceff50c769ec6af46e794d2462"
  },
  {
    "url": "JavaScript/模块.html",
    "revision": "15bd92b8269da70bd0947af76514acd8"
  },
  {
    "url": "JavaScript/点击劫持.html",
    "revision": "5f411fadde233c01f64e26f81512959b"
  },
  {
    "url": "JavaScript/跨域不带cookie问题.html",
    "revision": "1a5195ae61a0bbc97498f5388fb699fc"
  },
  {
    "url": "Linux/index.html",
    "revision": "b8bde36c37a4b848c63d604e75de183f"
  },
  {
    "url": "Linux/OpenSSL.html",
    "revision": "658b237d109a51e13b6e06f32dbdcfd9"
  },
  {
    "url": "Linux/PATH.html",
    "revision": "5082e8ace2513987b3bea8c36174b789"
  },
  {
    "url": "Linux/ssh-keygen.html",
    "revision": "335edc14397e540ed2f100ec358d2bd9"
  },
  {
    "url": "Linux/vi的一些语法.html",
    "revision": "0827dee374c8df71d9c2570c4d1fb9ae"
  },
  {
    "url": "Linux/命令行- 和 --的区别.html",
    "revision": "271dd382c1f95bf1c26125ef850079c6"
  },
  {
    "url": "Linux/编码类型.html",
    "revision": "d64f525a0192baac1ee10990a6faa995"
  },
  {
    "url": "MACOS/「安全与隐私」中系统不显示「任何来源」.html",
    "revision": "a96d187ac855e4bc619321ef7e81f5a1"
  },
  {
    "url": "MACOS/brew 安装.html",
    "revision": "88b2a479a1623b0c7ba92950b3e8a5ef"
  },
  {
    "url": "MACOS/index.html",
    "revision": "06bff4cf9e1c96fb12c8696db18f5668"
  },
  {
    "url": "MACOS/Mac .DS_Store文件的处理.html",
    "revision": "1f6a533f7f70d3db971c0b0fc7e1a727"
  },
  {
    "url": "MACOS/终端工具.html",
    "revision": "03296fb2f42773caf18a7fb157461b3a"
  },
  {
    "url": "MACOS/终端配置代理.html",
    "revision": "659a283899ab3107308b90d36d14a0b5"
  },
  {
    "url": "MACOS/软件.html",
    "revision": "afe516de057da86a55aafe778a7dfa52"
  },
  {
    "url": "Node.js/index.html",
    "revision": "8c18338b9e32f69d833b10a6d7489bf2"
  },
  {
    "url": "Node.js/nodemon.html",
    "revision": "6ee82e290ab7d01eca391f63d7bc682f"
  },
  {
    "url": "Node.js/passport.html",
    "revision": "62b76f42adf523150ca6ddf19ab5f610"
  },
  {
    "url": "Node.js/PM2.html",
    "revision": "04c08b01262d59e6809277e43ba8ee58"
  },
  {
    "url": "Node.js/session.html",
    "revision": "be603b85c95f0ff91b9a736f58badf9a"
  },
  {
    "url": "Node.js/修改node_modules依赖库的文件.html",
    "revision": "801fa7d81ce63110ba914e3cc651091b"
  },
  {
    "url": "Node.js/包管理.html",
    "revision": "897d613bb34245a8a11b6f4451b3110d"
  },
  {
    "url": "Node.js/安装和版本管理.html",
    "revision": "34f9ed5469f4e38dc7d5fd22af2cdde5"
  },
  {
    "url": "Other/ab压力测试.html",
    "revision": "d6b56e1183cb10894b347620c9d06b00"
  },
  {
    "url": "Other/charles抓包工具.html",
    "revision": "72ae8111658ffd6919e8f3edbd4a3fb6"
  },
  {
    "url": "Other/Chrome 插件集.html",
    "revision": "85791a9fd4f999f900ff8403af346a5b"
  },
  {
    "url": "Other/index.html",
    "revision": "201926d550975ca8a92846960b1dd977"
  },
  {
    "url": "Other/menu/index.html",
    "revision": "a0211fccfd362843ddb25d7182102c46"
  },
  {
    "url": "Other/opencc.html",
    "revision": "db28ae36af0264f98d36904f55f0ea36"
  },
  {
    "url": "Other/Vs Code.html",
    "revision": "71db9f1b178656a09b9241c62339b799"
  },
  {
    "url": "React/index.html",
    "revision": "501c5b50dfc1f968a68a0659cfb046b9"
  },
  {
    "url": "TypeScript/index.html",
    "revision": "92b61f2c2c6ef403b2a123424b37331d"
  },
  {
    "url": "TypeScript/nest.js-DI.html",
    "revision": "f512929d32fb909626972dab24d6c3a4"
  },
  {
    "url": "TypeScript/nest.js笔记.html",
    "revision": "b7001937712422b17485771b6da48ecc"
  },
  {
    "url": "TypeScript/杂项笔记.html",
    "revision": "f596fdca1ef790b203f20816381f1322"
  },
  {
    "url": "数据库/index.html",
    "revision": "c421e16c48bf587ea37ba94de48dcfd1"
  },
  {
    "url": "数据库/mysql存储引擎.html",
    "revision": "4c8d8194691e8b7b6c6f5e7ffefcc19b"
  },
  {
    "url": "数据库/mysql语句.html",
    "revision": "c873d967f634403cab92c032de3e931b"
  },
  {
    "url": "数据库/redis命令.html",
    "revision": "e06188e36b669542d45951ceb56d0eff"
  },
  {
    "url": "数据库/索引的设计和使用.html",
    "revision": "acdccb71a56dd4b9c7371ceb9bd657ee"
  },
  {
    "url": "数据库/缓存的使用.html",
    "revision": "b074f178e2a494c37ac4be085d24ab67"
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
