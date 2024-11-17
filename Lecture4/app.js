(function () {
  "use strict";
  angular
    .module("myFirstApp", [])
    .controller("MyFirstController", function ($scope) {
      $scope.name = "Rabia";
      $scope.sayHello = function () {
        return "Hello Cousera!";
      };
    });
})();
