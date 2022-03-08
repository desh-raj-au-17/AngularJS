/// <reference path="angular.min.js" />

// angular module.
let myApp = angular.module("myModule", []);

// angular controller.

// let myController = function ($scope) {
//   $scope.message = "AngularJS Tutorials";
// };

// register controller fuction with angular module.
// myApp.controller("myController", myController);

// or wem can do insted of definig our controller function seprate. we can directiy define controller function inside controller function.

myApp.controller("myController", function ($scope) {
  $scope.message = "AngularJS Tutorials";
});
