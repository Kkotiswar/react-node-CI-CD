import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {

  const [userName,setUserName] = useState("");

  function nameHandler(event){
      setUserName(event.target.value);
  }

  const getNames = async () => {
    const responce = await axios.get("/names");
    console.log(responce);
    setUserName(responce.data);
  }

  useEffect(()=>{
    getNames();
  },[])

  return (
    <div>
      <h1>hello {userName}</h1>
      <input type="text" value={userName} placeholder="Enter Your name" onChange={nameHandler}></input>
    </div>
      
  );
}

export default App;
