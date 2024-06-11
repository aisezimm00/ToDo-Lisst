import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, deleteDoneTodos, deleteAllTodos } from '../features/todos/todosReducer';

const TodoFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.todos.filter);

  return (
    <div className="div-3">
      <button className={`button ${filter === 'all' ? 'active' : ''}`} onClick={() => dispatch(setFilter('all'))}>all-"показывает все заданаия"</button>
      <button className={`button ${filter === 'done' ? 'active' : ''}`} onClick={() => dispatch(setFilter('done'))}>Done-только сделанные</button>
      <button className={`button ${filter === 'todo' ? 'active' : ''}`} onClick={() => dispatch(setFilter('todo'))}>Todo-что нужно сделать</button>
      <button className="last-b" onClick={() => dispatch(deleteDoneTodos())}>Delete done tasks</button>
      <button className="last-b" onClick={() => dispatch(deleteAllTodos())}>Delete all tasks</button>
    </div>
  );
};

export default TodoFilters;
