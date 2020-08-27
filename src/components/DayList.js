import React,{Component} from 'react';
import SearchBox from './SearchBox';
import Day from './Day';
import axios from 'axios';
class DayList extends Component {
	state = {
		days:[],
		particularDate:null,
	}
	 
    componentDidMount() {
        axios.get('https://api.covid19india.org/data.json').then(res => {
            let data = res.data['cases_time_series'];
            this.setState({days:data});
        });
    }
  
    render() {
        return ( < div className="statelist" >
       < SearchBox value = "day" days={this.state.days}/>
       <h2>Day Wise Tally</h2>
       <div className='state'>
         {this.state.days.reverse().map((day,index)=>{
         	return <Day stats={day} key={index} />
         })}
         </div>
          </div> );
    }
}
export default DayList;