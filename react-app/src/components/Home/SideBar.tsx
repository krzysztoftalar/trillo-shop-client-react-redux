import React from 'react';
// Imports from src
import NavigationIcons from './NavigationIcons';

const Sidebar = (): JSX.Element => {
    return (
        <div className="sidebar">
            <div className="sidebar__icons-box">
                <NavigationIcons />
            </div>
        </div>
    );
};

export default Sidebar;
