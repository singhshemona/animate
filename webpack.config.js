const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/images/'),
      styles: path.resolve(__dirname, 'src/styles/'),
    },
  },
};
