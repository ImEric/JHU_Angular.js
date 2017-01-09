(function (){
'use strict';
angular.module('ControllerAsApp', [])//we have no dependencies right now
.controller('ParentController1', ParentController1)
.controller('ChildController1',ChildController1)
// .controller('ParentController2', ParentController2)
// .controller('ChildController2',ChildController2)

function ParentController1(){
  var parent = this;
  $scope.parentValue = 1;
  $scope.pc = this;
  $scope.pc.parentValue = 1;
}

ChildController1.$inject = ['$scope'];
function ChildController1($scope){
  var child = this;
  console.log("$scope.parentValue: ", $scope.parentValue);
  console.log("CHILD $scope: ", $scope);

  $scope.parentValue = 5;
  console.log("$scope.parentValue: ", $scope.parentValue);
  console.log("CHILD $scope: ", $scope);
}


})();
