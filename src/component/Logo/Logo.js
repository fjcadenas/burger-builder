import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import css from './Logo.css';

const logo = (props) => (
    <div className={css.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;