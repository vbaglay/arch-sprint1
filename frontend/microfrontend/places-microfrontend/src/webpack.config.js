import 'host/popupstyles';
import 'host/PopupWithForm';

new ModuleFederationPlugin({
    name: 'places',
    filename: 'remoteEntry.js',
    remotes: {
      host: 'host@http://localhost:3002/remoteEntry.js',
    },
    exposes: {
      './AddPlacePopup': './src/components/AddPlacePopup ',
      './Card': './src/components/Card ',
      './ImagePopup': './src/components/ImagePopup ',
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
    },
  });
  