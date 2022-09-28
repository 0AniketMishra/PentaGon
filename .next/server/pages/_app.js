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

/***/ "./components/Common/Loading.tsx":
/*!***************************************!*\
  !*** ./components/Common/Loading.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Loading() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\Common\\\\Loading.tsx\",\n            lineNumber: 7,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\components\\\\Common\\\\Loading.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1vbi9Mb2FkaW5nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXlCO0FBRXpCLFNBQVNDLE9BQU8sR0FBRztJQUVqQixxQkFDRSw4REFBQ0MsS0FBRztrQkFDTCw0RUFBQ0MsSUFBRTtzQkFBQyxhQUFXOzs7OztnQkFBSzs7Ozs7WUFDYixDQUNQO0NBQ0Y7QUFFRCxpRUFBZUYsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRpbmcudHN4PzBkODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgPGgxPkxvYWRpbmcuLi4uPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxvYWRpbmciLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Common/Loading.tsx\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/storage */ \"firebase/compat/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDHPMbzUEnmBauY5_jUzMc3Ev06A2Djwrs\",\n    authDomain: \"pentagon-89b4a.firebaseapp.com\",\n    projectId: \"pentagon-89b4a\",\n    storageBucket: \"pentagon-89b4a.appspot.com\",\n    messagingSenderId: \"570154408830\",\n    appId: \"1:570154408830:web:6dce003a2c36bd6d94b12f\",\n    measurementId: \"G-L0NDCYS9WM\"\n};\nconst app = !firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apps.length ? firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeApp(firebaseConfig) : firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].app();\nconst db = app.firestore();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\nconst storage = app.storage();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFFVjtBQUNGO0FBQ1I7QUFDYjtBQUNpQjtBQUNZO0FBQ0Q7QUFHbEQsTUFBTUssY0FBYyxHQUFHO0lBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsZ0NBQWdDO0lBQzVDQyxTQUFTLEVBQUUsZ0JBQWdCO0lBQzNCQyxhQUFhLEVBQUUsNEJBQTRCO0lBQzNDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUNoQztBQUVELE1BQU1DLEdBQUcsR0FBRyxDQUFDWix1RUFBb0IsR0FBR0EseUVBQXNCLENBQUNJLGNBQWMsQ0FBQyxHQUFJSiwrREFBWSxFQUFFO0FBQzVGLE1BQU1lLEVBQUUsR0FBR0gsR0FBRyxDQUFDSSxTQUFTLEVBQUU7QUFDMUIsTUFBTUMsSUFBSSxHQUFHaEIsc0RBQU8sRUFBRTtBQUN0QixNQUFNaUIsUUFBUSxHQUFHLElBQUloQiw2REFBa0IsRUFBRTtBQUN6QyxNQUFNaUIsT0FBTyxHQUFHUCxHQUFHLENBQUNPLE9BQU8sRUFBRTtBQUdVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9hcHAnO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIlxyXG5pbXBvcnQgeyBnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQge2dldFN0b3JhZ2V9IGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9zdG9yYWdlJ1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURIUE1ielVFbm1CYXVZNV9qVXpNYzNFdjA2QTJEandyc1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJwZW50YWdvbi04OWI0YS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJwZW50YWdvbi04OWI0YVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJwZW50YWdvbi04OWI0YS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTcwMTU0NDA4ODMwXCIsXHJcbiAgICBhcHBJZDogXCIxOjU3MDE1NDQwODgzMDp3ZWI6NmRjZTAwM2EyYzM2YmQ2ZDk0YjEyZlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUwwTkRDWVM5V01cIlxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiAgZmlyZWJhc2UuYXBwKClcclxuY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKClcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKClcclxuY29uc3Qgc3RvcmFnZSA9IGFwcC5zdG9yYWdlKCk7XHJcblxyXG5cclxuZXhwb3J0IHtkYiAsIGF1dGgsIHByb3ZpZGVyLCBzdG9yYWdlIH07Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZSIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXBwcyIsImxlbmd0aCIsImRiIiwiZmlyZXN0b3JlIiwiYXV0aCIsInByb3ZpZGVyIiwic3RvcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/app-compat */ \"@firebase/app-compat\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login */ \"./pages/login.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Common_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/Loading */ \"./components/Common/Loading.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__, _login__WEBPACK_IMPORTED_MODULE_7__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_3__, _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__, _login__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (user) {\n            _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"users\").doc(user.uid).set({\n                email: user.email,\n                lastSeen: _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__[\"default\"].firestore.FieldValue.serverTimestamp(),\n                photoURL: user.photoURL,\n                username: user.displayName,\n                phone: user.phoneNumber,\n                uid: user.uid,\n                slug: user.displayName.replace(/\\s+/g, \"\").toLowerCase(),\n                lowerUsername: \"@\" + user.displayName.replace(/\\s+/g, \"\").toLowerCase()\n            }, {\n                merge: true\n            });\n        }\n    }, [\n        user\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Loading__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\_app.tsx\",\n        lineNumber: 29,\n        columnNumber: 23\n    }, this);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_8__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\_app.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\_app.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDeUI7QUFDbEI7QUFDTTtBQUNUO0FBQ0Q7QUFDTjtBQUNPO0FBQ2dCO0FBRW5ELFNBQVNRLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBTyxFQUFFO0lBQzVDLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1osdUVBQVksQ0FBQ0MsMkNBQUksQ0FBQztJQUMxQ0csZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSU8sSUFBSSxFQUFFO1lBQ1JULG9EQUFhLENBQUMsT0FBTyxDQUFDLENBQUNZLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDO2dCQUN2Q0MsS0FBSyxFQUFFTixJQUFJLENBQUNNLEtBQUs7Z0JBQ2pCQyxRQUFRLEVBQUVmLGlHQUE2QyxFQUFFO2dCQUN6RG1CLFFBQVEsRUFBRVgsSUFBSSxDQUFDVyxRQUFRO2dCQUN2QkMsUUFBUSxFQUFFWixJQUFJLENBQUNhLFdBQVc7Z0JBQzFCQyxLQUFLLEVBQUVkLElBQUksQ0FBQ2UsV0FBVztnQkFDdkJYLEdBQUcsRUFBRUosSUFBSSxDQUFDSSxHQUFHO2dCQUNiWSxJQUFJLEVBQUVoQixJQUFJLENBQUNhLFdBQVcsQ0FBQ0ksT0FBTyxTQUFTLEVBQUUsQ0FBQyxDQUFDQyxXQUFXLEVBQUU7Z0JBQ3hEQyxhQUFhLEVBQUUsR0FBRyxHQUFHbkIsSUFBSSxDQUFDYSxXQUFXLENBQUNJLE9BQU8sU0FBUyxFQUFFLENBQUMsQ0FBQ0MsV0FBVyxFQUFFO2FBQ3hFLEVBQ0M7Z0JBQUVFLEtBQUssRUFBRSxJQUFJO2FBQUUsQ0FBQyxDQUFDO1NBQ3BCO0tBQ0YsRUFBRTtRQUFDcEIsSUFBSTtLQUFDLENBQUM7SUFFVixJQUFJQyxPQUFPLEVBQUUscUJBQU8sOERBQUNMLGtFQUFPOzs7O1lBQUc7SUFDL0IsSUFBSSxDQUFDSSxJQUFJLEVBQUUscUJBQU8sOERBQUNOLDhDQUFLOzs7O1lBQUc7SUFFM0IscUJBRUUsOERBQUNDLDhDQUFVO2tCQUNULDRFQUFDRyxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2pCLENBQ2Q7Q0FDRjtBQUNELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCJcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAtY29tcGF0JztcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcclxuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIlxyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9Mb2FkaW5nJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XHJcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIGxhc3RTZWVuOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICBwaG90b1VSTDogdXNlci5waG90b1VSTCxcclxuICAgICAgICB1c2VybmFtZTogdXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICBwaG9uZTogdXNlci5waG9uZU51bWJlcixcclxuICAgICAgICB1aWQ6IHVzZXIudWlkLFxyXG4gICAgICAgIHNsdWc6IHVzZXIuZGlzcGxheU5hbWUucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICBsb3dlclVzZXJuYW1lOiAnQCcgKyB1c2VyLmRpc3BsYXlOYW1lLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKClcclxuICAgICAgfSxcclxuICAgICAgICB7IG1lcmdlOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSlcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZGluZyAvPlxyXG4gIGlmICghdXNlcikgcmV0dXJuIDxMb2dpbiAvPlxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxSZWNvaWxSb290PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1JlY29pbFJvb3Q+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJuYW1lcyI6WyJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwiZGIiLCJmaXJlYmFzZSIsInVzZUVmZmVjdCIsIkxvZ2luIiwiUmVjb2lsUm9vdCIsIkxvYWRpbmciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJsb2FkaW5nIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsImVtYWlsIiwibGFzdFNlZW4iLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwicGhvdG9VUkwiLCJ1c2VybmFtZSIsImRpc3BsYXlOYW1lIiwicGhvbmUiLCJwaG9uZU51bWJlciIsInNsdWciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJsb3dlclVzZXJuYW1lIiwibWVyZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction login() {\n    const signIn = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, _firebase__WEBPACK_IMPORTED_MODULE_3__.provider);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Login | PentaGon\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\login.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\login.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"p-2 font-bold text-white text-xl bg-purple-800 rounded-lg\",\n                    onClick: signIn,\n                    children: \"Sign In Using Google\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\login.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\login.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\login.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDSDtBQUNtQjtBQUNhO0FBR3pELFNBQVNNLEtBQUssR0FBRztJQUViLE1BQU1DLE1BQU0sR0FBRyxJQUFNO1FBQ2pCSCxzREFBTyxFQUFFLENBQUM7UUFDVkMsOERBQWUsQ0FBQ0gsMkNBQUksRUFBRUMsK0NBQVEsQ0FBQztLQUNsQztJQUNELHFCQUNJLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxFQUFFOzswQkFDYiw4REFBQ1Qsa0RBQUk7MEJBQ0QsNEVBQUNVLE9BQUs7OEJBQUMsa0JBQWdCOzs7Ozt3QkFBUTs7Ozs7b0JBQzVCOzBCQUNQLDhEQUFDRixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsRUFBRTswQkFDYiw0RUFBQ0UsUUFBTTtvQkFBQ0YsU0FBUyxFQUFDLDJEQUEyRDtvQkFBQ0csT0FBTyxFQUFFTCxNQUFNOzhCQUFFLHNCQUFvQjs7Ozs7d0JBQVM7Ozs7O29CQUMxSDs7Ozs7O1lBQ0osQ0FDVDtDQUNKO0FBRUQsaUVBQWVELEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi50c3g/NzI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IHsgZ2V0QXV0aCwgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbmF2Lm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBsb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBzaWduSW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QXV0aCgpO1xyXG4gICAgICAgIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TG9naW4gfCBQZW50YUdvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwLTIgZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC14bCBiZy1wdXJwbGUtODAwIHJvdW5kZWQtbGcnIG9uQ2xpY2s9e3NpZ25Jbn0+U2lnbiBJbiBVc2luZyBHb29nbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsImF1dGgiLCJwcm92aWRlciIsImdldEF1dGgiLCJzaWduSW5XaXRoUG9wdXAiLCJsb2dpbiIsInNpZ25JbiIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "@firebase/app-compat":
/*!***************************************!*\
  !*** external "@firebase/app-compat" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@firebase/app-compat");;

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

/***/ }),

/***/ "firebase/compat/storage":
/*!******************************************!*\
  !*** external "firebase/compat/storage" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/storage");;

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