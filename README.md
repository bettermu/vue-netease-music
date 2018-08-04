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

* 2018.7.23
  * 歌曲列表编写
  * 添加vuex 相关 action getter mutation state
  * 音乐列表数据state测试

* 2018.7.26
  * 歌曲列表数据格式转换
  * music-list结构编写

* 2018.7.30
  * 歌曲列表结构编写
  * music-list样式完善

* 2018.7.31
  * song-list结构编写
  * song-list样式完善

* 2018.8.2
  * music-list滚动标题栏交互效果实现
  * rank排行数据接口编写
  * 排行TOP列表数据测试

* 2018.8.3
  * rank排行页面结构编写
  * rank排行页面样式调整
  * setTopList mutation编写
  * rank-detail调试

* 2018.8.4
  * 之前在写recommend页面的时候，轮播图部分，采用的是swiper插件，编写时，采用了自己编写的slide子组件，运用父组件传值banner的prop数据，但这样的一直方式虽然解耦合了，功能职责更单一，但是却有一个问题，就是子组件的mounted方法里。初始化swiper后，loop属性无法生效，这就很苦恼了，这些天一直在想着怎么解决，但是按照原先的方式，子组件获取父组件传来的值再进行初始化，是行不通的，那么，有一种办法，就是在获得数据之后，在dom更新之后立即初始化swiper，也就是在nextTick方法里，调用swiper的初始化。因此今天便改造了一下代码，将banner数据的传值方式，改成直接父组件里获取数据后，在微任务里初始化swiper，就解决了loop失效的问题


