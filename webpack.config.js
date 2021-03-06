const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    output: {
        filename: '[name].[hash:5].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: { contentBase: './dist' }
}
