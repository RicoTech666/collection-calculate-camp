"use strict";
var even_asc_odd_desc = function(collection) {
  var evenSubAsc = rankAsc(getEvenElems(collection));
  console.log(evenSubAsc);
  var oddSubDesc = rankDesc(getOddElems(collection));
  var evenAscOddDesc = evenSubAsc;
  while (0 !== oddSubDesc.length) {
    evenAscOddDesc.push(oddSubDesc.shift());
  }
  return evenAscOddDesc;
};

function getEvenElems(arr) {
  var evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (0 === elem % 2) {
      evenArr.push(elem);
    }
  }
  return evenArr;
}

function getOddElems(arr) {
  var evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (0 !== elem % 2) {
      evenArr.push(elem);
    }
  }
  return evenArr;
}

function rankAsc(collection) {
  return collection.sort(function(leftNum, rightNum) {
    return leftNum - rightNum;
  });
}

function rankDesc(collection) {
  return collection.sort(function(leftNum, rightNum) {
    return rightNum - leftNum;
  });
}

module.exports = even_asc_odd_desc;
