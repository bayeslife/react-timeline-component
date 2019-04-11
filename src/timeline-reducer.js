const startyearincrement='start-year-increment'
const startyeardecrement='start-year-decrement'
const endyearincrement='end-year-increment'
const endmonthdecrement='end-month-decrement'

const click = (datepart) => {
    return {
        type: datepart
    }
}

const initial = { start: new Date('2019-01-01'), end: new Date('2019-02-01') }

const reducer = (state = initial , { type } = {}) => {
    switch (type) {
        case startyearincrement: return state;
        case startyeardecrement: return state;
        case endyearincrement: return state;
        case endmonthdecrement: return state;
        default: return state;
    }
}

export { reducer, click , initial };
