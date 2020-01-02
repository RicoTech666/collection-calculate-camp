"use strict";

function spilt_to_zero(number, interval) {
  var isZero = canBeSplitedToZero(number, interval);
  return generateSplitArr(number, interval, isZero);
}

function canBeSplitedToZero(number, interval) { //TODO: 拼写错误
  var numberInt = toInt(number);
  var intervalInt = toInt(interval);

  //TODO: 你咋还这么写呢？？
  if (0 === numberInt % intervalInt) {
    return true;
  } else {
    return false;
  }
}

function generateSplitArr(number, interval, canBeSplitedToZero) { //TODO: 拼写错误
  var splitedArr = []; //TODO: 拼写错误
  var numberInt = toInt(number);
  var intervalInt = toInt(interval);
  if (canBeSplitedToZero) {
    while (numberInt >= 0) {
      splitedArr.push(toFloat(numberInt));
      numberInt -= intervalInt;
    }
  } else {
    while (numberInt > -intervalInt) {
      splitedArr.push(toFloat(numberInt));
      numberInt -= intervalInt;
    }
  }
  return splitedArr;
}

function toInt(num) {
  return parseInt(num.toString().split(".")[1]);
}

function toFloat(num) {
  if (num >= 0) {
    return parseFloat("0." + num.toString());
  } else {
    return parseFloat("-0." + (-num).toString());
  }
}

module.exports = spilt_to_zero;
