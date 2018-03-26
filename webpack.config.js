const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./client/index.html"
});

module.exports = {
    entry: ["babel-polyfill", "./client/app.js"],
    output: {
        path: path.resolve("dist"),
        filename: "./index_bundle.js",
        publicPath: "/"
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
            {
                test: /(\.css)$/,
                loaders: ["style-loader", "css-loader"],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [HtmlWebpackPluginConfig]
};
