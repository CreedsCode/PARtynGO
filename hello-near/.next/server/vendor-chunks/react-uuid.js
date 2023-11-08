/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-uuid";
exports.ids = ["vendor-chunks/react-uuid"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-uuid/uuid.js":
/*!*****************************************!*\
  !*** ./node_modules/react-uuid/uuid.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\nA function that returns a universally unique identifier (uuid).  \nexample: 1b83fd69-abe7-468c-bea1-306a8aa1c81d\n@returns `string` : 32 character uuid (see example)\n*/\nfunction uuid() {\n  const hashTable = [\n    'a',\n    'b',\n    'c',\n    'd',\n    'e',\n    'f',\n    '0',\n    '1',\n    '2',\n    '3',\n    '4',\n    '5',\n    '6',\n    '7',\n    '8',\n    '9',\n  ];\n  let uuid = [];\n  for (let i = 0; i < 35; i++) {\n    if (i === 7 || i === 12 || i === 17 || i === 22) {\n      uuid[i] = '-';\n    } else {\n      uuid[i] = hashTable[Math.floor(Math.random() * hashTable.length - 1)];\n    }\n  }\n  return uuid.join('');\n}\n\nmodule.exports = uuid;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXVpZC91dWlkLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9yZWFjdC11dWlkL3V1aWQuanM/MDUwYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdW5pdmVyc2FsbHkgdW5pcXVlIGlkZW50aWZpZXIgKHV1aWQpLiAgXG5leGFtcGxlOiAxYjgzZmQ2OS1hYmU3LTQ2OGMtYmVhMS0zMDZhOGFhMWM4MWRcbkByZXR1cm5zIGBzdHJpbmdgIDogMzIgY2hhcmFjdGVyIHV1aWQgKHNlZSBleGFtcGxlKVxuKi9cbmZ1bmN0aW9uIHV1aWQoKSB7XG4gIGNvbnN0IGhhc2hUYWJsZSA9IFtcbiAgICAnYScsXG4gICAgJ2InLFxuICAgICdjJyxcbiAgICAnZCcsXG4gICAgJ2UnLFxuICAgICdmJyxcbiAgICAnMCcsXG4gICAgJzEnLFxuICAgICcyJyxcbiAgICAnMycsXG4gICAgJzQnLFxuICAgICc1JyxcbiAgICAnNicsXG4gICAgJzcnLFxuICAgICc4JyxcbiAgICAnOScsXG4gIF07XG4gIGxldCB1dWlkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzU7IGkrKykge1xuICAgIGlmIChpID09PSA3IHx8IGkgPT09IDEyIHx8IGkgPT09IDE3IHx8IGkgPT09IDIyKSB7XG4gICAgICB1dWlkW2ldID0gJy0nO1xuICAgIH0gZWxzZSB7XG4gICAgICB1dWlkW2ldID0gaGFzaFRhYmxlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhhc2hUYWJsZS5sZW5ndGggLSAxKV07XG4gICAgfVxuICB9XG4gIHJldHVybiB1dWlkLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV1aWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-uuid/uuid.js\n");

/***/ })

};
;