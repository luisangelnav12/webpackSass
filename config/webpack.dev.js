const {merge} =require("webpack-merge");
const common= require("./webpack.common");

/** @type {import('webpack').Configuration} */ 
const devConfig={
    mode:"development",
    devServer:{
        port:3000,
        contentBase:"../dist",
        open:"chrome"
    },
    target:"web"
}
module.exports=merge(common,devConfig);