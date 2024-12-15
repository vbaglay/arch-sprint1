new ModuleFederationPlugin({
    name: 'host',
    filename: 'remoteEntry.js',
    remotes: {
        profile: 'profile@http://localhost:3001/remoteEntry.js',
        places: 'places@http://localhost:3002/remoteEntry.js',
        auth: 'auth@http://localhost:3003/remoteEntry.js',
    },
    exposes: {
        './PopupWithForm': './src/components/PopupWithForm',
        './popupstyles': './src/styles/popup.css',
    },
    shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
    },
});