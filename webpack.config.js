var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist'),
    SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        fileName: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [{
            test: /\.js?/,
            include: SRC_DIR,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }, {
            test: /bootstrap.+\.(jsx|js)$/,
            exclude: SRC_DIR,
            loader: 'imports?jQuery=jquery,$=jquery,this=>window'
        },
        {
            test: /\.css$/,
            import: SRC_DIR,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        },
        {
            test: /\.(woff|woff2)$/,
            loader: 'url?prefix=font/&limit=5000'
        }]
    }
};

module.exports = config;
