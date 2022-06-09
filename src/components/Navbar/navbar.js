import React from "react";
import Account from "./account";
import Search from "./search";
import ListNavBar from "./listNavBar";
import styled from '@emotion/styled';


const Navbar = () => {

    return (
        <Style>
            <Search />
            <ListNavBar />
            <Account /> 
        </Style>
    )
}

const Style = styled.div`
width: 18em; 
`;


export default Navbar;