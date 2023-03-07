import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Search />
        <Category />

        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
