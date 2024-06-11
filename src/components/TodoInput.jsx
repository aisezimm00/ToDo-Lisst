import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosReducer';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="border-1">
      <input
        style={{ width: '87%', fontSize: '20px' }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id="todo-input"
      />
      <button className="button-1" onClick={handleAddTodo}>Add new task</button>
    </div>
  );
};

export default TodoInput;