import {ActionsTypes} from './../actions/CityAction';

const initialState = {
    cities: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionsTypes.FOUND_CITY: {
            return {...state, cities: action.payload}
        }
        default:
            return state;
    }
}