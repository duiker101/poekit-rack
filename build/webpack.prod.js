const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    mode:'production',
    output: {
        filename: 'bundle.js',
        libraryTarget: 'umd',
        library:'Rack'
    }

    ,plugins: [
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(true)
        })]
});
