const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  "mode": process.env.NODE_ENV === "production" ? "production" : "development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
   rules: [
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
     {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
     },
     {
       test: /\.html$/,
       use: ['html-loader']
     }

   ]
 },
 plugins: [
  new HtmlWebpackPlugin({
    title: 'Header Parallax with Intersection Observer',
    template: 'src/index.html'
  })
]
};
