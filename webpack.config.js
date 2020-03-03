//path模块用来动态获取路径。
const path = require('path');
module.exports = {
    //设置打包的入口和出口文件
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}
