import React from 'react';
import { connect } from 'react-redux';

function Detail({toDo}) {
  console.log(toDo);
  return <>
    <h1>{toDo?.text}</h1>
    <h5>Created at: {toDo?.id}</h5>
  </>
}

function mapStateToProps(state, ownProps){
  const {todoList} = state;
  const {
    match: {
      params:{id}
    }
  } = ownProps;
  console.log('@@',state);
  return { toDo: todoList.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps) (Detail);