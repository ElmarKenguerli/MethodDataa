import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

//importing pages
import TweetsPage from "./Pages/TweetsPage";
import MoviePage from "./Pages/MoviePage";
import MusicPage from "./Pages/MusicPage";


/*
  React app. Provides navigation across pages via react-router-dom
*/
function App() {
  return (
    <Router>    
      <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/TweetsPage" element ={<TweetsPage/>}/>
          <Route path="/MoviePage" element={<MoviePage/>} /> 
          <Route path="/MusicPage" element={<MusicPage/>} />
          
      </Routes>
  </Router>
  );
}

export default App;
