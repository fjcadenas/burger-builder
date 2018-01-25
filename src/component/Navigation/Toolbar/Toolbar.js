import React from 'react';

import css from './Toolbar.css'
import Logo from "../../Logo/Logo";


const toolbar = (props) => (
    <header className={css.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;