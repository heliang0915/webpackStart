var path=require("path");
var webpack=require("webpack")
module.exports={
   entry:{
        app:path.join(__dirname,'src/app.js')
   },
   output:{
       path:path.join(__dirname,'build'),
       filename:'[name].js'
   },
    module: {
       rules:[{
           test:/\.js$|\.jsx$/,
           loader:"babel-loader"
           ,
           exclude:[
               path.join(__dirname,'node_modules')
           ]
       }]
    },
    // externals:{
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    //     'redux':'Redux',
    //     'react-redux':'ReactRedux',
    //     'react-router':'ReactRouter'
    // },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor-manifest.json')
        })
        // ,
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         comments: false,
        //     },
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
}