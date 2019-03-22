webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/actions/result.js":
/*!*********************************!*\
  !*** ./store/actions/result.js ***!
  \*********************************/
/*! exports provided: saveResult, storeResult, deleteResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveResult", function() { return saveResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeResult", function() { return storeResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteResult", function() { return deleteResult; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./store/actions/actionTypes.js");

var saveResult = function saveResult(res) {
  // const updatedResult = res * 2;
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["STORE_RESULT"],
    result: res
  };
};
var storeResult = function storeResult(res) {
  return function (dispatch, getState) {
    setTimeout(function () {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 1000);
  };
};
var deleteResult = function deleteResult(resElId) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_RESULT"],
    resultElId: resElId
  };
};

/***/ })

})
//# sourceMappingURL=index.js.95fc9915f1c7ff601dd4.hot-update.js.map