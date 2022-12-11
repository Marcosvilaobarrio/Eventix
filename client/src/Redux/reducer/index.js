import { GET_ALL_EVENTS, ERROR, ORDER_BY_NAME, FILTER_BY_DATE, GET_EVENT_ID } from "../actions";


const initialState = {
    events : [],
    eventsToFilter:[],
    error : {}
};


function rootReducer (state = initialState, action) {

    switch (action.type) {

        case GET_ALL_EVENTS:
            
            return {
                ...state,
                events: action.payload,
                eventsToFilter: action.payload
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
        case GET_EVENT_ID:
            return{
                ...state,
                events: action.payload
            }
        default:
            
            return {
                ...state
            }
    };
};

export default rootReducer;