import {ActionsTypes} from './../actions/CityAction';

const initialState = {
    cities: [],
    selectCities: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionsTypes.FOUND_CITY: {
            return {...state, cities: action.payload};
        }
        case ActionsTypes.MONITORING_LOADED: {
            return {
                ...state, selectCities: [...state.selectCities.filter(c => c.cityName !== action.payload.cityName),
                    action.payload
                ]
            };
        }
        default:
            return state;
    }
}