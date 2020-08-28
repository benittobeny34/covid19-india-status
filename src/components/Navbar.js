import React, { Component } from 'react';

// import {Link,BrowserRouter} from 'react-router-dom';

class Navbar extends Component {


    render() {
        return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
  <a className="navbar-brand" href="/home" >Benitto</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">State-wise<span className="sr-only">(current)</span></a>
      </li>
       <li className="nav-item active">
        <a className="nav-link" href = "/daywise">Day-wise<span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>

        );
    }
}

export default Navbar;
