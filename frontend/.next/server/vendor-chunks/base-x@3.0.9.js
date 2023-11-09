"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/base-x@3.0.9";
exports.ids = ["vendor-chunks/base-x@3.0.9"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/base-x@3.0.9/node_modules/base-x/src/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/base-x@3.0.9/node_modules/base-x/src/index.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// base-x encoding / decoding\n// Copyright (c) 2018 base-x contributors\n// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)\n// Distributed under the MIT software license, see the accompanying\n// file LICENSE or http://www.opensource.org/licenses/mit-license.php.\n// @ts-ignore\nvar _Buffer = (__webpack_require__(/*! safe-buffer */ \"(ssr)/./node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js\").Buffer)\nfunction base (ALPHABET) {\n  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }\n  var BASE_MAP = new Uint8Array(256)\n  for (var j = 0; j < BASE_MAP.length; j++) {\n    BASE_MAP[j] = 255\n  }\n  for (var i = 0; i < ALPHABET.length; i++) {\n    var x = ALPHABET.charAt(i)\n    var xc = x.charCodeAt(0)\n    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }\n    BASE_MAP[xc] = i\n  }\n  var BASE = ALPHABET.length\n  var LEADER = ALPHABET.charAt(0)\n  var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up\n  var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up\n  function encode (source) {\n    if (Array.isArray(source) || source instanceof Uint8Array) { source = _Buffer.from(source) }\n    if (!_Buffer.isBuffer(source)) { throw new TypeError('Expected Buffer') }\n    if (source.length === 0) { return '' }\n        // Skip & count leading zeroes.\n    var zeroes = 0\n    var length = 0\n    var pbegin = 0\n    var pend = source.length\n    while (pbegin !== pend && source[pbegin] === 0) {\n      pbegin++\n      zeroes++\n    }\n        // Allocate enough space in big-endian base58 representation.\n    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0\n    var b58 = new Uint8Array(size)\n        // Process the bytes.\n    while (pbegin !== pend) {\n      var carry = source[pbegin]\n            // Apply \"b58 = b58 * 256 + ch\".\n      var i = 0\n      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {\n        carry += (256 * b58[it1]) >>> 0\n        b58[it1] = (carry % BASE) >>> 0\n        carry = (carry / BASE) >>> 0\n      }\n      if (carry !== 0) { throw new Error('Non-zero carry') }\n      length = i\n      pbegin++\n    }\n        // Skip leading zeroes in base58 result.\n    var it2 = size - length\n    while (it2 !== size && b58[it2] === 0) {\n      it2++\n    }\n        // Translate the result into a string.\n    var str = LEADER.repeat(zeroes)\n    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }\n    return str\n  }\n  function decodeUnsafe (source) {\n    if (typeof source !== 'string') { throw new TypeError('Expected String') }\n    if (source.length === 0) { return _Buffer.alloc(0) }\n    var psz = 0\n        // Skip and count leading '1's.\n    var zeroes = 0\n    var length = 0\n    while (source[psz] === LEADER) {\n      zeroes++\n      psz++\n    }\n        // Allocate enough space in big-endian base256 representation.\n    var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.\n    var b256 = new Uint8Array(size)\n        // Process the characters.\n    while (source[psz]) {\n            // Decode character\n      var carry = BASE_MAP[source.charCodeAt(psz)]\n            // Invalid character\n      if (carry === 255) { return }\n      var i = 0\n      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {\n        carry += (BASE * b256[it3]) >>> 0\n        b256[it3] = (carry % 256) >>> 0\n        carry = (carry / 256) >>> 0\n      }\n      if (carry !== 0) { throw new Error('Non-zero carry') }\n      length = i\n      psz++\n    }\n        // Skip leading zeroes in b256.\n    var it4 = size - length\n    while (it4 !== size && b256[it4] === 0) {\n      it4++\n    }\n    var vch = _Buffer.allocUnsafe(zeroes + (size - it4))\n    vch.fill(0x00, 0, zeroes)\n    var j = zeroes\n    while (it4 !== size) {\n      vch[j++] = b256[it4++]\n    }\n    return vch\n  }\n  function decode (string) {\n    var buffer = decodeUnsafe(string)\n    if (buffer) { return buffer }\n    throw new Error('Non-base' + BASE + ' character')\n  }\n  return {\n    encode: encode,\n    decodeUnsafe: decodeUnsafe,\n    decode: decode\n  }\n}\nmodule.exports = base\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vYmFzZS14QDMuMC45L25vZGVfbW9kdWxlcy9iYXNlLXgvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpSUFBNkI7QUFDM0M7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakUscUNBQXFDO0FBQ3JDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZDQUE2QztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWSxTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSwrQkFBK0IsNkNBQTZDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2Jhc2UteEAzLjAuOS9ub2RlX21vZHVsZXMvYmFzZS14L3NyYy9pbmRleC5qcz9lNmNlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuLy8gYmFzZS14IGVuY29kaW5nIC8gZGVjb2Rpbmdcbi8vIENvcHlyaWdodCAoYykgMjAxOCBiYXNlLXggY29udHJpYnV0b3JzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxOCBUaGUgQml0Y29pbiBDb3JlIGRldmVsb3BlcnMgKGJhc2U1OC5jcHApXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIHNvZnR3YXJlIGxpY2Vuc2UsIHNlZSB0aGUgYWNjb21wYW55aW5nXG4vLyBmaWxlIExJQ0VOU0Ugb3IgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHAuXG4vLyBAdHMtaWdub3JlXG52YXIgX0J1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyXG5mdW5jdGlvbiBiYXNlIChBTFBIQUJFVCkge1xuICBpZiAoQUxQSEFCRVQubGVuZ3RoID49IDI1NSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHBoYWJldCB0b28gbG9uZycpIH1cbiAgdmFyIEJBU0VfTUFQID0gbmV3IFVpbnQ4QXJyYXkoMjU2KVxuICBmb3IgKHZhciBqID0gMDsgaiA8IEJBU0VfTUFQLmxlbmd0aDsgaisrKSB7XG4gICAgQkFTRV9NQVBbal0gPSAyNTVcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IEFMUEhBQkVULmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHggPSBBTFBIQUJFVC5jaGFyQXQoaSlcbiAgICB2YXIgeGMgPSB4LmNoYXJDb2RlQXQoMClcbiAgICBpZiAoQkFTRV9NQVBbeGNdICE9PSAyNTUpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcih4ICsgJyBpcyBhbWJpZ3VvdXMnKSB9XG4gICAgQkFTRV9NQVBbeGNdID0gaVxuICB9XG4gIHZhciBCQVNFID0gQUxQSEFCRVQubGVuZ3RoXG4gIHZhciBMRUFERVIgPSBBTFBIQUJFVC5jaGFyQXQoMClcbiAgdmFyIEZBQ1RPUiA9IE1hdGgubG9nKEJBU0UpIC8gTWF0aC5sb2coMjU2KSAvLyBsb2coQkFTRSkgLyBsb2coMjU2KSwgcm91bmRlZCB1cFxuICB2YXIgaUZBQ1RPUiA9IE1hdGgubG9nKDI1NikgLyBNYXRoLmxvZyhCQVNFKSAvLyBsb2coMjU2KSAvIGxvZyhCQVNFKSwgcm91bmRlZCB1cFxuICBmdW5jdGlvbiBlbmNvZGUgKHNvdXJjZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkgfHwgc291cmNlIGluc3RhbmNlb2YgVWludDhBcnJheSkgeyBzb3VyY2UgPSBfQnVmZmVyLmZyb20oc291cmNlKSB9XG4gICAgaWYgKCFfQnVmZmVyLmlzQnVmZmVyKHNvdXJjZSkpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgQnVmZmVyJykgfVxuICAgIGlmIChzb3VyY2UubGVuZ3RoID09PSAwKSB7IHJldHVybiAnJyB9XG4gICAgICAgIC8vIFNraXAgJiBjb3VudCBsZWFkaW5nIHplcm9lcy5cbiAgICB2YXIgemVyb2VzID0gMFxuICAgIHZhciBsZW5ndGggPSAwXG4gICAgdmFyIHBiZWdpbiA9IDBcbiAgICB2YXIgcGVuZCA9IHNvdXJjZS5sZW5ndGhcbiAgICB3aGlsZSAocGJlZ2luICE9PSBwZW5kICYmIHNvdXJjZVtwYmVnaW5dID09PSAwKSB7XG4gICAgICBwYmVnaW4rK1xuICAgICAgemVyb2VzKytcbiAgICB9XG4gICAgICAgIC8vIEFsbG9jYXRlIGVub3VnaCBzcGFjZSBpbiBiaWctZW5kaWFuIGJhc2U1OCByZXByZXNlbnRhdGlvbi5cbiAgICB2YXIgc2l6ZSA9ICgocGVuZCAtIHBiZWdpbikgKiBpRkFDVE9SICsgMSkgPj4+IDBcbiAgICB2YXIgYjU4ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgYnl0ZXMuXG4gICAgd2hpbGUgKHBiZWdpbiAhPT0gcGVuZCkge1xuICAgICAgdmFyIGNhcnJ5ID0gc291cmNlW3BiZWdpbl1cbiAgICAgICAgICAgIC8vIEFwcGx5IFwiYjU4ID0gYjU4ICogMjU2ICsgY2hcIi5cbiAgICAgIHZhciBpID0gMFxuICAgICAgZm9yICh2YXIgaXQxID0gc2l6ZSAtIDE7IChjYXJyeSAhPT0gMCB8fCBpIDwgbGVuZ3RoKSAmJiAoaXQxICE9PSAtMSk7IGl0MS0tLCBpKyspIHtcbiAgICAgICAgY2FycnkgKz0gKDI1NiAqIGI1OFtpdDFdKSA+Pj4gMFxuICAgICAgICBiNThbaXQxXSA9IChjYXJyeSAlIEJBU0UpID4+PiAwXG4gICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gQkFTRSkgPj4+IDBcbiAgICAgIH1cbiAgICAgIGlmIChjYXJyeSAhPT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ05vbi16ZXJvIGNhcnJ5JykgfVxuICAgICAgbGVuZ3RoID0gaVxuICAgICAgcGJlZ2luKytcbiAgICB9XG4gICAgICAgIC8vIFNraXAgbGVhZGluZyB6ZXJvZXMgaW4gYmFzZTU4IHJlc3VsdC5cbiAgICB2YXIgaXQyID0gc2l6ZSAtIGxlbmd0aFxuICAgIHdoaWxlIChpdDIgIT09IHNpemUgJiYgYjU4W2l0Ml0gPT09IDApIHtcbiAgICAgIGl0MisrXG4gICAgfVxuICAgICAgICAvLyBUcmFuc2xhdGUgdGhlIHJlc3VsdCBpbnRvIGEgc3RyaW5nLlxuICAgIHZhciBzdHIgPSBMRUFERVIucmVwZWF0KHplcm9lcylcbiAgICBmb3IgKDsgaXQyIDwgc2l6ZTsgKytpdDIpIHsgc3RyICs9IEFMUEhBQkVULmNoYXJBdChiNThbaXQyXSkgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuICBmdW5jdGlvbiBkZWNvZGVVbnNhZmUgKHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnc3RyaW5nJykgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBTdHJpbmcnKSB9XG4gICAgaWYgKHNvdXJjZS5sZW5ndGggPT09IDApIHsgcmV0dXJuIF9CdWZmZXIuYWxsb2MoMCkgfVxuICAgIHZhciBwc3ogPSAwXG4gICAgICAgIC8vIFNraXAgYW5kIGNvdW50IGxlYWRpbmcgJzEncy5cbiAgICB2YXIgemVyb2VzID0gMFxuICAgIHZhciBsZW5ndGggPSAwXG4gICAgd2hpbGUgKHNvdXJjZVtwc3pdID09PSBMRUFERVIpIHtcbiAgICAgIHplcm9lcysrXG4gICAgICBwc3orK1xuICAgIH1cbiAgICAgICAgLy8gQWxsb2NhdGUgZW5vdWdoIHNwYWNlIGluIGJpZy1lbmRpYW4gYmFzZTI1NiByZXByZXNlbnRhdGlvbi5cbiAgICB2YXIgc2l6ZSA9ICgoKHNvdXJjZS5sZW5ndGggLSBwc3opICogRkFDVE9SKSArIDEpID4+PiAwIC8vIGxvZyg1OCkgLyBsb2coMjU2KSwgcm91bmRlZCB1cC5cbiAgICB2YXIgYjI1NiA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIGNoYXJhY3RlcnMuXG4gICAgd2hpbGUgKHNvdXJjZVtwc3pdKSB7XG4gICAgICAgICAgICAvLyBEZWNvZGUgY2hhcmFjdGVyXG4gICAgICB2YXIgY2FycnkgPSBCQVNFX01BUFtzb3VyY2UuY2hhckNvZGVBdChwc3opXVxuICAgICAgICAgICAgLy8gSW52YWxpZCBjaGFyYWN0ZXJcbiAgICAgIGlmIChjYXJyeSA9PT0gMjU1KSB7IHJldHVybiB9XG4gICAgICB2YXIgaSA9IDBcbiAgICAgIGZvciAodmFyIGl0MyA9IHNpemUgLSAxOyAoY2FycnkgIT09IDAgfHwgaSA8IGxlbmd0aCkgJiYgKGl0MyAhPT0gLTEpOyBpdDMtLSwgaSsrKSB7XG4gICAgICAgIGNhcnJ5ICs9IChCQVNFICogYjI1NltpdDNdKSA+Pj4gMFxuICAgICAgICBiMjU2W2l0M10gPSAoY2FycnkgJSAyNTYpID4+PiAwXG4gICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gMjU2KSA+Pj4gMFxuICAgICAgfVxuICAgICAgaWYgKGNhcnJ5ICE9PSAwKSB7IHRocm93IG5ldyBFcnJvcignTm9uLXplcm8gY2FycnknKSB9XG4gICAgICBsZW5ndGggPSBpXG4gICAgICBwc3orK1xuICAgIH1cbiAgICAgICAgLy8gU2tpcCBsZWFkaW5nIHplcm9lcyBpbiBiMjU2LlxuICAgIHZhciBpdDQgPSBzaXplIC0gbGVuZ3RoXG4gICAgd2hpbGUgKGl0NCAhPT0gc2l6ZSAmJiBiMjU2W2l0NF0gPT09IDApIHtcbiAgICAgIGl0NCsrXG4gICAgfVxuICAgIHZhciB2Y2ggPSBfQnVmZmVyLmFsbG9jVW5zYWZlKHplcm9lcyArIChzaXplIC0gaXQ0KSlcbiAgICB2Y2guZmlsbCgweDAwLCAwLCB6ZXJvZXMpXG4gICAgdmFyIGogPSB6ZXJvZXNcbiAgICB3aGlsZSAoaXQ0ICE9PSBzaXplKSB7XG4gICAgICB2Y2hbaisrXSA9IGIyNTZbaXQ0KytdXG4gICAgfVxuICAgIHJldHVybiB2Y2hcbiAgfVxuICBmdW5jdGlvbiBkZWNvZGUgKHN0cmluZykge1xuICAgIHZhciBidWZmZXIgPSBkZWNvZGVVbnNhZmUoc3RyaW5nKVxuICAgIGlmIChidWZmZXIpIHsgcmV0dXJuIGJ1ZmZlciB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb24tYmFzZScgKyBCQVNFICsgJyBjaGFyYWN0ZXInKVxuICB9XG4gIHJldHVybiB7XG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgZGVjb2RlVW5zYWZlOiBkZWNvZGVVbnNhZmUsXG4gICAgZGVjb2RlOiBkZWNvZGVcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/base-x@3.0.9/node_modules/base-x/src/index.js\n");

/***/ })

};
;