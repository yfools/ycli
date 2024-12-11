const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const timeanalysisPlugin = require('./src/plugin/timeanalysisPlugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { IgnorePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const smp = new SpeedMeasurePlugin();

module.exports = {
  entry: './src/main.tsx',
  // homepage: '/app',
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDom',
  // },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.appcache'),
    name: process.env.NODE_ENV,
    // cacheLocation: path.resolve(__dirname, '.appcache'),
    allowCollectingMemory: true,
    buildDependencies: {
      config: [__filename],
    },
  },
  stats: 'verbose',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: false,
    filename: 'static/js/[name].[contenthash:8].js', //每个输出的js文件的名称
    publicPath: '/app', //打包后文件的公共前缀路径
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
    new timeanalysisPlugin(),
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
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all', // 决定转译后的modules被组合到什么chunks中，值为all时，表示优化后的chunks中可以同时包含同步和异步
      // minRemainingSize: 0,
      // minChunks: 1,
      minSize: 1,
      // maxSize:200
      // maxAsyncRequests: 30,
      // maxInitialRequests: 30,
      // enforceSizeThreshold: 50000,
      // cacheGroups: {
      //   lib: {
      //     name: 'chunk-lib',
      //     test: /[\\/]node_modules[\\/]/,//  \\/:路径分隔符，兼容unix和windows系统
      //     priority: -10,
      //     reuseExistingChunk: true,
      //   },
      //   // default: {
      //   //   minChunks: 2,
      //   //   priority: -20,
      //   //   reuseExistingChunk: true,
      //   // },
      // },
    },
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, //匹配ts、tsx文件
        use: [
          'cache-loader',
          {
            loader: 'babel-loader',
            options: {
              //预设执行顺序由右往左，所以这里是先处理ts再处理jsx
              presets: ['@babel/preset-react', '@babel/preset-typescript'],
              cacheDirectory: true,
            },
          },
        ],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /.(less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ],
  },
};
