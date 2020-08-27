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
    "revision": "8b182389ca30d6bce591bade878ffafe"
  },
  {
    "url": "assets/css/0.styles.519963dd.css",
    "revision": "3bed52d1204c65f937ad4197caa5d0c5"
  },
  {
    "url": "assets/img/1598250450341.1ac026c2.jpg",
    "revision": "1ac026c2d8273011a5c0d2a8b59758d4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4e2cb940.js",
    "revision": "4bb3b5e160c0cbd0fd793a3c820e590b"
  },
  {
    "url": "assets/js/11.021b7cc6.js",
    "revision": "e5f57f2cf71a5c7261b9c4b0d4634820"
  },
  {
    "url": "assets/js/12.e8866b98.js",
    "revision": "7845036dca6a4d98dcf6b3286a9e2cca"
  },
  {
    "url": "assets/js/13.d7504f38.js",
    "revision": "114bb4544bc6a90c35a113a3042a3f1e"
  },
  {
    "url": "assets/js/14.3d3e0959.js",
    "revision": "0456f2129734034fce2207e32b9ed184"
  },
  {
    "url": "assets/js/15.49da7f4e.js",
    "revision": "b806423ff97a709ef4afd12268fe629f"
  },
  {
    "url": "assets/js/16.dc12210a.js",
    "revision": "6eb6532ce1c3e1fb2bcdafb4716e9ee8"
  },
  {
    "url": "assets/js/17.b969adda.js",
    "revision": "7d4a81c981b8367fde9e91a724a6163c"
  },
  {
    "url": "assets/js/18.b977e223.js",
    "revision": "1d03c70e6334661131eed4598c3f98af"
  },
  {
    "url": "assets/js/19.2074f0f6.js",
    "revision": "11fed6223adda17b66270bf18ac6a840"
  },
  {
    "url": "assets/js/2.272c6da6.js",
    "revision": "d8c31acf4cc47d55202da4300f9d3262"
  },
  {
    "url": "assets/js/20.61bf4c8e.js",
    "revision": "2776386c75921fae883e1828299f9496"
  },
  {
    "url": "assets/js/21.17fab134.js",
    "revision": "3226986f196c54d42bf859d7313b238e"
  },
  {
    "url": "assets/js/22.5dd0ad1b.js",
    "revision": "04bfd47908330c0244d2beea04473e1d"
  },
  {
    "url": "assets/js/23.d8a25e70.js",
    "revision": "d60c7e7aeca2e2da016a330b1ad887d6"
  },
  {
    "url": "assets/js/24.ee2205f8.js",
    "revision": "48dc76fd99ab69f81e8e16883d83bed9"
  },
  {
    "url": "assets/js/25.f2d70a23.js",
    "revision": "bab7eb98875ba9e87af0a20121a87753"
  },
  {
    "url": "assets/js/26.8affd8f7.js",
    "revision": "2b5163f6e67b71bb02f03f47b3c965c3"
  },
  {
    "url": "assets/js/27.39af6414.js",
    "revision": "75a027176972f7696fb61133364f4a21"
  },
  {
    "url": "assets/js/28.8aa380ae.js",
    "revision": "679f9ff71bb036490851e5feac5b721a"
  },
  {
    "url": "assets/js/29.6fd970ed.js",
    "revision": "680cc893b9348a9f6c48fc9794cefbde"
  },
  {
    "url": "assets/js/3.4c2167e5.js",
    "revision": "740271afe9bd1ee4edfb6d5a9336030d"
  },
  {
    "url": "assets/js/30.3db650a5.js",
    "revision": "1e4202217e3f81a1ccf57c780736ba32"
  },
  {
    "url": "assets/js/31.3a5fbf0b.js",
    "revision": "7e6a63f10a0c50c2acf4bfaebc6f9002"
  },
  {
    "url": "assets/js/32.027296c1.js",
    "revision": "4f8280d6f0fec6eb3de6f2d0294c24c5"
  },
  {
    "url": "assets/js/33.4a3b9369.js",
    "revision": "4005a81983c1f8878570da5a65c8e75a"
  },
  {
    "url": "assets/js/34.23cd9086.js",
    "revision": "14eda4fa449a58677712d11e6982b89e"
  },
  {
    "url": "assets/js/35.2b4f598f.js",
    "revision": "2a2522643e632ecd88bb84644fb3de3f"
  },
  {
    "url": "assets/js/36.f894129d.js",
    "revision": "4048aad748f52504658cba43c8105af8"
  },
  {
    "url": "assets/js/37.b2109f0d.js",
    "revision": "0d80c0d79873c205288956780ef56799"
  },
  {
    "url": "assets/js/38.3936c4a7.js",
    "revision": "c7bba43c684f3fbe58bcefd4a5e0fb03"
  },
  {
    "url": "assets/js/39.1e85e682.js",
    "revision": "325a0838c83d9f42b0bbfbfcf91ddd9d"
  },
  {
    "url": "assets/js/4.3fc220be.js",
    "revision": "ae5d613f1a3ac23c9ba92103dd2f00ba"
  },
  {
    "url": "assets/js/40.19195c14.js",
    "revision": "05ad9802a379b42d991eff6d455b72cd"
  },
  {
    "url": "assets/js/41.a7b31ee5.js",
    "revision": "5a4c9719d7f4d8ebb07b1e16df5c8915"
  },
  {
    "url": "assets/js/42.b07df96e.js",
    "revision": "9dc5f506ed60c91e03c84529f31adfb9"
  },
  {
    "url": "assets/js/43.62b5869e.js",
    "revision": "117e2924867f75b11f4d625286de3f18"
  },
  {
    "url": "assets/js/44.4e7d770a.js",
    "revision": "428e0e86ed9dc23d4638a8f214bdf2c4"
  },
  {
    "url": "assets/js/45.7f18e125.js",
    "revision": "b37f6f7ad023e138ae91f0470ebffc0d"
  },
  {
    "url": "assets/js/46.22d9d0ae.js",
    "revision": "108f1cc16e59f4fa49dd72f770a23bf2"
  },
  {
    "url": "assets/js/5.c8fedf2a.js",
    "revision": "bbaf3032afa76dbdd017efb97ff8d7da"
  },
  {
    "url": "assets/js/6.a67beace.js",
    "revision": "89fea1ab04c8b20e5cfb8ee8441d87bb"
  },
  {
    "url": "assets/js/7.12ec32d5.js",
    "revision": "37c75f9081367674a82d58a835b15b60"
  },
  {
    "url": "assets/js/8.8034232f.js",
    "revision": "1a1cdce5047a62de35204a944e880760"
  },
  {
    "url": "assets/js/9.8e739b43.js",
    "revision": "f37b4485e4225c8e728b785f3e4a2b8f"
  },
  {
    "url": "assets/js/app.18cdfc2c.js",
    "revision": "d28ba3c979b71518da913ecc5b934d74"
  },
  {
    "url": "CSS/index.html",
    "revision": "17aa77283fc6f1883bf9ba987a683678"
  },
  {
    "url": "CSS/动画.html",
    "revision": "3e85f174014737e4990501fa3178dcc2"
  },
  {
    "url": "Git/index.html",
    "revision": "9f506295fa39dd7ad186e0f1dd712cf4"
  },
  {
    "url": "Git/命令清单.html",
    "revision": "a0323feec2a69ece52565e0049db0773"
  },
  {
    "url": "Git/回滚提交记录.html",
    "revision": "bba8b246b32185151c3013fcf9a5ad40"
  },
  {
    "url": "Git/提交信息模板.html",
    "revision": "fd157eb9b3a4373a87476bfb5b89a92c"
  },
  {
    "url": "Git/语义化版本.html",
    "revision": "92f40cb1d59518035fbdf053e323c49b"
  },
  {
    "url": "home/index.html",
    "revision": "a59ba450dbfe5122c371763c43ebd68a"
  },
  {
    "url": "HTML/index.html",
    "revision": "15f98a3ce5fdd085ef8f24e6d9823657"
  },
  {
    "url": "HTML/常用meta.html",
    "revision": "b72a909de28c10ed7ebff95f2400cfce"
  },
  {
    "url": "HTTP/index.html",
    "revision": "4456ea6458d285b983e16b2af664c732"
  },
  {
    "url": "HTTP/响应状态码.html",
    "revision": "49aadbca182e0bb107037fbf6e764411"
  },
  {
    "url": "index.html",
    "revision": "09e48428bde1aa4cb0cad8e20528927b"
  },
  {
    "url": "JavaScript/ESLint.html",
    "revision": "21edb3bc622246c3e5a0214dd5d5d9d4"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "11b3001aed5e30361bcfea4a70586f31"
  },
  {
    "url": "Linux/index.html",
    "revision": "6f7e2227e6d9b569544f897cccece05e"
  },
  {
    "url": "Linux/OpenSSL.html",
    "revision": "78a08096b6e73dbd45db8d37ebd2e4fa"
  },
  {
    "url": "Linux/PATH.html",
    "revision": "9fd3a27baf73ddfbc8cb0a33863c2a92"
  },
  {
    "url": "Linux/ssh-keygen.html",
    "revision": "7234b75d9dfc7f44a55b0df6a0e98c10"
  },
  {
    "url": "Linux/vi的一些语法.html",
    "revision": "a5bdc882f5f6e6936a6d98ace3ea2e5f"
  },
  {
    "url": "Linux/编码类型.html",
    "revision": "324b658d8371a1f057411b7413d5c664"
  },
  {
    "url": "MACOS/「安全与隐私」中系统不显示「任何来源」.html",
    "revision": "6423d467fcbf4e2ce496044aa0a5654c"
  },
  {
    "url": "MACOS/brew 安装.html",
    "revision": "ede04d476a50176b40ade2fce4ccf8b2"
  },
  {
    "url": "MACOS/index.html",
    "revision": "3271df206f83014529bca2d68ba4102e"
  },
  {
    "url": "MACOS/Mac .DS_Store文件的处理.html",
    "revision": "12f581ae5427117aa98f270bcd4c8cb5"
  },
  {
    "url": "MACOS/终端工具.html",
    "revision": "74a1b7edb03b2eb787e8b22e16377933"
  },
  {
    "url": "MACOS/软件.html",
    "revision": "f48bcb6032a0c4b9d3e39e437521736f"
  },
  {
    "url": "Node.js/index.html",
    "revision": "465d879300a9f8036a7b57a4d84736df"
  },
  {
    "url": "Node.js/PM2.html",
    "revision": "6e89267df3e20358667bce96444ea2c8"
  },
  {
    "url": "Node.js/包管理.html",
    "revision": "12d342c6ee6245ae0e4b3e6ef1e0c82e"
  },
  {
    "url": "Node.js/安装和版本管理.html",
    "revision": "fcba798b344ae9ab5e94f281b2f8b7b5"
  },
  {
    "url": "Other/index.html",
    "revision": "d3aebfc49a7f91a5bd178eb97350904b"
  },
  {
    "url": "Other/menu/index.html",
    "revision": "ed01eb104d4c9278413cad0f7200a602"
  },
  {
    "url": "React/index.html",
    "revision": "8fd419117a0329cbd453f82c00466519"
  },
  {
    "url": "TypeScript/index.html",
    "revision": "3af506a59cfdf304a36eb738a2a906af"
  },
  {
    "url": "TypeScript/nest.js-DI.html",
    "revision": "f94024cedee3e65e0d5da0bfb322a1bc"
  },
  {
    "url": "TypeScript/nest.js笔记.html",
    "revision": "d8b72621dc6ee37d8987d9e6399a46ef"
  },
  {
    "url": "数据库/index.html",
    "revision": "7c47898e5993d4bd3f871270ee0b9bb6"
  },
  {
    "url": "数据库/redis命令.html",
    "revision": "61f3698f5ce1cb80a06dba062d20f44c"
  },
  {
    "url": "数据库/缓存的使用.html",
    "revision": "00b43f9b1b5d4f1bb2f79827384fc199"
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
