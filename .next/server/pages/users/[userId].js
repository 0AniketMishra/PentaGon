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
exports.id = "pages/users/[userId]";
exports.ids = ["pages/users/[userId]"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/storage */ \"firebase/compat/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDHPMbzUEnmBauY5_jUzMc3Ev06A2Djwrs\",\n    authDomain: \"pentagon-89b4a.firebaseapp.com\",\n    projectId: \"pentagon-89b4a\",\n    storageBucket: \"pentagon-89b4a.appspot.com\",\n    messagingSenderId: \"570154408830\",\n    appId: \"1:570154408830:web:6dce003a2c36bd6d94b12f\",\n    measurementId: \"G-L0NDCYS9WM\"\n};\nconst app = !firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apps.length ? firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeApp(firebaseConfig) : firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].app();\nconst db = app.firestore();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\nconst storage = app.storage();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFFVjtBQUNGO0FBQ1I7QUFDYjtBQUNpQjtBQUNZO0FBQ0Q7QUFHbEQsTUFBTUssY0FBYyxHQUFHO0lBQ25CQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsZ0NBQWdDO0lBQzVDQyxTQUFTLEVBQUUsZ0JBQWdCO0lBQzNCQyxhQUFhLEVBQUUsNEJBQTRCO0lBQzNDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUNoQztBQUVELE1BQU1DLEdBQUcsR0FBRyxDQUFDWix1RUFBb0IsR0FBR0EseUVBQXNCLENBQUNJLGNBQWMsQ0FBQyxHQUFJSiwrREFBWSxFQUFFO0FBQzVGLE1BQU1lLEVBQUUsR0FBR0gsR0FBRyxDQUFDSSxTQUFTLEVBQUU7QUFDMUIsTUFBTUMsSUFBSSxHQUFHaEIsc0RBQU8sRUFBRTtBQUN0QixNQUFNaUIsUUFBUSxHQUFHLElBQUloQiw2REFBa0IsRUFBRTtBQUN6QyxNQUFNaUIsT0FBTyxHQUFHUCxHQUFHLENBQUNPLE9BQU8sRUFBRTtBQUdVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9hcHAnO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIlxyXG5pbXBvcnQgeyBnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQge2dldFN0b3JhZ2V9IGZyb20gJ2ZpcmViYXNlL2NvbXBhdC9zdG9yYWdlJ1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURIUE1ielVFbm1CYXVZNV9qVXpNYzNFdjA2QTJEandyc1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJwZW50YWdvbi04OWI0YS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJwZW50YWdvbi04OWI0YVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJwZW50YWdvbi04OWI0YS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTcwMTU0NDA4ODMwXCIsXHJcbiAgICBhcHBJZDogXCIxOjU3MDE1NDQwODgzMDp3ZWI6NmRjZTAwM2EyYzM2YmQ2ZDk0YjEyZlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUwwTkRDWVM5V01cIlxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gIWZpcmViYXNlLmFwcHMubGVuZ3RoID8gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiAgZmlyZWJhc2UuYXBwKClcclxuY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKClcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKClcclxuY29uc3Qgc3RvcmFnZSA9IGFwcC5zdG9yYWdlKCk7XHJcblxyXG5cclxuZXhwb3J0IHtkYiAsIGF1dGgsIHByb3ZpZGVyLCBzdG9yYWdlIH07Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZSIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXBwcyIsImxlbmd0aCIsImRiIiwiZmlyZXN0b3JlIiwiYXV0aCIsInByb3ZpZGVyIiwic3RvcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/users/[userId].tsx":
/*!**********************************!*\
  !*** ./pages/users/[userId].tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"@firebase/firestore\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction userId() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const userId = router.query.userId;\n    const userRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"cities\");\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchUser = async ()=>{\n            const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(userRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"uid\", \"==\", userId));\n            const querySnapshot = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);\n            querySnapshot.forEach((doc)=>{\n                // doc.data() is never undefined for query doc snapshots\n                console.log(doc.id, \" => \", doc.data());\n            });\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: userId\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[userId].tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[userId].tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANIKET\\\\Desktop\\\\Pentagon\\\\Pentagon-web\\\\pages\\\\users\\\\[userId].tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userId);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9bdXNlcklkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDcUM7QUFDSjtBQUMyRjtBQUM3RjtBQUNEO0FBRTlCLFNBQVNRLE1BQU0sR0FBRztJQUNkLE1BQU1DLE1BQU0sR0FBR1Qsc0RBQVMsRUFBRTtJQUMxQixNQUFNUSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ04sS0FBSyxDQUFDSyxNQUFNO0lBQ2xDLE1BQU1FLE9BQU8sR0FBR1IsK0RBQVUsQ0FBQ0QseUNBQUUsRUFBRSxRQUFRLENBQUM7SUFDeEMsTUFBTSxLQUFDVSxJQUFJLE1BQUVDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFcENELGdEQUFTLENBQUUsSUFBSztRQUNiLE1BQU1PLFNBQVMsR0FBRyxVQUFhO1lBQzNCLE1BQU1DLENBQUMsR0FBR1gsMERBQUssQ0FBQ08sT0FBTyxFQUFFTiwwREFBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUVJLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE1BQU1PLGFBQWEsR0FBRyxNQUFNViw0REFBTyxDQUFDUyxDQUFDLENBQUM7WUFDdENDLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLEdBQUcsR0FBSztnQkFDM0Isd0RBQXdEO2dCQUN4REMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csRUFBRSxFQUFFLE1BQU0sRUFBRUgsR0FBRyxDQUFDSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzNDLENBQUMsQ0FBQztTQUNOO0tBQ0gsQ0FBQztJQUtKLHFCQUVFLDhEQUFDQyxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBRWYsTUFBTTs7Ozs7b0JBQU07MEJBQ2pCLDhEQUFDZSxJQUFFOzs7O29CQUFNOzs7Ozs7WUFDUCxDQUNQO0NBQ0Y7QUFFRCxpRUFBZWYsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3VzZXJzL1t1c2VySWRdLnRzeD9kY2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2RifSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIlxyXG5pbXBvcnQgeyBvblNuYXBzaG90LCBjb2xsZWN0aW9uLCBhZGREb2MsIGRvYywgZGVsZXRlRG9jLCBzZXREb2MsIHF1ZXJ5LCBvcmRlckJ5LCB3aGVyZSwgZ2V0RG9jcyB9IGZyb20gJ0BmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiB1c2VySWQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHJvdXRlci5xdWVyeS51c2VySWQ7XHJcbiAgICBjb25zdCB1c2VyUmVmID0gY29sbGVjdGlvbihkYiwgXCJjaXRpZXNcIik7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoICgpPT4ge1xyXG4gICAgICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4gIHtcclxuICAgICAgICAgICBjb25zdCBxID0gcXVlcnkodXNlclJlZiwgd2hlcmUoXCJ1aWRcIiwgXCI9PVwiLCB1c2VySWQpKTtcclxuICAgICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcclxuICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAvLyBkb2MuZGF0YSgpIGlzIG5ldmVyIHVuZGVmaW5lZCBmb3IgcXVlcnkgZG9jIHNuYXBzaG90c1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgIH1cclxuICAgIH0pXHJcbiAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDE+e3VzZXJJZH08L2gxPlxyXG4gICAgICAgIDxoMT48L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VySWQiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZGIiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvY3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZXJJZCIsInJvdXRlciIsInVzZXJSZWYiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoVXNlciIsInEiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImRhdGEiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[userId].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[userId].tsx"));
module.exports = __webpack_exports__;

})();