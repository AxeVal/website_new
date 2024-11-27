import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <ul>
                <li className={location.pathname === '/description' ? 'highlight active' : 'highlight'}>
                    <Link to="/description">Home</Link>
                </li>
                <li className={location.pathname === '/introduction' ? 'highlight active' : 'highlight'}>
                    <Link to="/introduction">More</Link>
                </li>
                <li className={location.pathname === '/conclusion' ? 'highlight active' : 'highlight'}>
                    <Link to="/conclusion">RoadMap</Link>
                </li>
                <li className={location.pathname === '/posts' ? 'highlight active' : 'highlight'}>
                    <Link to="/posts">Posts</Link>
                </li>
                <li className={location.pathname === '/api' ? 'highlight active' : 'highlight'}>
                    <Link to="/api">API</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
