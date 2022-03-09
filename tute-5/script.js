/// <reference path="angular.min.js" />
"use strict";

const myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    $scope.name = "Desh Raj";
    let employee = {
      firstName: "Desh",
      lastName: "Raj",
      gender: "Male",
    };
    $scope.data = employee;
  });
