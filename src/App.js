// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterListing from "./Containers/CharacterListing";
import CharacterDetails from "./Containers/CharacterDetails";
import Navbar from "./Containers/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={< CharacterListing/>} />
        <Route path='/characters/:characterId' element={<CharacterDetails />} />
        <Route>404 Not Found!</Route>
        </Routes>
        </Router>
    </div>
    );
}
  
  export default App;
  
 