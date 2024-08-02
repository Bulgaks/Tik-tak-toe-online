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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, plauersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, plauersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j + gap - i);\n            res[1].push(fieldSize * (j - gap) + (j + gap) + 1);\n            res[2].push(-fieldSize * (j - gap) + (j + gap) + 1);\n            res[3].push();\n        }\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {}\n    }\n}\nfunction useGameState(plauersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.ZERO\n        }));\n    const nextMove = getNextMove(currentMove, plauersCount);\n    const handleCellClick = (index)=>{\n        // Если setAnyThing принимает в коллбэк предыдущее состояние anyThing, для корректной работы используем lastAnyThing\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, plauersCount),\n                cells: lastGameState.cells.map((cell, cellIndex)=>cellIndex === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"1JE/x7qSl3frDGTSpXwYqZuLqKg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDc0I7QUFFdkQsU0FBU0csWUFBWUMsV0FBVyxFQUFFQyxZQUFZO0lBRTVDLE1BQU1DLGtCQUFrQkosa0RBQVVBLENBQUNLLEtBQUssQ0FBQyxHQUFHRjtJQUU1QyxNQUFNRyxnQkFBZ0JGLGdCQUFnQkcsT0FBTyxDQUFDTCxlQUFlO1FBQ3RERTtJQUFQLE9BQU9BLENBQUFBLGlDQUFBQSxlQUFlLENBQUNFLGNBQWMsY0FBOUJGLDRDQUFBQSxpQ0FBa0NBLGVBQWUsQ0FBQyxFQUFFO0FBQzdEO0FBRUEsU0FBU0ksY0FBY0MsS0FBSztRQUFFQyxlQUFBQSxpRUFBZSxHQUFHQyxZQUFBQSxpRUFBWTtJQUUxRCxNQUFNQyxNQUFNQyxLQUFLQyxLQUFLLENBQUNKLGVBQWU7SUFFdEMsU0FBU0ssbUJBQW1CQyxDQUFDO1FBRTNCLE1BQU1DLE1BQU07WUFDVixFQUFFO1lBQ0YsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1NBQ0g7UUFFRCxJQUFJLElBQUlDLElBQUksR0FBR0EsSUFBSVIsY0FBY1EsSUFBSztZQUNwQ0QsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDRCxJQUFJTixNQUFNSTtZQUN0QkMsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDUixZQUFhTyxDQUFBQSxJQUFJTixHQUFFLElBQU1NLENBQUFBLElBQUlOLEdBQUUsSUFBSztZQUNoREssR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLENBQUNSLFlBQWFPLENBQUFBLElBQUlOLEdBQUUsSUFBTU0sQ0FBQUEsSUFBSU4sR0FBRSxJQUFLO1lBQ2pESyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJO1FBQ2I7SUFFRjtJQUVBLElBQUssSUFBSUgsSUFBSSxHQUFHQSxJQUFJUCxNQUFNVyxNQUFNLEVBQUVKLElBQUs7UUFDckMsSUFBR1AsS0FBSyxDQUFDTyxFQUFFLEVBQUUsQ0FFYjtJQUNGO0FBQ0Y7QUFFTyxTQUFTSyxhQUFhbEIsWUFBWTs7SUFDdkMsTUFBTSxDQUFDLEVBQUVNLEtBQUssRUFBRVAsV0FBVyxFQUFFLEVBQUVvQixhQUFhLEdBQUd4QiwrQ0FBUUEsQ0FBQyxJQUFPO1lBQzdEVyxPQUFPLElBQUljLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDL0J0QixhQUFhSCxvREFBWUEsQ0FBQzBCLElBQUk7UUFDaEM7SUFFQSxNQUFNQyxXQUFXekIsWUFBWUMsYUFBYUM7SUFFMUMsTUFBTXdCLGtCQUFrQixDQUFDQztRQUN2QixvSEFBb0g7UUFFcEhOLGFBQWEsQ0FBQ087WUFDWixJQUFJQSxjQUFjcEIsS0FBSyxDQUFDbUIsTUFBTSxFQUFFO2dCQUM5QixPQUFPQztZQUNUO1lBQ0EsT0FBTztnQkFDTCxHQUFHQSxhQUFhO2dCQUNoQjNCLGFBQWFELFlBQVk0QixjQUFjM0IsV0FBVyxFQUFFQztnQkFDcERNLE9BQU9vQixjQUFjcEIsS0FBSyxDQUFDcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFlBQ3BDQSxjQUFjSixRQUFRQyxjQUFjM0IsV0FBVyxHQUFHNkI7WUFFdEQ7UUFDRjtJQUNGO0lBQ0EsT0FBTztRQUNMdEI7UUFDQVA7UUFDQXdCO1FBQ0FDO0lBQ0Y7QUFDRjtHQTlCZ0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qcz8xMTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMsIE1PVkVfT1JERVIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXVlcnNDb3VudCkge1xuXG4gIGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVIuc2xpY2UoMCwgcGxhdWVyc0NvdW50KTtcblxuICBjb25zdCBuZXh0TW92ZUluZGV4ID0gc2xpY2VkTW92ZU9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMTtcbiAgcmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVXaW5uZXIoY2VsbHMsIHNlcXVlbmNlU2l6ZSA9IDUsIGZpZWxkU2l6ZSA9IDE5KSB7XG5cbiAgY29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXF1ZW5jZVNpemUgLyAyKTtcblxuICBmdW5jdGlvbiBnZXRTZXF1ZW5jZUluZGV4ZXMoaSkge1xuXG4gICAgY29uc3QgcmVzID0gW1xuICAgICAgW10sIC8vIC0tXG4gICAgICBbXSwgLy8gXFxcbiAgICAgIFtdLCAvLyAvXG4gICAgICBbXSwgLy8gfCBcbiAgICBdXG5cbiAgICBmb3IobGV0IGogPSAwOyBqIDwgc2VxdWVuY2VTaXplOyBqKyspIHtcbiAgICAgIHJlc1swXS5wdXNoKGogKyBnYXAgLSBpKTtcbiAgICAgIHJlc1sxXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqICsgZ2FwKSArIDEpO1xuICAgICAgcmVzWzJdLnB1c2goLWZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqICsgZ2FwKSArIDEpO1xuICAgICAgcmVzWzNdLnB1c2goKTtcbiAgICB9XG5cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZihjZWxsc1tpXSkge1xuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGxhdWVyc0NvdW50KSB7XG4gIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50TW92ZSB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gKHtcbiAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gICAgY3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5aRVJPLFxuICB9KSk7XG5cbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxhdWVyc0NvdW50KTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICAvLyDQldGB0LvQuCBzZXRBbnlUaGluZyDQv9GA0LjQvdC40LzQsNC10YIg0LIg0LrQvtC70LvQsdGN0Log0L/RgNC10LTRi9C00YPRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1IGFueVRoaW5nLCDQtNC70Y8g0LrQvtGA0YDQtdC60YLQvdC+0Lkg0YDQsNCx0L7RgtGLINC40YHQv9C+0LvRjNC30YPQtdC8IGxhc3RBbnlUaGluZ1xuXG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGxhdWVyc0NvdW50KSxcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBjZWxsSW5kZXgpID0+XG4gICAgICAgICAgY2VsbEluZGV4ID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsLFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjZWxscyxcbiAgICBjdXJyZW50TW92ZSxcbiAgICBuZXh0TW92ZSxcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFX09SREVSIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXVlcnNDb3VudCIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWVsZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJnZXRTZXF1ZW5jZUluZGV4ZXMiLCJpIiwicmVzIiwiaiIsInB1c2giLCJsZW5ndGgiLCJ1c2VHYW1lU3RhdGUiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJaRVJPIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIiwiY2VsbEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});