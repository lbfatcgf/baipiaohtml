# baipiaohtml
---
## git

```
//邮箱与用户名都使用github账号的邮箱和用户名
git config --global user.email "一个邮箱" 
git config --global user.name "一个用户名"
```
---
## baipiaohtml项目设计总纲

1. 本项目是baipiao视频网的网页前端
2. 采用mvs模型设计
    1. 前端与后台分离
3. 后台采用thinkphp5开发
    1. [后台项目地址](https://github.com/MeowLove-star/BaiPiao-PHP)
4. 前端
    1. 前端以html为主
    2. 主要的技术
        1. jQuery
        2. Bootstrap
        3. DPlayer
        4. font awesome
        5. ajax
 
----
 ## baipiaohtml目录结构
 ```
    +bootstrap-4.1.1-dist
        +css
        +js

    +DPlayer   第三方播放器插件

    + font-awesome-4.7.0

    +css

    +js 

    +vid    主要存放处理视频的界面
        -video.html

    +loge    处理登录，注册，上传等操作的页面
        -login.html

    +index.html 主页面
```
