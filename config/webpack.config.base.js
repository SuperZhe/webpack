/*
 * 最基础的配置文件
 * */
const path = require('path');
// 引入插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 清理 dist 文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 抽取 css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
//自动添加浏览器样式前缀
// 引入多页面文件列表
const config = require('./config');
// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];
// 入口文件集合
let Entries = {};
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const px2rem = require('postcss-px2rem');
// 生成多页面的集合
config.HTMLDirs.forEach((page) => {
  const htmlPlugin = new HTMLWebpackPlugin({
	filename: `${page}.html`,
	template: path.resolve(__dirname, `../app/${page}.html`),
	chunks: [page, 'commons'],
  });
  HTMLPlugins.push(htmlPlugin);
  Entries[page] = path.resolve(__dirname, `../app/js/${page}.js`);
});
module.exports = {

  // 入口文件
  entry: Entries,
  // 启用 sourceMap
  devtool: 'cheap-module-source-map',
  // 输出文件
  output:{
	filename: 'js/[name].bundle.[hash].js',
	path: path.resolve(__dirname, '../dist'),
  },
  // 加载器
  module: {
	rules: [
	  //css

	  // 对 css 后缀名进行处理
	  {
		// 对 css 后缀名进行处理
		test:/\.css$/,
		// 不处理 node_modules 文件中的 css 文件
		exclude: /node_modules/,
		// 抽取 css 文件到单独的文件夹
		use: ExtractTextPlugin.extract({
		  fallback: "style-loader",
		  // 设置 css 的 publicPath
		  publicPath: config.cssPublicPath,
		  use: [{
			loader:"css-loader",
			options:{
			  // 开启 css 压缩
			  minimize:true,
			  importLoaders: 1,
			}
		  },{loader:'px2rem-loader?remUnit=75&remPrecision=8'}
		  ]
		}),
		/*loader: 'style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8'*/
	  },
	  //进行sass编译
	  {
		test: /\.scss$/,
		use: ExtractTextPlugin.extract({
		  fallback: 'style-loader',
		  //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
		  use: [{
			loader: 'css-loader',
			options: {
			  minimize: true, //css压缩
			  importLoaders: 1,
			},
		  }, {loader:'px2rem-loader?remUnit=75&remPrecision=8'},'sass-loader']
		}),
	  },
	  //页面引用的图片路径更改
	  {
		test: /\.html$/,
		loader: 'html-withimg-loader',
	  },
	  //js
	  {
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
		  loader: 'babel-loader',
		  // options:
		  //     presets: ['env']
		  // }
		},
	  },
	  //图片

	  {
		test: /\.(png|svg|jpg|gif)$/,
		loader: 'url-loader?limit:10000&name=images/[hash:8].[name].[ext]',
		options: {outputPath: '../'},
		// use:
		//     // loader:"file-loader",
		//     options:
		//         // 打包生成图片的名字
		//         // name:"[name].[ext]",
		//         // 图片的生成路径
		//         outputPath:config.imgOutputPath
		//     }
		// }
	  },
	  {
		test: /\.(woff|woff2|eot|ttf|otf)$/,
		use: ['file-loader'],
	  },
	],
  },
  // 插件
  plugins: [
	//添加样式浏览器前缀
	// 自动清理 dist 文件夹
	new CleanWebpackPlugin(['dist']),
	// 将 css 抽取到某个文件夹
	new ExtractTextPlugin(config.cssOutputPath),
	// 自动生成 HTML 插件
	...HTMLPlugins,
	new webpack.LoaderOptionsPlugin({
	  options: {
		postcssLoader: () => {
		  return [require('postcss-px2rem')({remUnit: 75})]
		}
	  }
	})
  ],
};