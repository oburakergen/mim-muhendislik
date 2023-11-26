'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const ENTRY_PATH = path.resolve(__dirname, 'src/ts/index.ts');
const ENTRY_PATH2 = path.resolve(__dirname, 'src/scss/style.scss');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: [ENTRY_PATH, ENTRY_PATH2],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: DIST_PATH,
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    modules: ['src', 'node_modules'],
  },
  optimization: {
    minimize: true,
    nodeEnv: 'production',
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: { hints: false },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/about.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopywebpackPlugin({
      patterns: [
        {
          from: 'src/assets/image/**/*',
          to: 'assets/image/[name][ext]',
        },
      ],
    }),
  ],
};
