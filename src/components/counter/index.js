// import React from 'react';
import React, { Component } from 'react';
import { createStore } from 'redux';
// 这是action 的类型 增加、减少
import {ADDTODO, DELETETODO} from '../../actions'
import store from "../../store"

export default class App extends Component {
    constructor(props) {
        super(props)
        //getState 初始化时需要从store中取值
        this.state = { list: store.getState().counter.list }
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
            this.setState({ list: store.getState().counter.list })
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