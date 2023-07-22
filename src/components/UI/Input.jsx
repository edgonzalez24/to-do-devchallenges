/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import React, { useRef, useImperativeHandle } from 'react';

const Input = React.forwardRef(
  ({ isValid, id, label, type, value, onChange }, ref) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div
        className={`${
          isValid === false
            ? 'border border-red-600 bg-red-200 rounded-xl'
            : 'border border-gray-200 bg-white rounded-xl'
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="w-full bg-white text-black h-14 px-5 rounded-xl"
        />
      </div>
    );
  }
);

export default Input;
