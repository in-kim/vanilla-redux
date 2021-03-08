import React, {useState} from 'react';
import { connect } from 'react-redux';
import {actionCreators} from '../actions/action'
import ToDo from '../components/ToDo'

function Home({toDo, addToDo, clearToDo}) {
  const [text, setText] = useState("");
  function onChange(e){
    setText(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault();
    setText("");
    addToDo(text);
  }
  return <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange}/>
      <button>Add</button>
    </form>
    <button onClick={clearToDo}>초기화</button>
    <ul>
      {toDo?.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}  
    </ul>
  </>
}
function mapStateToProp(state) {
  const {todoList:toDo} = state;
  return {toDo}
}

function mapDispatchToProps(dispatch){
  return {
    addToDo: (text) => {
      dispatch(actionCreators.addToDo(text))
    },
    clearToDo: () => {
      dispatch(actionCreators.clearToDo())
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps) (Home);