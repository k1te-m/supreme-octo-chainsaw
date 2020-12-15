import React from "react";
import styled from "styled-components";


const NavButton = ({ navOn, children }) => {
    return (
        <React.Fragment>
            <Button className="navToggle" type="button">
                <i className="fas fa-bars" />
            </Button>
        </React.Fragment>
    )
}

const Button = styled.button`
float: right;
font-size: 3rem;
width: 75px;
background: #45B08C;
border: none;
color: #1ADED7;`


export default NavButton;