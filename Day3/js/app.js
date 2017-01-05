(function (){
'use strict';
angular.module('Day3', [])//we have no dependencies right now
.controller('MsgController', MsgController)
.filter('msg', msgFilter)
.filter('blah',blahFilter);

MsgController.$inject = ['$scope', '$filter', 'msgFilter'];

function MsgController ($scope,$filter,msgFilter){
  $scope.name = "Eric";
  $scope.sum = 0;
  $scope.msg = "";

  $scope.sayMessage = function(){
    $scope.msg = "Welcome, my dear ";
    //var output = $filter('uppercase')(msg);
    var upCase = $filter('uppercase');
    return upCase($scope.msg);
  };

  $scope.displaySum = function(){
    var value = askiiSum();
    $scope.sum = value;
  };

  $scope.sayFilteredMsg = function () {
    var msg = msgFilter($scope.msg);
    return(msg);
  }


  var askiiSum = function(){
    var string = $scope.name
    var value = 0;
    for (var i = 0; i < string.length; i++){
      value += string.charCodeAt(i);
    }
    return value;
  };
}


function msgFilter() {
  return function (input){
    input = input || "";
    input = input.replace("Welcome","Hello");
    return input;
  };
}

function blahFilter(){
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  };
}


})();
