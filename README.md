Задание 1
---------------------
https://github.com/vbaglay/arch-sprint1/tree/sprint_1

##Проектирование

Выбрал Module Federation фреймворк для данного задания. 

Вертикально нарезал  микрофронтеды на 3 домена: авторизация, профиль пользователя и работа с местами(карточками). Стратегия изоляции тут тоже применима, все микрофронтенды не будут зависить друг от друга. 
Общие зависимости можно вынести в отдельный модуль shared-ui и импортировать где необходимо благодаря Module Federation.
С точки зрения независимых фреймворков(vue, react, angular) в данном проекте в этом нет необходимости, вполне достаточно одного фреймворка. Независимость команд разработки обеспечивается разделением на уровне бизнес-функционала и изолированности самих микрофронтедов. Компоненты будут компоноваться run-time, что поддерживается Module federation, который позволяет микрофронтендам динамически обмениваться зависимостями во время выполнения и разрабатываться разными командами.
Нет смысла в SPA, так как достаточно, React для реализации всего функционала приложения.

##Структура приложения

###host  - это основное приложение Host webmodule plugin
Компоненты:
- host/src/components/App.js 
- host/src/components/Footer.js
- host/src/components/Header.js
- host/src/components/ProtectedRoute.js

###auth-microfrontend - remote модуль авторизации
Компоненты:
- microfrontend/auth-microfrontend/src/components/InfoTooltip.js
- microfrontend/auth-microfrontend/src/components/Login.js
- microfrontend/auth-microfrontend/src/components/Register.js


###places-microfrontend - remote модуль загрузки фоток, удаление и сбор лайков
Компоненты:
- microfrontend/places-microfrontend/src/components/AddPlacePopup.js
- microfrontend/places-microfrontend/src/components/Card.js
- microfrontend/places-microfrontend/src/components/ImagePopup.js

###profile-microfrontend - remote модуль профиля пользователя
Компоненты:
- microfrontend/profile-microfrontend/src/components/EditAvatarPopup.js
- microfrontend/profile-microfrontend/src/components/EditProfilePopup.js

###shared-ui - модуль общих компонентов и стилей
Компоненты:
- microfrontend/shared-ui/src/components/PopupWithForm.js


Задание 2
---------------------
https://github.com/vbaglay/yandex-backend-sprint1/blob/main/arch_template_task2_solution.drawio
