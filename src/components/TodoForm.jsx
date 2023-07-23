import { useState } from 'react';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';

const Form = ({ onAddTodo }) => {
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();
    if (userInput.trim().length === 0) {
      setIsValid(false);
    } else {
      if (localStorage.getItem('todoList')) {
        localStorage.setItem(
          'todoList',
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('todoList')),
            {
              id: Math.random(),
              todo: userInput,
              active: false,
            },
          ])
        );
      } else {
        localStorage.setItem(
          'todoList',
          JSON.stringify([
            {
              id: Math.random(),
              todo: userInput,
              active: false,
            },
          ])
        );
      }
      setIsValid(true);
      onAddTodo();
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex justify-between flex-row space-x-4"
    >
      <div className="w-4/5 bg-white">
        <Input
          id="input"
          className="w-full"
          type="text"
          placeholder="add details"
          value={userInput}
          isValid={isValid}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
      <div className="w-1/5">
        <Button
          className="text-center h-14	bg-blue w-full rounded-xl text-white font-montserrat font-semibold"
          type="submit"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default Form;
