var recipes = new Object({});

var object = {prop: 1 }
function updateObjectWithKeyAndValue (object, key, value) {
 return Object.assign({}, object, { [key]: value })  }
 
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = value
return object
 }
 var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, recipes)
//delete newObj.foo
 function deleteFromObjectByKey(object, key){
delete recipes.key 
return recipes
 }
 

 function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key]
   return object
 }
