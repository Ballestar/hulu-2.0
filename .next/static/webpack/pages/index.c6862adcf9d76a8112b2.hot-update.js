"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/requests.js":
/*!***************************!*\
  !*** ./utils/requests.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
var API_KEY = process.env.API_KEY;
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchTrending: {
    title: "Trending",
    url: "/trending/all/week?api_key=".concat(API_KEY, "&language=en-US")
  },
  fetchTopRated: {
    title: "Top Rated",
    url: "/movie/top_rated?api_key=".concat(API_KEY, "&language=en-US")
  },
  fetchActionMovies: {
    title: "Action",
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=28")
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=35")
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=27")
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=10749")
  },
  fetchMystery: {
    title: "Mystery",
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=9648")
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=878")
  },
  fetchWestern: {
    title: "Western",
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=37")
  },
  fetchAnimation: {
    title: "Animation",
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=16")
  },
  fetchTV: {
    title: "TV Movie",
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=10770")
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzY4NjJhZGNmOWQ3NmE4MTEyYjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUE1QjtBQUVBLCtEQUFlO0FBQ1hHLEVBQUFBLGFBQWEsRUFBRTtBQUNYQyxJQUFBQSxLQUFLLEVBQUUsVUFESTtBQUVYQyxJQUFBQSxHQUFHLHVDQUFnQ0wsT0FBaEM7QUFGUSxHQURKO0FBS1hNLEVBQUFBLGFBQWEsRUFBQztBQUNWRixJQUFBQSxLQUFLLEVBQUUsV0FERztBQUVWQyxJQUFBQSxHQUFHLHFDQUE4QkwsT0FBOUI7QUFGTyxHQUxIO0FBU1hPLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2ZILElBQUFBLEtBQUssRUFBRSxRQURRO0FBRWZDLElBQUFBLEdBQUcsb0NBQTZCTCxPQUE3QjtBQUZZLEdBVFI7QUFhWFEsRUFBQUEsaUJBQWlCLEVBQUU7QUFDZkosSUFBQUEsS0FBSyxFQUFFLFFBRFE7QUFFZkMsSUFBQUEsR0FBRyxvQ0FBNEJMLE9BQTVCO0FBRlksR0FiUjtBQWlCWFMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDZkwsSUFBQUEsS0FBSyxFQUFDLFFBRFM7QUFFZkMsSUFBQUEsR0FBRyxvQ0FBNkJMLE9BQTdCO0FBRlksR0FqQlI7QUFxQlhVLEVBQUFBLGtCQUFrQixFQUFFO0FBQ2hCTixJQUFBQSxLQUFLLEVBQUMsU0FEVTtBQUVoQkMsSUFBQUEsR0FBRyxvQ0FBNkJMLE9BQTdCO0FBRmEsR0FyQlQ7QUF5QlhXLEVBQUFBLFlBQVksRUFBRTtBQUNWUCxJQUFBQSxLQUFLLEVBQUMsU0FESTtBQUVWQyxJQUFBQSxHQUFHLG9DQUE2QkwsT0FBN0I7QUFGTyxHQXpCSDtBQTZCWFksRUFBQUEsVUFBVSxFQUFFO0FBQ1JSLElBQUFBLEtBQUssRUFBQyxRQURFO0FBRVJDLElBQUFBLEdBQUcsb0NBQTZCTCxPQUE3QjtBQUZLLEdBN0JEO0FBaUNYYSxFQUFBQSxZQUFZLEVBQUU7QUFDVlQsSUFBQUEsS0FBSyxFQUFDLFNBREk7QUFFVkMsSUFBQUEsR0FBRyxvQ0FBNkJMLE9BQTdCO0FBRk8sR0FqQ0g7QUFxQ1hjLEVBQUFBLGNBQWMsRUFBRTtBQUNaVixJQUFBQSxLQUFLLEVBQUMsV0FETTtBQUVaQyxJQUFBQSxHQUFHLG9DQUE2QkwsT0FBN0I7QUFGUyxHQXJDTDtBQXlDWGUsRUFBQUEsT0FBTyxFQUFFO0FBQ0xYLElBQUFBLEtBQUssRUFBQyxVQUREO0FBRUxDLElBQUFBLEdBQUcsb0NBQTZCTCxPQUE3QjtBQUZFO0FBekNFLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcmVxdWVzdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmZXRjaFRyZW5kaW5nOiB7XHJcbiAgICAgICAgdGl0bGU6IFwiVHJlbmRpbmdcIixcclxuICAgICAgICB1cmw6IGAvdHJlbmRpbmcvYWxsL3dlZWs/YXBpX2tleT0ke0FQSV9LRVl9Jmxhbmd1YWdlPWVuLVVTYCxcclxuICAgIH0sXHJcbiAgICBmZXRjaFRvcFJhdGVkOntcclxuICAgICAgICB0aXRsZTogXCJUb3AgUmF0ZWRcIixcclxuICAgICAgICB1cmw6IGAvbW92aWUvdG9wX3JhdGVkP2FwaV9rZXk9JHtBUElfS0VZfSZsYW5ndWFnZT1lbi1VU2AsXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hBY3Rpb25Nb3ZpZXM6IHtcclxuICAgICAgICB0aXRsZTogXCJBY3Rpb25cIixcclxuICAgICAgICB1cmw6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTI4YCxcclxuICAgIH0sXHJcbiAgICBmZXRjaENvbWVkeU1vdmllczoge1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbWVkeVwiLFxyXG4gICAgICAgIHVybDpgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0zNWAsXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hIb3Jyb3JNb3ZpZXM6IHtcclxuICAgICAgICB0aXRsZTpcIkhvcnJvclwiLFxyXG4gICAgICAgIHVybDogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MjdgLFxyXG4gICAgfSxcclxuICAgIGZldGNoUm9tYW5jZU1vdmllczoge1xyXG4gICAgICAgIHRpdGxlOlwiUm9tYW5jZVwiLFxyXG4gICAgICAgIHVybDogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTA3NDlgLFxyXG4gICAgfSxcclxuICAgIGZldGNoTXlzdGVyeToge1xyXG4gICAgICAgIHRpdGxlOlwiTXlzdGVyeVwiLFxyXG4gICAgICAgIHVybDogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9OTY0OGAsXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hTY2lGaToge1xyXG4gICAgICAgIHRpdGxlOlwiU2NpLUZpXCIsXHJcbiAgICAgICAgdXJsOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz04NzhgLFxyXG4gICAgfSxcclxuICAgIGZldGNoV2VzdGVybjoge1xyXG4gICAgICAgIHRpdGxlOlwiV2VzdGVyblwiLFxyXG4gICAgICAgIHVybDogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MzdgLFxyXG4gICAgfSxcclxuICAgIGZldGNoQW5pbWF0aW9uOiB7XHJcbiAgICAgICAgdGl0bGU6XCJBbmltYXRpb25cIixcclxuICAgICAgICB1cmw6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTE2YCxcclxuICAgIH0sXHJcbiAgICBmZXRjaFRWOiB7XHJcbiAgICAgICAgdGl0bGU6XCJUViBNb3ZpZVwiLFxyXG4gICAgICAgIHVybDogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTA3NzBgLFxyXG4gICAgfSxcclxufSJdLCJuYW1lcyI6WyJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsImZldGNoVHJlbmRpbmciLCJ0aXRsZSIsInVybCIsImZldGNoVG9wUmF0ZWQiLCJmZXRjaEFjdGlvbk1vdmllcyIsImZldGNoQ29tZWR5TW92aWVzIiwiZmV0Y2hIb3Jyb3JNb3ZpZXMiLCJmZXRjaFJvbWFuY2VNb3ZpZXMiLCJmZXRjaE15c3RlcnkiLCJmZXRjaFNjaUZpIiwiZmV0Y2hXZXN0ZXJuIiwiZmV0Y2hBbmltYXRpb24iLCJmZXRjaFRWIl0sInNvdXJjZVJvb3QiOiIifQ==