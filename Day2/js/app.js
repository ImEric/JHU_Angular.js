(function (){
'use strict';
angular.module('DIApp', [])//we have no dependencies right now

.controller('DIController', DIController);

function DIController ($scope, $filter){
  $scope.name = "Eric";
  $scope.stateOfBeing = "before";
  $scope.upper = function (){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  $scope.beatAmy = function(){
    $scope.stateOfBeing = "after";
    alert("亲爱的我好喜欢你呀！");
  }
}


})();
