const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.common.config');

module.exports = merge(baseConfig, {
    entry: {
        ['static/client']: './src/client/index.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            filename: 'static/index.html',
            template: './src/client/index.html',
            chunks: []
        }),
    ],
    target: 'web'
});