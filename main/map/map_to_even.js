"use strict";
function map_to_even(collection) {
  return collection.map(function(elem) {
    return 2 * elem;
  });
}
module.exports = map_to_even;
