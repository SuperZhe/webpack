/*
* 一些全局的配置，例如html文件路径等
* */
const path = require('path');
module.exports = {
    HTMLDirs :[
        "index",
    ],
    cssPublicPath:"../", //解决打包的时候找不到图片报404的错误
    imgOutputPath:'images/',
    cssOutputPath:'./css/style.css' ,//将所有的 css 提取到 dist 文件夹下的 css 文件夹中，并命名为 style.css
    devServerOutputPath:path.join(__dirname, "dist") //这个是指内存中的dist目录不是打包生成的
};