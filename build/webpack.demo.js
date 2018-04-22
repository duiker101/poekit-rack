const path = require("path");
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    entry: './demo/demo.js',
	mode:'development',
    output: {
        filename: 'demo.bundle.js',
        path: path.resolve(__dirname, "../demo/dist"),
    }
    ,devServer: { inline: true }
    ,devtool: '#source-map'
    ,plugins: [
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(true)
        })]
});