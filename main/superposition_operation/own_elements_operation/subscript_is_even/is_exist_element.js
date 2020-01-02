"use strict";
var is_exist_element = function(collection, element) {
  var evenArr = getEvenIndexElems(collection);
  var isElemInArr = isExist(evenArr, element);
  return isElemInArr; //TODO: 变量可以inline
};

function getEvenIndexElems(originalArr) {
  var evenIndexArr = [];
  for (let index = 0; index < originalArr.length; index++) {
    const elem = originalArr[index];
    if (0 === index % 2) {
      evenIndexArr.push(elem);
    }
  }
  return evenIndexArr;
}

function isExist(arr, element) {
  return arr.reduce((isExisted, eachElem) => {
    isExisted = isExisted || element === eachElem;
    return isExisted;
  }, false);
}

module.exports = is_exist_element;
