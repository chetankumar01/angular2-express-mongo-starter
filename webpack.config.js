// webpack.config.js
'use strict';

const TARGET = process.env.npm_lifecycle_event;

module.exports = {
  entry: './app/boot.ts',
  output: {
    path: './build', // This is where images AND js will go
    publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  module: {
    //
    loaders: [
      {
        test: /\.json/,
        loader: 'json-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
    // now require('file') instead of require('file.coffee')
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js', '.json']
  },
  devtool: 'source-map'
};
