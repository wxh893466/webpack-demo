var webpack = require('webpack');
var bannerPlugin = new webpack.BannerPlugin("this file reated by wxh");
//postcss-loader老是报错 这是1.0的写法
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，
    //页面入口文件的配置
    entry: './entry.js',
    //入口文件输出配置
    output: {
        //打包后文件存放的位置
        path: __dirname + "/public",
        //打包后输出的文件名
        filename: 'bundle.js'
    },
    module: {
        //加载器配置 多个loader间用！连接
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    //添加插件，运行webpack 会在bundle文件中注释
    plugins: [bannerPlugin],
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}