import React from 'react';
import { createStore } from 'redux';
import {INCREASE, DECREASE} from '../../actions'

import reducer from '../../reducers/todos'

// 创建一个store
let store = createStore(reducer);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: store.getState().number
    }
  }

  componentWillMount() {
    //subscribe 订阅通过subscribe来订阅store中的状态Setstate来刷新自己的视图
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().number
      })
    })
  }

  componentWillUnmount() {
    this.unSubscribe()
  }
  render() {
    return (
      <div style={{margin: 20}}>
        <p>{this.state.number}</p>
        <button onClick={() => {
          store.dispatch({
            type: INCREASE,
            amount: 2
          })
        }}>+</button>
        <button onClick={() => {
          store.dispatch({
            type: DECREASE,
            amount: 2
          })
        }}>-</button>
      </div>
    )
  }
}
