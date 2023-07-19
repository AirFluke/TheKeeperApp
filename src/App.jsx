import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {
  const[notes, setNotes] = useState([]);
  function addnewNote(newNote){
    setNotes((prevNotes)=>{
      return [...prevNotes, newNote]
    })
  }

  function deletesNote(id){
    setNotes((prevNotes)=>{
      prevNotes.filter((not, index)=>{
        return index !== id
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea
        onAdd = {addnewNote}
       />
       {notes.map((not, index) =>{
        return <Note key={index} id={index} title={not.title} content={not.content}  onDelete={deletesNote} />
       })}
      
      <Footer />
    </div>
  );
}

export default App;
