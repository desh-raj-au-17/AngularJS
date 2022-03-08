/// <reference path="angular.min.js" />

const myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    const employee = {
      firstName: "Desh",
      lastName: "Raj",
      job: "Software Deveoper",
      age: 2022 - 1994,
      gender: "Male",
    };
    $scope.data = employee;
  });
