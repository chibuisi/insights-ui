const path = require('path')
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')

const plugins = process.env.NODE_ENV === 'nondevelopment' ? [new UglifyJsPlugin({
    sourceMap: true,
    })] : [];

module.exports = {
    lintOnSave: true,

    productionSourceMap: process.env.NODE_ENVIRONMENT === 'nondevelopment',

    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "src/styles/_common.scss;`,
            },
        },
    },

    configureWebpack: () => {
        const webpackConfig = { optimization: {}, resolve: {} };

        if(process.env.NODE_ENV === 'nondevelopment') {
            webpackConfig.optimization.splitChunks = {
                chunks: 'async',
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            };
        }

        webpackConfig.plugins = [
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/), // eslint-disable-line
            // new HtmlWebpackPlugin({
            //     template: `public/index.html`,
            //     BUILD_TAG: process.env.BUILD_TAG,
            // }),
            ...plugins,
        ];

        return webpackConfig;
    },

    parallel: false,

    devServer: {
        port: 20339,
        headers: { 'Access-Control-Allow-Origin': '*' },
        progress: !(process.env.DISABLE_WEBPACK_PROGRESS),
        writeToDisk: true,
    },

    chainWebpack: (config) => {
        config.resolve.alias.set('tests', path.resolve(__dirname, 'tests'));
        config.resolve.alias.set('@', path.resolve(__dirname, 'src'));

        config.plugin('excludeAssets').use(ExcludeAssetsPlugin);

        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule.use('svg-sprite-loader').loader('svg-sprite-loader');
    }

}