import React from 'react';

import {withRouter} from 'react-router-dom';

const ButtonLink = (props) => {
    const handleClick = e => props.history.push(props.route)
    return (
        <button onClick={handleClick} role={props.role}>

            {props.children}

        </button>
    );
}