import React from 'react';
import TodoList from './components/Todo/TodoList';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: 'Купить хлеб' },
    { id: 2, complited: false, title: 'Купить масло' },
    { id: 3, complited: false, title: 'Купить молоко' }
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.complited = !todo.complited
        }
        return todo
      })
    )
  }


  return (
    <div className="wrapper">
      <h1>React ToDo</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
