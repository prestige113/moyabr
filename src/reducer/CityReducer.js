import {ActionsTypes} from './../actions/CityAction';

const initialState = {
    cities: [],
    status: 'LOADED',
    selectCities: [],
    statusSelect: 'LOADED'
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionsTypes.FOUND_CITY: {
            return {...state, status: 'LOADED', cities: action.payload};
        }
        case ActionsTypes.REQUEST_CITY: {
            return {...state, status: 'REQUEST'};
        }
        case ActionsTypes.MONITORING_REQUEST: {
            return {
                ...state, statusSelect: 'REQUEST'
            };
        }
        case ActionsTypes.MONITORING_LOADED: {
            return {
                ...state, statusSelect: 'LOADED', selectCities: [...state.selectCities.filter(c => c.cityName !== action.payload.cityName),
                    action.payload
                ]
            };
        }
        default:
            return state;
    }
}