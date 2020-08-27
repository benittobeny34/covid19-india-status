import React from 'react';

const FilteredDay = ({ day,days }) => {
	let matchedDay = days.map(d => {
		let check = d.date;
		let daymatch  = new Date(day);
		let dt = daymatch.toString();
		let dd = dt.substring(8,10);
		let mm = dt.substring(4,7);

		if((dd+" "+mm)===check.substring(0,6)){
			return <div className="describe" key={d.date}>
         <h2>Date:{d.date}</h2>
         <p>Daily confirmed:{d.dailyconfirmed}</p>
         <p>Daily deceased:{d.dailydeceased}</p>
         <p>Daily recovered:{d.dailyrecovered}</p>
         <p>Total confirmed:{d.totalconfirmed}</p>
         <p>Total deceased:{d.totaldeceased}</p>
         <p>Total recovered:{d.totalrecovered}</p>
        	
      </div>  
		}

	return null;
        
	})
    return (

      <div >
        {matchedDay}
       <hr></hr>
      </div>  
    );
};



export default FilteredDay;
