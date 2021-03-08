import { createAction } from '@reduxjs/toolkit';

/*
  redux original
  
  액션타입
  const ADD = "ADD";
  액션 생성함수
  const addToDo = text => {
    return {
      type: ADD,
      text
    }
  }
*/

// redux toolkit
const clearToDo = createAction("CLEAR");
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

export const actionCreators = {
  clearToDo,
  addToDo,
  deleteToDo
}