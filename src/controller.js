import projectList from './project-list'
import dom from './dom'

const controller = ((projectList, dom) => {
    const _addProjectBtn = document.getElementById('add-project');
    
    const initEventListeners = () => {
        _addProjectBtn.addEventListener('click', () => {
            const project = prompt('project name');
            projectList.addProject(project);
            dom.updateProjects(projectList);
        });
    }

    return {
        initEventListeners
    }
})(projectList, dom);

export default controller