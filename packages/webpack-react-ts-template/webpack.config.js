const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.tsx',
  // homepage: '/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'static/js/[name].[contenthash:8].js', //每个输出的js文件的名称
    publicPath: '/app', //打包后文件的公共前缀路径
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-ts',
      inject: true,
      template: path.resolve(__dirname, './public/index.html'), //模板用定义root节点的模板
    }),
  ],
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 8888,
    hot: true,
    // compress: false, //gzip压缩
    // http2: true,
    historyApiFallback: {
      index: '/app', // 当请求的文件找不到时，返回/app/目录下的index.html，而不仅仅是index.html，当配置了basename时需要这样设置才能正确跳转路由
      // rewrites: [
      //   // 重写路径：捕捉所有/app开头的路径并重定向到/app/index.html。用于多页应用
      //   { from: /^\/app\/.*$/, to: '/app/index.html' },
      // ],
    },
    static: {
      // directory: path.join(__dirname, '../public/app'), //托管静态资源public文件夹
      serveIndex: true,
      publicPath: '/app',
    },
    // client: {
    //   // logging: "verbose",
    //   overlay: {
    //     errors: true,
    //     warnings: false,
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, //匹配ts、tsx文件
        use: {
          loader: 'babel-loader',
          options: {
            //预设执行顺序由右往左，所以这里是先处理ts再处理jsx
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
};
