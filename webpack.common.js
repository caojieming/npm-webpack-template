const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const home = new HtmlWebpackPlugin({
    // not sure what the function of this is
    title: "Home",
    // post-bundling path to the html file (also the URL for the page): "dist/{filename}", "http://localhost:8080/{filename}"
    filename: `index.html`,
    // pre-bundling path to the html file
    template: "./src/pages/home/index.html",
    // which js files (entries) will be run upon loading the HTML file
    chunks: ["global", "home"],
});


module.exports = {
    // paths to js files that will be loaded for each page
    entry: {
        global: "./src/global.js",
        home: "./src/pages/home/index.js",
        subpage: "./src/pages/about/index.js",
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};