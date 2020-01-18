import {city} from './russia';

export const filterCity = (value) => {
    return city.filter(c => {
        return c.city.substring(0, value.length) === value
    });
}