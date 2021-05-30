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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list */ \"./src/project-list.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nconst controller = ((projectList, dom) => {\n    const _userProjectList = document.getElementById('user-project-list');\n    const _todoList = document.getElementById('todo-list');\n    const _addProjectBtn = document.getElementById('add-project');\n    const _addTodoBtn = document.getElementById('add-todo');\n    \n    const initEventListeners = () => {\n        _userProjectList.addEventListener('click', event => {\n            const target = event.target;\n            const id = +target.closest('li').dataset.id;\n\n            switch (target.dataset.action) {\n                case 'open':\n                    _openProject(id);\n                    break;\n                case 'edit':\n                    _editProject(id);\n                    break;\n                case 'delete':\n                    _deleteProject(id);\n                    break;\n            }\n        });\n\n        _todoList.addEventListener('click', event => {\n            const target = event.target;\n            const id = +target.closest('li').dataset.id;\n\n            switch (target.dataset.action) {\n                case 'edit':\n                    _editTodo(id);\n                    break;\n                case 'delete':\n                    _deleteTodo(id);\n                    break;\n            }\n        });\n\n        _addProjectBtn.addEventListener('click', () => {\n            const projectName = prompt('project name');\n            projectList.addProject(projectName);\n            dom.renderProjectList(projectList);\n        });\n\n        _addTodoBtn.addEventListener('click', () => {\n            const project = projectList.getActiveProject();\n            const todoDescr = prompt('descr');\n            project.addTodo(todoDescr);\n            dom.renderProject(project);\n        });\n    }\n\n    const _openProject = id => {\n        const project = projectList.getProjectById(id);\n        projectList.setActiveProject(project);\n        dom.renderProject(project);\n    }\n\n    const _editProject = id => {\n        const project = projectList.getProjectById(id);\n        const projectName = prompt('project name');\n        project.setName(projectName);\n        dom.renderProjectList(projectList);\n    }\n\n    const _deleteProject = id => {\n        projectList.deleteProject(id);\n        dom.renderProjectList(projectList);\n    }\n\n    const _editTodo = id => {\n        const project = projectList.getActiveProject();\n        const todo = project.getTodoById(id);\n        const descr = prompt('descr');\n        todo.setDescr(descr);\n        dom.renderProject(project);\n    }\n\n    const _deleteTodo = id => {\n        const project = projectList.getActiveProject();\n        project.deleteTodo(id);\n        dom.renderProject(project);\n    }\n\n    return {\n        initEventListeners\n    }\n})(_project_list__WEBPACK_IMPORTED_MODULE_0__.default, _dom__WEBPACK_IMPORTED_MODULE_1__.default);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);\n\n//# sourceURL=webpack://todo-list/./src/controller.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (() => {\n    const userProjectList = document.getElementById('user-project-list');\n    const todoList = document.getElementById('todo-list');\n\n    const renderProjectList = (projectList) => {\n        const projects = projectList.getProjects();\n        \n        _clearProjects();\n\n        projects.forEach(project => {\n            _renderProjectItem(project);\n        });\n    }\n\n    const _renderProjectItem = project => {\n        const li = document.createElement('li');\n        li.dataset.id = project.getId();\n\n        const projectBtn = document.createElement('button');\n        projectBtn.dataset.action = 'open';\n        projectBtn.textContent = project.getName();\n        li.appendChild(projectBtn);\n\n        //edit btn\n        const editBtn = document.createElement('button');\n        editBtn.dataset.action = 'edit';\n        editBtn.textContent = 'Edit';\n        li.appendChild(editBtn);\n\n        //delete btn\n        const delBtn = document.createElement('button');\n        delBtn.dataset.action = 'delete';\n        delBtn.textContent = 'Delete';\n        li.appendChild(delBtn);\n\n        userProjectList.appendChild(li);\n    }\n\n    const renderProject = project => {\n        _clearProject();\n\n        const todos = project.getTodos();\n        todos.forEach(todo => {\n            _renderTodo(todo);\n        });\n    }\n\n    const _renderTodo = todo => {\n        const li = document.createElement('li');\n        li.dataset.id = todo.getId();\n\n        const descr = document.createElement('span');\n        descr.textContent = todo.getDescr();\n\n        li.appendChild(descr);\n\n        //edit btn\n        const editBtn = document.createElement('button');\n        editBtn.dataset.action = 'edit';\n        editBtn.textContent = 'Edit';\n        li.appendChild(editBtn);\n\n        //delete btn\n        const delBtn = document.createElement('button');\n        delBtn.dataset.action = 'delete';\n        delBtn.textContent = 'Delete';\n        li.appendChild(delBtn);\n\n        todoList.appendChild(li);\n    }\n\n    const _clearProjects = () => {\n        userProjectList.textContent = '';\n    }\n\n    const _clearProject = () => {\n        todoList.textContent = '';\n    }\n\n    return {\n        renderProjectList,\n        renderProject\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst projectList = (() => {\n    const _projects = [];\n    let _projectId = 0;\n    let _activeProject;\n\n    const getProjects = () => {\n        return _projects;\n    }\n\n    const getActiveProject = () => {\n        return _activeProject;\n    }\n\n    const setActiveProject = project => {\n        _activeProject = project;\n    }\n\n    const getProjectById = id => {\n        return _projects.find(project => project.getId() === id);\n    }\n\n    const addProject = name => {\n        _projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.default)(++_projectId, name));\n    }\n\n    const deleteProject = id => {\n        _projects.splice(_projects.findIndex(project => project.getId() === id), 1);\n    }\n\n    return {\n        getProjects,\n        getActiveProject,\n        setActiveProject,\n        getProjectById,\n        addProject,\n        deleteProject\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);\n\n//# sourceURL=webpack://todo-list/./src/project-list.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nconst Project = (id, name) => {\n    let _id = id;\n    let _name = name;\n    let _todoId = 0;\n    const _todos = [];\n\n    const getId = () => {\n        return _id;\n    }\n\n    const getName = () => {\n        return _name;\n    }\n\n    const setName = name => {\n        _name = name;\n    }\n\n    const getTodos = () => {\n        return _todos;\n    }\n\n    const getTodoById = id => {\n        return _todos.find(todo => todo.getId() === id);\n    }\n\n    const addTodo = descr => {\n        _todos.push((0,_todo__WEBPACK_IMPORTED_MODULE_0__.default)(++_todoId, descr));\n    }\n\n    const deleteTodo = id => {\n        _todos.splice(_todos.findIndex(todo => todo.getId() === id), 1);\n    }\n\n    return {\n        getId,\n        getName,\n        setName,\n        getTodos,\n        getTodoById,\n        addTodo,\n        deleteTodo\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Todo = (id, descr, dueDate) => {\n    const _id = id;\n    let _descr = descr;\n    let _dueDate = dueDate;\n\n    const getId = () => {\n        return _id;\n    }\n\n    const getDescr = () => {\n        return _descr;\n    }\n\n    const setDescr = descr => {\n        _descr = descr;\n    }\n\n    const getDueDate = () => {\n        return _dueDate;\n    }\n\n    const setDueDate = (dueDate) => {\n        _dueDate = dueDate;\n    }\n\n    return {\n        getId,\n        getDescr,\n        setDescr,\n        getDueDate,\n        setDueDate\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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