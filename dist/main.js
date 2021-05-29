/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list */ \"./src/project-list.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nconst controller = ((projectList, dom) => {\n    const _addProjectBtn = document.getElementById('add-project');\n    \n    const initEventListeners = () => {\n        _addProjectBtn.addEventListener('click', () => {\n            const project = prompt('project name');\n            projectList.addProject(project);\n            dom.updateProjects(projectList, _editProject, _deleteProject);\n        });\n    }\n\n    const _editProject = id => {\n        const name = prompt('project name');\n        const project = projectList.getProjectById(id);\n        project.setName(name);\n        dom.updateProjects(projectList, _editProject, _deleteProject);\n    }\n\n    const _deleteProject = id => {\n        projectList.deleteProject(id);\n        dom.updateProjects(projectList, _editProject, _deleteProject);\n    }\n\n    return {\n        initEventListeners\n    }\n})(_project_list__WEBPACK_IMPORTED_MODULE_0__.default, _dom__WEBPACK_IMPORTED_MODULE_1__.default);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);\n\n//# sourceURL=webpack://todo-list/./src/controller.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (() => {\n    const userProjectList = document.getElementById('user-project-list');\n\n    const updateProjects = (projectList, edit, del) => {\n        const projects = projectList.getProjects();\n        \n        _clearProjects();\n\n        projects.forEach(project => {\n            userProjectList.appendChild(_createProject(project, edit, del));\n        });\n    }\n\n    const _createProject = (project, edit, del) => {\n        const li = document.createElement('li');\n        const projectBtn = document.createElement('button');\n        projectBtn.textContent = project.getName();\n        // add event listener to open project\n        li.appendChild(projectBtn);\n\n        //edit btn\n        const editBtn = document.createElement('button');\n        editBtn.textContent = 'Edit';\n        editBtn.addEventListener('click', () => edit(project.getId()));\n        li.appendChild(editBtn);\n\n        //delete btn\n        const delBtn = document.createElement('button');\n        delBtn.textContent = 'Delete';\n        delBtn.addEventListener('click', () => del(project.getId()));\n        li.appendChild(delBtn);\n\n        return li;\n    }\n\n    const _clearProjects = () => {\n        userProjectList.textContent = '';\n    }\n\n    return {\n        updateProjects\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\n_controller__WEBPACK_IMPORTED_MODULE_0__.default.initEventListeners();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project-list.js":
/*!*****************************!*\
  !*** ./src/project-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst projectList = (() => {\n    const _projects = [];\n    let _projectId = 0;\n\n    const getProjects = () => {\n        return _projects;\n    }\n\n    const getProjectById = id => {\n        return _projects.find(project => project.getId() === id);\n    }\n\n    const addProject = name => {\n        _projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.default)(++_projectId, name));\n    }\n\n    const deleteProject = id => {\n        _projects.splice(_projects.findIndex(project => project.getId() === id), 1);\n    }\n\n    return {\n        getProjects,\n        getProjectById,\n        addProject,\n        deleteProject\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);\n\n//# sourceURL=webpack://todo-list/./src/project-list.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Project = (id, name) => {\n    let _id = id;\n    let _name = name;\n    const _todos = [];\n\n    const getId = () => {\n        return _id;\n    }\n\n    const getName = () => {\n        return _name;\n    }\n\n    const setName = name => {\n        _name = name;\n    }\n\n    const getTodos = () => {\n        return _todos;\n    }\n\n    const addTodo = todo => {\n        _todos.push(todo);\n    }\n\n    const deleteTodo = id => {\n        _todos.splice(_todos.findIndex(todo => todo.getId() === id), 1);\n    }\n\n    return {\n        getId,\n        getName,\n        setName,\n        getTodos,\n        addTodo,\n        deleteTodo\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;