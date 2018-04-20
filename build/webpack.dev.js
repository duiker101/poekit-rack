const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
	mode:'development',
    output: {
        filename: 'dev.bundle.js',
        libraryTarget: 'umd',
        library:'Rack'
    }
    ,devtool: '#source-map'

    ,plugins: [
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(true)
        })]
});