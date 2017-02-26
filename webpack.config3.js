var webpack = require('webpack');
var bannerPlugin = new webpack.BannerPlugin("this file reated by wxh");
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }

                ]
            }
        ]
    }
    ,
    //添加插件，运行webpack 会在bundle文件中注释
    plugins: [
        bannerPlugin
    ],
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}