"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-set";
exports.ids = ["vendor-chunks/is-set"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-set/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-set/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("\n\nvar $Map = typeof Map === 'function' && Map.prototype ? Map : null;\nvar $Set = typeof Set === 'function' && Set.prototype ? Set : null;\n\nvar exported;\n\nif (!$Set) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $Map ? Map.prototype.has : null;\nvar $setHas = $Set ? Set.prototype.has : null;\nif (!exported && !$setHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isSet(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$setHas.call(x);\n\t\tif ($mapHas) {\n\t\t\ttry {\n\t\t\t\t$mapHas.call(x);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $Set; // core-js workaround, pre-v2.5.0\n\t} catch (e) {}\n\treturn false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtc2V0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL2lzLXNldC9pbmRleC5qcz82ZDZkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICRNYXAgPSB0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIE1hcC5wcm90b3R5cGUgPyBNYXAgOiBudWxsO1xudmFyICRTZXQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nICYmIFNldC5wcm90b3R5cGUgPyBTZXQgOiBudWxsO1xuXG52YXIgZXhwb3J0ZWQ7XG5cbmlmICghJFNldCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0ZXhwb3J0ZWQgPSBmdW5jdGlvbiBpc1NldCh4KSB7XG5cdFx0Ly8gYFNldGAgaXMgbm90IHByZXNlbnQgaW4gdGhpcyBlbnZpcm9ubWVudC5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cbnZhciAkbWFwSGFzID0gJE1hcCA/IE1hcC5wcm90b3R5cGUuaGFzIDogbnVsbDtcbnZhciAkc2V0SGFzID0gJFNldCA/IFNldC5wcm90b3R5cGUuaGFzIDogbnVsbDtcbmlmICghZXhwb3J0ZWQgJiYgISRzZXRIYXMpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGV4cG9ydGVkID0gZnVuY3Rpb24gaXNTZXQoeCkge1xuXHRcdC8vIGBTZXRgIGRvZXMgbm90IGhhdmUgYSBgaGFzYCBtZXRob2Rcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQgfHwgZnVuY3Rpb24gaXNTZXQoeCkge1xuXHRpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHRyeSB7XG5cdFx0JHNldEhhcy5jYWxsKHgpO1xuXHRcdGlmICgkbWFwSGFzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQkbWFwSGFzLmNhbGwoeCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4geCBpbnN0YW5jZW9mICRTZXQ7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuXHR9IGNhdGNoIChlKSB7fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-set/index.js\n");

/***/ })

};
;