import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

const App = () => {
  return (
    <div className="div">
      <h3 className="text-1">TodoInput</h3>
      <TodoInput />
      <h3 className="text-1">TodoList</h3>
      <TodoFilters />
      <TodoList />
    </div>
  );
};

export default App;
