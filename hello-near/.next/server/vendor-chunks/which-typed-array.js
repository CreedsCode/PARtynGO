"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/which-typed-array";
exports.ids = ["vendor-chunks/which-typed-array"];
exports.modules = {

/***/ "(ssr)/./node_modules/which-typed-array/index.js":
/*!*************************************************!*\
  !*** ./node_modules/which-typed-array/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar forEach = __webpack_require__(/*! for-each */ \"(ssr)/./node_modules/for-each/index.js\");\nvar availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ \"(ssr)/./node_modules/available-typed-arrays/index.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"(ssr)/./node_modules/call-bind/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\nvar gOPD = __webpack_require__(/*! gopd */ \"(ssr)/./node_modules/gopd/index.js\");\n\nvar $toString = callBound('Object.prototype.toString');\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(ssr)/./node_modules/has-tostringtag/shams.js\")();\n\nvar g = typeof globalThis === 'undefined' ? global : globalThis;\nvar typedArrays = availableTypedArrays();\n\nvar $slice = callBound('String.prototype.slice');\nvar getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');\n\nvar $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {\n\tfor (var i = 0; i < array.length; i += 1) {\n\t\tif (array[i] === value) {\n\t\t\treturn i;\n\t\t}\n\t}\n\treturn -1;\n};\nvar cache = { __proto__: null };\nif (hasToStringTag && gOPD && getPrototypeOf) {\n\tforEach(typedArrays, function (typedArray) {\n\t\tvar arr = new g[typedArray]();\n\t\tif (Symbol.toStringTag in arr) {\n\t\t\tvar proto = getPrototypeOf(arr);\n\t\t\tvar descriptor = gOPD(proto, Symbol.toStringTag);\n\t\t\tif (!descriptor) {\n\t\t\t\tvar superProto = getPrototypeOf(proto);\n\t\t\t\tdescriptor = gOPD(superProto, Symbol.toStringTag);\n\t\t\t}\n\t\t\tcache['$' + typedArray] = callBind(descriptor.get);\n\t\t}\n\t});\n} else {\n\tforEach(typedArrays, function (typedArray) {\n\t\tvar arr = new g[typedArray]();\n\t\tvar fn = arr.slice || arr.set;\n\t\tif (fn) {\n\t\t\tcache['$' + typedArray] = callBind(fn);\n\t\t}\n\t});\n}\n\nvar tryTypedArrays = function tryAllTypedArrays(value) {\n\tvar found = false;\n\tforEach(cache, function (getter, typedArray) {\n\t\tif (!found) {\n\t\t\ttry {\n\t\t\t\tif ('$' + getter(value) === typedArray) {\n\t\t\t\t\tfound = $slice(typedArray, 1);\n\t\t\t\t}\n\t\t\t} catch (e) { /**/ }\n\t\t}\n\t});\n\treturn found;\n};\n\nvar trySlices = function tryAllSlices(value) {\n\tvar found = false;\n\tforEach(cache, function (getter, name) {\n\t\tif (!found) {\n\t\t\ttry {\n\t\t\t\tgetter(value);\n\t\t\t\tfound = $slice(name, 1);\n\t\t\t} catch (e) { /**/ }\n\t\t}\n\t});\n\treturn found;\n};\n\nmodule.exports = function whichTypedArray(value) {\n\tif (!value || typeof value !== 'object') { return false; }\n\tif (!hasToStringTag) {\n\t\tvar tag = $slice($toString(value), 8, -1);\n\t\tif ($indexOf(typedArrays, tag) > -1) {\n\t\t\treturn tag;\n\t\t}\n\t\tif (tag !== 'Object') {\n\t\t\treturn false;\n\t\t}\n\t\t// node < 0.6 hits here on real Typed Arrays\n\t\treturn trySlices(value);\n\t}\n\tif (!gOPD) { return null; } // unknown engine\n\treturn tryTypedArrays(value);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd2hpY2gtdHlwZWQtYXJyYXkvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsY0FBYyxtQkFBTyxDQUFDLHdEQUFVO0FBQ2hDLDJCQUEyQixtQkFBTyxDQUFDLG9GQUF3QjtBQUMzRCxlQUFlLG1CQUFPLENBQUMsMERBQVc7QUFDbEMsZ0JBQWdCLG1CQUFPLENBQUMsd0VBQXFCO0FBQzdDLFdBQVcsbUJBQU8sQ0FBQyxnREFBTTs7QUFFekI7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyw0RUFBdUI7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxZQUFZO0FBQ2pCO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZUFBZTtBQUM3QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy93aGljaC10eXBlZC1hcnJheS9pbmRleC5qcz9mM2U1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGZvckVhY2ggPSByZXF1aXJlKCdmb3ItZWFjaCcpO1xudmFyIGF2YWlsYWJsZVR5cGVkQXJyYXlzID0gcmVxdWlyZSgnYXZhaWxhYmxlLXR5cGVkLWFycmF5cycpO1xudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kJyk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xudmFyIGdPUEQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbnZhciAkdG9TdHJpbmcgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcnKTtcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG5cbnZhciBnID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogZ2xvYmFsVGhpcztcbnZhciB0eXBlZEFycmF5cyA9IGF2YWlsYWJsZVR5cGVkQXJyYXlzKCk7XG5cbnZhciAkc2xpY2UgPSBjYWxsQm91bmQoJ1N0cmluZy5wcm90b3R5cGUuc2xpY2UnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjsgLy8gcmVxdWlyZSgnZ2V0cHJvdG90eXBlb2YnKTtcblxudmFyICRpbmRleE9mID0gY2FsbEJvdW5kKCdBcnJheS5wcm90b3R5cGUuaW5kZXhPZicsIHRydWUpIHx8IGZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIC0xO1xufTtcbnZhciBjYWNoZSA9IHsgX19wcm90b19fOiBudWxsIH07XG5pZiAoaGFzVG9TdHJpbmdUYWcgJiYgZ09QRCAmJiBnZXRQcm90b3R5cGVPZikge1xuXHRmb3JFYWNoKHR5cGVkQXJyYXlzLCBmdW5jdGlvbiAodHlwZWRBcnJheSkge1xuXHRcdHZhciBhcnIgPSBuZXcgZ1t0eXBlZEFycmF5XSgpO1xuXHRcdGlmIChTeW1ib2wudG9TdHJpbmdUYWcgaW4gYXJyKSB7XG5cdFx0XHR2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGVPZihhcnIpO1xuXHRcdFx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHByb3RvLCBTeW1ib2wudG9TdHJpbmdUYWcpO1xuXHRcdFx0aWYgKCFkZXNjcmlwdG9yKSB7XG5cdFx0XHRcdHZhciBzdXBlclByb3RvID0gZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuXHRcdFx0XHRkZXNjcmlwdG9yID0gZ09QRChzdXBlclByb3RvLCBTeW1ib2wudG9TdHJpbmdUYWcpO1xuXHRcdFx0fVxuXHRcdFx0Y2FjaGVbJyQnICsgdHlwZWRBcnJheV0gPSBjYWxsQmluZChkZXNjcmlwdG9yLmdldCk7XG5cdFx0fVxuXHR9KTtcbn0gZWxzZSB7XG5cdGZvckVhY2godHlwZWRBcnJheXMsIGZ1bmN0aW9uICh0eXBlZEFycmF5KSB7XG5cdFx0dmFyIGFyciA9IG5ldyBnW3R5cGVkQXJyYXldKCk7XG5cdFx0dmFyIGZuID0gYXJyLnNsaWNlIHx8IGFyci5zZXQ7XG5cdFx0aWYgKGZuKSB7XG5cdFx0XHRjYWNoZVsnJCcgKyB0eXBlZEFycmF5XSA9IGNhbGxCaW5kKGZuKTtcblx0XHR9XG5cdH0pO1xufVxuXG52YXIgdHJ5VHlwZWRBcnJheXMgPSBmdW5jdGlvbiB0cnlBbGxUeXBlZEFycmF5cyh2YWx1ZSkge1xuXHR2YXIgZm91bmQgPSBmYWxzZTtcblx0Zm9yRWFjaChjYWNoZSwgZnVuY3Rpb24gKGdldHRlciwgdHlwZWRBcnJheSkge1xuXHRcdGlmICghZm91bmQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICgnJCcgKyBnZXR0ZXIodmFsdWUpID09PSB0eXBlZEFycmF5KSB7XG5cdFx0XHRcdFx0Zm91bmQgPSAkc2xpY2UodHlwZWRBcnJheSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHsgLyoqLyB9XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGZvdW5kO1xufTtcblxudmFyIHRyeVNsaWNlcyA9IGZ1bmN0aW9uIHRyeUFsbFNsaWNlcyh2YWx1ZSkge1xuXHR2YXIgZm91bmQgPSBmYWxzZTtcblx0Zm9yRWFjaChjYWNoZSwgZnVuY3Rpb24gKGdldHRlciwgbmFtZSkge1xuXHRcdGlmICghZm91bmQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGdldHRlcih2YWx1ZSk7XG5cdFx0XHRcdGZvdW5kID0gJHNsaWNlKG5hbWUsIDEpO1xuXHRcdFx0fSBjYXRjaCAoZSkgeyAvKiovIH1cblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gZm91bmQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoaWNoVHlwZWRBcnJheSh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHR2YXIgdGFnID0gJHNsaWNlKCR0b1N0cmluZyh2YWx1ZSksIDgsIC0xKTtcblx0XHRpZiAoJGluZGV4T2YodHlwZWRBcnJheXMsIHRhZykgPiAtMSkge1xuXHRcdFx0cmV0dXJuIHRhZztcblx0XHR9XG5cdFx0aWYgKHRhZyAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gbm9kZSA8IDAuNiBoaXRzIGhlcmUgb24gcmVhbCBUeXBlZCBBcnJheXNcblx0XHRyZXR1cm4gdHJ5U2xpY2VzKHZhbHVlKTtcblx0fVxuXHRpZiAoIWdPUEQpIHsgcmV0dXJuIG51bGw7IH0gLy8gdW5rbm93biBlbmdpbmVcblx0cmV0dXJuIHRyeVR5cGVkQXJyYXlzKHZhbHVlKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/which-typed-array/index.js\n");

/***/ })

};
;