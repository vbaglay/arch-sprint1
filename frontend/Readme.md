host  - это основное приложение Host webmodule plugin
Компоненты:
host/src/components/App.js
host/src/components/Footer.js
host/src/components/Header.js
host/src/components/PopupWithForm.js общий компонент и он экспортируется для консьюминга другими модулями
host/src/components/ProtectedRoute.js


auth-microfrontend - remote модуль авторизации
Компоненты:
- microfrontend/auth-microfrontend/src/components/InfoTooltip.js
- microfrontend/auth-microfrontend/src/components/Login.js
- microfrontend/auth-microfrontend/src/components/Register.js

places-microfrontend - remote модуль загрузки фоток, удаление и сбор лайков
Компоненты:
microfrontend/places-microfrontend/src/components/AddPlacePopup.js
microfrontend/places-microfrontend/src/components/Card.js
microfrontend/places-microfrontend/src/components/ImagePopup.js

profile-microfrontend - remote модуль профиля пользователя
Компоненты:
microfrontend/profile-microfrontend/src/components/EditAvatarPopup.js
microfrontend/profile-microfrontend/src/components/EditProfilePopup.js