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

/***/ "./components/game/game-info.jsx":
/*!***************************************!*\
  !*** ./components/game/game-info.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _porofile_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../porofile/profile */ \"./components/porofile/profile.jsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/avatar-1.png */ \"./components/game/images/avatar-1.png\");\n/* harmony import */ var _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar-2.png */ \"./components/game/images/avatar-2.png\");\n/* harmony import */ var _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar-3.png */ \"./components/game/images/avatar-3.png\");\n/* harmony import */ var _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar-4.png */ \"./components/game/images/avatar-4.png\");\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Bulgaks\",\n        rating: 1230,\n        avatar: _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: 830,\n        avatar: _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: 1500,\n        avatar: _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRINGLE\n    },\n    {\n        id: 4,\n        name: \"Lorem\",\n        rating: 560,\n        avatar: _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(className, \"bg-white py-4 px-8 rounded-2xl shadow-lg grid grid-cols-2 gap-3\"),\n        children: players.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player\n            }, player.id, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-info.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-info.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"flex gap-3 items-center\", isRight && \"order-3\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_porofile_profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"w-[180px]\",\n                        name: playerInfo.name,\n                        avatar: playerInfo.avatar,\n                        rating: playerInfo.rating\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-info.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white w-5 h-5 rounded-full shadow absolute -left-1 -top-1 p-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-info.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-info.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-info.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight)\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-info.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-slate-900 text-lg font-semibold\",\n                children: \" 01:08\"\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-info.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/game/game-info.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDbEI7QUFDbUI7QUFDQTtBQUVJO0FBQ0E7QUFDQTtBQUNBO0FBRS9DLE1BQU1RLFVBQVU7SUFDZDtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRUiw0REFBVUE7UUFDbEJTLFFBQVFWLG9EQUFZQSxDQUFDVyxJQUFJO0lBQzNCO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUVAsNERBQVVBO1FBQ2xCUSxRQUFRVixvREFBWUEsQ0FBQ1ksS0FBSztJQUM1QjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFOLDREQUFVQTtRQUNsQk8sUUFBUVYsb0RBQVlBLENBQUNhLE9BQU87SUFDOUI7SUFDQTtRQUNFUCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRTCw0REFBVUE7UUFDbEJNLFFBQVFWLG9EQUFZQSxDQUFDYyxNQUFNO0lBQzdCO0NBQ0Q7QUFFTSxTQUFTQyxTQUFTLEtBQWE7UUFBYixFQUFFQyxTQUFTLEVBQUUsR0FBYjtJQUN2QixxQkFDRSw4REFBQ0M7UUFDQ0QsV0FBV2xCLGdEQUFJQSxDQUNia0IsV0FDQTtrQkFHRFgsUUFBUWEsR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDQztnQkFBMkJDLFlBQVlGO2VBQXZCQSxPQUFPYixFQUFFOzs7Ozs7Ozs7O0FBSWxDO0tBYmdCUztBQWVoQixTQUFTSyxXQUFXLEtBQXVCO1FBQXZCLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFLEdBQXZCO0lBQ2xCLHFCQUNFLDhEQUFDTDtRQUFJRCxXQUFXbEIsZ0RBQUlBLENBQUMsMkJBQTJCd0IsV0FBVzs7MEJBQ3pELDhEQUFDTDtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNuQix5REFBT0E7d0JBQ05tQixXQUFVO3dCQUNWVCxNQUFNYyxXQUFXZCxJQUFJO3dCQUNyQkUsUUFBUVksV0FBV1osTUFBTTt3QkFDekJELFFBQVFhLFdBQVdiLE1BQU07Ozs7OztrQ0FFM0IsOERBQUNTO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDakIsb0RBQVVBOzRCQUFDVyxRQUFRVyxXQUFXWCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHekMsOERBQUNPO2dCQUFJRCxXQUFXbEIsZ0RBQUlBLENBQUMseUJBQXlCd0I7Ozs7OzswQkFDOUMsOERBQUNMO2dCQUFJRCxXQUFVOzBCQUF1Qzs7Ozs7Ozs7Ozs7O0FBRzVEO01BbEJTSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeD9kMDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9wb3JvZmlsZS9wcm9maWxlXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IGF2YXRhclNyYzEgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci0xLnBuZ1wiO1xuaW1wb3J0IGF2YXRhclNyYzIgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci0yLnBuZ1wiO1xuaW1wb3J0IGF2YXRhclNyYzMgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci0zLnBuZ1wiO1xuaW1wb3J0IGF2YXRhclNyYzQgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci00LnBuZ1wiO1xuXG5jb25zdCBwbGF5ZXJzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJCdWxnYWtzXCIsXG4gICAgcmF0aW5nOiAxMjMwLFxuICAgIGF2YXRhcjogYXZhdGFyU3JjMSxcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5aRVJPLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCJWZXJlSW50ZWRpbmdsYXBvdHVyXCIsXG4gICAgcmF0aW5nOiA4MzAsXG4gICAgYXZhdGFyOiBhdmF0YXJTcmMyLFxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJMYXJhXCIsXG4gICAgcmF0aW5nOiAxNTAwLFxuICAgIGF2YXRhcjogYXZhdGFyU3JjMyxcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5UUklOR0xFLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogXCJMb3JlbVwiLFxuICAgIHJhdGluZzogNTYwLFxuICAgIGF2YXRhcjogYXZhdGFyU3JjNCxcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5TUVVBUkUsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUluZm8oeyBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBcImJnLXdoaXRlIHB5LTQgcHgtOCByb3VuZGVkLTJ4bCBzaGFkb3ctbGcgZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiLFxuICAgICAgKX1cbiAgICA+XG4gICAgICB7cGxheWVycy5tYXAoKHBsYXllcikgPT4gKFxuICAgICAgICA8UGxheWVySW5mbyBrZXk9e3BsYXllci5pZH0gcGxheWVySW5mbz17cGxheWVyfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBsYXllckluZm8oeyBwbGF5ZXJJbmZvLCBpc1JpZ2h0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChcImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0zXCIgKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxQcm9maWxlXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bMTgwcHhdXCJcbiAgICAgICAgICBuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9XG4gICAgICAgICAgYXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn1cbiAgICAgICAgICByYXRpbmc9e3BsYXllckluZm8ucmF0aW5nfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctNSBoLTUgcm91bmRlZC1mdWxsIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBwLTFcIj5cbiAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e3BsYXllckluZm8uc3ltYm9sfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJoLTYgdy1weCBiZy1zbGF0ZS0yMDBcIiwgaXNSaWdodCl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtOTAwIHRleHQtbGcgZm9udC1zZW1pYm9sZFwiPiAwMTowODwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJjbHN4IiwiR2FtZVN5bWJvbCIsIkdBTUVfU1lNQk9MUyIsImF2YXRhclNyYzEiLCJhdmF0YXJTcmMyIiwiYXZhdGFyU3JjMyIsImF2YXRhclNyYzQiLCJwbGF5ZXJzIiwiaWQiLCJuYW1lIiwicmF0aW5nIiwiYXZhdGFyIiwic3ltYm9sIiwiWkVSTyIsIkNST1NTIiwiVFJJTkdMRSIsIlNRVUFSRSIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwicGxheWVyIiwiUGxheWVySW5mbyIsInBsYXllckluZm8iLCJpc1JpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});