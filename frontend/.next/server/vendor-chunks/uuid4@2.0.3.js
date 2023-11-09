/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uuid4@2.0.3";
exports.ids = ["vendor-chunks/uuid4@2.0.3"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/uuid4@2.0.3/node_modules/uuid4/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/.pnpm/uuid4@2.0.3/node_modules/uuid4/index.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

<<<<<<< Updated upstream
eval("const crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nconst uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;\nfunction valid(uuid) {\n  return uuidPattern.test(uuid);\n}\n\nfunction uuid4() {\n  var rnd = crypto.randomBytes(16);\n  rnd[6] = (rnd[6] & 0x0f) | 0x40;\n  rnd[8] = (rnd[8] & 0x3f) | 0x80;\n  rnd = rnd.toString(\"hex\").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);\n  rnd.shift();\n  return rnd.join(\"-\");\n}\nuuid4.valid = valid;\n\nmodule.exports = uuid4;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdXVpZDRAMi4wLjMvbm9kZV9tb2R1bGVzL3V1aWQ0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyxzQkFBUTs7QUFFL0IsK0JBQStCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDekY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy8ucG5wbS91dWlkNEAyLjAuMy9ub2RlX21vZHVsZXMvdXVpZDQvaW5kZXguanM/ZWJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5jb25zdCB1dWlkUGF0dGVybiA9IC9eWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tNFswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaTtcbmZ1bmN0aW9uIHZhbGlkKHV1aWQpIHtcbiAgcmV0dXJuIHV1aWRQYXR0ZXJuLnRlc3QodXVpZCk7XG59XG5cbmZ1bmN0aW9uIHV1aWQ0KCkge1xuICB2YXIgcm5kID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcbiAgcm5kWzZdID0gKHJuZFs2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kWzhdID0gKHJuZFs4XSAmIDB4M2YpIHwgMHg4MDtcbiAgcm5kID0gcm5kLnRvU3RyaW5nKFwiaGV4XCIpLm1hdGNoKC8oLns4fSkoLns0fSkoLns0fSkoLns0fSkoLnsxMn0pLyk7XG4gIHJuZC5zaGlmdCgpO1xuICByZXR1cm4gcm5kLmpvaW4oXCItXCIpO1xufVxudXVpZDQudmFsaWQgPSB2YWxpZDtcblxubW9kdWxlLmV4cG9ydHMgPSB1dWlkNDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uuid4@2.0.3/node_modules/uuid4/index.js\n");
=======
eval("const crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nconst uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;\nfunction valid(uuid) {\n  return uuidPattern.test(uuid);\n}\n\nfunction uuid4() {\n  var rnd = crypto.randomBytes(16);\n  rnd[6] = (rnd[6] & 0x0f) | 0x40;\n  rnd[8] = (rnd[8] & 0x3f) | 0x80;\n  rnd = rnd.toString(\"hex\").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);\n  rnd.shift();\n  return rnd.join(\"-\");\n}\nuuid4.valid = valid;\n\nmodule.exports = uuid4;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdXVpZDRAMi4wLjMvbm9kZV9tb2R1bGVzL3V1aWQ0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyxzQkFBUTs7QUFFL0IsK0JBQStCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUc7QUFDekY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy8ucG5wbS91dWlkNEAyLjAuMy9ub2RlX21vZHVsZXMvdXVpZDQvaW5kZXguanM/NDYxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5jb25zdCB1dWlkUGF0dGVybiA9IC9eWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tNFswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfSQvaTtcbmZ1bmN0aW9uIHZhbGlkKHV1aWQpIHtcbiAgcmV0dXJuIHV1aWRQYXR0ZXJuLnRlc3QodXVpZCk7XG59XG5cbmZ1bmN0aW9uIHV1aWQ0KCkge1xuICB2YXIgcm5kID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcbiAgcm5kWzZdID0gKHJuZFs2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kWzhdID0gKHJuZFs4XSAmIDB4M2YpIHwgMHg4MDtcbiAgcm5kID0gcm5kLnRvU3RyaW5nKFwiaGV4XCIpLm1hdGNoKC8oLns4fSkoLns0fSkoLns0fSkoLns0fSkoLnsxMn0pLyk7XG4gIHJuZC5zaGlmdCgpO1xuICByZXR1cm4gcm5kLmpvaW4oXCItXCIpO1xufVxudXVpZDQudmFsaWQgPSB2YWxpZDtcblxubW9kdWxlLmV4cG9ydHMgPSB1dWlkNDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uuid4@2.0.3/node_modules/uuid4/index.js\n");
>>>>>>> Stashed changes

/***/ })

};
;