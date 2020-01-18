import React from 'react'
import "./AutoComplect.css";
import {TextField} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

export default class AutosuggestionInput extends React.Component {

    state = {
        isOpen: false
    }

    handleInputChange = e => {
        this.props.onChange(e.target.value);
        this.setState({
            isOpen: true
        });
    };
    handleOptionSelect = (index) => {
        this.props.onChange(this.props.options[index]);
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (<div className="Autocomplect">
            <TextField className="textField" value={this.props.value.city} onChange={this.handleInputChange} variant="outlined" />
            <div className="menuItem">
                {this.state.isOpen && <Paper>
                    <List>
                        {this.props.options.map((o, index) => {
                            return (
                                <ListItem key={index} button
                                          onClick={e => this.handleOptionSelect(index)}>
                                    <ListItemText primary={o.city}/>
                                </ListItem>
                            )
                        })}
                    </List>
                </Paper>}
            </div>
        </div>)
    }
}
