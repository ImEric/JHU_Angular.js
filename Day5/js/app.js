(function (){
'use strict';
angular.module('DigestCycles', [])//we have no dependencies right now
.controller('DCController', DCController)

DCController.$inject = ['$scope'];


function DCController ($scope){

  $scope.itemList = [
    {
      Name: "Eric",
      Age: 23
    },
    {
      Name: "Amy",
      Age: 18
    },
    {
      Name: "Kristy",
      Age: 5
    },
    {
      Name: "Olivia",
      Age: 29
    }
  ];

  function clearInput(){
    $scope.newItemName = null;
    $scope.newItemAge = null;
  }

  $scope.addToList = function(){
    if($scope.newItemName && $scope.newItemAge){
      var item = {
        Name: $scope.newItemName,
        Age: $scope.newItemAge
      };
      $scope.itemList.push(item);
      clearInput();
    }
  };

  $scope.enterPressed = function(keyEvent) {
  if (keyEvent.which === 13){
    $scope.addToList();
  }



}


}

})();
