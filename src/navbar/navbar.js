import React from 'react';
import {Link } from 'react-router-dom';
import style from './style.module.scss';
import DrawerToggledButton from '../SideDrawer/DrawerToggledButton.js'

function Navbar () {
    return(
        <header className={style.toolBar}>
            <nav className={style.toolBarNav}>
                <div>
                    <DrawerToggledButton />
                </div>
                <div className={style.toolBarLogo}>
                    <a href="/">This a Logo</a>
                </div>
                <div className={style.spacer} />
                <div className={style.toolBarItems}>
                    <ul>
                        <li>
                            <Link to="/" className={style.toolBarRef}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className={style.toolBarRef}>
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={style.toolBarRef}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className={style.toolBarRef}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;