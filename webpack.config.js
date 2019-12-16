/**
 * This file has been autogenerated as it didn't exist or was made for an older
 * incompatible version.
 *
 * This file can be used for manual configuration. It will not be modified
 * if the flowDefaults constant exists.
 */
const merge = require("webpack-merge");
const flowDefaults = require("./webpack.generated.js");
const { GenerateSW } = require("workbox-webpack-plugin");
/**
 * To change the webpack config, add a new configuration object in
 * the merge arguments below:
 */
module.exports = merge(
  flowDefaults,
  // Override default configuration
  // {
  //   mode: 'development',
  //   devtool: 'inline-source-map',
  // },

  // Add a custom plugin
  // (install the plugin with `npm install --save-dev webpack-bundle-analyzer`)
  // {
  //   plugins: [
  //     new require('webpack-bundle-analyzer').BundleAnalyzerPlugin({
  //       analyzerMode: 'static'
  //     })
  //   ]
  // },
  {
    plugins: [
      new GenerateSW({
        swDest: "build/sw.js",
        importsDirectory: "build",
        exclude: [
          /\.map$/,
          /^manifest.*\.js$/,
          /\.js\.gz$/,
          /\.md$/,
          /\.json$/,
          /^index.html$/
        ]
      })
    ]
  }
);
