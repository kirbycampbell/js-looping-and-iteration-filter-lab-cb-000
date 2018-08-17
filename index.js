// Code your solution in this file
function findMatching(collection, arg){
  return collection.filter(function (item) {
    return item.toUpperCase() === arg.toUpperCase();
  });
}

function fuzzyMatch(collection, arg){
  return collection.filter(function (item) {
    return item.substring(0,2) === arg.substring(0,2);
  });
}
