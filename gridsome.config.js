const i18n = require('./plugins/i18n')

module.exports = {
  siteName: 'MdSlides',
  siteDescription: 'Markdown slides editor',
  siteUrl: 'https://mdslides.github.io',
  plugins: [
    i18n,
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Feature',
        path: './content/*/features/*.md',
      },
    },
  ],
  transformers: {
    remark: {
      slug: false,
    },
  },
  chainWebpack(config) {
    config.module
      .rule('svg')
      .uses.clear()
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions.whitespace = 'condense'
        return options
      })
  },
}
