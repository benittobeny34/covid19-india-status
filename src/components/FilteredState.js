import React from 'react';

const FilteredState = ({ state,statelist }) => {

    let matchedState = statelist.map(eachState => {
      if(eachState.statecode === state){
        return (
          <div className="describe" key={eachState.statecode}>
           <h2>{eachState.state}</h2>
           <p>Active:{eachState.active}</p>
           <p>Confirmed:{eachState.confirmed}</p>
           <p>Deaths:{eachState.deaths}</p>
           <p>Recovered:{eachState.recovered}</p>
           <p>notes:{eachState.statenotes?eachState.statenotes:"none"}</p>
           <p>lastupdated:{eachState.lastupdatedtime.substring(0,20)}</p>    
        </div>
          );
      }
     return null;
    })
    
    return (

      <div>
        {matchedState}
        <hr></hr>
      </div>  
    );
};



export default FilteredState;
