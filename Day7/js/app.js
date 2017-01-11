(function (){
'use strict';
angular.module('ControllerAsApp', [])//we have no dependencies right now
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService',ShoppingListService);
//.factory('ShoppingListFactory', ShoppingListFactory);)

//ShoppingListAddController.$inject = ['ShoppingListService',',maxItems']
function ShoppingListAddController(ShoppingListService){
  var itemAdder = this;
  //var shoppingList = ShoppingListService();

  itemAdder.itemName = null;
  itemAdder.itemQuantity = null;

  itemAdder.addItem = function(){
    try {
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      clearText();
    } catch (e) {
      itemAdder.errorMessage = e.message;
    }
  }


  function clearText(){
    itemAdder.itemName = null;
    itemAdder.itemQuantity = null;
  }
}

//ShoppingListShowController.$inject = ['ShoppingListService','maxItems']
function ShoppingListShowController(ShoppingListService){
  var showList = this;
  //var shoppingList = ShoppingListService;
  showList.items = ShoppingListService.getItems();

  showList.removeItem = function(itemIndex){
    ShoppingListService.removeItem(itemIndex);
  }
}

function ShoppingListService(){
  //var maxItems = 3;
  var service = this;
  var items = [];

  service.addItem = function (itemName, itemQuantity){
    // if((maxItems == undefined) || (maxItems !== undefined && items.length < maxItems)){
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      items.push(item);
    // }
    // else {
    //   throw new Error("Max items (" + maxItems + ") reached.");
    // }

  };

  service.removeItem = function(itemIndex){
    items.splice(itemIndex,1);
  }
  service.getItems = function (){
    return items;
  };

}

function ShoppingListFactory(){
  var factory = function(maxItems){
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
