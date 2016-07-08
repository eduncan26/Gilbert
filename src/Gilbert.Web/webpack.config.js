var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/dist');
var APP_DIR = path.resolve(__dirname, 'Public');

var _reactLoader = { test: /\.jsx?/, include: APP_DIR, loader: 'babel' };
var _sassLoader = { test: /\.sass?/, include: APP_DIR, loaders: ["style", "css", "sass"] };
var _woffLoader = { test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" };
var _iconLoader = { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" };
var _jqueryPlugin = new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' });

var config = {
    entry: APP_DIR + '/app.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    module: {
        loaders: [
            _reactLoader,
            _sassLoader,
            _woffLoader,
            _iconLoader
        ]
    },
    plugins: [
        _jqueryPlugin
    ]
};

module.exports = config;
