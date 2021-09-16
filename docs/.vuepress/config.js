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
        link: 'https://github.com/trlgml/blog'
      },
    ],
    sidebar: {
      '/home/': [],
      '/JavaScript/': [
        ['', 'JavaScript'],
        ['ESLint', 'ESLint'],
        ['Babel', 'Babel'],
        ['JS 原型继承和类式继承', 'JS 原型继承和类式继承'],
        ['模块', '模块'],
        ['跨域不带cookie问题', '跨域不带cookie问题'],
        ['点击劫持', '点击劫持'],
        ['CSRF 攻击', 'CSRF 攻击'],
        ['XSS 攻击', 'XSS 攻击'],
        ['base64', 'base64'],
      ],
      '/HTML/': [
        ['', 'HTML'],
        ['常用meta', '常用meta'],
      ],
      '/CSS/': [
        ['', 'CSS'],
        ['动画', '动画'],
      ],
      '/Node.js/': [
        ['', 'Node.js'],
        ['安装和版本管理', '安装和版本管理'],
        ['包管理', '包管理'],
        ['PM2', 'PM2'],
        ['修改node_modules依赖库的文件', '修改node_modules依赖库的文件'],
        ['nodemon', 'nodemon'],
        ['passport', 'passport'],
        ['session', 'session'],
        ['常用库汇总', '常用库汇总'],
      ],
      '/数据库/': [
        ['', '数据库'],
        ['redis命令', 'redis命令'],
        ['缓存的使用', '缓存的使用'],
        ['索引的设计和使用', '索引的设计和使用'],
        ['mysql语句', 'mysql语句'],
        ['mysql存储引擎', 'mysql存储引擎'],
      ],
      '/React/': [
        ['', 'React'],
      ],
      '/TypeScript/': [
        ['', 'TypeScript'],
        ['杂项笔记', '杂项笔记'],
        ['nest.js笔记', 'nest.js笔记'],
        ['nest.js-DI', 'nest.js-DI'],
      ],
      '/Linux/': [
        ['', 'Linux'],
        ['OpenSSL', 'OpenSSL'],
        ['ssh-keygen', 'ssh-keygen'],
        ['PATH', '环境变量PATH'],
        ['编码类型', '编码类型'],
        ['vi的一些语法', 'vi的一些语法'],
        ['命令行- 和 --的区别', '命令行- 和 --的区别'],
      ],
      '/Git/': [
        ['', 'Git'],
        ['语义化版本', '语义化版本'],
        ['命令清单', '命令清单'],
        ['回滚提交记录', '回滚提交记录'],
        ['提交信息模板', '提交信息模板'],
        ['合并多次提交', '合并多次提交'],
        ['hook工具', 'hook工具'],
        ['备忘录', '备忘录'],
      ],
      '/HTTP/': [
        ['', 'HTTP'],
        ['响应状态码', '响应状态码'],
        ['HTTP消息头', 'HTTP消息头'],
        ['DNS域名解析中A、AAAA、CNAME、MX、NS、TXT、SRV、SOA、PTR各项记录的作用', 'DNS域名解析中A、AAAA、CNAME、MX、NS、TXT、SRV、SOA、PTR各项记录的作用'],
      ],
      '/MACOS/': [
        ['', 'MACOS'],
        ['「安全与隐私」中系统不显示「任何来源」', '「安全与隐私」中系统不显示「任何来源」'],
        ['Mac .DS_Store文件的处理', 'Mac .DS_Store文件的处理'],
        ['brew 安装', 'brew 安装'],
        ['软件', '软件'],
        ['终端工具', '终端工具'],
        ['终端配置代理', '终端配置代理'],
      ],
      '/Other/': [
        ['', '其他'],
        ['charles抓包工具', 'charles抓包工具'],
        ['Chrome 插件集', 'Chrome 插件集'],
        ['opencc', 'opencc'],
        ['Vs Code', 'Vs Code'],
        ['ab压力测试', 'ab压力测试'],
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
