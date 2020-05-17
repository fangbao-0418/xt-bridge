## Description

Description

## Installation

npm安装

```bash
$ npm i @xt/bridge --registry=http://192.168.20.8:802
```

引用cdn资源
```
<!-- 挂载在 window.__xt_js_sdk__ -->
https://cdn.hzxituan.com/npm/bridge/{version}/index.umd.js
```


打包发布
```bash
$ npm run build
$ npm login --registry=http://192.168.20.8:802
$ npm publish --registry=http://192.168.20.8:802
```

撤销发布

```bash
$ npm unpublish @xt/bridge@1.0.0 --registry=http://192.168.20.8:802
```

## [文档说明](https://cdn.hzxituan.com/npm/bridge/docs/index.html)
