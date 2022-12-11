import { GET_ALL_EVENTS, ERROR, ORDER_BY_NAME, FILTER_BY_DATE, GET_NAME_EVENT } from "../actions";


const initialState = {
    events : [],
    error : {},
};


function rootReducer (state = initialState, action) {

    switch (action.type) {

        case GET_ALL_EVENTS:
            
            return {
                ...state,
                events: action.payload
            }
        case ERROR:

            return {
                ...state,
                error: action.payload
            }
        case ORDER_BY_NAME:

            return {
                ...state,
                events: action.payload
            }
        case FILTER_BY_DATE:

            return {
                ...state,
                events: action.payload
            }
        case GET_NAME_EVENT:
            return {
                ...state,
                events : action.payload
            }
        default:
            
            return {
                ...state
            }
    };
};

export default rootReducer;