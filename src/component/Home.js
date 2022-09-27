import React from "react";
import {useNavigate } from "react-router-dom";
import '../App.css';

const Home = () => {
  const navigate = useNavigate();
  function backToProf(e){
    e.preventDefault() ;
    navigate('/profile_search') ;
  } 
  return (
    <div className="App">
      <h1>Home</h1>
      <button onClick={backToProf}>BackProfileSearch</button>
    </div>
  );
};

export default Home;
