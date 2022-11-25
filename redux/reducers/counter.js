import * as types from '../types';

// COUNTER REDUCER
const initialState = {
    count: 0
};

const counterReducer = (state = initialState, { type }) => {
    switch (type)
    {
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };

        case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };

        case types.RESET:
            return {
                ...state,
                count: 0
            };

        default:
            return state;
    }
    return state;
}

export default counterReducer;
