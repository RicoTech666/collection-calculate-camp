function count_same_elements(collection) {
  var countedObjFromCollection = countArrToObj(collection);

  return countObjToObjArray(countedObjFromCollection);
}

function countArrToObj(arr) {
  return arr.reduce(function(allElems, elem) {
    if (elem in allElems) {
      allElems[elem]++;
    } else if (isDash(elem)) {
      var dashArr = processDash(elem);
      if (dashArr[0] in allElems) {
        allElems[dashArr[0]] += parseInt(dashArr[1]);
      } else {
        allElems[dashArr[0]] = parseInt(dashArr[1]);
      }
    } else if (isBrackets(elem)) {
      var bracketsArr = processBrackets(elem);
      if (bracketsArr[0] in allElems) {
        allElems[bracketsArr[0]] += parseInt(bracketsArr[1]);
      } else {
        allElems[bracketsArr[0]] = parseInt(bracketsArr[1]);
      }
    } else if (isColon(elem)) {
      var colonArr = processColon(elem);
      if (colonArr[0] in allElems) {
        allElems[colonArr[0]] += parseInt(colonArr[1]);
      } else {
        allElems[colonArr[0]] = parseInt(colonArr[1]);
      }
    } else {
      allElems[elem] = 1;
    }
    return allElems;
  }, {});
}

function isDash(str) {
  return -1 !== str.indexOf("-");
}

function isBrackets(str) {
  return -1 !== str.indexOf("[");
}

function isColon(str) {
  return -1 !== str.indexOf(":");
}

function processDash(str) {
  var dashArr = [];
  dashArr = str.split("-");
  return dashArr; //TODO: 变量可以inline
}

function processBrackets(str) {
  var bracketsArr = [];
  bracketsArr[0] = str[0];
  bracketsArr[1] = str.match(/\d+/)[0];
  return bracketsArr;
}

function processColon(str) {
  var colonArr = [];
  colonArr = str.split(":");
  return colonArr; //TODO: 变量可以inline
}

function countObjToObjArray(countedObj) {
  var objArray = [];
  for (var key in countedObj) {
    objArray.push({ name: key, summary: countedObj[key] });
  }
  return objArray;
}

module.exports = count_same_elements;
