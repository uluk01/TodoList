import React, {Component} from 'react';
import {Box} from "gestalt";
import "./item-filter.css"


class ItemFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    type={"button"}
                    className={`btn ${clazz}`}
                    onClick={()=> onFilterChange(name)}
                >
                    {label}
                </button>
            )
        });

        return (
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"between"}
            >
                {buttons}
            </Box>
        )
    }
};


export default ItemFilter;