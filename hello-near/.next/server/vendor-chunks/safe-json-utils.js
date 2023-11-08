"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-json-utils";
exports.ids = ["vendor-chunks/safe-json-utils"];
exports.modules = {

/***/ "(ssr)/./node_modules/safe-json-utils/dist/cjs/index.js":
/*!********************************************************!*\
  !*** ./node_modules/safe-json-utils/dist/cjs/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction safeJsonParse(value) {\n    if (typeof value !== 'string') {\n        throw new Error(`Cannot safe json parse value of type ${typeof value}`);\n    }\n    try {\n        return JSON.parse(value);\n    }\n    catch (_a) {\n        return value;\n    }\n}\nexports.safeJsonParse = safeJsonParse;\nfunction safeJsonStringify(value) {\n    return typeof value === 'string'\n        ? value\n        : JSON.stringify(value, (key, value) => typeof value === 'undefined' ? null : value);\n}\nexports.safeJsonStringify = safeJsonStringify;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2FmZS1qc29uLXV0aWxzL2Rpc3QvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQSxnRUFBZ0UsYUFBYTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL3NhZmUtanNvbi11dGlscy9kaXN0L2Nqcy9pbmRleC5qcz9iMDVmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gc2FmZUpzb25QYXJzZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNhZmUganNvbiBwYXJzZSB2YWx1ZSBvZiB0eXBlICR7dHlwZW9mIHZhbHVlfWApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5zYWZlSnNvblBhcnNlID0gc2FmZUpzb25QYXJzZTtcbmZ1bmN0aW9uIHNhZmVKc29uU3RyaW5naWZ5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB2YWx1ZVxuICAgICAgICA6IEpTT04uc3RyaW5naWZ5KHZhbHVlLCAoa2V5LCB2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB2YWx1ZSk7XG59XG5leHBvcnRzLnNhZmVKc29uU3RyaW5naWZ5ID0gc2FmZUpzb25TdHJpbmdpZnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/safe-json-utils/dist/cjs/index.js\n");

/***/ })

};
;