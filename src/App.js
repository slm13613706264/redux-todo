// import React from 'react';
import React, { Component } from 'react';
import { createStore } from 'redux';
// 这是action 的类型 增加、减少
const ADDTODO = "ADDTODO";
const DELETETODO = "DELETETODO";
let reducer = (state = { list: [] }, action) => {
  // action有两个属性 text type
  if (action === undefined) return state;
  switch (action.type) {
    case ADDTODO:
      return { list: [...state.list, { text: action.text, id: Date.now() }] }
    // 解构：把数组解构成元素
    case DELETETODO:
      let list = state.list;
      list.map((item, index) => {
        if (item.id === action.id) {
          list.splice(index, 1);
        }
      })
      // 我们的状态具有不变性，每次都要返回一个新的对象
      return { list: [...list] };
    default:
      return state;
      break;
  }
}
let store = createStore(reducer)
export default class App extends Component {
  constructor(props) {
    super(props)
    //getState 初始化时需要从store中取值
    this.state = { list: store.getState().list }
  }
  handleKeydown = (event) => {

    if (event.keyCode === 13) {
      store.dispatch({
        type: ADDTODO,
        text: event.target.value
      })
      // let list = this.state.list;
      // list.push(event.target.value);
      // this.setState({ list });

    }
  }
  deleteTODO = (id) => {
    store.dispatch({
      type: DELETETODO,
      id
    })

  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ list: store.getState().list })
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeydown} />
        <ul>
          {                      
            // item (id,text)
            this.state.list.map(({ id, text }, index) => (
              <li key={index}>
                {text} <button onClick={() => this.deleteTODO(id)}>-</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}