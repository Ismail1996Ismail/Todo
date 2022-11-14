function ToDo({todo, removeTask, handleToggle,}){
  return(
    <div key={todo.id} className="todo">
        <div className={todo.complete ? 'todo-item complete' : 'todo-item'}
         onClick = {() => handleToggle(todo.id)}>{todo.task}</div>
        <div className="todo-remove" onClick={() => removeTask(todo.id)}>X</div>
    </div>
  ) 
}
export default ToDo;