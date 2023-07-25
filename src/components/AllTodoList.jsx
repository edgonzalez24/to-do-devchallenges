import TodoForm from '@/components/TodoForm';
import List from '@/components/UI/List';
import { useState } from 'react';

const AllTodoList = () => {
  const [todos, setTodos] = useState(localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []);
  
  const onAddTodo = () => {
    setTodos(
      localStorage.getItem('todoList')
        ? JSON.parse(localStorage.getItem('todoList'))
        : []
    );
  }
  const onChangeStatus = (idTodo) => {
    const todosLocalStorage = JSON.parse(localStorage.getItem('todoList'));
    const filteredTodo = todosLocalStorage.map((todo) => {
      if (todo.id === parseFloat(idTodo)) {
        return {
          ...todo,
          active: !todo.active,
        };
      }
      return todo;
    });
    localStorage.setItem('todoList',JSON.stringify(filteredTodo));
    setTodos(JSON.parse(localStorage.getItem('todoList')));
  }

  return (
    <>
      <TodoForm onAddTodo={onAddTodo} />
      <List items={todos} onChangeStatus={onChangeStatus} />
    </>
  );
}

export default AllTodoList;
