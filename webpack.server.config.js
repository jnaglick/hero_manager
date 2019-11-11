const merge = require('webpack-merge');

const baseConfig = require('./webpack.common.config')

module.exports = merge(baseConfig, {    
    entry: {
        server: './src/server/index.ts',
    },
    target: 'node'
});