"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header/header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/header.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _darkmode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../darkmode */ \"./src/components/darkmode.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ \"./src/components/Header/navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = (param)=>{\n    let { siteTitle  } = param;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"header \".concat(isScrolled ? \"scroll-header\" : \"\"),\n        id: \"header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"nav\",\n            role: \"navigation\",\n            \"aria-label\": \"main navigation\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    className: \"nav__logo\",\n                    rel: \"noreferer\",\n                    children: siteTitle\n                }, void 0, false, {\n                    fileName: \"/Users/jorge/Documents/portfolio/src/components/Header/header.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, {}, void 0, false, {\n                    fileName: \"/Users/jorge/Documents/portfolio/src/components/Header/header.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_darkmode__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jorge/Documents/portfolio/src/components/Header/header.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jorge/Documents/portfolio/src/components/Header/header.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jorge/Documents/portfolio/src/components/Header/header.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"spb2ktWg2k5tqGLC0aNjU5e9g0w=\");\n_c = Header;\nHeader.propTypes = {\n    siteTitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)\n};\nHeader.defaultProps = {\n    siteTitle: \"\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUF1QztBQUNMO0FBRUE7QUFDRDtBQUdqQyxNQUFNSyxTQUFTLFNBQW1CO1FBQWxCLEVBQUVDLFVBQVMsRUFBRTs7SUFDM0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFFbEQscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVcsVUFBNEMsT0FBbENILGFBQWEsa0JBQWtCLEVBQUU7UUFBSUksSUFBRztrQkFDaEUsNEVBQUNDO1lBQUlGLFdBQVU7WUFBTUcsTUFBSztZQUFhQyxjQUFXOzs4QkFDaEQsOERBQUNDO29CQUFFQyxNQUFLO29CQUFJTixXQUFVO29CQUFZTyxLQUFJOzhCQUNuQ1g7Ozs7Ozs4QkFFSCw4REFBQ0YsMkNBQU1BOzs7Ozs4QkFDUCw4REFBQ0QsaURBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCO0dBZE1FO0tBQUFBO0FBZ0JOQSxPQUFPYSxTQUFTLEdBQUc7SUFDakJaLFdBQVdKLDBEQUFnQjtBQUM3QjtBQUVBRyxPQUFPZSxZQUFZLEdBQUc7SUFDcEJkLFdBQVk7QUFDZDtBQUVBLCtEQUFlRCxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIuanM/Zjc2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcblxuaW1wb3J0IERhcmtNb2RlIGZyb20gXCIuLi9kYXJrbW9kZVwiXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIlxuXG5cbmNvbnN0IEhlYWRlciA9ICh7IHNpdGVUaXRsZSB9KSA9PiB7XG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlciAke2lzU2Nyb2xsZWQgPyAnc2Nyb2xsLWhlYWRlcicgOiAnJ31gfSBpZD1cImhlYWRlclwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXZfX2xvZ29cIiByZWw9XCJub3JlZmVyZXJcIj5cbiAgICAgICAgICB7c2l0ZVRpdGxlfVxuICAgICAgICA8L2E+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPERhcmtNb2RlIC8+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBzaXRlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpdGVUaXRsZTogYGAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJEYXJrTW9kZSIsIk5hdmJhciIsIkhlYWRlciIsInNpdGVUaXRsZSIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJuYXYiLCJyb2xlIiwiYXJpYS1sYWJlbCIsImEiLCJocmVmIiwicmVsIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/header.js\n"));

/***/ })

});