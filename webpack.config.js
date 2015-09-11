module.exports = {
  context: __dirname + '/src',
  entry: './js/js-file',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /image-file\.js/,
        loader: './my-loader'
      }
    ]
  }
};
