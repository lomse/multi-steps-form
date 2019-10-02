const path = require('path')

const config = {
    context: __dirname,
    entry: './src/index.tsx',
    devtool: "false",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'babel-loader' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/,  use:'file-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: "development"
}

module.exports = config