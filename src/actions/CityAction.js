import {createMonitoringRandom, filterCity} from '../utils/filterCity';

const FOUND_CITY = 'FOUND_CITY';
const MONITORING_LOADED = 'MONITORING_LOADED';

export const searchCity = (value) => dispatch => {
    return dispatch(foundCity(filterCity(value)));
};

export const addCityToMonitoring = (value) => dispatch => {

    return dispatch(createMonitoring(createMonitoringRandom(value)));
};

const createMonitoring = (payload) => ({type: MONITORING_LOADED, payload: payload});

const foundCity = (payload) => ({
    type: FOUND_CITY,
    payload: payload
});

export const ActionsTypes = {
    FOUND_CITY,
    MONITORING_LOADED
};

export const ActionCreators = {
    searchCity,
    createMonitoring
};
