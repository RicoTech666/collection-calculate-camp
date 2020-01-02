function create_updated_collection(collection_a, object_b) {
  var collectionACounted = count_same_elements(collection_a);
  for (var i = 0; i < collectionACounted.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (collectionACounted[i].key === object_b.value[j]) {
        collectionACounted[i].count -= Math.floor(collectionACounted[i].count / 3);
      }
    }
  }
  return collectionACounted;
}

function count_same_elements(collection) {
  var countedObjFromCollection = countArrToObj(collection);
  var objArrayDashTransfered = transferDashNumberToValue( //TODO: 拼写错误
    countedObjFromCollection
  );
  return countObjToObjArray(objArrayDashTransfered);
}

function countArrToObj(arr) {
  return arr.reduce(function(allElems, elem) {
    if (elem in allElems) {
      allElems[elem]++;
    } else {
      allElems[elem] = 1;
    }
    return allElems;
  }, {});
}

function transferDashNumberToValue(objNeedToBeTransfered) { //TODO: 拼写错误
  var arrObj = objNeedToBeTransfered;
  for (var key in arrObj) {
    if (-1 !== key.indexOf("-")) {
      var newKey = key.split("-")[0];
      var newValue = key.split("-")[1];
      delete arrObj[key];
      arrObj[newKey] = parseInt(newValue);
    }
  }
  return arrObj;
}

function countObjToObjArray(countedObj) {
  var objArray = [];
  for (var key in countedObj) {
    objArray.push({ key: key, count: countedObj[key] });
  }
  return objArray;
}
module.exports = create_updated_collection;
