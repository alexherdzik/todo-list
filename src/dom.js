const dom = (() => {
    const userProjectList = document.getElementById('user-project-list');

    const updateProjects = (projectList, edit, del) => {
        const projects = projectList.getProjects();
        
        _clearProjects();

        projects.forEach(project => {
            userProjectList.appendChild(_createProject(project, edit, del));
        });
    }

    const _createProject = (project, edit, del) => {
        const li = document.createElement('li');
        const projectBtn = document.createElement('button');
        projectBtn.textContent = project.getName();
        // add event listener to open project
        li.appendChild(projectBtn);

        //edit btn
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => edit(project.getId()));
        li.appendChild(editBtn);

        //delete btn
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => del(project.getId()));
        li.appendChild(delBtn);

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