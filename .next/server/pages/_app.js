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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC5nAu2KxeQrgRtzyv_sRKztIsmxf-yB7s\",\n    authDomain: \"twitter-ea342.firebaseapp.com\",\n    projectId: \"twitter-ea342\",\n    storageBucket: \"twitter-ea342.appspot.com\",\n    messagingSenderId: \"757557540101\",\n    appId: \"1:757557540101:web:f56bcc81493894979eb36c\"\n};\nconst app = !firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apps.length ? firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeApp(firebaseConfig) : firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].app();\nconst db = app.firestore();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBRVY7QUFDRjtBQUNSO0FBQ2I7QUFDaUI7QUFDWTtBQUduRCxNQUFNSSxjQUFjLEdBQUc7SUFDbkJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0NDLFNBQVMsRUFBRSxlQUFlO0lBQzFCQyxhQUFhLEVBQUUsMkJBQTJCO0lBQzFDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0NBQ3JEO0FBRUQsTUFBTUMsR0FBRyxHQUFHLENBQUNWLHVFQUFvQixHQUFHQSx5RUFBc0IsQ0FBQ0csY0FBYyxDQUFDLEdBQUlILCtEQUFZLEVBQUU7QUFDNUYsTUFBTWEsRUFBRSxHQUFHSCxHQUFHLENBQUNJLFNBQVMsRUFBRTtBQUMxQixNQUFNQyxJQUFJLEdBQUdkLHNEQUFPLEVBQUU7QUFDdEIsTUFBTWUsUUFBUSxHQUFHLElBQUlkLDZEQUFrQixFQUFFO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XHJcbmltcG9ydCBcImZpcmViYXNlL2NvbXBhdC9maXJlc3RvcmVcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiXHJcbmltcG9ydCB7IGdldEF1dGh9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QzVuQXUyS3hlUXJnUnR6eXZfc1JLenRJc214Zi15QjdzXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInR3aXR0ZXItZWEzNDIuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwidHdpdHRlci1lYTM0MlwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ0d2l0dGVyLWVhMzQyLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3NTc1NTc1NDAxMDFcIixcclxuICAgIGFwcElkOiBcIjE6NzU3NTU3NTQwMTAxOndlYjpmNTZiY2M4MTQ5Mzg5NDk3OWViMzZjXCJcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9ICFmaXJlYmFzZS5hcHBzLmxlbmd0aCA/IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogIGZpcmViYXNlLmFwcCgpXHJcbmNvbnN0IGRiID0gYXBwLmZpcmVzdG9yZSgpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpXHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpXHJcbmV4cG9ydCB7ZGIgLCBhdXRoLCBwcm92aWRlciB9OyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2UiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiZGIiLCJmaXJlc3RvcmUiLCJhdXRoIiwicHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_5__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (user) {\n            _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"users\").doc(user.uid).set({\n                email: user.email,\n                lastSeem: firebase_compat_app__WEBPACK_IMPORTED_MODULE_5__[\"default\"].firestore.FieldValue.serverTimestamp(),\n                photoURL: user.photoURL,\n                username: user.displayName,\n                phone: user.phoneNumber,\n                password: user.providerData\n            }, {\n                merge: true\n            });\n        }\n    }, [\n        user\n    ]);\n    // if (loading) return <Loading/>\n    // if(!user) return <Login/>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\pages\\\\_app.tsx\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRXdCO0FBQ2pCO0FBRUg7QUFDUztBQUUzQyxTQUFTSyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQU0sRUFBRTtJQUMzQyxNQUFNLENBQUNDLElBQUksRUFBR0MsT0FBTyxDQUFDLEdBQUdULHVFQUFZLENBQUNDLDJDQUFJLENBQUM7SUFDM0NFLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUdLLElBQUksRUFBRTtZQUNQTixvREFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDUyxHQUFHLENBQUNILElBQUksQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQztnQkFDdkNDLEtBQUssRUFBRU4sSUFBSSxDQUFDTSxLQUFLO2dCQUNqQkMsUUFBUSxFQUFFWCxnR0FBNkMsRUFBRTtnQkFDekRlLFFBQVEsRUFBRVgsSUFBSSxDQUFDVyxRQUFRO2dCQUN2QkMsUUFBUSxFQUFFWixJQUFJLENBQUNhLFdBQVc7Z0JBQzFCQyxLQUFLLEVBQUVkLElBQUksQ0FBQ2UsV0FBVztnQkFDdkJDLFFBQVEsRUFBR2hCLElBQUksQ0FBQ2lCLFlBQVk7YUFFN0IsRUFDRDtnQkFBQ0MsS0FBSyxFQUFFLElBQUk7YUFBQyxDQUFDLENBQUM7U0FDaEI7S0FDRixFQUFFO1FBQUNsQixJQUFJO0tBQUMsQ0FBQztJQUVWLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIscUJBQU8sOERBQUNGLFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztZQUFHO0NBQ25DO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCJcclxuaW1wb3J0IHthdXRoICwgZGJ9IGZyb20gJy4uL2ZpcmViYXNlJ1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfTogYW55KSB7XHJcbiAgY29uc3QgW3VzZXIgLCBsb2FkaW5nXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZih1c2VyKSB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLCBcclxuICAgICAgICBsYXN0U2VlbTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksIFxyXG4gICAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvVVJMLCBcclxuICAgICAgICB1c2VybmFtZTogdXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICBwaG9uZTogdXNlci5waG9uZU51bWJlciwgXHJcbiAgICAgICAgcGFzc3dvcmQgOiB1c2VyLnByb3ZpZGVyRGF0YVxyXG5cclxuICAgICAgfSwgXHJcbiAgICAgIHttZXJnZTogdHJ1ZX0pOyBcclxuICAgIH1cclxuICB9LCBbdXNlcl0pXHJcbiAgICBcclxuICAvLyBpZiAobG9hZGluZykgcmV0dXJuIDxMb2FkaW5nLz5cclxuICAvLyBpZighdXNlcikgcmV0dXJuIDxMb2dpbi8+XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsidXNlQXV0aFN0YXRlIiwiYXV0aCIsImRiIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJsb2FkaW5nIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsImVtYWlsIiwibGFzdFNlZW0iLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwicGhvdG9VUkwiLCJ1c2VybmFtZSIsImRpc3BsYXlOYW1lIiwicGhvbmUiLCJwaG9uZU51bWJlciIsInBhc3N3b3JkIiwicHJvdmlkZXJEYXRhIiwibWVyZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();