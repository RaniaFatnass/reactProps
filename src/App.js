import React from 'react';
import './App.css';
import image from './images/image1.jpg';
import Componentprofile from './profile/Componentprofile';

function App() {
  const profile = {
    fullname: "Fatnassi Rania",
    bio: "Informatique",
    profession: "Ingenieur"
  };


  const handleName = name => {
    alert(name);
  };
 
  return (
    <div className="App">
    <Componentprofile profile={profile} handleName={handleName} >
    <img style={{width:"500px",height:"300px",  border: "1px solid black", marginTop: "50px"}}src={image}/>
    </componentprofile>
    </div>
  );
}

export default App;

