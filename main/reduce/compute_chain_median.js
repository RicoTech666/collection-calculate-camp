"use strict";

function compute_chain_median(collection) {
  var arr = getArrayFromChain(collection);
  var sortedArr = sortArrAsc(arr);
  return getMedianFromArr(sortedArr);
}

function getArrayFromChain(strChain) {
  var arr = strChain.split("->").map(Number);
  return arr;
}

function sortArrAsc(arrUnsorted) {
  var arrSorted = arrUnsorted.sort(function(leftNum, rightNum) {
    return rightNum - leftNum;
  });
  return arrSorted;
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

module.exports = compute_chain_median;
