<<<<<<< HEAD
var recipes = new Object()
=======
>>>>>>> 0bff2b00135b01a812f83064a791085e713ffff9

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object, {[key]: value})
  }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  Object.assign({},object)
  return delete object.key
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}