(function (){
'use strict';
angular.module('myFirstApp', [])//we have no dependencies right now

.controller('MyFirstController', function ($scope){
  $scope.name = "Eric";
  $scope.sum = 0;
  $scope.sayHello = function(){
    return "Welcome, my dear " + $scope.name + "!";
  };

  $scope.displaySum = function(){
    var value = askiiSum();
    $scope.sum = value;
  };

  var askiiSum = function(){
    var string = $scope.name
    var value = 0;
    for (var i = 0; i < string.length; i++){
      value += string.charCodeAt(i);
    }
    return value;
  };
});

})();
