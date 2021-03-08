import { actionCreators } from '../actions/action'
import { createReducer} from '@reduxjs/toolkit'

// redux original version
// const todoList = (state=[], action) => {
//   switch(action.type){
//     case actionCreators.clearToDo.type:
//       return state=[];
//     case actionCreators.addToDo.type :
//       return [{text:action.payload, id:Date.now() }, ...state];
//     case actionCreators.deleteToDo.type :
//       return state.filter(toDo => toDo.id !== action.payload);
//     default :
//       console.log('ddd');
//      return state;
//   }
// };

// redux toolkit에서는 state mutation 가능
const todoList = createReducer([], {
  [actionCreators.clearToDo]: (state, action) => {
    return state=[];
  },
  [actionCreators.addToDo]: (state, action) => {
    // redux toolkit으로 state를 mutation 할 경우 아무것도 return 하지 않는다.
    state.push({text:action.payload, id:Date.now()})
  },
  [actionCreators.deleteToDo]: (state,action) => {
    return state.filter(toDo => toDo.id !== action.payload)
  }
}) 

// redux toolkit createSlice
// const toDos = createSlice({
//   name: "toDosReducer",
//   initialState:[],
//   reducers:{
//     claer: (state) => {
//       return state=[];
//     },
//     add: (state, action) => {
//       state.push({text:action.payload, id:Date.now()})
//     },
//     delete: (state,action) => {
//       return state.filter(toDo => toDo.id !== action.payload)
//     }
//   }
// })

export default todoList