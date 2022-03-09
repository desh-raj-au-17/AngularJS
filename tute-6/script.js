/// <reference path="angular.min.js" />
"use strict";

const myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    $scope.name = "Desh Raj";

    let employees = [
      {
        firstName: "Desh",
        lastName: "Raj",
        company: "Byldd",
        gender: "Male",
        salary: 55000,
      },
      {
        firstName: "Vaishnavi",
        lastName: "Gupta",
        company: "Attain-u",
        gender: "Female",
        salary: 50000,
      },
      {
        firstName: "Roopam",
        lastName: "Joshi",
        company: "Attain-u",
        gender: "Male",
        salary: 45000,
      },
      {
        firstName: "Atul",
        lastName: "Kumar",
        company: "Attain-u",
        gender: "Male",
        salary: 51000,
      },
    ];
    $scope.employees = employees;

    let countries = [
      {
        name: "India",
        cities: [
          { name: "Sundar Nagar" },
          { name: "Mandi" },
          { name: "Bilaspur" },
        ],
      },
      {
        name: "UK",
        cities: [
          { name: "London" },
          { name: "Manchaster" },
          { name: "Birmingham" },
        ],
      },
      {
        name: "USA",
        cities: [
          { name: "Los Angeles" },
          { name: "Chicago" },
          { name: "Houston" },
        ],
      },
    ];
    $scope.countries = countries;
  });
