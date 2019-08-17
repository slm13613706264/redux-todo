// {
//     counter: counter,
//     todos: todos
// }
const combineReducers = (reducers) => (state = {}, action) => {
    console.log(11111111111111111, state, action);
    
    let newState = {};
    for(var key in reducers) {
        newState[key] = reducers[key](state[key], action)
    }
    return newState;
}

export default combineReducers