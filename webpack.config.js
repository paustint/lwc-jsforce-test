const webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            process: 'process/browser'
        },
        fallback: {
            buffer: require.resolve('buffer/'),
            stream: require.resolve('stream-browserify'),
            Stream: require.resolve('stream-browserify'),
            util: require.resolve('util'),
            timers: require.resolve('timers-browserify')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
        })
    ]
};
