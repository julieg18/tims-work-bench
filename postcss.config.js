if (process.env.NODE_ENV === 'production') {
  module.exports = {
    parser: false,
    plugins: {
      'postcss-import': {},
      'postcss-url': {},
      'postcss-preset-env': {},
      autoprefixer: {},
      cssnano: {},
    },
  };
}
