// Code your solution in this file
function findMatching(collection, arg){
  return collection.filter(function (item) {
    return item.toUpperCase() === arg.toUpperCase();
  });
}

function firstLetters(string){
  return string.substring(0,2);
}

function fuzzyMatch(collection, arg){
  return collection.filter(function (item) {
    return firstLetters(item) === firstLetters(arg);
  });
}
