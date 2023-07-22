import React, { useState } from 'react';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';

const AllTodos = () => {
  const [ userInput, setUserInput ] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
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
            onChange={() => setUserInput(event.target.value)}
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
    </>
  );
}

export default AllTodos;
