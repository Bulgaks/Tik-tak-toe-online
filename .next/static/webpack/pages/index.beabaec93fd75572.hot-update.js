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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, plauersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, plauersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            console.log(getSequenceIndexes(i));\n        }\n    }\n}\nfunction useGameState(plauersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.ZERO\n        }));\n    console.log(computeWinner(cells));\n    const nextMove = getNextMove(currentMove, plauersCount);\n    const handleCellClick = (index)=>{\n        // Если setAnyThing принимает в коллбэк предыдущее состояние anyThing, для корректной работы используем lastAnyThing\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, plauersCount),\n                cells: lastGameState.cells.map((cell, cellIndex)=>cellIndex === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"1JE/x7qSl3frDGTSpXwYqZuLqKg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDc0I7QUFFdkQsU0FBU0csWUFBWUMsV0FBVyxFQUFFQyxZQUFZO0lBRTVDLE1BQU1DLGtCQUFrQkosa0RBQVVBLENBQUNLLEtBQUssQ0FBQyxHQUFHRjtJQUU1QyxNQUFNRyxnQkFBZ0JGLGdCQUFnQkcsT0FBTyxDQUFDTCxlQUFlO1FBQ3RERTtJQUFQLE9BQU9BLENBQUFBLGlDQUFBQSxlQUFlLENBQUNFLGNBQWMsY0FBOUJGLDRDQUFBQSxpQ0FBa0NBLGVBQWUsQ0FBQyxFQUFFO0FBQzdEO0FBRUEsU0FBU0ksY0FBY0MsS0FBSztRQUFFQyxlQUFBQSxpRUFBZSxHQUFHQyxZQUFBQSxpRUFBWTtJQUUxRCxNQUFNQyxNQUFNQyxLQUFLQyxLQUFLLENBQUNKLGVBQWU7SUFJdEMsU0FBU0ssbUJBQW1CQyxDQUFDO1FBRTNCLE1BQU1DLE1BQU07WUFDVixFQUFFO1lBQ0YsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1NBQ0g7UUFFRCxJQUFJLElBQUlDLElBQUksR0FBR0EsSUFBSVIsY0FBY1EsSUFBSztZQUNwQ0QsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDRCxJQUFJTixNQUFNSTtZQUN0QkMsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDUixZQUFhTyxDQUFBQSxJQUFJTixHQUFFLElBQU1NLENBQUFBLElBQUlOLEdBQUUsSUFBS0k7WUFDaERDLEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQyxDQUFDUixZQUFhTyxDQUFBQSxJQUFJTixHQUFFLElBQU1NLENBQUFBLElBQUlOLEdBQUUsSUFBS0k7WUFDakRDLEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ1IsWUFBYU8sQ0FBQUEsSUFBSU4sR0FBRSxJQUFLSTtRQUN0QztRQUNBLE9BQU9DO0lBQ1Q7SUFFQSxJQUFLLElBQUlELElBQUksR0FBR0EsSUFBSVAsTUFBTVcsTUFBTSxFQUFFSixJQUFLO1FBQ3JDLElBQUdQLEtBQUssQ0FBQ08sRUFBRSxFQUFFO1lBQ1hLLFFBQVFDLEdBQUcsQ0FBQ1AsbUJBQW1CQztRQUNqQztJQUNGO0FBQ0Y7QUFFTyxTQUFTTyxhQUFhcEIsWUFBWTs7SUFDdkMsTUFBTSxDQUFDLEVBQUVNLEtBQUssRUFBRVAsV0FBVyxFQUFFLEVBQUVzQixhQUFhLEdBQUcxQiwrQ0FBUUEsQ0FBQyxJQUFPO1lBQzdEVyxPQUFPLElBQUlnQixNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CeEIsYUFBYUgsb0RBQVlBLENBQUM0QixJQUFJO1FBQ2hDO0lBRUFOLFFBQVFDLEdBQUcsQ0FBQ2QsY0FBY0M7SUFFMUIsTUFBTW1CLFdBQVczQixZQUFZQyxhQUFhQztJQUUxQyxNQUFNMEIsa0JBQWtCLENBQUNDO1FBQ3ZCLG9IQUFvSDtRQUVwSE4sYUFBYSxDQUFDTztZQUNaLElBQUlBLGNBQWN0QixLQUFLLENBQUNxQixNQUFNLEVBQUU7Z0JBQzlCLE9BQU9DO1lBQ1Q7WUFDQSxPQUFPO2dCQUNMLEdBQUdBLGFBQWE7Z0JBQ2hCN0IsYUFBYUQsWUFBWThCLGNBQWM3QixXQUFXLEVBQUVDO2dCQUNwRE0sT0FBT3NCLGNBQWN0QixLQUFLLENBQUN1QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsWUFDcENBLGNBQWNKLFFBQVFDLGNBQWM3QixXQUFXLEdBQUcrQjtZQUV0RDtRQUNGO0lBQ0Y7SUFDQSxPQUFPO1FBQ0x4QjtRQUNBUDtRQUNBMEI7UUFDQUM7SUFDRjtBQUNGO0dBaENnQk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL3VzZS1nYW1lLXN0YXRlLmpzPzExMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRV9PUkRFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxhdWVyc0NvdW50KSB7XG5cbiAgY29uc3Qgc2xpY2VkTW92ZU9yZGVyID0gTU9WRV9PUkRFUi5zbGljZSgwLCBwbGF1ZXJzQ291bnQpO1xuXG4gIGNvbnN0IG5leHRNb3ZlSW5kZXggPSBzbGljZWRNb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxO1xuICByZXR1cm4gc2xpY2VkTW92ZU9yZGVyW25leHRNb3ZlSW5kZXhdID8/IHNsaWNlZE1vdmVPcmRlclswXTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVdpbm5lcihjZWxscywgc2VxdWVuY2VTaXplID0gNSwgZmllbGRTaXplID0gMTkpIHtcblxuICBjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcXVlbmNlU2l6ZSAvIDIpO1xuXG4gIFxuXG4gIGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKSB7XG5cbiAgICBjb25zdCByZXMgPSBbXG4gICAgICBbXSwgLy8gLS1cbiAgICAgIFtdLCAvLyBcXFxuICAgICAgW10sIC8vIC9cbiAgICAgIFtdLCAvLyB8IFxuICAgIF1cblxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZVNpemU7IGorKykge1xuICAgICAgcmVzWzBdLnB1c2goaiAtIGdhcCArIGkpO1xuICAgICAgcmVzWzFdLnB1c2goZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XG4gICAgICByZXNbMl0ucHVzaCgtZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XG4gICAgICByZXNbM10ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZihjZWxsc1tpXSkge1xuICAgICAgY29uc29sZS5sb2coZ2V0U2VxdWVuY2VJbmRleGVzKGkpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF1ZXJzQ291bnQpIHtcbiAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xuICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgICBjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLlpFUk8sXG4gIH0pKTtcblxuICBjb25zb2xlLmxvZyhjb21wdXRlV2lubmVyKGNlbGxzKSk7XG5cbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxhdWVyc0NvdW50KTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICAvLyDQldGB0LvQuCBzZXRBbnlUaGluZyDQv9GA0LjQvdC40LzQsNC10YIg0LIg0LrQvtC70LvQsdGN0Log0L/RgNC10LTRi9C00YPRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1IGFueVRoaW5nLCDQtNC70Y8g0LrQvtGA0YDQtdC60YLQvdC+0Lkg0YDQsNCx0L7RgtGLINC40YHQv9C+0LvRjNC30YPQtdC8IGxhc3RBbnlUaGluZ1xuXG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGxhdWVyc0NvdW50KSxcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBjZWxsSW5kZXgpID0+XG4gICAgICAgICAgY2VsbEluZGV4ID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsLFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjZWxscyxcbiAgICBjdXJyZW50TW92ZSxcbiAgICBuZXh0TW92ZSxcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFX09SREVSIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXVlcnNDb3VudCIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWVsZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJnZXRTZXF1ZW5jZUluZGV4ZXMiLCJpIiwicmVzIiwiaiIsInB1c2giLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwidXNlR2FtZVN0YXRlIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiWkVSTyIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImNlbGxJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});