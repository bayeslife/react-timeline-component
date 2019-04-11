import { describe } from 'riteway';
import render from 'riteway/render-component';
import React from 'react';

import TimelineComponent from '../src/timeline-component';

describe('TimelineComponent should render properly', async (assert) => {

  const createComponent = (startDate, endDate, ) =>
    render(<TimelineComponent start={startDate} end={endDate} onClick={()=>({})} />)

    let startDate = new Date('2019-01-01')
    let endDate = new Date('2019-01-01')
    const $ = createComponent(startDate, endDate);
    {
      assert({
        given: 'a timeline component',
        should: 'Should render dates.',
        actual: $('.start-year').html(),
        expected: '2019'
      });
    }
    {
      assert({
        given: 'a timeline component',
        should: 'Should render dates.',
        actual: $('.end-year').html(),
        expected: '2019'
      });
    }
});
