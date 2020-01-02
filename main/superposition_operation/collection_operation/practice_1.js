"use strict";

function hybrid_operation(collection) {
  return collection.reduce(function(calculated, collectionElem, index) { //TODO: index没用可以不传
    calculated += collectionElem * 3 + 2;
    return calculated;
  }, 0);
}

module.exports = hybrid_operation;
