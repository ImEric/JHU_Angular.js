// var parent = {
//   value: "parentValue",
//   obj: {
//     objValue: "parentObjValue"
//   },
//   walk: function (){
//     console.log("Walking!");
//   }
// };
//
// var child = Object.create(parent);
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
//
//
// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log(parent);
// console.log(child);
//
// function Dog(name) {
//   this.name = name;
//   console.log("'this' is: ", this);
// }
//
// var myDog = new Dog("Max");
// console.log("myDog: ", myDog);
//
// Dog("Max2");
