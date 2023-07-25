/* eslint-disable react/prop-types */
const Item = ({ item, onChangeStatus, onDelete, canDelete }) => {
  return (
    <li className="flex mb-3 items-center justify-between">
      <div className="inline-flex items-center">
        <input
          type="checkbox"
          id={`item-${item.id}`}
          className="mr-2 w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
          defaultChecked={item.active}
          value={item.id}
          onChange={(e) => onChangeStatus(e.target.value)}
        />
        <label
          htmlFor={`item-${item.id}`}
          className={`w-full font-montserrat text-lg text-black ${
            item.active ? 'line-through' : ''
          }`}
        >
          {item.todo}
        </label>
      </div>
      {canDelete && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          className="cursor-pointer"
          onClick={() => onDelete(item.id)}
        >
          <path
            d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V6C13 4.9 12.1 4 11 4H3C1.9 4 1 4.9 1 6V16ZM4 6H10C10.55 6 11 6.45 11 7V15C11 15.55 10.55 16 10 16H4C3.45 16 3 15.55 3 15V7C3 6.45 3.45 6 4 6ZM10.5 1L9.79 0.29C9.61 0.11 9.35 0 9.09 0H4.91C4.65 0 4.39 0.11 4.21 0.29L3.5 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3H13C13.55 3 14 2.55 14 2C14 1.45 13.55 1 13 1H10.5Z"
            fill="#BDBDBD"
          />
        </svg>
      )}
    </li>
  );
};

export default Item;
