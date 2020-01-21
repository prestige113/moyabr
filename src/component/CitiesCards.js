import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';

export default class CitiesCards extends React.Component {

    cardItem = (city) => {
        console.log(city);
        return (
            <div key={city.cityName}>
                <Typography variant="h1">
                    {city.cityName}
                </Typography>
            </div>

        );
    };

    render() {
        console.log(this.props.cities);
        return (
            <div className="cities-cards">
                {this.props.cities.map(c => {
                    return this.cardItem(c);
                })}
            </div>
        );
    }
}