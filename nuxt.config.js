
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Zero‘s Website 🙃',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '知识总结，职场经验，人生感悟' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.bootcss.com/normalize/7.0.0/normalize.min.css' },
      { rel: 'stylesheet', href: '//cdn.bootcss.com/animate.css/3.5.2/animate.min.css' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_987629_b1cqvuf9roo.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],
  // 全局加载变量
  // styleResources: {
  //   stylus: [
  //     // resolve(__dirname, './styles/variables.styl')
  //   ]
  // },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
  ],

  /*
  ** HTTP跨域代理
  */
  proxyTable: {
    // '/syj-wechat-api': {
    //   target: 'http://<api-server-ip>:<api-server-port>',
    //   changeOrigin: true
    // }
  },

  /*
  ** 将node环境变量NODE_ENV传递给浏览器端，用于区分不同环境项目配置
  */
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 请求代理配置，解决跨域
    '@gauseen/nuxt-proxy',
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
