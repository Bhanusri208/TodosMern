import React from 'react'
import { useState} from 'react'
import './PopUp.css'
import { RxCross1 } from "react-icons/rx";
import { API_URL } from '../apiUrl/apiUrl';

const PopUp = ({ setShowPopup, popupContent, setUpdateUI }) => {

    const [input, setInput] = useState(popupContent.text);

    const updateToDo = async () => {
      try {
        const res = await fetch(`${API_URL}/alltodos/updateTodo/${popupContent.id}`, {
          method: "PUT",
          body: JSON.stringify({ text: input }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error('Failed to update todo');
        await res.json();
        setUpdateUI(prevState => !prevState);
        setInput("");
        setShowPopup(false); 
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };
  

  return (
    <div className="backdrop">
    <div className="popup">
      <RxCross1 className="cross" onClick={() => setShowPopup(false)}/>
      <h4>Update ToDo</h4>

      <div className="popup__input_holder">
        <input
          type="text"
          placeholder="Update ToDo..."
          value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={updateToDo}>Update</button>
      </div>
    </div>
  </div>
  )
}

export default PopUp
