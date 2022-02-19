import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './Components/Pages/About';
import Members from './Components/Pages/Members';
import Performances from './Components/Pages/Performances';
import Achievements from './Components/Pages/Achievements';
import Memories from './Components/Pages/Memories';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/members" element={<Members />}/>
      <Route path="/performances" element={<Performances />}/>
      <Route path="/achievements" element={<Achievements />}/>
    </Routes>
  </Router>
  , document.getElementById('root')
);