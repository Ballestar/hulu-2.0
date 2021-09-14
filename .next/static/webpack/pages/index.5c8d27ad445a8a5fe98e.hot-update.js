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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\repos\\Personal\\hulu-2-yt\\components\\Thumbnail.js",
    _this = undefined;





var Thumbnail = function Thumbnail(_ref) {
  var result = _ref.result;
  var BASE_URL = "https://image.tmdb.org/t/p/original/";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "p-2 group cursor-pointer transition duration-200 ease-in transform sm: hover:scale-105 hover:z-50",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
      layout: "responsive",
      src: "".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || "".concat(BASE_URL).concat(result.poster_path),
      height: 1080,
      width: 1920
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "p-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "truncate max-w-md",
        children: result.overview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: "mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold",
        children: result.title || result.original_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "flex items-center opacity-0 group-hover:opacity-100",
        children: [result.media_type && "".concat(result.media_type, " \u2022"), " ", result.release_date || result.first_air_date, " \u2022", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ThumbUpIcon, {
          className: "h-5 mx-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, _this), " ", result.vote_count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWM4ZDI3YWQ0NDVhOGE1ZmU5OGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUM1QixNQUFNQyxRQUFRLEdBQUUsc0NBQWhCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsbUdBQWY7QUFBQSw0QkFDSSw4REFBQyxtREFBRDtBQUNJLFlBQU0sRUFBQyxZQURYO0FBRUksU0FBRyxFQUNDLFVBQUdBLFFBQUgsU0FBY0QsTUFBTSxDQUFDRSxhQUFQLElBQXdCRixNQUFNLENBQUNHLFdBQTdDLGVBQ0dGLFFBREgsU0FDY0QsTUFBTSxDQUFDRyxXQURyQixDQUhSO0FBTUksWUFBTSxFQUFFLElBTlo7QUFPSSxXQUFLLEVBQUU7QUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFVSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUEsa0JBQWtDSCxNQUFNLENBQUNJO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUksaUJBQVMsRUFBQyx3RkFBZDtBQUFBLGtCQUF3R0osTUFBTSxDQUFDSyxLQUFQLElBQWdCTCxNQUFNLENBQUNNO0FBQS9IO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUcsaUJBQVMsRUFBQyxxREFBYjtBQUFBLG1CQUNLTixNQUFNLENBQUNPLFVBQVAsY0FBd0JQLE1BQU0sQ0FBQ08sVUFBL0IsWUFETCxFQUNvRCxHQURwRCxFQUVLUCxNQUFNLENBQUNRLFlBQVAsSUFBdUJSLE1BQU0sQ0FBQ1MsY0FGbkMsYUFFcUQsR0FGckQsZUFHSSw4REFBQyxpRUFBRDtBQUFhLG1CQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixPQUd5Q1QsTUFBTSxDQUFDVSxVQUhoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQXpCRDs7S0FBTVg7QUEyQk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaHVtYm5haWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IFRodW1iVXBJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5cclxuY29uc3QgVGh1bWJuYWlsID0gKHtyZXN1bHR9KSA9PiB7XHJcbiAgICBjb25zdCBCQVNFX1VSTCA9XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGdyb3VwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4gdHJhbnNmb3JtIHNtOiBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6ei01MFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgYCR7QkFTRV9VUkx9JHtyZXN1bHQuYmFja2Ryb3BfcGF0aCB8fCByZXN1bHQucG9zdGVyX3BhdGh9YCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LnBvc3Rlcl9wYXRofWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTA4MH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxOTIwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGUgbWF4LXctbWRcIj57cmVzdWx0Lm92ZXJ2aWV3fTwvcD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0xIHRleHQtMnhsIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOmZvbnQtYm9sZFwiPntyZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHQubWVkaWFfdHlwZSAmJiBgJHtyZXN1bHQubWVkaWFfdHlwZX0g4oCiYH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5yZWxlYXNlX2RhdGUgfHwgcmVzdWx0LmZpcnN0X2Fpcl9kYXRlfSDigKJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPFRodW1iVXBJY29uIGNsYXNzTmFtZT1cImgtNSBteC0yXCIvPiB7cmVzdWx0LnZvdGVfY291bnR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaHVtYm5haWxcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiVGh1bWJVcEljb24iLCJUaHVtYm5haWwiLCJyZXN1bHQiLCJCQVNFX1VSTCIsImJhY2tkcm9wX3BhdGgiLCJwb3N0ZXJfcGF0aCIsIm92ZXJ2aWV3IiwidGl0bGUiLCJvcmlnaW5hbF9uYW1lIiwibWVkaWFfdHlwZSIsInJlbGVhc2VfZGF0ZSIsImZpcnN0X2Fpcl9kYXRlIiwidm90ZV9jb3VudCJdLCJzb3VyY2VSb290IjoiIn0=