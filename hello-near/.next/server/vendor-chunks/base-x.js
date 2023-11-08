"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/base-x";
exports.ids = ["vendor-chunks/base-x"];
exports.modules = {

/***/ "(ssr)/./node_modules/base-x/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/base-x/src/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// base-x encoding / decoding\n// Copyright (c) 2018 base-x contributors\n// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)\n// Distributed under the MIT software license, see the accompanying\n// file LICENSE or http://www.opensource.org/licenses/mit-license.php.\n// @ts-ignore\nvar _Buffer = (__webpack_require__(/*! safe-buffer */ \"(ssr)/./node_modules/safe-buffer/index.js\").Buffer)\nfunction base (ALPHABET) {\n  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }\n  var BASE_MAP = new Uint8Array(256)\n  for (var j = 0; j < BASE_MAP.length; j++) {\n    BASE_MAP[j] = 255\n  }\n  for (var i = 0; i < ALPHABET.length; i++) {\n    var x = ALPHABET.charAt(i)\n    var xc = x.charCodeAt(0)\n    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }\n    BASE_MAP[xc] = i\n  }\n  var BASE = ALPHABET.length\n  var LEADER = ALPHABET.charAt(0)\n  var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up\n  var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up\n  function encode (source) {\n    if (Array.isArray(source) || source instanceof Uint8Array) { source = _Buffer.from(source) }\n    if (!_Buffer.isBuffer(source)) { throw new TypeError('Expected Buffer') }\n    if (source.length === 0) { return '' }\n        // Skip & count leading zeroes.\n    var zeroes = 0\n    var length = 0\n    var pbegin = 0\n    var pend = source.length\n    while (pbegin !== pend && source[pbegin] === 0) {\n      pbegin++\n      zeroes++\n    }\n        // Allocate enough space in big-endian base58 representation.\n    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0\n    var b58 = new Uint8Array(size)\n        // Process the bytes.\n    while (pbegin !== pend) {\n      var carry = source[pbegin]\n            // Apply \"b58 = b58 * 256 + ch\".\n      var i = 0\n      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {\n        carry += (256 * b58[it1]) >>> 0\n        b58[it1] = (carry % BASE) >>> 0\n        carry = (carry / BASE) >>> 0\n      }\n      if (carry !== 0) { throw new Error('Non-zero carry') }\n      length = i\n      pbegin++\n    }\n        // Skip leading zeroes in base58 result.\n    var it2 = size - length\n    while (it2 !== size && b58[it2] === 0) {\n      it2++\n    }\n        // Translate the result into a string.\n    var str = LEADER.repeat(zeroes)\n    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }\n    return str\n  }\n  function decodeUnsafe (source) {\n    if (typeof source !== 'string') { throw new TypeError('Expected String') }\n    if (source.length === 0) { return _Buffer.alloc(0) }\n    var psz = 0\n        // Skip and count leading '1's.\n    var zeroes = 0\n    var length = 0\n    while (source[psz] === LEADER) {\n      zeroes++\n      psz++\n    }\n        // Allocate enough space in big-endian base256 representation.\n    var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.\n    var b256 = new Uint8Array(size)\n        // Process the characters.\n    while (source[psz]) {\n            // Decode character\n      var carry = BASE_MAP[source.charCodeAt(psz)]\n            // Invalid character\n      if (carry === 255) { return }\n      var i = 0\n      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {\n        carry += (BASE * b256[it3]) >>> 0\n        b256[it3] = (carry % 256) >>> 0\n        carry = (carry / 256) >>> 0\n      }\n      if (carry !== 0) { throw new Error('Non-zero carry') }\n      length = i\n      psz++\n    }\n        // Skip leading zeroes in b256.\n    var it4 = size - length\n    while (it4 !== size && b256[it4] === 0) {\n      it4++\n    }\n    var vch = _Buffer.allocUnsafe(zeroes + (size - it4))\n    vch.fill(0x00, 0, zeroes)\n    var j = zeroes\n    while (it4 !== size) {\n      vch[j++] = b256[it4++]\n    }\n    return vch\n  }\n  function decode (string) {\n    var buffer = decodeUnsafe(string)\n    if (buffer) { return buffer }\n    throw new Error('Non-base' + BASE + ' character')\n  }\n  return {\n    encode: encode,\n    decodeUnsafe: decodeUnsafe,\n    decode: decode\n  }\n}\nmodule.exports = base\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmFzZS14L3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNEZBQTZCO0FBQzNDO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFLHFDQUFxQztBQUNyQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2Q0FBNkM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVksU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsK0JBQStCLDZDQUE2QztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9iYXNlLXgvc3JjL2luZGV4LmpzPzk5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4vLyBiYXNlLXggZW5jb2RpbmcgLyBkZWNvZGluZ1xuLy8gQ29weXJpZ2h0IChjKSAyMDE4IGJhc2UteCBjb250cmlidXRvcnNcbi8vIENvcHlyaWdodCAoYykgMjAxNC0yMDE4IFRoZSBCaXRjb2luIENvcmUgZGV2ZWxvcGVycyAoYmFzZTU4LmNwcClcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgc29mdHdhcmUgbGljZW5zZSwgc2VlIHRoZSBhY2NvbXBhbnlpbmdcbi8vIGZpbGUgTElDRU5TRSBvciBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocC5cbi8vIEB0cy1pZ25vcmVcbnZhciBfQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcbmZ1bmN0aW9uIGJhc2UgKEFMUEhBQkVUKSB7XG4gIGlmIChBTFBIQUJFVC5sZW5ndGggPj0gMjU1KSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscGhhYmV0IHRvbyBsb25nJykgfVxuICB2YXIgQkFTRV9NQVAgPSBuZXcgVWludDhBcnJheSgyNTYpXG4gIGZvciAodmFyIGogPSAwOyBqIDwgQkFTRV9NQVAubGVuZ3RoOyBqKyspIHtcbiAgICBCQVNFX01BUFtqXSA9IDI1NVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgQUxQSEFCRVQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgeCA9IEFMUEhBQkVULmNoYXJBdChpKVxuICAgIHZhciB4YyA9IHguY2hhckNvZGVBdCgwKVxuICAgIGlmIChCQVNFX01BUFt4Y10gIT09IDI1NSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKHggKyAnIGlzIGFtYmlndW91cycpIH1cbiAgICBCQVNFX01BUFt4Y10gPSBpXG4gIH1cbiAgdmFyIEJBU0UgPSBBTFBIQUJFVC5sZW5ndGhcbiAgdmFyIExFQURFUiA9IEFMUEhBQkVULmNoYXJBdCgwKVxuICB2YXIgRkFDVE9SID0gTWF0aC5sb2coQkFTRSkgLyBNYXRoLmxvZygyNTYpIC8vIGxvZyhCQVNFKSAvIGxvZygyNTYpLCByb3VuZGVkIHVwXG4gIHZhciBpRkFDVE9SID0gTWF0aC5sb2coMjU2KSAvIE1hdGgubG9nKEJBU0UpIC8vIGxvZygyNTYpIC8gbG9nKEJBU0UpLCByb3VuZGVkIHVwXG4gIGZ1bmN0aW9uIGVuY29kZSAoc291cmNlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSB8fCBzb3VyY2UgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7IHNvdXJjZSA9IF9CdWZmZXIuZnJvbShzb3VyY2UpIH1cbiAgICBpZiAoIV9CdWZmZXIuaXNCdWZmZXIoc291cmNlKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBCdWZmZXInKSB9XG4gICAgaWYgKHNvdXJjZS5sZW5ndGggPT09IDApIHsgcmV0dXJuICcnIH1cbiAgICAgICAgLy8gU2tpcCAmIGNvdW50IGxlYWRpbmcgemVyb2VzLlxuICAgIHZhciB6ZXJvZXMgPSAwXG4gICAgdmFyIGxlbmd0aCA9IDBcbiAgICB2YXIgcGJlZ2luID0gMFxuICAgIHZhciBwZW5kID0gc291cmNlLmxlbmd0aFxuICAgIHdoaWxlIChwYmVnaW4gIT09IHBlbmQgJiYgc291cmNlW3BiZWdpbl0gPT09IDApIHtcbiAgICAgIHBiZWdpbisrXG4gICAgICB6ZXJvZXMrK1xuICAgIH1cbiAgICAgICAgLy8gQWxsb2NhdGUgZW5vdWdoIHNwYWNlIGluIGJpZy1lbmRpYW4gYmFzZTU4IHJlcHJlc2VudGF0aW9uLlxuICAgIHZhciBzaXplID0gKChwZW5kIC0gcGJlZ2luKSAqIGlGQUNUT1IgKyAxKSA+Pj4gMFxuICAgIHZhciBiNTggPSBuZXcgVWludDhBcnJheShzaXplKVxuICAgICAgICAvLyBQcm9jZXNzIHRoZSBieXRlcy5cbiAgICB3aGlsZSAocGJlZ2luICE9PSBwZW5kKSB7XG4gICAgICB2YXIgY2FycnkgPSBzb3VyY2VbcGJlZ2luXVxuICAgICAgICAgICAgLy8gQXBwbHkgXCJiNTggPSBiNTggKiAyNTYgKyBjaFwiLlxuICAgICAgdmFyIGkgPSAwXG4gICAgICBmb3IgKHZhciBpdDEgPSBzaXplIC0gMTsgKGNhcnJ5ICE9PSAwIHx8IGkgPCBsZW5ndGgpICYmIChpdDEgIT09IC0xKTsgaXQxLS0sIGkrKykge1xuICAgICAgICBjYXJyeSArPSAoMjU2ICogYjU4W2l0MV0pID4+PiAwXG4gICAgICAgIGI1OFtpdDFdID0gKGNhcnJ5ICUgQkFTRSkgPj4+IDBcbiAgICAgICAgY2FycnkgPSAoY2FycnkgLyBCQVNFKSA+Pj4gMFxuICAgICAgfVxuICAgICAgaWYgKGNhcnJ5ICE9PSAwKSB7IHRocm93IG5ldyBFcnJvcignTm9uLXplcm8gY2FycnknKSB9XG4gICAgICBsZW5ndGggPSBpXG4gICAgICBwYmVnaW4rK1xuICAgIH1cbiAgICAgICAgLy8gU2tpcCBsZWFkaW5nIHplcm9lcyBpbiBiYXNlNTggcmVzdWx0LlxuICAgIHZhciBpdDIgPSBzaXplIC0gbGVuZ3RoXG4gICAgd2hpbGUgKGl0MiAhPT0gc2l6ZSAmJiBiNThbaXQyXSA9PT0gMCkge1xuICAgICAgaXQyKytcbiAgICB9XG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0aGUgcmVzdWx0IGludG8gYSBzdHJpbmcuXG4gICAgdmFyIHN0ciA9IExFQURFUi5yZXBlYXQoemVyb2VzKVxuICAgIGZvciAoOyBpdDIgPCBzaXplOyArK2l0MikgeyBzdHIgKz0gQUxQSEFCRVQuY2hhckF0KGI1OFtpdDJdKSB9XG4gICAgcmV0dXJuIHN0clxuICB9XG4gIGZ1bmN0aW9uIGRlY29kZVVuc2FmZSAoc291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdzdHJpbmcnKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFN0cmluZycpIH1cbiAgICBpZiAoc291cmNlLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gX0J1ZmZlci5hbGxvYygwKSB9XG4gICAgdmFyIHBzeiA9IDBcbiAgICAgICAgLy8gU2tpcCBhbmQgY291bnQgbGVhZGluZyAnMSdzLlxuICAgIHZhciB6ZXJvZXMgPSAwXG4gICAgdmFyIGxlbmd0aCA9IDBcbiAgICB3aGlsZSAoc291cmNlW3Bzel0gPT09IExFQURFUikge1xuICAgICAgemVyb2VzKytcbiAgICAgIHBzeisrXG4gICAgfVxuICAgICAgICAvLyBBbGxvY2F0ZSBlbm91Z2ggc3BhY2UgaW4gYmlnLWVuZGlhbiBiYXNlMjU2IHJlcHJlc2VudGF0aW9uLlxuICAgIHZhciBzaXplID0gKCgoc291cmNlLmxlbmd0aCAtIHBzeikgKiBGQUNUT1IpICsgMSkgPj4+IDAgLy8gbG9nKDU4KSAvIGxvZygyNTYpLCByb3VuZGVkIHVwLlxuICAgIHZhciBiMjU2ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgY2hhcmFjdGVycy5cbiAgICB3aGlsZSAoc291cmNlW3Bzel0pIHtcbiAgICAgICAgICAgIC8vIERlY29kZSBjaGFyYWN0ZXJcbiAgICAgIHZhciBjYXJyeSA9IEJBU0VfTUFQW3NvdXJjZS5jaGFyQ29kZUF0KHBzeildXG4gICAgICAgICAgICAvLyBJbnZhbGlkIGNoYXJhY3RlclxuICAgICAgaWYgKGNhcnJ5ID09PSAyNTUpIHsgcmV0dXJuIH1cbiAgICAgIHZhciBpID0gMFxuICAgICAgZm9yICh2YXIgaXQzID0gc2l6ZSAtIDE7IChjYXJyeSAhPT0gMCB8fCBpIDwgbGVuZ3RoKSAmJiAoaXQzICE9PSAtMSk7IGl0My0tLCBpKyspIHtcbiAgICAgICAgY2FycnkgKz0gKEJBU0UgKiBiMjU2W2l0M10pID4+PiAwXG4gICAgICAgIGIyNTZbaXQzXSA9IChjYXJyeSAlIDI1NikgPj4+IDBcbiAgICAgICAgY2FycnkgPSAoY2FycnkgLyAyNTYpID4+PiAwXG4gICAgICB9XG4gICAgICBpZiAoY2FycnkgIT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdOb24temVybyBjYXJyeScpIH1cbiAgICAgIGxlbmd0aCA9IGlcbiAgICAgIHBzeisrXG4gICAgfVxuICAgICAgICAvLyBTa2lwIGxlYWRpbmcgemVyb2VzIGluIGIyNTYuXG4gICAgdmFyIGl0NCA9IHNpemUgLSBsZW5ndGhcbiAgICB3aGlsZSAoaXQ0ICE9PSBzaXplICYmIGIyNTZbaXQ0XSA9PT0gMCkge1xuICAgICAgaXQ0KytcbiAgICB9XG4gICAgdmFyIHZjaCA9IF9CdWZmZXIuYWxsb2NVbnNhZmUoemVyb2VzICsgKHNpemUgLSBpdDQpKVxuICAgIHZjaC5maWxsKDB4MDAsIDAsIHplcm9lcylcbiAgICB2YXIgaiA9IHplcm9lc1xuICAgIHdoaWxlIChpdDQgIT09IHNpemUpIHtcbiAgICAgIHZjaFtqKytdID0gYjI1NltpdDQrK11cbiAgICB9XG4gICAgcmV0dXJuIHZjaFxuICB9XG4gIGZ1bmN0aW9uIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgdmFyIGJ1ZmZlciA9IGRlY29kZVVuc2FmZShzdHJpbmcpXG4gICAgaWYgKGJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vbi1iYXNlJyArIEJBU0UgKyAnIGNoYXJhY3RlcicpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmNvZGU6IGVuY29kZSxcbiAgICBkZWNvZGVVbnNhZmU6IGRlY29kZVVuc2FmZSxcbiAgICBkZWNvZGU6IGRlY29kZVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/base-x/src/index.js\n");

/***/ })

};
;