import React, {Component} from 'react';
import {Box} from "gestalt";
// import {Icon} from "gestalt";
import "./todo-list-item.css"

class TodoListItem extends Component {
    render() {
        const {label,onDeleted, done, important, onTogImportant, onTogDone} = this.props;
        let className = 'todo-list-item';
        if (done) {
            className = className + ' done';
        }
        if (important) {
            className = className + ' important'
        }

        return (

            <Box display={"flex"}
                 height={40}
                 shape={"rounded"}
                 color={"white"}
                 marginTop={2}
                 marginBottom={2}
                 justifyContent={"between"}
                 alignItems={"center"}
                 paddingX={5}>
                <span
                    className={className}
                    onClick={onTogDone}
                >{label}</span>
                <Box marginLeft={5}
                     display={"flex"}
                >
                    <Box marginRight={3}>
                        <button onClick={onTogImportant}>Important</button>
                        {/*<Icon icon="edit" accessibilityLabel="Pin" color={"navy"}/>*/}
                    </Box>
                    <Box>
                        <button onClick={onDeleted}
                        >Deleted
                        </button>
                        {/*<Icon icon="trash-can" accessibilityLabel="Pin" color={"navy"}/>*/}
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default TodoListItem;