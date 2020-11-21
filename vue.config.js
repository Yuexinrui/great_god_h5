let glob = require('glob')

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
  let entries = {}, tmp, htmls = {};

  // 读取src/pages/**/底下所有的html文件
  glob.sync(globPath + 'html').forEach(function (entry) {
    tmp = entry.split('/').splice(-3);
    htmls[tmp[1]] = entry
  })

  // 读取src/pages/**/底下所有的js文件
  glob.sync(globPath + 'js').forEach(function (entry) {
    tmp = entry.split('/').splice(-3);
    entries[tmp[1]] = {
      entry,
      template: htmls[tmp[1]] ? htmls[tmp[1]] : 'index.html', //  当前目录没有有html则以共用的public/index.html作为模板
      filename: tmp[1] + '.html'   //  以文件夹名称.html作为访问地址
    };
  });
  // console.log('entries:', entries)
  return entries;
}

let htmls = getEntry('./src/pages/**/*.');

module.exports = {
  pages: htmls,
  publicPath: './',           //  解决打包之后静态文件路径404的问题
  outputDir: 'dist',        //  打包后的文件夹名称，默认dist
  devServer: {
    open: true,             //  npm run serve 自动打开浏览器
    index: '/index.html'    //  默认启动页面
  },
  productionSourceMap: false,
  lintOnSave: false,       // 关闭ESlint
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        plugins: [
          require("autoprefixer")({
            // 配置使用 autoprefixer
            overrideBrowserslist: ["last 15 versions"]
          }),
          require("postcss-pxtorem")({
            rootValue: 75, // 换算的基数
            // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
            //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
            selectorBlackList: ["ig"],
            propList: ["*"],
            exclude: /node_modules/
          })
        ]
      }
    }
  }
};
