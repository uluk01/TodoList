import React, {Component} from "react";
import './item-add.css'
import {Box} from "gestalt";

class ItemAdd extends Component {
    state = {
        value: ''
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.value);
        this.setState({value: ' '})
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <Box display={"flex"} justifyContent={"center"}>
                <form onSubmit={this.handleSubmit} className={'submit'}>
                    <input
                        id="text"
                        onChange={this.handleChange}
                        placeholder="write your todos"
                        value={this.state.value}
                        type="text"
                        className={'addButton'}
                    />
                    <button className={'addButton'}> Add todo</button>

                </form>
            </Box>
        )
    }
}

export default ItemAdd