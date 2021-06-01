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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list */ \"./src/project-list.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\nconst controller = ((projectList, dom) => {\r\n    const _inboxBtn = document.getElementById('inbox');\r\n    const _userProjectList = document.getElementById('user-project-list');\r\n    const _todoList = document.getElementById('todo-list');\r\n    const _addProjectBtn = document.getElementById('add-project');\r\n    const _addTodoBtn = document.getElementById('add-todo');\r\n    \r\n    const initEventListeners = () => {\r\n        _inboxBtn.addEventListener('click', () => {\r\n            _openInbox();\r\n        });\r\n\r\n        _userProjectList.addEventListener('click', event => {\r\n            const target = event.target;\r\n            const id = +target.closest('li').dataset.id;\r\n\r\n            switch (target.dataset.action) {\r\n                case 'open':\r\n                    _openProject(id);\r\n                    break;\r\n                case 'edit':\r\n                    _editProject(id);\r\n                    break;\r\n                case 'delete':\r\n                    _deleteProject(id);\r\n                    break;\r\n            }\r\n        });\r\n\r\n        _todoList.addEventListener('click', event => {\r\n            const target = event.target;\r\n            const id = +target.closest('li').dataset.id;\r\n\r\n            switch (target.dataset.action) {\r\n                case 'edit':\r\n                    _editTodo(id);\r\n                    break;\r\n                case 'delete':\r\n                    _deleteTodo(id);\r\n                    break;\r\n            }\r\n        });\r\n\r\n        _addProjectBtn.addEventListener('click', () => {\r\n            const projectName = prompt('project name');\r\n\r\n            if (projectName) {\r\n                projectList.addProject(projectName);\r\n                dom.renderProjectList(projectList);\r\n            }\r\n        });\r\n\r\n        _addTodoBtn.addEventListener('click', () => {\r\n            const project = projectList.getActiveProject();\r\n            const todoDescr = prompt('descr');\r\n            \r\n            if (todoDescr) {\r\n                project.addTodo(todoDescr);\r\n                dom.renderProject(project);\r\n            }\r\n        });\r\n    }\r\n\r\n    const _openInbox = () => {\r\n        const inbox = projectList.getInbox();\r\n        projectList.setActiveProject(inbox);\r\n        dom.renderProject(inbox);\r\n    }\r\n\r\n    const _openProject = id => {\r\n        const project = projectList.getProjectById(id);\r\n        projectList.setActiveProject(project);\r\n        dom.renderProject(project);\r\n    }\r\n\r\n    const _editProject = id => {\r\n        const project = projectList.getProjectById(id);\r\n        const projectName = prompt('project name');\r\n\r\n        if (projectName) {\r\n            project.setName(projectName);\r\n            dom.renderProjectList(projectList);\r\n        }\r\n    }\r\n\r\n    const _deleteProject = id => {\r\n        projectList.deleteProject(id);\r\n        dom.renderProjectList(projectList);\r\n    }\r\n\r\n    const _editTodo = id => {\r\n        const project = projectList.getActiveProject();\r\n        const todo = project.getTodoById(id);\r\n        const descr = prompt('descr');\r\n\r\n        if (descr) {\r\n            todo.setDescr(descr);\r\n            dom.renderProject(project);\r\n        }\r\n    }\r\n\r\n    const _deleteTodo = id => {\r\n        const project = projectList.getActiveProject();\r\n        project.deleteTodo(id);\r\n        dom.renderProject(project);\r\n    }\r\n\r\n    return {\r\n        initEventListeners\r\n    }\r\n})(_project_list__WEBPACK_IMPORTED_MODULE_0__.default, _dom__WEBPACK_IMPORTED_MODULE_1__.default);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);\n\n//# sourceURL=webpack://todo-list/./src/controller.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (() => {\r\n    const userProjectList = document.getElementById('user-project-list');\r\n    const todoList = document.getElementById('todo-list');\r\n\r\n    const renderProjectList = (projectList) => {\r\n        const projects = projectList.getProjects();\r\n        \r\n        _clearProjects();\r\n\r\n        projects.forEach(project => {\r\n            _renderProjectItem(project);\r\n        });\r\n    }\r\n\r\n    const _renderProjectItem = project => {\r\n        const li = document.createElement('li');\r\n        li.dataset.id = project.getId();\r\n\r\n        const projectBtn = document.createElement('button');\r\n        projectBtn.dataset.action = 'open';\r\n        projectBtn.textContent = project.getName();\r\n        li.appendChild(projectBtn);\r\n\r\n        //edit btn\r\n        const editBtn = document.createElement('button');\r\n        editBtn.dataset.action = 'edit';\r\n        editBtn.textContent = 'Edit';\r\n        li.appendChild(editBtn);\r\n\r\n        //delete btn\r\n        const delBtn = document.createElement('button');\r\n        delBtn.dataset.action = 'delete';\r\n        delBtn.textContent = 'Delete';\r\n        li.appendChild(delBtn);\r\n\r\n        userProjectList.appendChild(li);\r\n    }\r\n\r\n    const renderProject = project => {\r\n        _clearProject();\r\n\r\n        const todos = project.getTodos();\r\n        todos.forEach(todo => {\r\n            _renderTodo(todo);\r\n        });\r\n    }\r\n\r\n    const _renderTodo = todo => {\r\n        const li = document.createElement('li');\r\n        li.dataset.id = todo.getId();\r\n\r\n        const descr = document.createElement('span');\r\n        descr.textContent = todo.getDescr();\r\n\r\n        li.appendChild(descr);\r\n\r\n        //edit btn\r\n        const editBtn = document.createElement('button');\r\n        editBtn.dataset.action = 'edit';\r\n        editBtn.textContent = 'Edit';\r\n        li.appendChild(editBtn);\r\n\r\n        //delete btn\r\n        const delBtn = document.createElement('button');\r\n        delBtn.dataset.action = 'delete';\r\n        delBtn.textContent = 'Delete';\r\n        li.appendChild(delBtn);\r\n\r\n        todoList.appendChild(li);\r\n    }\r\n\r\n    const _clearProjects = () => {\r\n        userProjectList.textContent = '';\r\n    }\r\n\r\n    const _clearProject = () => {\r\n        todoList.textContent = '';\r\n    }\r\n\r\n    return {\r\n        renderProjectList,\r\n        renderProject\r\n    }\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\r\n\r\n_controller__WEBPACK_IMPORTED_MODULE_0__.default.initEventListeners();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project-list.js":
/*!*****************************!*\
  !*** ./src/project-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\nconst projectList = (() => {\r\n    const _inbox = (0,_project__WEBPACK_IMPORTED_MODULE_0__.default)(-1, 'inbox');\r\n    const _projects = [];\r\n    let _projectId = 0;\r\n    let _activeProject = _inbox;\r\n\r\n    const getInbox = () => {\r\n        return _inbox;\r\n    }\r\n\r\n    const getProjects = () => {\r\n        return _projects;\r\n    }\r\n\r\n    const getActiveProject = () => {\r\n        return _activeProject;\r\n    }\r\n\r\n    const setActiveProject = project => {\r\n        _activeProject = project;\r\n    }\r\n\r\n    const getProjectById = id => {\r\n        return _projects.find(project => project.getId() === id);\r\n    }\r\n\r\n    const addProject = name => {\r\n        _projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.default)(++_projectId, name));\r\n    }\r\n\r\n    const deleteProject = id => {\r\n        _projects.splice(_projects.findIndex(project => project.getId() === id), 1);\r\n    }\r\n\r\n    return {\r\n        getInbox,\r\n        getProjects,\r\n        getActiveProject,\r\n        setActiveProject,\r\n        getProjectById,\r\n        addProject,\r\n        deleteProject\r\n    }\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);\n\n//# sourceURL=webpack://todo-list/./src/project-list.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n\r\nconst Project = (id, name) => {\r\n    let _id = id;\r\n    let _name = name;\r\n    let _todoId = 0;\r\n    const _todos = [];\r\n\r\n    const getId = () => {\r\n        return _id;\r\n    }\r\n\r\n    const getName = () => {\r\n        return _name;\r\n    }\r\n\r\n    const setName = name => {\r\n        _name = name;\r\n    }\r\n\r\n    const getTodos = () => {\r\n        return _todos;\r\n    }\r\n\r\n    const getTodoById = id => {\r\n        return _todos.find(todo => todo.getId() === id);\r\n    }\r\n\r\n    const addTodo = descr => {\r\n        _todos.push((0,_todo__WEBPACK_IMPORTED_MODULE_0__.default)(++_todoId, descr));\r\n    }\r\n\r\n    const deleteTodo = id => {\r\n        _todos.splice(_todos.findIndex(todo => todo.getId() === id), 1);\r\n    }\r\n\r\n    return {\r\n        getId,\r\n        getName,\r\n        setName,\r\n        getTodos,\r\n        getTodoById,\r\n        addTodo,\r\n        deleteTodo\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Todo = (id, descr, dueDate) => {\r\n    const _id = id;\r\n    let _descr = descr;\r\n    let _dueDate = dueDate;\r\n\r\n    const getId = () => {\r\n        return _id;\r\n    }\r\n\r\n    const getDescr = () => {\r\n        return _descr;\r\n    }\r\n\r\n    const setDescr = descr => {\r\n        _descr = descr;\r\n    }\r\n\r\n    const getDueDate = () => {\r\n        return _dueDate;\r\n    }\r\n\r\n    const setDueDate = (dueDate) => {\r\n        _dueDate = dueDate;\r\n    }\r\n\r\n    return {\r\n        getId,\r\n        getDescr,\r\n        setDescr,\r\n        getDueDate,\r\n        setDueDate\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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