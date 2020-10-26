import {REQUEST_PEOPLE, RECEIVED_PEOPLE} from './actionTypes'

const initialState = {
    people:[],
    next:null,
    count:0,
    isLoading:false
};

const peopleReducer = (state = initialState, action ) => {
    switch(action.type){
        case REQUEST_PEOPLE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case RECEIVED_PEOPLE: {

            return {
                ...state,
                ...action.payload,
                people:state.people.concat(action.payload.people)
            }
        }
        default: {
            return state;
        }
    }
}

export default peopleReducer;
