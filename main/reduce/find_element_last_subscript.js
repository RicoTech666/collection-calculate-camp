"use strict";

function calculate_elements_sum(collection, element) {
  var matchedSubArr = getMathcedSubArr(collection, element);
  return matchedSubArr[matchedSubArr.length - 1];
}

function getMathcedSubArr(collection, element) { //TODO: 拼写错误
  var matchedSubArr = collection.reduce(function(matchedSub, arrElem, index) {
    if (arrElem === element) {
      matchedSub.push(index);
    }
    return matchedSub;
  }, []);
  return matchedSubArr; //TODO: 变量可以inline
}

module.exports = calculate_elements_sum;
