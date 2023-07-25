// import { useState } from 'react';
import Tabs from '@/components/UI/Tabs';
import { useState } from 'react';
import AllTodoList from '@/components/AllTodoList';
import ActiveTodoList from '@/components/ActiveTodoList';
import CompletedTodoList from '@/components/CompletedTodoList';

function App() {
  const [ selectedTab, setSelectedTab ] = useState(1)
  const onHandleSelectTab = (id) => {
    setSelectedTab(id)
  };
  return (
    <>
      <main className="min-h-screen">
        <div className="max-w-2xl mx-auto py-12">
          <h1 className="text-4xl text-dark font-bold text-center">#todo</h1>
          <div className="mt-5">
            <Tabs onHandleSelectTab={onHandleSelectTab} />
          </div>
          <div className="mt-5">
            {selectedTab === 1 ? (
              <AllTodoList />
            ) : selectedTab === 2 ? (
              <ActiveTodoList />
            ) : (
              <CompletedTodoList />
            )}
          </div>
        </div>
      </main>
      <footer className="flex justify-center">
        <span className="text-gray-200 text-sm text-center py-5 font-montserrat">
          Created by{' '}
          <a className='font-bold underline' href="https://github.com/edgonzalez24">Edwin González</a> -
          devChallenges.io
        </span>
      </footer>
    </>
  );
}

export default App
