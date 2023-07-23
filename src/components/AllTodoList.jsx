import TodoForm from '@/components/TodoForm';
import List from '@/components/UI/List';
import { useEffect, useState } from 'react';

const AllTodoList = () => {
  const [todo, setTodo] = useState(localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []);
  
  const onAddTodo = () => {
    setTodo(
      localStorage.getItem('todoList')
        ? JSON.parse(localStorage.getItem('todoList'))
        : []
    );
  }

  return (
    <>
      <TodoForm onAddTodo={onAddTodo} />
      <List items={todo} />
    </>
  );
}

export default AllTodoList;
