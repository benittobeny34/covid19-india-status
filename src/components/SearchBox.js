import React, { Component } from 'react';
import ModernDatePicker from 'react-modern-datepicker';
import FilteredDay from './FilteredDay';
import FilteredState from './FilteredState';
class SearchBox extends Component {

	state  = {
		date:null,
		region:"TT",
	}



   handleChange(e){
      this.setState({region:e.target.value})
  }
    render() {
    	let input = this.props.value === 'day' ? (<div><ModernDatePicker
	         date={this.state.date}
	      format={'MM-DD-YYYY'}
	      maxDate={new Date()}
	      minDate={"01-31-2020"}
	      id="search"
	      placeholder={'pick a date to see count '}
	      onChange={date => {this.setState({
 		  date:date,
 	      })}}
      />
      <FilteredDay day={this.state.date} days={this.props.days}/>

      </div>) :(
         <div>
        <select className="search" defaultValue={this.state.region} onChange = {(e) => this.handleChange(e)}>
         <option value="TT">Total</option>
         <option value="MH">Maharashtra</option>
         <option value="TN">Tamil Nadu</option>
         <option value="AP">Andhra Pradesh</option>
         <option value="KA">Karnataka</option>
         <option value="DL">Delhi</option>
         <option value="UP">Uttar Pradesh</option>
         <option value="WB">West Bengal</option>
         <option value="BR">Bihar</option>
         <option value="TG">Telangana</option>
         <option value="GJ">Gujarat</option>
         <option value="AS">Assam</option>
         <option value="RJ">Rajasthan</option>
         <option value="OR">Odisha</option>
         <option value="HR">Haryana</option>
         <option value="MP">Madhya Pradesh</option>
         <option value="KL">Kerala</option>
         <option value="PB">Punjab</option>
         <option value="JK">Jammu and Kashmir</option>
         <option value="JH">Jharkhand</option>
         <option value="CT">Chhattisgarh</option>
         <option value="UT">Uttarakhand</option>
         <option value="GA">Goa</option>
         <option value="TR">Tripura</option>
         <option value="PY">Puducherry</option>
         <option value="MN">Manipur</option>
         <option value="HP">Himachal Pradesh</option>
         <option value="NL">Nagaland</option>
         <option value="AR">Arunachal Pradesh</option>
         <option value="AN">Andaman and Nicobar Islands</option>
         <option value="LA">Ladakh</option>
         <option value="CH">Chandigarh</option>
         <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
         <option value="ML">Meghalaya</option>
         <option value="SK">Sikkim</option>
         <option value="MZ">Mizoram</option>
         <option value="LD">Lakshadweep</option>
         <option value="UN">State Unassigned</option>
        </select>
        <FilteredState state={this.state.region} statelist={this.props.statelist}/>
        </div>
      ); 
        return (
            <div className="container">
            {input}
            </div>
        );
    }
}

export default SearchBox;

