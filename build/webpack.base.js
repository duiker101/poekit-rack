const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: ['node_modules']
                , options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
};