angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('advanturers',{
              url:'/advantures',
              parent:'home',
              templateUrl: '../views/about-adventurers.html'
            })
            .state('locations',{
              templateUrl:"../views/locations.html",
              url: '/locations',
              controller: 'locationsCtrl'
            })
            .state('booked',{
              templateUrl:'../views/booked.html',
              url: '/booked/:id',
              controller: 'bookedCtrl'
            })
            .state('packages',{
              templateUrl: '../views/packages.html',
              url:'/packages',
              controller: 'packagesCtrl'
            })
            .state('about',{
              templateUrl:'../views/about.html',
              url:'/about',
            })
            .state('contact',{
              templateUrl: '../views/contact.html',
              url: '/contact',
            });

        $urlRouterProvider
            .otherwise('/');
    });
