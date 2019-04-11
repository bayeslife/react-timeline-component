import React, { Fragment } from 'react';


const TimelineComponent =  ({ start, end, incrementStartYear, decrementStartYear ,incrementStartMonth,decrementStartMonth, }) => {  
  return <Fragment>
    <button onClick={incrementStartYear}>+</button>
    <button onClick={incrementStartMonth}>-</button>
    <span className="start-year">{start.getFullYear()}</span>-<span className="start-month">{start.getMonth()}</span>

    <span className="end-year">{end.getFullYear()}</span>-<span className="end-month">{end.getMonth()}</span>
    <button onClick={decrementStartYear}>+</button>
    <button onClick={decrementStartMonth}>-</button>
  </Fragment>
} 
  

export default TimelineComponent
