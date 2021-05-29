import projectList from './project-list'
import dom from './dom'

const controller = ((projectList, dom) => {
    const _addProjectBtn = document.getElementById('add-project');
    
    const initEventListeners = () => {
        _addProjectBtn.addEventListener('click', () => {
            const project = prompt('project name');
            projectList.addProject(project);
            dom.updateProjects(projectList, _editProject, _deleteProject);
        });
    }

    const _editProject = id => {
        const name = prompt('project name');
        const project = projectList.getProjectById(id);
        project.setName(name);
        dom.updateProjects(projectList, _editProject, _deleteProject);
    }

    const _deleteProject = id => {
        projectList.deleteProject(id);
        dom.updateProjects(projectList, _editProject, _deleteProject);
    }

    return {
        initEventListeners
    }
})(projectList, dom);

export default controller