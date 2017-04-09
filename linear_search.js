function linearSearch(array, num){
  var num;
  for(var i = 0; i < array.length; i++){
    if(array[i] == num) {
      num=i;
      break;
    }
  }
  return num
}

if(typeof exports !== "undefined"){
  exports.linearSearch = linearSearch;
}
