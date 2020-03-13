import React from 'react';
import DrawStyle from './SideDrawer.module.scss'

const SideDrawer = props => (
    <nav className={DrawStyle.SideDrawer}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">product</a></li>
        </ul>
    </nav>

);

export default SideDrawer;