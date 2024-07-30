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

/***/ "./components/porofile/profile.jsx":
/*!*****************************************!*\
  !*** ./components/porofile/profile.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatar.png */ \"./components/porofile/avatar.png\");\n\n\n\n\nfunction Profile(param) {\n    let { className, name, rating, avatar = _avatar_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"] } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(className, \"ml-auto flex items-center gap-2 text-start text-teal-600\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: avatar,\n                alt: \"avatar\",\n                width: 48,\n                height: 48\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/porofile/profile.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-lg leading-tight tr\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/porofile/profile.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-slate-400 text-xs leading-tight\",\n                        children: [\n                            \"Рейтинг: \",\n                            rating\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/porofile/profile.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/porofile/profile.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/porofile/profile.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvcm9maWxlL3Byb2ZpbGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1A7QUFDYTtBQUV0QixTQUFTRyxRQUFRLEtBQStDO1FBQS9DLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFNBQVNMLG1EQUFTLEVBQUUsR0FBL0M7SUFDOUIscUJBQ0UsOERBQUNNO1FBQ0NKLFdBQVdILGdEQUFJQSxDQUNiRyxXQUNBOzswQkFHRiw4REFBQ0osbURBQUtBO2dCQUFDUyxLQUFLRjtnQkFBUUcsS0FBSTtnQkFBU0MsT0FBTztnQkFBSUMsUUFBUTs7Ozs7OzBCQUNwRCw4REFBQ0o7O2tDQUNDLDhEQUFDQTt3QkFBSUosV0FBVTtrQ0FBNEJDOzs7Ozs7a0NBQzNDLDhEQUFDRzt3QkFBSUosV0FBVTs7NEJBQXVDOzRCQUMxQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7S0FqQndCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvcm9maWxlL3Byb2ZpbGUuanN4Pzc5NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IGF2YXRhclNyYyBmcm9tIFwiLi9hdmF0YXIucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoeyBjbGFzc05hbWUsIG5hbWUsIHJhdGluZywgYXZhdGFyID0gYXZhdGFyU3JjIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgXCJtbC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc3RhcnQgdGV4dC10ZWFsLTYwMFwiLFxuICAgICAgKX1cbiAgICA+XG4gICAgICA8SW1hZ2Ugc3JjPXthdmF0YXJ9IGFsdD1cImF2YXRhclwiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLXRpZ2h0IHRyXCI+e25hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC14cyBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAg0KDQtdC50YLQuNC90LM6IHtyYXRpbmd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJjbHN4IiwiYXZhdGFyU3JjIiwiUHJvZmlsZSIsImNsYXNzTmFtZSIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/porofile/profile.jsx\n"));

/***/ })

});