'use strict';

angular.module('familyAssistantApp.auth', [
  'familyAssistantApp.constants',
  'familyAssistantApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
