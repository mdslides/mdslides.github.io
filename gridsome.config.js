const i18n = require('./plugins/i18n')

module.exports = {
  siteName: 'MdSlides',
  siteDescription: 'Markdown slides editor',
  siteUrl: 'https://mdslides.github.io',
  titleTemplate: '%s / mdslides',
  plugins: [i18n],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    },
  },
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions.whitespace = 'condense'
        return options
      })
  },
}
