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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    return (_MOVE_ORDER_nextMoveIndex = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER[0];\n}\nfunction useGameState() {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.ZERO\n        }));\n    const nextMove = getNextMove(currentMove);\n    const handleCellClick = (index)=>{\n        // Если setAnyThing принимает в коллбэк предыдущее состояние anyThing, для корректной работы используем lastAnyThing\n        is(lastGameState.cell[index]);\n        setGameState((lastGameState1)=>({\n                ...lastGameState1,\n                currentMove: getNextMove(lastGameState1.currentMove),\n                cells: lastGameState1.cells.map((cell, cellIndex)=>cellIndex === index ? lastGameState1.currentMove : cell)\n            }));\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"1JE/x7qSl3frDGTSpXwYqZuLqKg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDc0I7QUFFdkQsU0FBU0csWUFBWUMsV0FBVztJQUM5QixNQUFNQyxnQkFBZ0JILGtEQUFVQSxDQUFDSSxPQUFPLENBQUNGLGVBQWU7UUFDakRGO0lBQVAsT0FBT0EsQ0FBQUEsNEJBQUFBLGtEQUFVLENBQUNHLGNBQWMsY0FBekJILHVDQUFBQSw0QkFBNkJBLGtEQUFVLENBQUMsRUFBRTtBQUNuRDtBQUVPLFNBQVNLOztJQUNkLE1BQU0sQ0FBQyxFQUFFQyxLQUFLLEVBQUVKLFdBQVcsRUFBRSxFQUFFSyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDLElBQU87WUFDN0RRLE9BQU8sSUFBSUUsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztZQUMvQlAsYUFBYUgsb0RBQVlBLENBQUNXLElBQUk7UUFDaEM7SUFFQSxNQUFNQyxXQUFXVixZQUFZQztJQUU3QixNQUFNVSxrQkFBa0IsQ0FBQ0M7UUFDdkIsb0hBQW9IO1FBRXBIQyxHQUFJQyxjQUFjQyxJQUFJLENBQUNILE1BQU07UUFFN0JOLGFBQWEsQ0FBQ1EsaUJBQW1CO2dCQUMvQixHQUFHQSxjQUFhO2dCQUNoQmIsYUFBYUQsWUFBWWMsZUFBY2IsV0FBVztnQkFDbERJLE9BQU9TLGVBQWNULEtBQUssQ0FBQ1csR0FBRyxDQUFDLENBQUNELE1BQU1FLFlBQ3BDQSxjQUFjTCxRQUFRRSxlQUFjYixXQUFXLEdBQUdjO1lBRXREO0lBQ0Y7SUFDQSxPQUFPO1FBQ0xWO1FBQ0FKO1FBQ0FTO1FBQ0FDO0lBQ0Y7QUFDRjtHQTNCZ0JQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qcz8xMTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMsIE1PVkVfT1JERVIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpIHtcbiAgY29uc3QgbmV4dE1vdmVJbmRleCA9IE1PVkVfT1JERVIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxO1xuICByZXR1cm4gTU9WRV9PUkRFUltuZXh0TW92ZUluZGV4XSA/PyBNT1ZFX09SREVSWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKCkge1xuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgfSkpO1xuXG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpO1xuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuICAgIC8vINCV0YHQu9C4IHNldEFueVRoaW5nINC/0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0LvQu9Cx0Y3QuiDQv9GA0LXQtNGL0LTRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUgYW55VGhpbmcsINC00LvRjyDQutC+0YDRgNC10LrRgtC90L7QuSDRgNCw0LHQvtGC0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10LwgbGFzdEFueVRoaW5nXG5cbiAgICBpcyAobGFzdEdhbWVTdGF0ZS5jZWxsW2luZGV4XSlcblxuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSksXG4gICAgICBjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGNlbGxJbmRleCkgPT5cbiAgICAgICAgY2VsbEluZGV4ID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsLFxuICAgICAgKSxcbiAgICB9KSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgY2VsbHMsXG4gICAgY3VycmVudE1vdmUsXG4gICAgbmV4dE1vdmUsXG4gICAgaGFuZGxlQ2VsbENsaWNrLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiR0FNRV9TWU1CT0xTIiwiTU9WRV9PUkRFUiIsImdldE5leHRNb3ZlIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZUluZGV4IiwiaW5kZXhPZiIsInVzZUdhbWVTdGF0ZSIsImNlbGxzIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiWkVSTyIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJpcyIsImxhc3RHYW1lU3RhdGUiLCJjZWxsIiwibWFwIiwiY2VsbEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});