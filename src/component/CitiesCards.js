import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import Sun from '../image/sun.png';
import Cloud from '../image/Cloud.png';

export default class CitiesCards extends React.Component {

    cardItem = (city) => {
        console.log(city);
        return (
            <div key={city.cityName} className="card--city--weather">
                <div className="card--city--element--header">
                    <Typography variant="h5">
                        {city.cityName}
                    </Typography>
                    <Close/>
                </div>
                <div className="card--city--element">
                    {city.type.type === 'sunshine' &&
                    <img src={Sun} alt="sun"/>
                    }
                    {city.type.type === 'rain' &&
                    <img src={Cloud} alt="rain"/>
                    }
                    <Typography variant="h4">{city.temperature} °С</Typography>
                </div>
                <div className="card--city--element">
                    <Typography variant="subtitle1">Ветер: {city.wind} м/с</Typography>
                </div>
                <div className="card--city--element">
                    <Typography variant="subtitle1">Давление: {city.pressure} мм</Typography>
                </div>
            </div>

        );
    };

    render() {
        return (
            <div className="cities-cards">
                {this.props.cities.map(c => {
                    return this.cardItem(c);
                })}
            </div>
        );
    }
}