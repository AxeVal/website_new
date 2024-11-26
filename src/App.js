import './App.css';
import React from 'react';
import TopPanel from './components/TopPanel';

import { 
  BrowserRouter, 
  Routes, 
  Route,
} from 'react-router-dom';

import { ContentPanel, ContactPanel } from './components/Pages';
import MainPanel from './components/MainPanel';

const App = () => {
  return (
    <div>
      <TopPanel />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPanel/>} />
          <Route path="content" element={<ContentPanel />} />
          <Route path="contact" element={<ContactPanel />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
