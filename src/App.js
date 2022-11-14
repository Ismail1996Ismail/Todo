import './App.css';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import { useState } from 'react';
function App() {
  const [todo, setTodo] = useState([
    {id: Math.random().toString(36).substring(2, 9),task: 'Изучить JavaScript',complete: false},
    {id: Math.random().toString(36).substring(2, 9),task: 'Изучить паттерны проектирования',complete: false},
    {id: Math.random().toString(36).substring(2, 9),task: 'Redux (redux-observable, redux-saga)',complete: false}]);
  function addTask(userInput){
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false
      }
      setTodo([...todo, newItem])
    }
  }
  function removeTask(id){
    setTodo(todo.filter((i) => i.id !== id))
  }
  function handleToggle(id){
    setTodo([
      ...todo.map((item) => 
        item.id === id ? {...item, complete: !item.complete} : {...item}
      )
    ])
  }
  return (
    <div className="App">
      <header>
        <h1> Количество задач № {todo.length}</h1>
      </header>
      <main>
      {todo.map((todo) => {
        return(
          <ToDo           
          todo = {todo}          
          key = {todo.id}
          removeTask = {removeTask}
          handleToggle = {handleToggle}
          />
        )
      })}
      <ToDoForm addTask = {addTask}/>
      </main>
    </div>
  )
}

export default App;
