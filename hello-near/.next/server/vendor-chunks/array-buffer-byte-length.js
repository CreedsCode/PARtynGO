"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/array-buffer-byte-length";
exports.ids = ["vendor-chunks/array-buffer-byte-length"];
exports.modules = {

/***/ "(ssr)/./node_modules/array-buffer-byte-length/index.js":
/*!********************************************************!*\
  !*** ./node_modules/array-buffer-byte-length/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\nvar $byteLength = callBound('ArrayBuffer.prototype.byteLength', true);\n\nvar isArrayBuffer = __webpack_require__(/*! is-array-buffer */ \"(ssr)/./node_modules/is-array-buffer/index.js\");\n\nmodule.exports = function byteLength(ab) {\n\tif (!isArrayBuffer(ab)) {\n\t\treturn NaN;\n\t}\n\treturn $byteLength ? $byteLength(ab) : ab.byteLength;\n}; // in node < 0.11, byteLength is an own nonconfigurable property\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXJyYXktYnVmZmVyLWJ5dGUtbGVuZ3RoL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGdCQUFnQixtQkFBTyxDQUFDLHdFQUFxQjtBQUM3Qzs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyxzRUFBaUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9hcnJheS1idWZmZXItYnl0ZS1sZW5ndGgvaW5kZXguanM/NGM4NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG52YXIgJGJ5dGVMZW5ndGggPSBjYWxsQm91bmQoJ0FycmF5QnVmZmVyLnByb3RvdHlwZS5ieXRlTGVuZ3RoJywgdHJ1ZSk7XG5cbnZhciBpc0FycmF5QnVmZmVyID0gcmVxdWlyZSgnaXMtYXJyYXktYnVmZmVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnl0ZUxlbmd0aChhYikge1xuXHRpZiAoIWlzQXJyYXlCdWZmZXIoYWIpKSB7XG5cdFx0cmV0dXJuIE5hTjtcblx0fVxuXHRyZXR1cm4gJGJ5dGVMZW5ndGggPyAkYnl0ZUxlbmd0aChhYikgOiBhYi5ieXRlTGVuZ3RoO1xufTsgLy8gaW4gbm9kZSA8IDAuMTEsIGJ5dGVMZW5ndGggaXMgYW4gb3duIG5vbmNvbmZpZ3VyYWJsZSBwcm9wZXJ0eVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/array-buffer-byte-length/index.js\n");

/***/ })

};
;