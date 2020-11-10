import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    let display=" "
    if(items.length)
    {
      display=(
        <div> {items.map(item => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        );
      })}
      <button type="button"
      className="btn btn-danger btn-block text-uppercase mt-5"
      onClick={clearList}> clear list</button>
     </div>
      )
    }
    return (
      <ul className="list-group my-5">
        {items.length ?
        <h3 className="text-capitalize text-center">todo list</h3>: null}
        {display}
       
      </ul>
    );
  }
}
