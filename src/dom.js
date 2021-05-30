const dom = (() => {
    const userProjectList = document.getElementById('user-project-list');
    const todoList = document.getElementById('todo-list');

    const renderProjectList = (projectList) => {
        const projects = projectList.getProjects();
        
        _clearProjects();

        projects.forEach(project => {
            _renderProjectItem(project);
        });
    }

    const _renderProjectItem = project => {
        const li = document.createElement('li');
        li.dataset.id = project.getId();

        const projectBtn = document.createElement('button');
        projectBtn.dataset.action = 'open';
        projectBtn.textContent = project.getName();
        li.appendChild(projectBtn);

        //edit btn
        const editBtn = document.createElement('button');
        editBtn.dataset.action = 'edit';
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);

        //delete btn
        const delBtn = document.createElement('button');
        delBtn.dataset.action = 'delete';
        delBtn.textContent = 'Delete';
        li.appendChild(delBtn);

        userProjectList.appendChild(li);
    }

    const renderProject = project => {
        _clearProject();

        const todos = project.getTodos();
        todos.forEach(todo => {
            _renderTodo(todo);
        });
    }

    const _renderTodo = todo => {
        const li = document.createElement('li');
        li.dataset.id = todo.getId();

        const descr = document.createElement('span');
        descr.textContent = todo.getDescr();

        li.appendChild(descr);

        //edit btn
        const editBtn = document.createElement('button');
        editBtn.dataset.action = 'edit';
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);

        //delete btn
        const delBtn = document.createElement('button');
        delBtn.dataset.action = 'delete';
        delBtn.textContent = 'Delete';
        li.appendChild(delBtn);

        todoList.appendChild(li);
    }

    const _clearProjects = () => {
        userProjectList.textContent = '';
    }

    const _clearProject = () => {
        todoList.textContent = '';
    }

    return {
        renderProjectList,
        renderProject
    }
})();

export default dom