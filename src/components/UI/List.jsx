/* eslint-disable react/prop-types */
import React from 'react';
import Item from '@/components/UI/Item';


const List = ({items}) => {
  return (
    <ul className='mt-5'>
      { items.map(item => <Item key={item.id} item={item} /> )}
    </ul>
  );
}

export default List;
