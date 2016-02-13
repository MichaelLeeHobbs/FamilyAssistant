'use strict';

angular.module('familyAssistantApp', [
  'familyAssistantApp.auth',
  'familyAssistantApp.admin',
  'familyAssistantApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
