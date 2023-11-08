"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-singleton-hook";
exports.ids = ["vendor-chunks/react-singleton-hook"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-singleton-hook/es/components/SingleItemContainer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-singleton-hook/es/components/SingleItemContainer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SingleItemContainer: () => (/* binding */ SingleItemContainer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar SingleItemContainer = function SingleItemContainer(_ref) {\n  var initValue = _ref.initValue,\n    useHookBody = _ref.useHookBody,\n    applyStateChange = _ref.applyStateChange;\n  var lastState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initValue);\n  if (typeof useHookBody !== 'function') {\n    throw new Error(\"function expected as hook body parameter. got \" + typeof useHookBody);\n  }\n  var val = useHookBody();\n\n  //useLayoutEffect is safe from SSR perspective because SingleItemContainer should never be rendered on server\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {\n    if (lastState.current !== val) {\n      lastState.current = val;\n      applyStateChange(val);\n    }\n  }, [applyStateChange, val]);\n  return null;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvY29tcG9uZW50cy9TaW5nbGVJdGVtQ29udGFpbmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRDtBQUN6QztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsc0RBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvY29tcG9uZW50cy9TaW5nbGVJdGVtQ29udGFpbmVyLmpzPzIyOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIFNpbmdsZUl0ZW1Db250YWluZXIgPSBmdW5jdGlvbiBTaW5nbGVJdGVtQ29udGFpbmVyKF9yZWYpIHtcbiAgdmFyIGluaXRWYWx1ZSA9IF9yZWYuaW5pdFZhbHVlLFxuICAgIHVzZUhvb2tCb2R5ID0gX3JlZi51c2VIb29rQm9keSxcbiAgICBhcHBseVN0YXRlQ2hhbmdlID0gX3JlZi5hcHBseVN0YXRlQ2hhbmdlO1xuICB2YXIgbGFzdFN0YXRlID0gdXNlUmVmKGluaXRWYWx1ZSk7XG4gIGlmICh0eXBlb2YgdXNlSG9va0JvZHkgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmdW5jdGlvbiBleHBlY3RlZCBhcyBob29rIGJvZHkgcGFyYW1ldGVyLiBnb3QgXCIgKyB0eXBlb2YgdXNlSG9va0JvZHkpO1xuICB9XG4gIHZhciB2YWwgPSB1c2VIb29rQm9keSgpO1xuXG4gIC8vdXNlTGF5b3V0RWZmZWN0IGlzIHNhZmUgZnJvbSBTU1IgcGVyc3BlY3RpdmUgYmVjYXVzZSBTaW5nbGVJdGVtQ29udGFpbmVyIHNob3VsZCBuZXZlciBiZSByZW5kZXJlZCBvbiBzZXJ2ZXJcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGFzdFN0YXRlLmN1cnJlbnQgIT09IHZhbCkge1xuICAgICAgbGFzdFN0YXRlLmN1cnJlbnQgPSB2YWw7XG4gICAgICBhcHBseVN0YXRlQ2hhbmdlKHZhbCk7XG4gICAgfVxuICB9LCBbYXBwbHlTdGF0ZUNoYW5nZSwgdmFsXSk7XG4gIHJldHVybiBudWxsO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-singleton-hook/es/components/SingleItemContainer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-singleton-hook/es/components/SingletonHooksContainer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-singleton-hook/es/components/SingletonHooksContainer.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SingletonHooksContainer: () => (/* binding */ SingletonHooksContainer),\n/* harmony export */   addHook: () => (/* binding */ addHook),\n/* harmony export */   resetLocalStateForTests: () => (/* binding */ resetLocalStateForTests)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SingleItemContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleItemContainer */ \"(ssr)/./node_modules/react-singleton-hook/es/components/SingleItemContainer.js\");\n/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/env */ \"(ssr)/./node_modules/react-singleton-hook/es/utils/env.js\");\n/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/warning */ \"(ssr)/./node_modules/react-singleton-hook/es/utils/warning.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nvar nextKey = 1;\nvar automaticRender = false;\nvar manualRender = false;\nvar workingSet = [];\nvar renderedContainers = [];\nvar notifyContainersAsync = function notifyContainersAsync() {\n  renderedContainers.forEach(function (updateRenderedHooks) {\n    return updateRenderedHooks();\n  });\n};\nvar SingletonHooksContainer = function SingletonHooksContainer(_ref) {\n  var automaticContainerInternalUseOnly = _ref.automaticContainerInternalUseOnly;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    hooks = _useState[0],\n    setHooks = _useState[1];\n  var currentHooksRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  currentHooksRef.current = hooks;\n\n  // if there was no automaticRender, and this one is not automatic as well\n  if (!automaticContainerInternalUseOnly && automaticRender === false) {\n    manualRender = true;\n  }\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var mounted = true;\n    function updateRenderedHooks() {\n      if (!mounted) return;\n      if (renderedContainers[0] !== updateRenderedHooks) {\n        if (!automaticContainerInternalUseOnly && automaticRender === true) {\n          (0,_utils_warning__WEBPACK_IMPORTED_MODULE_3__.warning)('SingletonHooksContainer is mounted after some singleton hook has been used.' + 'Your SingletonHooksContainer will not be used in favor of internal one.');\n        }\n        setHooks(function (_) {\n          return [];\n        });\n        return;\n      }\n      setHooks([].concat(workingSet));\n    }\n    renderedContainers.push(updateRenderedHooks);\n    notifyContainersAsync();\n    return function () {\n      mounted = false;\n      if (currentHooksRef.current.length > 0) {\n        (0,_utils_warning__WEBPACK_IMPORTED_MODULE_3__.warning)('SingletonHooksContainer is unmounted, but it has active singleton hooks. ' + 'They will be reevaluated once SingletonHooksContainer is mounted again');\n      }\n      renderedContainers.splice(renderedContainers.indexOf(updateRenderedHooks), 1);\n      notifyContainersAsync();\n    };\n  }, [automaticContainerInternalUseOnly]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, hooks.map(function (_ref2) {\n    var hook = _ref2.hook,\n      key = _ref2.key;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SingleItemContainer__WEBPACK_IMPORTED_MODULE_1__.SingleItemContainer, _extends({}, hook, {\n      key: key\n    }));\n  }));\n};\nvar addHook = function addHook(hook) {\n  var key = nextKey++;\n  workingSet.push({\n    hook: hook,\n    key: key\n  });\n\n  // no container and no previous manually rendered containers\n  if (renderedContainers.length === 0 && manualRender === false) {\n    automaticRender = true;\n    (0,_utils_env__WEBPACK_IMPORTED_MODULE_2__.mount)(SingletonHooksContainer);\n  }\n  notifyContainersAsync();\n  return function () {\n    workingSet.splice(workingSet.findIndex(function (h) {\n      return h.key === key;\n    }), 1);\n    notifyContainersAsync();\n  };\n};\nvar resetLocalStateForTests = function resetLocalStateForTests() {\n  automaticRender = false;\n  manualRender = false;\n  workingSet.splice(0, workingSet.length);\n  renderedContainers.splice(0, renderedContainers.length);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvY29tcG9uZW50cy9TaW5nbGV0b25Ib29rc0NvbnRhaW5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDL087QUFDQztBQUN2QjtBQUNNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0Esa0JBQWtCLCtDQUFRO0FBQzFCO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQU07QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsdURBQU87QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsMERBQW1CLENBQUMsdURBQWM7QUFDeEQ7QUFDQTtBQUNBLHdCQUF3QiwwREFBbUIsQ0FBQyxxRUFBbUIsYUFBYTtBQUM1RTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpbmdsZXRvbi1ob29rL2VzL2NvbXBvbmVudHMvU2luZ2xldG9uSG9va3NDb250YWluZXIuanM/YzcyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTaW5nbGVJdGVtQ29udGFpbmVyIH0gZnJvbSAnLi9TaW5nbGVJdGVtQ29udGFpbmVyJztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnLi4vdXRpbHMvZW52JztcbmltcG9ydCB7IHdhcm5pbmcgfSBmcm9tICcuLi91dGlscy93YXJuaW5nJztcbnZhciBuZXh0S2V5ID0gMTtcbnZhciBhdXRvbWF0aWNSZW5kZXIgPSBmYWxzZTtcbnZhciBtYW51YWxSZW5kZXIgPSBmYWxzZTtcbnZhciB3b3JraW5nU2V0ID0gW107XG52YXIgcmVuZGVyZWRDb250YWluZXJzID0gW107XG52YXIgbm90aWZ5Q29udGFpbmVyc0FzeW5jID0gZnVuY3Rpb24gbm90aWZ5Q29udGFpbmVyc0FzeW5jKCkge1xuICByZW5kZXJlZENvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAodXBkYXRlUmVuZGVyZWRIb29rcykge1xuICAgIHJldHVybiB1cGRhdGVSZW5kZXJlZEhvb2tzKCk7XG4gIH0pO1xufTtcbmV4cG9ydCB2YXIgU2luZ2xldG9uSG9va3NDb250YWluZXIgPSBmdW5jdGlvbiBTaW5nbGV0b25Ib29rc0NvbnRhaW5lcihfcmVmKSB7XG4gIHZhciBhdXRvbWF0aWNDb250YWluZXJJbnRlcm5hbFVzZU9ubHkgPSBfcmVmLmF1dG9tYXRpY0NvbnRhaW5lckludGVybmFsVXNlT25seTtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKFtdKSxcbiAgICBob29rcyA9IF91c2VTdGF0ZVswXSxcbiAgICBzZXRIb29rcyA9IF91c2VTdGF0ZVsxXTtcbiAgdmFyIGN1cnJlbnRIb29rc1JlZiA9IHVzZVJlZigpO1xuICBjdXJyZW50SG9va3NSZWYuY3VycmVudCA9IGhvb2tzO1xuXG4gIC8vIGlmIHRoZXJlIHdhcyBubyBhdXRvbWF0aWNSZW5kZXIsIGFuZCB0aGlzIG9uZSBpcyBub3QgYXV0b21hdGljIGFzIHdlbGxcbiAgaWYgKCFhdXRvbWF0aWNDb250YWluZXJJbnRlcm5hbFVzZU9ubHkgJiYgYXV0b21hdGljUmVuZGVyID09PSBmYWxzZSkge1xuICAgIG1hbnVhbFJlbmRlciA9IHRydWU7XG4gIH1cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbW91bnRlZCA9IHRydWU7XG4gICAgZnVuY3Rpb24gdXBkYXRlUmVuZGVyZWRIb29rcygpIHtcbiAgICAgIGlmICghbW91bnRlZCkgcmV0dXJuO1xuICAgICAgaWYgKHJlbmRlcmVkQ29udGFpbmVyc1swXSAhPT0gdXBkYXRlUmVuZGVyZWRIb29rcykge1xuICAgICAgICBpZiAoIWF1dG9tYXRpY0NvbnRhaW5lckludGVybmFsVXNlT25seSAmJiBhdXRvbWF0aWNSZW5kZXIgPT09IHRydWUpIHtcbiAgICAgICAgICB3YXJuaW5nKCdTaW5nbGV0b25Ib29rc0NvbnRhaW5lciBpcyBtb3VudGVkIGFmdGVyIHNvbWUgc2luZ2xldG9uIGhvb2sgaGFzIGJlZW4gdXNlZC4nICsgJ1lvdXIgU2luZ2xldG9uSG9va3NDb250YWluZXIgd2lsbCBub3QgYmUgdXNlZCBpbiBmYXZvciBvZiBpbnRlcm5hbCBvbmUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SG9va3MoZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRIb29rcyhbXS5jb25jYXQod29ya2luZ1NldCkpO1xuICAgIH1cbiAgICByZW5kZXJlZENvbnRhaW5lcnMucHVzaCh1cGRhdGVSZW5kZXJlZEhvb2tzKTtcbiAgICBub3RpZnlDb250YWluZXJzQXN5bmMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZCA9IGZhbHNlO1xuICAgICAgaWYgKGN1cnJlbnRIb29rc1JlZi5jdXJyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgd2FybmluZygnU2luZ2xldG9uSG9va3NDb250YWluZXIgaXMgdW5tb3VudGVkLCBidXQgaXQgaGFzIGFjdGl2ZSBzaW5nbGV0b24gaG9va3MuICcgKyAnVGhleSB3aWxsIGJlIHJlZXZhbHVhdGVkIG9uY2UgU2luZ2xldG9uSG9va3NDb250YWluZXIgaXMgbW91bnRlZCBhZ2FpbicpO1xuICAgICAgfVxuICAgICAgcmVuZGVyZWRDb250YWluZXJzLnNwbGljZShyZW5kZXJlZENvbnRhaW5lcnMuaW5kZXhPZih1cGRhdGVSZW5kZXJlZEhvb2tzKSwgMSk7XG4gICAgICBub3RpZnlDb250YWluZXJzQXN5bmMoKTtcbiAgICB9O1xuICB9LCBbYXV0b21hdGljQ29udGFpbmVySW50ZXJuYWxVc2VPbmx5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgaG9va3MubWFwKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBob29rID0gX3JlZjIuaG9vayxcbiAgICAgIGtleSA9IF9yZWYyLmtleTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlSXRlbUNvbnRhaW5lciwgX2V4dGVuZHMoe30sIGhvb2ssIHtcbiAgICAgIGtleToga2V5XG4gICAgfSkpO1xuICB9KSk7XG59O1xuZXhwb3J0IHZhciBhZGRIb29rID0gZnVuY3Rpb24gYWRkSG9vayhob29rKSB7XG4gIHZhciBrZXkgPSBuZXh0S2V5Kys7XG4gIHdvcmtpbmdTZXQucHVzaCh7XG4gICAgaG9vazogaG9vayxcbiAgICBrZXk6IGtleVxuICB9KTtcblxuICAvLyBubyBjb250YWluZXIgYW5kIG5vIHByZXZpb3VzIG1hbnVhbGx5IHJlbmRlcmVkIGNvbnRhaW5lcnNcbiAgaWYgKHJlbmRlcmVkQ29udGFpbmVycy5sZW5ndGggPT09IDAgJiYgbWFudWFsUmVuZGVyID09PSBmYWxzZSkge1xuICAgIGF1dG9tYXRpY1JlbmRlciA9IHRydWU7XG4gICAgbW91bnQoU2luZ2xldG9uSG9va3NDb250YWluZXIpO1xuICB9XG4gIG5vdGlmeUNvbnRhaW5lcnNBc3luYygpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHdvcmtpbmdTZXQuc3BsaWNlKHdvcmtpbmdTZXQuZmluZEluZGV4KGZ1bmN0aW9uIChoKSB7XG4gICAgICByZXR1cm4gaC5rZXkgPT09IGtleTtcbiAgICB9KSwgMSk7XG4gICAgbm90aWZ5Q29udGFpbmVyc0FzeW5jKCk7XG4gIH07XG59O1xuZXhwb3J0IHZhciByZXNldExvY2FsU3RhdGVGb3JUZXN0cyA9IGZ1bmN0aW9uIHJlc2V0TG9jYWxTdGF0ZUZvclRlc3RzKCkge1xuICBhdXRvbWF0aWNSZW5kZXIgPSBmYWxzZTtcbiAgbWFudWFsUmVuZGVyID0gZmFsc2U7XG4gIHdvcmtpbmdTZXQuc3BsaWNlKDAsIHdvcmtpbmdTZXQubGVuZ3RoKTtcbiAgcmVuZGVyZWRDb250YWluZXJzLnNwbGljZSgwLCByZW5kZXJlZENvbnRhaW5lcnMubGVuZ3RoKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-singleton-hook/es/components/SingletonHooksContainer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-singleton-hook/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-singleton-hook/es/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SingletonHooksContainer: () => (/* reexport safe */ _components_SingletonHooksContainer__WEBPACK_IMPORTED_MODULE_1__.SingletonHooksContainer),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   singletonHook: () => (/* reexport safe */ _singletonHook__WEBPACK_IMPORTED_MODULE_0__.singletonHook)\n/* harmony export */ });\n/* harmony import */ var _singletonHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singletonHook */ \"(ssr)/./node_modules/react-singleton-hook/es/singletonHook.js\");\n/* harmony import */ var _components_SingletonHooksContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SingletonHooksContainer */ \"(ssr)/./node_modules/react-singleton-hook/es/components/SingletonHooksContainer.js\");\n\n\n\nvar ReactSingletonHook = {\n  singletonHook: _singletonHook__WEBPACK_IMPORTED_MODULE_0__.singletonHook,\n  SingletonHooksContainer: _components_SingletonHooksContainer__WEBPACK_IMPORTED_MODULE_1__.SingletonHooksContainer\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactSingletonHook);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0Q7QUFDK0I7QUFDN0I7QUFDbEQ7QUFDQSxpQkFBaUIseURBQWE7QUFDOUIsMkJBQTJCLHdGQUF1QjtBQUNsRDtBQUNBLGlFQUFlLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvaW5kZXguanM/ZTgyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaW5nbGV0b25Ib29rIH0gZnJvbSAnLi9zaW5nbGV0b25Ib29rJztcbmltcG9ydCB7IFNpbmdsZXRvbkhvb2tzQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL1NpbmdsZXRvbkhvb2tzQ29udGFpbmVyJztcbmV4cG9ydCB7IHNpbmdsZXRvbkhvb2ssIFNpbmdsZXRvbkhvb2tzQ29udGFpbmVyIH07XG52YXIgUmVhY3RTaW5nbGV0b25Ib29rID0ge1xuICBzaW5nbGV0b25Ib29rOiBzaW5nbGV0b25Ib29rLFxuICBTaW5nbGV0b25Ib29rc0NvbnRhaW5lcjogU2luZ2xldG9uSG9va3NDb250YWluZXJcbn07XG5leHBvcnQgZGVmYXVsdCBSZWFjdFNpbmdsZXRvbkhvb2s7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-singleton-hook/es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-singleton-hook/es/singletonHook.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-singleton-hook/es/singletonHook.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   singletonHook: () => (/* binding */ singletonHook)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SingletonHooksContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SingletonHooksContainer */ \"(ssr)/./node_modules/react-singleton-hook/es/components/SingletonHooksContainer.js\");\n/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/env */ \"(ssr)/./node_modules/react-singleton-hook/es/utils/env.js\");\n\n\n\nvar singletonHook = function singletonHook(initValue, useHookBody, options) {\n  if (options === void 0) {\n    options = {};\n  }\n  var mounted = false;\n  var removeHook = undefined;\n  var initStateCalculated = false;\n  var lastKnownState = undefined;\n  var consumers = [];\n  var _options = options,\n    _options$unmountIfNoC = _options.unmountIfNoConsumers,\n    unmountIfNoConsumers = _options$unmountIfNoC === void 0 ? false : _options$unmountIfNoC;\n  var applyStateChange = function applyStateChange(newState) {\n    lastKnownState = newState;\n    (0,_utils_env__WEBPACK_IMPORTED_MODULE_2__.batch)(function () {\n      return consumers.forEach(function (c) {\n        return c(newState);\n      });\n    });\n  };\n  var stateInitializer = function stateInitializer() {\n    if (!initStateCalculated) {\n      lastKnownState = typeof initValue === 'function' ? initValue() : initValue;\n      initStateCalculated = true;\n    }\n    return lastKnownState;\n  };\n  return function () {\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(stateInitializer),\n      state = _useState[0],\n      setState = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n      if (!mounted) {\n        mounted = true;\n        removeHook = (0,_components_SingletonHooksContainer__WEBPACK_IMPORTED_MODULE_1__.addHook)({\n          initValue: initValue,\n          useHookBody: useHookBody,\n          applyStateChange: applyStateChange\n        });\n      }\n      consumers.push(setState);\n      if (lastKnownState !== state) {\n        setState(lastKnownState);\n      }\n      return function () {\n        consumers.splice(consumers.indexOf(setState), 1);\n        if (consumers.length === 0 && unmountIfNoConsumers) {\n          removeHook();\n          mounted = false;\n        }\n      };\n\n      // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return state;\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvc2luZ2xldG9uSG9vay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNtQjtBQUMzQjtBQUM3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBSztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUTtBQUM1QjtBQUNBO0FBQ0EsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsNEVBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpbmdsZXRvbi1ob29rL2VzL3NpbmdsZXRvbkhvb2suanM/NTEwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWRkSG9vayB9IGZyb20gJy4vY29tcG9uZW50cy9TaW5nbGV0b25Ib29rc0NvbnRhaW5lcic7XG5pbXBvcnQgeyBiYXRjaCB9IGZyb20gJy4vdXRpbHMvZW52JztcbmV4cG9ydCB2YXIgc2luZ2xldG9uSG9vayA9IGZ1bmN0aW9uIHNpbmdsZXRvbkhvb2soaW5pdFZhbHVlLCB1c2VIb29rQm9keSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIHZhciBtb3VudGVkID0gZmFsc2U7XG4gIHZhciByZW1vdmVIb29rID0gdW5kZWZpbmVkO1xuICB2YXIgaW5pdFN0YXRlQ2FsY3VsYXRlZCA9IGZhbHNlO1xuICB2YXIgbGFzdEtub3duU3RhdGUgPSB1bmRlZmluZWQ7XG4gIHZhciBjb25zdW1lcnMgPSBbXTtcbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICBfb3B0aW9ucyR1bm1vdW50SWZOb0MgPSBfb3B0aW9ucy51bm1vdW50SWZOb0NvbnN1bWVycyxcbiAgICB1bm1vdW50SWZOb0NvbnN1bWVycyA9IF9vcHRpb25zJHVubW91bnRJZk5vQyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyR1bm1vdW50SWZOb0M7XG4gIHZhciBhcHBseVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gYXBwbHlTdGF0ZUNoYW5nZShuZXdTdGF0ZSkge1xuICAgIGxhc3RLbm93blN0YXRlID0gbmV3U3RhdGU7XG4gICAgYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNvbnN1bWVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjKG5ld1N0YXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICB2YXIgc3RhdGVJbml0aWFsaXplciA9IGZ1bmN0aW9uIHN0YXRlSW5pdGlhbGl6ZXIoKSB7XG4gICAgaWYgKCFpbml0U3RhdGVDYWxjdWxhdGVkKSB7XG4gICAgICBsYXN0S25vd25TdGF0ZSA9IHR5cGVvZiBpbml0VmFsdWUgPT09ICdmdW5jdGlvbicgPyBpbml0VmFsdWUoKSA6IGluaXRWYWx1ZTtcbiAgICAgIGluaXRTdGF0ZUNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gbGFzdEtub3duU3RhdGU7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHN0YXRlSW5pdGlhbGl6ZXIpLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFtb3VudGVkKSB7XG4gICAgICAgIG1vdW50ZWQgPSB0cnVlO1xuICAgICAgICByZW1vdmVIb29rID0gYWRkSG9vayh7XG4gICAgICAgICAgaW5pdFZhbHVlOiBpbml0VmFsdWUsXG4gICAgICAgICAgdXNlSG9va0JvZHk6IHVzZUhvb2tCb2R5LFxuICAgICAgICAgIGFwcGx5U3RhdGVDaGFuZ2U6IGFwcGx5U3RhdGVDaGFuZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zdW1lcnMucHVzaChzZXRTdGF0ZSk7XG4gICAgICBpZiAobGFzdEtub3duU3RhdGUgIT09IHN0YXRlKSB7XG4gICAgICAgIHNldFN0YXRlKGxhc3RLbm93blN0YXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN1bWVycy5zcGxpY2UoY29uc3VtZXJzLmluZGV4T2Yoc2V0U3RhdGUpLCAxKTtcbiAgICAgICAgaWYgKGNvbnN1bWVycy5sZW5ndGggPT09IDAgJiYgdW5tb3VudElmTm9Db25zdW1lcnMpIHtcbiAgICAgICAgICByZW1vdmVIb29rKCk7XG4gICAgICAgICAgbW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgfSwgW10pO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-singleton-hook/es/singletonHook.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-singleton-hook/es/utils/env.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-singleton-hook/es/utils/env.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   batch: () => (/* binding */ batch),\n/* harmony export */   mount: () => (/* binding */ mount)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"(ssr)/./node_modules/next/dist/compiled/react-dom/client.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warning */ \"(ssr)/./node_modules/react-singleton-hook/es/utils/warning.js\");\n\n\n\n\n\n// from https://github.com/purposeindustries/window-or-global/blob/master/lib/index.js\n// avoid direct usage of 'window' because `window is not defined` error might happen in babel-node\nvar globalObject = typeof self === 'object' && self.self === self && self || typeof global === 'object' && global.global === global && global || undefined;\nvar batch = function batch(cb) {\n  return (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates)(cb);\n};\nvar mount = function mount(C) {\n  if (globalObject.document && globalObject.document.createElement) {\n    var container = globalObject.document.createElement('div');\n    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);\n    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, {\n      automaticContainerInternalUseOnly: true\n    }));\n  } else {\n    (0,_warning__WEBPACK_IMPORTED_MODULE_3__.warning)('Can not mount SingletonHooksContainer on server side. ' + 'Did you manage to run useEffect on server? ' + 'Please mount SingletonHooksContainer into your components tree manually.');\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvdXRpbHMvZW52LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ29CO0FBQ007QUFDaEI7O0FBRXBDO0FBQ0E7QUFDQSxpSkFBaUosU0FBSTtBQUM5STtBQUNQLFNBQVMsa0VBQXVCO0FBQ2hDO0FBQ087QUFDUDtBQUNBO0FBQ0EsZUFBZSw0REFBVTtBQUN6Qiw4QkFBOEIsMERBQW1CO0FBQ2pEO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSixJQUFJLGlEQUFPO0FBQ1g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvdXRpbHMvZW52LmpzPzA3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHdhcm5pbmcgfSBmcm9tICcuL3dhcm5pbmcnO1xuXG4vLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9wdXJwb3NlaW5kdXN0cmllcy93aW5kb3ctb3ItZ2xvYmFsL2Jsb2IvbWFzdGVyL2xpYi9pbmRleC5qc1xuLy8gYXZvaWQgZGlyZWN0IHVzYWdlIG9mICd3aW5kb3cnIGJlY2F1c2UgYHdpbmRvdyBpcyBub3QgZGVmaW5lZGAgZXJyb3IgbWlnaHQgaGFwcGVuIGluIGJhYmVsLW5vZGVcbnZhciBnbG9iYWxPYmplY3QgPSB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGYgfHwgdHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgZ2xvYmFsLmdsb2JhbCA9PT0gZ2xvYmFsICYmIGdsb2JhbCB8fCB0aGlzO1xuZXhwb3J0IHZhciBiYXRjaCA9IGZ1bmN0aW9uIGJhdGNoKGNiKSB7XG4gIHJldHVybiB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYik7XG59O1xuZXhwb3J0IHZhciBtb3VudCA9IGZ1bmN0aW9uIG1vdW50KEMpIHtcbiAgaWYgKGdsb2JhbE9iamVjdC5kb2N1bWVudCAmJiBnbG9iYWxPYmplY3QuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkge1xuICAgIHZhciBjb250YWluZXIgPSBnbG9iYWxPYmplY3QuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG4gICAgcm9vdC5yZW5kZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEMsIHtcbiAgICAgIGF1dG9tYXRpY0NvbnRhaW5lckludGVybmFsVXNlT25seTogdHJ1ZVxuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICB3YXJuaW5nKCdDYW4gbm90IG1vdW50IFNpbmdsZXRvbkhvb2tzQ29udGFpbmVyIG9uIHNlcnZlciBzaWRlLiAnICsgJ0RpZCB5b3UgbWFuYWdlIHRvIHJ1biB1c2VFZmZlY3Qgb24gc2VydmVyPyAnICsgJ1BsZWFzZSBtb3VudCBTaW5nbGV0b25Ib29rc0NvbnRhaW5lciBpbnRvIHlvdXIgY29tcG9uZW50cyB0cmVlIG1hbnVhbGx5LicpO1xuICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-singleton-hook/es/utils/env.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-singleton-hook/es/utils/warning.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-singleton-hook/es/utils/warning.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   warning: () => (/* binding */ warning)\n/* harmony export */ });\nvar warning = function warning(message) {\n  if (console && console.warn) {\n    console.warn(message);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvdXRpbHMvd2FybmluZy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2luZ2xldG9uLWhvb2svZXMvdXRpbHMvd2FybmluZy5qcz8xZDc3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-singleton-hook/es/utils/warning.js\n");

/***/ })

};
;