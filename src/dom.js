const dom = (() => {
    const userProjectList = document.getElementById('user-project-list');

    const updateProjects = projectList => {
        const projects = projectList.getProjects();
        
        _clearProjects();

        projects.forEach(project => {
            userProjectList.appendChild(_createProject(project));
        });
    }

    const _createProject = project => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = project.getName();
        // add event listener
        li.appendChild(btn);

        return li;
    }

    const _clearProjects = () => {
        userProjectList.textContent = '';
    }

    return {
        updateProjects
    }
})();

export default dom