"use strict";
var single_element = function(collection) {
  var eventhArr = getEventhElems(collection);
  var singleElements = findDistinctElems(eventhArr);
  return singleElements; //TODO: 变量可以inline
};

function getEventhElems(originalArr) {
  var evenIndexArr = [];
  for (let index = 0; index < originalArr.length; index++) {
    const elem = originalArr[index];
    if (0 !== index % 2) {
      evenIndexArr.push(elem);
    }
  }
  return evenIndexArr;
}

function findDistinctElems(arr) {
  var arrDinstinct = [];
  arr.forEach(elem => {
    if (arr.indexOf(elem) === arr.lastIndexOf(elem)) {
      arrDinstinct.push(elem);
    }
  });
  return arrDinstinct;
}

module.exports = single_element;
