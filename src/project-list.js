import Project from './project'

const projectList = (() => {
    const _projects = [];
    let _projectId = 0;

    const getProjects = () => {
        return _projects;
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
        getProjects,
        getProjectById,
        addProject,
        deleteProject
    }
})();

export default projectList