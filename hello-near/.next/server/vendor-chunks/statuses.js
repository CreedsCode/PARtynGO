"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/statuses";
exports.ids = ["vendor-chunks/statuses"];
exports.modules = {

/***/ "(ssr)/./node_modules/statuses/index.js":
/*!****************************************!*\
  !*** ./node_modules/statuses/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * statuses\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar codes = __webpack_require__(/*! ./codes.json */ \"(ssr)/./node_modules/statuses/codes.json\")\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = status\n\n// status code to message map\nstatus.STATUS_CODES = codes\n\n// array of status codes\nstatus.codes = populateStatusesMap(status, codes)\n\n// status codes for redirects\nstatus.redirect = {\n  300: true,\n  301: true,\n  302: true,\n  303: true,\n  305: true,\n  307: true,\n  308: true\n}\n\n// status codes for empty bodies\nstatus.empty = {\n  204: true,\n  205: true,\n  304: true\n}\n\n// status codes for when you should retry the request\nstatus.retry = {\n  502: true,\n  503: true,\n  504: true\n}\n\n/**\n * Populate the statuses map for given codes.\n * @private\n */\n\nfunction populateStatusesMap (statuses, codes) {\n  var arr = []\n\n  Object.keys(codes).forEach(function forEachCode (code) {\n    var message = codes[code]\n    var status = Number(code)\n\n    // Populate properties\n    statuses[status] = message\n    statuses[message] = status\n    statuses[message.toLowerCase()] = status\n\n    // Add to array\n    arr.push(status)\n  })\n\n  return arr\n}\n\n/**\n * Get the status code.\n *\n * Given a number, this will throw if it is not a known status\n * code, otherwise the code will be returned. Given a string,\n * the string will be parsed for a number and return the code\n * if valid, otherwise will lookup the code assuming this is\n * the status message.\n *\n * @param {string|number} code\n * @returns {number}\n * @public\n */\n\nfunction status (code) {\n  if (typeof code === 'number') {\n    if (!status[code]) throw new Error('invalid status code: ' + code)\n    return code\n  }\n\n  if (typeof code !== 'string') {\n    throw new TypeError('code must be a number or string')\n  }\n\n  // '403'\n  var n = parseInt(code, 10)\n  if (!isNaN(n)) {\n    if (!status[n]) throw new Error('invalid status code: ' + n)\n    return n\n  }\n\n  n = status[code.toLowerCase()]\n  if (!n) throw new Error('invalid status message: \"' + code + '\"')\n  return n\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RhdHVzZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyw4REFBYzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9zdGF0dXNlcy9pbmRleC5qcz80OTIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogc3RhdHVzZXNcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTYgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBjb2RlcyA9IHJlcXVpcmUoJy4vY29kZXMuanNvbicpXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBzdGF0dXNcblxuLy8gc3RhdHVzIGNvZGUgdG8gbWVzc2FnZSBtYXBcbnN0YXR1cy5TVEFUVVNfQ09ERVMgPSBjb2Rlc1xuXG4vLyBhcnJheSBvZiBzdGF0dXMgY29kZXNcbnN0YXR1cy5jb2RlcyA9IHBvcHVsYXRlU3RhdHVzZXNNYXAoc3RhdHVzLCBjb2RlcylcblxuLy8gc3RhdHVzIGNvZGVzIGZvciByZWRpcmVjdHNcbnN0YXR1cy5yZWRpcmVjdCA9IHtcbiAgMzAwOiB0cnVlLFxuICAzMDE6IHRydWUsXG4gIDMwMjogdHJ1ZSxcbiAgMzAzOiB0cnVlLFxuICAzMDU6IHRydWUsXG4gIDMwNzogdHJ1ZSxcbiAgMzA4OiB0cnVlXG59XG5cbi8vIHN0YXR1cyBjb2RlcyBmb3IgZW1wdHkgYm9kaWVzXG5zdGF0dXMuZW1wdHkgPSB7XG4gIDIwNDogdHJ1ZSxcbiAgMjA1OiB0cnVlLFxuICAzMDQ6IHRydWVcbn1cblxuLy8gc3RhdHVzIGNvZGVzIGZvciB3aGVuIHlvdSBzaG91bGQgcmV0cnkgdGhlIHJlcXVlc3RcbnN0YXR1cy5yZXRyeSA9IHtcbiAgNTAyOiB0cnVlLFxuICA1MDM6IHRydWUsXG4gIDUwNDogdHJ1ZVxufVxuXG4vKipcbiAqIFBvcHVsYXRlIHRoZSBzdGF0dXNlcyBtYXAgZm9yIGdpdmVuIGNvZGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0YXR1c2VzTWFwIChzdGF0dXNlcywgY29kZXMpIHtcbiAgdmFyIGFyciA9IFtdXG5cbiAgT2JqZWN0LmtleXMoY29kZXMpLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaENvZGUgKGNvZGUpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGNvZGVzW2NvZGVdXG4gICAgdmFyIHN0YXR1cyA9IE51bWJlcihjb2RlKVxuXG4gICAgLy8gUG9wdWxhdGUgcHJvcGVydGllc1xuICAgIHN0YXR1c2VzW3N0YXR1c10gPSBtZXNzYWdlXG4gICAgc3RhdHVzZXNbbWVzc2FnZV0gPSBzdGF0dXNcbiAgICBzdGF0dXNlc1ttZXNzYWdlLnRvTG93ZXJDYXNlKCldID0gc3RhdHVzXG5cbiAgICAvLyBBZGQgdG8gYXJyYXlcbiAgICBhcnIucHVzaChzdGF0dXMpXG4gIH0pXG5cbiAgcmV0dXJuIGFyclxufVxuXG4vKipcbiAqIEdldCB0aGUgc3RhdHVzIGNvZGUuXG4gKlxuICogR2l2ZW4gYSBudW1iZXIsIHRoaXMgd2lsbCB0aHJvdyBpZiBpdCBpcyBub3QgYSBrbm93biBzdGF0dXNcbiAqIGNvZGUsIG90aGVyd2lzZSB0aGUgY29kZSB3aWxsIGJlIHJldHVybmVkLiBHaXZlbiBhIHN0cmluZyxcbiAqIHRoZSBzdHJpbmcgd2lsbCBiZSBwYXJzZWQgZm9yIGEgbnVtYmVyIGFuZCByZXR1cm4gdGhlIGNvZGVcbiAqIGlmIHZhbGlkLCBvdGhlcndpc2Ugd2lsbCBsb29rdXAgdGhlIGNvZGUgYXNzdW1pbmcgdGhpcyBpc1xuICogdGhlIHN0YXR1cyBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gY29kZVxuICogQHJldHVybnMge251bWJlcn1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzdGF0dXMgKGNvZGUpIHtcbiAgaWYgKHR5cGVvZiBjb2RlID09PSAnbnVtYmVyJykge1xuICAgIGlmICghc3RhdHVzW2NvZGVdKSB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgc3RhdHVzIGNvZGU6ICcgKyBjb2RlKVxuICAgIHJldHVybiBjb2RlXG4gIH1cblxuICBpZiAodHlwZW9mIGNvZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY29kZSBtdXN0IGJlIGEgbnVtYmVyIG9yIHN0cmluZycpXG4gIH1cblxuICAvLyAnNDAzJ1xuICB2YXIgbiA9IHBhcnNlSW50KGNvZGUsIDEwKVxuICBpZiAoIWlzTmFOKG4pKSB7XG4gICAgaWYgKCFzdGF0dXNbbl0pIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBzdGF0dXMgY29kZTogJyArIG4pXG4gICAgcmV0dXJuIG5cbiAgfVxuXG4gIG4gPSBzdGF0dXNbY29kZS50b0xvd2VyQ2FzZSgpXVxuICBpZiAoIW4pIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBzdGF0dXMgbWVzc2FnZTogXCInICsgY29kZSArICdcIicpXG4gIHJldHVybiBuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/statuses/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/statuses/codes.json":
/*!******************************************!*\
  !*** ./node_modules/statuses/codes.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","306":"(Unused)","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}');

/***/ })

};
;