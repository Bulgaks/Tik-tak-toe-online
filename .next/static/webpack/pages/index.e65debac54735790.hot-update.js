"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game/use-game-state.js":
/*!*******************************************!*\
  !*** ./components/game/use-game-state.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\n\nfunction useGameState(plauersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.ZERO\n        }));\n    console.log((0,_model__WEBPACK_IMPORTED_MODULE_2__.computeWinner)(cells));\n    const winnerSequence = (0,_model__WEBPACK_IMPORTED_MODULE_2__.computeWinner)(cells);\n    console.l;\n    const nextMove = (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(currentMove, plauersCount);\n    const handleCellClick = (index)=>{\n        // Если setAnyThing принимает в коллбэк предыдущее состояние anyThing, для корректной работы используем lastAnyThing\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(lastGameState.currentMove, plauersCount),\n                cells: lastGameState.cells.map((cell, cellIndex)=>cellIndex === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerSequence\n    };\n}\n_s(useGameState, \"1JE/x7qSl3frDGTSpXwYqZuLqKg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ1U7QUFDVTtBQUU5QyxTQUFTSSxhQUFhQyxZQUFZOztJQUN2QyxNQUFNLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUUsRUFBRUMsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFPO1lBQzdETSxPQUFPLElBQUlHLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDL0JILGFBQWFOLG9EQUFZQSxDQUFDVSxJQUFJO1FBQ2hDO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ1gscURBQWFBLENBQUNJO0lBRTFCLE1BQU1RLGlCQUFpQloscURBQWFBLENBQUNJO0lBQ3JDTSxRQUFRRyxDQUFDO0lBQ1QsTUFBTUMsV0FBV2IsbURBQVdBLENBQUNJLGFBQWFGO0lBRTFDLE1BQU1ZLGtCQUFrQixDQUFDQztRQUN2QixvSEFBb0g7UUFFcEhWLGFBQWEsQ0FBQ1c7WUFDWixJQUFJQSxjQUFjYixLQUFLLENBQUNZLE1BQU0sRUFBRTtnQkFDOUIsT0FBT0M7WUFDVDtZQUNBLE9BQU87Z0JBQ0wsR0FBR0EsYUFBYTtnQkFDaEJaLGFBQWFKLG1EQUFXQSxDQUFDZ0IsY0FBY1osV0FBVyxFQUFFRjtnQkFDcERDLE9BQU9hLGNBQWNiLEtBQUssQ0FBQ2MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFlBQ3BDQSxjQUFjSixRQUFRQyxjQUFjWixXQUFXLEdBQUdjO1lBRXREO1FBQ0Y7SUFDRjtJQUNBLE9BQU87UUFDTGY7UUFDQUM7UUFDQVM7UUFDQUM7UUFDQUg7SUFDRjtBQUNGO0dBbkNnQlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL3VzZS1nYW1lLXN0YXRlLmpzPzExMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29tcHV0ZVdpbm5lciwgZ2V0TmV4dE1vdmUgfSBmcm9tIFwiLi9tb2RlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXVlcnNDb3VudCkge1xuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgfSkpO1xuXG4gIGNvbnNvbGUubG9nKGNvbXB1dGVXaW5uZXIoY2VsbHMpKTtcblxuICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVXaW5uZXIoY2VsbHMpO1xuICBjb25zb2xlLmxcbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxhdWVyc0NvdW50KTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICAvLyDQldGB0LvQuCBzZXRBbnlUaGluZyDQv9GA0LjQvdC40LzQsNC10YIg0LIg0LrQvtC70LvQsdGN0Log0L/RgNC10LTRi9C00YPRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1IGFueVRoaW5nLCDQtNC70Y8g0LrQvtGA0YDQtdC60YLQvdC+0Lkg0YDQsNCx0L7RgtGLINC40YHQv9C+0LvRjNC30YPQtdC8IGxhc3RBbnlUaGluZ1xuXG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGxhdWVyc0NvdW50KSxcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBjZWxsSW5kZXgpID0+XG4gICAgICAgICAgY2VsbEluZGV4ID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsLFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjZWxscyxcbiAgICBjdXJyZW50TW92ZSxcbiAgICBuZXh0TW92ZSxcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXG4gICAgd2lubmVyU2VxdWVuY2UsXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJjb21wdXRlV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJ1c2VHYW1lU3RhdGUiLCJwbGF1ZXJzQ291bnQiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiWkVSTyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5uZXJTZXF1ZW5jZSIsImwiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiLCJjZWxsSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});