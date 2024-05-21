const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const { optimize } = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        header: {
            import: './modules/header/header.js',
            dependOn: 'shared',
        },

        body: {
            import: './modules/body/body.js',
            dependOn: 'shared',
        },

        footer: {
            import: './modules/footer/footer.js',
            dependOn: 'shared',
        },

        shared: 'jquery',
    },

    output: {
        filename: '[name].bundle.js', 
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

    devServer: {
        static: {
            directory: './public',
        },
        open: true,
        port: 8564,
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'task_3',
        }),

        new CleanWebpackPlugin(),
    ],

    optimization: {
        splitChunks: {

            chunks: 'all',
        },
    }
}