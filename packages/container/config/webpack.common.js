const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, //quando importarmos um arquivo que termine com mjs ou apenas js, o babel deve processar
                exclude: /node_modules/, //babel não deve processar arquivos de node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};