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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_game_game_field_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game/game-field.jsx */ \"./components/game/game-field.jsx\");\n/* harmony import */ var _components_game_game_info_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/game/game-info.jsx */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _components_game_game_title_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game/game-title.jsx */ \"./components/game/game-title.jsx\");\n/* harmony import */ var _components_header_header_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header/header.jsx */ \"./components/header/header.jsx\");\n/* harmony import */ var _components_game_use_game_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/game/use-game-state.js */ \"./components/game/use-game-state.js\");\n/* harmony import */ var _components_game_game_symbol_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/game/game-symbol.jsx */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/uikit/ui-modal.jsx */ \"./components/uikit/ui-modal.jsx\");\n/* harmony import */ var _components_uikit_ui_button_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/uikit/ui-button.jsx */ \"./components/uikit/ui-button.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const { cells, currentMove, handleCellClick, nextMove, winnerSequence, handlePlayerTimeOver, winnerSymbol } = (0,_components_game_use_game_state_js__WEBPACK_IMPORTED_MODULE_6__.useGameState)(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_title_jsx__WEBPACK_IMPORTED_MODULE_4__.GameTitle, {\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_info_jsx__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {\n                        className: \"mt-4\",\n                        playersCount: playersCount,\n                        currentMove: currentMove,\n                        isWinner: !!winnerSymbol,\n                        onPlayerTimeOver: handlePlayerTimeOver\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    winnerSymbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_symbol_jsx__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                            classname: \"my-4\",\n                            symbol: winnerSymbol\n                        }, void 0, false, {\n                            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__.UiModal, {\n                        width: \"md\",\n                        isOpen: winnerSymbol,\n                        onClose: ()=>console.log(\"close\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__.UiModal.Header, {\n                                children: \"Игра завершена\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__.UiModal.Body, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm\",\n                                    children: [\n                                        \"Победитель: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-teal-600\",\n                                            children: \"Bulgakov\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 27\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_modal_jsx__WEBPACK_IMPORTED_MODULE_8__.UiModal.Footer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_button_jsx__WEBPACK_IMPORTED_MODULE_9__.UiButton, {\n                                        size: \"md\",\n                                        variant: \"outline\",\n                                        children: \"Вернуться\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_uikit_ui_button_jsx__WEBPACK_IMPORTED_MODULE_9__.UiButton, {\n                                        size: \"md\",\n                                        variant: \"primary\",\n                                        children: \"Играть снова\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_field_jsx__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        className: \"mt-6\",\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        winnerSymbol: winnerSymbol\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"uD0d40fEX64/HE6RgiFVE6k/U18=\", false, function() {\n    return [\n        _components_game_use_game_state_js__WEBPACK_IMPORTED_MODULE_6__.useGameState\n    ];\n});\n_c = HomePage;\nfunction HomePageLayout(param) {\n    let {} = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"pt-6 mx-auto w-max\"\n        }, void 0, false, {\n            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/pages/index.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_c1 = HomePageLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"HomePageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQzZCO0FBQ0Y7QUFDRTtBQUNUO0FBQ2U7QUFDSjtBQUNMO0FBQ0U7QUFFOUMsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVoQyxNQUFNLEVBQ0pXLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxlQUFlLEVBQ2ZDLFFBQVEsRUFDUkMsY0FBYyxFQUNkQyxvQkFBb0IsRUFDcEJDLFlBQVksRUFDYixHQUFHWixnRkFBWUEsQ0FBQ0s7SUFFakIscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDZixxRUFBTUE7Ozs7OzBCQUNQLDhEQUFDZ0I7Z0JBQUtELFdBQVU7O2tDQUNkLDhEQUFDaEIsc0VBQVNBO3dCQUFDTyxjQUFjQTs7Ozs7O2tDQUN6Qiw4REFBQ1Isb0VBQVFBO3dCQUNQaUIsV0FBVTt3QkFDVlQsY0FBY0E7d0JBQ2RFLGFBQWFBO3dCQUNiUyxVQUFVLENBQUMsQ0FBQ0o7d0JBQ1pLLGtCQUFrQk47Ozs7OztvQkFFbkJDLDhCQUNDLDhEQUFDQztrQ0FDQyw0RUFBQ1osd0VBQVVBOzRCQUFDaUIsV0FBVTs0QkFBT0MsUUFBUVA7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ1YsbUVBQU9BO3dCQUFDa0IsT0FBTTt3QkFBS0MsUUFBUVQ7d0JBQWNVLFNBQVMsSUFBTUMsUUFBUUMsR0FBRyxDQUFDOzswQ0FDbkUsOERBQUN0QixtRUFBT0EsQ0FBQ0gsTUFBTTswQ0FBQzs7Ozs7OzBDQUNoQiw4REFBQ0csbUVBQU9BLENBQUN1QixJQUFJOzBDQUNYLDRFQUFDWjtvQ0FBSUMsV0FBVTs7d0NBQVU7c0RBQ1gsOERBQUNZOzRDQUFLWixXQUFVO3NEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2hELDhEQUFDWixtRUFBT0EsQ0FBQ3lCLE1BQU07O2tEQUNiLDhEQUFDeEIscUVBQVFBO3dDQUFDeUIsTUFBSzt3Q0FBS0MsU0FBUTtrREFBVTs7Ozs7O2tEQUN0Qyw4REFBQzFCLHFFQUFRQTt3Q0FBQ3lCLE1BQUs7d0NBQUtDLFNBQVE7a0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHMUMsOERBQUNqQyxzRUFBU0E7d0JBQ1JrQixXQUFVO3dCQUNWUixPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JFLFVBQVVBO3dCQUNWRCxpQkFBaUJBO3dCQUNqQkUsZ0JBQWdCQTt3QkFDaEJFLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7R0F0RHdCUjs7UUFXbEJKLDRFQUFZQTs7O0tBWE1JO0FBd0R4QixTQUFTMEIsZUFBZSxLQUFFO1FBQUYsRUFBRSxHQUFGO0lBQ3RCLHFCQUVFLDhEQUFDakI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0QsV0FBVTs7Ozs7Ozs7Ozs7QUFLdEI7TUFUU2dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHYW1lRmllbGQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4XCI7XG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeFwiO1xuaW1wb3J0IHsgR2FtZVRpdGxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLXRpdGxlLmpzeFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzeFwiO1xuaW1wb3J0IHsgdXNlR2FtZVN0YXRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qc1wiO1xuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1zeW1ib2wuanN4XCI7XG5pbXBvcnQgeyBVaU1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWlraXQvdWktbW9kYWwuanN4XCI7XG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Vpa2l0L3VpLWJ1dHRvbi5qc3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtwbGF5ZXJzQ291bnRdID0gdXNlU3RhdGUoNCk7XG5cbiAgY29uc3Qge1xuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRNb3ZlLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgICBuZXh0TW92ZSxcbiAgICB3aW5uZXJTZXF1ZW5jZSxcbiAgICBoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcbiAgICB3aW5uZXJTeW1ib2wsXG4gIH0gPSB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAgbWluLWgtc2NyZWVuXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJwdC02IG14LWF1dG8gdy1tYXhcIj5cbiAgICAgICAgPEdhbWVUaXRsZSBwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH0gLz5cbiAgICAgICAgPEdhbWVJbmZvXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXG4gICAgICAgICAgcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9XG4gICAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxuICAgICAgICAgIGlzV2lubmVyPXshIXdpbm5lclN5bWJvbH1cbiAgICAgICAgICBvblBsYXllclRpbWVPdmVyPXtoYW5kbGVQbGF5ZXJUaW1lT3Zlcn1cbiAgICAgICAgLz5cbiAgICAgICAge3dpbm5lclN5bWJvbCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxHYW1lU3ltYm9sIGNsYXNzbmFtZT1cIm15LTRcIiBzeW1ib2w9e3dpbm5lclN5bWJvbH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPFVpTW9kYWwgd2lkdGg9XCJtZFwiIGlzT3Blbj17d2lubmVyU3ltYm9sfSBvbkNsb3NlPXsoKSA9PiBjb25zb2xlLmxvZygnY2xvc2UnKX0+XG4gICAgICAgICAgPFVpTW9kYWwuSGVhZGVyPtCY0LPRgNCwINC30LDQstC10YDRiNC10L3QsDwvVWlNb2RhbC5IZWFkZXI+XG4gICAgICAgICAgPFVpTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICDQn9C+0LHQtdC00LjRgtC10LvRjDogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC10ZWFsLTYwMFwiPkJ1bGdha292PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9VaU1vZGFsLkJvZHk+XG4gICAgICAgICAgPFVpTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+0JLQtdGA0L3Rg9GC0YzRgdGPPC9VaUJ1dHRvbj5cbiAgICAgICAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPtCY0LPRgNCw0YLRjCDRgdC90L7QstCwPC9VaUJ1dHRvbj5cbiAgICAgICAgICA8L1VpTW9kYWwuRm9vdGVyPlxuICAgICAgICA8L1VpTW9kYWw+XG4gICAgICAgIDxHYW1lRmllbGRcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC02XCJcbiAgICAgICAgICBjZWxscz17Y2VsbHN9XG4gICAgICAgICAgY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfVxuICAgICAgICAgIG5leHRNb3ZlPXtuZXh0TW92ZX1cbiAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cbiAgICAgICAgICB3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XG4gICAgICAgICAgd2lubmVyU3ltYm9sPXt3aW5uZXJTeW1ib2x9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEhvbWVQYWdlTGF5b3V0KHt9KSB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwIG1pbi1oLXNjcmVlblwiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHQtNiBteC1hdXRvIHctbWF4XCI+XG5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdhbWVGaWVsZCIsIkdhbWVJbmZvIiwiR2FtZVRpdGxlIiwiSGVhZGVyIiwidXNlR2FtZVN0YXRlIiwiR2FtZVN5bWJvbCIsIlVpTW9kYWwiLCJVaUJ1dHRvbiIsIkhvbWVQYWdlIiwicGxheWVyc0NvdW50IiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIm5leHRNb3ZlIiwid2lubmVyU2VxdWVuY2UiLCJoYW5kbGVQbGF5ZXJUaW1lT3ZlciIsIndpbm5lclN5bWJvbCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJpc1dpbm5lciIsIm9uUGxheWVyVGltZU92ZXIiLCJjbGFzc25hbWUiLCJzeW1ib2wiLCJ3aWR0aCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJjb25zb2xlIiwibG9nIiwiQm9keSIsInNwYW4iLCJGb290ZXIiLCJzaXplIiwidmFyaWFudCIsIkhvbWVQYWdlTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});