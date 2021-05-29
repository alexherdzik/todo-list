import Todo from './todo'

const Project = (id, name) => {
    let _id = id;
    let _name = name;
    let _todoId = 0;
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

    const addTodo = descr => {
        _todos.push(Todo(++_todoId, descr));
    }

    const deleteTodo = id => {
        _todos.splice(_todos.findIndex(todo => todo.getId() === id), 1);
    }

    return {
        getId,
        getName,
        setName,
        getTodos,
        addTodo,
        deleteTodo
    };
}

export default Project