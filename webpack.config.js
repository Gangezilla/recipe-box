var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    devtool: 'source-map',
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            query: {
                        presets: ['es2015'],
                    },
            exclude: /node_modules/
        }]
    },

    // plugins: [
    //     new webpack.optimize.OccurenceOrderPlugin(),
    //     new webpack.DefinePlugin({
    //         'process.env': {
    //             'NODE_ENV': JSON.stringify('production'),
    //         }
    //     }),
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
};

module.exports = config;
