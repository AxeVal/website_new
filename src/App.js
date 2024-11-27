import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './style.css';

import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import IntroPanel from './components/IntroPanel';
import ConclusionPanel from './components/ConclusionPanel';
import PostsPanel from './components/PostsPanel';
import ApiPanel from './components/ApiPanel';

function App() {
    return (
        <Router>
            <div>
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MainPanel />} />
                        <Route path="/introduction" element={<IntroPanel />} />
                        <Route path="/description" element={<MainPanel />} />
                        <Route path="/conclusion" element={<ConclusionPanel />} />
                        <Route path="/posts" element={<PostsPanel />} />
                        <Route path="/api" element={<ApiPanel />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
