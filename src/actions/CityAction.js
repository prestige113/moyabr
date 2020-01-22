import Api from '../utils/Api';

const FOUND_CITY = 'FOUND_CITY';
const REQUEST_CITY = 'REQUEST_CITY';
const MONITORING_LOADED = 'MONITORING_LOADED';
const MONITORING_REQUEST = 'MONITORING_REQUEST';

export const searchCity = (value) => dispatch => {
    dispatch(requestCity());
    return Api.filterCity(value).then(payload => dispatch(foundCity(payload)));
};

export const addCityToMonitoring = (value) => dispatch => {
    dispatch(requestMonitoring())
    return Api.getWeather(value).then(payload => dispatch(createMonitoring(payload)));
};

const createMonitoring = (payload) => ({type: MONITORING_LOADED, payload: payload});

const foundCity = (payload) => ({
    type: FOUND_CITY,
    payload: payload
});
const requestCity = () => ({
    type: REQUEST_CITY
});
const requestMonitoring = () => ({
    type: MONITORING_REQUEST
});

export const ActionsTypes = {
    FOUND_CITY,
    REQUEST_CITY,
    MONITORING_LOADED,
    MONITORING_REQUEST
};

export const ActionCreators = {
    searchCity,
    createMonitoring
};
