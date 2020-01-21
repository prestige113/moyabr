import axios from 'axios';
import applicationConfig from './ApplicationConfig'

function fetchJson(url) {
    console.log(applicationConfig)
    return axios.get(`${applicationConfig.WEATHER_URL}${url}`, {headers: {'X-Gismeteo-Token': applicationConfig.WEATHER_TOKEN}})
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

function getWeatherByCities(city) {
    console.log('loaded', city);
    return fetchJson(`query=${city}`);
}

export default {
    getWeatherByCities
}