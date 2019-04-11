import { describe } from 'riteway';
import { reducer, click , initial } from '../src/timeline-reducer';

describe('click counter reducer', async assert => {
    {
        assert({
            given: 'no arguments',
            should: 'return the valid initial state',
            actual: reducer(),
            expected: initial
        });
    }
    {
        assert({
            given: 'initial state and a click action',
            should: 'add a click to the count',
            actual: reducer(undefined, click()),
            expected: initial
        });
    }
    {
        assert({
            given: 'a click count and a click action',
            should: 'add a click to the count',
            actual: reducer(initial, click()),
            expected: initial
        });
    }
});