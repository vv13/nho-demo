module.exports = {
  publicPath: '',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.206.20.88:8080',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
