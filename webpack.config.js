var path = require("path");

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'myApp.bundle.js'
  },
  module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
             }
         ]
     },
}
