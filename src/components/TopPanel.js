import { Link } from 'react-router-dom';
import React from 'react';

import { 
    BrowserRouter, 
    Routes, 
    Route,
  } from 'react-router-dom';

import { ContentPanel, ContactPanel } from './components/Pages';
import MainPanel from './components/MainPanel';

function TopPanel(){
    return(
        <div class="top_panel">
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<MainPanel/>} />
                <Route path="content" element={<ContentPanel />} />
                <Route path="contact" element={<ContactPanel />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default TopPanel;