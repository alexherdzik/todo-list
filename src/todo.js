const Todo = (id, descr, dueDate) => {
  const _id = id;
  let _descr = descr;
  let _dueDate = dueDate;

  const getId = () => {
    return _id;
  };

  const getDescr = () => {
    return _descr;
  };

  const setDescr = (descr) => {
    _descr = descr;
  };

  const getDueDate = () => {
    return _dueDate;
  };

  const setDueDate = (dueDate) => {
    _dueDate = dueDate;
  };

  return {
    getId,
    getDescr,
    setDescr,
    getDueDate,
    setDueDate,
  };
};

export default Todo;
