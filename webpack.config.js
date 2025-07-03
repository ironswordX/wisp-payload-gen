const path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'wisp_payload_gen.js',
    path: path.resolve(__dirname, 'dist/web'),
    library: {
      name: 'wisp_payload_gen',
      type: 'window'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.web.json"
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
