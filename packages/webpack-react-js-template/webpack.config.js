const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  // homepage: '/app',
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "static/js/[name].[contenthash:8].js", //每个输出的js文件的名称
    publicPath: "/", //打包后文件的公共前缀路径
  },
  resolve: {
    extensions: [".jsx", ".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react-ts",
      inject: true,
      template: path.resolve(__dirname, "./public/index.html"), //模板用定义root节点的模板
    }),
  ],
  devtool: "source-map",
  devServer: {
    open: true,
    port: 8888,
    hot: true,
    historyApiFallback: true,
    compress: false, //gzip压缩
    static: {
      directory: path.join(__dirname, "../public"), //托管静态资源public文件夹
    },
  },
  module: {
    rules: [
      {
        test: /.(jsx|ts|tsx)$/, //匹配ts、tsx文件
        use: {
          loader: "babel-loader",
          options: {
            //预设执行顺序由右往左，所以这里是先处理ts再处理jsx
            presets: [["@babel/preset-env", {}], "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
