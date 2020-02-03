import React, {Component} from 'react';
import './search-panel.css'
import {Box} from "gestalt";
import "./search-panel.css"

class SearchPanel extends Component {
    handleChange =(event)=> {
        this.props.searchPanel(event.target.value.toLowerCase());
    };

    render() {
        return (
            <Box
                marginBottom={4}
            >
                    <input
                        onChange={this.handleChange.bind(this)}
                        placeholder='Search'
                        type="text"
                        className={'search'}
                    />
            </Box>

        )
    }
}

export default SearchPanel;