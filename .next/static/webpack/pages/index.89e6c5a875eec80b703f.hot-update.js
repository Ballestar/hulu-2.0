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
    className: "group cursor-pointer",
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
        children: result.title || result.original_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "flex items-center opacity-0 group-hover:opacity-100",
        children: [result.media_type && "".concat(result.media_type, " \u2022"), " ", result.release_date || $result.first_air_date, " \u2022", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ThumbUpIcon, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODllNmM1YTg3NWVlYzgwYjcwM2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUM1QixNQUFNQyxRQUFRLEdBQUUsc0NBQWhCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQSw0QkFDSSw4REFBQyxtREFBRDtBQUNJLFlBQU0sRUFBQyxZQURYO0FBRUksU0FBRyxFQUNDLFVBQUdBLFFBQUgsU0FBY0QsTUFBTSxDQUFDRSxhQUFQLElBQXdCRixNQUFNLENBQUNHLFdBQTdDLGVBQ0dGLFFBREgsU0FDY0QsTUFBTSxDQUFDRyxXQURyQixDQUhSO0FBTUksWUFBTSxFQUFFLElBTlo7QUFPSSxXQUFLLEVBQUU7QUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFVSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUEsa0JBQWtDSCxNQUFNLENBQUNJO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsa0JBQUtKLE1BQU0sQ0FBQ0ssS0FBUCxJQUFnQkwsTUFBTSxDQUFDTTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFHLGlCQUFTLEVBQUMscURBQWI7QUFBQSxtQkFDS04sTUFBTSxDQUFDTyxVQUFQLGNBQXdCUCxNQUFNLENBQUNPLFVBQS9CLFlBREwsRUFDb0QsR0FEcEQsRUFFS1AsTUFBTSxDQUFDUSxZQUFQLElBQXVCQyxPQUFPLENBQUNDLGNBRnBDLGFBRXNELEdBRnRELGVBR0ksOERBQUMsaUVBQUQ7QUFBYSxtQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosT0FHeUNWLE1BQU0sQ0FBQ1csVUFIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzQkgsQ0F6QkQ7O0tBQU1aO0FBMkJOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGh1bWJuYWlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBUaHVtYlVwSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuXHJcbmNvbnN0IFRodW1ibmFpbCA9ICh7cmVzdWx0fSkgPT4ge1xyXG4gICAgY29uc3QgQkFTRV9VUkwgPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PSdyZXNwb25zaXZlJ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBgJHtCQVNFX1VSTH0ke3Jlc3VsdC5iYWNrZHJvcF9wYXRoIHx8IHJlc3VsdC5wb3N0ZXJfcGF0aH1gIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYCR7QkFTRV9VUkx9JHtyZXN1bHQucG9zdGVyX3BhdGh9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDgwfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE5MjB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBtYXgtdy1tZFwiPntyZXN1bHQub3ZlcnZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGgyPntyZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHQubWVkaWFfdHlwZSAmJiBgJHtyZXN1bHQubWVkaWFfdHlwZX0g4oCiYH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5yZWxlYXNlX2RhdGUgfHwgJHJlc3VsdC5maXJzdF9haXJfZGF0ZX0g4oCie1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYlVwSWNvbiBjbGFzc05hbWU9XCJoLTUgbXgtMlwiLz4ge3Jlc3VsdC52b3RlX2NvdW50fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsXHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlRodW1iVXBJY29uIiwiVGh1bWJuYWlsIiwicmVzdWx0IiwiQkFTRV9VUkwiLCJiYWNrZHJvcF9wYXRoIiwicG9zdGVyX3BhdGgiLCJvdmVydmlldyIsInRpdGxlIiwib3JpZ2luYWxfbmFtZSIsIm1lZGlhX3R5cGUiLCJyZWxlYXNlX2RhdGUiLCIkcmVzdWx0IiwiZmlyc3RfYWlyX2RhdGUiLCJ2b3RlX2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==