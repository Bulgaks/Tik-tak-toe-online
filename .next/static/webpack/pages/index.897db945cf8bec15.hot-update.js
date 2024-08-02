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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, plauersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, plauersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexRows = getSequenceIndexes(i);\n            const winnerIndexes = indexRows.find((row)=>compareElements(row));\n            if (winnerIndexes) {\n                re;\n            }\n        }\n    }\n}\nfunction useGameState(plauersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.ZERO\n        }));\n    console.log(computeWinner(cells));\n    const nextMove = getNextMove(currentMove, plauersCount);\n    const handleCellClick = (index)=>{\n        // Если setAnyThing принимает в коллбэк предыдущее состояние anyThing, для корректной работы используем lastAnyThing\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, plauersCount),\n                cells: lastGameState.cells.map((cell, cellIndex)=>cellIndex === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"1JE/x7qSl3frDGTSpXwYqZuLqKg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWM5QixLQUFLLENBQUMrQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsWUFDcENBLGNBQWNKLFFBQVFDLGNBQWNyQyxXQUFXLEdBQUd1QztZQUV0RDtRQUNGO0lBQ0Y7SUFDQSxPQUFPO1FBQ0xoQztRQUNBUDtRQUNBa0M7UUFDQUM7SUFDRjtBQUNGO0dBaENnQlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL3VzZS1nYW1lLXN0YXRlLmpzPzExMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRV9PUkRFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxhdWVyc0NvdW50KSB7XG5cbiAgY29uc3Qgc2xpY2VkTW92ZU9yZGVyID0gTU9WRV9PUkRFUi5zbGljZSgwLCBwbGF1ZXJzQ291bnQpO1xuXG4gIGNvbnN0IG5leHRNb3ZlSW5kZXggPSBzbGljZWRNb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxO1xuICByZXR1cm4gc2xpY2VkTW92ZU9yZGVyW25leHRNb3ZlSW5kZXhdID8/IHNsaWNlZE1vdmVPcmRlclswXTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVdpbm5lcihjZWxscywgc2VxdWVuY2VTaXplID0gNSwgZmllbGRTaXplID0gMTkpIHtcblxuICBjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcXVlbmNlU2l6ZSAvIDIpO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVFbGVtZW50cyhpbmRleGVzKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICBmb3IobGV0IGkgPSAxOyBpICA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCAmJj0gISFjZWxsc1tpbmRleGVzW2ldXTtcbiAgICAgIHJlc3VsdCAmJj0gY2VsbHNbaW5kZXhlc1tpXV0gPT09IGNlbGxzW2luZGV4ZXNbaSAtIDFdXVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZXF1ZW5jZUluZGV4ZXMoaSkge1xuXG4gICAgY29uc3QgcmVzID0gW1xuICAgICAgW10sIC8vIC0tXG4gICAgICBbXSwgLy8gXFxcbiAgICAgIFtdLCAvLyAvXG4gICAgICBbXSwgLy8gfCBcbiAgICBdXG5cbiAgICBmb3IobGV0IGogPSAwOyBqIDwgc2VxdWVuY2VTaXplOyBqKyspIHtcbiAgICAgIHJlc1swXS5wdXNoKGogLSBnYXAgKyBpKTtcbiAgICAgIHJlc1sxXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpO1xuICAgICAgcmVzWzJdLnB1c2goLWZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpO1xuICAgICAgcmVzWzNdLnB1c2goZmllbGRTaXplICogKGogLSBnYXApICsgaSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYoY2VsbHNbaV0pIHtcbiAgICAgIGNvbnN0IGluZGV4Um93cyA9IGdldFNlcXVlbmNlSW5kZXhlcyhpKTtcbiAgICAgIGNvbnN0IHdpbm5lckluZGV4ZXMgPSBpbmRleFJvd3MuZmluZChyb3cgPT4gY29tcGFyZUVsZW1lbnRzKHJvdykpO1xuICAgICAgaWYod2lubmVySW5kZXhlcykge1xuICAgICAgICByZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXVlcnNDb3VudCkge1xuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgfSkpO1xuXG4gIGNvbnNvbGUubG9nKGNvbXB1dGVXaW5uZXIoY2VsbHMpKTtcblxuICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF1ZXJzQ291bnQpO1xuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuICAgIC8vINCV0YHQu9C4IHNldEFueVRoaW5nINC/0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0LvQu9Cx0Y3QuiDQv9GA0LXQtNGL0LTRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUgYW55VGhpbmcsINC00LvRjyDQutC+0YDRgNC10LrRgtC90L7QuSDRgNCw0LHQvtGC0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10LwgbGFzdEFueVRoaW5nXG5cbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcbiAgICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gbGFzdEdhbWVTdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLCBwbGF1ZXJzQ291bnQpLFxuICAgICAgICBjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGNlbGxJbmRleCkgPT5cbiAgICAgICAgICBjZWxsSW5kZXggPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGwsXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRNb3ZlLFxuICAgIG5leHRNb3ZlLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIk1PVkVfT1JERVIiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwicGxhdWVyc0NvdW50Iiwic2xpY2VkTW92ZU9yZGVyIiwic2xpY2UiLCJuZXh0TW92ZUluZGV4IiwiaW5kZXhPZiIsImNvbXB1dGVXaW5uZXIiLCJjZWxscyIsInNlcXVlbmNlU2l6ZSIsImZpZWxkU2l6ZSIsImdhcCIsIk1hdGgiLCJmbG9vciIsImNvbXBhcmVFbGVtZW50cyIsImluZGV4ZXMiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiZ2V0U2VxdWVuY2VJbmRleGVzIiwicmVzIiwiaiIsInB1c2giLCJpbmRleFJvd3MiLCJ3aW5uZXJJbmRleGVzIiwiZmluZCIsInJvdyIsInJlIiwidXNlR2FtZVN0YXRlIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiWkVSTyIsImNvbnNvbGUiLCJsb2ciLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiLCJjZWxsSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});