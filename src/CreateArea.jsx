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
    const[clicked, setClicked] = useState(false);

    function showTitle(){
      setClicked(true)
    }


        
  return (

    <div>
      <form>
        <input onClick={showTitle} onChange = {handleChange} value={addText.title} name="title" placeholder="Title" />
        
        
        {clicked ?  <textarea onChange={handleChange} value={addText.content} name="content" placeholder="Take a note..." rows= {clicked ? "3" : "1"} /> : null}
       

        
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
