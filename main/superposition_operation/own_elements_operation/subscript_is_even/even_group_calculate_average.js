"use strict";

var even_group_calculate_average = function(collection) {
  var evenArr = getEventhElems(collection);
  if (!checkIfContainedEvenElems(evenArr)) {
    return [0];
  } else {
    var arrReallocated = reallocateByNumberLength(getEvenElems(evenArr));
    var avgArr = calculate2DArrAverage(arrReallocated);
    return avgArr; //TODO: 变量可以inline
  }
};

function getEventhElems(originalArr) { //TODO: 拼写错误
  var evenIndexArr = [];
  for (let index = 0; index < originalArr.length; index++) {
    const elem = originalArr[index];
    if (0 !== index % 2) {
      evenIndexArr.push(elem);
    }
  }
  return evenIndexArr;
}

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

function checkIfContainedEvenElems(arr) {
  var isContainedEven = false;
  for (let i = 0; i < arr.length; i++) {
    var elem = arr[i];
    isContainedEven = isContainedEven || 0 === elem % 2;
  }
  return isContainedEven;
}

function reallocateByNumberLength(arr) {
  var reallocatedArr = [[], [], []];
  for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];
    if (1 === elem.toString().length) {
      reallocatedArr[0].push(elem);
    } else if (2 === elem.toString().length) {
      reallocatedArr[1].push(elem);
    } else if (3 === elem.toString().length) {
      reallocatedArr[2].push(elem);
    }
  }
  return reallocatedArr;
}

function calculate2DArrAverage(twoDArr) {
  var avgArr = [];
  if (0 === twoDArr[0].length && 0 === twoDArr[1].length) {
    avgArr[0] = calculate1DArrAvg(twoDArr[2]);
  } else {
    avgArr = twoDArr.map(elem => {
      return calculate1DArrAvg(elem);
    });
  }
  return avgArr;
}

function calculate1DArrAvg(oneDArr) {
  return oneDArr.reduce((avg, elem, index) => {
    avg += elem;
    if (index === oneDArr.length - 1) {
      avg /= oneDArr.length;
    }
    return avg;
  });
}

module.exports = even_group_calculate_average;
