import React, { useState } from 'react';
import { useRef } from "react";

function TodoForm(props) {

  const formInput = useRef(null);

  const [input, setInput] = useState("")
  console.log(input)

  let onSubmit = (event) => {
     event.preventDefault();
     if (input == null) {
      alert("Write your task, please !!!");
    }
    else{
    let newItemValue = input;
    props.addItem(newItemValue);
    formInput.current.value = null;
    setInput(null);
    }
  }

  return (
        <div>
            <form onSubmit={onSubmit} className="form-inline">
                <input type="text"  ref={formInput} onChange = {e => setInput(e.target.value)}  className="form-control" placeholder="Add your task..." />
                <button type="submit" className="btn btn-default">Add</button>
            </form>
        </div>
  );
}

export default TodoForm;