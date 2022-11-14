import { useState } from "react"
import btnImg from './static/img/Group.png'
function ToDoForm({addTask}){
  const [userInput, setUserInput] = useState('');
  function handleChange(e){
    setUserInput(e.target.value)
  }
  function handleClick(e){
    e.preventDefault()
    addTask(userInput)
  }
  function keyToDown(e){
    if(e.key === 'Enter'){
      handleClick(e)
    }
  }
  return(
    <div>
        <form className="todoForm">
        <button onClick={handleClick}><img src={btnImg} alt="добавить" /></button>
            <input 
            value={userInput}
            type="text"
            onChange={handleChange}
            placeholder = 'Новая задача' />
        </form>
    </div>
  )
}
export default ToDoForm