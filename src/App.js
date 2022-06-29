import React from 'react';
import TodoList from './components/Todo/TodoList';
import Context from './context';

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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React ToDo</h1>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>Задач пока нет</p>}

      </div>
    </Context.Provider>

  );
}

export default App;
