const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js'),
    },

    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'folder'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'task_1',
        }),
    ],
}