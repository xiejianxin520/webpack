let path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolveLoader: {
        // 别名
        // alias: {
        //     loader1: path.resolve(__dirname, 'loader', 'loader1')
        // }
        modules: ['node_modules', path.resolve(__dirname, 'loader')]  // 先找node_modules, 再去loader中去找
    },
    devtool: 'source-map',
    watch: true,
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: ['loader3']
            // },
            // {
            //     test: /\.js$/,
            //     use: ['loader2']
            // },
            // {
            //     test: /\.js$/,
            //     use: ['loader1']
            // },
            // {
            //     test: /\.js$/,
            //     use: ['loader1'],
            //     enforce: "pre"
            // },
            // {
            //     test: /\.js$/,
            //     use: ['loader2']
            // },
            // {
            //     test: /\.js$/,
            //     use: ['loader3'],
            //     enforce: "post"
            // },
            // {
            //     test: /\.js$/,
            //     // use: [path.resolve(__dirname, 'loader', 'loader1')]
            //     // use: 'loader1' // 如何找到这个loader1
            //     use: ['loader3', 'loader2', 'loader1']
            //
            // },
            // {
            //     test: /\.less$/,
            //     use: [
            //         path.resolve(__dirname, 'loader', 'style-loader1'),
            //         path.resolve(__dirname, 'loader', 'less-loader1')
            //     ]
            // },
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'babel-loader2',
            //         options: {
            //             presets: [
            //                 '@babel/preset-env'
            //             ]
            //         }
            //     }
            // },
            // {    // 给所有匹配的`js`加一个注释
            //     test: /\.js$/,
            //     use: {
            //         loader: 'banner-loader',
            //         options: {
            //            text: 'may',
            //            filename: path.resolve(__dirname, 'src/banner.js')
            //         }
            //     }
            // },
            {
                test: /\.png$/,
                // 目的是根据图片生成md5 发射到dist目录下，file-loader 返回当前图片路径
                // use: 'file-loader'
                // 处理路径
                use: {
                    loader: 'url-loader1',
                    options: {
                        limit: 200 * 1024
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader2', 'css-loader2', 'less-loader2']
            }
        ]
    },
}
