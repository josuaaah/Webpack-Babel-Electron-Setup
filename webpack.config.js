const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })
    ],
    // devTool: 'cheap-source-map'
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",         // allows users to add custom handling of Babel's 
                                                // configuration for each file that it processes
                options: {
                  presets: [
                      '@babel/preset-env',      // allows you to use the latest JavaScript without 
                                                // needing to micromanage which syntax transforms
                      "@babel/preset-react"
                    ]
                }
              }
            }
        ]
    }
};