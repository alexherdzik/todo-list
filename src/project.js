const Project = (id, name) => {
    let _id = id;
    let _name = name;
    const _todos = [];

    const getId = () => {
        return _id;
    }

    const getName = () => {
        return _name;
    }

    const setName = name => {
        _name = name;
    }

    const getTodos = () => {
        return _todos;
    }

    const addTodo = todo => {
        _todos.push(todo);
    }

    const deleteTodo = id => {
        _todos.splice(_todos.findIndex(todo => todo.getId() === id), 1);
    }

    return {
        getName,
        setName,
        getTodos,
        addTodo,
        deleteTodo
    };
}

export default Project