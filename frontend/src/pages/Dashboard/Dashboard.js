import React from 'react'
import { useState, useEffect} from 'react'
import './Dashboard.css'
import { API_URL } from '../apiUrl/apiUrl';
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import PopUp from '../PopUp/PopUp';

const Dashboard = () => {

  const [todo, setTodo] = useState([])
  const [addTask,setAddTask] = useState("")
  const [updateUI,setUpdateUI] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});


  useEffect(() => {
    async function getTodos() {
      const res = await fetch(`${API_URL}/alltodos/getTodo`);
      const todos = await res.json();
      setTodo(todos);
    }
    getTodos();
  }, [updateUI]);
  
  const addNewTask= async () => {
    if (!addTask.trim()) return;
      const res = await fetch(`${API_URL}/alltodos/todos`, {
        method: "POST",
        body: JSON.stringify({text:addTask}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newTodo = await res.json();

      
      setTodo([...todo, newTodo]);
      setUpdateUI((prevState)=>!prevState)
      setAddTask("")

  }

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`${API_URL}/alltodos/deleteTodo/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error('Failed to delete todo');
      await res.json();
      setUpdateUI(prevState => !prevState);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };


  const updateToDo = (text,id) => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className='todo-bg'>
      <div className="add-todo-cont">
        <input type="text" placeholder='What needs to be done?' className='input-box' value={addTask}  onChange={(e) =>setAddTask(e.target.value)} required/>
        <button className='add-btn' onClick={addNewTask}>Add</button>    
      </div>
      <div>
      <ul>
        {
          todo.map(eachTodo => {
            return ( 
              <li className='todo-list' key={eachTodo._id} id={eachTodo._id}>           
                <div className='todo-cont'>
                  <div className='each-todo-cont'>
                    <h5>{eachTodo.text}</h5>
                  <div className='icons'>
                  <AiOutlineEdit className='edit-icon' onClick={() => updateToDo(eachTodo.text, eachTodo._id)} />
                  <MdDeleteOutline className='delete-icon'  onClick={() => deleteTodo(eachTodo._id)}/>
                  </div>
                  </div>
                </div> 
                </li>          
            )
          })
        }
        </ul>
      </div>
      {showPopup && (
        <PopUp
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </div>
  )
}

export default Dashboard
