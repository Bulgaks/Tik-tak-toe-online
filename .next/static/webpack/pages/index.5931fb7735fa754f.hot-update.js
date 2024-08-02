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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, plauersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, plauersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            console.log(getSequenceIndexes(i));\n        }\n    }\n}\nfunction useGameState(plauersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.ZERO\n        }));\n    console.log(computeWinner(cells));\n    const nextMove = getNextMove(currentMove, plauersCount);\n    const handleCellClick = (index)=>{\n        // Если setAnyThing принимает в коллбэк предыдущее состояние anyThing, для корректной работы используем lastAnyThing\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, plauersCount),\n                cells: lastGameState.cells.map((cell, cellIndex)=>cellIndex === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"1JE/x7qSl3frDGTSpXwYqZuLqKg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEQ7UUFDRjtJQUNGO0lBQ0EsT0FBTztRQUNMM0I7UUFDQVA7UUFDQTZCO1FBQ0FDO0lBQ0Y7QUFDRjtHQWhDZ0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qcz8xMTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMsIE1PVkVfT1JERVIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXVlcnNDb3VudCkge1xuXG4gIGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVIuc2xpY2UoMCwgcGxhdWVyc0NvdW50KTtcblxuICBjb25zdCBuZXh0TW92ZUluZGV4ID0gc2xpY2VkTW92ZU9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMTtcbiAgcmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVXaW5uZXIoY2VsbHMsIHNlcXVlbmNlU2l6ZSA9IDUsIGZpZWxkU2l6ZSA9IDE5KSB7XG5cbiAgY29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXF1ZW5jZVNpemUgLyAyKTtcblxuICBmdW5jdGlvbiBjb21wYXJlRWxlbWVudHMoaW5kZXhlcykge1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgZm9yKGxldCBpID0gMTsgaSAgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgJiY9ICEhY2VsbHNbaW5kZXhlc1tpXV07XG4gICAgICByZXN1bHQgJiY9IGNlbGxzW2luZGV4ZXNbaV1dID09PSBjZWxsc1tpbmRleGVzW2kgLSAxXV1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VxdWVuY2VJbmRleGVzKGkpIHtcblxuICAgIGNvbnN0IHJlcyA9IFtcbiAgICAgIFtdLCAvLyAtLVxuICAgICAgW10sIC8vIFxcXG4gICAgICBbXSwgLy8gL1xuICAgICAgW10sIC8vIHwgXG4gICAgXVxuXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IHNlcXVlbmNlU2l6ZTsgaisrKSB7XG4gICAgICByZXNbMF0ucHVzaChqIC0gZ2FwICsgaSk7XG4gICAgICByZXNbMV0ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcbiAgICAgIHJlc1syXS5wdXNoKC1maWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcbiAgICAgIHJlc1szXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgIGlmKGNlbGxzW2ldKSB7XG4gICAgICBjb25zb2xlLmxvZyhnZXRTZXF1ZW5jZUluZGV4ZXMoaSkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXVlcnNDb3VudCkge1xuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgfSkpO1xuXG4gIGNvbnNvbGUubG9nKGNvbXB1dGVXaW5uZXIoY2VsbHMpKTtcblxuICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF1ZXJzQ291bnQpO1xuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuICAgIC8vINCV0YHQu9C4IHNldEFueVRoaW5nINC/0YDQuNC90LjQvNCw0LXRgiDQsiDQutC+0LvQu9Cx0Y3QuiDQv9GA0LXQtNGL0LTRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUgYW55VGhpbmcsINC00LvRjyDQutC+0YDRgNC10LrRgtC90L7QuSDRgNCw0LHQvtGC0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10LwgbGFzdEFueVRoaW5nXG5cbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcbiAgICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gbGFzdEdhbWVTdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLCBwbGF1ZXJzQ291bnQpLFxuICAgICAgICBjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGNlbGxJbmRleCkgPT5cbiAgICAgICAgICBjZWxsSW5kZXggPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGwsXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRNb3ZlLFxuICAgIG5leHRNb3ZlLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIk1PVkVfT1JERVIiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwicGxhdWVyc0NvdW50Iiwic2xpY2VkTW92ZU9yZGVyIiwic2xpY2UiLCJuZXh0TW92ZUluZGV4IiwiaW5kZXhPZiIsImNvbXB1dGVXaW5uZXIiLCJjZWxscyIsInNlcXVlbmNlU2l6ZSIsImZpZWxkU2l6ZSIsImdhcCIsIk1hdGgiLCJmbG9vciIsImNvbXBhcmVFbGVtZW50cyIsImluZGV4ZXMiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiZ2V0U2VxdWVuY2VJbmRleGVzIiwicmVzIiwiaiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidXNlR2FtZVN0YXRlIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiWkVSTyIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImNlbGxJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});