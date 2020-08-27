import React from 'react';

import '../App.css';

const StateTally = ({stats }) => {
    return (
        <div className="describe">
           <h2>{stats.state}</h2>
           <p>Active:{stats.active}</p>
           <p>Confirmed:{stats.confirmed}</p>
           <p>Deaths:{stats.deaths}</p>
           <p>Recovered:{stats.recovered}</p>
           <p>lastupdated:{stats.lastupdatedtime.substring(0,10)}</p>
           
        </div>
    );
};

export default StateTally;
