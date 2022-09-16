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
exports.id = "pages/users/[user]";
exports.ids = ["pages/users/[user]"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/storage */ \"firebase/compat/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDHPMbzUEnmBauY5_jUzMc3Ev06A2Djwrs\",\n    authDomain: \"pentagon-89b4a.firebaseapp.com\",\n    projectId: \"pentagon-89b4a\",\n    storageBucket: \"pentagon-89b4a.appspot.com\",\n    messagingSenderId: \"570154408830\",\n    appId: \"1:570154408830:web:6dce003a2c36bd6d94b12f\",\n    measurementId: \"G-L0NDCYS9WM\"\n};\nconst app = !firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apps.length ? firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeApp(firebaseConfig) : firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].app();\nconst db = app.firestore();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\nconst storage = app.storage();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFFVjtBQUNGO0FBQ1I7QUFDYjtBQUNpQjtBQUNZO0FBQ0Q7QUFHbEQsTUFBTUssY0FBYyxHQUFHO0lBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsZ0NBQWdDO0lBQzVDQyxTQUFTLEVBQUUsZ0JBQWdCO0lBQzNCQyxhQUFhLEVBQUUsNEJBQTRCO0lBQzNDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUNoQztBQUVELE1BQU1DLEdBQUcsR0FBRyxDQUFDWix1RUFBb0IsR0FBR0EseUVBQXNCLENBQUNJLGNBQWMsQ0FBQyxHQUFJSiwrREFBWSxFQUFFO0FBQzVGLE1BQU1lLEVBQUUsR0FBR0gsR0FBRyxDQUFDSSxTQUFTLEVBQUU7QUFDMUIsTUFBTUMsSUFBSSxHQUFHaEIsc0RBQU8sRUFBRTtBQUN0QixNQUFNaUIsUUFBUSxHQUFHLElBQUloQiw2REFBa0IsRUFBRTtBQUN6QyxNQUFNaUIsT0FBTyxHQUFHUCxHQUFHLENBQUNPLE9BQU8sRUFBRTtBQUdVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9hcHAnO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIlxyXG5pbXBvcnQgeyBnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQge2dldFN0b3JhZ2V9IGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9zdG9yYWdlJ1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURIUE1ielVFbm1CYXVZNV9qVXpNYzNFdjA2QTJEandyc1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJwZW50YWdvbi04OWI0YS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJwZW50YWdvbi04OWI0YVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJwZW50YWdvbi04OWI0YS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTcwMTU0NDA4ODMwXCIsXHJcbiAgICBhcHBJZDogXCIxOjU3MDE1NDQwODgzMDp3ZWI6NmRjZTAwM2EyYzM2YmQ2ZDk0YjEyZlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUwwTkRDWVM5V01cIlxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiAgZmlyZWJhc2UuYXBwKClcclxuY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKClcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKClcclxuY29uc3Qgc3RvcmFnZSA9IGFwcC5zdG9yYWdlKCk7XHJcblxyXG5cclxuZXhwb3J0IHtkYiAsIGF1dGgsIHByb3ZpZGVyLCBzdG9yYWdlIH07Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZSIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXBwcyIsImxlbmd0aCIsImRiIiwiZmlyZXN0b3JlIiwiYXV0aCIsInByb3ZpZGVyIiwic3RvcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/users/[user].tsx":
/*!********************************!*\
  !*** ./pages/users/[user].tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst User = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { userId  } = router.query;\n    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\");\n    const findingUser = async (e)=>{\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(userRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"uid\", \"==\", {\n            userId\n        }));\n        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);\n        querySnapshot.forEach((doc)=>{\n            console.log(doc.id, \" => \", doc.data());\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: userId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[user].tsx\",\n                lineNumber: 20,\n                columnNumber: 12\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: findingUser,\n                children: \"Hellooooo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[user].tsx\",\n                lineNumber: 21,\n                columnNumber: 12\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[user].tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n// const findingUser = async (e) => {\n//     const q = query(userRef, where(\"slug\", \"==\", \"elonmusk\"));\n//     const querySnapshot = await getDocs(q);\n//     querySnapshot.forEach((doc) => {\n//         // doc.data() is never undefined for query doc snapshots\n//         console.log(doc.id, \" => \", doc.data());\n//     });\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bdXNlcl0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNnQztBQUNuQztBQUVwQyxNQUFNTSxJQUFJLEdBQUksSUFBTTtJQUNoQixNQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFDUSxNQUFNLEdBQUMsR0FBR0QsTUFBTSxDQUFDTCxLQUFLO0lBQzdCLE1BQU1PLE9BQU8sR0FBR1IsOERBQVUsQ0FBQ0kseUNBQUUsRUFBRSxPQUFPLENBQUM7SUFHdkMsTUFBTUssV0FBVyxHQUFHLE9BQU9DLENBQUMsR0FBSztRQUM3QixNQUFNQyxDQUFDLEdBQUdWLHlEQUFLLENBQUNPLE9BQU8sRUFBRU4seURBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQUNLLE1BQU07U0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTUssYUFBYSxHQUFHLE1BQU1ULDJEQUFPLENBQUNRLENBQUMsQ0FBQztRQUN0Q0MsYUFBYSxDQUFDQyxPQUFPLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1lBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxFQUFFLEVBQUUsTUFBTSxFQUFFSCxHQUFHLENBQUNJLElBQUksRUFBRSxDQUFDLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0tBQ047SUFDRCxxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0QsOERBQUNDLEdBQUM7MEJBQUViLE1BQU07Ozs7O3lCQUFLOzBCQUNmLDhEQUFDYyxRQUFNO2dCQUFDQyxPQUFPLEVBQUViLFdBQVc7MEJBQUUsV0FBUzs7Ozs7eUJBQVM7Ozs7OztpQkFDN0MsQ0FDVDtDQUNKO0FBRUEscUNBQXFDO0FBQ2xDLGlFQUFpRTtBQUNqRSw4Q0FBOEM7QUFDOUMsdUNBQXVDO0FBQ3ZDLG1FQUFtRTtBQUNuRSxtREFBbUQ7QUFDbkQsVUFBVTtBQUNWLElBQUk7QUFFUixpRUFBZUosSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3VzZXJzL1t1c2VyXS50c3g/N2QxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBnZXREb2NzIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IFVzZXIgPSAgKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHt1c2VySWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCB1c2VyUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGZpbmRpbmdVc2VyID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBxID0gcXVlcnkodXNlclJlZiwgd2hlcmUoXCJ1aWRcIiwgXCI9PVwiLCB7dXNlcklkfSkpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xyXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPHA+e3VzZXJJZH08L3A+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmaW5kaW5nVXNlcn0+SGVsbG9vb29vPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbiAvLyBjb25zdCBmaW5kaW5nVXNlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgcSA9IHF1ZXJ5KHVzZXJSZWYsIHdoZXJlKFwic2x1Z1wiLCBcIj09XCIsIFwiZWxvbm11c2tcIikpO1xyXG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xyXG4gICAgLy8gICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8vIGRvYy5kYXRhKCkgaXMgbmV2ZXIgdW5kZWZpbmVkIGZvciBxdWVyeSBkb2Mgc25hcHNob3RzXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvY3MiLCJkYiIsIlVzZXIiLCJyb3V0ZXIiLCJ1c2VySWQiLCJ1c2VyUmVmIiwiZmluZGluZ1VzZXIiLCJlIiwicSIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGF0YSIsImRpdiIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[user].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/firestore");;

/***/ }),

/***/ "firebase/compat/storage":
/*!******************************************!*\
  !*** external "firebase/compat/storage" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/storage");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[user].tsx"));
module.exports = __webpack_exports__;

})();