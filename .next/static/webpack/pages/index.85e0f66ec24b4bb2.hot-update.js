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

/***/ "./components/uikit/ui-modal.jsx":
/*!***************************************!*\
  !*** ./components/uikit/ui-modal.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiModal: function() { return /* binding */ UiModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\n\n/**\n * @param {(\n * width: 'md' | 'full'\n * )} props\n * @returns\n */ function UiModal(param) {\n    let { width = \"md\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-slate-900/60 backdrop-blur py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-white rounded-lg min-h-[320px] mx-auto\", {\n                md: \"max-w-[640px] w-full\",\n                full: \"mx-5\"\n            }[width]),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = UiModal;\nfunction CrossLightIcon() {}\n_c1 = CrossLightIcon;\nvar _c, _c1;\n$RefreshReg$(_c, \"UiModal\");\n$RefreshReg$(_c1, \"CrossLightIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L3VpLW1vZGFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QjtBQUV4Qjs7Ozs7Q0FLQyxHQUVNLFNBQVNDLFFBQVEsS0FBZ0I7UUFBaEIsRUFBRUMsUUFBUSxJQUFJLEVBQUUsR0FBaEI7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQ0NDLFdBQVdKLGdEQUFJQSxDQUNiLDZDQUNBO2dCQUNFSyxJQUFJO2dCQUNKQyxNQUFNO1lBQ1IsQ0FBQyxDQUFFSixNQUFPO3NCQUdaLDRFQUFDSzs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7S0FoQmdCTjtBQWtCaEIsU0FBU08sa0JBRVQ7TUFGU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aWtpdC91aS1tb2RhbC5qc3g/OGFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7KFxuICogd2lkdGg6ICdtZCcgfCAnZnVsbCdcbiAqICl9IHByb3BzXG4gKiBAcmV0dXJuc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBVaU1vZGFsKHsgd2lkdGggPSBcIm1kXCIgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1zbGF0ZS05MDAvNjAgYmFja2Ryb3AtYmx1ciBweS0xMFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgXCJiZy13aGl0ZSByb3VuZGVkLWxnIG1pbi1oLVszMjBweF0gbXgtYXV0b1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1kOiBcIm1heC13LVs2NDBweF0gdy1mdWxsXCIsXG4gICAgICAgICAgICBmdWxsOiBcIm14LTVcIixcbiAgICAgICAgICB9WyB3aWR0aCBdLFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8YnV0dG9uPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENyb3NzTGlnaHRJY29uICgpIHtcbiAgXG59Il0sIm5hbWVzIjpbImNsc3giLCJVaU1vZGFsIiwid2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJtZCIsImZ1bGwiLCJidXR0b24iLCJDcm9zc0xpZ2h0SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/uikit/ui-modal.jsx\n"));

/***/ })

});