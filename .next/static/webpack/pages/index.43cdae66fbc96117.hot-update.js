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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_game_game_field_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game/game-field.jsx */ \"./components/game/game-field.jsx\");\n/* harmony import */ var _components_game_game_info_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/game/game-info.jsx */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _components_game_game_title_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game/game-title.jsx */ \"./components/game/game-title.jsx\");\n/* harmony import */ var _components_header_header_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header/header.jsx */ \"./components/header/header.jsx\");\n/* harmony import */ var _components_game_use_game_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/game/use-game-state.js */ \"./components/game/use-game-state.js\");\n/* harmony import */ var _components_game_game_symbol_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/game/game-symbol.jsx */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/uikit/ui-modal.jsx */ \"./components/uikit/ui-modal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const { cells, currentMove, handleCellClick, nextMove, winnerSequence, handlePlayerTimeOver, winnerSymbol } = (0,_components_game_use_game_state_js__WEBPACK_IMPORTED_MODULE_6__.useGameState)(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_title_jsx__WEBPACK_IMPORTED_MODULE_4__.GameTitle, {\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_info_jsx__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {\n                        className: \"mt-4\",\n                        playersCount: playersCount,\n                        currentMove: currentMove,\n                        isWinner: !!winnerSymbol,\n                        onPlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    winnerSymbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_symbol_jsx__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                            classname: \"my-4\",\n                            symbol: winnerSymbol\n                        }, void 0, false, {\n                            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 16\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__.UiModal, {\n                        width: \"full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_field_jsx__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        className: \"mt-6\",\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        winnerSymbol: winnerSymbol\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"LxFLYDQL0JzeCnYGnqDLYaSQekg=\", false, function() {\n    return [\n        _components_game_use_game_state_js__WEBPACK_IMPORTED_MODULE_6__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDNkI7QUFDRjtBQUNFO0FBQ1Q7QUFDZTtBQUNKO0FBQ0w7QUFFNUMsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVoQyxNQUFNLEVBQUVVLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFQyxvQkFBb0IsRUFBRUMsWUFBWSxFQUFFLEdBQ3pHWCxnRkFBWUEsQ0FBQ0k7SUFFZixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNkLHFFQUFNQTs7Ozs7MEJBQ1AsOERBQUNlO2dCQUFLRCxXQUFVOztrQ0FDZCw4REFBQ2Ysc0VBQVNBO3dCQUFDTSxjQUFjQTs7Ozs7O2tDQUN6Qiw4REFBQ1Asb0VBQVFBO3dCQUNQZ0IsV0FBVTt3QkFDVlQsY0FBY0E7d0JBQ2RFLGFBQWFBO3dCQUNiUyxVQUFVLENBQUMsQ0FBQ0o7d0JBQ1pLLGtCQUFrQk47Ozs7OztvQkFFbkJDLDhCQUNDLDhEQUFDQztrQ0FBSSw0RUFBQ1gsd0VBQVVBOzRCQUFDZ0IsV0FBVTs0QkFBT0MsUUFBUVA7Ozs7Ozs7Ozs7O2tDQUU1Qyw4REFBQ1QsbUVBQU9BO3dCQUFDaUIsT0FBTTs7Ozs7O2tDQUNmLDhEQUFDdkIsc0VBQVNBO3dCQUNSaUIsV0FBVTt3QkFDVlIsT0FBT0E7d0JBQ1BDLGFBQWFBO3dCQUNiRSxVQUFVQTt3QkFDVkQsaUJBQWlCQTt3QkFDakJFLGdCQUFnQkE7d0JBQ2hCRSxjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0dBbEN3QlI7O1FBSXBCSCw0RUFBWUE7OztLQUpRRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2FtZUZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeFwiO1xuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lL2dhbWUtaW5mby5qc3hcIjtcbmltcG9ydCB7IEdhbWVUaXRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUvZ2FtZS10aXRsZS5qc3hcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qc3hcIjtcbmltcG9ydCB7IHVzZUdhbWVTdGF0ZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanNcIjtcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lL2dhbWUtc3ltYm9sLmpzeFwiO1xuaW1wb3J0IHsgVWlNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Vpa2l0L3VpLW1vZGFsLmpzeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW3BsYXllcnNDb3VudF0gPSB1c2VTdGF0ZSg0KTtcblxuICBjb25zdCB7IGNlbGxzLCBjdXJyZW50TW92ZSwgaGFuZGxlQ2VsbENsaWNrLCBuZXh0TW92ZSwgd2lubmVyU2VxdWVuY2UsIGhhbmRsZVBsYXllclRpbWVPdmVyLCB3aW5uZXJTeW1ib2wgfSA9XG4gICAgdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwIG1pbi1oLXNjcmVlblwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHQtNiBteC1hdXRvIHctbWF4XCI+XG4gICAgICAgIDxHYW1lVGl0bGUgcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9IC8+XG4gICAgICAgIDxHYW1lSW5mb1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxuICAgICAgICAgIHBsYXllcnNDb3VudD17cGxheWVyc0NvdW50fVxuICAgICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cbiAgICAgICAgICBpc1dpbm5lcj17ISF3aW5uZXJTeW1ib2x9XG4gICAgICAgICAgb25QbGF5ZXJUaW1lT3Zlcj17aGFuZGxlUGxheWVyVGltZU92ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIHt3aW5uZXJTeW1ib2wgJiYgKFxuICAgICAgICAgIDxkaXY+PEdhbWVTeW1ib2wgY2xhc3NuYW1lPVwibXktNFwiIHN5bWJvbD17d2lubmVyU3ltYm9sfSAvPjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8VWlNb2RhbCB3aWR0aD1cImZ1bGxcIi8+XG4gICAgICAgIDxHYW1lRmllbGRcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC02XCJcbiAgICAgICAgICBjZWxscz17Y2VsbHN9XG4gICAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxuICAgICAgICAgIG5leHRNb3ZlPXtuZXh0TW92ZX1cbiAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cbiAgICAgICAgICB3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XG4gICAgICAgICAgd2lubmVyU3ltYm9sPXt3aW5uZXJTeW1ib2x9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHYW1lRmllbGQiLCJHYW1lSW5mbyIsIkdhbWVUaXRsZSIsIkhlYWRlciIsInVzZUdhbWVTdGF0ZSIsIkdhbWVTeW1ib2wiLCJVaU1vZGFsIiwiSG9tZVBhZ2UiLCJwbGF5ZXJzQ291bnQiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwibmV4dE1vdmUiLCJ3aW5uZXJTZXF1ZW5jZSIsImhhbmRsZVBsYXllclRpbWVPdmVyIiwid2lubmVyU3ltYm9sIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImlzV2lubmVyIiwib25QbGF5ZXJUaW1lT3ZlciIsImNsYXNzbmFtZSIsInN5bWJvbCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});