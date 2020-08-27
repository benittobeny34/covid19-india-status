import React, {Component } from 'react';
import SearchBox from './SearchBox';
import axios from 'axios';
import StateTally from './StateTally'
import '../App.css';

class StateList extends Component {
	state = {
		states:[]
	}
    componentDidMount() {
        axios.get('https://api.covid19india.org/data.json').then(res => {
            let data = res.data['statewise'];
            this.setState({states:data});
        })
    }
    render() {
        return ( 
        	<div className="statelist"> 
        	 <SearchBox value = "state" statelist = {this.state.states} />
             <h2>State Wise Tally</h2> 
             <div className='state'>
        	 {this.state.states.slice(1).map((state,index) => {
        	 	return <StateTally stats={state} key={index} />
        	 })}
             </div>
        	</div>);
    }
}
export default StateList;