/// <reference path="angular.min.js" />

// "use strict";

let myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
  $scope.message = "Angular JS Tute - 3";
  const employee = {
    firstName: "Desh",
    lastName: "Raj",
    job: "Software Deveoper",
    age: 2022 - 1994,
    gender: "Male",
  };
  $scope.data = employee;
});
