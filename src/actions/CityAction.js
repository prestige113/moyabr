import {filterCity} from "../utils/filterCity";

const FOUND_CITY = 'FOUND_CITY';


export const searchCity = (value) => dispatch => {
    return dispatch(foundCity(filterCity(value)))
};

const foundCity = (payload) => ({
    type: FOUND_CITY,
    payload: payload
});

export const ActionsTypes = {
    FOUND_CITY
}

export const ActionCreators = {
    searchCity
};
