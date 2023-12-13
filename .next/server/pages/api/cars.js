"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cars";
exports.ids = ["pages/api/cars"];
exports.modules = {

/***/ "(api)/./pages/api/cars.ts":
/*!***************************!*\
  !*** ./pages/api/cars.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _public_api_cars_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/api/cars.json */ \"(api)/./public/api/cars.json\");\n\nasync function handler(req, res) {\n    res.status(200).json(_public_api_cars_json__WEBPACK_IMPORTED_MODULE_0__);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2Fycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUM4QztBQUMvQixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQUEsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsa0RBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1jb2RlLXRlc3QvLi9wYWdlcy9hcGkvY2Fycy50cz8xOTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uLy4uL3B1YmxpYy9hcGkvY2Fycy5qc29uXCI7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xufVxuIl0sIm5hbWVzIjpbImRhdGEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/cars.ts\n");

/***/ }),

/***/ "(api)/./public/api/cars.json":
/*!******************************!*\
  !*** ./public/api/cars.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"xc90-recharge","modelName":"XC90 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc90_recharge.jpg"},{"id":"xc60-recharge","modelName":"XC60 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc60_recharge.jpg"},{"id":"xc40-recharge","modelName":"XC40 Recharge","bodyType":"suv","modelType":"plug-in hybrid","imageUrl":"/images/xc40_recharge.jpg"},{"id":"xc40-bev","modelName":"XC40 Recharge","bodyType":"suv","modelType":"pure electric","imageUrl":"/images/xc40_bev.jpg"},{"id":"v90-recharge","modelName":"V90 Recharge","bodyType":"estate","modelType":"plug-in hybrid","imageUrl":"/images/v90_recharge.jpg"},{"id":"v60-recharge","modelName":"V60 Recharge","bodyType":"estate","modelType":"plug-in hybrid","imageUrl":"/images/v60_recharge.jpg"},{"id":"s90-recharge","modelName":"S90 Recharge","bodyType":"sedan","modelType":"plug-in hybrid","imageUrl":"/images/s90_recharge.jpg"},{"id":"s60-recharge","modelName":"S60 Recharge","bodyType":"sedan","modelType":"plug-in hybrid","imageUrl":"/images/s60_recharge.jpg"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cars.ts"));
module.exports = __webpack_exports__;

})();