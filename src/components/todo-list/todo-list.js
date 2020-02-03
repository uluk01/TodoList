import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';
import {Box, Container, Text} from "gestalt";

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

    let elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <Container>
                <Box>
        <Text  key={id}>
            <TodoListItem
                {...itemProps}
                onDeleted = {()=>onDeleted(id)}
                onTogImportant = {()=> onToggleImportant(id)}
                onTogDone ={() => onToggleDone(id)}
            />
        </Text>
            </Box>
            </Container>
        )

    });
       return (
        <Box>
            {elements}
        </Box>
    )

};

export default TodoList;