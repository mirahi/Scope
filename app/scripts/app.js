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
    'ui.router',
    'wu.masonry'
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
    .state('images',{
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
    .state('videos',{
        parent:'navbar',
        url:'/video',
        templateUrl:'views/grid-videos.html',
        controller:"MediaController"
        
    })
    .state('register',{
        parent:'navbar',
        url:'/register',
        templateUrl:'views/register.html',
        controller:"RegisterController"
        
    })
    .state('profile', {
                parent: 'navbar',
                url: '/profile/:userId',
                templateUrl: 'views/profile.html',
                controller: "MediaController"

            });
    ;
  });
