import Project from './project'

const projectList = (() => {
    const _projects = [];
    let _projectId = 0;

    const getProjects = () => {
        return _projects;
    }

    const addProject = (name) => {
        _projects.push(Project(++_projectId, name));
    }

    return {
        getProjects,
        addProject
    }
})();

export default projectList