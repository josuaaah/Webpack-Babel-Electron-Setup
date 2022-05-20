const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

module.exports = {
    entry: './src/app.js',
    output: {
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        })
    ],
    // devTool: 'cheap-source-map'
    devServer: {
        static: './dist',
        // onBeforeSetupMiddleware: function (devServer) {
        //     if (!devServer) {
        //         throw new Error('webpack-dev-server is not defined');
        //     }
        //     spawn(
        //         'electron',
        //         ['.'],
        //         {
        //             shell: true,
        //             env: process.env,
        //             stdio: 'inherit',
        //         }
        //     )
        //         .on('close', process.exit(0))
        //         .on('error', spawnError => console.error(spawnError))
        // },
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
                },
              },
            },
        ],
    },
};