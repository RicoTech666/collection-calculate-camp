"use strict";

function median_to_letter(collection) {
  var medianVal = compute_median(collection);
  return mapLetterOver26(medianVal);
}

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
  return Math.ceil(medianOfArr);
}

function mapLetterOver26(medianVal) {
  var letterLen = 26;
  if (medianVal <= letterLen) {
    return String.fromCharCode(elem + 96);
  } else if (medianVal <= letterLen * 2) {
    return "a" + String.fromCharCode(medianVal + 96 - letterLen);
  }
}

module.exports = median_to_letter;
