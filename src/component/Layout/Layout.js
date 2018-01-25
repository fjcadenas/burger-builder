import React, {Fragment} from 'react';

import css from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
    <Fragment>
        <Toolbar/>
        <main className={css.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;