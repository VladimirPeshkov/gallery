const { resolve } = require('path');
const HTMlWebpackPlugin = require('html-webpack-plugin');
const  { CleanWebpackPlugin }  =  require ( 'clean-webpack-plugin' ) ;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js',
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(mp3|mp4)$/i,
                use: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|)$/i, // 1
                loader: 'img-optimize-loader',
                options: {
                    compress: {
                        mode: 'high', 
                        disableOnDevelopment: true,
                        pngquant: {
                            quality: [0.2, 0.8],
                        },
                        
                        webp: {
                            quality: 100,
                        },
                    
                        svgo: true,
                        
                        gifsicle: {
                            optimizationLevel: 3,
                        },
                        
                        mozjpeg: {
                            progressive: true,
                            quality: 60,
                        },
                    }
                }

            }
        ]
    },

    plugins: [
        new HTMlWebpackPlugin({template: resolve(__dirname, 'src', 'index.html')}),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].scss'}),
        new CleanWebpackPlugin(),
    ],

    devServer: {
        port: 9000
      }
    
}