let webpack = require('webpack');
let path = require('path');
let HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: ['react','lodash','redux','react-redux','react-dom','faker','react-input-range','redux-form','redux-thunk']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name][chunkhash].js'
  },
  module:{
    rules:[
      {
        use:'babel-loader', 
        test: /\.js$/,
        exclude: /node_modules/ 
      }
      ,{
        use: ['style-loader','css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor','manifest']
    }),
    new HtmlWebPackPlugin({
      template: 'index.html'
    })
  ]
};
