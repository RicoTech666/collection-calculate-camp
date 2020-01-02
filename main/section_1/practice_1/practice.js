function collect_same_elements(collection_a, collection_b) {
  var theSameElems = [];
  for (var i = 0; i < collection_a.length; i++) {
    if (-1 != collection_b.indexOf(collection_a[i])) { //TODO: 两个等号？
      theSameElems.push(collection_a[i]);
    }
  }
  return theSameElems;
}

module.exports = collect_same_elements;
