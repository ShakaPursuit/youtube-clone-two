
import { useState } from "react";
import { useRef } from 'react';



export default function ShowPage(){

    const [value, setValue] = useState("");
    const[commenter,SetCommenter]=useState('')
    const[empty,SetEmpty]=useState('')
    const[blank,SetBlank]=useState('')
    
    const inputReset =useRef(null);
    
    const [arr, setArr] = useState([]);
    
    const submitValue = () => {
      const todoItem = {
        todo: value,
        todo1:commenter
      };
      setArr((prevArr) => [...prevArr, todoItem]);
      inputReset.current.value = ""; // resets input field
    };
    // const deleteValue = () => {
    //   const todoItem = {
    //     todo: empty,
    //     todo1:blank
    //   };
    //   setArr(() => [todoItem]);
      
    // };
    return (
        <>

        <div> Show Page Video goes in this div</div>

<form>
      <div className="comment-section">
        <h4>Comment Section</h4><br></br>
        <label>Name</label><br></br>
        <input type="text" required ref={inputReset} onChange={(e) => setValue(e.target.value)} /><br></br>
        <label >Comment</label><br></br>
        <input required type="text" ref={inputReset} onChange={(e) => SetCommenter(e.target.value)} />
        <button onClick={submitValue}>Add Comment</button>
        {/* <button onClick={deleteValue}>Clear Notes</button> */}
        
        {arr.map(({ todo ,todo1}) => (
            <div key={Math.random()*1000}>{todo} {todo1}</div>
            ))}
            </div>
            </form>
      </>
    );
    }
    
        
    
    
    
    
    