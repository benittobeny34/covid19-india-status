import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import StateList from './components/StateList';
import DayList from './components/DayList';


function App() {
  return (
    <div className="App">
        <Navbar/>
         <h2>Covid 19 Status india</h2>
         <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Route exact path="/home" component={Home}></Route>
         <Route exact path="/daywise" component={DayList}></Route>
         
         <Route exact path="/" component={StateList}></Route>
         
         </BrowserRouter>
       <div className="top">
         <a href="#navbar"><button type="button" className="btn btn-outline-warning">&#8593;</button></a>
       </div>
    </div>
  );
}

export default App;
