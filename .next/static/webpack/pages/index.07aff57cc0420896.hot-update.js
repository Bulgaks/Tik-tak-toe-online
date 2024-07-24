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

/***/ "./components/game/game-field.jsx":
/*!****************************************!*\
  !*** ./components/game/game-field.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GAME_SYMBOLS = {\n    ZREO: \"zreo\",\n    CROSS: \"cross\",\n    TRINGLE: \"tringle\"\n};\nconst cells = new Array(19 * 19).fill(null);\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>new Array(19 * 19).fill(null));\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameInfoLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, index, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"k5q54p6sLIxb/WVgBHyeiQXmYDI=\");\n_c = GameField;\nfunction GameInfoLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white pt-5 pb-7 px-8 rounded-2xl shadow-lg\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameInfoLayout;\nfunction GameCell(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\"\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameCell;\nfunction GameMoveInfo(param) {\n    let { actions, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tigh\",\n                        children: [\n                            \"Ход:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameInfoLayout\");\n$RefreshReg$(_c2, \"GameCell\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDcUI7QUFDRTtBQUNEO0FBQ2I7QUFFakMsTUFBTUssZUFBZTtJQUNuQkMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLFNBQVM7QUFFWDtBQUVBLE1BQU1DLFFBQVEsSUFBSUMsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztBQUUvQixTQUFTQyxVQUFVLEtBQWE7UUFBYixFQUFFQyxTQUFTLEVBQUUsR0FBYjs7SUFDeEIsTUFBTSxDQUFDSixPQUFPSyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDLElBQU0sSUFBSU0sTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztJQUNqRSxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBO0lBRTlDLE1BQU1hLHdCQUNKOzswQkFDRSw4REFBQ2Qsc0RBQVFBO2dCQUFDZSxNQUFLO2dCQUFLQyxTQUFROzBCQUFVOzs7Ozs7MEJBR3RDLDhEQUFDaEIsc0RBQVFBO2dCQUFDZSxNQUFLO2dCQUFLQyxTQUFROzBCQUFVOzs7Ozs7OztJQU0xQyxxQkFDRSw4REFBQ0M7UUFBZVAsV0FBV0E7OzBCQUN6Qiw4REFBQ1E7Z0JBQWFKLFNBQVNBOzs7Ozs7MEJBQ3ZCLDhEQUFDSzswQkFDRWIsTUFBTWMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLHNCQUNiLDhEQUFDQyxjQUFjRDs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQXpCZ0JiO0tBQUFBO0FBMkJoQixTQUFTUSxlQUFlLEtBQXVCO1FBQXZCLEVBQUVPLFFBQVEsRUFBRWQsU0FBUyxFQUFFLEdBQXZCO0lBQ3RCLHFCQUNFLDhEQUFDZTtRQUNDZixXQUFXYixnREFBSUEsQ0FDYmEsV0FDQTtrQkFHRGM7Ozs7OztBQUdQO01BWFNQO0FBYVQsU0FBU00sU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7SUFDaEIscUJBQ0UsOERBQUNFO1FBQU9oQixXQUFVOzs7Ozs7QUFFdEI7TUFKU2E7QUFNVCxTQUFTTCxhQUFhLEtBQXNCO1FBQXRCLEVBQUVKLE9BQU8sRUFBRUosU0FBUyxFQUFFLEdBQXRCO0lBQ3BCLHFCQUNFLDhEQUFDZTtRQUFJZixXQUFVOzswQkFDYiw4REFBQ2U7Z0JBQUlmLFdBQVU7O2tDQUNiLDhEQUFDZTt3QkFBSWYsV0FBVTs7NEJBQStDOzBDQUU1RCw4REFBQ1osc0RBQVFBO2dDQUFDWSxXQUFVOzs7Ozs7Ozs7Ozs7a0NBRXRCLDhEQUFDZTt3QkFBSWYsV0FBVTs7NEJBQStEOzBDQUU1RSw4REFBQ1gsd0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztZQUdiZTs7Ozs7OztBQUdQO01BaEJTSTtBQWtCVCxTQUFTQyxTQUFTLEtBQVk7UUFBWixFQUFFSyxRQUFRLEVBQUUsR0FBWjtJQUNoQixxQkFDRSw4REFBQ0M7UUFBSWYsV0FBVTtrQkFDWmM7Ozs7OztBQUdQO01BTlNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gXCIuL2ljb25zL3plcm8taWNvblwiO1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSBcIi4vaWNvbnMvY3Jvc3MtaWNvblwiO1xuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vdWlraXQvdWktYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBHQU1FX1NZTUJPTFMgPSB7XG4gIFpSRU86IFwienJlb1wiLFxuICBDUk9TUzogXCJjcm9zc1wiLFxuICBUUklOR0xFOiBcInRyaW5nbGVcIixcbiAgXG59XG5cbmNvbnN0IGNlbGxzID0gbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoeyBjbGFzc05hbWUgfSkge1xuICBjb25zdCBbY2VsbHMsIHNldENlbGxzXSA9IHVzZVN0YXRlKCgpID0+IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpKTtcbiAgY29uc3QgW2N1cnJlbnRNb3ZlLCBzZXRDdXJyZW50TW92ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGFjdGlvbnMgPSAoXG4gICAgPD5cbiAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICDQndC40YfRjNGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgINCh0LTQsNGC0YzRgdGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdhbWVJbmZvTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxHYW1lTW92ZUluZm8gYWN0aW9ucz17YWN0aW9uc30gLz5cbiAgICAgIDxHYW1lR3JpZD5cbiAgICAgICAge2NlbGxzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICA8R2FtZUNlbGwga2V5PXtpbmRleH0+PC9HYW1lQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dhbWVHcmlkPlxuICAgIDwvR2FtZUluZm9MYXlvdXQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVJbmZvTGF5b3V0KHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIFwiYmctd2hpdGUgcHQtNSBwYi03IHB4LTggcm91bmRlZC0yeGwgc2hhZG93LWxnXCIsXG4gICAgICApfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZUNlbGwoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCAtbWwtcHggLW10LXB4IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+PC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7IGFjdGlvbnMsIGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2hcIj5cbiAgICAgICAgICDQpdC+0LQ6XG4gICAgICAgICAgPFplcm9JY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICDQodC70LXQtNGD0Y7RidC40Lk6XG4gICAgICAgICAgPENyb3NzSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2FjdGlvbnN9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVHcmlkKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJaZXJvSWNvbiIsIkNyb3NzSWNvbiIsIlVpQnV0dG9uIiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJaUkVPIiwiQ1JPU1MiLCJUUklOR0xFIiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJzZXRDZWxscyIsImN1cnJlbnRNb3ZlIiwic2V0Q3VycmVudE1vdmUiLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lSW5mb0xheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVHcmlkIiwibWFwIiwiXyIsImluZGV4IiwiR2FtZUNlbGwiLCJjaGlsZHJlbiIsImRpdiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});