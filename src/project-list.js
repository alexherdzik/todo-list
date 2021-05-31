import Project from './project'

const projectList = (() => {
    const _inbox = Project(-1, 'inbox');
    const _projects = [];
    let _projectId = 0;
    let _activeProject = _inbox;

    const getInbox = () => {
        return _inbox;
    }

    const getProjects = () => {
        return _projects;
    }

    const getActiveProject = () => {
        return _activeProject;
    }

    const setActiveProject = project => {
        _activeProject = project;
    }

    const getProjectById = id => {
        return _projects.find(project => project.getId() === id);
    }

    const addProject = name => {
        _projects.push(Project(++_projectId, name));
    }

    const deleteProject = id => {
        _projects.splice(_projects.findIndex(project => project.getId() === id), 1);
    }

    return {
        getInbox,
        getProjects,
        getActiveProject,
        setActiveProject,
        getProjectById,
        addProject,
        deleteProject
    }
})();

export default projectList