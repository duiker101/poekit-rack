const path = require("path");
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    entry: './src/index.js',
    mode:'production',
    output: {
        filename: 'rack.bundle.js',
        libraryTarget: 'umd',
        library:'Rack'
    }

    ,plugins: [
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(true)
        })]
});
