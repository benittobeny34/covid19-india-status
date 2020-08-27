import React from 'react';

const Day = ({ stats }) => {
    return (
        <div className="describe">
         <h2>{stats.date}</h2>
         <p>Daily confirmed:{stats.dailyconfirmed}</p>
         <p>Daily deceased:{stats.dailydeceased}</p>
         <p>Daily recovered:{stats.dailyrecovered}</p>
         <p>Total confirmed:{stats.totalconfirmed}</p>
         <p>Total deceased:{stats.totaldeceased}</p>
         <p>Total recovered:{stats.totalrecovered}</p>
        </div>
    );
};



export default Day;
