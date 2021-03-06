function binarySearch(array, searchNumber){
  result = undefined;

  binaryElementsLength = array.length;

  middleElement = Math.round(binaryElementsLength / 2);

  function spliceLeft(array, searchNumber){
      for(let left = 0; left < searchNumber; left++) {
        array.splice(array.indexOf(left), 1);
      }
      return array;
  }

  function spliceRight(array, searchNumber){
      for(let right = searchNumber+1 ; right < binaryElementsLength; right++) {
        array.splice(array.indexOf(right), 1);
      }
      return array;
  }

  if(searchNumber < middleElement || searchNumber > middleElement){
    let spliceLeft = spliceLeft(array, searchNumber);
    result = spliceRight(spliceLeft, searchNumber);
  }

  return result[0];
}


if(typeof exports !== 'undefined') {
    exports.binarySearch = binarySearch;
}
