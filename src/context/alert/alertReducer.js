import { SET_ALERT } from '../types';

const alertReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_ALERT:
            return { ...state, type: payload.type, msg: payload.msg };

        default:
            return { ...state };
    }
};

export default alertReducer;
