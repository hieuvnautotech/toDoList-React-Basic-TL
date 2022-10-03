import React, { Fragment, useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const [toDoState, setToDoState] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        // console.log(res.data)
        setToDoState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTodos();
  }, []); // them vào array trống vì khi thao tác frontend sẽ useEffect dẫn đến show ra status cũ

  const markComplete = (id) => {
    const newTodos = toDoState.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setToDoState(newTodos);
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const newTodos = toDoState.filter((todo) => todo.id !== id);
      setToDoState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addTodo = async (title) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          completed: false,
        }
      );
      //do BE tự truyền id nên ko cần truyền id từ grid nữa
      console.log(res.data);
      const newTodos = [...toDoState, res.data];
      setToDoState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <AddTodo addTodoFunc={addTodo} />

      {toDoState.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todoProps={todo}
            markCompleteFunc={markComplete}
            deleteTodoFunc={deleteTodo}
          />
        );
      })}
    </Fragment>
  );
};

export default Todos;
