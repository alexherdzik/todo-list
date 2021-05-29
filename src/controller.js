import projectList from './project-list'
import dom from './dom'

const controller = ((projectList, dom) => {
    const _userProjectList = document.getElementById('user-project-list');
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

        _addProjectBtn.addEventListener('click', () => {
            const projectName = prompt('project name');
            projectList.addProject(projectName);
            dom.updateProjects(projectList);
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
        dom.updateProjects(projectList);
    }

    const _deleteProject = id => {
        projectList.deleteProject(id);
        dom.updateProjects(projectList);
    }

    return {
        initEventListeners
    }
})(projectList, dom);

export default controller