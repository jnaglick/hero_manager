const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = {
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src'),
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    // dev stuff...
    devtool: 'inline-source-map',
    watchOptions: {
        ignored: /node_modules/
    }
};

const clientConfig = merge(baseConfig, {
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

const serverConfig = merge(baseConfig, {    
    entry: {
        server: './src/server/index.ts',
    },
    target: 'node'
});

module.exports = [ serverConfig, clientConfig ];