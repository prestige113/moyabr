import {city} from './russia';

export const filterCity = (value) => {
    return city.filter(c => {
        return c.city.substring(0, value.length) === value;
    });
};
export const createMonitoringRandom = (city) => {
    const temperature = (Math.random() * 30) * (Math.random() > 0.5 ? -1 : 1);

    const cityTemperature = {
        temperature: temperature.toFixed(0),
        wind: (Math.random() * 10).toFixed(0),
        pressure: 800 - (Math.random() * 100).toFixed(0),
        type: typesWeather.find(w => w.t1 < temperature && w.t2 >= temperature),
        cityName: city.city
    };
    console.log(cityTemperature);
    return cityTemperature;
};

const typesWeather =
    [
        {
            t1: 5,
            t2: 50,
            type: 'sunshine'
        },
        {
            t1: 0,
            t2: 5,
            type: 'rain'
        },
        {
            t1: -30,
            t2: 0,
            type: 'show'
        }
    ];

