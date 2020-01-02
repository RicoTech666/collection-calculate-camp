"use strict";

function choose_no_repeat_number(collection) {
  var norepeatArr = [collection[0]]; //TODO: 命名规则noRepeatArray
  for (var i = 1; i < collection.length; i++) {
    if (-1 === norepeatArr.indexOf(collection[i])) {
      norepeatArr.push(collection[i]);
    }
  }
  return norepeatArr;
}

module.exports = choose_no_repeat_number;
