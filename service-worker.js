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
    "revision": "04f4fd59c41d803e4646f2c2b4c02578"
  },
  {
    "url": "assets/css/0.styles.4df2a389.css",
    "revision": "877b6fb58ae90ece6099f2690f3a8b96"
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
    "url": "assets/js/10.d8a7a56b.js",
    "revision": "1eff8cea7e6836ae1da031f4b92bad79"
  },
  {
    "url": "assets/js/11.e1a1398d.js",
    "revision": "03c47da7dba5ed248c34c8905a4760e2"
  },
  {
    "url": "assets/js/12.0b005469.js",
    "revision": "81a0479133f609e2839daaa4184d53f7"
  },
  {
    "url": "assets/js/13.6723cf09.js",
    "revision": "b30789333ae714c9e10f9671a7ed340f"
  },
  {
    "url": "assets/js/14.47c97747.js",
    "revision": "bf00c69d48fffd6d789925349515fe0c"
  },
  {
    "url": "assets/js/15.b6140003.js",
    "revision": "84a7f81dd8adf69a579540d61f13402e"
  },
  {
    "url": "assets/js/16.4a5fd876.js",
    "revision": "8aab4a11a207078da351fcdb5990e719"
  },
  {
    "url": "assets/js/17.f482ae9f.js",
    "revision": "58845e48290dcbf2fae7846857cbd219"
  },
  {
    "url": "assets/js/18.b1d4a071.js",
    "revision": "9160c06ed6cfa5acabe0d74b6e5e67bc"
  },
  {
    "url": "assets/js/19.8acd9507.js",
    "revision": "2305b03f6e7142f872c2da801a0ac0fc"
  },
  {
    "url": "assets/js/2.52b8fe88.js",
    "revision": "7332e2f6d665994af550e1ae0f6fa9b1"
  },
  {
    "url": "assets/js/20.55c2e9ba.js",
    "revision": "dc28fa3a637af38177240b4c3753a079"
  },
  {
    "url": "assets/js/21.0d56cf3d.js",
    "revision": "28af5eb3bb17b47ec64eda6a780bd83d"
  },
  {
    "url": "assets/js/22.e9c5aa23.js",
    "revision": "80c1501b686db044b47115dc4f1626e1"
  },
  {
    "url": "assets/js/23.83879092.js",
    "revision": "bb6b4082727617116ba25f8d5e0fc339"
  },
  {
    "url": "assets/js/24.ede43c84.js",
    "revision": "6954b37f5aca057f9b4e8c745bf121ed"
  },
  {
    "url": "assets/js/25.814b822d.js",
    "revision": "d4b5cbcc85f486864a7eff59f0a61529"
  },
  {
    "url": "assets/js/26.e06c0466.js",
    "revision": "2bcaa1c0b10711e0353f02e49a43a38b"
  },
  {
    "url": "assets/js/27.73110ea8.js",
    "revision": "a949364e6bdd5bf67075ab2ca5e42627"
  },
  {
    "url": "assets/js/28.7ef06847.js",
    "revision": "fdd3b2fa866cb60671c642cc76673c7b"
  },
  {
    "url": "assets/js/29.73f4ea2e.js",
    "revision": "cca839b483df6827552d59254feab2d8"
  },
  {
    "url": "assets/js/3.33d5a5fa.js",
    "revision": "8d8907131bfc77dedf9ed807a12b9418"
  },
  {
    "url": "assets/js/30.04b47698.js",
    "revision": "a5eb29055bd5f3f8f45165d57b11d52a"
  },
  {
    "url": "assets/js/31.e595342d.js",
    "revision": "b3cfe4a88d6f26158bb70f779be51127"
  },
  {
    "url": "assets/js/32.053f802f.js",
    "revision": "03c0282b2b4f9d7b29b7bd21edb51051"
  },
  {
    "url": "assets/js/33.ceb08fcc.js",
    "revision": "511e7b393ae91882c542e87bd50af63d"
  },
  {
    "url": "assets/js/34.70d027e2.js",
    "revision": "ef03eff528bf3ad38b9ca5959a7536ef"
  },
  {
    "url": "assets/js/35.f16b25fd.js",
    "revision": "f0b1275be167742f93002aaf2ad62419"
  },
  {
    "url": "assets/js/36.9b77895f.js",
    "revision": "eb1aa303533f46fbdeeb2d72ebcfc9ac"
  },
  {
    "url": "assets/js/37.bc3812b0.js",
    "revision": "e7837d63e655bb2b4c9b5fa0f122b628"
  },
  {
    "url": "assets/js/38.f5248bac.js",
    "revision": "4c0aead726f3f83b51e0084f347b6609"
  },
  {
    "url": "assets/js/39.7f33d10d.js",
    "revision": "1c2b76d0e3161a2c42e8bdefe3852aa6"
  },
  {
    "url": "assets/js/4.5fe31e21.js",
    "revision": "874ccabcd0bfed32ad3a00f012d7ebab"
  },
  {
    "url": "assets/js/40.38402f14.js",
    "revision": "708c3363801b83c56c9984f82d79913b"
  },
  {
    "url": "assets/js/41.67575b9a.js",
    "revision": "b354b94534e8636f5ff1184eeffa7411"
  },
  {
    "url": "assets/js/42.ad5941fc.js",
    "revision": "75a4794571af05f8b65f9396d9bcd521"
  },
  {
    "url": "assets/js/43.73eff0e9.js",
    "revision": "f20b67124d463cc2395ba74edb826bef"
  },
  {
    "url": "assets/js/44.a1aaebac.js",
    "revision": "e2ff8ec7d2c8dc786062dba4b21dc89d"
  },
  {
    "url": "assets/js/45.943e312b.js",
    "revision": "a727df141497e9f39fe67829c48b9dec"
  },
  {
    "url": "assets/js/46.5f23822c.js",
    "revision": "f68841d579f7fb6ad551702cd64a4737"
  },
  {
    "url": "assets/js/47.f3d7b97f.js",
    "revision": "d907df2b9832b9c155029fe4a7d2181b"
  },
  {
    "url": "assets/js/48.eb63e2c3.js",
    "revision": "a9fc5cdb125b4b13fc0fdea843a5f47d"
  },
  {
    "url": "assets/js/49.3b78ed9b.js",
    "revision": "bb88d9416bdf9490250d83d3f02d0e2d"
  },
  {
    "url": "assets/js/5.24dcd0c0.js",
    "revision": "400885d0938e71e5330576319d0ee325"
  },
  {
    "url": "assets/js/50.9ff6f64c.js",
    "revision": "44a19155afb5e3437555e5c70bd78fc4"
  },
  {
    "url": "assets/js/51.fa4f29ed.js",
    "revision": "bf7bd91223e446ce701d73dbf7367ccb"
  },
  {
    "url": "assets/js/52.68ecca72.js",
    "revision": "cbfca38ae42f045ec9b2d5b5e9a47af9"
  },
  {
    "url": "assets/js/53.e3f7c9be.js",
    "revision": "82169bfa73706926d86d45fba75824bf"
  },
  {
    "url": "assets/js/54.abeeb61f.js",
    "revision": "3b8c9042af74044787e40fd0ab10e6c1"
  },
  {
    "url": "assets/js/55.0165c666.js",
    "revision": "27ba167678371449c8da7028b78f20f1"
  },
  {
    "url": "assets/js/56.617344b2.js",
    "revision": "592dc114ff2763434c85126405071448"
  },
  {
    "url": "assets/js/57.f43ec4fe.js",
    "revision": "5d769e6ffcc1d3b45c924a67970884e7"
  },
  {
    "url": "assets/js/58.b7846686.js",
    "revision": "81f33e5ea807fffc998f3528f07be3a8"
  },
  {
    "url": "assets/js/59.81c57ac2.js",
    "revision": "121ede1724864e5f5c68e27485033e55"
  },
  {
    "url": "assets/js/6.41427e7d.js",
    "revision": "5e20c8b9a7eaa132a7947ca26d278c66"
  },
  {
    "url": "assets/js/60.5ccc542a.js",
    "revision": "901daf3e557f26d91abe0f51ab2d2a97"
  },
  {
    "url": "assets/js/61.6b8bea16.js",
    "revision": "d187c565ee5927ae892ed053872d2eec"
  },
  {
    "url": "assets/js/62.a3087a81.js",
    "revision": "1b2f557177811205a0ea523f636320d3"
  },
  {
    "url": "assets/js/63.6d2453be.js",
    "revision": "634f0e5e3cfe38aef839e397bde01866"
  },
  {
    "url": "assets/js/64.38c7b42e.js",
    "revision": "551b3956a2ad740bf3d3ee14bfca0748"
  },
  {
    "url": "assets/js/65.231cd964.js",
    "revision": "006fed869c4854073ae75c861fcfccf3"
  },
  {
    "url": "assets/js/66.2ea53904.js",
    "revision": "cbaa8e7c526ebf65c9f7b18df27df01b"
  },
  {
    "url": "assets/js/67.94d1f150.js",
    "revision": "9acbca461abcaa65eb57b32bd3327831"
  },
  {
    "url": "assets/js/68.6be8c24e.js",
    "revision": "4163d842514fab1f06649e072e885ebe"
  },
  {
    "url": "assets/js/69.36164d8d.js",
    "revision": "217bf96de7b6671ea51b77c186b43ec4"
  },
  {
    "url": "assets/js/7.641217d2.js",
    "revision": "b2d97e7849cdb02cd01504973e1be203"
  },
  {
    "url": "assets/js/70.c5b191aa.js",
    "revision": "f3ee4c515df55483e727663e18e2ecd2"
  },
  {
    "url": "assets/js/71.61534f0a.js",
    "revision": "d61cdd48f60a90e1a435aca724d5af0e"
  },
  {
    "url": "assets/js/72.8f7cd913.js",
    "revision": "27078485bbc6bc7b0bbf79d2e5589cbf"
  },
  {
    "url": "assets/js/73.62c8dfd2.js",
    "revision": "bbaecf82437dfb95b4e7251845a261dd"
  },
  {
    "url": "assets/js/74.067ab351.js",
    "revision": "74295e8dffe0bdb435c9f5c8a3cca071"
  },
  {
    "url": "assets/js/75.3defe1a4.js",
    "revision": "f81e8a10f2ab6794adde58192c5488f9"
  },
  {
    "url": "assets/js/76.b32c56e0.js",
    "revision": "d87528b5823091b71be0c4a5a168a91f"
  },
  {
    "url": "assets/js/77.98ea95c4.js",
    "revision": "dcc1094cdb2870dd986b5ba38dd932f5"
  },
  {
    "url": "assets/js/78.70258b33.js",
    "revision": "61967c3879da8814e6c165f27c941994"
  },
  {
    "url": "assets/js/79.c97a6488.js",
    "revision": "a4910fccf6773052fb22dac6ccefcd28"
  },
  {
    "url": "assets/js/8.5e9ed6ea.js",
    "revision": "68adb63755d1a58d304bf90b93f57274"
  },
  {
    "url": "assets/js/9.0c421dcc.js",
    "revision": "6b8fd25b5ecdece155901f260f4a67b6"
  },
  {
    "url": "assets/js/app.7b599a00.js",
    "revision": "bfd3df121ce81a5efab54150428c11cd"
  },
  {
    "url": "CSS/index.html",
    "revision": "7d7420a8d4aba6802efd1a284a27b6b1"
  },
  {
    "url": "CSS/动画.html",
    "revision": "972a80d0f1905808b1c9a21c67ffd228"
  },
  {
    "url": "Git/hook工具.html",
    "revision": "e8aba439dea95d8fc0cc8adcaf924bc8"
  },
  {
    "url": "Git/index.html",
    "revision": "924cf4618170e2c19ecfb270e06bd7a4"
  },
  {
    "url": "Git/合并多次提交.html",
    "revision": "d6108f38e46fa0ba22f864aaaa6231eb"
  },
  {
    "url": "Git/命令清单.html",
    "revision": "aa431285e59b92e3d457c62de1ce69a2"
  },
  {
    "url": "Git/回滚提交记录.html",
    "revision": "77d0da17c462be496be8ad37d5d0097c"
  },
  {
    "url": "Git/备忘录.html",
    "revision": "36c022e5d45ab997bf3670badb58b448"
  },
  {
    "url": "Git/提交信息模板.html",
    "revision": "01c3ad9aa4bc3ef6d9aa675531682fd0"
  },
  {
    "url": "Git/语义化版本.html",
    "revision": "0a3ae1d6377d12ad038fcc70eba58cf2"
  },
  {
    "url": "home/index.html",
    "revision": "e2c5247144558e1f47aca963dbced15f"
  },
  {
    "url": "HTML/index.html",
    "revision": "835b1857cab3be40d0cb694751a90383"
  },
  {
    "url": "HTML/常用meta.html",
    "revision": "54a1df97900572e42dd77fb9bbdf4986"
  },
  {
    "url": "HTTP/DNS域名解析中A、AAAA、CNAME、MX、NS、TXT、SRV、SOA、PTR各项记录的作用.html",
    "revision": "0d74dc8f7040d543d519be61bda4a85b"
  },
  {
    "url": "HTTP/HTTP消息头.html",
    "revision": "6ef85e4f846dce375d6c7f73c6f59a98"
  },
  {
    "url": "HTTP/index.html",
    "revision": "b5fa75bb546b4f7ce87ffb823d804930"
  },
  {
    "url": "HTTP/响应状态码.html",
    "revision": "9f65516bee72827bb4dec87e0a90e967"
  },
  {
    "url": "index.html",
    "revision": "9f9808c8d01856af0ba87a680760f0c4"
  },
  {
    "url": "JavaScript/Babel.html",
    "revision": "82f1d614dcb20f5ab25b99d255476f65"
  },
  {
    "url": "JavaScript/base64.html",
    "revision": "008a5e6b8477bc3956c3d7b10ad619f4"
  },
  {
    "url": "JavaScript/CSRF 攻击.html",
    "revision": "46bb5c86364303f25986a7f8a40bed8e"
  },
  {
    "url": "JavaScript/ESLint.html",
    "revision": "a2347a38a42991619fd7ef70f5b55e61"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "04855a94dd0c0730ddc2bd373f12cd93"
  },
  {
    "url": "JavaScript/JS 原型继承和类式继承.html",
    "revision": "413b88e2299d6c4163435aafde3ef5c1"
  },
  {
    "url": "JavaScript/XSS 攻击.html",
    "revision": "ad566c6c81f87a348963f6b237379b80"
  },
  {
    "url": "JavaScript/模块.html",
    "revision": "d7895b7ddb24121ecb101c9c814736eb"
  },
  {
    "url": "JavaScript/点击劫持.html",
    "revision": "4bd437f14f4389a7978d90d98152f0dc"
  },
  {
    "url": "JavaScript/跨域不带cookie问题.html",
    "revision": "457a194d00ad9357959bd38adc75e585"
  },
  {
    "url": "Linux/index.html",
    "revision": "4549e13f5f5c3baf65cb84cc7f5bace5"
  },
  {
    "url": "Linux/OpenSSL.html",
    "revision": "0fb9f31ba620bec56a28dd40ded395b8"
  },
  {
    "url": "Linux/PATH.html",
    "revision": "994b8e3f1f7d88b2632f42d6807e36e7"
  },
  {
    "url": "Linux/ssh-keygen.html",
    "revision": "b5e6f82d6aa60d95f2b7308a933b58d2"
  },
  {
    "url": "Linux/vi的一些语法.html",
    "revision": "6f4fabca4f721a2b3f0c00f3a22f4f7d"
  },
  {
    "url": "Linux/命令行- 和 --的区别.html",
    "revision": "3bb39ebe85a40768ca17782eb3aee1e4"
  },
  {
    "url": "Linux/编码类型.html",
    "revision": "ef8a268692c7be7b9551fafa03d31cc2"
  },
  {
    "url": "MACOS/「安全与隐私」中系统不显示「任何来源」.html",
    "revision": "782fbbbbc3fa821b963ddddc5729209d"
  },
  {
    "url": "MACOS/brew 安装.html",
    "revision": "40274cfd399ab929264bcec329ed9d74"
  },
  {
    "url": "MACOS/index.html",
    "revision": "57a63c1b6a09fb34aead4bc0b53533c3"
  },
  {
    "url": "MACOS/Mac .DS_Store文件的处理.html",
    "revision": "b3f2f5c468337bdd876bd26e4f93f20e"
  },
  {
    "url": "MACOS/终端工具.html",
    "revision": "247df1bea1da8b45f9f292463c527a33"
  },
  {
    "url": "MACOS/终端配置代理.html",
    "revision": "c71bf2464a346c8f4b1256b749715dd3"
  },
  {
    "url": "MACOS/软件.html",
    "revision": "5af6a931e40ad965735fdd003148fc32"
  },
  {
    "url": "Node.js/index.html",
    "revision": "90ca5e7fa47a4a655851bc8330fb2158"
  },
  {
    "url": "Node.js/nodemon.html",
    "revision": "9ab6213de21fa8b1e4967c943ab94ca2"
  },
  {
    "url": "Node.js/passport.html",
    "revision": "219c0db8272af8cbfd3f7012f5d7fcb0"
  },
  {
    "url": "Node.js/PM2.html",
    "revision": "f0e0d7182a003ac260e0176d6e7c3b4a"
  },
  {
    "url": "Node.js/session.html",
    "revision": "1e5f80e4e246e9debd371a53af14a706"
  },
  {
    "url": "Node.js/修改node_modules依赖库的文件.html",
    "revision": "07f88e198c0d66592e77502ddb067c47"
  },
  {
    "url": "Node.js/包管理.html",
    "revision": "bb497db84fcb3ac25a994f5f4bbb2864"
  },
  {
    "url": "Node.js/安装和版本管理.html",
    "revision": "06dd243ff74701066bea91c6dcb3bd5f"
  },
  {
    "url": "Node.js/常用库汇总.html",
    "revision": "e04711ed80611cee795c01a2c200c61f"
  },
  {
    "url": "Other/ab压力测试.html",
    "revision": "9084f8e0e087173450af1ed1a045d46c"
  },
  {
    "url": "Other/charles抓包工具.html",
    "revision": "a9339e22fc1189c0713b23b85567586f"
  },
  {
    "url": "Other/Chrome 插件集.html",
    "revision": "bc4980f5fbb4d94652aa4d2f220edc07"
  },
  {
    "url": "Other/index.html",
    "revision": "45425e73e208da890c4e147d1f22c832"
  },
  {
    "url": "Other/menu/index.html",
    "revision": "e73bac7410e136c4fbc7c468543dba01"
  },
  {
    "url": "Other/opencc.html",
    "revision": "c316997367fc773f53e26c18e4f036c7"
  },
  {
    "url": "Other/q.html",
    "revision": "93f6cbe8e5cc93f5ed5778b1f2c9af77"
  },
  {
    "url": "Other/Vs Code.html",
    "revision": "5ec42aa888d110217567ab103f4d46b4"
  },
  {
    "url": "Other/vsc调试.html",
    "revision": "f9897a90be23eff810614880902a39d6"
  },
  {
    "url": "React/index.html",
    "revision": "ff9b4012ffa1158c64686fffef04bd0d"
  },
  {
    "url": "TypeScript/index.html",
    "revision": "69218750b953277a8ea38e297c682f0b"
  },
  {
    "url": "TypeScript/nest.js-DI.html",
    "revision": "121a66b21581c0de38c8a3d6140bc9db"
  },
  {
    "url": "TypeScript/nest.js笔记.html",
    "revision": "a4e85cf61c8ef6dd17d1996778f70f7c"
  },
  {
    "url": "TypeScript/杂项笔记.html",
    "revision": "c2315ead57ea2e8d7888d7f8a0e0f9bf"
  },
  {
    "url": "数据库/index.html",
    "revision": "258b1451d27b7f972e5cfcfb968f1717"
  },
  {
    "url": "数据库/mysql存储引擎.html",
    "revision": "6a133a2fb87b80da6c82fccd3b907d9e"
  },
  {
    "url": "数据库/mysql语句.html",
    "revision": "bbd276b7ff174955c8fff976225e1448"
  },
  {
    "url": "数据库/redis命令.html",
    "revision": "0805f5e64e4c68ff516e739a96854abb"
  },
  {
    "url": "数据库/索引的设计和使用.html",
    "revision": "61f992e15d4cc4ca82cb014581a8bfba"
  },
  {
    "url": "数据库/缓存的使用.html",
    "revision": "66c05100f77cbc6fb9eef69d9e5b87c5"
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
