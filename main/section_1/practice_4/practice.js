function collect_same_elements(collection_a, object_b) {
  var arrAOneDim = getKeysFromObjectArray(collection_a);
  var arrBOneDim = getElemsByAttributeName(object_b, "value");
  return collectSameElemsOneDim(arrAOneDim, arrBOneDim);
}

function getKeysFromObjectArray(ObjectArray) {
  return ObjectArray.map(function(currentObj) {
    return currentObj.key;
  });
}

function getElemsByAttributeName(arrObj, attrStr) { //TODO: 这种方法没必要抽出来，只有一行实现，并且实现简单
  return arrObj[attrStr];
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

module.exports = collect_same_elements;
