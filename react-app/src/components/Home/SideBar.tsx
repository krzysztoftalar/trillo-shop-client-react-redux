import React from 'react';
// Imports from src
import NavigationIcons from './NavigationIcons';

const Sidebar = (): JSX.Element => {
    return (
        <aside className="sidebar">
            <div className="sidebar__icons-box">
                <NavigationIcons />
            </div>
        </aside>
    );
};

export default Sidebar;
