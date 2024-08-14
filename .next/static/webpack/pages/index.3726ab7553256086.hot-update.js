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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_game_game_field_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game/game-field.jsx */ \"./components/game/game-field.jsx\");\n/* harmony import */ var _components_game_game_info_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/game/game-info.jsx */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _components_game_game_title_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game/game-title.jsx */ \"./components/game/game-title.jsx\");\n/* harmony import */ var _components_header_header_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header/header.jsx */ \"./components/header/header.jsx\");\n/* harmony import */ var _components_game_use_game_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/game/use-game-state.js */ \"./components/game/use-game-state.js\");\n/* harmony import */ var _components_game_game_symbol_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/game/game-symbol.jsx */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/uikit/ui-modal.jsx */ \"./components/uikit/ui-modal.jsx\");\n/* harmony import */ var _components_uikit_ui_button_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/uikit/ui-button.jsx */ \"./components/uikit/ui-button.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const { cells, currentMove, handleCellClick, nextMove, winnerSequence, handlePlayerTimeOver, winnerSymbol } = (0,_components_game_use_game_state_js__WEBPACK_IMPORTED_MODULE_6__.useGameState)(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_title_jsx__WEBPACK_IMPORTED_MODULE_4__.GameTitle, {\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_info_jsx__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {\n                        className: \"mt-4\",\n                        playersCount: playersCount,\n                        currentMove: currentMove,\n                        isWinner: !!winnerSymbol,\n                        onPlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    winnerSymbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_symbol_jsx__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                            classname: \"my-4\",\n                            symbol: winnerSymbol\n                        }, void 0, false, {\n                            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__.UiModal, {\n                        width: \"md\",\n                        isOpen: winnerSymbol,\n                        onClose: ()=>console.log(\"close\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__.UiModal.Header, {\n                                children: \"Игра завершена\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__.UiModal.Body, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm\",\n                                    children: [\n                                        \"Победитель: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-teal-600\",\n                                            children: \"Bulgakov\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__.UiModal.Footer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_button_jsx__WEBPACK_IMPORTED_MODULE_9__.UiButton, {\n                                        size: \"md\",\n                                        variant: \"outline\",\n                                        children: \"Вернуться\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_button_jsx__WEBPACK_IMPORTED_MODULE_9__.UiButton, {\n                                        size: \"md\",\n                                        variant: \"primary\",\n                                        children: \"Играть снова\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_field_jsx__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        className: \"mt-6\",\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        winnerSymbol: winnerSymbol\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"uD0d40fEX64/HE6RgiFVE6k/U18=\", false, function() {\n    return [\n        _components_game_use_game_state_js__WEBPACK_IMPORTED_MODULE_6__.useGameState\n    ];\n});\n_c = HomePage;\nfunction HomePageLayout(param) {\n    let { header, chil } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"pt-6 mx-auto w-max\"\n        }, void 0, false, {\n            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_c1 = HomePageLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"HomePageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQzZCO0FBQ0Y7QUFDRTtBQUNUO0FBQ2U7QUFDSjtBQUNMO0FBQ0U7QUFFOUMsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVoQyxNQUFNLEVBQ0pXLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxlQUFlLEVBQ2ZDLFFBQVEsRUFDUkMsY0FBYyxFQUNkQyxvQkFBb0IsRUFDcEJDLFlBQVksRUFDYixHQUFHWixnRkFBWUEsQ0FBQ0s7SUFFakIscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDZixxRUFBTUE7Ozs7OzBCQUNQLDhEQUFDZ0I7Z0JBQUtELFdBQVU7O2tDQUNkLDhEQUFDaEIsc0VBQVNBO3dCQUFDTyxjQUFjQTs7Ozs7O2tDQUN6Qiw4REFBQ1Isb0VBQVFBO3dCQUNQaUIsV0FBVTt3QkFDVlQsY0FBY0E7d0JBQ2RFLGFBQWFBO3dCQUNiUyxVQUFVLENBQUMsQ0FBQ0o7d0JBQ1pLLGtCQUFrQk47Ozs7OztvQkFFbkJDLDhCQUNDLDhEQUFDQztrQ0FDQyw0RUFBQ1osd0VBQVVBOzRCQUFDaUIsV0FBVTs0QkFBT0MsUUFBUVA7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ1YsbUVBQU9BO3dCQUFDa0IsT0FBTTt3QkFBS0MsUUFBUVQ7d0JBQWNVLFNBQVMsSUFBTUMsUUFBUUMsR0FBRyxDQUFDOzswQ0FDbkUsOERBQUN0QixtRUFBT0EsQ0FBQ0gsTUFBTTswQ0FBQzs7Ozs7OzBDQUNoQiw4REFBQ0csbUVBQU9BLENBQUN1QixJQUFJOzBDQUNYLDRFQUFDWjtvQ0FBSUMsV0FBVTs7d0NBQVU7c0RBQ1gsOERBQUNZOzRDQUFLWixXQUFVO3NEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2hELDhEQUFDWixtRUFBT0EsQ0FBQ3lCLE1BQU07O2tEQUNiLDhEQUFDeEIscUVBQVFBO3dDQUFDeUIsTUFBSzt3Q0FBS0MsU0FBUTtrREFBVTs7Ozs7O2tEQUN0Qyw4REFBQzFCLHFFQUFRQTt3Q0FBQ3lCLE1BQUs7d0NBQUtDLFNBQVE7a0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHMUMsOERBQUNqQyxzRUFBU0E7d0JBQ1JrQixXQUFVO3dCQUNWUixPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JFLFVBQVVBO3dCQUNWRCxpQkFBaUJBO3dCQUNqQkUsZ0JBQWdCQTt3QkFDaEJFLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7R0F0RHdCUjs7UUFXbEJKLDRFQUFZQTs7O0tBWE1JO0FBd0R4QixTQUFTMEIsZUFBZSxLQUFjO1FBQWQsRUFBQ0MsTUFBTSxFQUFFQyxJQUFJLEVBQUMsR0FBZDtJQUN0QixxQkFFRSw4REFBQ25CO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUtELFdBQVU7Ozs7Ozs7Ozs7O0FBS3RCO01BVFNnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2FtZUZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeFwiO1xuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lL2dhbWUtaW5mby5qc3hcIjtcbmltcG9ydCB7IEdhbWVUaXRsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUvZ2FtZS10aXRsZS5qc3hcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qc3hcIjtcbmltcG9ydCB7IHVzZUdhbWVTdGF0ZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanNcIjtcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lL2dhbWUtc3ltYm9sLmpzeFwiO1xuaW1wb3J0IHsgVWlNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Vpa2l0L3VpLW1vZGFsLmpzeFwiO1xuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aWtpdC91aS1idXR0b24uanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbcGxheWVyc0NvdW50XSA9IHVzZVN0YXRlKDQpO1xuXG4gIGNvbnN0IHtcbiAgICBjZWxscyxcbiAgICBjdXJyZW50TW92ZSxcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXG4gICAgbmV4dE1vdmUsXG4gICAgd2lubmVyU2VxdWVuY2UsXG4gICAgaGFuZGxlUGxheWVyVGltZU92ZXIsXG4gICAgd2lubmVyU3ltYm9sLFxuICB9ID0gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwIG1pbi1oLXNjcmVlblwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHQtNiBteC1hdXRvIHctbWF4XCI+XG4gICAgICAgIDxHYW1lVGl0bGUgcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9IC8+XG4gICAgICAgIDxHYW1lSW5mb1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxuICAgICAgICAgIHBsYXllcnNDb3VudD17cGxheWVyc0NvdW50fVxuICAgICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cbiAgICAgICAgICBpc1dpbm5lcj17ISF3aW5uZXJTeW1ib2x9XG4gICAgICAgICAgb25QbGF5ZXJUaW1lT3Zlcj17aGFuZGxlUGxheWVyVGltZU92ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIHt3aW5uZXJTeW1ib2wgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8R2FtZVN5bWJvbCBjbGFzc25hbWU9XCJteS00XCIgc3ltYm9sPXt3aW5uZXJTeW1ib2x9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxVaU1vZGFsIHdpZHRoPVwibWRcIiBpc09wZW49e3dpbm5lclN5bWJvbH0gb25DbG9zZT17KCkgPT4gY29uc29sZS5sb2coJ2Nsb3NlJyl9PlxuICAgICAgICAgIDxVaU1vZGFsLkhlYWRlcj7QmNCz0YDQsCDQt9Cw0LLQtdGA0YjQtdC90LA8L1VpTW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxVaU1vZGFsLkJvZHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAg0J/QvtCx0LXQtNC40YLQtdC70Yw6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGVhbC02MDBcIj5CdWxnYWtvdjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVWlNb2RhbC5Cb2R5PlxuICAgICAgICAgIDxVaU1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwib3V0bGluZVwiPtCS0LXRgNC90YPRgtGM0YHRjzwvVWlCdXR0b24+XG4gICAgICAgICAgICA8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cInByaW1hcnlcIj7QmNCz0YDQsNGC0Ywg0YHQvdC+0LLQsDwvVWlCdXR0b24+XG4gICAgICAgICAgPC9VaU1vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9VaU1vZGFsPlxuICAgICAgICA8R2FtZUZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNlwiXG4gICAgICAgICAgY2VsbHM9e2NlbGxzfVxuICAgICAgICAgIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cbiAgICAgICAgICBuZXh0TW92ZT17bmV4dE1vdmV9XG4gICAgICAgICAgaGFuZGxlQ2VsbENsaWNrPXtoYW5kbGVDZWxsQ2xpY2t9XG4gICAgICAgICAgd2lubmVyU2VxdWVuY2U9e3dpbm5lclNlcXVlbmNlfVxuICAgICAgICAgIHdpbm5lclN5bWJvbD17d2lubmVyU3ltYm9sfVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBIb21lUGFnZUxheW91dCh7aGVhZGVyLCBjaGlsfSkge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS01MCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInB0LTYgbXgtYXV0byB3LW1heFwiPlxuXG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHYW1lRmllbGQiLCJHYW1lSW5mbyIsIkdhbWVUaXRsZSIsIkhlYWRlciIsInVzZUdhbWVTdGF0ZSIsIkdhbWVTeW1ib2wiLCJVaU1vZGFsIiwiVWlCdXR0b24iLCJIb21lUGFnZSIsInBsYXllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJuZXh0TW92ZSIsIndpbm5lclNlcXVlbmNlIiwiaGFuZGxlUGxheWVyVGltZU92ZXIiLCJ3aW5uZXJTeW1ib2wiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaXNXaW5uZXIiLCJvblBsYXllclRpbWVPdmVyIiwiY2xhc3NuYW1lIiwic3ltYm9sIiwid2lkdGgiLCJpc09wZW4iLCJvbkNsb3NlIiwiY29uc29sZSIsImxvZyIsIkJvZHkiLCJzcGFuIiwiRm9vdGVyIiwic2l6ZSIsInZhcmlhbnQiLCJIb21lUGFnZUxheW91dCIsImhlYWRlciIsImNoaWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});