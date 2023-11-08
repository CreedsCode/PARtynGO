"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-weakset";
exports.ids = ["vendor-chunks/is-weakset"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-weakset/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-weakset/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\n\nvar $WeakSet = GetIntrinsic('%WeakSet%', true);\n\nvar $setHas = callBound('WeakSet.prototype.has', true);\n\nif ($setHas) {\n\tvar $mapHas = callBound('WeakMap.prototype.has', true);\n\n\tmodule.exports = function isWeakSet(x) {\n\t\tif (!x || typeof x !== 'object') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\t$setHas(x, $setHas);\n\t\t\tif ($mapHas) {\n\t\t\t\ttry {\n\t\t\t\t\t$mapHas(x, $mapHas);\n\t\t\t\t} catch (e) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn x instanceof $WeakSet; // core-js workaround, pre-v3\n\t\t} catch (e) {}\n\t\treturn false;\n\t};\n} else {\n\t// eslint-disable-next-line no-unused-vars\n\tmodule.exports = function isWeakSet(x) {\n\t\t// `WeakSet` does not exist, or does not have a `has` method\n\t\treturn false;\n\t};\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtd2Vha3NldC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxrRUFBZTtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyx3RUFBcUI7O0FBRTdDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL2lzLXdlYWtzZXQvaW5kZXguanM/ODUyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xuXG52YXIgJFdlYWtTZXQgPSBHZXRJbnRyaW5zaWMoJyVXZWFrU2V0JScsIHRydWUpO1xuXG52YXIgJHNldEhhcyA9IGNhbGxCb3VuZCgnV2Vha1NldC5wcm90b3R5cGUuaGFzJywgdHJ1ZSk7XG5cbmlmICgkc2V0SGFzKSB7XG5cdHZhciAkbWFwSGFzID0gY2FsbEJvdW5kKCdXZWFrTWFwLnByb3RvdHlwZS5oYXMnLCB0cnVlKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzV2Vha1NldCh4KSB7XG5cdFx0aWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0JHNldEhhcyh4LCAkc2V0SGFzKTtcblx0XHRcdGlmICgkbWFwSGFzKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0JG1hcEhhcyh4LCAkbWFwSGFzKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4geCBpbnN0YW5jZW9mICRXZWFrU2V0OyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12M1xuXHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufSBlbHNlIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNXZWFrU2V0KHgpIHtcblx0XHQvLyBgV2Vha1NldGAgZG9lcyBub3QgZXhpc3QsIG9yIGRvZXMgbm90IGhhdmUgYSBgaGFzYCBtZXRob2Rcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-weakset/index.js\n");

/***/ })

};
;