"use strict";

function compute_median(collection) {
  var sortedArr = sortArrAsc(collection);
  return getMedianFromArr(sortedArr);
}
function sortArrAsc(arrUnsorted) {
  var arrSorted = arrUnsorted.sort(function(leftNum, rightNum) {
    return rightNum - leftNum;
  });
  return arrSorted; //TODO: 变量可以inline
}

function getMedianFromArr(arrSorted) {
  var arrLen = arrSorted.length;
  var medianOfArr;
  if (0 === arrLen % 2) {
    medianOfArr = (arrSorted[arrLen / 2] + arrSorted[arrLen / 2 - 1]) / 2;
  } else {
    medianOfArr = arrSorted[(arrLen - 1) / 2];
  }
  return medianOfArr;
}

module.exports = compute_median;
