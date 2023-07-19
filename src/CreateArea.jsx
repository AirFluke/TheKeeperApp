import React, { useState } from "react";

function CreateArea(props) {
    const [addText, setaddText] = useState({
        title: "",
        content:""
    });

    function handleChange(event){
       const {value, name} = event.target
       setaddText((prevValue)=>{
        return {...prevValue, [name]:value}
       })
    }
    function addNote(event){
        setaddText({
            title: "",
            content:""
        })
        props.onAdd(addText);

        event.preventDefault();

    }
        
  return (

    <div>
      <form>
        <input onChange = {handleChange} value={addText.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={addText.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
