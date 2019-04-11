import React, { useReducer } from 'react';

import TimelineComponent from './timeline-component';
import { reducer, click } from './timeline-reducer';

const ContainerComponent = () => {
  const [state, dispatch] = useReducer(reducer, reducer());
  return <TimelineComponent
    start={state.start}
    end={state.end}
    incrementStartYear={() => dispatch(click('start-year-increment'))}
    incrementStartMonth={() => dispatch(click('start-month-increment'))}
    decrementStartYear={() => dispatch(click('end-year-decrement'))}
    decrementStartMonth={() => dispatch(click('end-month-decrement'))}
  />
}

export default ContainerComponent
