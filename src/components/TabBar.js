import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-around;
width: 500px;
margin-bottom: 20px;
margin-left: 25%;
// border: 2px solid black;
`

const Button = styled.button`
text-decoration: none;
border: none;
height: 40px;
color: black;
background-color: cyan;
`

export default function TabBar() {
    return (
        <Container>
            <Link to='/'><Button>Welcome</Button></Link>
            <Link to='/character'><Button>Characters</Button></Link>
            <Link to='/location'><Button>Locations</Button></Link>
        </Container>
    )
};