function collect_same_elements(collection_a, collection_b) {
  var collectionBOneDim = double_to_one(collection_b);
  return collectSameElemsOneDim(collection_a, collectionBOneDim);
}

function collectSameElemsOneDim(collection_a, collection_b) {
  var theSameElems = [];
  for (var i = 0; i < collection_a.length; i++) {
    if (-1 != collection_b.indexOf(collection_a[i])) { //TODO: 两个等号？
      theSameElems.push(collection_a[i]);
    }
  }
  return theSameElems;
}

function double_to_one(twoDimArr) {
  var oneDimArr = [];
  for (var i = 0; i < twoDimArr.length; i++) {
    if ("number" === typeof twoDimArr[i]) {
      oneDimArr.push(twoDimArr[i]);
    } else if ("object" === typeof twoDimArr[i]) {
      for (var j = 0; j < twoDimArr[i].length; j++) {
        oneDimArr.push(twoDimArr[i][j]);
      }
    }
  }
  return eliminateRepetition(oneDimArr);
}

function eliminateRepetition(arr) {
  var arrNoRepetition = [];
  for (var i = 0; i < arr.length; i++) {
    if (-1 === arrNoRepetition.indexOf(arr[i])) {
      arrNoRepetition.push(arr[i]);
    }
  }
  return arrNoRepetition;
}

module.exports = collect_same_elements;
