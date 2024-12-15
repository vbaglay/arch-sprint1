new ModuleFederationPlugin({
    name: 'profile',
    filename: 'remoteEntry.js',
    remotes: {
      host: 'host@http://localhost:3001/remoteEntry.js',
    },
    exposes: {
      './EditAvatarPopup': './src/components/EditAvatarPopup ',
      './EditProfilePopup': './src/components/EditProfilePopup ',
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
    },
  });
  