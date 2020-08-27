## 安装
>  Linux系统有个让人蛋疼的通病，软件包依赖，好在当前主流的两大发行版本都自带了解决方案，Red hat有yum，Ubuntu有apt-get
 神马，你用mac os，不好意Mac os木有类似的东东，泪奔中几经折腾总算找到了第三方支持：Homebrew，Homebrew简称brew，是Mac OSX上的软件包管理工具，能在Mac中方便的安装软件或者卸载软件，可以说Homebrew就是mac下的apt-get、yum神器
Homebrew安装

> Homebrew的安装非常简单，打开终端复制、粘贴以下命令，回车，搞定(请放心使用，原汁原味的官方安装方法搬运）

`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

## 执行 brew install 命令长时间卡在 Updating Homebrew 的解决方法

1. 按住 control + c 取消本次更新操作
> 按住 control + c 之后命令行会显示 ^C，就代表已经取消了 Updating Homebrew 操作

> 大概不到 1 秒钟之后就会去执行我们真正需要的安装操作了

2. 使用 Alibaba 的 Homebrew 镜像源进行加速

> 替换 / 还原 brew.git 仓库地址
```
# 替换成阿里巴巴的 brew.git 仓库地址:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

#=======================================================

# 还原为官方提供的 brew.git 仓库地址
cd "$(brew --repo)"
git remote set-url origin https://github.com/Homebrew/brew.git
```
> 替换 / 还原 homebrew-core.git 仓库地址
```
# 替换成阿里巴巴的 homebrew-core.git 仓库地址:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

#=======================================================

# 还原为官方提供的 homebrew-core.git 仓库地址
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://github.com/Homebrew/homebrew-core.git
```
> 替换 / 还原 homebrew-bottles 访问地址
```
echo $SHELL

# 如果你的输出结果是 /bin/zsh

# 替换成阿里巴巴的 homebrew-bottles 访问地址:
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc

#=======================================================

# 还原为官方提供的 homebrew-bottles 访问地址
vi ~/.zshrc
# 然后，删除 HOMEBREW_BOTTLE_DOMAIN 这一行配置
source ~/.zshrc

# 如果你的输出结果是 /bin/bash
# 替换 homebrew-bottles 访问 URL:
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile

#=======================================================

# 还原为官方提供的 homebrew-bottles 访问地址
vi ~/.bash_profile
# 然后，删除 HOMEBREW_BOTTLE_DOMAIN 这一行配置
source ~/.bash_profile
```
## 使用


> 搜索软件：brew search 软件名，如brew search wget

> 安装软件：brew install 软件名，如brew install wget

> 卸载软件：brew remove 软件名，如brew remove wget

Homebrew将这些工具统统安装到了 /usr/local/Cellar 目录中，并在 /usr/local/bin 中创建符号链接。

```
其他命令

brew list 显示已安装的包

brew home [] 用浏览器打开相关包的页面
brew info [] 显示包信息
brew deps [] 显示包依赖
brew server 启动web服务器，可以通过浏览器访问http://localhost:4567/ 来同网页来管理包
brew -h brew帮助

 

相关服务命令

brew services list  # 查看使用brew安装的服务列表
brew services run formula|--all  # 启动服务（仅启动不注册）
brew services start formula|--all  # 启动服务，并注册
brew services stop formula|--all   # 停止服务，并取消注册
brew services restart formula|--all  # 重启服务，并注册
brew services cleanup  # 清除已卸载应用的无用的配置
 

配置文件目录

/Library/LaunchDaemons # 开机自启，需要sudo
~/Library/LaunchAgents # 用户登录后自启
```

卸载指令:

    cd `brew –prefix`

    rm -rf Cellar

    brew prune 

    rm `git ls-files` 

    rm -rf Library .git .gitignore bin/brew

    rm  -rf README.md share/man/man1/brew

    rm -rf Library/Homebrew Library/Aliases 

    rm -rf Library/Formula Library/Contributions

    rm -rf ~/Library/Caches/Homebrew