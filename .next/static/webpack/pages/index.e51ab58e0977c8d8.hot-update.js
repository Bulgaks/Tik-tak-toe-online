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

/***/ "./components/game/model.js":
/*!**********************************!*\
  !*** ./components/game/model.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeWinner: function() { return /* binding */ computeWinner; },\n/* harmony export */   getNextMove: function() { return /* binding */ getNextMove; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n\nfunction getNextMove(currentMove, plauersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDER.slice(0, plauersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexRows = getSequenceIndexes(i);\n            const winnerIndexes = indexRows.find((row)=>compareElements(row));\n            if (winnerIndexes) {\n                console.log(winnerIndexes);\n                return winnerIndexes;\n            }\n        }\n    }\n    return undefined;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvbW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRWxDLFNBQVNDLFlBQVlDLFdBQVcsRUFBRUMsWUFBWTtJQUNuRCxNQUFNQyxrQkFBa0JKLGtEQUFVQSxDQUFDSyxLQUFLLENBQUMsR0FBR0Y7SUFFNUMsTUFBTUcsZ0JBQWdCRixnQkFBZ0JHLE9BQU8sQ0FBQ0wsZUFBZTtRQUN0REU7SUFBUCxPQUFPQSxDQUFBQSxpQ0FBQUEsZUFBZSxDQUFDRSxjQUFjLGNBQTlCRiw0Q0FBQUEsaUNBQWtDQSxlQUFlLENBQUMsRUFBRTtBQUM3RDtBQUVPLFNBQVNJLGNBQWNDLEtBQUs7UUFBRUMsZUFBQUEsaUVBQWUsR0FBR0MsWUFBQUEsaUVBQVk7SUFDakUsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDSixlQUFlO0lBRXRDLFNBQVNLLGdCQUFnQkMsT0FBTztRQUM5QixJQUFJQyxTQUFTO1FBRWIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLFFBQVFHLE1BQU0sRUFBRUQsSUFBSztZQUN2Q0QsV0FBQUEsU0FBVyxDQUFDLENBQUNSLEtBQUssQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUM7WUFDOUJELFdBQUFBLFNBQVdSLEtBQUssQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUMsS0FBS1QsS0FBSyxDQUFDTyxPQUFPLENBQUNFLElBQUksRUFBRSxDQUFDO1FBQ3hEO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLFNBQVNHLG1CQUFtQkYsQ0FBQztRQUMzQixNQUFNRyxNQUFNO1lBQ1YsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1lBQ0YsRUFBRTtTQUNIO1FBRUQsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlaLGNBQWNZLElBQUs7WUFDckNELEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ0QsSUFBSVYsTUFBTU07WUFDdEJHLEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ1osWUFBYVcsQ0FBQUEsSUFBSVYsR0FBRSxJQUFNVSxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1lBQ2hERyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUMsQ0FBQ1osWUFBYVcsQ0FBQUEsSUFBSVYsR0FBRSxJQUFNVSxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1lBQ2pERyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNaLFlBQWFXLENBQUFBLElBQUlWLEdBQUUsSUFBS007UUFDdEM7UUFDQSxPQUFPRztJQUNUO0lBRUEsSUFBSyxJQUFJSCxJQUFJLEdBQUdBLElBQUlULE1BQU1VLE1BQU0sRUFBRUQsSUFBSztRQUNyQyxJQUFJVCxLQUFLLENBQUNTLEVBQUUsRUFBRTtZQUNaLE1BQU1NLFlBQVlKLG1CQUFtQkY7WUFDckMsTUFBTU8sZ0JBQWdCRCxVQUFVRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUVosZ0JBQWdCWTtZQUM5RCxJQUFJRixlQUFlO2dCQUNqQkcsUUFBUUMsR0FBRyxDQUFDSjtnQkFDWixPQUFPQTtZQUNUO1FBQ0Y7SUFDRjtJQUNBLE9BQU9LO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL21vZGVsLmpzP2U0ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU9WRV9PUkRFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXVlcnNDb3VudCkge1xuICBjb25zdCBzbGljZWRNb3ZlT3JkZXIgPSBNT1ZFX09SREVSLnNsaWNlKDAsIHBsYXVlcnNDb3VudCk7XG5cbiAgY29uc3QgbmV4dE1vdmVJbmRleCA9IHNsaWNlZE1vdmVPcmRlci5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDE7XG4gIHJldHVybiBzbGljZWRNb3ZlT3JkZXJbbmV4dE1vdmVJbmRleF0gPz8gc2xpY2VkTW92ZU9yZGVyWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVdpbm5lcihjZWxscywgc2VxdWVuY2VTaXplID0gMywgZmllbGRTaXplID0gMTkpIHtcbiAgY29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXF1ZW5jZVNpemUgLyAyKTtcblxuICBmdW5jdGlvbiBjb21wYXJlRWxlbWVudHMoaW5kZXhlcykge1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgJiY9ICEhY2VsbHNbaW5kZXhlc1tpXV07XG4gICAgICByZXN1bHQgJiY9IGNlbGxzW2luZGV4ZXNbaV1dID09PSBjZWxsc1tpbmRleGVzW2kgLSAxXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKSB7XG4gICAgY29uc3QgcmVzID0gW1xuICAgICAgW10sIC8vIC0tXG4gICAgICBbXSwgLy8gXFxcbiAgICAgIFtdLCAvLyAvXG4gICAgICBbXSwgLy8gfFxuICAgIF07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlcXVlbmNlU2l6ZTsgaisrKSB7XG4gICAgICByZXNbMF0ucHVzaChqIC0gZ2FwICsgaSk7XG4gICAgICByZXNbMV0ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcbiAgICAgIHJlc1syXS5wdXNoKC1maWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcbiAgICAgIHJlc1szXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjZWxsc1tpXSkge1xuICAgICAgY29uc3QgaW5kZXhSb3dzID0gZ2V0U2VxdWVuY2VJbmRleGVzKGkpO1xuICAgICAgY29uc3Qgd2lubmVySW5kZXhlcyA9IGluZGV4Um93cy5maW5kKChyb3cpID0+IGNvbXBhcmVFbGVtZW50cyhyb3cpKTtcbiAgICAgIGlmICh3aW5uZXJJbmRleGVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lckluZGV4ZXMpO1xuICAgICAgICByZXR1cm4gd2lubmVySW5kZXhlcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiJdLCJuYW1lcyI6WyJNT1ZFX09SREVSIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXVlcnNDb3VudCIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWVsZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJjb21wYXJlRWxlbWVudHMiLCJpbmRleGVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImdldFNlcXVlbmNlSW5kZXhlcyIsInJlcyIsImoiLCJwdXNoIiwiaW5kZXhSb3dzIiwid2lubmVySW5kZXhlcyIsImZpbmQiLCJyb3ciLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/model.js\n"));

/***/ })

});