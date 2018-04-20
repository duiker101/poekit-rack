const path = require("path");

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: ['node_modules']
                , options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader?-url!sass-loader'
                    }
                }
            },

            {
                test: /\.woff$/,
                use: [
                    'file-loader?name=fonts/[name].[ext]'
                ]
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