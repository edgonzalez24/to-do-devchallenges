/* eslint-disable react/prop-types */
import Item from '@/components/UI/Item';


const List = ({ items, onChangeStatus, canDelete, onDelete }) => {
  return (
    <ul className="mt-5">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onChangeStatus={onChangeStatus}
          canDelete={canDelete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default List;
