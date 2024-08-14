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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiModal: function() { return /* binding */ UiModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\n\n/**\n * @param {(\n * width: 'md' | 'full'\n * )} props\n * @returns\n */ function UiModal(param) {\n    let { width = \"md\", className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"fixed inset-0 bg-slate-900/60 backdrop-blur py-10\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-white rounded-lg min-h-[320px] mx-auto relative\", {\n                md: \"max-w-[640px] w-full\",\n                full: \"mx-5\"\n            }[width]),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \" w-8 h-8 rounded flex items-center justify-center hover:bg-white/40 bg-white/10 transition-colors absolute top-0 left-[calc(100%+12px)] \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CrossLightIcon, {\n                    className: \"w-4 h-4 text-white\"\n                }, void 0, false, {\n                    fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = UiModal;\nUiModal.Header = function UiModallHeader(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"mx-6 pt-6 pb-4 text-2xl\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n};\nUiModal.Body = function UiModalBody(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n};\nUiModal.Footer = function UiModalFooter(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n};\nfunction CrossLightIcon(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        className: className,\n        width: \"16\",\n        height: \"16\",\n        viewBox: \"0 0 16 16\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M0.781396 16.0001C0.626858 16.0001 0.475783 15.9543 0.347281 15.8685C0.218778 15.7826 0.118621 15.6606 0.0594776 15.5178C0.00033466 15.3751 -0.0151369 15.218 0.0150198 15.0664C0.0451766 14.9148 0.119607 14.7756 0.228896 14.6664L14.6664 0.228853C14.8129 0.0823209 15.0117 0 15.2189 0C15.4261 0 15.6249 0.0823209 15.7714 0.228853C15.9179 0.375385 16.0002 0.574125 16.0002 0.781353C16.0002 0.988581 15.9179 1.18732 15.7714 1.33385L1.3339 15.7714C1.26141 15.844 1.17528 15.9016 1.08047 15.9408C0.985653 15.9801 0.884016 16.0002 0.781396 16.0001Z\",\n                fill: \"currentColor\"\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M15.2189 16.0001C15.1163 16.0002 15.0146 15.9801 14.9198 15.9408C14.825 15.9016 14.7389 15.844 14.6664 15.7714L0.228896 1.33385C0.0823639 1.18732 4.30364e-05 0.988581 4.30364e-05 0.781353C4.30364e-05 0.574125 0.0823639 0.375385 0.228896 0.228853C0.375428 0.0823209 0.574168 0 0.781396 0C0.988624 0 1.18736 0.0823209 1.3339 0.228853L15.7714 14.6664C15.8807 14.7756 15.9551 14.9148 15.9853 15.0664C16.0154 15.218 16 15.3751 15.9408 15.5178C15.8817 15.6606 15.7815 15.7826 15.653 15.8685C15.5245 15.9543 15.3734 16.0001 15.2189 16.0001Z\",\n                fill: \"currentColor\"\n            }, void 0, false, {\n                fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aleksejbulgakov/Documents/GitHub/Tik-tak-toe-online/components/uikit/ui-modal.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_c1 = CrossLightIcon;\nvar _c, _c1;\n$RefreshReg$(_c, \"UiModal\");\n$RefreshReg$(_c1, \"CrossLightIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L3VpLW1vZGFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QjtBQUV4Qjs7Ozs7Q0FLQyxHQUVNLFNBQVNDLFFBQVEsS0FBcUM7UUFBckMsRUFBRUMsUUFBUSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFLEdBQXJDO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJRixXQUFXSCxnREFBSUEsQ0FBQyxxREFBcURHO2tCQUN4RSw0RUFBQ0U7WUFDQ0YsV0FBV0gsZ0RBQUlBLENBQ2Isc0RBQ0E7Z0JBQ0VNLElBQUk7Z0JBQ0pDLE1BQU07WUFDUixDQUFDLENBQUNMLE1BQU07c0JBR1YsNEVBQUNNO2dCQUNDTCxXQUFVOzBCQU1WLDRFQUFDTTtvQkFBZU4sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDO0tBekJnQkY7QUEyQmhCQSxRQUFRUyxNQUFNLEdBQUcsU0FBU0MsZUFBZ0IsS0FBdUI7UUFBdkIsRUFBRVAsUUFBUSxFQUFFRCxTQUFTLEVBQUUsR0FBdkI7SUFDeEMscUJBQ0UsOERBQUNFO1FBQUlGLFdBQVdILGdEQUFJQSxDQUFDRyxXQUFXO2tCQUE2QkM7Ozs7OztBQUVqRTtBQUVBSCxRQUFRVyxJQUFJLEdBQUcsU0FBU0MsWUFBYSxLQUF1QjtRQUF2QixFQUFFVCxRQUFRLEVBQUVELFNBQVMsRUFBRSxHQUF2QjtJQUNuQyxxQkFDRSw4REFBQ0U7UUFBSUYsV0FBV0gsZ0RBQUlBLENBQUNHLFdBQVc7a0JBQU1DOzs7Ozs7QUFFMUM7QUFFQUgsUUFBUWEsTUFBTSxHQUFHLFNBQVNDLGNBQWUsS0FBdUI7UUFBdkIsRUFBRVgsUUFBUSxFQUFFRCxTQUFTLEVBQUUsR0FBdkI7SUFDdkMscUJBQ0UsOERBQUNFO1FBQUlGLFdBQVdILGdEQUFJQSxDQUFDRyxXQUFXO2tCQUFNQzs7Ozs7O0FBRTFDO0FBRUEsU0FBU0ssZUFBZSxLQUFhO1FBQWIsRUFBRU4sU0FBUyxFQUFFLEdBQWI7SUFDdEIscUJBQ0UsOERBQUNhO1FBQ0NiLFdBQVdBO1FBQ1hELE9BQU07UUFDTmUsUUFBTztRQUNQQyxTQUFRO1FBQ1JDLE1BQUs7UUFDTEMsT0FBTTs7MEJBRU4sOERBQUNDO2dCQUNDQyxHQUFFO2dCQUNGSCxNQUFLOzs7Ozs7MEJBRVAsOERBQUNFO2dCQUNDQyxHQUFFO2dCQUNGSCxNQUFLOzs7Ozs7Ozs7Ozs7QUFJYjtNQXBCU1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aWtpdC91aS1tb2RhbC5qc3g/OGFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuXG4vKipcbiAqIEBwYXJhbSB7KFxuICogd2lkdGg6ICdtZCcgfCAnZnVsbCdcbiAqICl9IHByb3BzXG4gKiBAcmV0dXJuc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBVaU1vZGFsKHsgd2lkdGggPSBcIm1kXCIsIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwiZml4ZWQgaW5zZXQtMCBiZy1zbGF0ZS05MDAvNjAgYmFja2Ryb3AtYmx1ciBweS0xMFwiLCBjbGFzc05hbWUpfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwiYmctd2hpdGUgcm91bmRlZC1sZyBtaW4taC1bMzIwcHhdIG14LWF1dG8gcmVsYXRpdmVcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZDogXCJtYXgtdy1bNjQwcHhdIHctZnVsbFwiLFxuICAgICAgICAgICAgZnVsbDogXCJteC01XCIsXG4gICAgICAgICAgfVt3aWR0aF0sXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgdy04IGgtOCByb3VuZGVkIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXG4gICAgICAgIGhvdmVyOmJnLXdoaXRlLzQwIGJnLXdoaXRlLzEwIHRyYW5zaXRpb24tY29sb3JzXG4gICAgICAgIGFic29sdXRlIHRvcC0wIGxlZnQtW2NhbGMoMTAwJSsxMnB4KV1cbiAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDcm9zc0xpZ2h0SWNvbiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5VaU1vZGFsLkhlYWRlciA9IGZ1bmN0aW9uIFVpTW9kYWxsSGVhZGVyICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgXCJteC02IHB0LTYgcGItNCB0ZXh0LTJ4bFwiKX0+e2NoaWxkcmVufTwvZGl2PlxuICApXG59XG5cblVpTW9kYWwuQm9keSA9IGZ1bmN0aW9uIFVpTW9kYWxCb2R5ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgXCJcIil9PntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuXG5VaU1vZGFsLkZvb3RlciA9IGZ1bmN0aW9uIFVpTW9kYWxGb290ZXIgKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCBcIlwiKX0+e2NoaWxkcmVufTwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIENyb3NzTGlnaHRJY29uKHsgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTAuNzgxMzk2IDE2LjAwMDFDMC42MjY4NTggMTYuMDAwMSAwLjQ3NTc4MyAxNS45NTQzIDAuMzQ3MjgxIDE1Ljg2ODVDMC4yMTg3NzggMTUuNzgyNiAwLjExODYyMSAxNS42NjA2IDAuMDU5NDc3NiAxNS41MTc4QzAuMDAwMzM0NjYgMTUuMzc1MSAtMC4wMTUxMzY5IDE1LjIxOCAwLjAxNTAxOTggMTUuMDY2NEMwLjA0NTE3NjYgMTQuOTE0OCAwLjExOTYwNyAxNC43NzU2IDAuMjI4ODk2IDE0LjY2NjRMMTQuNjY2NCAwLjIyODg1M0MxNC44MTI5IDAuMDgyMzIwOSAxNS4wMTE3IDAgMTUuMjE4OSAwQzE1LjQyNjEgMCAxNS42MjQ5IDAuMDgyMzIwOSAxNS43NzE0IDAuMjI4ODUzQzE1LjkxNzkgMC4zNzUzODUgMTYuMDAwMiAwLjU3NDEyNSAxNi4wMDAyIDAuNzgxMzUzQzE2LjAwMDIgMC45ODg1ODEgMTUuOTE3OSAxLjE4NzMyIDE1Ljc3MTQgMS4zMzM4NUwxLjMzMzkgMTUuNzcxNEMxLjI2MTQxIDE1Ljg0NCAxLjE3NTI4IDE1LjkwMTYgMS4wODA0NyAxNS45NDA4QzAuOTg1NjUzIDE1Ljk4MDEgMC44ODQwMTYgMTYuMDAwMiAwLjc4MTM5NiAxNi4wMDAxWlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTUuMjE4OSAxNi4wMDAxQzE1LjExNjMgMTYuMDAwMiAxNS4wMTQ2IDE1Ljk4MDEgMTQuOTE5OCAxNS45NDA4QzE0LjgyNSAxNS45MDE2IDE0LjczODkgMTUuODQ0IDE0LjY2NjQgMTUuNzcxNEwwLjIyODg5NiAxLjMzMzg1QzAuMDgyMzYzOSAxLjE4NzMyIDQuMzAzNjRlLTA1IDAuOTg4NTgxIDQuMzAzNjRlLTA1IDAuNzgxMzUzQzQuMzAzNjRlLTA1IDAuNTc0MTI1IDAuMDgyMzYzOSAwLjM3NTM4NSAwLjIyODg5NiAwLjIyODg1M0MwLjM3NTQyOCAwLjA4MjMyMDkgMC41NzQxNjggMCAwLjc4MTM5NiAwQzAuOTg4NjI0IDAgMS4xODczNiAwLjA4MjMyMDkgMS4zMzM5IDAuMjI4ODUzTDE1Ljc3MTQgMTQuNjY2NEMxNS44ODA3IDE0Ljc3NTYgMTUuOTU1MSAxNC45MTQ4IDE1Ljk4NTMgMTUuMDY2NEMxNi4wMTU0IDE1LjIxOCAxNiAxNS4zNzUxIDE1Ljk0MDggMTUuNTE3OEMxNS44ODE3IDE1LjY2MDYgMTUuNzgxNSAxNS43ODI2IDE1LjY1MyAxNS44Njg1QzE1LjUyNDUgMTUuOTU0MyAxNS4zNzM0IDE2LjAwMDEgMTUuMjE4OSAxNi4wMDAxWlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwiVWlNb2RhbCIsIndpZHRoIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkaXYiLCJtZCIsImZ1bGwiLCJidXR0b24iLCJDcm9zc0xpZ2h0SWNvbiIsIkhlYWRlciIsIlVpTW9kYWxsSGVhZGVyIiwiQm9keSIsIlVpTW9kYWxCb2R5IiwiRm9vdGVyIiwiVWlNb2RhbEZvb3RlciIsInN2ZyIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/uikit/ui-modal.jsx\n"));

/***/ })

});