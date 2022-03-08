/// <reference path="angular.min.js"/>
"use strict";

const myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    $scope.name = "Angular.JS Tute-4";
    let myDetails = {
      name: "Desh Raj",
      age: 2022 - 1994,
      image: "desh-raj.jpg",
    };
    $scope.data = myDetails;
  });
