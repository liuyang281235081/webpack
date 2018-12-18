const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry:{
        myname:'./main.js'
    },
    output: {
        filename: "[name]_[id]_[chunkhash:8]bundle.js",
        path:path.resolve(__dirname,'./dist_[hash]'),

    },
    module:{
        rules: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
        // rules:[
        //     {
        //         test:/\.css$/,
        //         use:[
        //             'style-loader/url',
        //             {
        //                 loader:'file-loader',
        //
        //             }
        //         ]
        //     }
        // ]
        // rules:[
        //     {
        //         test:/\.css$/,
        //         use:[
        //             {
        //                 loader:MiniCssPlugin.loader,
        //                 options:{
        //                     publicPath:'./'
        //                 }
        //             },
        //             'css-loader'
        //         ]
        //     }
        // ],
    },
    plugins:[
        new MiniCssPlugin({
            filename:'[name]_[contenthash:8].css'
        })
    ],

}