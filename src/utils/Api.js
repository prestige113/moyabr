import axios from 'axios';
import applicationConfig from './ApplicationConfig';

function fetchJson(url) {
    return axios.get(`${applicationConfig.WEATHER_URL}${url}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            if (axios.isCancel(error)) {
                throw error;
            } else {
                const {message, response} = error;
                if (response.status === 401) {
                    const {error, error_description} = response.data;
                    return Promise.reject({message, detail: `${error} ${error_description}`, status: 401});
                }
                const {detail, status} = response.data;
                return Promise.reject({message, detail, status});
            }
        });
}

function filterCity(city) {
    return fetchJson(`/search?query=${city}`);
}

function getWeather(city) {
    return fetchJson(`/weather?query=${city}`);
}

export default {
    filterCity,
    getWeather
};