"use strict";

function compare_collections(collection_a, collection_b) {
  var isTheSame = true;
  return collection_a.reduce(function(isTheSameAccumulator, elem, index) {
    isTheSameAccumulator = isTheSameAccumulator && elem === collection_b[index];
    return isTheSameAccumulator;
  }, isTheSame); //TODO: 变量可以inline
}

module.exports = compare_collections;
