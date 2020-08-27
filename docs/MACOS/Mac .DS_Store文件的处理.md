### 打开 “终端” ，复制黏贴下面的命令，回车执行，重启Mac即可生效。

1.清除.DS_Store文件:

```
find / -name ".DS_Store" -depth -exec rm {} \;
```

2.禁止.DS_store生成：
```
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
```
3.恢复.DS_store生成：
```
defaults delete com.apple.desktopservices DSDontWriteNetworkStores
```