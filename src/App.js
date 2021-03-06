import React, { useEffect } from "react";
import TodoList from "./components/Todo/TodoList";
import Context from "./context";
import Loader from "./components/Loader";
import Modal from "./components/modal/Modal";

const AddTodo = React.lazy(() => import('./components/Todo/AddTodo'))

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 500)

      })
  }, [])

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

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complited: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React ToDo</h1>

        <Modal />

        <React.Suspense>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : loading ? null : <p>Задач пока нет</p>}

      </div>
    </Context.Provider>

  );
}

export default App;
