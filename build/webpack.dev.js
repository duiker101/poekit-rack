const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = merge(common, {
    entry: './docs/demo.js',
    mode:'development',
    output: {
        path: path.join(__dirname, '../docs/dist'),
        publicPath: '/docs/dist/',
        filename: 'dev.bundle.js',
    }
    ,devServer: { inline: true }
    ,devtool: '#source-map'
})