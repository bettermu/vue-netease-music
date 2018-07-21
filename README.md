# netease-music

一款使用vue全家桶开发的网易云音乐webapp

# 开发目的

继去年完成vue CNode社区论坛之后，重新打算完成一款webapp音乐项目，使用的是网易云的API,为了让自己更加熟练的使用vue全家桶，模块化开发，牢固掌握ES6知识，提高自己的技术能力。

# 技术栈

## 前端
  * Vue 前端MVVM框架
  * vue-router 单页面路由系统
  * vuex 集中状态管理
  * vue-lazyload 图片懒加载
  * better-scroll 移动端页面场景滚动插件，用户体验更加顺畅
  * scss css预编译处理器
  * ES6 新一代js语法
  * flexible 移动端自适应库

## 后端
  * Node.js 利用 Express 搭建的本地测试服务器
  * vue-axios 用来请求后端 API 音乐数据
  * NeteaseCloudMusicApi 网易云音乐 NodeJS 版 API，提供音乐数据

# 项目运行

* git clone
* npm install
* npm run dev

# 开发进度

* 2018.7.16

   * 完成项目框架的搭建，使用vue-cli脚手架进行搭建，vue-cli脚手架初始化项目结构
   * 添加懒加载默认图片
   * main.js引入fastclick等插件
   * webpack相关路径别名配置
   * 项目运行测试

* 2018.7.17

  * 完成歌手详情页，rank详情页，音乐列表页骨架搭建
  * 完善路由index

* 2018.7.18

  * 完善头部页面
  * 增加font-awesome字体文件
  * 增加公用样式表文件
  * 引入flexible移动端自适应库，设置px to rem转换
  * 编写tab组件，调整样式表相关公用单位
  * 引入swiper组件
  * 推荐页面slider组件样式调整

* 2018.7.19

  * 推荐页面banner数据接口测试
  * 推荐页面banner图数据对接

* 2018.7.20
  * 推荐歌单列表编写
  * swiper样式调整
  * 增加接口数据成功码
  * 推荐歌单列表数据对接
  * 展示样式调整
  * 编写scroll滚动组件  ----------------- 一个坑点：better-scroll组件内部，不能出现同级的div，必须只能有且仅有一个根div，否则滚动失效
  * 编写song数据格式转换js文件
  * 推荐音乐页面整体样式布局完成
  * 推荐音乐进音乐列表页过渡编写

* 2018.7.21
  * loading组件编写
  * no-result组件编写



