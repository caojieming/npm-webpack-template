const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


// based off of: https://stackoverflow.com/a/60021512
const generateHtmlPlugin = (title) => {
    return new HtmlWebpackPlugin({
        // not sure what the functionality of this is
        title: `${title}`,
        // post-bundling path to the html file (also the URL for the page): "dist/{filename}", "http://localhost:8080/{filename}"
        filename: `${title.toLowerCase()}/index.html`,
        // pre-bundling path to the html file
        template: `./src/pages/${title.toLowerCase()}/index.html`,
        // which js files (entries) will be run upon loading the HTML file
        chunks: ["global", `${title.toLowerCase()}`],
    });
}
const populateHtmlPlugins = (pagesArray) => {
    const res = [];

    // this is declared separately from the other pages because path/URL template is different (the others are subpages, this is the main/root page)
    const home = new HtmlWebpackPlugin({
        title: "Home",
        filename: `index.html`,
        template: "./src/pages/home/index.html",
        chunks: ["global", "home"],
    });
    res.push(home);

    pagesArray.forEach(page => {
        res.push(generateHtmlPlugin(page));
    })
    return res;
}
const pages = populateHtmlPlugins(["Page1", "Page2"]);

const header_footer = [
    new HtmlWebpackPlugin({
        // dunno what this does functionally
        title: "Header",
        // bundled location
        filename: "header-footer/header.html",
        // pre-bundled location
        template: "./src/header-footer/header.html",
    }),
    new HtmlWebpackPlugin({
        title: "Footer",
        filename: "header-footer/footer.html",
        template: "./src/header-footer/footer.html",
    }),
];

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
        page1: "./src/pages/page1/index.js",
        page2: "./src/pages/page2/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./src/index.html",
    //     }),
    // ],
    // list of all HtmlWeppackPlugin objects
    plugins: pages.concat(header_footer),
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