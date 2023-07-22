import { useState } from 'react';
import { menuItems } from '@/helpers'

// eslint-disable-next-line react/prop-types
const Tabs = ({onHandleSelectTab}) => {
  const [selectedTab, setSelectedTab ] = useState(1); 

  const handleSelectedTab = (id) => {
    setSelectedTab(id)
    onHandleSelectTab(id)
  }

  return (
    <ul className="w-full border-b border-gray-200 flex justify-between">
      { menuItems.map((item) => {
        return (
          <li className="w-40 text-center" key={item.id}>
            <a
              className={`cursor-pointer w-full px-5 ${
                selectedTab === item.id ? 'border-b-4 border-blue' : ''
              }`}
              onClick={() => handleSelectedTab(item.id)}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Tabs;
