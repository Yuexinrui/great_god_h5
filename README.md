# great_god_h5

> 项目需求：
    - 多页面
    - Vant
    - scss
    - route

###开始搭建
> 参考文档：https://cli.vuejs.org/zh/guide/prototyping.html

1. 安装全局依赖：`npm install -g @vue/cli-service-global`
2. 创建项目： `vue create [great-god-h5]`
    - 创建选项，选择第一个
    - 问题：若安装完成后cmd下无法执行`vue`命令，提示`‘vue’不是内部或外部命令..........`，请尝试全局搜索vue.cmd文件，将该文件路径添加至环境变量下全局变量的Path中，重启cmd，即可解决问题，参考： https://blog.csdn.net/weixin_41986726/article/details/83826528   
3. 进入项目目录：`cd great-god-h5`
4. 安装Vant：Vue 2.*版本    `npm i vant -S`
    - 页面内导入方式：采用文档 [方式三](https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/quickstart#fang-shi-san.-dao-ru-suo-you-zu-jian)，一次导入所有组件
    - Vant完整文档：https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/quickstart
5. 安装scss： 安装完成后即可在项目中使用，使用如下命令`npm install --save-dev sass-loader`,`npm install --save-dev node-sass`
    - 问题：可参考https://www.cnblogs.com/sweeeper/p/11282712.html
    - 问题：node-sass会出现安装失败的情况，报错node-sall not found，请使用切换至cnpm进行安装；
6. 移动端适配，参考：https://www.cnblogs.com/yifeng555/p/12734032.html
    - 额外操作：`/public/index.html`中添加`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">`
7. 添加vue-router



> 其他参考文章：
1.https://www.jb51.net/article/178644.htm
