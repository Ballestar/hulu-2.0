"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Thumbnail.js":
/*!*********************************!*\
  !*** ./components/Thumbnail.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\repos\\Personal\\hulu-2-yt\\components\\Thumbnail.js",
    _this = undefined;






var Thumbnail = function Thumbnail(_ref, ref) {
  var result = _ref.result;
  var BASE_URL = "https://image.tmdb.org/t/p/original/";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "p-2 group cursor-pointer transition duration-200 ease-in transform sm: hover:scale-105 hover:z-50",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
      layout: "responsive",
      src: "".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || "".concat(BASE_URL).concat(result.poster_path),
      height: 1080,
      width: 1920
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "p-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        className: "truncate max-w-md",
        children: result.overview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        className: "mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold",
        children: result.title || result.original_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        className: "flex items-center opacity-0 group-hover:opacity-100",
        children: [result.media_type && "".concat(result.media_type, " \u2022"), " ", result.release_date || result.first_air_date, " \u2022", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ThumbUpIcon, {
          className: "h-5 mx-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this), " ", result.vote_count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_c = Thumbnail;
/* harmony default export */ __webpack_exports__["default"] = (Thumbnail);

var _c;

$RefreshReg$(_c, "Thumbnail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRhMjE2ZjE5YTEyMzA3NDE2ZTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBSSxTQUFiQSxTQUFhLE9BQVdDLEdBQVgsRUFBbUI7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQ2xDLE1BQU1DLFFBQVEsR0FBRSxzQ0FBaEI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxtR0FBZjtBQUFBLDRCQUNJLDhEQUFDLG1EQUFEO0FBQ0ksWUFBTSxFQUFDLFlBRFg7QUFFSSxTQUFHLEVBQ0MsVUFBR0EsUUFBSCxTQUFjRCxNQUFNLENBQUNFLGFBQVAsSUFBd0JGLE1BQU0sQ0FBQ0csV0FBN0MsZUFDR0YsUUFESCxTQUNjRCxNQUFNLENBQUNHLFdBRHJCLENBSFI7QUFNSSxZQUFNLEVBQUUsSUFOWjtBQU9JLFdBQUssRUFBRTtBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVVJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDSTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQSxrQkFBa0NILE1BQU0sQ0FBQ0k7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSSxpQkFBUyxFQUFDLHdGQUFkO0FBQUEsa0JBQXdHSixNQUFNLENBQUNLLEtBQVAsSUFBZ0JMLE1BQU0sQ0FBQ007QUFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBRyxpQkFBUyxFQUFDLHFEQUFiO0FBQUEsbUJBQ0tOLE1BQU0sQ0FBQ08sVUFBUCxjQUF3QlAsTUFBTSxDQUFDTyxVQUEvQixZQURMLEVBQ29ELEdBRHBELEVBRUtQLE1BQU0sQ0FBQ1EsWUFBUCxJQUF1QlIsTUFBTSxDQUFDUyxjQUZuQyxhQUVxRCxHQUZyRCxlQUdJLDhEQUFDLGlFQUFEO0FBQWEsbUJBQVMsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLE9BR3lDVCxNQUFNLENBQUNVLFVBSGhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JILENBekJEOztLQUFNWjtBQTRCTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RodW1ibmFpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgVGh1bWJVcEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRodW1ibmFpbCA9ICgoe3Jlc3VsdH0sIHJlZikgPT4ge1xyXG4gICAgY29uc3QgQkFTRV9VUkwgPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBncm91cCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluIHRyYW5zZm9ybSBzbTogaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnotNTBcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9J3Jlc3BvbnNpdmUnXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LmJhY2tkcm9wX3BhdGggfHwgcmVzdWx0LnBvc3Rlcl9wYXRofWAgfHxcclxuICAgICAgICAgICAgICAgICAgICBgJHtCQVNFX1VSTH0ke3Jlc3VsdC5wb3N0ZXJfcGF0aH1gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwODB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRydW5jYXRlIG1heC13LW1kXCI+e3Jlc3VsdC5vdmVydmlld308L3A+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LTJ4bCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWluLW91dCBncm91cC1ob3Zlcjpmb250LWJvbGRcIj57cmVzdWx0LnRpdGxlIHx8IHJlc3VsdC5vcmlnaW5hbF9uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cmVzdWx0Lm1lZGlhX3R5cGUgJiYgYCR7cmVzdWx0Lm1lZGlhX3R5cGV9IOKAomB9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHQucmVsZWFzZV9kYXRlIHx8IHJlc3VsdC5maXJzdF9haXJfZGF0ZX0g4oCie1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYlVwSWNvbiBjbGFzc05hbWU9XCJoLTUgbXgtMlwiLz4ge3Jlc3VsdC52b3RlX2NvdW50fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsXHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlRodW1iVXBJY29uIiwiZm9yd2FyZFJlZiIsIlRodW1ibmFpbCIsInJlZiIsInJlc3VsdCIsIkJBU0VfVVJMIiwiYmFja2Ryb3BfcGF0aCIsInBvc3Rlcl9wYXRoIiwib3ZlcnZpZXciLCJ0aXRsZSIsIm9yaWdpbmFsX25hbWUiLCJtZWRpYV90eXBlIiwicmVsZWFzZV9kYXRlIiwiZmlyc3RfYWlyX2RhdGUiLCJ2b3RlX2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==