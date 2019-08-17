import {ADDTODO,DELETETODO} from '../actions';
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
export default reducer;  