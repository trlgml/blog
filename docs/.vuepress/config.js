module.exports = {
  title: '妍辰~',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'keywords', itemprop: 'keywords', content: 'JavaScript Node.js' }],
    ['meta', { property: 'og:title', content: 'JavaScript Node.js' }],
    ['meta', { property: 'og:description', content: 'JavaScript Node.js' }],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?3673cdd1fee1a108e55a88e9d67f4f07";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })()`,
    ],
  ],
  description: 'JavaScript Node.js',
  themeConfig: {
    // lastUpdated: 'Last Updated',
    nav: [
      // {
      //   text: '简历',
      //   link: '/'
      // },
      {
        text: '目录',
        link: '/home/'
      },
      {
        text: 'Github',
        link: 'https://trlgml.github.io/blog/'
      },
    ],
    sidebar: {
      '/home/': [],
      '/JavaScript/': [
        ['', 'JavaScript'],
      ],
      '/HTML/': [
        ['', 'HTML'],
      ],
      '/CSS/': [
        ['', 'CSS'],
      ],
      '/Node.js/': [
        ['', 'Node.js'],
        ['安装和版本管理', '安装和版本管理'],
        ['包管理', '包管理'],
        ['PM2', 'PM2'],
      ],
      '/React/': [
        ['', 'React'],
      ],
      '/Linux/': [
        ['', 'Linux'],
        ['OpenSSL', 'OpenSSL'],
        ['ssh-keygen', 'ssh-keygen'],
      ],
      '/Git/': [
        ['', 'Git'],
      ],
      '/Other/': [
        ['', '其他'],
        {
          title: "menu",
          name: "menu",
          collapsable: true,
          children: [
            ['menu/', '子菜单'],
          ]
        }
      ],
    }
  },
  plugins: [
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/nprogress"],   // 加载进度条
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  sidebarDepth: '0'
};
