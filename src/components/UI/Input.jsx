/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import React, { useRef, useImperativeHandle } from 'react';

const Input = React.forwardRef(
  ({ isValid, id, label, type, value, onChange, placeholder }, ref) => {
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
            : 'border border-gray-400 bg-white rounded-xl'
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-white text-black h-14 px-5 rounded-xl font-montserrat font-normal placeholder:text-gray-300 text-sm focus:ring-blue focus:ring-1 "
        />
      </div>
    );
  }
);

export default Input;
