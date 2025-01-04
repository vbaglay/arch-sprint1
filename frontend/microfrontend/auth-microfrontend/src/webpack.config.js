
new ModuleFederationPlugin({
    name: 'auth',
    filename: 'remoteEntry.js',
    remotes: {
      host: 'host@http://localhost:3003/remoteEntry.js',
    },
    exposes: {
      './InfoTooltip': './src/components/InfoTooltip ',
      './Login': './src/components/Login ',
      './Register': './src/components/Register ',
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
    },
  });