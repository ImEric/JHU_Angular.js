var numberArray = [1,2,3,4,5,6,7,8,9,10];
function evenFilter(value){
  return (value%2 == 0);
}
var filteredArray = numberArray.filter(evenFilter);
console.log(filteredArray);
