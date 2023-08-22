
import { useState } from "react";
import { useRef } from 'react';
export default function ShowPage(){

    const [value, setValue] = useState("");
    const [commenter,SetCommenter]=useState('')
    const [arr, setArr] = useState([]);

    const inputReset =useRef(null);
      
    const submitValue = () => {
      if (value && commenter) {
      const todoItem = {
        todo: value,
        todo1:commenter
      };
      setArr((prevArr) => [...prevArr, todoItem]);
      inputReset.current.value = ""; // resets input field
    }
    };

    return (
        <>
<form>
      <div className="comment-section">
        <h4>Comment Section</h4><br></br>
        <label>Name</label><br></br>
        <input type="text" ref={inputReset} onChange={(e) => setValue(e.target.value)} required /><br></br>
        <label >Comment</label><br></br>
        <input type="text" ref={inputReset} onChange={(e) => SetCommenter(e.target.value)} required />
        <button onClick={submitValue}>Add Comment</button>
        
        {arr.map(({ todo ,todo1}) => (
            <div key={Math.random()*1000}>{todo} {todo1}</div>
            ))}
            </div>
            </form>
      </>
    );
    }
    
        
    
    
    
    
    