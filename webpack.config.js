const webpack = require('webpack');
const path = require('path');
//extract-text-webpack-plugin插件
//将样式提取到单独的css文件中，避免行内中插入css样式
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//html-webpack-plugin插件，webpack中生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

const autoprefixer = require('autoprefixer');

const dflport = 8383; //配置端口

module.exports = {
    devtool:'eval-source-map',//生成 source maps文件，对编译后的文件和源文件的对应，方便我们调试
    entry:__dirname + '/src/containers/index.js',
    output:{
        path:__dirname + 'public',
        filename:'[name].bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                //排除路径
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },{
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },{
                test: /\.(png|jpg|gif|woff|woff2)$/,
                loaders: [
                    'url-loader?limit=10000&name=[hash:8].[name].[ext]',
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname + '/src/containers/index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].css'),
        new webpack.HotModuleReplacementPlugin(),//热加载
        // new webpack.NoemitOnErrorsPlugin(),//跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
        new webpack.LoaderOptionsPlugin({
            options: {
              postcss: function () {
                return [autoprefixer,
                        pxtorem({
                          rootValue: 100,
                          propWhiteList: []
                        })]
              }
            }
        }),
    ],
    devServer:{
        contentBase:__dirname + '/src',
        port:dflport,
        hot:true,//热加载
        inline:true,//代码有变化，浏览器端刷新
        historyApiFallback:true
    }
}