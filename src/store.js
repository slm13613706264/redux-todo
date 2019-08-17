import {createStore} from 'redux';
import counter from './reducers/counter';
import todos from './reducers/todos';
import combineReducers from './combineReducers'
let reducer = combineReducers({
    counter,
    todos
})

let store = createStore(reducer)
// {counter: {list: []}, todos: {number: 0}}
export default store
