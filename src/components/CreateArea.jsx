import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [inputText, setInputText] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function saveNote(event) {
    event.preventDefault({ passive: true });
    props.save(inputText);
    setInputText({ title: "", content: "" });
  }

  return (
    <form onSubmit={saveNote}>
      <input
        onChange={handleChange}
        type="text"
        name="title"
        placeholder="Title"
        value={inputText.title}
      />
      <textarea
        onChange={handleChange}
        name="content"
        rows="5"
        placeholder="Write it down..."
        value={inputText.content}
      />
      <Zoom in={true}>
      <Fab className="button" aria-label="add" type="submit">
        <AddIcon />
      </Fab></Zoom>
       
     
    </form>
  );
}

export default CreateArea;
