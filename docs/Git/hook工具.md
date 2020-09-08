## 安装依赖包
```
@commitlint/config-conventional 
@commitlint/cli 
husky
lint-staged
```

## 配置文件
- 配置commitlint
1.  添加commitlint.config.js文件
```
const types = [
  'build', 
  'ci', 
  'chore',
  'docs', 
  'feat', 
  'fix', 
  'pref', 
  'refactor', 
  'revert', 
  'style', 
  'test'
];

typeEnum = {
  rules: {
    'type-enum': [2, 'always', types]
  },
  value: () => types
}

module.exports = {
    extends: [
      "@commitlint/config-conventional"
    ],
    rules: {
      'type-case': [0],
      'type-empty': [0],
      'scope-empty': [0],
      'scope-case': [0],
      'subject-full-stop': [0, 'never'],
      'subject-case': [0, 'never'],
      'header-max-length': [0, 'always', 72],
      'type-enum': typeEnum.rules['type-enum']
    }
  };

```
- 配置lint-staged（提交时检测，如果webpack已经配置则检测可不配置）

> 配置eslinit文件
```
eslinit --init
```
> 添加 .lintstagedrc文件
```
{
   "src/**/*.js": ["eslint --fix"]
}
或
{
   "src/**/*.js": "eslint"
}
```


- 配置husky(两种方式都可以)
> 在package.json配置
```

"husky": {
    "hooks": {
        "pre-commit": "echo '开始' && lint-staged",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
        "pre-push": "echo '结束'"
    }
}

```
> 添加.huskyrc文件
```
{
    "hooks": {
        "pre-commit": "echo '开始' && lint-staged",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
        "pre-push": "echo '结束'"
    }
}
```



- pre-commit：在 git commit 之前触发
- commit-msg：在编写 commit 信息的时候触发
- pre-push：在 git push 之前触发