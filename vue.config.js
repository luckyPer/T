const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        port: 8001
    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('styles',resolve('src/assets/styles'))
    }
     
}