import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Ax';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transfrom: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
                display: props.show ? 'block' : 'none'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;