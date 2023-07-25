import List from '@/components/UI/List';
import { useState } from 'react';
import ConfirmModal from '@/components/UI/ConfirmModal';
import Button from '@/components/UI/Button';

const CompletedTodoList = () => {
  const actives = localStorage.getItem('todoList')
    ? JSON.parse(localStorage.getItem('todoList')).filter((todo) => todo.active)
    : [];
  const [todos, setTodos] = useState(actives);
  const [isConfirm, setIsConfirm] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [entireDelete, setEntireDelete] = useState(false);

  const onDelete = (idTodo) => {
    setSelectedTodo(idTodo);
    setIsConfirm(true);
  };
  const onDeleteAll = () => {
    setEntireDelete(true)
    setIsConfirm(true);
  }
  const onHandleDelete = () => {
    const todosLocalStorage = JSON.parse(localStorage.getItem('todoList'));
    if(setEntireDelete) {
      const filteredTodo = todosLocalStorage.filter((todo) => !todo.active);
      localStorage.setItem('todoList', JSON.stringify(filteredTodo));
      setTodos(JSON.parse(localStorage.getItem('todoList')).filter((todo) => todo.active));
      setEntireDelete(false);
    } else {
      const filteredTodo = todosLocalStorage.filter((todo) => todo.id !== parseFloat(selectedTodo));
      localStorage.setItem('todoList', JSON.stringify(filteredTodo));
      setTodos(JSON.parse(localStorage.getItem('todoList')).filter((todo) => todo.active));
    }
    
    setIsConfirm(false);
  };

  return (
    <>
      {isConfirm && (
        <ConfirmModal
          title={
            !entireDelete
              ? 'Are you sure you want to delete this item?'
              : 'Are you sure you want to delete the entire list?'
          }
          message="This action is irreversible and will delete the stored data. You can always add items back later, but any unsaved information will be lost."
          onCloseConfirm={() => setIsConfirm(false)}
          onHandleDelete={onHandleDelete}
        />
      )}
      <List items={todos} onDelete={onDelete} canDelete={true} />
      {todos.length > 0 && (
        <div className="flex justify-end">
          <Button
            className="text-center h-14	bg-red w-auto rounded text-white font-montserrat font-semibold px-5 items-center flex justify-center text-xs"
            onClick={onDeleteAll}
          >
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              viewBox="0 0 14 18"
              fill="none"
            >
              <path
                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V6C13 4.9 12.1 4 11 4H3C1.9 4 1 4.9 1 6V16ZM4 6H10C10.55 6 11 6.45 11 7V15C11 15.55 10.55 16 10 16H4C3.45 16 3 15.55 3 15V7C3 6.45 3.45 6 4 6ZM10.5 1L9.79 0.29C9.61 0.11 9.35 0 9.09 0H4.91C4.65 0 4.39 0.11 4.21 0.29L3.5 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3H13C13.55 3 14 2.55 14 2C14 1.45 13.55 1 13 1H10.5Z"
                fill="#FFF"
              />
            </svg>
            Delete all
          </Button>
        </div>
      )}
    </>
  );
};

export default CompletedTodoList;
