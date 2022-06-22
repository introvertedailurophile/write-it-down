import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App() {
  const [inputs, setInputs] = useState([]);

  function saveInput(newInput) {
    setInputs((prevList) => {
      return [...prevList, newInput];
    });
  }

  function deleteItem(id){
    setInputs((prevList)=>{
        return prevList.filter((input, index)=>{
            return index !== id
        })
    })

  }
  return (
    <div>
      <Header />
      <CreateArea save={saveInput} />
     { inputs.map( (input, index) => 
       { return <Note key={index} id={index} title={input.title} content={input.content} delete={deleteItem} />}
      )}

      <Footer />
    </div>
  );
}

export default App;
