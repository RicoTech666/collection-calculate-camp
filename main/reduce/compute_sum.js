"use strict";

function calculate_elements_sum(collection) {
  return collection.reduce(function(sumOfArr, elem) {
    return (sumOfArr = sumOfArr + elem); //TODO: sumOfArr这个赋值？
  });
}

module.exports = calculate_elements_sum;
