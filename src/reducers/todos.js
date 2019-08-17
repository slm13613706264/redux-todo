import {INCREASE, DECREASE}  from '../actions';

let reducer = (state = { number: 0 }, action) => {
      

    if (action === undefined) return state;
    switch (action.type) {
        case INCREASE:
            return { number: state.number + action.amount }
        case DECREASE:
            return { number: state.number - action.amount }
        default:
            return state
            break;
    }
}
export default reducer;  