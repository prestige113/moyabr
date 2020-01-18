import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';

export default class CitiesCards extends React.Component {


    cardItem = (city) => {
        return (
            <div>
                <Typography variant="h1">
                    {city.city}
                </Typography>
            </div>

        )
    };

    render() {
        return (
            <div className="cities-cards">
                {this.props.cities.map(c => {
                    return this.cardItem(c)
                })}
            </div>
        )
    }
}