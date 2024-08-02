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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\n\n\n\nfunction GameField(param) {\n    let { className, cells, currentMove, nextMove, handleCellClick, winnerSequence } = param;\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameInfoLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.inclu,\n                        onClick: ()=>{\n                            handleCellClick(index);\n                        },\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 24\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = GameField;\nfunction GameInfoLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white pt-5 pb-7 px-8 rounded-2xl shadow-lg\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameInfoLayout;\nfunction GameCell(param) {\n    let { children, onClick, isWinner } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"border border-slate-200 -ml-px -mt-px flex items-center justify-center\", isWinner !== null && isWinner !== void 0 ? isWinner : \"bg-green-300\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameCell;\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tigh\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-field.jsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameInfoLayout\");\n$RefreshReg$(_c2, \"GameCell\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QjtBQUNzQjtBQUNIO0FBRXBDLFNBQVNHLFVBQVUsS0FPekI7UUFQeUIsRUFDeEJDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsZUFBZSxFQUNmQyxjQUFjLEVBQ2YsR0FQeUI7SUFReEIsTUFBTUMsd0JBQ0o7OzBCQUNFLDhEQUFDVCxzREFBUUE7Z0JBQUNVLE1BQUs7Z0JBQUtDLFNBQVE7MEJBQVU7Ozs7OzswQkFHdEMsOERBQUNYLHNEQUFRQTtnQkFBQ1UsTUFBSztnQkFBS0MsU0FBUTswQkFBVTs7Ozs7Ozs7SUFNMUMscUJBQ0UsOERBQUNDO1FBQWVULFdBQVdBOzswQkFDekIsOERBQUNVO2dCQUNDSixTQUFTQTtnQkFDVEosYUFBYUE7Z0JBQ2JDLFVBQVVBOzs7Ozs7MEJBRVosOERBQUNROzBCQUNFVixNQUFNVyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ2xCLDhEQUFDQzt3QkFFQ0MsUUFBUSxFQUFFWCwyQkFBQUEscUNBQUFBLGVBQWdCWSxLQUFLO3dCQUMvQkMsU0FBUzs0QkFDUGQsZ0JBQWdCVTt3QkFDbEI7a0NBRUNELHdCQUFVLDhEQUFDZixvREFBVUE7NEJBQUNlLFFBQVFBOzRCQUFRYixXQUFVOzs7Ozs7dUJBTjVDYzs7Ozs7Ozs7Ozs7Ozs7OztBQVlqQjtLQXpDZ0JmO0FBMkNoQixTQUFTVSxlQUFlLEtBQXVCO1FBQXZCLEVBQUVVLFFBQVEsRUFBRW5CLFNBQVMsRUFBRSxHQUF2QjtJQUN0QixxQkFDRSw4REFBQ29CO1FBQ0NwQixXQUFXSixnREFBSUEsQ0FDYkksV0FDQTtrQkFHRG1COzs7Ozs7QUFHUDtNQVhTVjtBQWFULFNBQVNNLFNBQVMsS0FBK0I7UUFBL0IsRUFBRUksUUFBUSxFQUFFRCxPQUFPLEVBQUVGLFFBQVEsRUFBRSxHQUEvQjtJQUNoQixxQkFDRSw4REFBQ0s7UUFDQ0gsU0FBU0E7UUFDVGxCLFdBQVdKLGdEQUFJQSxDQUNiLDBFQUEwRW9CLHFCQUFBQSxzQkFBQUEsV0FBWTtrQkFHdkZHOzs7Ozs7QUFHUDtNQVhTSjtBQWFULFNBQVNMLGFBQWEsS0FBa0M7UUFBbEMsRUFBRUosT0FBTyxFQUFFSixXQUFXLEVBQUVDLFFBQVEsRUFBRSxHQUFsQztJQUNwQixxQkFDRSw4REFBQ2lCO1FBQUlwQixXQUFVOzswQkFDYiw4REFBQ29CO2dCQUFJcEIsV0FBVTs7a0NBQ2IsOERBQUNvQjt3QkFBSXBCLFdBQVU7OzRCQUErQzswQ0FDdkQsOERBQUNGLG9EQUFVQTtnQ0FBQ2UsUUFBUVg7Z0NBQWFGLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFbEQsOERBQUNvQjt3QkFBSXBCLFdBQVU7OzRCQUErRDswQ0FDakUsOERBQUNGLG9EQUFVQTtnQ0FBQ2UsUUFBUVY7Z0NBQVVILFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUd0RE07Ozs7Ozs7QUFHUDtNQWRTSTtBQWdCVCxTQUFTQyxTQUFTLEtBQVk7UUFBWixFQUFFUSxRQUFRLEVBQUUsR0FBWjtJQUNoQixxQkFDRSw4REFBQ0M7UUFBSXBCLFdBQVU7a0JBQ1ptQjs7Ozs7O0FBR1A7TUFOU1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL3Vpa2l0L3VpLWJ1dHRvblwiO1xuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoe1xuICBjbGFzc05hbWUsXG4gIGNlbGxzLFxuICBjdXJyZW50TW92ZSxcbiAgbmV4dE1vdmUsXG4gIGhhbmRsZUNlbGxDbGljayxcbiAgd2lubmVyU2VxdWVuY2UsXG59KSB7XG4gIGNvbnN0IGFjdGlvbnMgPSAoXG4gICAgPD5cbiAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICDQndC40YfRjNGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgINCh0LTQsNGC0YzRgdGPXG4gICAgICA8L1VpQnV0dG9uPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdhbWVJbmZvTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxHYW1lTW92ZUluZm9cbiAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cbiAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxuICAgICAgICBuZXh0TW92ZT17bmV4dE1vdmV9XG4gICAgICAvPlxuICAgICAgPEdhbWVHcmlkPlxuICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEdhbWVDZWxsXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgaXNXaW5uZXI9e3dpbm5lclNlcXVlbmNlPy5pbmNsdX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlQ2VsbENsaWNrKGluZGV4KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N5bWJvbCAmJiA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+fVxuICAgICAgICAgIDwvR2FtZUNlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9HYW1lR3JpZD5cbiAgICA8L0dhbWVJbmZvTGF5b3V0PlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lSW5mb0xheW91dCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBcImJnLXdoaXRlIHB0LTUgcGItNyBweC04IHJvdW5kZWQtMnhsIHNoYWRvdy1sZ1wiLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVDZWxsKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGlzV2lubmVyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBcImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiwgaXNXaW5uZXIgPz8gXCJiZy1ncmVlbi0zMDBcIlxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7IGFjdGlvbnMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2hcIj5cbiAgICAgICAgICDQpdC+0LQ6IDxHYW1lU3ltYm9sIHN5bWJvbD17Y3VycmVudE1vdmV9IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS00MDBcIj5cbiAgICAgICAgICDQodC70LXQtNGD0Y7RidC40Lk6IDxHYW1lU3ltYm9sIHN5bWJvbD17bmV4dE1vdmV9IGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2FjdGlvbnN9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVHcmlkKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJVaUJ1dHRvbiIsIkdhbWVTeW1ib2wiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJ3aW5uZXJTZXF1ZW5jZSIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVJbmZvTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiR2FtZUdyaWQiLCJtYXAiLCJzeW1ib2wiLCJpbmRleCIsIkdhbWVDZWxsIiwiaXNXaW5uZXIiLCJpbmNsdSIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImRpdiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});