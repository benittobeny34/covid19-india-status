import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import StateList from './components/StateList';
import DayList from './components/DayList';


function App() {
  return (
    <div className="App">
        <Navbar/>
         <h2>Covid 19 Status india</h2>
         <BrowserRouter>
         <Route exact path="/" component={StateList}></Route>
         <Route path="/daywise" component={DayList}></Route>
         <Route  path="/home" component={Home}></Route>
         </BrowserRouter>
       <div className="top">
         <a href="#navbar"><button type="button" className="btn btn-outline-warning">&#8593;</button></a>
       </div>
    </div>
  );
}

export default App;
