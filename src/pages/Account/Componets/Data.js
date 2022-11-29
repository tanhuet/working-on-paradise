import React from 'react';
import classes from './Data.module.scss';

const Data = (props) => {
        return <div className={`${classes.data} ${props.isActive ? classes.isActive : ""} ${props.className}`}>{props.children}</div>;
}

export default Data