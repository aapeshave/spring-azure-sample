'use strict';
angular.module('todoApp', ['ngRoute', 'MsalAngular'])
    .config(['$routeProvider', '$httpProvider', 'msalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, msalProvider) {

        $routeProvider.when("/Home", {
            controller: "homeCtrl",
            templateUrl: "/App/Views/Home.html",
        }).when("/TodoList", {
            controller: "todoListCtrl",
            templateUrl: "/App/Views/TodoList.html",
            requireLogin: true,
        }).when("/UserData", {
            controller: "userDataCtrl",
            templateUrl: "/App/Views/UserData.html",
        }).otherwise({redirectTo: "/Home"});

        window.applicationConfig = {
            clientID: '2784d99a-5d25-4e2c-a01c-5f762d79b53e'
        };

        msalProvider.init(
            {
                authority: 'https://login.microsoftonline.com/peshavedev.onmicrosoft.com',
                clientID: applicationConfig.clientID,
                cacheLocation: 'localStorage',
                postLogoutRedirectUri: 'http://localhost:786/logout',

                tokenReceivedCallback: function (errorDesc, token, error, tokenType) {
                },
            },
            $httpProvider
        );

    }]);
