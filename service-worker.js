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
    "revision": "eb02995351aca63dd40f60121512a51d"
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
    "url": "assets/js/10.5b0628b1.js",
    "revision": "bc973d3fd6d27bb9742f69e53454d25f"
  },
  {
    "url": "assets/js/11.17dfdc21.js",
    "revision": "6c38a2b6aefa90f2d47c1d9d892a3bd8"
  },
  {
    "url": "assets/js/12.54b996df.js",
    "revision": "5ff2281073bf537b6abd9f7872710c71"
  },
  {
    "url": "assets/js/13.f2fd2b18.js",
    "revision": "5fd159eed73ec8269ef5b96bbd9f4620"
  },
  {
    "url": "assets/js/14.a741cfca.js",
    "revision": "91fefb554d95b1eba1e4e66e1797c72a"
  },
  {
    "url": "assets/js/15.314e4d21.js",
    "revision": "2f645aa9115b63eef20c9302ef52b060"
  },
  {
    "url": "assets/js/16.803cc74d.js",
    "revision": "bacb505e60ba2bf5e266487a711f012a"
  },
  {
    "url": "assets/js/17.b510b828.js",
    "revision": "1104e71969cc43d0bb8d1f74325cd696"
  },
  {
    "url": "assets/js/18.0eaa886f.js",
    "revision": "7acd636625f2c4864484fb2c494bda73"
  },
  {
    "url": "assets/js/19.0f2257b1.js",
    "revision": "5d5675ff5a64a20216edf7ba95553544"
  },
  {
    "url": "assets/js/2.272c6da6.js",
    "revision": "d8c31acf4cc47d55202da4300f9d3262"
  },
  {
    "url": "assets/js/20.10a7b459.js",
    "revision": "05eb2c4f0d7fa57ab5a1b10113362dac"
  },
  {
    "url": "assets/js/21.0ad56093.js",
    "revision": "79c22370835cdcaca98a7ce4c87157fd"
  },
  {
    "url": "assets/js/22.bdf9e33d.js",
    "revision": "1b3101d680e056a4b9239915c41669d9"
  },
  {
    "url": "assets/js/3.2a382e78.js",
    "revision": "8258fbdb96ee608cb1e249df01e3c6de"
  },
  {
    "url": "assets/js/4.bb341e63.js",
    "revision": "ff1d16427c8fd711b7be211201f7c1f5"
  },
  {
    "url": "assets/js/5.c4d85680.js",
    "revision": "2618c2ba9ad3e4601c1b2253d4228d4f"
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
    "url": "assets/js/8.4c1847b5.js",
    "revision": "9fd8ed8a9e87ca31a6853fdcd9f51d02"
  },
  {
    "url": "assets/js/9.5ee77623.js",
    "revision": "9999b19907dd763ae23fd56a0af21d02"
  },
  {
    "url": "assets/js/app.a69f8e29.js",
    "revision": "4b50cbc827ad1201234f524048a03fb2"
  },
  {
    "url": "CSS/index.html",
    "revision": "b13b0bfd909880db96ff51045a3c6948"
  },
  {
    "url": "Git/index.html",
    "revision": "5370bb0a36bb348340f9194e8eab29ee"
  },
  {
    "url": "home/index.html",
    "revision": "3f3ce299968b9e592ec91a505adb16b6"
  },
  {
    "url": "HTML/index.html",
    "revision": "0a5c32512df98fd7d5da9a62b768970c"
  },
  {
    "url": "index.html",
    "revision": "c85ffa56d6494bdb6de7e24fb1f94445"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "641e92aeb0bdc251ea0a57b0c6779359"
  },
  {
    "url": "Linux/index.html",
    "revision": "72bc439fc2952aa71959d6f6b8393a5c"
  },
  {
    "url": "Linux/OpenSSL.html",
    "revision": "6052a0f28f8343ebce4926821a38fd1b"
  },
  {
    "url": "Linux/ssh-keygen.html",
    "revision": "5236a85b11f56373e2422483349c3af2"
  },
  {
    "url": "Node.js/index.html",
    "revision": "ad33c7df63674f78bb7c02d07d1a1a7a"
  },
  {
    "url": "Node.js/PM2.html",
    "revision": "7401af8a1e59e1bd0910a5277e46310e"
  },
  {
    "url": "Node.js/包管理.html",
    "revision": "efdad0aa62004363f9b27fb116a6e60c"
  },
  {
    "url": "Node.js/安装和版本管理.html",
    "revision": "b5f3ab80c35235a3a75481aa97198aa7"
  },
  {
    "url": "Other/index.html",
    "revision": "2c0a376dc5c929c9f8f3fd6774f414ec"
  },
  {
    "url": "Other/menu/index.html",
    "revision": "151e0b176a2fad34104cfb14a2a22d95"
  },
  {
    "url": "React/index.html",
    "revision": "93fb77d7f258e53451f66c08357f9d9f"
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
