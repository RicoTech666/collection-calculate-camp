"use strict";

function get_integer_interval_2(number_a, number_b) {
  var evenInterval = [];
  if (number_a != number_b) { //TODO: 两个等号？
    if (number_a < number_b) {
      var leftNum = 0 === number_a % 2 ? number_a : number_a + 1;
      while (leftNum <= number_b) {
        evenInterval.push(leftNum);
        leftNum += 2;
      }
    } else {
      var leftNum = 0 === number_a % 2 ? number_a : number_a - 1;
      while (leftNum >= number_b) {
        evenInterval.push(leftNum);
        leftNum -= 2;
      }
    }
  } else {
    if (0 === number_a % 2) {
      evenInterval.push(number_a);
    }
  }
  return evenInterval;
}

module.exports = get_integer_interval_2;
