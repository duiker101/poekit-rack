const {VueLoaderPlugin} = require('vue-loader')
const webpack = require('webpack')

module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: ['node_modules']
            }
            , {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
            , {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
            , {
                test: /\.pug$/
                , use: ['pug-plain-loader']
            }
            , {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
    , plugins: [
        new VueLoaderPlugin()
        ,new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(true)
        })
    ]
}