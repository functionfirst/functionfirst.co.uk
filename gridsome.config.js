const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind('./tailwind.js'),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  siteName: 'functionfirst - web design and development portfolio of alan jenkins',
  siteUrl: 'https://functionfirst.co.uk',
  siteDescription: "functionfirst is the online portfolio of Web Designer and Developer, Alan Jenkins. As a professional Web Designer and Developer since 2000 I have worked with a variety of SME's and successful brands.",
  titleTemplate: `%s`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'portfolio/*.md',
        typeName: 'PortfolioPost',
        route: '/:slug'
      }
    },
    {
      use: 'gridsome-plugin-service-worker',
      options: {
        networkFirst: {
          precachedRoutes: ['/'],
          cacheOnly: {
            cacheName: process.env.COMMIT_REF ? process.env.COMMIT_REF : 'v1',
            routes: ['/']
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'functionfirst',
        shortName: 'functionfirst',
        themeColor: '#ffffff',
        backgroundColor: '#2673B1',
        icon: 'src/favicon.png',
        msTileColor: '#2673B1'
      }
    }
  ]
}
