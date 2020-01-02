"use strict";

function get_integer_interval(number_a, number_b) {
  var allInterval = [];
  var leftNum = number_a;
  if (number_a < number_b) {
    while (leftNum <= number_b) {
      allInterval.push(leftNum);
      leftNum++;
    }
  } else if (number_a > number_b) {
    while (leftNum >= number_b) {
      allInterval.push(leftNum);
      leftNum--;
    }
  } else {
    allInterval.push(leftNum);
  } //TODO: 这个等于的情况能够跟上面的情况合并起来吗？
  return allInterval;
}

module.exports = get_integer_interval;
