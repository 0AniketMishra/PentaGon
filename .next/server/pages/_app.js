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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth?f21e\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDHPMbzUEnmBauY5_jUzMc3Ev06A2Djwrs\",\n    authDomain: \"pentagon-89b4a.firebaseapp.com\",\n    projectId: \"pentagon-89b4a\",\n    storageBucket: \"pentagon-89b4a.appspot.com\",\n    messagingSenderId: \"570154408830\",\n    appId: \"1:570154408830:web:6dce003a2c36bd6d94b12f\",\n    measurementId: \"G-L0NDCYS9WM\"\n};\nconst app = !firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apps.length ? firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeApp(firebaseConfig) : firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].app();\nconst db = app.firestore();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBRVY7QUFDRjtBQUNSO0FBQ2I7QUFDaUI7QUFDWTtBQUduRCxNQUFNSSxjQUFjLEdBQUc7SUFDbkJDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSxnQ0FBZ0M7SUFDNUNDLFNBQVMsRUFBRSxnQkFBZ0I7SUFDM0JDLGFBQWEsRUFBRSw0QkFBNEI7SUFDM0NDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxjQUFjO0NBQ2hDO0FBRUQsTUFBTUMsR0FBRyxHQUFHLENBQUNYLHVFQUFvQixHQUFHQSx5RUFBc0IsQ0FBQ0csY0FBYyxDQUFDLEdBQUlILCtEQUFZLEVBQUU7QUFDNUYsTUFBTWMsRUFBRSxHQUFHSCxHQUFHLENBQUNJLFNBQVMsRUFBRTtBQUMxQixNQUFNQyxJQUFJLEdBQUdmLHNEQUFPLEVBQUU7QUFDdEIsTUFBTWdCLFFBQVEsR0FBRyxJQUFJZiw2REFBa0IsRUFBRTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9hcHAnO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIlxyXG5pbXBvcnQgeyBnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURIUE1ielVFbm1CYXVZNV9qVXpNYzNFdjA2QTJEandyc1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJwZW50YWdvbi04OWI0YS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJwZW50YWdvbi04OWI0YVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJwZW50YWdvbi04OWI0YS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTcwMTU0NDA4ODMwXCIsXHJcbiAgICBhcHBJZDogXCIxOjU3MDE1NDQwODgzMDp3ZWI6NmRjZTAwM2EyYzM2YmQ2ZDk0YjEyZlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUwwTkRDWVM5V01cIlxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiAgZmlyZWJhc2UuYXBwKClcclxuY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKClcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKClcclxuZXhwb3J0IHtkYiAsIGF1dGgsIHByb3ZpZGVyIH07Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZSIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhcHBzIiwibGVuZ3RoIiwiZGIiLCJmaXJlc3RvcmUiLCJhdXRoIiwicHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/app-compat */ \"@firebase/app-compat\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login */ \"./pages/login.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__, _login__WEBPACK_IMPORTED_MODULE_7__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_3__, _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_5__, _login__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (user) {\n            _firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"users\").doc(user.uid).set({\n                email: user.email,\n                lastSeen: _firebase_app_compat__WEBPACK_IMPORTED_MODULE_4__[\"default\"].firestore.FieldValue.serverTimestamp(),\n                photoURL: user.photoURL,\n                username: user.displayName,\n                phone: user.phoneNumber\n            }, {\n                merge: true\n            });\n        }\n    }, [\n        user\n    ]);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\pages\\\\_app.tsx\",\n        lineNumber: 29,\n        columnNumber: 20\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\pages\\\\_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFd0I7QUFDakI7QUFDTztBQUNUO0FBQ0Q7QUFDTjtBQUc1QixTQUFTTSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQU0sRUFBRTtJQUMzQyxNQUFNLENBQUNDLElBQUksRUFBR0MsT0FBTyxDQUFDLEdBQUdWLHVFQUFZLENBQUNDLDJDQUFJLENBQUM7SUFDM0NHLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUdLLElBQUksRUFBRTtZQUNQUCxvREFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDVSxHQUFHLENBQUNILElBQUksQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQztnQkFDdkNDLEtBQUssRUFBRU4sSUFBSSxDQUFDTSxLQUFLO2dCQUNqQkMsUUFBUSxFQUFFYixpR0FBNkMsRUFBRTtnQkFDekRpQixRQUFRLEVBQUVYLElBQUksQ0FBQ1csUUFBUTtnQkFDdkJDLFFBQVEsRUFBRVosSUFBSSxDQUFDYSxXQUFXO2dCQUMxQkMsS0FBSyxFQUFFZCxJQUFJLENBQUNlLFdBQVc7YUFHeEIsRUFDRDtnQkFBQ0MsS0FBSyxFQUFFLElBQUk7YUFBQyxDQUFDLENBQUM7U0FDaEI7S0FDRixFQUFFO1FBQUNoQixJQUFJO0tBQUMsQ0FBQztJQUdWLElBQUcsQ0FBQ0EsSUFBSSxFQUFFLHFCQUFPLDhEQUFDSiw4Q0FBSzs7OztZQUFFO0lBQ3pCLHFCQUFPLDhEQUFDRSxTQUFTO1FBQUUsR0FBR0MsU0FBUzs7Ozs7WUFBRztDQUNuQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXHJcbmltcG9ydCB7YXV0aCAsIGRifSBmcm9tICcuLi9maXJlYmFzZSdcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAtY29tcGF0JztcclxuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfTogYW55KSB7XHJcbiAgY29uc3QgW3VzZXIgLCBsb2FkaW5nXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZih1c2VyKSB7XHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5zZXQoe1xyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLCBcclxuICAgICAgICBsYXN0U2VlbjogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksIFxyXG4gICAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvVVJMLCBcclxuICAgICAgICB1c2VybmFtZTogdXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICBwaG9uZTogdXNlci5waG9uZU51bWJlciwgXHJcbiAgICBcclxuXHJcbiAgICAgIH0sIFxyXG4gICAgICB7bWVyZ2U6IHRydWV9KTsgXHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKVxyXG4gICAgXHJcbiAgXHJcbiAgaWYoIXVzZXIpIHJldHVybiA8TG9naW4vPlxyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbInVzZUF1dGhTdGF0ZSIsImF1dGgiLCJkYiIsImZpcmViYXNlIiwidXNlRWZmZWN0IiwiTG9naW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJsb2FkaW5nIiwiY29sbGVjdGlvbiIsImRvYyIsInVpZCIsInNldCIsImVtYWlsIiwibGFzdFNlZW4iLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwicGhvdG9VUkwiLCJ1c2VybmFtZSIsImRpc3BsYXlOYW1lIiwicGhvbmUiLCJwaG9uZU51bWJlciIsIm1lcmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth?0d1f\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n_firebase__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction login() {\n    const signIn = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, _firebase__WEBPACK_IMPORTED_MODULE_3__.provider);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Login | PentaGon\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\pages\\\\login.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\pages\\\\login.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"p-2 font-bold text-white text-xl bg-purple-800 rounded-lg\",\n                    onClick: signIn,\n                    children: \"Sign In Using Google\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\pages\\\\login.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\pages\\\\login.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Twitter\\\\pages\\\\login.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ0g7QUFDbUI7QUFDWTtBQUd4RCxTQUFTTSxLQUFLLEdBQUc7SUFFYixNQUFNQyxNQUFNLEdBQUcsSUFBTTtRQUNqQkgsc0RBQU8sRUFBRSxDQUFDO1FBQ1ZDLDhEQUFlLENBQUNILDJDQUFJLEVBQUVDLCtDQUFRLENBQUM7S0FDbEM7SUFDRCxxQkFDSSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUMsRUFBRTs7MEJBQ2IsOERBQUNULGtEQUFJOzBCQUNELDRFQUFDVSxPQUFLOzhCQUFDLGtCQUFnQjs7Ozs7d0JBQVE7Ozs7O29CQUM1QjswQkFDUCw4REFBQ0YsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEVBQUU7MEJBR2IsNEVBQUNFLFFBQU07b0JBQUNGLFNBQVMsRUFBQywyREFBMkQ7b0JBQUNHLE9BQU8sRUFBRUwsTUFBTTs4QkFBRSxzQkFBb0I7Ozs7O3dCQUFTOzs7OztvQkFFMUg7Ozs7OztZQUNKLENBQ1Q7Q0FDSjtBQUVELGlFQUFlRCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4udHN4PzcyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcbmltcG9ydCB7IGdldEF1dGgsIHNpZ25JbldpdGhQb3B1cH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbmF2Lm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBsb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBzaWduSW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0QXV0aCgpO1xyXG4gICAgICAgIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TG9naW4gfCBQZW50YUdvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3AtMiBmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LXhsIGJnLXB1cnBsZS04MDAgcm91bmRlZC1sZycgb25DbGljaz17c2lnbklufT5TaWduIEluIFVzaW5nIEdvb2dsZTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsImF1dGgiLCJwcm92aWRlciIsImdldEF1dGgiLCJzaWduSW5XaXRoUG9wdXAiLCJsb2dpbiIsInNpZ25JbiIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "firebase/auth?0d1f":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

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

/***/ "firebase/auth?f21e":
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