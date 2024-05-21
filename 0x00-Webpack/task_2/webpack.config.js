const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },

    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'public'),
    },

    performance: {
        hints: false,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|gif)$/,
                loader: 'url-loader',
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'task_2',
        }),
    ]
}