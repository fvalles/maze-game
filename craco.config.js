const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@screens': path.resolve(__dirname, 'src/screens'),
    },
  },
};
