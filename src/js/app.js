var app = angular.module("conventions", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "./src/templates/home.html",
            controller : 'homeCtrl'
    })
        .when("/about", {
        templateUrl : "./src/templates/about.html",
        controller : 'aboutCtrl'
    })
        .when("/solutions", {
        templateUrl : "./src/templates/solutions.html",
            controller : 'solutionsCtrl'
    })
        .when("/team", {
        templateUrl : "./src/templates/team.html",
            controller : 'teamCtrl'

    })
        .when("/clients", {
        templateUrl : "./src/templates/clients.html",
            controller : 'clientsCtrl'
    })
        .when("/franchisee", {
        templateUrl : "./src/templates/franchisee.html",
            controller : 'franchiseeCtrl'
    })
        .when("/contact", {
        templateUrl : "./src/templates/contacts.html",
            controller : 'contactsCtrl'
    })
    
});