/* eslint-disable react/prop-types */
import React from 'react';

const Item = ({ item }) => {
  return (
    <li className='flex mb-3'>
      {item.todo}
    </li>
  );
}

export default Item;
