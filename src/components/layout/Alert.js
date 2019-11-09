import React, { useContext } from 'react';
import alertContext from '../../context/alert/alertContext';

function Alert() {
    const context = useContext(alertContext);
    return (
        context.type && (
            <div className={`alert alert-${context.type}`}>{context.msg}</div>
        )
    );
}

export default Alert;
