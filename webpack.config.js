const path = require('path');

module.exports = {
    entry: "./packages/website/dist/index.js",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
};