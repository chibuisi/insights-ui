const path = require('path')

module.exports = {
    productionSourceMap: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/')
            }
        },
        devtool: 'source-map'
    },
    // chainWebPack: (config) => {
    //     config.module
    //         .rule('vue')
    //         .use('vue-loader')
    //         .tap((options) => {
    //             options.exposeFilename = true;
    //             return options;
    //         })
    // }
}