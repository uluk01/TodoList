import React from 'react';
import './app-header.css'
import {Box, Heading, Text} from "gestalt";


const AppHeader = ({todoActive, todoDone}) => {
    return (

        <Box
            display={"flex"}
            justifyContent={"around"}
            alignItems={"center"}
            padding={5 | 0}
        >
            <Heading color={'white'}
                     size={"sm"}
                     weight={"bold"}
                     align={"center"}
            >
                To Todo List</Heading>

            <Text
                color={'white'}
                size={'xl'}
                weight={"bold"}
            >
                {todoActive} active : {todoDone} done
            </Text>
        </Box>

    )
};

export default AppHeader;