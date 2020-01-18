import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AutosuggestionInput from "./component/Autocomplect";
import {city} from './utils/russia';
import './App.css';
import {searchCity} from './actions/CityAction'
import Add from "@material-ui/icons/Add";
import CitiesCards from "./component/CitiesCards";

class App extends React.Component {
    state = {
        valueCity: city[0],
    };
    handleChangeCity = (value) => {
        this.props.searchCity(value);
        this.setState({
            valueCity: value
        })
    };
    AddCity = () => {
        return (
            <div className="button--add">
                <Add/>
            </div>
        )
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <AutosuggestionInput value={this.state.valueCity} options={this.props.cities}
                                         onChange={this.handleChangeCity}/>
                    {this.AddCity()}
                </div>
                <CitiesCards cities={this.props.selected}/>
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        cities: state.city.cities,
        selected: state.city.cities
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchCity}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

