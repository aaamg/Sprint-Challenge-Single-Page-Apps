import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  font-size: 1.5rem;
  color: #003beb;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  margin-bottom: 15px;
  border: 2px solid black;
  `

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  `

export default function CharacterCard(props) {
  //console.log('Props!: ', props)
  return (
    <Div>
    <Contain>
      <img src={props.image}/>
      <p>Name: {props.name}</p>
      <p>Status: {props.status}</p>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
    </Contain>
    </Div>
  );
}
