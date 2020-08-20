const pathConst = require('path');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: pathConst.join(__dirname, "dist"),
    },
    devServer: {
      contentBase: "./dist",
      writeToDisk: true,
      compress: true,
      port: 9000
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
            {
            test: /\.(mjs|js|jsx)$/,
            // exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                {
                  plugins: [
                    '@babel/plugin-proposal-class-properties'
                  ]
                }
              ]
            },
          }
        ],
      }
  };