const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        port: 8001,
        proxy: {
            '/api': {
                target: 'http://localhost:8001',
                pathRewrite: {
                    '^/api' : '/mock',     // rewrite path
                },
                ws: true,
                changeOrigin: true
            }
        }
    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('styles',resolve('src/assets/styles'))
    }
     
}