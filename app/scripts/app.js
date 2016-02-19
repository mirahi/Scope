'use strict';

angular
    .module('scopeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('navbar', {
        abstract:true,
        templateUrl: 'index.html'
        })
       .state('main', {
           parent:'navbar',
           url:'/',
           templateUrl:'views/main.html',
           controller:"MediaController"
       })
       .state('detail',{
        parent:'navbar',
        url:'/detail/:fileId',
        templateUrl:'views/singlepage.html',
        controller: 'detailController'
    })
    .state('image',{
        parent:'navbar',
        url:'/image',
        templateUrl:'views/grid-images.html',
        controller:"MediaController"
        
    })
    .state('audio',{
        parent:'navbar',
        url:'/audio',
        templateUrl:'views/grid-audio.html',
        controller:"MediaController"
        
    })
    .state('video',{
        parent:'navbar',
        url:'/video',
        templateUrl:'views/grid-videos.html',
        controller:"MediaController"
        
    })
    ;
  });
