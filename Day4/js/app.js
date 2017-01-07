(function (){
'use strict';
angular.module('DigestCycles', [])//we have no dependencies right now
.controller('DCController', DCController)

DCController.$inject = ['$scope','$interval'];

// function DCController ($scope){
//   $scope.count = 0;
//   $scope.counter = function(){
//     setTimeout(function(){
//       $scope.count++;
//       $scope.$digest();
//     },2000);
//   };

// function DCController ($scope){
//   $scope.count = 0;
//   $scope.counter = function(){
//     setTimeout(function(){
//       $scope.$apply(function(){
//         $scope.count++;
//       });
//     },1000);
//   };
// }

function DCController ($scope,$interval){
  $scope.count = 10;
  $scope.button_label = "Count Down";
  var stop;

  $scope.counter = function(){

    if($scope.button_label === "Count Down"){
      $scope.button_label = "Please Wait";
      countdown();
    }
  };

  function countdown(){
    stop = $interval(function(){
      if($scope.count > 0){
        $scope.count--;
      }
      else{
        reset();
      }
    },1000,0);
  }

  function reset(){
    $interval.cancel(stop);
    $scope.count = 10;
    $scope.button_label = "Count Down";
  }
}




})();
