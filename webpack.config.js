var path = require('path');
var url = require('url');
var webpack = require('webpack');

module.exports = {
    entry: {
        "main": "./src/main.es6"
    },
    output: {
        filename: '[name].js',
        path: './build/'
    },
    cache: true,
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.(es6)$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                plugins: ["transform-object-rest-spread"]
            }
        }, {
            test: /\.css$/,
            loader: "style!css!postcss"
        }, {
            test: /\.woff|ttf|woff2|eot$/,
            loader: 'url?limit=100000'
        }, {
            test: /\.less$/,
            loader: "style!css!postcss!less"
        },{
            test: /\.svg$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.(png|gif)$/i,
            loader: 'url?limit=25000&name=image-[hash:6].[ext]'
        }, {
            test: /\.(jpeg|jpg)/i,
            loader: 'file?name=image-[hash:6].[ext]'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    //处理css兼容性代码，无须再写-webkit之类的浏览器前缀
                    return [
                        require('postcss-initial')({
                            reset: 'all' // reset only inherited rules
                        }),
                        require('autoprefixer')({
                            browsers: ['> 5%']
                        })];
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: Infinity//当项目中引用次数超过2次的包自动打入commons.js中,可自行根据需要进行调整优化
        })
    ],
    externals: {
        'vuex': 'Vuex',
        'vue': 'Vue'
    }
};
