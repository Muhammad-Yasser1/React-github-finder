import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';
import { SET_ALERT } from '../types';

const AlertState = props => {
    const initialState = {
        type: '',
        msg: ''
    };

    const [state, dispatch] = useReducer(alertReducer, initialState);

    //show alert box for empty search field
    const setAlert = () => {
        dispatch({
            type: SET_ALERT,
            payload: { msg: 'You have to write something', type: 'light' }
        });
        setTimeout(() => {
            dispatch({ type: SET_ALERT, payload: { msg: '', type: '' } });
        }, 3000);
    };

    return (
        <alertContext.Provider
            value={{
                type: state.type,
                msg: state.msg,
                setAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    );
};

export default AlertState;
