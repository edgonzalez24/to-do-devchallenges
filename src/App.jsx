// import { useState } from 'react';
import Tabs from '@/components/UI/Tabs';
import { useState } from 'react';
import AllTodoList from '@/components/AllTodoList';

function App() {
  const [ selectedTab, setSelectedTab ] = useState(1)
  const onHandleSelectTab = (id) => {
    setSelectedTab(id)
  };
  return (
    <main>
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-4xl text-dark font-bold text-center">#todo</h1>
        <div className="mt-5">
          <Tabs onHandleSelectTab={onHandleSelectTab} />
        </div>
        <div className="mt-5">{selectedTab === 1 && <AllTodoList />}</div>
      </div>
    </main>
  );
}

export default App
