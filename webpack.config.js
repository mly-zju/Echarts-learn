var config={
  devtool: 'eval-source-map',
  entry: {
    topology: './network-topology/index.js',
    world: './world-comparison/index.js',
    world2: './world-comparison2/index.js'
  },

   output: {
      path: 'dist/script',
      filename: '[name]/index.js',
      publicPath: 'dist/script'
   },
  devServer:{
    port: 8080,
    inline: true
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets:['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}

module.exports=config;
