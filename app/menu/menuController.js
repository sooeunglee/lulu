'use strict';

angular.module('lulu.menu', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('menu', {
            url: '/menu',
            templateUrl: 'menu/menu.html',
            controller: 'MenuController'
        })
}])

.controller('MenuController', ['$scope', '$location', '$state',
    function($scope, $location, $state) {

var items = [
    {
        _id: 1,
        name: "Chicken Gyoza Eggroll",
        abbr: "CH+GZ+E",
        image: "ChickenGyozaEggroll.png",
        price: 9.49,
        modifiers: [ 0, 1 ],
        categories: [ 0 ]
    },
    {
        _id: 2,
        name: "Spicy Gyoza Eggroll",
        abbr: "SP+GZ+E",
        price: 9.49,
        modifiers: [ 0, 1 ],
        categories: [ 0 ]
    },
    {
        _id: 3,
        name: "General Chicken Gyoza",
        abbr: "Gen+GZ",
        price: 9.49,
        modifiers: [ 0, 1 ],
        categories: [ 0 ]
    },
    {
        _id: 4,
        name: "Crispy Gyoza",
        abbr: "Crsp GZ",
        price: 9.49,
        modifiers: [ 0, 1 ],
        categories: [ 0 ]
    },
    {
        _id: 11,
        name: "Chicken Teriyaki",
        abbr: "CH T",
        price: 7.49,
        modifiers: [ 0, 1 ],
        categories: [ 1 ]
    },
    {
        _id: 12,
        name: "Spicy Chicken Teriyaki",
        abbr: "SP T",
        price: 7.99,
        modifiers: [ 0, 1 ],
        categories: [ 1 ]
    },
    {
        _id: 13,
        name: "Chicken Breast Teriyaki",
        abbr: "BRST",
        price: 8.49,
        modifiers: [ 0, 1 ],
        categories: [ 1 ]
    },
    {
        _id: 14,
        name: "Beef Teriyaki",
        abbr: "BF T",
        price: 8.49,
        modifiers: [ 0, 1 ],
        categories: [ 1 ]
    },
    {
        _id: 15,
        name: "Pork Teriyaki",
        abbr: "Pork T",
        price: 8.49,
        modifiers: [ 0, 1 ],
        categories: [ 1 ]
    },
    {
        _id: 16,
        name: "Salmon Teriyaki",
        abbr: "Salmon",
        price: 10.49,
        modifiers: [ 0, 1 ],
        categories: [ 1 ]
    },
    {
        _id: 21,
        name: "Chicken Katsu",
        abbr: "Katsu",
        price: 8.99,
        image: "Katsu.jpg",
        modifiers: [ 0, 2 ],
        categories: [ 2 ]
    },
    {
        _id: 22,
        name: "Crispy Chicken",
        abbr: "Crispy",
        price: 8.99,
        modifiers: [ 0, 2 ],
        categories: [ 2 ]
    },
    {
        _id: 23,
        name: "Gyoza Plate",
        abbr: "Gyoza PL",
        price: 8.99,
        modifiers: [ 0, 2 ],
        categories: [ 2 ]
    }
];

var categories = [
    {
        _id: 0,
        name: "Today's Special",
        image: "ChickenGyozaEggroll.png"
    },
    {
        _id: 1,
        name: "Teriyaki",
        image: "ChickenGyoza.jpg"
    },
    {
        _id: 2,
        name: "Battered",
        image: "Katsu.jpg"
    }
];

    $scope.items = items;
    $scope.categories = categories;

}]);

