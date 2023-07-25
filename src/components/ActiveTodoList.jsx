import TodoForm from '@/components/TodoForm';
import List from '@/components/UI/List';
import { useState } from 'react';

const ActiveTodoList = () => {
    const actives = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')).filter(todo => todo.active) : []
    const [todos, setTodos] = useState(actives);
    
    const onAddTodo = () => {
      setTodos(JSON.parse(localStorage.getItem('todoList')).filter(todo => todo.active));
    };
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
      localStorage.setItem('todoList', JSON.stringify(filteredTodo));
      setTodos(JSON.parse(localStorage.getItem('todoList')).filter(todo => todo.active));
    };
  return (
    <>
      <TodoForm onAddTodo={onAddTodo} isActive={true} />
      <List items={todos} onChangeStatus={onChangeStatus} />
    </>
  );
};

export default ActiveTodoList;
