import projectList from './project-list'
import dom from './dom'

const controller = ((projectList, dom) => {
    const _userProjectList = document.getElementById('user-project-list');
    const _todoList = document.getElementById('todo-list');
    const _addProjectBtn = document.getElementById('add-project');
    const _addTodoBtn = document.getElementById('add-todo');
    
    const initEventListeners = () => {
        _userProjectList.addEventListener('click', event => {
            const target = event.target;
            const id = +target.closest('li').dataset.id;

            switch (target.dataset.action) {
                case 'open':
                    _openProject(id);
                    break;
                case 'edit':
                    _editProject(id);
                    break;
                case 'delete':
                    _deleteProject(id);
                    break;
            }
        });

        _todoList.addEventListener('click', event => {
            const target = event.target;
            const id = +target.closest('li').dataset.id;

            switch (target.dataset.action) {
                case 'edit':
                    _editTodo(id);
                    break;
                case 'delete':
                    _deleteTodo(id);
                    break;
            }
        });

        _addProjectBtn.addEventListener('click', () => {
            const projectName = prompt('project name');
            projectList.addProject(projectName);
            dom.renderProjectList(projectList);
        });

        _addTodoBtn.addEventListener('click', () => {
            const project = projectList.getActiveProject();
            const todoDescr = prompt('descr');
            project.addTodo(todoDescr);
            dom.renderProject(project);
        });
    }

    const _openProject = id => {
        const project = projectList.getProjectById(id);
        projectList.setActiveProject(project);
        dom.renderProject(project);
    }

    const _editProject = id => {
        const project = projectList.getProjectById(id);
        const projectName = prompt('project name');
        project.setName(projectName);
        dom.renderProjectList(projectList);
    }

    const _deleteProject = id => {
        projectList.deleteProject(id);
        dom.renderProjectList(projectList);
    }

    const _editTodo = id => {
        const project = projectList.getActiveProject();
        const todo = project.getTodoById(id);
        const descr = prompt('descr');
        todo.setDescr(descr);
        dom.renderProject(project);
    }

    const _deleteTodo = id => {

    }

    return {
        initEventListeners
    }
})(projectList, dom);

export default controller